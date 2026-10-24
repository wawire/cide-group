"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import SectionHeading from "@/components/section-heading"
import { testimonials } from "@/content/testimonials"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"



function getInitials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()
}

export default function TestimonialsSection() {
  const reducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)

  useEffect(() => {
    if (!autoPlay || reducedMotion || hovered || focused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [autoPlay, reducedMotion, hovered, focused])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goTo = (i: number) => {
    setCurrent(i)
    setAutoPlay(false)
  }

  const t = testimonials[current]

  return (
    <section className="section-space bg-surface" aria-label="Partner testimonials" aria-roledescription="carousel" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div className="section-shell">
        <SectionHeading className="mb-10 text-center [&>p:last-child]:mx-auto" kicker="Partner Voices" title="What Our Partners Say" introduction="Success is measured by outcomes and by the strength of long-term partnerships." />

        <div className="relative overflow-hidden" aria-live={autoPlay && !reducedMotion && !hovered && !focused ? "off" : "polite"}>
            <div
              key={t.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${current + 1} of ${testimonials.length}`}
              className="rounded-xl border border-border bg-background p-6 pb-16 md:p-8 md:pb-16"
            >
              <blockquote className="reading-width text-xl text-foreground italic mb-8 leading-relaxed">&quot;{t.quote}&quot;</blockquote>

              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold tracking-wide shrink-0"
                >
                  {getInitials(t.author)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-primary font-semibold">{t.title}</p>
                  <p className="text-xs text-text-secondary">{t.organization}</p>
                  <p className="text-xs text-text-muted mt-1">{t.since}</p>
                </div>
              </div>
            </div>

          <button
            type="button"
            onClick={prev}
            className="absolute bottom-3 left-3 flex size-11 items-center justify-center rounded-md bg-surface text-link"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-md bg-surface text-link"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <Button size="icon" variant="outline" onClick={() => setAutoPlay((value) => !value)} disabled={reducedMotion} aria-label={reducedMotion ? "Testimonials paused for reduced motion" : autoPlay ? "Pause testimonials" : "Resume testimonials"}>{autoPlay && !reducedMotion ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}</Button>
          {testimonials.map((item, i) => (
            <button
              type="button"
              key={item.id}
              onClick={() => goTo(i)}
              className="flex size-11 items-center justify-center rounded-md"
              aria-current={i === current ? "true" : undefined}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <span className={`h-2 rounded-full ${i === current ? "w-8 bg-primary" : "w-2 bg-control-border"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
