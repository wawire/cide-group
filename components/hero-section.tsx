"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"

const slides = [
  {
    image: "/projects/health-workers-with-tablets.jpg",
    alt: "Programme teams using digital tools in the field",
    label: "Programme Design & Implementation",
  },
  {
    image: "/projects/data-analysis-workshop.jpg",
    alt: "Research and data analysis workshop",
    label: "Research, Evidence & Policy Advisory",
  },
  {
    image: "/research/community-members-advocacy-training-workshop.jpg",
    alt: "Community workshop and stakeholder engagement",
    label: "Social Enterprise & Systems Development",
  },
  {
    image: "/research/digital-dashboard-real-time-programme-data.jpg",
    alt: "Monitoring dashboard and programme learning systems",
    label: "Monitoring, Evaluation & Learning",
  },
] as const

export default function HeroSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((c) => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full min-h-[94vh] overflow-hidden bg-[#140909]">

      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={slide.image} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover object-center" />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,9,9,0.92)_0%,rgba(20,9,9,0.78)_55%,rgba(191,42,44,0.3)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[94vh] items-center px-4">
        <div className="section-shell w-full">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                {siteConfig.heroEyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-semibold text-white leading-[0.95] mb-6 drop-shadow-xl">
              Thriving
              <br />
              Together.
            </h1>

            {/* Tagline — punchy, no paragraph */}
            <p className="text-xl md:text-2xl text-white/65 mb-10 font-light tracking-wide">
              {siteConfig.tagline}
            </p>

            {/* Rotating service pill */}
            <div className="mb-10 h-9 flex items-center">
              <div
                key={slides[active].label}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#bf2a2c]/20 border border-[#bf2a2c]/50 backdrop-blur-sm animate-in fade-in duration-500"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bf2a2c] shrink-0" />
                <span className="text-sm font-semibold text-white/90 tracking-wide">
                  {slides[active].label}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-all shadow-lg shadow-[#bf2a2c]/30 px-8 py-4 rounded-lg font-bold tracking-wide text-sm uppercase"
              >
                Get Involved
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all px-8 py-4 rounded-lg font-bold tracking-wide text-sm uppercase"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-[#c9a84c]" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
