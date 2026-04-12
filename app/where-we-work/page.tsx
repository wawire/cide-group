import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react"
import { countryPresences, regions, presenceTypeColors } from "@/content/countries"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Where We Work - CIDE Group",
  description:
    "CIDE Group delivers development advisory, research, and programme implementation across 12+ countries in East Africa, West Africa, the Horn of Africa, and Francophone Africa.",
  alternates: { canonical: `${siteConfig.url}/where-we-work` },
  openGraph: {
    title: "Where We Work - CIDE Group",
    description: "Pan-African presence across 12+ countries — community-rooted delivery from Nairobi.",
    url: `${siteConfig.url}/where-we-work`,
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Where We Work", item: `${siteConfig.url}/where-we-work` },
  ],
}

const totalCountries = countryPresences.length
const activeCount = countryPresences.filter((c) => c.presenceType === "Active Programmes").length
const totalProjects = countryPresences.reduce((sum, c) => sum + c.projectCount, 0)

export default function WhereWeWorkPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image
          src="/research/community-members-advocacy-training-workshop.jpg"
          alt="CIDE Group field work across Africa"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/60 to-[#bf2a2c]/20" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Where We Work</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-5 leading-[0.95] max-w-4xl">
            Pan-African presence, community-rooted delivery
          </h1>
          <p className="text-xl text-white/72 max-w-2xl leading-relaxed mb-9">
            We work across Anglophone, Francophone, and Lusophone Africa — delivering advisory, research, and
            implementation support from Nairobi with genuine local presence in {totalCountries}+ countries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
          >
            Work With Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <section className="bg-[#1a0808] py-10">
        <div className="section-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { value: `${totalCountries}+`, label: "Countries" },
              { value: `${activeCount}`, label: "Active programme countries" },
              { value: `${totalProjects}+`, label: "Projects delivered" },
              { value: `${regions.length}`, label: "Regions covered" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center md:px-8">
                <p className="font-serif text-4xl font-semibold text-white mb-1">{value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Presence legend ───────────────────────────────────────────────── */}
      <section className="py-5 bg-[#f4efec] border-b border-[#e6dcda]">
        <div className="section-shell">
          <div className="flex flex-wrap items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted shrink-0">Presence type</p>
            {(Object.entries(presenceTypeColors) as [keyof typeof presenceTypeColors, typeof presenceTypeColors[keyof typeof presenceTypeColors]][]).map(([type, colors]) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${colors.dot}`} />
                <span className="text-xs font-semibold text-text-secondary">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Countries by region ───────────────────────────────────────────── */}
      {regions.map((region) => {
        const regionCountries = countryPresences.filter((c) => c.region === region)
        if (regionCountries.length === 0) return null
        return (
          <section key={region} className="py-16 border-b border-[#e6dcda] bg-background">
            <div className="section-shell">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-[#e6dcda]" />
                <div className="flex items-center gap-2.5 shrink-0">
                  <MapPin size={14} className="text-[#bf2a2c]" />
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">{region}</h2>
                </div>
                <div className="h-px flex-1 bg-[#e6dcda]" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {regionCountries.map((country) => {
                  const colors = presenceTypeColors[country.presenceType]
                  return (
                    <div
                      key={country.name}
                      className="rounded-xl border border-[#e2d9d9] bg-white p-6 hover:border-[#bf2a2c]/30 hover:shadow-lg hover:shadow-[#bf2a2c]/5 transition-all"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl leading-none" role="img" aria-label={country.name}>
                            {country.flag}
                          </span>
                          <div>
                            <h3 className="text-base font-bold text-foreground">{country.name}</h3>
                            <p className="text-[10px] text-text-muted mt-0.5">{country.region}</p>
                          </div>
                        </div>
                        <span className={`shrink-0 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wide ${colors.badge}`}>
                          {country.presenceType}
                        </span>
                      </div>

                      {/* Highlight */}
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {country.highlight}
                      </p>

                      {/* Sectors */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {country.sectors.map((sector) => (
                          <span
                            key={sector}
                            className="px-2.5 py-0.5 rounded-full bg-[#f4efec] border border-[#e2d9d9] text-[10px] font-semibold text-text-secondary"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>

                      {/* Project count */}
                      <div className="flex items-center gap-1.5 pt-3 border-t border-[#e6dcda]">
                        <CheckCircle2 size={12} className="text-[#bf2a2c] shrink-0" />
                        <p className="text-xs text-text-muted font-semibold">
                          {country.projectCount} project{country.projectCount !== 1 ? "s" : ""} delivered
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      {/* ── Our local advantage ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
        <div className="section-shell grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <p className="section-kicker mb-4">Our Local Advantage</p>
            <h2 className="section-heading mb-5">
              We are not consulting from a distance
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              CIDE Group is headquartered in Nairobi with a team that has lived and worked in the communities we
              serve. Every programme we design is grounded in local knowledge, tested against local realities, and
              implemented by people who understand the context from the inside.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              This is the difference between advice that is technically correct and advice that actually works.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#bf2a2c] hover:text-[#9a1f21] font-semibold transition-colors"
            >
              About CIDE Group <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-[#e2d9d9]">
            {[
              { num: "01", text: "East African headquarters with deep regional networks" },
              { num: "02", text: "Multilingual capacity across English, French, and Swahili" },
              { num: "03", text: "Established relationships with governments, NGOs, and communities" },
              { num: "04", text: "Consortium-ready with a growing associate network across Africa" },
              { num: "05", text: "Understanding of local procurement, compliance, and operational realities" },
            ].map(({ num, text }) => (
              <div key={num} className="py-5 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-[#ddd0cc] group-hover:text-[#bf2a2c] transition-colors tabular-nums leading-none pt-0.5 select-none">
                  {num}
                </span>
                <p className="text-base font-bold text-foreground group-hover:text-[#bf2a2c] transition-colors pt-0.5">
                  {text}
                </p>
              </div>
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
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-white/5 blur-[80px] rounded-full" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Work With Us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Need a partner with real presence on the ground?
          </h2>
          <p className="text-lg text-white/72 leading-relaxed max-w-xl mx-auto mb-10">
            Tell us where you are working and what you need — we will connect you with the right expertise
            and local knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
