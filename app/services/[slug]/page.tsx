import { notFound } from "next/navigation"
import { getServiceBySlug, services } from "@/content/services"
import { siteConfig } from "@/content/site"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image src={service.image} alt={service.title} fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            All Services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Our Services</p>
            <span className="text-white/20">—</span>
            <span className="text-xs font-bold text-white/35 tabular-nums">{String(service.order).padStart(2, "0")}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-5 max-w-4xl leading-[0.95]">
            {service.title}
          </h1>
          <p className="text-xl text-white/75 max-w-2xl leading-relaxed mb-9">{service.subtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
          >
            Discuss This Service
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Overview — two column ─────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <p className="section-kicker mb-4">What We Do</p>
            <h2 className="section-heading mb-6">{service.title}</h2>
            <p className="text-xl text-text-secondary leading-relaxed">{service.description}</p>
          </div>

          {/* Sticky dark sidebar */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl bg-[#1a0808] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">What's Included</p>
              <ul className="space-y-3.5 mb-7">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/72 leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wide w-full"
              >
                Get in Touch
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities — editorial numbered list ────────────────────────── */}
      <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
        <div className="section-shell grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-kicker mb-4">Core Capabilities</p>
            <h2 className="text-3xl font-semibold text-foreground leading-tight">
              How we deliver this service
            </h2>
          </div>
          <div className="divide-y divide-[#e2d9d9]">
            {service.capabilities.map((cap, i) => (
              <div key={cap} className="py-6 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-[#ddd0cc] group-hover:text-[#bf2a2c] transition-colors tabular-nums leading-none pt-1 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold text-foreground group-hover:text-[#bf2a2c] transition-colors leading-snug pt-1">
                  {cap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach pillars — dark strip ─────────────────────────────────── */}
      <section className="py-20 bg-[#1a0808]">
        <div className="section-shell">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Approach</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white max-w-2xl mx-auto leading-tight">
              Community-led, evidence-based, and built for long-term resilience
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Locally grounded",
                desc: "We work alongside local partners and communities from day one, ensuring every solution fits the implementation reality.",
              },
              {
                num: "02",
                title: "Evidence-driven",
                desc: "Research, data, and applied analytics guide how we design, adapt, and evaluate our work to maximise measurable impact.",
              },
              {
                num: "03",
                title: "Built to last",
                desc: "We plan for sustainability and local ownership so that impact — and the systems that sustain it — outlast our engagement.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="border-l-2 border-[#bf2a2c] pl-6">
                <p className="text-[#c9a84c] text-xs font-bold tabular-nums mb-3">{num}</p>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/48 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ─────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-kicker mb-3">Explore More</p>
              <h2 className="text-3xl font-semibold text-foreground">Related Services</h2>
            </div>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#bf2a2c] hover:text-[#9a1f21] transition-colors"
            >
              All Services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedServices.map((rel) => (
              <Link key={rel.id} href={`/services/${rel.slug}`} className="group block">
                <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">
                    {String(rel.order).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-[#bf2a2c] transition-colors mb-1.5 leading-snug">
                  {rel.shortTitle}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{rel.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #bf2a2c 0%, #9a1f21 50%, #1a0808 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Work With Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Ready to put this into practice?
          </h2>
          <p className="text-lg text-white/72 leading-relaxed max-w-xl mx-auto mb-10">
            Tell us about your context and we&apos;ll design the right support — whether standalone or combined with
            other services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/focus-areas"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
            >
              Explore Focus Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
