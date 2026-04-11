import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
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

      {/* ── Full-bleed hero image ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
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

        <div className="relative z-10 section-shell pb-16 pt-40 w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft size={14} />
            All Projects
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold bg-white/12 text-white border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white max-w-4xl leading-[0.95]">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-white/55 text-sm shrink-0">
              <MapPin size={13} className="text-[#c9a84c]" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-[1fr_320px] gap-14 items-start">

          {/* Main content */}
          <div>
            {/* Lead */}
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl border-l-2 border-[#bf2a2c] pl-6">
              {project.description}
            </p>

            {/* Full description */}
            <h2 className="text-xl font-bold text-foreground mb-4">About This Project</h2>
            <p className="text-text-secondary leading-relaxed mb-12">
              {project.fullDescription}
            </p>

            {/* Outcomes */}
            <div className="border-t border-[#e2d9d9] pt-10">
              <h2 className="text-xl font-bold text-foreground mb-6">Key Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, i) => (
                  <div key={outcome} className="flex items-start gap-4">
                    <span className="text-xs font-bold text-[#bf2a2c] tabular-nums mt-0.5 shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-text-secondary leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:sticky lg:top-24">

            {/* Countries */}
            <div className="rounded-xl bg-[#1a0808] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">Countries</p>
              <div className="flex flex-wrap gap-2">
                {project.countries.map((c) => (
                  <span key={c} className="text-xs text-white/70 border border-white/15 px-3 py-1 rounded-full">{c}</span>
                ))}
              </div>
            </div>

            {/* Thematic tags */}
            <div className="rounded-xl border border-[#e2d9d9] bg-[#faf7f5] p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-3">Thematic Areas</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-[#bf2a2c]/8 border border-[#bf2a2c]/20 text-[#bf2a2c] px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-[#bf2a2c] p-6 text-white">
              <p className="font-bold text-base mb-2">Discuss a similar project</p>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                We design tailored support across Africa. Tell us about your challenge.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#bf2a2c] hover:bg-white/90 transition-colors font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wide"
              >
                Get in Touch <ArrowRight size={13} />
              </Link>
            </div>

            {/* Back */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related projects ──────────────────────────────────────────────── */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-[#f4efec] border-t border-[#e2d9d9]">
          <div className="section-shell">
            <p className="section-kicker mb-6">More Work</p>
            <div className="grid md:grid-cols-3 gap-5">
              {otherProjects.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="group block">
                  <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/70">
                      <MapPin size={10} />
                      <span>{p.location}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-[#bf2a2c] transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
