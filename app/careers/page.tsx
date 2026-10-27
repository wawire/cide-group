import { editorialImages } from "@/content/imagery"
import { Button } from "@/components/ui/button"
import PageCallout from "@/components/page-callout"
import PageHero from "@/components/page-hero"
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
  "Gender Equality, Disability and Social Inclusion (GEDSI)",
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
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Careers" }}
        title="Help build Africa's development future"
        description="CIDE Group brings together practitioners, researchers, and communicators serious about locally grounded, evidence-driven impact across Africa."
      >
        <a
          href={`mailto:${siteConfig.email}?subject=Expression of Interest – CIDE Group`}
          className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
        >
          Send an Expression of Interest
          <ArrowRight size={15} />
        </a>
      </PageHero>

      {/* ── Why CIDE — editorial numbered list ────────────────────────────── */}
      <section className="section-space bg-background">
        <div className="section-shell grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-kicker mb-4">Why CIDE Group</p>
            <h2 className="section-heading text-foreground">
              A team built for serious development work
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Our multidisciplinary team brings extensive experience working in leading international NGOs and
              Government MDAs, supporting USAID, BMZ, KOICA, SIDA, EU, AU, IGAD, and UN Agencies.
            </p>
          </div>
          <div className="divide-y divide-border">
            {whyJoin.map(({ num, title, description }) => (
              <div key={num} className="py-7 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-border group-hover:text-primary transition-colors tabular-nums leading-none pt-1 select-none">
                  {num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
      <section className="section-space bg-surface-secondary border-y border-border">
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
                <div key={area} className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
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
                  <span className="text-xs font-bold tabular-nums text-primary pt-0.5">
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
              src={editorialImages["careers-team"].src}
              alt={editorialImages["careers-team"].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-hero-background/50" />
            <div className="absolute inset-0 flex items-end p-10">
              <blockquote className="font-serif text-2xl font-semibold text-white leading-snug max-w-xs">
                "Professionals who combine depth with a commitment to people-centred impact."
              </blockquote>
            </div>
          </div>

          {/* Content side */}
          <div className="bg-hero-background p-10 lg:p-16 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold mb-4">Work With Us</p>
            <h2 className="section-heading font-serif text-white mb-5">
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
              className="inline-flex max-w-full items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-semibold px-5 py-3 rounded-lg text-sm self-start"
            >
              <span className="min-w-0 break-all">{siteConfig.email}</span>
              <ArrowRight size={15} className="shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA — rich dark ───────────────────────────────────────────────── */}
      <PageCallout
        eyebrow="Looking to Partner?"
        title="Want to collaborate, not join?"
        description="If you are an organisation or institution looking to work with us on development programmes, visit our partnerships page."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="inverse" size="lg"><Link href="/partners">
            Partnership Approach
          </Link></Button>
          <Button asChild variant="inverse-outline" size="lg"><Link href="/contact">
            Get in Touch
          </Link></Button>
        </div>
      </PageCallout>
    </main>
  )
}
