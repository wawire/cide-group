import Link from "next/link"
import { exploreLinks, legalLinks, siteConfig } from "@/content/site"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a0808] text-white pt-16 pb-8">
      <div className="section-shell">
        <div className="h-0.5 w-full bg-gradient-to-r from-[#bf2a2c] via-[#c9a84c] to-transparent mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-[#bf2a2c] mb-1">CIDE Group</div>
            <div className="text-xs uppercase tracking-widest text-[#c9a84c] mb-4">{siteConfig.tagline}</div>
            <p className="text-sm text-white/50 mb-4">{siteConfig.narrativeLine}</p>
            <p className="text-xs text-white/30">{siteConfig.legalName}</p>
            <p className="text-xs text-white/30">Reg. No. {siteConfig.companyNumber}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">Legal &amp; Policies</h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">Let&apos;s Connect</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 flex-shrink-0 text-[#bf2a2c]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#c9a84c] transition-colors break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0 text-[#bf2a2c]" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-[#c9a84c] transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#bf2a2c]" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved. Registered in Kenya.
          </p>

          <div className="flex items-center gap-5">
            {siteConfig.social.linkedin !== "#" && (
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" rel="noopener noreferrer" target="_blank" className="text-white/40 hover:text-[#c9a84c] transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {siteConfig.social.twitter !== "#" && (
              <a href={siteConfig.social.twitter} aria-label="X / Twitter" rel="noopener noreferrer" target="_blank" className="text-white/40 hover:text-[#c9a84c] transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {siteConfig.social.facebook !== "#" && (
              <a href={siteConfig.social.facebook} aria-label="Facebook" rel="noopener noreferrer" target="_blank" className="text-white/40 hover:text-[#c9a84c] transition-colors">
                <Facebook size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
