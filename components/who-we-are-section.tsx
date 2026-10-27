import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import WhoWeAreImageCluster from "@/components/who-we-are-image-cluster"

const priorities = [
  "Community leadership, participation and ownership",
  "Evidence-based decision-making",
  "Sustainability and systems strengthening",
  "Inclusion, dignity, and accountability",
  "Scalable and measurable impact",
] as const

export default function WhoWeAreSection() {
  return (
    <section className="section-space overflow-hidden bg-surface">
      <div className="section-shell">
        <div className="grid items-start gap-10 lg:items-stretch lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <WhoWeAreImageCluster />

          <div>
            <p className="section-kicker mb-4">Who We Are</p>

            <h2 className="section-heading mb-5">Pan-African Advisory, Consulting & Implementation</h2>

            <p className="mb-5 text-text-secondary leading-relaxed">
              We help governments, businesses, civil society and development partners design, resource and deliver programmes across Africa.
            </p>

            <p className="mb-6 text-text-secondary leading-relaxed">
              Our multidisciplinary experts combine local insight with global perspectives, adapting research and delivery to each country and institution.
            </p>

            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 mb-8">
              {priorities.map((priority) => (
                <div key={priority} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold leading-6 text-foreground md:text-base">{priority}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary-dark transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
