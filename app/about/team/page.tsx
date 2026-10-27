import PageHero from "@/components/page-hero"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }], current: "Team" }}
        title="The people behind CIDE Group's advisory work."
        description="An international advisory board, executive secretariat, and senior technical specialists — combining global expertise with deep local knowledge across Africa."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" variant="inverse">
            <Link href="/contact">
              Talk to Our Team
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="inverse-outline"
          >
            <Link href="/focus-areas">Explore Focus Areas</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/68">
          <span>Advisory Board</span>
          <span>Secretariat</span>
          <span>Technical Advisory</span>
        </div>
      </PageHero>

      {/* ── Team grid ────────────────────────────────────────────────────── */}
      <section className="section-space">
        <div className="section-shell">
          <TeamGrid />
        </div>
      </section>

      {/* ── Associate network CTA ────────────────────────────────────────── */}
      <section className="pb-24 pt-4">
        <div className="section-shell">
          <div className="rounded-xl border border-border bg-surface-secondary px-8 py-10 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Associate Network</p>
                <h2 className="section-heading mt-4 text-foreground">
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
