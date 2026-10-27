import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import ContentImage from "@/components/content-image"
import type { Project } from "@/content/projects"

type ProjectCardProps = {
  project: Pick<Project, "id" | "title" | "description" | "location" | "tags" | "outcomes"> & { image?: string }
  outcomeLimit?: number
}

export default function ProjectCard({ project, outcomeLimit }: ProjectCardProps) {
  const outcomes = outcomeLimit === undefined ? project.outcomes : project.outcomes.slice(0, outcomeLimit)
  return <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary focus-within:border-primary">
    {project.image && <ContentImage src={project.image} alt="" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" />}
    <div className="flex flex-1 flex-col p-6">
      {project.location && <p className="mb-3 flex items-start gap-2 text-xs text-text-muted"><MapPin size={14} aria-hidden="true" className="shrink-0" />{project.location}</p>}
      {project.tags.length > 0 && <ul className="mb-3 flex flex-wrap gap-2" aria-label="Themes">{project.tags.map((tag) => <li key={tag} className="rounded-sm bg-secondary px-2 py-1 text-xs text-text-secondary">{tag}</li>)}</ul>}
      <h3 className="card-heading mb-3"><Link href={`/projects/${project.id}`}>{project.title}</Link></h3>
      <p className="mb-4 flex-1 text-sm text-text-secondary">{project.description}</p>
      {outcomes.length > 0 && <ul className="space-y-2 border-t border-border pt-4 text-sm text-text-secondary">{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>}
      <span aria-hidden="true" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read Case Study <ArrowRight size={14} /></span>
    </div>
  </article>
}
