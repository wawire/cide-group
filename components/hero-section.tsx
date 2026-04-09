"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { siteConfig } from "@/content/site"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1920&q=85"
        alt="African community members collaborating on development solutions"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0808]/90 via-[#2d0e0e]/80 to-[#bf2a2c]/50" />
      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />

      <div className="relative z-10 flex min-h-[88vh] items-center px-4 py-20">
        <div className="section-shell">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#c9a84c] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
                {siteConfig.heroEyebrow}
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-5 leading-tight drop-shadow-xl">
              Locally Led.
              <br />
              <span className="text-[#c9a84c]">Evidence-Driven.</span>
              <br />
              <span className="text-white/85 text-4xl sm:text-5xl font-normal">Built to Last.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-9 leading-relaxed max-w-2xl">
              CIDE Group delivers locally grounded, evidence-driven, and impact-oriented solutions to Africa's most
              complex development, humanitarian, and business challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-all shadow-lg shadow-[#bf2a2c]/30 px-8 py-4 rounded-lg text-center font-bold tracking-wide text-sm uppercase"
              >
                Partner With Us
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/60 text-white hover:bg-white/10 hover:border-white transition-all px-8 py-4 rounded-lg text-center font-bold tracking-wide text-sm uppercase"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="border-2 border-white/30 text-white/80 hover:bg-white/5 hover:border-white/60 transition-all px-8 py-4 rounded-lg text-center font-bold tracking-wide text-sm uppercase"
              >
                Who We Are
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <ChevronDown size={28} className="text-white/50" />
        </div>
      </div>
    </section>
  )
}
