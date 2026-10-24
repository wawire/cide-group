import ProjectCard from "@/components/project-card"
import PageHero from "@/components/page-hero"
import Breadcrumbs from "@/components/breadcrumbs"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react"
import { projects } from "@/content/projects"
import { siteConfig } from "@/content/site"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return {}

  return {
    title: `${project.title} - CIDE Group`,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${project.id}` },
    openGraph: {
      title: `${project.title} - CIDE Group`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.id}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <main className="min-h-screen">
      <PageHero
        breadcrumb={<Breadcrumbs ancestors={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]} current={project.title} />}
        eyebrow={
          <div className="flex flex-wrap gap-2 normal-case tracking-normal">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        }
        title={project.title}
        titleAside={
          <div className="flex shrink-0 items-center gap-2 text-sm text-white/55">
            <MapPin size={13} className="text-accent-gold" />
            <span>{project.location}</span>
          </div>
        }
      />

      <section className="section-space bg-background">
        <div className="section-shell grid items-start gap-14 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-12 max-w-2xl border-l-2 border-primary pl-6 text-lg leading-relaxed text-text-secondary md:text-xl">
              {project.description}
            </p>

            <h2 className="mb-4 text-xl font-bold text-foreground">About This Project</h2>
            <p className="mb-12 leading-relaxed text-text-secondary">{project.fullDescription}</p>

            <div className="border-t border-border pt-10">
              <h2 className="mb-6 text-xl font-bold text-foreground">Key Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={outcome} className="flex items-start gap-4">
                    <span className="mt-0.5 w-5 shrink-0 text-xs font-bold tabular-nums text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-relaxed text-text-secondary">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-xl bg-hero-background p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold">Countries</p>
              <div className="flex flex-wrap gap-2">
                {project.countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                Thematic Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-primary p-6 text-white">
              <p className="mb-2 text-base font-bold">Discuss a similar project</p>
              <p className="mb-5 text-sm leading-relaxed text-white/70">
                We design tailored support across Africa. Tell us about your challenge.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
              >
                Get in Touch <ArrowRight size={13} />
              </Link>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-foreground"
            >
              <ArrowLeft size={14} /> View All Projects
            </Link>
          </div>
        </div>
      </section>

      {otherProjects.length > 0 ? (
        <section className="border-t border-border bg-surface-secondary py-16">
          <div className="section-shell">
            <p className="section-kicker mb-6">More Work</p>
            <div className="grid gap-5 md:grid-cols-3">
              {otherProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} outcomeLimit={0} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
