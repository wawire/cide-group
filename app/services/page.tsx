import { Card } from "@/components/ui/card"
import { ServiceIcon } from "@/components/service-icon"
import { services } from "@/content/services"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Our Services - Research, Policy, MEL & Capacity Building | CIDE Group",
  description:
    "Explore CIDE Group's eight core services: research & evaluation, policy advisory, capacity strengthening, MEL, digital transformation, and more across Africa.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Our Services - Research, Policy, MEL & Capacity Building | CIDE Group",
    description:
      "Eight integrated development services delivered across Africa — from research and policy advisory to digital transformation and institutional strengthening.",
    url: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1920&q=85"
          alt="CIDE Group team delivering development services across Africa"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Services</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-3xl leading-tight">
            End-to-End Solutions for Sustainable Development
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            We collaborate with partners across the full programme cycle, from research and design to implementation,
            management, and sustainability.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="section-shell">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card className="h-full p-8 bg-background border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="mb-6">
                    <ServiceIcon
                      icon={service.icon}
                      size={56}
                      className="text-primary group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">{service.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{service.description}</p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="section-shell">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">One Partner. Complete Journey.</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Unlike fragmented consultancies, CIDE supports partners through the full programme lifecycle and builds
              local capacity for long-term ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 items-center">
            {["Research", "Design", "Implementation", "Learning", "Sustainability"].map((stage, index) => (
              <div key={stage} className="text-center">
                <div className="bg-primary/10 border-2 border-primary p-6 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-primary">{index + 1}</div>
                </div>
                <p className="font-semibold text-foreground text-sm">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
