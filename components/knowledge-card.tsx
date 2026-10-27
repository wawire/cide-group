import Link from "next/link"
import ContentImage from "@/components/content-image"
import type { KnowledgeArticle } from "@/content/knowledge"

type KnowledgeCardProps = {
  article: Pick<KnowledgeArticle, "slug" | "title" | "category" | "excerpt" | "author" | "tags"> & { image?: string; date?: string }
}

export default function KnowledgeCard({ article }: KnowledgeCardProps) {
  return <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface focus-within:border-primary">
    {article.image && <ContentImage src={article.image} alt="" sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" />}
    <div className="flex flex-1 flex-col p-5">
      <p className="mb-3 text-xs font-semibold text-primary">{article.category}</p>
      <h3 className="card-heading mb-3"><Link href={`/knowledge/${article.slug}`}>{article.title}</Link></h3>
      <p className="mb-4 line-clamp-3 text-sm text-text-secondary">{article.excerpt}</p>
      <p className="text-xs text-text-muted">{article.author}</p>
      {article.tags.length > 0 && <ul aria-label="Topics" className="mt-3 flex flex-wrap gap-2 text-xs text-text-muted">{article.tags.slice(0, 2).map((tag) => <li key={tag}>{tag}</li>)}</ul>}
      {article.date && <time className="mt-2 text-xs text-text-muted" dateTime={article.date}>{article.date}</time>}
    </div>
  </article>
}
