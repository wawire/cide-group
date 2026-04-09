import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getServiceBySlug, services } from "@/content/services"
import { siteConfig } from "@/content/site"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: `${service.title} - CIDE Group`,
    description: service.subtitle,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} - CIDE Group`,
      description: service.subtitle,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.subtitle,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Africa",
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <Image src={service.image} alt={service.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/60 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-36">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Service</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-4 max-w-4xl leading-tight">
            {service.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">{service.subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell">
          <h2 className="text-3xl font-semibold text-foreground mb-4">What We Do</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-3xl">{service.description}</p>
          <ul className="grid md:grid-cols-2 gap-5 list-none p-0">
            {service.capabilities.map((capability) => (
              <li key={capability} className="flex gap-3 rounded-xl border border-border p-5 bg-surface">
                <CheckCircle size={20} className="text-primary mt-1 shrink-0" aria-hidden="true" />
                <span className="text-text-secondary">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Collaborate?</h2>
          <p className="text-lg mb-10 text-white/90">
            Let&apos;s discuss how this service can strengthen your programme and deliver measurable, sustainable impact.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
