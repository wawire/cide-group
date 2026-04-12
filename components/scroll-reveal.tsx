"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
  className,
}: ScrollRevealProps) {
  const initial: Record<string, number> = { opacity: 0 }
  if (direction === "up") initial.y = distance
  if (direction === "down") initial.y = -distance
  if (direction === "left") initial.x = distance
  if (direction === "right") initial.x = -distance

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
