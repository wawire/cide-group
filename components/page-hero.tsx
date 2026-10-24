import Breadcrumbs, { type BreadcrumbsProps } from "@/components/breadcrumbs"
import type { ReactNode } from "react"

type PageHeroProps = {
  title: ReactNode
  description?: ReactNode
  breadcrumb: BreadcrumbsProps
  titleAside?: ReactNode
  children?: ReactNode
}

export default function PageHero({ title, description, breadcrumb, titleAside, children }: PageHeroProps) {
  return (
    <section className="page-hero border-b border-white/10 bg-hero-background text-white">
      <div className="section-shell section-space">
        <div className="mb-4"><Breadcrumbs {...breadcrumb} /></div>
        <h1 className="page-title max-w-3xl font-serif font-semibold tracking-tight text-white">{title}</h1>
        {titleAside && <div className="mt-3">{titleAside}</div>}
        {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
