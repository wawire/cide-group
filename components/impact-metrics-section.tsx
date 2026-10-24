"use client"

import { useReducedMotion } from "@/lib/use-reduced-motion"
import { useEffect, useState } from "react"
import { impactMetrics } from "@/content/site"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  label: string
  suffix: string
  inView: boolean
}

function AnimatedCounter({ end, label, suffix, inView }: AnimatedCounterProps) {
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || reducedMotion) return

    let start = 0
    const increment = end / 40
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [inView, end, reducedMotion])

  return (
    <div className="relative text-center p-6 group cursor-default">
      <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold text-white mb-1">
          <span className="sr-only">{end}{suffix}</span>
          <span aria-hidden="true">{reducedMotion || !inView ? end : count}
          <span className="text-accent-gold">{suffix}</span></span>
        </div>
        <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">{label}</p>
      </div>
    </div>
  )
}

export default function ImpactMetricsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="section-space relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0808 0%, #2d0e0e 40%, #3d1414 70%, #1a0808 100%)" }}
    >
      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Red glow top-right */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />
      {/* Gold glow bottom-left */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-accent-gold/10 blur-[80px] rounded-full" />

      <div className="section-shell relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-gold mb-4">Proven at Scale</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Our Impact Across Africa
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Behind each number is stronger institutional capacity, improved service delivery, and better outcomes for communities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactMetrics.map((metric) => (
            <AnimatedCounter
              key={metric.label}
              end={metric.number}
              label={metric.label}
              suffix={metric.suffix}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
