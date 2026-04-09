import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/content/projects"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-10">
          <div>
            <p className="section-kicker mb-4">Our Work in Action</p>
            <h2 className="section-heading">
              Transforming Communities
              <br />
              Through Partnership
            </h2>
          </div>
          <div>
            <p className="text-lg text-text-secondary leading-relaxed">
              Each project combines local leadership, rigorous evidence, and implementation discipline to create change
              that lasts beyond our engagement.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group block h-full">
              <Card className="overflow-hidden bg-white border border-[#e2d9d9] hover:border-[#bf2a2c] hover:shadow-2xl hover:shadow-[#bf2a2c]/10 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold bg-white/90 text-[#bf2a2c] px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
                    <MapPin size={11} />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-[#bf2a2c] transition-colors flex-shrink-0">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="space-y-1.5 mb-4 border-t border-[#e2d9d9] pt-4">
                    {project.outcomes.slice(0, 3).map((metric) => (
                      <div key={metric} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bf2a2c] flex-shrink-0" />
                        <span className="text-xs text-text-secondary">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#bf2a2c] group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#bf2a2c] text-[#bf2a2c] hover:bg-[#bf2a2c] hover:text-white bg-transparent font-bold uppercase tracking-wide px-8 transition-all"
            >
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
