import Link from "next/link"
import ContentImage from "@/components/content-image"
import type { KnowledgeArticle } from "@/content/knowledge"

type KnowledgeCardProps = {
  article: Pick<KnowledgeArticle, "slug" | "title" | "category" | "excerpt" | "author" | "tags"> & { image?: string; date?: string }
}

export default function KnowledgeCard({ article }: KnowledgeCardProps) {
  return <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface focus-within:border-primary">
    {article.image && <ContentImage src={article.image} alt="" sizes="(max-width: 1024px) 100vw, 600px" />}
    <div className="flex flex-1 flex-col p-6">
      <p className="mb-3 text-xs font-semibold text-primary">{article.category}</p>
      <h3 className="mb-3 text-lg font-bold"><Link className="inline-link" href={`/knowledge/${article.slug}`}>{article.title}</Link></h3>
      <p className="mb-4 flex-1 text-sm text-text-secondary">{article.excerpt}</p>
      <p className="text-xs text-text-muted">{article.author}</p>
      {article.tags.length > 0 && <ul aria-label="Topics" className="mt-3 flex flex-wrap gap-2 text-xs text-text-muted">{article.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
      {article.date && <time className="mt-2 text-xs text-text-muted" dateTime={article.date}>{article.date}</time>}
    </div>
  </article>
}
