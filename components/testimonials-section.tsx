"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
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

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()

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

        <div className="relative">
          <div className="overflow-hidden">
            <div
              aria-live="polite"
              aria-atomic="true"
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-2 md:px-4">
                  <Card className="bg-background border border-border p-7 md:p-8">
                    <p className="text-xl text-foreground italic mb-8 leading-relaxed">&quot;{testimonial.quote}&quot;</p>

                    <div className="flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bf2a2c] to-[#7a1718] text-white flex items-center justify-center text-lg font-bold tracking-wide"
                      >
                        {getInitials(testimonial.author)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-primary font-semibold">{testimonial.title}</p>
                        <p className="text-xs text-text-secondary">{testimonial.organization}</p>
                        <p className="text-xs text-text-muted mt-1">{testimonial.since}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((item, i) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setCurrent(i)
                  setAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-border w-2"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-primary hover:text-primary-dark transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={next}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-primary hover:text-primary-dark transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}
