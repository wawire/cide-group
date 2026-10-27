import { editorialImages } from "@/content/imagery"
import PageHero from "@/components/page-hero"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"
import PartnerLogos from "@/components/partner-logos"

export const metadata = {
  title: "Why Partner With CIDE Group",
  description:
    "Partner with CIDE Group for locally grounded programme delivery, research and MEL, with specialist finance, grants and fiduciary support when needed.",
  alternates: { canonical: `${siteConfig.url}/partners` },
  openGraph: {
    title: "Why Partner With CIDE Group",
    description:
      "Partner with CIDE Group for locally grounded programme delivery, research and MEL, with specialist finance, grants and fiduciary support when needed.",
    url: `${siteConfig.url}/partners`,
  },
}

const reasons = [
  {
    title: "Cost-Efficient Delivery",
    description:
      "We prioritise lean systems to ensure a higher proportion of funding reaches beneficiaries, not overhead.",
  },
  {
    title: "Implementation + Advisory Strength",
    description:
      "Unlike traditional consultancies, we combine strategy with execution — ideas translate into measurable results.",
  },
  {
    title: "Scalable Models",
    description:
      "Our programmes support the SDGs and are designed as replicable, adaptable solutions across geographies.",
  },
  {
    title: "Trusted, Data-Driven Approach",
    description:
      "We deliver with transparency, accountability, and evidence at the core of every engagement.",
  },
  {
    title: "Ethical Storytelling & Safeguarding",
    description:
      "Safeguarding, dignified representation, and rights-based communications are embedded across all our work.",
  },
]

const jointOffers = [
  { title: "Programme Finance & Grants", description: "Costed programme design, partner budgets, grant structures and disbursement plans." },
  { title: "Partner Assurance & Capacity", description: "Due diligence, partner risk reviews, corrective-action plans and finance coaching." },
  { title: "Public Financial Management & Fiduciary Controls", description: "Control diagnostics, procurement reviews and audit remediation." },
  { title: "Finance Systems, Data & Reporting", description: "Finance workflows, system requirements, dashboards and implementation readiness." },
  { title: "Bid Financial Architecture", description: "Compliant costing, budget narratives, partner consolidation and value-for-money analysis." },
]

const commitments = [
  "Advancing dignified, rights-based storytelling in development",
  "Embedding safeguarding and ethical communication across all programmes",
  "Ensuring communities are represented with consent, respect, and integrity",
  "Aligning with evolving donor expectations on accountability and ethical practice",
]

const globalPartners = [
  "USAID", "BMZ", "KOICA", "SIDA",
  "European Union", "African Union", "IGAD", "UN Agencies",
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Partners" }}
        title="Built for accountable delivery and long-term partnership"
        description="Implementation strength, lean delivery, and ethical practice — in a single team."
      />

      <PartnerLogos />

      {/* ── Reasons — editorial numbered list with image ───────────────────── */}
      <section className="section-space bg-background">
        <div className="section-shell">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Numbered reasons */}
            <div>
              <p className="section-kicker mb-4">Partnership Value</p>
              <h2 className="section-heading mb-10">Why organisations choose CIDE Group</h2>
              <div className="space-y-0 divide-y divide-border">
                {reasons.map((reason, i) => (
                  <div key={reason.title} className="py-7 grid grid-cols-[48px_1fr] gap-5 group">
                    <span className="text-3xl font-bold text-border group-hover:text-primary transition-colors tabular-nums leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky image + partner strip */}
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src={editorialImages["partners-field"].src}
                  alt={editorialImages["partners-field"].alt}
                  fill
                  className="object-cover object-center"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-hero-background/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-1">Supporting partners including</p>
                  <div className="flex flex-wrap gap-1.5">
                    {globalPartners.map((p) => (
                      <span key={p} className="text-[10px] font-semibold bg-white/15 text-white px-2 py-0.5 rounded-sm backdrop-blur-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-xl bg-hero-background p-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-3">Ready to collaborate?</p>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Bring us a tender, consortium opportunity or programme challenge. We build partnerships where our combined expertise adds value.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wide"
                >
                  Start a Conversation
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ethical commitment — full image strip ─────────────────────────── */}
      <section className="section-space bg-surface-secondary border-y border-border">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="section-kicker mb-4">Specialist Partnership Support</p>
            <h2 className="section-heading mb-5">Connect programme design with financial delivery</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              CIDE leads thematic strategy, research, local delivery, safeguarding, GEDSI and MEL.
              Specialist finance experts lead or co-lead grants, financial controls and systems where the assignment calls for them.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold">
              Discuss a joint opportunity <ArrowRight size={15} />
            </Link>
          </div>
          <div className="divide-y divide-border">
            {jointOffers.map((offer) => (
              <details key={offer.title} className="py-4">
                <summary className="cursor-pointer font-semibold text-foreground rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{offer.title}</summary>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{offer.description}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative h-72 lg:h-auto lg:min-h-120 overflow-hidden">
            <Image
              src={editorialImages["partners-ethics"].src}
              alt={editorialImages["partners-ethics"].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-hero-background/40" />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="font-serif text-2xl md:text-3xl font-semibold text-white leading-snug max-w-xs">
                "Communities represented with consent, respect, and integrity."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-surface-secondary p-10 lg:p-16 flex flex-col justify-center">
            <p className="section-kicker mb-4">Ethical Commitment</p>
            <h2 className="section-heading mb-5">Safeguarding, dignity, and consent are part of the work</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We support dignified, rights-based communication and programme delivery. This commitment aligns with
              evolving donor expectations on accountability and ethical practice, strengthening trust across
              all partnerships.
            </p>
            <div className="space-y-4">
              {commitments.map((item, i) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-primary tabular-nums mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
