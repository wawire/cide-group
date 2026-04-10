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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/projects/data-analysis-workshop.jpg"
          alt="CIDE Group service delivery and technical support"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Our Services</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-[0.95]">
            Strategic support across the programme cycle
          </h1>
          <p className="text-xl text-white/75 max-w-2xl leading-relaxed">
            From research and design through to implementation and evaluation — end-to-end support that translates
            strategy into measurable, lasting impact.
          </p>
        </div>
      </section>

      {/* ── Intro strip ──────────────────────────────────────────────────── */}
      <div className="bg-[#1a0808]">
        <div className="section-shell py-6 flex flex-wrap items-center gap-x-8 gap-y-2">
          {companyProfile.approach.map((step, i) => (
            <span key={step} className="flex items-center gap-3 text-sm text-white/55">
              <span className="text-[#bf2a2c] font-bold tabular-nums text-xs">0{i + 1}</span>
              <span className="font-semibold text-white/75">{step}</span>
              {i < companyProfile.approach.length - 1 && (
                <span className="text-white/20">→</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services — alternating editorial rows ─────────────────────────── */}
      <section className="bg-background">
        {services.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={service.id}
              className={`border-b border-[#e2d9d9] last:border-b-0 ${
                isEven ? "bg-background" : "bg-[#faf7f5]"
              }`}
            >
              <div className="section-shell">
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image panel */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[360px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/60 to-transparent" />
                    {/* Service number */}
                    <span className="absolute top-5 left-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {String(service.order).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content panel */}
                  <div className="flex flex-col justify-center px-0 lg:px-12 py-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>

                    {/* Capability pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <span
                          key={cap}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#bf2a2c]/8 border border-[#bf2a2c]/18 text-[#bf2a2c] font-medium leading-tight"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#bf2a2c] hover:text-[#9a1f21] transition-colors group"
                    >
                      Explore this service
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1a0808]">
        <div className="section-shell">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Work With Us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
                Not sure which service fits your challenge?
              </h2>
              <p className="mt-4 text-lg text-white/60 max-w-xl leading-relaxed">
                We often combine multiple services into a single engagement. Tell us about your context and we will
                design the right support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
              >
                Start a Conversation
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/focus-areas"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-white/50 hover:bg-white/5 transition-colors font-bold px-7 py-4 rounded-lg text-sm uppercase tracking-wide"
              >
                Browse Focus Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
