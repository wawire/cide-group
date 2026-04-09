"use client"

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
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

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
  }, [inView, end])

  return (
    <div className="relative text-center p-6 group cursor-default">
      <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/5 group-hover:bg-[#bf2a2c]/20 group-hover:border-[#bf2a2c]/40 transition-all duration-300" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-bold text-white mb-1">
          {count}
          <span className="text-[#c9a84c]">{suffix}</span>
        </div>
        <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">{label}</p>
      </div>
    </div>
  )
}

export default function ImpactMetricsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#bf2a2c]/20 blur-[100px] rounded-full" />
      {/* Gold glow bottom-left */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-[#c9a84c]/10 blur-[80px] rounded-full" />

      <div className="section-shell relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Proven at Scale</p>
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
