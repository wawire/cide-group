"use client"

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
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
  }, [])

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
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
