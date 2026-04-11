"use client"

import { motion } from "framer-motion"
import { companyProfile } from "@/content/site"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const stepDetails = [
  {
    description:
      "We generate data-driven insights through rigorous research, assessments, and analytics to guide strategic decision-making.",
  },
  {
    description:
      "We co-create tailored solutions that are relevant, context-sensitive, and sustainable.",
  },
  {
    description:
      "We support execution of programmes through technical assistance and cross-sector coordination.",
  },
  {
    description:
      "We measure results, document lessons learned, and guide future improvements for continuous improvement.",
  },
]

export default function ApproachSection() {
  return (
    <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <p className="section-kicker mb-4">Our 360° Approach</p>
            <h2 className="section-heading mb-5">
              End-to-end support, from insight to impact.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Through our integrated 360° approach, we use a simple and effective model to deliver
              end-to-end support — from generating evidence to designing, implementing, and evaluating
              locally grounded solutions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#bf2a2c] hover:text-[#9a1f21] font-semibold transition-colors"
            >
              Learn more about CIDE <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — step cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-64px" }}
          >
            {companyProfile.approach.map((step, index) => (
              <motion.div
                key={step}
                variants={cardVariants}
                className="rounded-xl bg-white border border-[#e2d9d9] p-6 hover:border-[#bf2a2c] hover:shadow-lg hover:shadow-[#bf2a2c]/8 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#bf2a2c] text-white text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-foreground text-base">{step}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {stepDetails[index].description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
