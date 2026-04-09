"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { featuredResearchResource, researchResources } from "@/content/research"
import Image from "next/image"
import Link from "next/link"
import { Download, ExternalLink, Clock } from "lucide-react"

export default function ResearchContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const categories = Array.from(new Set(researchResources.map((r) => r.category)))
  const types = Array.from(new Set(researchResources.map((r) => r.type)))

  const filtered = researchResources.filter((r) => {
    const matchesCategory = !selectedCategory || r.category === selectedCategory
    const matchesType = !selectedType || r.type === selectedType
    return matchesCategory && matchesType
  })

  return (
    <>
      {/* Featured resource */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <p className="section-kicker mb-6">Featured</p>
          <Card className="surface-panel p-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:items-center">
            <div className="lg:col-span-2">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                {featuredResearchResource.type.toUpperCase()}
              </Badge>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {featuredResearchResource.title}
              </h2>
              <p className="text-lg text-text-secondary mb-5">{featuredResearchResource.description}</p>
              <div className="flex items-center gap-3 text-sm text-text-muted mb-7">
                <span>{featuredResearchResource.date}</span>
                <span aria-hidden="true">|</span>
                <Clock size={13} className="inline" aria-hidden="true" />
                <span>{featuredResearchResource.readTime} read</span>
              </div>
              {featuredResearchResource.downloadUrl ? (
                <a
                  href={featuredResearchResource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                >
                  Download Report
                  <Download size={18} aria-hidden="true" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 bg-surface text-text-muted border border-border px-5 py-3 rounded-lg font-semibold text-sm cursor-not-allowed select-none">
                  Report Coming Soon
                </span>
              )}
            </div>
            <div className="mt-6 lg:mt-0 relative h-52 rounded-xl overflow-hidden">
              <Image
                src={featuredResearchResource.image}
                alt={featuredResearchResource.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#bf2a2c]/20 to-transparent" />
            </div>
          </Card>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-surface border-y border-border">
        <div className="section-shell space-y-5">
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Categories</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                aria-pressed={selectedCategory === null}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-primary text-white"
                    : "bg-background border border-border text-foreground hover:border-primary"
                }`}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-2">Content Type</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by content type">
              <button
                type="button"
                onClick={() => setSelectedType(null)}
                aria-pressed={selectedType === null}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedType === null
                    ? "bg-primary text-white"
                    : "bg-background border border-border text-foreground hover:border-primary"
                }`}
              >
                All Types
              </button>
              {types.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSelectedType(type)}
                  aria-pressed={selectedType === type}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedType === type
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource grid */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-live="polite"
            aria-label="Research resources"
          >
            {filtered.map((resource) => {
              const hasLink = resource.downloadUrl || resource.externalUrl
              const linkHref = resource.downloadUrl ?? resource.externalUrl ?? ""
              const isExternal = !!resource.externalUrl && !resource.downloadUrl
              const isDownload = !!resource.downloadUrl

              return (
                <Card
                  key={resource.id}
                  className="bg-surface border border-border p-7 hover:shadow-lg transition-all duration-300 hover:border-primary flex flex-col"
                >
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 w-fit">
                    {resource.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight flex-grow">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6 flex-grow">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-muted mb-5">
                    <span>{resource.date}</span>
                    <span>{resource.readTime} read</span>
                  </div>
                  {hasLink ? (
                    <Link
                      href={linkHref}
                      target={isExternal || isDownload ? "_blank" : undefined}
                      rel={isExternal || isDownload ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                    >
                      {isDownload ? "Download" : "Read More"}
                      {isDownload ? (
                        <Download size={14} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={14} aria-hidden="true" />
                      )}
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-text-muted text-sm font-medium select-none">
                      Coming Soon
                    </span>
                  )}
                </Card>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-text-secondary">
                No content matches your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA to contact for research enquiries */}
      <section className="py-20 bg-surface">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">Looking for a Specific Report?</h2>
          <p className="text-lg text-text-secondary mb-8">
            Get in touch and we will share relevant research, briefs, and learning outputs from our programme portfolio.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            Request a Resource
          </Link>
        </div>
      </section>
    </>
  )
}
