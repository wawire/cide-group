"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink } from "lucide-react"
import ContentImage from "@/components/content-image"
import { publishedResearchResources } from "@/content/research"

export default function ResearchContent() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")
  const categories = Array.from(new Set(publishedResearchResources.map((resource) => resource.category)))
  const filtered = publishedResearchResources.filter((resource) =>
    (!category || resource.category === category) &&
    [resource.title, resource.description, resource.category].some((text) => text.toLowerCase().includes(query.trim().toLowerCase())),
  )

  return (
    <section className="section-space bg-background">
      <div className="section-shell">
        <div className="mb-6">
          <p className="section-kicker mb-3">Research library</p>
          <h2 className="section-heading">Reports &amp; resources</h2>
        </div>
        {publishedResearchResources.length > 0 ? (
          <>
            <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_240px]">
              <label className="text-sm font-medium">
                Search resources
                <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} className="mt-2 block w-full rounded-lg border border-border bg-white px-3 py-2" />
              </label>
              <label className="text-sm font-medium">
                Topic
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 block w-full rounded-lg border border-border bg-white px-3 py-2">
                  <option value="">All topics</option>
                  {categories.map((topic) => <option key={topic}>{topic}</option>)}
                </select>
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
              {filtered.map((resource) => (
                <article id={`resource-${resource.id}`} key={resource.id} className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-white">
                  <ContentImage src={resource.image} alt={resource.title} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" />
                  <div className="p-5">
                    <p className="mb-2 text-xs font-semibold text-primary">{resource.category}</p>
                    <h3 className="mb-3 text-lg font-semibold">{resource.title}</h3>
                    <p className="mb-4 text-sm text-text-secondary">{resource.description}</p>
                    <a href={resource.downloadUrl ?? resource.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {resource.downloadUrl ? "Download resource" : "Read resource"}
                      {resource.downloadUrl ? <Download size={15} /> : <ExternalLink size={15} />}
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && <p role="status" className="py-6 text-text-secondary">No resources match your search. Try another topic or search term.</p>}
          </>
        ) : (
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-3 text-xl font-semibold">Research enquiries</h3>
            <p className="max-w-2xl text-text-secondary">No reports are available to download from this library yet. Contact our team to ask about research, policy briefs or learning resources.</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white">Enquire about research <ArrowRight size={16} /></Link>
              <Link href="/knowledge" className="inline-flex items-center gap-2 px-1 py-3 text-sm font-semibold text-primary">Explore insights <ArrowRight size={16} /></Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
