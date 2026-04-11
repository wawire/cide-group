import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const priorities = [
  "Community leadership, participation and ownership",
  "Evidence-based decision-making",
  "Sustainability and systems strengthening",
  "Inclusion, dignity, and accountability",
  "Scalable and measurable impact",
] as const

export default function WhoWeAreSection() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/about/cide-boardroom-strategy.png"
                alt="CIDE Group strategy and advisory session"
                fill
                quality={60}
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/40 to-transparent" />
            </div>

            <div className="absolute -right-6 -top-6 hidden h-36 w-36 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:block">
              <Image
                src="/hero/research-evidence-community.png"
                alt="CIDE research team with community members"
                fill
                quality={52}
                sizes="144px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden h-32 w-44 overflow-hidden rounded-lg border-4 border-white shadow-xl sm:block">
              <Image
                src="/hero/gedsi-systems-development.png"
                alt="GEDSI capacity building and community training"
                fill
                quality={50}
                sizes="176px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -left-3 top-12 hidden h-28 w-1.5 rounded-full bg-[#bf2a2c] sm:block" />
          </div>

          <div className="lg:pl-4">
            <p className="section-kicker mb-4">Who We Are</p>

            <h2 className="section-heading mb-5">Pan-African Development Advisory, Research & Programme Implementation</h2>

            <p className="mb-6 text-text-secondary leading-relaxed">
              CIDE Group (registered as <strong className="font-semibold text-foreground">COMMUNE IDEE (CIDE) GROUPE LTD</strong>) is a pan-African development advisory, research, programme design, and implementation organisation working across Anglophone, Francophone, and Lusophone Africa.
            </p>

            <p className="mb-8 text-text-secondary leading-relaxed">
              We specialise in delivering evidence-based, community-led, and data-driven development solutions that support governments, donors, investors, NGOs, and private sector organisations in addressing complex development, humanitarian, and market system challenges.
            </p>

            <div className="grid gap-x-8 gap-y-4 md:grid-cols-2 mb-8">
              {priorities.map((priority) => (
                <div key={priority} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#bf2a2c]" />
                  <p className="text-sm font-semibold leading-6 text-foreground md:text-base">{priority}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
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
