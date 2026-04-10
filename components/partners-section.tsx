"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const partnerReasons = [
  {
    title: "Cost-Efficient Delivery",
    description: "We prioritize lean systems to ensure a higher proportion of funding reaches beneficiaries.",
  },
  {
    title: "Implementation + Advisory Strength",
    description: "We combine strategy with execution so ideas translate into measurable results.",
  },
  {
    title: "Scalable Models",
    description: "Our programmes support the SDGs and are designed as replicable solutions across geographies.",
  },
  {
    title: "Trusted, Data-Driven Approach",
    description: "We deliver with transparency, accountability, and evidence at the core.",
  },
  {
    title: "Ethical Storytelling and Safeguarding",
    description: "Our work integrates ethical storytelling and safeguarding principles aligned with global standards.",
  },
]

const ethicalCommitments = [
  "Advancing dignified, rights-based storytelling in development",
  "Embedding safeguarding and ethical communication across all programmes",
  "Ensuring communities are represented with consent, respect, and integrity",
  "Aligning with evolving donor expectations on accountability and ethical practice",
]

export default function PartnersSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 bg-[#fafaf9]">
      <div className="section-shell">
        <div className="text-center mb-10">
          <p className="section-kicker mb-4">Why Partner With Us</p>
          <h2 className="section-heading mb-4">Implementation Strength, Lean Delivery, and Accountable Practice</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We combine advisory depth, implementation capacity, and ethical practice to support measurable results
            across complex development and humanitarian contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mb-10">
          {partnerReasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`rounded-xl border border-[#e2d9d9] bg-white p-7 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#bf2a2c] mb-4">{reason.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#e2d9d9] pt-10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-4">Ethical Commitment</p>
              <h3 className="text-3xl font-semibold text-foreground leading-tight mb-4">
                Safeguarding, consent, and dignity stay visible in how we work.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We support rights-based communication and programme delivery that represent communities with care,
                accountability, and integrity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ethicalCommitments.map((item) => (
                <div key={item} className="rounded-xl border border-[#e2d9d9] bg-white p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 size={18} className="text-[#bf2a2c] mt-0.5 shrink-0" />
                    <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link href="/partners">
                View Partnership Approach
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
