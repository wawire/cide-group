import Image from "next/image"
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
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808] via-[#1a0808]/50 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />

        <div className="section-shell relative z-10 w-full pb-16 pt-40">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[0.95] text-white md:text-6xl">
              {project.title}
            </h1>
            <div className="flex shrink-0 items-center gap-2 text-sm text-white/55">
              <MapPin size={13} className="text-[#c9a84c]" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="section-shell grid items-start gap-14 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="mb-12 max-w-2xl border-l-2 border-[#bf2a2c] pl-6 text-lg leading-relaxed text-text-secondary md:text-xl">
              {project.description}
            </p>

            <h2 className="mb-4 text-xl font-bold text-foreground">About This Project</h2>
            <p className="mb-12 leading-relaxed text-text-secondary">{project.fullDescription}</p>

            <div className="border-t border-[#e2d9d9] pt-10">
              <h2 className="mb-6 text-xl font-bold text-foreground">Key Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={outcome} className="flex items-start gap-4">
                    <span className="mt-0.5 w-5 shrink-0 text-xs font-bold tabular-nums text-[#bf2a2c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-relaxed text-text-secondary">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-xl bg-[#1a0808] p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">Countries</p>
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

            <div className="rounded-xl border border-[#e2d9d9] bg-[#faf7f5] p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                Thematic Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#bf2a2c]/20 bg-[#bf2a2c]/8 px-3 py-1 text-xs font-semibold text-[#bf2a2c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#bf2a2c] p-6 text-white">
              <p className="mb-2 text-base font-bold">Discuss a similar project</p>
              <p className="mb-5 text-sm leading-relaxed text-white/70">
                We design tailored support across Africa. Tell us about your challenge.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#bf2a2c] transition-colors hover:bg-white/90"
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
        <section className="border-t border-[#e2d9d9] bg-[#f4efec] py-16">
          <div className="section-shell">
            <p className="section-kicker mb-6">More Work</p>
            <div className="grid gap-5 md:grid-cols-3">
              {otherProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="group block">
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/70">
                      <MapPin size={10} />
                      <span>{relatedProject.location}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-[#bf2a2c]">
                    {relatedProject.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
