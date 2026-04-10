import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return children
}
