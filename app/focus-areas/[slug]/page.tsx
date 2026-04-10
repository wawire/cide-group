import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { focusAreas, getFocusAreaBySlug, projects, services } from "@/content"
import { siteConfig } from "@/content/site"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const focusArea = getFocusAreaBySlug(slug)

  if (!focusArea) return {}

  return {
    title: `${focusArea.title} - CIDE Group`,
    description: focusArea.summary,
    alternates: { canonical: `${siteConfig.url}/focus-areas/${focusArea.slug}` },
    openGraph: {
      title: `${focusArea.title} - CIDE Group`,
      description: focusArea.summary,
      url: `${siteConfig.url}/focus-areas/${focusArea.slug}`,
    },
  }
}

export default async function FocusAreaDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const focusArea = getFocusAreaBySlug(slug)

  if (!focusArea) {
    notFound()
  }

  const relatedServices = services.filter((service) => focusArea.relatedServiceSlugs.includes(service.slug))
  const featuredProjects = projects.filter((project) => focusArea.featuredProjectIds.includes(project.id))

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image src={focusArea.image} alt={focusArea.title} fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/60 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <Link href="/focus-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 mb-6">
            <ArrowLeft size={16} />
            Back to Focus Areas
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Focus Area</p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-5 max-w-4xl leading-tight">
            {focusArea.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">{focusArea.summary}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div>
            <p className="section-kicker mb-4">Overview</p>
            <h2 className="section-heading mb-5">How we work in this space</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">{focusArea.overview}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {focusArea.outcomes.map((outcome) => (
                <Card key={outcome} className="border-border bg-surface p-6">
                  <p className="text-sm font-semibold text-foreground leading-relaxed">{outcome}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-border bg-[#fafaf9] p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Practice Areas</h3>
            <ul className="space-y-3">
              {focusArea.practiceAreas.map((practiceArea) => (
                <li key={practiceArea} className="flex gap-3">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary leading-relaxed">{practiceArea}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker mb-4">Related Services</p>
              <h2 className="section-heading mb-4">Capabilities we combine around this theme</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our focus areas are delivered through integrated services, combining evidence, programme support,
                communications, and institutional strengthening as needed.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Card key={service.slug} className="border-border bg-background p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore Service
                    <ArrowRight size={16} />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredProjects.length > 0 && (
        <section className="py-20 bg-background">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker mb-4">Selected Work</p>
              <h2 className="section-heading mb-4">Projects connected to this focus area</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                These project examples show how thematic expertise translates into measurable delivery.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden border-border bg-white p-0 gap-0">
                  <div className="relative h-64">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-2">{project.location}</p>
                      <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>
                    <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read Project Story
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Need support in this area?</h2>
          <p className="text-xl mb-10 text-white/90">
            Let's design an engagement that fits your context, mandate, and implementation reality.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Talk to CIDE</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
