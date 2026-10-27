import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const partnershipStrengths = [
  { title: "Local insight", description: "Country-based experts adapt each engagement to local institutions and communities." },
  { title: "Connected expertise", description: "Research, programme delivery and specialist advice work together from the start." },
  { title: "Accountable delivery", description: "Clear responsibilities, safeguarding and learning support the work throughout." },
]

export default function PartnersSection() {
  return (
    <section className="section-space border-y border-border bg-surface-secondary">
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading kicker="Why Partner With Us" title="The right expertise for your context" />
          <Link href="/partners" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary hover:text-primary-dark">
            Partnership approach <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {partnershipStrengths.map((strength) => (
            <div key={strength.title}>
              <h3 className="card-heading mb-3">{strength.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
