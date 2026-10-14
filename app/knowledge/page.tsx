import PageCallout from "@/components/page-callout"
import PageHero from "@/components/page-hero"
import Link from "next/link"
import Image from "next/image"
import ContentImage from "@/components/content-image"
import { ArrowRight, Tag } from "lucide-react"
import { knowledgeArticles, knowledgeCategories, type KnowledgeCategory } from "@/content/knowledge"
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



const categoryColors: Record<KnowledgeCategory, string> = {
  "Insights": "bg-[#bf2a2c]/10 text-[#bf2a2c]",
  "Publications": "bg-[#1a0808]/10 text-[#1a0808]",
  "Toolkits": "bg-[#c9a84c]/15 text-[#8a6a1a]",
  "Policy Briefs": "bg-blue-50 text-blue-700",
  "News & Events": "bg-emerald-50 text-emerald-700",
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
        eyebrow="Knowledge Hub"
        title="Evidence-based thinking from the field"
        description="Insights, policy briefs, and publications from CIDE Group practitioners — grounded in real programme experience across Africa."
      >
        <nav aria-label="Filter insights by category" className="flex flex-wrap gap-2">
          {["All", ...knowledgeCategories].map((cat) => (
            <Link key={cat} href={cat === "All" ? "/knowledge" : `/knowledge?category=${encodeURIComponent(cat)}`} aria-current={(!category && cat === "All") || category === cat ? "page" : undefined} className="rounded-full border border-white/30 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-accent-gold aria-[current=page]:bg-white/20">
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
              <div>
                <p className="section-kicker mb-3">Featured</p>
                <h2 className="section-heading">Latest thinking</h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map((article) => (
                <Link key={article.slug} href={`/knowledge/${article.slug}`} className="group block">
                  <article className="overflow-hidden rounded-xl border border-[#e2d9d9] bg-white hover:border-[#bf2a2c] hover:shadow-2xl hover:shadow-[#bf2a2c]/10 transition-all duration-300 h-full flex flex-col">
                    <ContentImage src={article.image} alt={article.title} sizes="(max-width: 1024px) 100vw, 600px" />
                    <div className="p-6 flex flex-col flex-1">
                      <p className="mb-3 text-xs font-semibold text-primary">{article.category}</p>
                      <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-[#bf2a2c] transition-colors flex-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">{article.author}</span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#bf2a2c] group-hover:gap-3 transition-all">
                          Read <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── All articles ──────────────────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="section-space bg-[#f4efec] border-t border-[#e6dcda]">
          <div className="section-shell">
            <div className="mb-10">
              <p className="section-kicker mb-3">More from the Hub</p>
              <h2 className="section-heading">All articles</h2>
            </div>
            <div className="space-y-0 divide-y divide-[#e2d9d9]">
              {rest.map((article) => (
                <Link key={article.slug} href={`/knowledge/${article.slug}`} className="group block">
                  <article className="py-7 grid sm:grid-cols-[1fr_200px] gap-6 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${categoryColors[article.category] ?? "bg-[#f4efec] text-text-muted"}`}>
                          {article.category}
                        </span>

                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-[#bf2a2c] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">{article.excerpt}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 text-[10px] text-text-muted">
                            <Tag size={9} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-32 rounded-lg overflow-hidden shrink-0 hidden sm:block">
                      <Image src={article.image} alt={article.title} fill sizes="200px" className="object-contain" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      {articles.length === 0 && <section className="section-space section-shell"><p>No articles are available in this category.</p><Link href="/knowledge" className="mt-3 inline-block text-primary">View all insights</Link></section>}
      <PageCallout
        eyebrow="Work With Us"
        title="Want this kind of thinking on your programme?"
        description="Our advisory and implementation work is grounded in the same evidence base as our publications."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
          >
            Talk to Our Team
          </Link>
          <Link
            href="/services"
            className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
          >
            Our Services
          </Link>
        </div>
      </PageCallout>
    </main>
  )
}
