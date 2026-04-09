import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/content/projects"
import { siteConfig } from "@/content/site"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)
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
  const project = projects.find((item) => item.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/60 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-white/15 text-white border-white/25 text-xs font-semibold">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-4 max-w-4xl leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">{project.description}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell max-w-4xl">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12">
            {project.fullDescription}
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-6">Key Outcomes</h2>
          <ul className="space-y-4 mb-12 list-none p-0">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-text-secondary">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Discuss a Similar Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
