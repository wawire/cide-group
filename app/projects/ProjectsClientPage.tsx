"use client"

import { useMemo, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/content/projects"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectsClientPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const allServices = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.tags))), [])
  const allCountries = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.countries))), [])

  const filteredProjects = projects.filter((project) => {
    const matchesService = !selectedService || project.tags.includes(selectedService)
    const matchesCountry = !selectedCountry || project.countries.includes(selectedCountry)
    return matchesService && matchesCountry
  })

  return (
    <>
      <section className="py-12 bg-surface border-b border-border">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-3">Service Areas</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedService === null
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  All Services
                </button>
                {allServices.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedService === service
                        ? "bg-primary text-white"
                        : "bg-background border border-border text-foreground hover:border-primary"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-3">Countries</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCountry(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCountry === null
                      ? "bg-primary text-white"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  All Countries
                </button>
                {allCountries.map((country) => (
                  <button
                    type="button"
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCountry === country
                        ? "bg-primary text-white"
                        : "bg-background border border-border text-foreground hover:border-primary"
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="section-shell">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-text-secondary">No projects match your filters. Try adjusting your selection.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <Card className="overflow-hidden bg-background border border-border hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-52 bg-surface overflow-hidden group">
                      <Image
                        src={project.image || "/placeholders/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} className="bg-primary/10 text-primary border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-sm text-text-secondary mb-6">{project.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm">
                        Read Case Study
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}


