import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { focusAreas } from "@/content/focus-areas"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Our Integrated Solutions | CIDE Group",
  description:
    "Explore CIDE Group's integrated solutions across climate, education, agriculture, child rights, economic empowerment, and WASH.",
  alternates: { canonical: `${siteConfig.url}/focus-areas` },
  openGraph: {
    title: "Our Integrated Solutions | CIDE Group",
    description:
      "Integrated solutions across climate, education, agriculture, child rights, economic empowerment, and WASH.",
    url: `${siteConfig.url}/focus-areas`,
  },
}

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="/projects/advocacy-training-workshop.jpg"
          alt="Integrated development solutions across thematic areas"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Integrated Solutions</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-tight">
            Thematic solutions grounded in Africa's realities
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            We work across priority themes where policy, systems, communities, and implementation realities need to
            come together for lasting impact.
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
                className={`relative aspect-4/3 overflow-hidden rounded-xl shadow-xl ${
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
                    {area.practiceAreas.slice(0, 5).map((practiceArea) => (
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
            <h2 className="section-heading mb-4">Integrated Across Services and Delivery</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our solutions combine research, design, implementation, and evaluation so partners get support that is
              practical, locally grounded, and built for scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Community-Led", desc: "We place communities close to the challenge at the centre of decision-making." },
              { title: "Evidence-Based", desc: "We use research, analytics, and learning to guide strategic choices and adaptation." },
              { title: "Scalable", desc: "We design solutions for long-term resilience, replication, and measurable impact." },
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
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Bring your challenge to us</h2>
          <p className="text-xl mb-10 text-white/90">
            We are ready to design support that fits your context, mandate, and implementation reality.
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
