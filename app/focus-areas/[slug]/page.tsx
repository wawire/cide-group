import PageHero from "@/components/page-hero"
import HeroBackLink from "@/components/hero-back-link"
import PageCallout from "@/components/page-callout"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Megaphone, MapPin } from "lucide-react"
import { focusAreas, getFocusAreaBySlug, projects, services } from "@/content"
import { siteConfig } from "@/content/site"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const focusArea = getFocusAreaBySlug(slug)
  if (!focusArea) return {}

  return {
    title: `${focusArea.title} - CIDE Group`,
    description: focusArea.summary,
    alternates: { canonical: `${siteConfig.url}/focus-areas/${focusArea.slug}` },
    openGraph: {
      title: `${focusArea.title} - CIDE Group`,
      description: focusArea.summary,
      url: `${siteConfig.url}/focus-areas/${focusArea.slug}`,
    },
  }
}

export default async function FocusAreaDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const focusArea = getFocusAreaBySlug(slug)

  if (!focusArea) notFound()

  const relatedServices = services.filter((s) => focusArea.relatedServiceSlugs.includes(s.slug))
  const featuredProjects = projects.filter((p) => focusArea.featuredProjectIds.includes(p.id))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Focus Areas", item: `${siteConfig.url}/focus-areas` },
      { "@type": "ListItem", position: 3, name: focusArea.title, item: `${siteConfig.url}/focus-areas/${focusArea.slug}` },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumb={<HeroBackLink href="/focus-areas">All Focus Areas</HeroBackLink>}
        eyebrow="Focus Area"
        title={focusArea.title}
        description={focusArea.summary}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
        >
          Work With Us Here
          <ArrowRight size={15} />
        </Link>
      </PageHero>

      {/* ── Overview — two column ─────────────────────────────────────────── */}
      <section className="section-space bg-background">
        <div className="section-shell grid lg:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <p className="section-kicker mb-4">Overview</p>
            <h2 className="section-heading mb-6">How we work in this space</h2>
            <p className="text-xl text-text-secondary leading-relaxed">{focusArea.overview}</p>
          </div>

          {/* Sticky dark outcomes sidebar */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl bg-[#1a0808] p-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-6">Key Outcomes</p>
              <ol className="space-y-5">
                {focusArea.outcomes.map((outcome, i) => (
                  <li key={outcome} className="grid grid-cols-[28px_1fr] gap-3">
                    <span className="text-xs font-bold tabular-nums text-[#c9a84c] pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-white/72 leading-relaxed">{outcome}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-7 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wide w-full"
                >
                  Discuss This Area
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practice Areas — editorial numbered list ──────────────────────── */}
      <section className="section-space bg-[#f4efec] border-y border-[#e6dcda]">
        <div className="section-shell grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-kicker mb-4">Practice Areas</p>
            <h2 className="text-3xl font-semibold text-foreground leading-tight">
              Where we focus our work
            </h2>
          </div>
          <div className="divide-y divide-[#e2d9d9]">
            {focusArea.practiceAreas.map((area, i) => (
              <div key={area} className="py-5 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-[#ddd0cc] group-hover:text-[#bf2a2c] transition-colors tabular-nums leading-none pt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold text-foreground group-hover:text-[#bf2a2c] transition-colors leading-snug pt-0.5">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      {featuredProjects.length > 0 && (
        <section className="section-space bg-background">
          <div className="section-shell">
            <div className="grid lg:grid-cols-2 gap-6 items-end mb-10">
              <div>
                <p className="section-kicker mb-4">Selected Work</p>
                <h2 className="section-heading">Real delivery in this space</h2>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                These projects show how thematic expertise translates into measurable, grounded delivery.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                  <div className="overflow-hidden rounded-xl border border-[#e2d9d9] bg-white hover:border-[#bf2a2c] hover:shadow-2xl hover:shadow-[#bf2a2c]/10 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/70">
                        <MapPin size={11} />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-[#bf2a2c] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#bf2a2c] group-hover:gap-3 transition-all">
                        Read Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Campaigns ────────────────────────────────────────────────────── */}
      {focusArea.campaigns && focusArea.campaigns.length > 0 && (
        <section className="section-space bg-[#1a0808]">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Ongoing Campaigns</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white max-w-2xl leading-tight">
                Advocacy in action
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {focusArea.campaigns.map((campaign) => (
                <div key={campaign.name} className="rounded-xl border border-white/10 bg-white/5 p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#bf2a2c]/20 text-[#c9a84c] shrink-0">
                      <Megaphone size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{campaign.name}</h3>
                      {campaign.partner && (
                        <p className="text-xs text-white/62 mt-1">In partnership with {campaign.partner}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/62 leading-relaxed">{campaign.description}</p>
                  {campaign.url && (
                    <a
                      href={campaign.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-xs font-bold uppercase tracking-wide text-[#c9a84c] hover:text-white transition-colors"
                    >
                      Learn more <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Services ─────────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section className="section-space bg-[#fafaf9]">
          <div className="section-shell">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-kicker mb-3">Capabilities We Combine</p>
                <h2 className="text-3xl font-semibold text-foreground">Services that support this area</h2>
              </div>
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#bf2a2c] hover:text-[#9a1f21] transition-colors"
              >
                All Services <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {relatedServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                  <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">
                      {String(service.order).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-[#bf2a2c] transition-colors mb-1.5 leading-snug">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <PageCallout
        eyebrow="Work With Us"
        title="Need support in this area?"
        description="Let's design an engagement that fits your context, mandate, and implementation reality."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
          >
            Start a Conversation
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
          >
            Explore Our Services
          </Link>
        </div>
      </PageCallout>
    </main>
  )
}
