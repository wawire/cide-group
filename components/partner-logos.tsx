"use client"

import { useState, type CSSProperties } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"
import { featuredPartners } from "@/content/partners"

export default function PartnerLogos() {
  const [paused, setPaused] = useState(false)
  return (
    <section id="our-partners" aria-labelledby="our-partners-heading" className="partner-marquee scroll-mt-20 border-b border-border bg-surface py-4">
      <div className="section-shell grid grid-cols-[110px_minmax(0,1fr)] items-center gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6">
        <div className="space-y-2">
          <h2 id="our-partners-heading" className="card-heading text-foreground">
            Our Partners
          </h2>
          <button
            type="button"
            aria-label={paused ? "Resume partner logo animation" : "Pause partner logo animation"}
            aria-pressed={paused}
            onClick={() => setPaused((current) => !current)}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-text-secondary motion-reduce:hidden"
          >
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
        <div className="partner-logo-viewport">
          <div className="partner-logo-track" style={{ "--partner-count": featuredPartners.length, ...(paused ? { animationPlayState: "paused" } : {}) } as CSSProperties}>
            {[false, true].map((duplicate) => (
              <ul key={String(duplicate)} className="partner-logo-group" aria-hidden={duplicate || undefined}>
                {featuredPartners.map((partner) => (
                  <li key={partner.href}>
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={duplicate ? -1 : undefined}
                      aria-label={`${partner.name} (opens in a new tab)`}
                      className="partner-logo-link relative mx-auto block h-20 w-full max-w-44 rounded-sm"
                    >
                      <Image src={partner.logo} alt="" fill sizes="(max-width: 767px) 120px, 176px" loading="eager" className="object-contain" />
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
