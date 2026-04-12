import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react"
import { knowledgeArticles, getArticleBySlug } from "@/content/knowledge"
import { siteConfig } from "@/content/site"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return knowledgeArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: `${article.title} - CIDE Group`,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/knowledge/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/knowledge/${article.slug}`,
      images: [{ url: `${siteConfig.url}${article.image}`, width: 1200, height: 630, alt: article.title }],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default async function KnowledgeArticlePage({ params }: { params: Params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const related = knowledgeArticles.filter((a) => a.slug !== slug).slice(0, 2)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.date,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/knowledge/${article.slug}`,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: `${siteConfig.url}/knowledge` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${siteConfig.url}/knowledge/${article.slug}` },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero image ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image src={article.image} alt={article.title} fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/55 to-[#1a0808]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-14 pt-36">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Knowledge Hub
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-[#bf2a2c]/80 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-5 max-w-3xl leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/55">
            <span>{article.author}</span>
            <span>·</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{article.readTime}</span>
            <span>·</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
        </div>
      </section>

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="section-shell grid lg:grid-cols-[1fr_300px] gap-14 items-start">

          {/* Main content */}
          <article>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 pb-10 border-b border-[#e6dcda] font-medium">
              {article.excerpt}
            </p>
            <div
              className="knowledge-body"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#e6dcda]">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#e2d9d9] bg-[#f4efec] text-xs font-semibold text-text-secondary"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-xl bg-[#1a0808] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">About this piece</p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Author</p>
                  <p className="text-white/80 font-semibold">{article.author}</p>
                  <p className="text-white/45 text-xs">{article.authorRole}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Published</p>
                  <p className="text-white/80"><time dateTime={article.date}>{formatDate(article.date)}</time></p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">Reading time</p>
                  <p className="text-white/80">{article.readTime}</p>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wide w-full"
                >
                  Talk to Our Team
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-4">More from the Hub</p>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link key={rel.slug} href={`/knowledge/${rel.slug}`} className="group block">
                      <div className="flex gap-3 items-start">
                        <div className="relative h-14 w-20 rounded-lg overflow-hidden shrink-0">
                          <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground leading-snug group-hover:text-[#bf2a2c] transition-colors line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="text-[10px] text-text-muted mt-1 flex items-center gap-1">
                            <Clock size={9} />{rel.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #bf2a2c 0%, #9a1f21 50%, #1a0808 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Work With Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5 leading-tight">
            Want to put this thinking into practice?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            Talk to our team about how we can apply this approach to your programme or context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/knowledge"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
            >
              Read More Insights
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .knowledge-body { color: #4a3535; line-height: 1.8; font-size: 1rem; }
        .knowledge-body p { margin-bottom: 1.25rem; }
        .knowledge-body h2 { font-size: 1.25rem; font-weight: 700; color: #1a0808; margin-top: 2.5rem; margin-bottom: 0.875rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e6dcda; }
        .knowledge-body h3 { font-size: 1.0625rem; font-weight: 700; color: #1a0808; margin-top: 1.75rem; margin-bottom: 0.625rem; }
        .knowledge-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .knowledge-body ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .knowledge-body li { margin-bottom: 0.5rem; line-height: 1.75; }
        .knowledge-body strong { font-weight: 700; color: #1a0808; }
        .knowledge-body a { color: #bf2a2c; text-decoration: underline; text-underline-offset: 2px; }
        .knowledge-body a:hover { color: #9a1f21; }
        .knowledge-body blockquote { border-left: 3px solid #bf2a2c; padding-left: 1.25rem; margin: 1.5rem 0; color: #6b5555; font-style: italic; }
      `}</style>
    </main>
  )
}
