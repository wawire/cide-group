import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Handshake, ShieldCheck, BarChart3, Coins, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Why Partner With CIDE Group",
  description:
    "Why partners work with CIDE Group: cost-efficient delivery, implementation strength, scalable models, evidence, and ethical practice.",
  alternates: { canonical: `${siteConfig.url}/partners` },
  openGraph: {
    title: "Why Partner With CIDE Group",
    description:
      "Why partners work with CIDE Group: cost-efficient delivery, implementation strength, scalable models, evidence, and ethical practice.",
    url: `${siteConfig.url}/partners`,
  },
}

const reasons = [
  {
    title: "Cost-Efficient Delivery",
    description: "We prioritize lean systems to ensure a higher proportion of funding reaches beneficiaries.",
    icon: Coins,
  },
  {
    title: "Implementation + Advisory Strength",
    description: "Unlike traditional consultancies, we combine strategy with execution, ensuring ideas translate into measurable results.",
    icon: Handshake,
  },
  {
    title: "Scalable Models",
    description: "Our programmes support the SDGs and are designed as replicable solutions that can adapt across geographies.",
    icon: Scale,
  },
  {
    title: "Trusted, Data-Driven Approach",
    description: "We deliver with transparency, accountability, and evidence at the core.",
    icon: BarChart3,
  },
  {
    title: "Ethical Storytelling and Safeguarding",
    description: "Our work integrates ethical storytelling and safeguarding principles aligned with global standards.",
    icon: ShieldCheck,
  },
]

const commitments = [
  "Advancing dignified, rights-based storytelling in development",
  "Embedding safeguarding and ethical communication across all programmes",
  "Ensuring communities are represented with consent, respect, and integrity",
  "Aligning with evolving donor expectations on accountability and ethical practice",
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image
          src="/projects/advocacy-training-workshop.jpg"
          alt="Partnership and stakeholder engagement"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Why Partner With Us</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-tight">
            Built for accountable delivery and long-term partnership
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            We combine implementation strength, evidence, lean delivery, and ethical practice to support measurable
            outcomes across complex mandates.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="max-w-3xl mb-10">
            <p className="section-kicker mb-4">Partnership Value</p>
            <h2 className="section-heading mb-5">Why organisations choose to work with CIDE Group</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We work with governments, donors, investors, NGOs, and private sector organisations that need support
              combining strategy, execution, accountability, and ethical delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <Card key={reason.title} className="border-border bg-white p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{reason.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">Ethical Commitment</p>
            <h2 className="section-heading mb-5">Safeguarding, dignity, and consent are part of the work</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We support dignified, rights-based communication and programme delivery that represents communities with
              care, respect, and integrity.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              This commitment aligns with evolving donor expectations on accountability and ethical practice while
              strengthening trust across partnerships.
            </p>
          </div>

          <Card className="border-border bg-white p-8">
            <p className="section-kicker mb-4">How This Shows Up</p>
            <div className="space-y-3">
              {commitments.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-text-secondary">{item}</p>
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
            Reach out to discuss programme design, implementation support, research, or strategic collaboration.
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
