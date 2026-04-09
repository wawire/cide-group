import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { partnerCategoryOrder, partners } from "@/content/partners"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Partners & Clients - CIDE Group",
  description:
    "CIDE Group collaborates with leading foundations, governments, multilaterals, and civil society organisations across Africa.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partners & Clients - CIDE Group",
    description:
      "CIDE Group collaborates with leading foundations, governments, multilaterals, and civil society organisations across Africa.",
    url: `${siteConfig.url}/partners`,
  },
}

export default function PartnersPage() {
  const groupedPartners = partnerCategoryOrder
    .map((category) => ({
      category,
      items: partners.filter((partner) => partner.category === category),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=85"
          alt="CIDE Group partnership collaboration across Africa"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/20" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Partners &amp; Clients</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-tight">
            Trusted Partnerships Across Africa
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            We work alongside leading foundations, governments, multilateral institutions, and civil society
            organisations to deliver evidence-based development solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-shell space-y-14">
          {groupedPartners.map((group) => (
            <div key={group.category}>
              <div className="mb-6 max-w-3xl">
                <p className="section-kicker mb-3">{group.category}</p>
                <h2 className="text-3xl font-semibold text-foreground">
                  {group.category} Collaborations
                </h2>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {group.items.map((partner) => (
                  <Card
                    key={partner.slug}
                    className="border-border bg-white p-6 flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-base font-semibold text-foreground">{partner.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="section-shell">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-kicker mb-4">Partnership Approach</p>
            <h2 className="section-heading mb-5">
              Built on Trust, Shared Purpose, and Local Accountability
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Our partnerships span programme delivery, consortium participation, policy advisory, research
              collaboration, and capacity-strengthening engagements. We maintain long-term relationships
              grounded in transparency, mutual accountability, and measurable impact.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { label: "Consortium Partnerships", desc: "Multi-partner delivery with clear accountability structures and shared learning." },
                { label: "Technical Collaboration", desc: "Joint research, evaluations, and advisory assignments across country contexts." },
                { label: "Programme Support", desc: "Embedded advisory and implementation support for donor-funded programmes." },
              ].map((item) => (
                <Card key={item.label} className="border-border bg-white p-6">
                  <p className="font-semibold text-foreground mb-2 text-sm">{item.label}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Interested in Partnering?</h2>
          <p className="text-xl mb-10 text-white/90">
            Reach out for partnerships, consortium opportunities, advisory support, or project delivery collaboration.
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
