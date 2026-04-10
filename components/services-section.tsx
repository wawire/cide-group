import { services } from "@/content/services"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ServiceIcon } from "./service-icon"

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#fafaf9]">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-10">
          <div>
            <p className="section-kicker mb-4">What We Do</p>
            <h2 className="section-heading">
              End-to-End Support
              <br />
              Across Africa.
            </h2>
          </div>
          <div>
            <p className="text-lg text-text-secondary leading-relaxed">
              From research and design through to implementation and evaluation — we deliver integrated solutions
              that translate strategy into measurable, lasting impact.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#bf2a2c] hover:text-[#9a1f21] font-semibold mt-4 transition-colors"
            >
              All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="group block">
              <div className="h-full rounded-lg border border-[#e2d9d9] bg-white p-6 transition-all duration-300 hover:border-[#bf2a2c] hover:shadow-lg hover:shadow-[#bf2a2c]/10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-[#bf2a2c]/40 uppercase tracking-widest">
                    {String(service.order).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#bf2a2c]/8 flex items-center justify-center group-hover:bg-[#bf2a2c] transition-colors duration-300">
                    <ServiceIcon
                      icon={service.icon}
                      size={20}
                      className="text-[#bf2a2c] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-[#bf2a2c] transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.summary}</p>

                <span className="text-xs font-semibold text-[#bf2a2c] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
