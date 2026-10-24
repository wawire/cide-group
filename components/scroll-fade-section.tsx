"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface ScrollFadeSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  delay?: number
}

export default function ScrollFadeSection({
  children,
  className = "",
  direction = "up",
  duration = 0.6,
  delay = 0,
}: ScrollFadeSectionProps) {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (reducedMotion) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [reducedMotion])

  const getTransform = () => {
    const baseValue = "20px"
    switch (direction) {
      case "up":
        return isVisible ? "translateY(0)" : `translateY(${baseValue})`
      case "down":
        return isVisible ? "translateY(0)" : `translateY(-${baseValue})`
      case "left":
        return isVisible ? "translateX(0)" : `translateX(${baseValue})`
      case "right":
        return isVisible ? "translateX(0)" : `translateX(-${baseValue})`
      default:
        return "none"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: reducedMotion || isVisible ? 1 : 0,
        transform: reducedMotion ? "none" : getTransform(),
        transition: reducedMotion ? "none" : `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
