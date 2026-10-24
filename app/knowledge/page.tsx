import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import KnowledgeCard from "@/components/knowledge-card"
import EmptyState from "@/components/empty-state"
import PageCallout from "@/components/page-callout"
import PageHero from "@/components/page-hero"
import Link from "next/link"
import { knowledgeArticles, knowledgeCategories } from "@/content/knowledge"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Knowledge Hub - CIDE Group",
  description:
    "Insights, policy briefs, publications, and toolkits from CIDE Group — evidence-based thinking on development advisory, MEL, climate, GEDSI, and more.",
  alternates: { canonical: `${siteConfig.url}/knowledge` },
  openGraph: {
    title: "Knowledge Hub - CIDE Group",
    description: "Evidence-based insights and publications from CIDE Group's team of pan-African development practitioners.",
    url: `${siteConfig.url}/knowledge`,
  },
}



export default async function KnowledgeHubPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams
  const articles = category ? knowledgeArticles.filter((article) => article.category === category) : knowledgeArticles
  const featured = articles.filter((article) => article.featured)
  const rest = articles.filter((article) => !article.featured)

  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Knowledge Hub" }}
        title="Evidence-based thinking from the field"
        description="Insights, policy briefs, and publications from CIDE Group practitioners — grounded in real programme experience across Africa."
      >
        <nav aria-label="Filter insights by category" className="flex flex-wrap gap-2">
          {["All", ...knowledgeCategories].map((cat) => (
            <Link key={cat} href={cat === "All" ? "/knowledge" : `/knowledge?category=${encodeURIComponent(cat)}`} aria-current={(!category && cat === "All") || category === cat ? "page" : undefined} className="rounded-sm border border-white/30 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-accent-gold aria-[current=page]:bg-white/20">
              {cat}
            </Link>
          ))}
        </nav>
      </PageHero>

      {/* ── Featured articles ─────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="section-space bg-background">
          <div className="section-shell">
            <div className="flex items-end justify-between mb-10">
              <SectionHeading kicker="Featured" title="Latest thinking" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((article) => (
                <KnowledgeCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── All articles ──────────────────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="section-space bg-surface-secondary border-t border-border">
          <div className="section-shell">
            <SectionHeading className="mb-10" kicker="More from the Hub" title="All articles" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => <KnowledgeCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      {articles.length === 0 && <section className="section-space section-shell"><EmptyState title="No articles in this category" description="Choose another category or view all insights."><Link href="/knowledge" className="mt-3 inline-block text-primary">View all insights</Link></EmptyState></section>}
      <PageCallout
        eyebrow="Work With Us"
        title="Want this kind of thinking on your programme?"
        description="Our advisory and implementation work is grounded in the same evidence base as our publications."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="inverse" size="lg"><Link href="/contact">
            Talk to Our Team
          </Link></Button>
          <Button asChild variant="inverse-outline" size="lg"><Link href="/services">
            Our Services
          </Link></Button>
        </div>
      </PageCallout>
    </main>
  )
}
