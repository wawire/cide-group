"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { siteConfig } from "@/content/site"

const AUTO_ADVANCE_MS = 6500
const SLIDE_FADE_MS = 700

const slides = [
  {
    image: "/hero/field-programme-implementation.png",
    alt: "CIDE team working with communities on programme planning",
    titleLead: "Programme Design &",
    titleAccent: "Implementation",
    description:
      "We design and implement scalable development and humanitarian programmes that deliver measurable impact in complex environments.",
    primaryCta: {
      href: "/services/project-management",
      label: "View Programme Delivery",
    },
    secondaryCta: {
      href: "/contact",
      label: "Discuss Implementation Needs",
    },
  },
  {
    image: "/hero/research-evidence-community.png",
    alt: "CIDE research team conducting community evidence gathering",
    titleLead: "Research, Evidence &",
    titleAccent: "Policy Advisory",
    description:
      "We provide applied research, evaluations, and policy advisory services to strengthen decision-making and improve programme effectiveness.",
    primaryCta: {
      href: "/services/research",
      label: "Explore Research Advisory",
    },
    secondaryCta: {
      href: "/contact",
      label: "Request Advisory Support",
    },
  },
  {
    image: "/hero/gedsi-systems-development.png",
    alt: "Gender equity and social inclusion capacity building session",
    titleLead: "Social Enterprise &",
    titleAccent: "Systems Development",
    description:
      "We support the growth of inclusive markets, social enterprises, and sustainable systems that drive long-term economic and social impact.",
    primaryCta: {
      href: "/services/enterprise",
      label: "See Enterprise Support",
    },
    secondaryCta: {
      href: "/contact",
      label: "Talk About Systems Growth",
    },
  },
  {
    image: "/hero/communications-mel-filming.png",
    alt: "CIDE communications team capturing community stories in the field",
    titleLead: "Monitoring, Evaluation &",
    titleAccent: "Learning",
    description:
      "We deliver robust MEL frameworks, impact assessments, and learning systems to ensure accountability and continuous improvement.",
    primaryCta: {
      href: "/services/mel",
      label: "View MEL Services",
    },
    secondaryCta: {
      href: "/contact",
      label: "Plan an Evaluation",
    },
  },
] as const

export default function HeroSection() {
  const [active, setActive] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const activeRef = useRef(0)

  const currentSlide = slides[active]
  const visibleSlides = Array.from(new Set([exiting, active].filter((index): index is number => index !== null)))

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    if (exiting === null) return

    const timer = window.setTimeout(() => {
      setExiting(null)
    }, SLIDE_FADE_MS)

    return () => window.clearTimeout(timer)
  }, [exiting])

  function activateSlide(index: number) {
    const nextIndex = (index + slides.length) % slides.length

    if (nextIndex === activeRef.current) return

    setExiting(activeRef.current)
    setActive(nextIndex)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      activateSlide(activeRef.current + 1)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      aria-label="CIDE Group featured focus areas"
      aria-roledescription="carousel"
      className="group/hero relative isolate min-h-[94vh] overflow-hidden bg-[#110909]"
    >
      <div className="absolute inset-0">
        {visibleSlides.map((index) => {
          const slide = slides[index]
          const isActiveSlide = index === active

          return (
            <div
              key={`${slide.titleLead}-${slide.titleAccent}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActiveSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : undefined}
                loading={index === 0 ? "eager" : "lazy"}
                quality={56}
                sizes="100vw"
                className={`object-cover object-center will-change-transform transition-transform duration-[7000ms] ease-out ${
                  isActiveSlide ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          )
        })}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(9,8,8,0.96)_0%,rgba(12,10,10,0.86)_34%,rgba(16,12,12,0.54)_58%,rgba(16,12,12,0.18)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />

      <button
        type="button"
        onClick={() => activateSlide(activeRef.current - 1)}
        aria-label="Show previous slide"
        className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 opacity-0 backdrop-blur-sm transition hover:scale-105 hover:border-[#bf2a2c] hover:bg-[#bf2a2c] group-hover/hero:opacity-100 group-focus-within/hero:opacity-100 md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={() => activateSlide(activeRef.current + 1)}
        aria-label="Show next slide"
        className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 opacity-0 backdrop-blur-sm transition hover:scale-105 hover:border-[#bf2a2c] hover:bg-[#bf2a2c] group-hover/hero:opacity-100 group-focus-within/hero:opacity-100 md:flex"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 flex min-h-[94vh] items-center px-4 py-20">
        <div className="section-shell w-full">
          <div className="max-w-[660px]">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
              <span className="h-px w-9 bg-[#bf2a2c]" />
              <span>{siteConfig.heroEyebrow}</span>
            </div>

            <div
              key={`${currentSlide.titleLead}-${currentSlide.titleAccent}`}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <h1 className="font-serif text-[clamp(3rem,5.6vw,5.8rem)] font-semibold leading-[0.95] tracking-tight text-white">
                <span className="block text-white">{currentSlide.titleLead}</span>
                <span className="block text-[#c9a84c]">{currentSlide.titleAccent}</span>
              </h1>

              <p className="mt-6 max-w-[56ch] text-lg leading-8 text-white/72 md:text-[1.15rem] md:leading-9">
                {currentSlide.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={currentSlide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#bf2a2c] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-[#bf2a2c]/25 transition hover:-translate-y-0.5 hover:bg-[#9a1f21]"
                >
                  {currentSlide.primaryCta.label}
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href={currentSlide.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-sm border border-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white/8"
                >
                  {currentSlide.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.titleLead}-${slide.titleAccent}`}
            type="button"
            onClick={() => activateSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full focus-visible:bg-white/10"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                index === active ? "h-2 w-10 bg-white" : "h-2.5 w-2.5 bg-white/55 hover:bg-white/75"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/10">
        <div
          key={active}
          className="h-full bg-[#bf2a2c]"
          style={{
            animation: `hero-progress-fill ${AUTO_ADVANCE_MS}ms linear forwards`,
          }}
        />
      </div>
    </section>
  )
}
