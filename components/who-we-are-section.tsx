import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { companyProfile, siteConfig } from "@/content/site"

export default function WhoWeAreSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="CIDE team collaborating with local partners in East Africa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-semibold text-sm drop-shadow">{siteConfig.tagline}</span>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=300&q=80"
                alt="Community engagement in Kenya"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-44 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
                alt="African professional leading development programme"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -left-3 top-12 w-1.5 h-28 bg-[#bf2a2c] rounded-full hidden sm:block" />
          </div>

          <div className="lg:pl-4">
            <p className="section-kicker mb-4">Who We Are</p>
            <h2 className="section-heading mb-5">A Pan-African Consulting Firm Built for Africa's Realities</h2>
            <p className="text-text-secondary leading-relaxed mb-5">
              CIDE Group, formally registered as <strong className="text-foreground">{siteConfig.legalName}</strong>, is a
              leading pan-African consulting firm headquartered in Nairobi, Kenya. With over a decade of experience,
              we convene a continent-wide, multidisciplinary network of technical experts.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              We partner with governments, donors, NGOs, and enterprises to co-create solutions guided by rigorous
              evidence and deep local insight because sustainable transformation begins where communities are.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {companyProfile.pillars.map((pillar) => (
                <div key={pillar} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-[#bf2a2c] flex-shrink-0" />
                  <span className="text-sm text-text-secondary font-medium">{pillar}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
            >
              Our Full Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
