import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Megaphone, MapPin } from "lucide-react"
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

  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image src={focusArea.image} alt={focusArea.title} fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <Link
            href="/focus-areas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            All Focus Areas
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Focus Area</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-5 max-w-4xl leading-[0.95]">
            {focusArea.title}
          </h1>
          <p className="text-xl text-white/75 max-w-2xl leading-relaxed mb-9">{focusArea.summary}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
          >
            Work With Us Here
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Overview — two column ─────────────────────────────────────────── */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
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
        <section className="py-20 bg-background">
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
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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
        <section className="py-20 bg-[#1a0808]">
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
                        <p className="text-xs text-white/40 mt-1">In partnership with {campaign.partner}</p>
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
        <section className="py-20 bg-[#fafaf9]">
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
                      className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-white/5 blur-[80px] rounded-full" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Work With Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Need support in this area?
          </h2>
          <p className="text-lg text-white/72 leading-relaxed max-w-xl mx-auto mb-10">
            Let&apos;s design an engagement that fits your context, mandate, and implementation reality.
          </p>
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
        </div>
      </section>
    </main>
  )
}
