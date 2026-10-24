"use client"

import ResourceCard from "@/components/resource-card"
import SectionHeading from "@/components/section-heading"
import EmptyState from "@/components/empty-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
        <SectionHeading className="mb-6" kicker="Research library" title="Reports & resources" />
        {publishedResearchResources.length > 0 ? (
          <>
            <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_240px]">
              <label className="text-sm font-medium">
                Search resources
                <Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} className="mt-2" />
              </label>
              <label className="text-sm font-medium">
                Topic
                <Select value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2">
                  <option value="">All topics</option>
                  {categories.map((topic) => <option key={topic}>{topic}</option>)}
                </Select>
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
              {filtered.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
            {filtered.length === 0 && <EmptyState title="No matching resources" description="Try another topic or search term." />}
          </>
        ) : (
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <h3 className="mb-3 text-xl font-semibold">Research enquiries</h3>
            <p className="max-w-2xl text-text-secondary">No reports are available to download from this library yet. Contact our team to ask about research, policy briefs or learning resources.</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Button asChild><Link href="/contact">Enquire about research <ArrowRight size={16} aria-hidden="true" /></Link></Button>
              <Button asChild variant="outline"><Link href="/knowledge">Explore insights <ArrowRight size={16} aria-hidden="true" /></Link></Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
