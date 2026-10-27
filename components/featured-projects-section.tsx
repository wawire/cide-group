import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/content/projects"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedProjectsSection() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-10">
          <SectionHeading kicker="Impact in Action" title={<>Real Work.<br />Lasting Change.</>} />
          <div>
            <p className="text-lg text-text-secondary leading-relaxed">
              Local leadership, rigorous evidence, and implementation discipline — creating change that outlasts our engagement.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} outcomeLimit={3} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild
              variant="outline"
              size="lg"
              className="font-bold uppercase tracking-wide px-8"
            >
              <Link href="/projects">View All Projects
              <ArrowRight size={18} className="ml-2" aria-hidden="true" /></Link>
            </Button>
        </div>
      </div>
    </section>
  )
}
