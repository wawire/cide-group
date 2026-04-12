"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

export default function WhoWeAreImageCluster() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Top-right thumbnail floats upward as user scrolls down
  const yTopRight = useTransform(scrollYProgress, [0, 1], [20, -48])
  // Bottom-left thumbnail drifts slightly downward
  const yBottomLeft = useTransform(scrollYProgress, [0, 1], [-12, 28])
  // Red accent bar moves subtly opposite to top-right
  const yAccent = useTransform(scrollYProgress, [0, 1], [10, -24])

  return (
    <div ref={ref} className="relative">
      <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl">
        <Image
          src="/about/cide-boardroom-strategy.png"
          alt="CIDE Group strategy and advisory session"
          fill
          quality={60}
          sizes="(min-width: 1024px) 46vw, 92vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/40 to-transparent" />
      </div>

      <motion.div
        style={{ y: yTopRight }}
        className="absolute -right-6 -top-6 hidden h-36 w-36 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:block"
      >
        <Image
          src="/hero/research-evidence-community.png"
          alt="CIDE research team with community members"
          fill
          quality={52}
          sizes="144px"
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        style={{ y: yBottomLeft }}
        className="absolute -bottom-6 -left-6 hidden h-32 w-44 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:block"
      >
        <Image
          src="/hero/gedsi-systems-development.png"
          alt="GEDSI capacity building and community training"
          fill
          quality={50}
          sizes="176px"
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        style={{ y: yAccent }}
        className="absolute -left-3 top-12 hidden h-28 w-1.5 rounded-full bg-[#bf2a2c] sm:block"
      />
    </div>
  )
}
