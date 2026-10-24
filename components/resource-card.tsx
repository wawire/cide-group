import ContentImage from "@/components/content-image"
import type { ResearchResource } from "@/content/research"

type ResourceCardProps = {
  resource: Pick<ResearchResource, "id" | "title" | "description" | "type" | "category" | "downloadUrl" | "externalUrl"> & { image?: string }
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const href = resource.downloadUrl || resource.externalUrl
  return <article id={`resource-${resource.id}`} className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-surface">
    {resource.image && <ContentImage src={resource.image} alt="" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" />}
    <div className="p-6">
      <p className="mb-2 text-xs font-semibold text-primary">{resource.category} ? {resource.type}</p>
      <h3 className="mb-3 text-lg font-semibold">{resource.title}</h3>
      <p className="mb-4 text-sm text-text-secondary">{resource.description}</p>
      {href ? <a href={href} className="inline-link" aria-label={`${resource.downloadUrl ? "Download" : "Read"}: ${resource.title}`}>{resource.downloadUrl ? "Download resource" : "Read resource"}</a> : <p className="text-sm text-text-muted">Resource unavailable</p>}
    </div>
  </article>
}
