import { Button } from "@/components/ui/button"
import PageCallout from "@/components/page-callout"
import PageHero from "@/components/page-hero"
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
      <PageHero
        eyebrow="About Us"
        title="Pan-African Development Advisory, Research and Programme Implementation"
        description={siteConfig.narrativeLine}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about/team"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
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
      </PageHero>

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
            <div className="absolute inset-0 bg-hero-background/40" />
            <div className="absolute inset-0 flex items-end p-10">
              <blockquote className="font-serif text-2xl font-semibold text-white leading-snug max-w-xs">
                "Evidence-based, community-led, and built for long-term impact."
              </blockquote>
            </div>
          </div>

          <div className="bg-background p-10 lg:p-16 flex flex-col justify-center">
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
                    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
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
                    className="px-3 py-1 rounded-full bg-white border border-border text-xs font-semibold text-text-secondary"
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
      <section className="section-space bg-hero-background">
        <div className="section-shell">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-4">What Drives Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white max-w-2xl mx-auto leading-tight">
              Vision, Mission and Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-l-2 border-primary pl-6">
              <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Vision</p>
              <p className="text-white/80 leading-relaxed">{companyProfile.vision}</p>
            </div>
            <div className="border-l-2 border-accent-gold pl-6">
              <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Mission</p>
              <p className="text-white/80 leading-relaxed">{companyProfile.mission}</p>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.15em] mb-3">Our Model</p>
              <p className="text-white/80 leading-relaxed">
                We combine advisory depth with implementation capacity — translating strategy into measurable, locally
                grounded results across the full programme cycle.
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-8 text-center">Core Values</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {companyProfile.coreValues.map((value, i) => (
                <div key={value.title} className="rounded-xl border border-white/8 bg-white/4 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold tabular-nums text-accent-gold">
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
      <section className="section-space bg-surface-secondary border-y border-border">
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
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              Talk to our team <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-border">
            {companyProfile.approach.map((step, i) => (
              <div key={step} className="py-5 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-border group-hover:text-primary transition-colors tabular-nums leading-none pt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team CTA — image + dark content ──────────────────────────────── */}
      <section className="section-space bg-background">
        <div className="section-shell">
          <div className="rounded-2xl overflow-hidden grid lg:grid-cols-[1fr_400px]">
            <div className="bg-hero-background p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-4">Our People</p>
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
                  className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
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
              <div className="absolute inset-0 bg-hero-background/25" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — rich dark ───────────────────────────────────────────────── */}
      <PageCallout
        eyebrow="Let's Connect"
        title="Ready to build lasting impact?"
        description="Reach out to discuss programme design, implementation support, research, or strategic collaboration across Africa."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button asChild variant="inverse" size="lg"><Link href="/contact">
            Contact CIDE
          </Link></Button>
          <Button asChild variant="inverse-outline" size="lg"><Link href="/focus-areas">
            Explore Focus Areas
          </Link></Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/55 text-sm">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors font-medium">
            {siteConfig.email}
          </a>
          <span className="hidden sm:block text-white/25" aria-hidden="true">|</span>
          <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white transition-colors font-medium">
            {siteConfig.phone}
          </a>
        </div>
      </PageCallout>
    </main>
  )
}
