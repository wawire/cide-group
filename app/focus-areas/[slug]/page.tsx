import RelatedServices from "@/components/related-services"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import PageHero from "@/components/page-hero"
import PageCallout from "@/components/page-callout"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Megaphone } from "lucide-react"
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

  if (!focusArea) notFound()

  const relatedServices = services.filter((s) => focusArea.relatedServiceSlugs.includes(s.slug))
  const featuredProjects = projects.filter((p) => focusArea.featuredProjectIds.includes(p.id))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Focus Areas", item: `${siteConfig.url}/focus-areas` },
      { "@type": "ListItem", position: 3, name: focusArea.title, item: `${siteConfig.url}/focus-areas/${focusArea.slug}` },
    ],
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }, { label: "Focus Areas", href: "/focus-areas" }], current: focusArea.title }}
        title={focusArea.title}
        description={focusArea.summary}
      >
        <Button asChild variant="default" size="lg" className="whitespace-normal text-center"><Link href="/contact">
          Work With Us Here
          <ArrowRight size={15} />
        </Link></Button>
      </PageHero>

      <section className="section-space bg-background">
        <div className="section-shell grid lg:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <p className="section-kicker mb-4">Overview</p>
            <h2 className="section-heading mb-6">How we work in this space</h2>
            <p className="text-xl text-text-secondary leading-relaxed">{focusArea.overview}</p>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl bg-hero-background p-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-6">Key Outcomes</p>
              <ol className="space-y-5">
                {focusArea.outcomes.map((outcome, i) => (
                  <li key={outcome} className="grid grid-cols-[28px_1fr] gap-3">
                    <span className="text-xs font-bold tabular-nums text-accent-gold pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-white/72 leading-relaxed">{outcome}</p>
                  </li>
                ))}
              </ol>

            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-surface-secondary border-y border-border">
        <div className="section-shell grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-kicker mb-4">Practice Areas</p>
            <h2 className="section-heading text-foreground">
              Where we focus our work
            </h2>
          </div>
          <div className="divide-y divide-border">
            {focusArea.practiceAreas.map((area, i) => (
              <div key={area} className="py-5 grid grid-cols-[44px_1fr] gap-5">
                <span className="text-2xl font-bold text-text-muted tabular-nums leading-none pt-0.5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold text-foreground leading-snug pt-0.5">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="section-space bg-background">
          <div className="section-shell">
            <div className="grid lg:grid-cols-2 gap-6 items-end mb-10">
              <SectionHeading kicker="Selected Work" title="Real delivery in this space" />
              <p className="text-lg text-text-secondary leading-relaxed">
                These projects show how thematic expertise translates into measurable, grounded delivery.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} outcomeLimit={3} />
              ))}
            </div>
          </div>
        </section>
      )}

      {focusArea.campaigns && focusArea.campaigns.length > 0 && (
        <section className="section-space bg-hero-background">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-4">Ongoing Campaigns</p>
              <h2 className="section-heading text-white max-w-2xl">
                Advocacy in action
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {focusArea.campaigns.map((campaign) => (
                <div key={campaign.name} className="rounded-xl border border-white/10 bg-white/5 p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-accent-gold shrink-0">
                      <Megaphone size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{campaign.name}</h3>
                      {campaign.partner && (
                        <p className="text-xs text-white/62 mt-1">In partnership with {campaign.partner}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/62 leading-relaxed">{campaign.description}</p>
                  {campaign.url && (
                    <a
                      href={campaign.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-xs font-bold uppercase tracking-wide text-accent-gold hover:text-white transition-colors"
                    >
                      Learn more <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedServices services={relatedServices} kicker="Capabilities We Combine" title="Services that support this area" />

      <PageCallout
        eyebrow="Work With Us"
        title="Need support in this area?"
        description="Let's design an engagement that fits your context, mandate, and implementation reality."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="inverse" size="lg"><Link href="/contact">
            Start a Conversation
          </Link></Button>
          <Button asChild variant="inverse-outline" size="lg"><Link href="/services">
            Explore Our Services
          </Link></Button>
        </div>
      </PageCallout>
    </main>
  )
}
