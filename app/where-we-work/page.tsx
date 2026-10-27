import { Button } from "@/components/ui/button"
import PageCallout from "@/components/page-callout"
import PageHero from "@/components/page-hero"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { experienceStatement, technicalExpertCountries, advisoryBoardLocations } from "@/content/geographic-experience"
import GeographicExperienceMap from "@/components/geographic-experience-map"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Where We Work - CIDE Group",
  description:
    "Our multidisciplinary team brings over a decade of assignment experience across 14 named countries in Africa, Europe and North America, and across Asia.",
  alternates: { canonical: `${siteConfig.url}/where-we-work` },
  openGraph: {
    title: "Where We Work - CIDE Group",
    description: "Explore our team’s assignment experience across Africa, the United States, Spain and Asia.",
    url: `${siteConfig.url}/where-we-work`,
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Where We Work", item: `${siteConfig.url}/where-we-work` },
  ],
}

export default function WhereWeWorkPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Where We Work" }}
        title="Experience across Africa and beyond"
        description="Over a decade of multidisciplinary experience supporting non-profit, public and private organisations across borders."
      >
        <Button asChild variant="default" size="lg" className="whitespace-normal text-center"><Link href="/contact">
          Work With Us <ArrowRight size={15} />
        </Link></Button>
      </PageHero>

      <section className="bg-background py-12 md:py-16" aria-labelledby="assignment-experience-heading">
        <div className="section-shell">
          <p className="section-kicker mb-4">Assignment Experience</p>
          <h2 id="assignment-experience-heading" className="section-heading mb-5">Where our team has worked</h2>
          <p className="mb-8 max-w-4xl text-lg leading-relaxed text-text-secondary">{experienceStatement}</p>
          <GeographicExperienceMap />
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-3">Where our technical experts are based</h2>
            <p className="text-text-secondary leading-relaxed">{technicalExpertCountries.join(", ")}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">International Advisory Board</h2>
            <p className="text-text-secondary leading-relaxed">{advisoryBoardLocations.join(", ")}</p>
            <p className="mt-3 text-sm text-text-secondary">Expert and board locations are distinct from the assignment experience shown on the map.</p>
          </div>
        </div>
      </section>

      {/* ── Our local advantage ───────────────────────────────────────────── */}
      <section className="section-space bg-surface-secondary border-y border-border">
        <div className="section-shell grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <p className="section-kicker mb-4">Our Local Advantage</p>
            <h2 className="section-heading mb-5">
              We are not consulting from a distance
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              CIDE Group is headquartered in Nairobi with a team that has lived and worked in the communities we
              serve. Every programme we design is grounded in local knowledge, tested against local realities, and
              implemented by people who understand the context from the inside.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              This is the difference between advice that is technically correct and advice that actually works.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              About CIDE Group <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-border">
            {[
              { num: "01", text: "East African headquarters with deep regional networks" },
              { num: "02", text: "Multilingual capacity across English, French, and Swahili" },
              { num: "03", text: "Established relationships with governments, NGOs, and communities" },
              { num: "04", text: "Consortium-ready with a growing associate network across Africa" },
              { num: "05", text: "Understanding of local procurement, compliance, and operational realities" },
            ].map(({ num, text }) => (
              <div key={num} className="py-5 grid grid-cols-[44px_1fr] gap-5 group">
                <span className="text-2xl font-bold text-border group-hover:text-primary transition-colors tabular-nums leading-none pt-0.5 select-none">
                  {num}
                </span>
                <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <PageCallout
        eyebrow="Work With Us"
        title="Need a partner with real presence on the ground?"
        description="Tell us where you are working and what you need — we will connect you with the right expertise and local knowledge."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="inverse" size="lg"><Link href="/contact">
            Start a Conversation
          </Link></Button>
          <Button asChild variant="inverse-outline" size="lg"><Link href="/projects">
            See Our Projects
          </Link></Button>
        </div>
      </PageCallout>
    </main>
  )
}
