import PageHero from "@/components/page-hero"
import { focusAreas } from "@/content/focus-areas"
import Link from "next/link"
import Image from "next/image"
import ContentImage from "@/components/content-image"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Our Integrated Solutions | CIDE Group",
  description:
    "Explore CIDE Group's integrated solutions across climate, education, agriculture, child rights, economic empowerment, and WASH.",
  alternates: { canonical: `${siteConfig.url}/focus-areas` },
  openGraph: {
    title: "Our Integrated Solutions | CIDE Group",
    description:
      "Integrated solutions across climate, education, agriculture, child rights, economic empowerment, and WASH.",
    url: `${siteConfig.url}/focus-areas`,
  },
}

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Integrated Solutions"
        title="Thematic solutions grounded in Africa's realities"
        description="Where policy, systems, communities, and implementation realities come together for lasting impact."
      />

      {/* ── Full-bleed image card grid ────────────────────────────────────── */}
      <section className="section-space bg-background">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <Link key={area.slug} href={`/focus-areas/${area.slug}`} className="group block overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-primary">
              <ContentImage src={area.image} alt={area.title} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" />
              <div className="p-5">
                <h2 className="mb-3 text-xl font-semibold leading-snug group-hover:text-primary">{area.title}</h2>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">{area.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore focus area <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-hero-background py-12">
        <div className="section-shell">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Community-Led", desc: "Communities closest to the challenge at the centre of every decision." },
              { title: "Evidence-Based", desc: "Research, analytics, and learning guide strategy and continuous adaptation." },
              { title: "Built for Scale", desc: "Solutions designed for long-term resilience, replication, and measurable impact." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-primary pl-5">
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="section-space bg-background">
        <div className="section-shell">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/focus-areas/livelihoods-women-farming.png"
              alt="CIDE community development work"
              fill
              sizes="(min-width: 1640px) 1600px, calc(100vw - 2.5rem)"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-hero-background/80" />
            <div className="relative z-10 py-16 px-8 md:px-16 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold mb-4">Work With Us</p>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
                Bring your challenge to us
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                We are ready to design support that fits your context, mandate, and implementation reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide"
              >
                Start a Conversation
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
