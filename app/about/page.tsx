import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { companyProfile, siteConfig } from "@/content/site"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import CompanyProfileSection from "@/components/company-profile-section"

export const metadata = {
  title: "About CIDE Group - Pan-African Development Advisory and Implementation",
  description:
    "CIDE Group is a pan-African development advisory, research, programme design, and implementation organisation working across Africa.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About CIDE Group - Pan-African Development Advisory and Implementation",
    description:
      "CIDE Group works across Anglophone, Francophone, and Lusophone Africa with community-led, evidence-based solutions.",
    url: `${siteConfig.url}/about`,
  },
}

const stakeholderGroups = [
  "Governments and public institutions",
  "International NGOs and civil society organisations",
  "Bilateral and multilateral development partners",
  "Private sector actors and impact investors",
]

const globalPartners = [
  "USAID", "BMZ", "KOICA", "SIDA", "European Union (EU)",
  "African Union (AU)", "IGAD", "UN Agencies",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[56vh] flex items-end overflow-hidden">
        <Image
          src="/research/community-members-advocacy-training-workshop.jpg"
          alt="Pan-African collaboration and community-centred development"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/60 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-36">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">About Us</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-5 leading-tight max-w-4xl">
            Pan-African Development Advisory, Research and Programme Implementation
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">{siteConfig.narrativeLine}</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">Who We Are</p>
            <h2 className="section-heading mb-5">About CIDE Group</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              CIDE Group, registered as <strong className="text-foreground">{siteConfig.legalName}</strong>, is a
              pan-African development advisory, research, programme design, and implementation organisation working
              across Anglophone, Francophone, and Lusophone Africa.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              We specialise in delivering evidence-based, community-led, and data-driven development solutions that
              support governments, donors, investors, NGOs, and private sector organisations in addressing complex
              development, humanitarian, and market system challenges.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We operate at the intersection of policy advisory, sustainable development, social innovation, and
              community systems strengthening — ensuring that every intervention is grounded in local realities and
              designed for long-term impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="/about/team">Meet the Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/partners">Partnership Approach</Link>
              </Button>
            </div>
          </div>

          <Card className="p-8 border-[#e2d9d9] bg-white">
            <p className="section-kicker mb-4">Stakeholders We Support</p>
            <div className="space-y-3 text-sm text-text-secondary mb-8">
              {stakeholderGroups.map((group) => (
                <div key={group} className="flex gap-3">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <p>{group}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#e2d9d9] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-4">
                Global Partners We Have Supported
              </p>
              <div className="flex flex-wrap gap-2">
                {globalPartners.map((partner) => (
                  <span
                    key={partner}
                    className="px-3 py-1 rounded-full bg-[#f4efec] border border-[#e2d9d9] text-xs font-semibold text-text-secondary"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <CompanyProfileSection />

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">Our Approach</p>
            <h2 className="section-heading mb-5">Community-led, evidence-based, and built for long-term resilience</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              We believe the most effective development solutions are shaped by the people closest to the challenges.
              By placing communities at the centre of decision-making, we shift development from traditional delivery
              models towards partnership, accountability, and long-term resilience.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              We design and implement programmes that prioritise community leadership and participation,
              evidence-based decision-making, sustainability and systems strengthening, inclusion, dignity,
              and accountability, and scalable and measurable impact.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our work supports sustainable development outcomes aligned with the Sustainable Development Goals and
              contributes to Africa's Agenda 2063 vision of "The Africa We Want."
            </p>
          </div>

          <Card className="p-8 border-border">
            <p className="section-kicker mb-4">Our 360-Degree Approach</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {companyProfile.approach.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary shrink-0">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground">{step}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {companyProfile.pillars.slice(0, 4).map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="section-shell text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">Let's Connect</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Reach out to discuss programme design, implementation support, research, or strategic collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-white/95 hover:text-white">
              {siteConfig.email}
            </a>
            <span className="hidden sm:block text-white/40">|</span>
            <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-white/95 hover:text-white">
              {siteConfig.phone}
            </a>
          </div>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Contact CIDE
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
