import { companyProfile, siteConfig } from "@/content/site"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About CIDE Group - Pan-African Development Advisory and Implementation",
  description:
    "CIDE Group is a pan-African development advisory, research, programme design, and implementation organisation working across Africa.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About CIDE Group - Pan-African Development Advisory and Implementation",
    description:
      "CIDE Group works across Anglophone, Francophone, and Lusophone Africa with community-led, evidence-based solutions.",
    url: `${siteConfig.url}/about`,
  },
}

const stakeholderGroups = [
  "Governments and public institutions",
  "International NGOs and civil society organisations",
  "Bilateral and multilateral development partners",
  "Private sector actors and impact investors",
]

const globalPartners = [
  "USAID", "BMZ", "KOICA", "SIDA", "European Union (EU)",
  "African Union (AU)", "IGAD", "UN Agencies",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image
          src="/research/community-members-advocacy-training-workshop.jpg"
          alt="Pan-African collaboration and community-centred development"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/55 to-[#bf2a2c]/20" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">About Us</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-5 leading-[0.95] max-w-4xl">
            Pan-African Development Advisory, Research and Programme Implementation
          </h1>
          <p className="text-xl text-white/75 max-w-3xl leading-relaxed mb-9">{siteConfig.narrativeLine}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/about/team"
              className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
            >
              Meet the Team <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Are — image + content split ───────────────────────────── */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-72 lg:h-auto lg:min-h-120 overflow-hidden">
            <Image
              src="/about/cide-boardroom-strategy.png"
              alt="CIDE Group strategy and advisory session"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1a0808]/40" />
            <div className="absolute inset-0 flex items-end p-10">
              <blockquote className="font-serif text-2xl font-semibold text-white leading-snug max-w-xs">
                "Evidence-based, community-led, and built for long-term impact."
              </blockquote>
            </div>
          </div>

          <div className="bg-[#faf7f5] p-10 lg:p-16 flex flex-col justify-center">
            <p className="section-kicker mb-4">Who We Are</p>
            <h2 className="section-heading mb-6">About CIDE Group</h2>
            <p className="text-text-secondary leading-relaxed mb-5">
              CIDE Group, registered as <strong className="text-foreground">{siteConfig.legalName}</strong>, is a
              pan-African development advisory, research, programme design, and implementation organisation working
              across Anglophone, Francophone, and Lusophone Africa.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              We operate at the intersection of policy advisory, sustainable development, social innovation, and
              community systems strengthening — ensuring every intervention is grounded in local realities and
              designed for long-term impact.
            </p>

            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-4">We work with</p>
              <div className="space-y-2.5">
                {stakeholderGroups.map((group) => (
                  <div key={group} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[#bf2a2c] mt-0.5 shrink-0" />
                    <p className="text-sm text-text-secondary">{group}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-3">Partners supported</p>
              <div className="flex flex-wrap gap-2">
                {globalPartners.map((partner) => (
                  <span
                    key={partner}
                    className="px-3 py-1 rounded-full bg-white border border-[#e2d9d9] text-xs font-semibold text-text-secondary"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision, Mission, Values — dark strip ─────────────────────────── */}
      <section className="py-20 bg-[#1a0808]">
        <div className="section-shell">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">What Drives Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white max-w-2xl mx-auto leading-tight">
              Vision, Mission and Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-l-2 border-[#bf2a2c] pl-6">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Vision</p>
              <p className="text-white/80 leading-relaxed">{companyProfile.vision}</p>
            </div>
            <div className="border-l-2 border-[#c9a84c] pl-6">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Mission</p>
              <p className="text-white/80 leading-relaxed">{companyProfile.mission}</p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Model</p>
              <p className="text-white/80 leading-relaxed">
                We combine advisory depth with implementation capacity — translating strategy into measurable, locally
                grounded results across the full programme cycle.
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-8 text-center">Core Values</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {companyProfile.coreValues.map((value, i) => (
                <div key={value.title} className="rounded-xl border border-white/8 bg-white/4 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold tabular-nums text-[#c9a84c]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">{value.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our 360° Approach ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
        <div className="section-shell grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <p className="section-kicker mb-4">Our 360° Approach</p>
            <h2 className="section-heading mb-5">
              End-to-end support, from insight to impact
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We believe the most effective development solutions are shaped by the people closest to the challenges.
              Through our integrated 360° approach, we move from generating evidence to designing, implementing,
              and evaluating locally grounded solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#bf2a2c] hover:text-[#9a1f21] font-semibold transition-colors"
            >
              Talk to our team <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-[#e2d9d9]">
            {companyProfile.approach.map((step, i) => (
              <div key={step} className="py-5 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-[#ddd0cc] group-hover:text-[#bf2a2c] transition-colors tabular-nums leading-none pt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-bold text-foreground group-hover:text-[#bf2a2c] transition-colors pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team CTA — image + dark content ──────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="rounded-2xl overflow-hidden grid lg:grid-cols-[1fr_400px]">
            <div className="bg-[#1a0808] p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our People</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">
                The team behind the work
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Senior leadership, technical advisory specialists, and communications experts — combining deep thematic
                knowledge with disciplined, locally grounded delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about/team"
                  className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
                >
                  Meet the Team <ArrowRight size={14} />
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 border border-white/25 text-white hover:bg-white/8 transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
                >
                  Partnership Approach
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src="/about/community-elder-portrait.png"
                alt="CIDE Group community partner"
                fill
                className="object-cover object-center"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-[#1a0808]/25" />
            </div>
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
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Ready to build lasting impact?
          </h2>
          <p className="text-lg text-white/72 leading-relaxed max-w-xl mx-auto mb-10">
            Reach out to discuss programme design, implementation support, research, or strategic collaboration
            across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
            >
              Contact CIDE
            </Link>
            <Link
              href="/focus-areas"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
            >
              Explore Focus Areas
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/55 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors font-medium">
              {siteConfig.email}
            </a>
            <span className="hidden sm:block text-white/25">|</span>
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white transition-colors font-medium">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
