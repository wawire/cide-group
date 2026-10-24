"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
}

const container: Variants = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export default function StaggerContainer({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion()
  const childArray = Array.isArray(children) ? children : [children]

  return (
    <motion.div
      className={className}
      variants={container}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      custom={{ delay: reducedMotion ? 0 : delay, stagger: reducedMotion ? 0 : stagger }}
    >
      {childArray.map((child, i) => (
        <motion.div key={i} variants={reducedMotion ? undefined : item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
