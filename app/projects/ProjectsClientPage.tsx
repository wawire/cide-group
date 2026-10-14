"use client"

import { useMemo, useState } from "react"
import { projects } from "@/content/projects"
import Link from "next/link"
import ContentImage from "@/components/content-image"
import { ArrowRight, MapPin } from "lucide-react"

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
    `px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all ${
      active
        ? "bg-[#bf2a2c] text-white"
        : "border border-[#e2d9d9] text-text-secondary hover:border-[#bf2a2c] hover:text-[#bf2a2c] bg-white"
    }`

  return (
    <>
      {/* ── Filter bar ───────────────────────────────────────────────────── */}
      <section id="project-filters" className="scroll-mt-16 bg-[#faf7f5] border-b border-[#e2d9d9] sticky top-16 z-20">
        <div className="section-shell py-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mr-1">Theme</span>
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mr-1">Country</span>
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

      {/* ── Project grid ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="section-shell">
          {filtered.length === 0 ? (
            <div className="py-12 text-center" role="status">
              <p className="text-lg text-text-secondary">No projects match your filters.</p>
              <button type="button" onClick={() => { setSelectedService(null); setSelectedCountry(null) }} className="mt-4 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary">Clear filters</button>
            </div>
          ) : (
            <div className="space-y-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                      <article className="relative rounded-xl overflow-hidden h-full flex flex-col bg-white border border-[#e2d9d9] hover:border-[#bf2a2c] hover:shadow-xl hover:shadow-[#bf2a2c]/8 transition-all duration-300">

                        {/* Image */}
                        <ContentImage src={project.image} alt={project.title} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" />

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
                            <MapPin size={10} />
                            <span>{project.location}</span>
                          </div>
                          <h3 className="text-base font-bold text-foreground leading-snug mb-3 group-hover:text-[#bf2a2c] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                            {project.description}
                          </p>

                          <div className="mb-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => <span key={tag} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">{tag}</span>)}
                          </div>
                          {/* Outcomes */}
                          <div className="space-y-1 border-t border-[#e2d9d9] pt-4 mb-4">
                            {project.outcomes.map((o) => (
                              <div key={o} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#bf2a2c] shrink-0 mt-1.5" />
                                <span className="text-[11px] text-text-muted leading-snug">{o}</span>
                              </div>
                            ))}
                          </div>

                          <span className="text-xs font-bold text-[#bf2a2c] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                            Read Case Study <ArrowRight size={12} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
