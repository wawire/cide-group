import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { focusAreas } from "@/content/focus-areas"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Development Focus Areas - Health, Governance, Climate & More | CIDE Group",
  description:
    "Explore CIDE Group's thematic focus areas: health systems, governance, climate resilience, GEDSI, civil society strengthening, and more across Africa.",
  alternates: { canonical: `${siteConfig.url}/focus-areas` },
  openGraph: {
    title: "Development Focus Areas - Health, Governance, Climate & More | CIDE Group",
    description:
      "Explore CIDE Group's thematic focus areas: health systems, governance, climate resilience, GEDSI, civil society strengthening, and more across Africa.",
    url: `${siteConfig.url}/focus-areas`,
  },
}

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1920&q=85"
          alt="African landscape representing CIDE Group focus areas"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Thematic Focus</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-3xl leading-tight">
            Where Deep Expertise Meets Africa&apos;s Development Priorities
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Across our core services, we apply deep technical expertise in themes that matter most for sustainable
            development in Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell space-y-16">
          {focusAreas.map((area, index) => (
            <div
              key={area.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div
                className={`relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image src={area.image} alt={area.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/60 to-transparent" />
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="text-3xl font-semibold text-foreground mb-4 leading-snug">{area.title}</h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-6">{area.summary}</p>
                <Card className="bg-[#fafaf9] border border-[#e2d9d9] p-6 mb-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#bf2a2c] mb-4">Practice Areas</h3>
                  <ul className="space-y-2.5">
                    {area.practiceAreas.map((practiceArea) => (
                      <li key={practiceArea} className="flex gap-3">
                        <CheckCircle size={15} className="text-[#bf2a2c] mt-0.5 shrink-0" />
                        <span className="text-text-secondary text-sm leading-relaxed">{practiceArea}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/focus-areas/${area.slug}`}>
                    Explore Focus Area
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="section-shell">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-4">Integrated Across All Services</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our thematic expertise is woven into each engagement from research and design to implementation and
              learning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Locally Led", desc: "We center communities as partners and co-creators of solutions." },
              { title: "Rights-Based", desc: "Our delivery aligns with human rights and safeguarding standards." },
              { title: "Evidence-Driven", desc: "Decisions are guided by rigorous research, MEL, and adaptive learning." },
            ].map((item) => (
              <Card key={item.title} className="bg-background border border-border p-7 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Bring Your Challenge to Us</h2>
          <p className="text-xl mb-10 text-white/90">
            Our multidisciplinary team is ready to co-design solutions for your context.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

