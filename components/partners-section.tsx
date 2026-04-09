"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { partners } from "@/content/partners"

const partnerGroups = [
  {
    category: "Development and Humanitarian Partners",
    description:
      "We collaborate on programme design, implementation support, MEL, and evidence use for scalable impact.",
  },
  {
    category: "Foundations and Donors",
    description:
      "We provide advisory and delivery support for grant-funded initiatives, accountability systems, and learning agendas.",
  },
  {
    category: "Government and Public Institutions",
    description:
      "We support policy formulation, service-delivery improvement, and institutional strengthening across sectors.",
  },
  {
    category: "Civil Society and Enterprises",
    description:
      "We co-create practical solutions with NGOs, community actors, social enterprises, and private-sector partners.",
  },
]

const sectorTags = [
  "Governments",
  "Public Institutions",
  "Development Programmes",
  "Humanitarian Actors",
  "Civil Society Organisations",
  "Community-Based Organisations",
  "Private Sector",
  "Social Enterprises",
  "Startups",
  "Research Institutions",
  "Universities",
]

export default function PartnersSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const partnerCount = partners.length

  return (
    <section ref={ref} className="py-20 bg-[#fafaf9]">
      <div className="section-shell">
        <div className="text-center mb-10">
          <p className="section-kicker mb-4">Our Network</p>
          <h2 className="section-heading mb-4">Partners Across Africa & Beyond</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We collaborate with governments, donors, development partners, civil society, businesses, and startups
            to co-create evidence-driven solutions.
          </p>
          <p className="text-sm text-text-muted mt-4">
            {partnerCount} organisations are currently structured in the shared content model. Logos remain source-only
            until written permission to publish is confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {partnerGroups.map((group, i) => (
            <div
              key={group.category}
              className={`bg-white border border-[#e2d9d9] rounded-2xl p-7 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-[#bf2a2c] flex-shrink-0" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#bf2a2c]">{group.category}</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#e2d9d9] pt-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-5">
            Sectors We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {sectorTags.map((tag, i) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                  inView ? "opacity-100" : "opacity-0"
                } ${
                  i % 3 === 0
                    ? "bg-[#bf2a2c] text-white"
                    : i % 3 === 1
                      ? "bg-[#1a0808] text-white"
                      : "bg-white border border-[#e2d9d9] text-text-secondary"
                }`}
                style={{ transitionDelay: `${400 + i * 60}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/partners">
                View Partners Page
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
