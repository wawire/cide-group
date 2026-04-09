"use client"

import Link from "next/link"
import { Filter, ArrowRight, MapPin, CheckCircle2, Globe2, Users, Globe } from "lucide-react"
import { featuredProjects } from "@/content/projects"
import { impactMetrics } from "@/content/site"

type ProjectsMegaMenuProps = {
  open: boolean
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  menuId: string
}

const menuStats = impactMetrics
  .filter((m) => ["Projects Completed", "Countries", "People Impacted"].includes(m.label))
  .map((m, i) => ({
    number: m.value,
    label: m.label,
    icon: [CheckCircle2, Globe2, Users][i],
  }))

export function ProjectsMegaMenu({ open, onClose, onMouseEnter, onMouseLeave, menuId }: ProjectsMegaMenuProps) {
  return (
    <div
      id={menuId}
      role="menu"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 right-0 top-full z-40 transition-all duration-200 ${
        open
          ? "opacity-100 visible translate-y-0 pointer-events-auto"
          : "opacity-0 invisible -translate-y-1 pointer-events-none"
      }`}
    >
        <div className="w-full bg-background border-b border-border shadow-lg">
          <div className="section-shell py-12">
            <div className="flex items-start justify-between mb-10">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Our Impact</h2>
                <p className="text-text-secondary max-w-xl">
                  Impactful initiatives transforming communities across Africa through evidence-based solutions
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/projects"
                  onClick={onClose}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary border border-border rounded-lg hover:border-primary transition-all hover:bg-surface"
                >
                  <Filter className="w-4 h-4" />
                  Filter Projects
                </Link>
                <Link
                  href="/projects"
                  onClick={onClose}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Browse by Region
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  onClick={onClose}
                  className="group/card p-5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 flex flex-col"
                >
                  <div className="inline-flex items-center gap-1 mb-4 px-3 py-1 bg-surface rounded-full text-xs font-semibold text-primary w-fit">
                    <Globe className="w-3 h-3" />
                    {project.location}
                  </div>

                  <h3 className="font-semibold text-base text-foreground group-hover/card:text-primary transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-text-secondary mb-3 uppercase tracking-wider opacity-75">
                    {project.tags[0]}
                  </p>

                  <p className="text-sm text-text-secondary line-clamp-3 mb-4 grow">{project.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs font-bold text-primary">{project.outcomes[0].split(" ").slice(0, 3).join(" ")}…</span>
                    <div className="flex items-center text-primary opacity-0 group-hover/card:opacity-100 transition-opacity translate-x-0 group-hover/card:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 py-8 bg-surface/50 rounded-lg px-8 mb-8 border border-border/50">
              {menuStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <Icon className="w-5 h-5 text-primary/80 mb-2" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-border pt-8 flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Real impact across multiple sectors</p>
                <p className="text-xs text-text-secondary">
                  Delivering measurable outcomes in health, governance, climate, and economic empowerment
                </p>
              </div>
              <Link
                href="/projects"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm shrink-0"
              >
                Explore Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
