"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "CIDE did not just deliver a report. They helped our team build internal capacity to sustain MEL systems and use data for decisions.",
    author: "Dr. Jane Mwangi",
    title: "Programme Director",
    organization: "Community Health Initiative Kenya",
    since: "Partnership since 2022",
  },
  {
    id: 2,
    quote:
      "From day one, CIDE listened to community priorities and co-designed practical interventions. The campaign outcomes were measurable and durable.",
    author: "Michael Odhiambo",
    title: "Executive Director",
    organization: "East Africa Climate Coalition",
    since: "Partnership since 2020",
  },
  {
    id: 3,
    quote:
      "Their GEDSI expertise helped us engage groups we previously struggled to reach. The partnership improved both quality and equity of our programming.",
    author: "Amina Hassan",
    title: "Deputy Country Director",
    organization: "Global Health Initiative Tanzania",
    since: "Partnership since 2021",
  },
]

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as [number, number, number, number] } }),
}

function getInitials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
    setAutoPlay(false)
  }

  const t = testimonials[current]

  return (
    <section className="py-20 bg-surface">
      <div className="section-shell">
        <div className="text-center mb-10">
          <p className="section-kicker mb-4">Partner Voices</p>
          <h2 className="section-heading mb-4">What Our Partners Say</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Success is measured by outcomes and by the strength of long-term partnerships.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-xl border border-border bg-background p-7 md:p-8"
            >
              <p className="text-xl text-foreground italic mb-8 leading-relaxed">&quot;{t.quote}&quot;</p>

              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="w-16 h-16 rounded-full bg-linear-to-br from-[#bf2a2c] to-[#7a1718] text-white flex items-center justify-center text-lg font-bold tracking-wide shrink-0"
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
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-primary hover:text-[#9a1f21] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={next}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-primary hover:text-[#9a1f21] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((item, i) => (
            <button
              type="button"
              key={item.id}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-border w-2"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
