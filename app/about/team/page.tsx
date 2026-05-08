import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/content/site"
import TeamGrid from "@/components/team-grid"

export const metadata = {
  title: "Our Team - CIDE Group Leadership & Technical Advisors",
  description:
    "Meet the CIDE Group team: international advisory board, secretariat, and technical advisory specialists driving development impact across Africa.",
  alternates: { canonical: `${siteConfig.url}/about/team` },
  openGraph: {
    title: "Our Team - CIDE Group Leadership & Technical Advisors",
    description:
      "Meet the CIDE Group team: international advisory board, secretariat, and technical advisory specialists driving development impact across Africa.",
    url: `${siteConfig.url}/about/team`,
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#140909]">
        <Image
          src="/about/cide-boardroom-strategy.png"
          alt="CIDE Group advisory team in a strategy session"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,9,9,0.94)_0%,rgba(20,9,9,0.86)_45%,rgba(191,42,44,0.28)_100%)]" />

        <div className="relative z-10 section-shell py-24 md:py-32">
          <div className="max-w-5xl">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 mb-7 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Back to About
            </Link>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Team</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-5xl leading-[0.98]">
              The people behind CIDE Group&apos;s advisory work.
            </h1>
            <p className="text-xl text-white/78 max-w-3xl leading-relaxed mb-8">
              An international advisory board, executive secretariat, and senior technical specialists — combining
              global expertise with deep local knowledge across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92">
                <Link href="/contact">
                  Talk to Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/6 text-white hover:bg-white/12 hover:text-white"
              >
                <Link href="/focus-areas">Explore Focus Areas</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/68">
              <span>Advisory Board</span>
              <span>Secretariat</span>
              <span>Technical Advisory</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team grid ────────────────────────────────────────────────────── */}
      <section className="py-18 md:py-24">
        <div className="section-shell">
          <TeamGrid />
        </div>
      </section>

      {/* ── Associate network CTA ────────────────────────────────────────── */}
      <section className="pb-24 pt-4">
        <div className="section-shell">
          <div className="rounded-xl border border-border bg-[#f6f0ec] px-8 py-10 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Associate Network</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Additional sector and country depth when the assignment calls for it.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                  Beyond the core team, CIDE works with a wider network of associates and collaborators across Africa.
                  That gives each mandate the right combination of local context, specialist expertise, and delivery
                  capacity without forcing a generic structure onto the work.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
