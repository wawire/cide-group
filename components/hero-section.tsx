"use client"

import { editorialImages } from "@/content/imagery"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { Button } from "@/components/ui/button"

const SLIDE_FADE_MS = 700

const slides = [
  {
    image: editorialImages["hero-programme"].src,
    alt: editorialImages["hero-programme"].alt,
    titleLead: "Programme Design &",
    titleAccent: "Implementation",
    description:
      "We help partners design, deliver and sustain programmes, from theory of change to rollout and exit planning.",
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
    image: editorialImages["hero-research"].src,
    alt: editorialImages["hero-research"].alt,
    titleLead: "Research &",
    titleAccent: "Evidence Generation",
    description:
      "We co-create country-specific evidence that helps partners shape policy, design programmes and improve delivery.",
    primaryCta: {
      href: "/services/research",
      label: "Explore Research Services",
    },
    secondaryCta: {
      href: "/contact",
      label: "Request Advisory Support",
    },
  },
  {
    image: editorialImages["hero-enterprise"].src,
    alt: editorialImages["hero-enterprise"].alt,
    titleLead: "Enterprise &",
    titleAccent: "Organisational Support",
    description:
      "We help institutions and enterprises strengthen strategy, build capacity and improve the systems behind their work.",
    primaryCta: {
      href: "/services/enterprise",
      label: "See Enterprise Support",
    },
    secondaryCta: {
      href: "/contact",
      label: "Discuss Organisational Needs",
    },
  },
  {
    image: editorialImages["hero-mel"].src,
    alt: editorialImages["hero-mel"].alt,
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

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
}

const textLine: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function HeroSection() {
  const [active, setActive] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const activeRef = useRef(0)
  const reducedMotion = useReducedMotion()
  const touchStartX = useRef<number | null>(null)

  const currentSlide = slides[active]
  const visibleSlides = Array.from(new Set([exiting, active].filter((index): index is number => index !== null)))

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    if (exiting === null) return
    const timer = window.setTimeout(() => setExiting(null), SLIDE_FADE_MS)
    return () => window.clearTimeout(timer)
  }, [exiting])

  const activateSlide = useCallback((index: number) => {
    const nextIndex = (index + slides.length) % slides.length
    if (nextIndex === activeRef.current) return
    setExiting(activeRef.current)
    activeRef.current = nextIndex
    setActive(nextIndex)
  }, [])

  const selectSlide = (index: number) => {
    activateSlide(index)
  }

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
        activateSlide(delta < 0 ? activeRef.current + 1 : activeRef.current - 1)
    }
    touchStartX.current = null
  }, [activateSlide])

  return (
    <section
      aria-label="CIDE Group featured focus areas"
      aria-roledescription="carousel"
      className="inverse-surface home-hero group/hero relative isolate overflow-hidden bg-hero-background"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">
        {visibleSlides.map((index) => {
          const slide = slides[index]
          const isActiveSlide = index === active

          return (
            <div
              key={`${slide.titleLead}-${slide.titleAccent}`}
              aria-hidden={!isActiveSlide}
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
                loading="eager"
                quality={56}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          )
        })}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(9,8,8,0.96)_0%,rgba(12,10,10,0.86)_34%,rgba(16,12,12,0.54)_58%,rgba(16,12,12,0.18)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-primary via-accent-gold to-transparent" />

      <button
        type="button"
        onClick={() => selectSlide(activeRef.current - 1)}
        aria-label="Show previous slide"
        className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 opacity-0 backdrop-blur-sm transition hover:scale-105 hover:border-primary hover:bg-primary group-hover/hero:opacity-100 group-focus-within/hero:opacity-100 md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={() => selectSlide(activeRef.current + 1)}
        aria-label="Show next slide"
        className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/90 opacity-0 backdrop-blur-sm transition hover:scale-105 hover:border-primary hover:bg-primary group-hover/hero:opacity-100 group-focus-within/hero:opacity-100 md:flex"
      >
        <ChevronRight size={20} />
      </button>

      <div className="home-hero relative z-10 flex items-center py-14 md:py-16">
        <div className="section-shell w-full">
          <div className="max-w-[620px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                aria-live="polite"
                key={`${currentSlide.titleLead}-${currentSlide.titleAccent}`}
                variants={reducedMotion ? undefined : textContainer}
                initial={false}
                animate="visible"
                exit={reducedMotion ? undefined : "exit"}
              >
                <motion.h1
                  variants={reducedMotion ? undefined : textLine}
                  className="display-title font-serif font-semibold tracking-tight text-white"
                >
                  <span className="block text-white">{currentSlide.titleLead}</span>
                  <span className="block text-accent-gold">{currentSlide.titleAccent}</span>
                </motion.h1>

                <motion.p
                  variants={reducedMotion ? undefined : textLine}
                  className="mt-5 max-w-[54ch] text-base leading-7 text-white/72 md:text-lg md:leading-8"
                >
                  {currentSlide.description}
                </motion.p>

                <motion.div variants={reducedMotion ? undefined : textLine} className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="whitespace-normal text-center"><Link href={currentSlide.primaryCta.href}>
                    {currentSlide.primaryCta.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link></Button>

                  <Button asChild variant="inverse-outline" size="lg" className="whitespace-normal text-center"><Link href={currentSlide.secondaryCta.href}>
                    {currentSlide.secondaryCta.label}
                  </Link></Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide.titleLead}-${slide.titleAccent}`}
            type="button"
            onClick={() => selectSlide(index)}
            aria-current={index === active ? "true" : undefined}
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

    </section>
  )
}
