import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ContentImage from "@/components/content-image"
import SectionHeading from "@/components/section-heading"
import type { Service } from "@/content/services"

type RelatedServicesProps = {
  services: Service[]
  title: string
  kicker: string
}

export default function RelatedServices({ services, title, kicker }: RelatedServicesProps) {
  if (services.length === 0) return null

  const fourColumns = services.length === 4
  const sizes = fourColumns
    ? "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1639px) 25vw, 385px"
    : "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (max-width: 1639px) 33vw, 520px"

  return (
    <section className="section-space bg-background">
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading kicker={kicker} title={title} />
          <Link href="/services" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
            All Services <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className={`grid gap-x-5 gap-y-8 md:grid-cols-2 ${fourColumns ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group block min-w-0 rounded-xl">
              <div className="mb-4 overflow-hidden rounded-xl">
                <ContentImage src={service.image} alt="" sizes={sizes} />
              </div>
              <h3 className="card-heading mb-2 text-foreground transition-colors group-hover:text-primary">{service.shortTitle}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{service.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
