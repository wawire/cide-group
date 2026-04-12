import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { siteConfig, companyProfile } from "@/content/site"

export const metadata = {
  title: "Careers - Join CIDE Group",
  description:
    "Join a pan-African development advisory and implementation team working across research, programme design, MEL, communications, and systems strengthening.",
  alternates: { canonical: `${siteConfig.url}/careers` },
  openGraph: {
    title: "Careers - Join CIDE Group",
    description:
      "Opportunities to work with CIDE Group across Africa in development advisory, research, programme implementation, and communications.",
    url: `${siteConfig.url}/careers`,
  },
}

const whyJoin = [
  {
    num: "01",
    title: "Pan-African reach",
    description:
      "Work on assignments spanning Anglophone, Francophone, and Lusophone Africa — from community-level field delivery to national policy engagement.",
  },
  {
    num: "02",
    title: "Evidence-led practice",
    description:
      "Every engagement is grounded in applied research, rigorous MEL, and learning systems that drive continuous improvement.",
  },
  {
    num: "03",
    title: "Multidisciplinary team",
    description:
      "Collaborate with specialists across climate, education, GEDSI, safeguarding, communications, and programme management.",
  },
  {
    num: "04",
    title: "Locally grounded",
    description:
      "We work closely with communities and national partners — our solutions are shaped by the people closest to the challenges.",
  },
]

const areasOfWork = [
  "Programme Design & Implementation",
  "Research, Evidence & Policy Advisory",
  "Monitoring, Evaluation & Learning",
  "Strategic Communications & Knowledge Management",
  "Gender Equity, Diversity and Social Inclusion (GEDSI)",
  "Climate, Energy & Environment",
  "Agriculture, Food Security & Livelihoods",
  "Child Rights & Safeguarding",
  "ICT & Digital Solutions",
  "Capacity Development",
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image
          src="/hero/communications-mel-filming.png"
          alt="CIDE team working on development and communications programmes"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Careers</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-5 leading-[0.95] max-w-4xl">
            Help build Africa's development future
          </h1>
          <p className="text-xl text-white/75 max-w-2xl leading-relaxed mb-9">
            CIDE Group brings together practitioners, researchers, and communicators serious about locally grounded,
            evidence-driven impact across Africa.
          </p>
          <a
            href={`mailto:${siteConfig.email}?subject=Expression of Interest – CIDE Group`}
            className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
          >
            Send an Expression of Interest
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── Why CIDE — editorial numbered list ────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-kicker mb-4">Why CIDE Group</p>
            <h2 className="text-3xl font-semibold text-foreground leading-tight">
              A team built for serious development work
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Our multidisciplinary team brings extensive experience working in leading international NGOs and
              Government MDAs, supporting USAID, BMZ, KOICA, SIDA, EU, AU, IGAD, and UN Agencies.
            </p>
          </div>
          <div className="divide-y divide-[#e2d9d9]">
            {whyJoin.map(({ num, title, description }) => (
              <div key={num} className="py-7 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-[#ddd0cc] group-hover:text-[#bf2a2c] transition-colors tabular-nums leading-none pt-1 select-none">
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#bf2a2c] transition-colors">
                    {title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas of work + Values — two-col on light bg ──────────────────── */}
      <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
        <div className="section-shell grid lg:grid-cols-2 gap-12 items-start">

          {/* Areas of work */}
          <div>
            <p className="section-kicker mb-4">Areas of Work</p>
            <h2 className="section-heading mb-5">Where we bring in talent</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We engage consultants, associates, and full-time specialists across a broad range of thematic areas —
              professionals who combine subject matter depth with a commitment to community-led solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {areasOfWork.map((area) => (
                <div key={area} className="flex items-start gap-3 rounded-lg border border-[#e2d9d9] bg-white px-4 py-3">
                  <CheckCircle2 size={14} className="text-[#bf2a2c] mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-foreground leading-snug">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <p className="section-kicker mb-4">Our Values</p>
            <h2 className="section-heading mb-5">What we stand for</h2>
            <div className="space-y-4">
              {companyProfile.coreValues.map((value, i) => (
                <div key={value.title} className="grid grid-cols-[32px_1fr] gap-4 items-start">
                  <span className="text-xs font-bold tabular-nums text-[#bf2a2c] pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1 uppercase tracking-wide">{value.title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Expression of Interest — image + content split ────────────────── */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">

          {/* Image side */}
          <div className="relative h-72 lg:h-auto lg:min-h-120 overflow-hidden">
            <Image
              src="/research/community-members-advocacy-training-workshop.jpg"
              alt="CIDE team working with communities across Africa"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1a0808]/50" />
            <div className="absolute inset-0 flex items-end p-10">
              <blockquote className="font-serif text-2xl font-semibold text-white leading-snug max-w-xs">
                "Professionals who combine depth with a commitment to people-centred impact."
              </blockquote>
            </div>
          </div>

          {/* Content side */}
          <div className="bg-[#1a0808] p-10 lg:p-16 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Work With Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">
              We welcome expressions of interest
            </h2>
            <p className="text-white/62 leading-relaxed mb-8">
              Are you a development practitioner, researcher, or communications specialist? We are always interested
              in hearing from talented people who share our commitment to locally grounded, evidence-driven impact.
            </p>
            <p className="text-sm text-white/65 mb-6">
              Share your CV and a brief note on your thematic focus and availability.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Expression of Interest – CIDE Group`}
              className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide self-start"
            >
              {siteConfig.email}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA — rich dark ───────────────────────────────────────────────── */}
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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Looking to Partner?</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Want to collaborate, not join?
          </h2>
          <p className="text-lg text-white/72 leading-relaxed max-w-xl mx-auto mb-10">
            If you are an organisation or institution looking to work with us on development programmes, visit our
            partnerships page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners"
              className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
            >
              Partnership Approach
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
