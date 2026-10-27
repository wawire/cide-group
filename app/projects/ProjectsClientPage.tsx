"use client"

import { useMemo, useState } from "react"
import { projects } from "@/content/projects"
import ProjectCard from "@/components/project-card"
import EmptyState from "@/components/empty-state"

export default function ProjectsClientPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const allServices = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [])
  const allCountries = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.countries))), [])

  const filtered = projects.filter((p) => {
    const matchService = !selectedService || p.tags.includes(selectedService)
    const matchCountry = !selectedCountry || p.countries.includes(selectedCountry)
    return matchService && matchCountry
  })

  const filterBtn = (active: boolean) =>
    `min-h-11 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wide transition-all ${
      active
        ? "bg-primary text-white"
        : "border border-border text-text-secondary hover:border-primary hover:text-primary bg-white"
    }`

  return (
    <>
      <section id="project-filters" className="scroll-mt-16 bg-background border-b border-border lg:sticky lg:top-16 z-20">
        <div className="section-shell py-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted mr-1">Theme</span>
            <button type="button" aria-pressed={selectedService === null} onClick={() => setSelectedService(null)} className={filterBtn(selectedService === null)}>
              All
            </button>
            {allServices.map((s) => (
              <button key={s} type="button" aria-pressed={selectedService === s} onClick={() => setSelectedService(s)} className={filterBtn(selectedService === s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-text-muted mr-1">Country</span>
            <button type="button" aria-pressed={selectedCountry === null} onClick={() => setSelectedCountry(null)} className={filterBtn(selectedCountry === null)}>
              All
            </button>
            {allCountries.map((c) => (
              <button key={c} type="button" aria-pressed={selectedCountry === c} onClick={() => setSelectedCountry(c)} className={filterBtn(selectedCountry === c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="section-shell">
          {filtered.length === 0 ? (
            <EmptyState title="No projects match your filters" description="Try another theme or country, or clear both filters.">
              <button type="button" onClick={() => { setSelectedService(null); setSelectedCountry(null) }} className="mt-4 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary">Clear filters</button>
            </EmptyState>
          ) : (
            <div className="space-y-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
