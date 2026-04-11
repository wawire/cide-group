import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Why Partner With CIDE Group",
  description:
    "Why partners work with CIDE Group: cost-efficient delivery, implementation strength, scalable models, evidence, and ethical practice.",
  alternates: { canonical: `${siteConfig.url}/partners` },
  openGraph: {
    title: "Why Partner With CIDE Group",
    description:
      "Why partners work with CIDE Group: cost-efficient delivery, implementation strength, scalable models, evidence, and ethical practice.",
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/projects/advocacy-training-workshop.jpg"
          alt="Partnership and stakeholder engagement"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/50 to-[#bf2a2c]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Why Partner With Us</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-[0.95]">
            Built for accountable delivery and long-term partnership
          </h1>
          <p className="text-xl text-white/75 max-w-2xl leading-relaxed">
            Implementation strength, lean delivery, and ethical practice — in a single team.
          </p>
        </div>
      </section>

      {/* ── Reasons — editorial numbered list with image ───────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Numbered reasons */}
            <div>
              <p className="section-kicker mb-4">Partnership Value</p>
              <h2 className="section-heading mb-10">Why organisations choose CIDE Group</h2>
              <div className="space-y-0 divide-y divide-[#e2d9d9]">
                {reasons.map((reason, i) => (
                  <div key={reason.title} className="py-7 grid grid-cols-[48px_1fr] gap-5 group">
                    <span className="text-3xl font-bold text-[#e2d9d9] group-hover:text-[#bf2a2c] transition-colors tabular-nums leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#bf2a2c] transition-colors">
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
                  src="/research/community-health-workers-mobile-tablets-rural.jpg"
                  alt="CIDE field team working with partners"
                  fill
                  className="object-cover object-center"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-1">Supporting partners including</p>
                  <div className="flex flex-wrap gap-1.5">
                    {globalPartners.map((p) => (
                      <span key={p} className="text-[10px] font-semibold bg-white/15 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-xl bg-[#1a0808] p-7">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-3">Ready to collaborate?</p>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Reach out to discuss programme design, implementation support, research, or strategic collaboration.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wide"
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
      <section className="py-0">
        <div className="grid lg:grid-cols-2">

          {/* Image */}
          <div className="relative h-72 lg:h-auto lg:min-h-120 overflow-hidden">
            <Image
              src="/hero/gedsi-systems-development.png"
              alt="Ethical storytelling and community representation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1a0808]/40" />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="font-serif text-2xl md:text-3xl font-semibold text-white leading-snug max-w-xs">
                "Communities represented with consent, respect, and integrity."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#f4efec] p-10 lg:p-16 flex flex-col justify-center">
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
                  <span className="text-xs font-bold text-[#bf2a2c] tabular-nums mt-0.5 shrink-0">
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
