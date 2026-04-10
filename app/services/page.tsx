import { Card } from "@/components/ui/card"
import { ServiceIcon } from "@/components/service-icon"
import { services } from "@/content/services"
import { companyProfile, siteConfig } from "@/content/site"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Services - Strategic Support Across the Programme Cycle | CIDE Group",
  description:
    "Explore CIDE Group's integrated services across digital solutions, research, programme implementation, enterprise systems, capacity development, and MEL.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Our Services - Strategic Support Across the Programme Cycle | CIDE Group",
    description:
      "Integrated services spanning digital solutions, research, programme implementation, enterprise systems, capacity development, and MEL.",
    url: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="/projects/data-analysis-workshop.jpg"
          alt="CIDE Group service delivery and technical support"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Services</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-tight">
            Strategic support across the programme cycle
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            We provide strategic support across programme design and implementation, research, evidence and policy
            advisory, social enterprise and systems development, and monitoring, evaluation, learning and reporting.
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
            <h2 className="section-heading mb-6">Our 360-Degree Approach</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Through our integrated 360-degree approach, we use a simple and effective model to deliver end-to-end
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 items-center">
            {companyProfile.approach.map((stage, index) => (
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
