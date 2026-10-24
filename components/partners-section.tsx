"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

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
  const reducedMotion = useReducedMotion()
  return (
    <section className="section-space bg-background">
      <div className="section-shell">
        <div className="mb-10 text-center">
          <p className="section-kicker mb-4">Why Partner With Us</p>
          <h2 className="section-heading mb-4">Implementation Strength, Lean Delivery, and Accountable Practice</h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary">
            We combine advisory depth, implementation capacity, and ethical practice to support measurable results
            across complex development and humanitarian contexts.
          </p>
        </div>

        <motion.div
          className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-64px" }}
        >
          {partnerReasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={reducedMotion ? undefined : cardVariants}
              className="min-w-0 break-words rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-border pt-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-text-muted">Ethical Commitment</p>
              <h3 className="mb-4 text-3xl font-semibold leading-tight text-foreground">
                Safeguarding, consent, and dignity stay visible in how we work.
              </h3>
              <p className="leading-relaxed text-text-secondary">
                We support rights-based communication and programme delivery that represent communities with care,
                accountability, and integrity.
              </p>
            </div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, margin: "-64px" }}
            >
              {ethicalCommitments.map((item) => (
                <motion.div key={item} variants={reducedMotion ? undefined : cardVariants} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center">
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
