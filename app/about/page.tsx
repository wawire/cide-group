import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { companyProfile, siteConfig } from "@/content/site"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import CompanyProfileSection from "@/components/company-profile-section"

export const metadata = {
  title: "About CIDE Group - Pan-African Development Consulting",
  description:
    "CIDE Group is a pan-African consulting firm headquartered in Nairobi, Kenya, delivering advisory and implementation support across development, humanitarian, and enterprise contexts.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About CIDE Group - Pan-African Development Consulting",
    description:
      "A collective of changemakers working across Africa to co-create solutions that empower communities, strengthen systems, and protect our future.",
    url: `${siteConfig.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[56vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1920&q=85"
          alt="Pan-African development collaboration landscape"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/90 via-[#1a0808]/60 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-36">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Company Profile</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-5 leading-tight max-w-4xl">
            Pan-African Development Consulting Built for Africa&apos;s Realities
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">{siteConfig.narrativeLine}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">Who We Are</p>
            <h2 className="section-heading mb-5">{siteConfig.legalName}</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              CIDE Group is a pan-African consulting firm headquartered in Nairobi, Kenya. We deliver integrated
              advisory and implementation support across development, humanitarian, and enterprise contexts.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              With over a decade of combined experience, our multidisciplinary network supports ICT and digital
              transformation, strategic communications, policy and research, GEDSI, institutional strengthening, and
              business development.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We work with governments, donors, development partners, civil society, and enterprises to design
              solutions that are context-driven, scalable, and built to last.
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
            <p className="section-kicker mb-4">Profile Snapshot</p>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                <span className="font-semibold text-foreground">Legal Name:</span> {siteConfig.legalName}
              </p>
              <p>
                <span className="font-semibold text-foreground">Location:</span> {siteConfig.address}
              </p>
              <p>
                <span className="font-semibold text-foreground">Email:</span> {siteConfig.email}
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone:</span> {siteConfig.phone}
              </p>
              <p>
                <span className="font-semibold text-foreground">Registration:</span> {siteConfig.companyNumber}
              </p>
            </div>
          </Card>
        </div>
      </section>

      <CompanyProfileSection />

      <section className="py-20 bg-background">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">Why CIDE Group</p>
            <h2 className="section-heading mb-5">Local Insight. Systems Thinking. Practical Results.</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              We believe sustainable transformation begins with locally led solutions. Our proximity to communities
              provides deep understanding of social realities, institutional dynamics, and implementation risk.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our signature 360-degree approach keeps work coherent from strategy to delivery, ensuring measurable and
              durable outcomes.
            </p>
          </div>

          <Card className="p-8 border-border">
            <p className="section-kicker mb-4">Our 360-Degree Approach</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {companyProfile.approach.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-foreground">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {[
                "Locally led and participatory implementation",
                "Evidence-guided decisions and adaptive management",
                "Institutional strengthening for long-term sustainability",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="section-shell text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">Let&apos;s Connect</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Reach out to discuss partnerships, programme support, or technical advisory needs.
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

