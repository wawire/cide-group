import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Tag } from "lucide-react"
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

const categoryColors: Record<KnowledgeCategory, string> = {
  "Insights": "bg-[#bf2a2c]/10 text-[#bf2a2c]",
  "Publications": "bg-[#1a0808]/10 text-[#1a0808]",
  "Toolkits": "bg-[#c9a84c]/15 text-[#8a6a1a]",
  "Policy Briefs": "bg-blue-50 text-blue-700",
  "News & Events": "bg-emerald-50 text-emerald-700",
}

export default function KnowledgeHubPage() {
  const featured = knowledgeArticles.filter((a) => a.featured)
  const rest = knowledgeArticles.filter((a) => !a.featured)

  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a0808] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="section-shell relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Knowledge Hub</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-5 leading-[0.95] max-w-3xl">
            Evidence-based thinking from the field
          </h1>
          <p className="text-xl text-white/65 max-w-2xl leading-relaxed mb-8">
            Insights, policy briefs, and publications from CIDE Group practitioners — grounded in real programme
            experience across Africa.
          </p>
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {knowledgeCategories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full border border-white/15 text-xs font-semibold text-white/55 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured articles ─────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="py-20 bg-background">
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
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/70 to-transparent" />
                      <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${categoryColors[article.category] ?? "bg-white/20 text-white"}`}>
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {article.readTime}
                        </span>
                        <span>·</span>
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </div>
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
        <section className="py-20 bg-[#f4efec] border-t border-[#e6dcda]">
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
                        <span className="text-xs text-text-muted flex items-center gap-1">
                          <Clock size={10} />
                          {article.readTime}
                        </span>
                        <time className="text-xs text-text-muted" dateTime={article.date}>{formatDate(article.date)}</time>
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
                      <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #bf2a2c 0%, #9a1f21 50%, #1a0808 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Work With Us</p>
          <h2 className="text-4xl font-semibold text-white mb-5 leading-tight">
            Want this kind of thinking on your programme?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            Our advisory and implementation work is grounded in the same evidence base as our publications.
          </p>
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
        </div>
      </section>
    </main>
  )
}
