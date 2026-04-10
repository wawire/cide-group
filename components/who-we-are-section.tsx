import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { companyProfile } from "@/content/site"

export default function WhoWeAreSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/research/community-members-advocacy-training-workshop.jpg"
                alt="Community-led engagement and development collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/60 to-transparent" />
            </div>

            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="/projects/data-analysis-workshop.jpg"
                alt="Research and analysis session"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="/projects/advocacy-training-workshop.jpg"
                alt="Stakeholder participation workshop"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -left-3 top-12 w-1.5 h-28 bg-[#bf2a2c] rounded-full hidden sm:block" />
          </div>

          <div className="lg:pl-4">
            <p className="section-kicker mb-4">Who We Are</p>
            <h2 className="section-heading mb-5">Pan-African Development Advisory & Implementation</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              CIDE Group partners with governments, donors, NGOs, and the private sector across Anglophone,
              Francophone, and Lusophone Africa — delivering community-led, evidence-based solutions to complex
              development, humanitarian, and market system challenges.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {companyProfile.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#bf2a2c]/8 border border-[#bf2a2c]/20 text-xs font-semibold text-[#bf2a2c]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#bf2a2c] shrink-0" />
                  {pillar}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
            >
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
