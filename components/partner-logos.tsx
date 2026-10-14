import Image from "next/image"
import { featuredPartners } from "@/content/partners"

export default function PartnerLogos() {
  return (
    <section id="our-partners" aria-labelledby="our-partners-heading" className="partner-marquee scroll-mt-20 border-b border-border bg-white py-4">
      <div className="section-shell grid grid-cols-[110px_minmax(0,1fr)] items-center gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6">
        <h2 id="our-partners-heading" className="font-serif text-2xl font-semibold leading-tight text-foreground md:text-4xl">
          Our Partners
        </h2>
        <div className="partner-logo-viewport">
          <div className="partner-logo-track">
            {[false, true].map((duplicate) => (
              <ul key={String(duplicate)} className="partner-logo-group" aria-hidden={duplicate || undefined}>
                {featuredPartners.map((partner) => (
                  <li key={partner.href}>
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={duplicate ? -1 : undefined}
                      aria-label={`${partner.name} (opens in a new tab)`}
                      className="partner-logo-link relative block h-16 w-32 rounded-sm sm:w-36"
                    >
                      <Image src={partner.logo} alt="" fill sizes="144px" loading="eager" className="object-contain" />
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
