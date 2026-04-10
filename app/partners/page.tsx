import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Handshake, Landmark, Lightbulb, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Partnership Approach - CIDE Group",
  description:
    "CIDE Group works with public, private, philanthropic, and civil society actors through transparent, locally grounded partnerships.",
  alternates: { canonical: `${siteConfig.url}/partners` },
  openGraph: {
    title: "Partnership Approach - CIDE Group",
    description:
      "CIDE Group works with public, private, philanthropic, and civil society actors through transparent, locally grounded partnerships.",
    url: `${siteConfig.url}/partners`,
  },
}

const partnerTypes = [
  {
    title: "Development & Humanitarian Actors",
    description: "Programme design, adaptive delivery support, monitoring, evaluation, learning, and evidence use.",
    icon: Handshake,
  },
  {
    title: "Government & Public Institutions",
    description: "Policy support, institutional strengthening, public engagement, and service-delivery improvement.",
    icon: Landmark,
  },
  {
    title: "Civil Society & Community Organisations",
    description: "Locally led programme implementation, participation, advocacy, and accountability processes.",
    icon: Users,
  },
  {
    title: "Foundations, Enterprises & Research Partners",
    description: "Strategic advisory, innovation design, learning agendas, and cross-sector collaboration.",
    icon: Lightbulb,
  },
]

const collaborationModes = [
  "Consortium and implementation partnerships",
  "Technical advisory and embedded support",
  "Research, MEL, and learning collaborations",
  "Strategic communications and public engagement",
  "Capacity strengthening and systems support",
  "Locally led programme design and delivery",
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=85"
          alt="People collaborating in a partnership setting"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Partnership Approach</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-tight">
            Built on Trust, Shared Purpose, and Local Accountability
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            We work with institutions, communities, funders, public bodies, and implementation partners through
            practical collaboration models shaped by context, evidence, and long-term impact.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="max-w-3xl mb-10">
            <p className="section-kicker mb-4">Who We Work With</p>
            <h2 className="section-heading mb-5">Flexible partnerships across sectors and delivery models</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We collaborate with institutions across the public, private, philanthropic, and civil society sectors.
              This page outlines our partnership approach and collaboration models rather than listing specific
              organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {partnerTypes.map((partnerType) => {
              const Icon = partnerType.icon
              return (
                <Card key={partnerType.title} className="border-border bg-white p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{partnerType.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{partnerType.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">How We Collaborate</p>
            <h2 className="section-heading mb-5">Partnerships shaped by delivery realities, not template language</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Our collaboration models vary by programme context. In some assignments we provide technical advisory
              support, while in others we operate as an implementation, research, learning, or communications partner.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Across all engagements, we prioritize clarity of roles, transparent communication, measurable outcomes,
              and respect for local ownership.
            </p>
          </div>

          <Card className="border-border bg-white p-8">
            <p className="section-kicker mb-4">Common Collaboration Modes</p>
            <div className="space-y-3">
              {collaborationModes.map((mode) => (
                <div key={mode} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-text-secondary">{mode}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Discuss a Partnership</h2>
          <p className="text-xl mb-10 text-white/90">
            Reach out for consortium opportunities, programme support, technical advisory, research, or strategic
            collaboration.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">
              Start a Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
