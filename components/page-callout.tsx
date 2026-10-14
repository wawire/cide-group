import type { ReactNode } from "react"

type PageCalloutProps = {
  eyebrow: ReactNode
  title: ReactNode
  description: ReactNode
  children: ReactNode
}

export default function PageCallout({ eyebrow, title, description, children }: PageCalloutProps) {
  return (
    <section className="page-callout callout-space relative overflow-hidden">
      <div className="section-shell relative z-10 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-gold">{eyebrow}</p>
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
