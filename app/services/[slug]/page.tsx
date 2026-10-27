import RelatedServices from "@/components/related-services"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/page-hero"
import PageCallout from "@/components/page-callout"
import { notFound } from "next/navigation"
import { getServiceBySlug, services } from "@/content/services"
import { siteConfig } from "@/content/site"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.subtitle,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "Place", name: "Africa" },
    url: `${siteConfig.url}/services/${service.slug}`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }], current: service.title }}
        title={service.title}
        description={service.subtitle}
      >
        <Button asChild variant="default" size="lg" className="whitespace-normal text-center"><Link href="/contact">
          Discuss This Service
          <ArrowRight size={15} />
        </Link></Button>
      </PageHero>

      <section className="section-space bg-background">
        <div className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-12">
          <div>
            <p className="section-kicker mb-3">What We Offer</p>
            <h2 className="section-heading mb-5">Support tailored to your programme</h2>
            <p className="max-w-2xl leading-relaxed text-text-secondary">{service.description}</p>
            <Link href="/about" className="inline-link mt-5 inline-block text-sm">How our delivery model works</Link>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {service.capabilities.map((capability, index) => (
              <li key={capability} className="grid grid-cols-[2rem_1fr] gap-4 py-5">
                <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-text-muted">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base font-semibold leading-relaxed text-foreground">{capability}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RelatedServices services={relatedServices} kicker="Explore More" title="Related Services" />

      <PageCallout
        eyebrow="Work With Us"
        title="Ready to put this into practice?"
        description="Tell us about your context and we'll design the right support — whether standalone or combined with other services."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="inverse" size="lg"><Link href="/contact">
            Start a Conversation
          </Link></Button>
          <Button asChild variant="inverse-outline" size="lg"><Link href="/focus-areas">
            Explore Focus Areas
          </Link></Button>
        </div>
      </PageCallout>
    </main>
  )
}
