"use client"

import { useMemo, useState } from "react"
import { projects } from "@/content/projects"
import Link from "next/link"
import Image from "next/image"
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
      <section className="bg-[#faf7f5] border-b border-[#e2d9d9] sticky top-16 z-20">
        <div className="section-shell py-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mr-1">Theme</span>
            <button type="button" onClick={() => setSelectedService(null)} className={filterBtn(selectedService === null)}>
              All
            </button>
            {allServices.map((s) => (
              <button key={s} type="button" onClick={() => setSelectedService(s)} className={filterBtn(selectedService === s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mr-1">Country</span>
            <button type="button" onClick={() => setSelectedCountry(null)} className={filterBtn(selectedCountry === null)}>
              All
            </button>
            {allCountries.map((c) => (
              <button key={c} type="button" onClick={() => setSelectedCountry(c)} className={filterBtn(selectedCountry === c)}>
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
            <div className="py-24 text-center">
              <p className="text-lg text-text-secondary">No projects match your filters.</p>
            </div>
          ) : (
            <div className="space-y-6">

              {/* First project — full-width feature */}
              {filtered[0] && (
                <Link href={`/projects/${filtered[0].id}`} className="group block">
                  <div className="relative h-105 md:h-130 rounded-xl overflow-hidden">
                    <Image
                      src={filtered[0].image}
                      alt={filtered[0].title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/30 to-transparent" />

                    {/* Tags */}
                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      {filtered[0].tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold bg-white/90 text-[#bf2a2c] px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                      <div className="flex items-center gap-2 text-white/60 text-xs mb-3">
                        <MapPin size={11} />
                        <span>{filtered[0].location}</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-4xl font-semibold text-white mb-3 max-w-2xl leading-tight">
                        {filtered[0].title}
                      </h2>
                      <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed mb-5">
                        {filtered[0].description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#c9a84c] group-hover:gap-3 transition-all">
                        Read Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Remaining — alternating 2-col and 3-col rows */}
              {filtered.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.slice(1).map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className="group block">
                      <article className="relative rounded-xl overflow-hidden h-full flex flex-col bg-white border border-[#e2d9d9] hover:border-[#bf2a2c] hover:shadow-xl hover:shadow-[#bf2a2c]/8 transition-all duration-300">

                        {/* Image */}
                        <div className="relative h-48 overflow-hidden shrink-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/60 to-transparent" />
                          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-[10px] font-bold bg-white/90 text-[#bf2a2c] px-2 py-0.5 rounded-full uppercase tracking-wide">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

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

                          {/* Outcomes */}
                          <div className="space-y-1 border-t border-[#e2d9d9] pt-4 mb-4">
                            {project.outcomes.slice(0, 2).map((o) => (
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
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
