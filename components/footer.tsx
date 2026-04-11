import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { legalLinks, siteConfig } from "@/content/site"

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const servicesLinks = [
  { label: "Programme Design & Implementation", href: "/services/project-management" },
  { label: "Research & Policy Advisory", href: "/services/research" },
  { label: "MEL & Reporting", href: "/services/mel" },
  { label: "Strategic Communications", href: "/services/communications" },
  { label: "ICT & Digital Solutions", href: "/services/tech" },
  { label: "Capacity Development", href: "/services/capacity-development" },
  { label: "Social Enterprise & Systems", href: "/services/enterprise" },
  { label: "Policy Advocacy", href: "/services/advocacy" },
] as const

const focusLinks = [
  { label: "Climate, Energy & Environment", href: "/focus-areas/climate-energy-environment" },
  { label: "Education & Lifelong Learning", href: "/focus-areas/education-lifelong-learning" },
  { label: "Agriculture & Food Security", href: "/focus-areas/agriculture-food-security-livelihoods" },
  { label: "Child Rights & Social Justice", href: "/focus-areas/child-rights-social-justice" },
  { label: "Economic Empowerment", href: "/focus-areas/economic-empowerment" },
  { label: "WASH", href: "/focus-areas/wash" },
] as const

const companyLinks = [
  { label: "About CIDE Group", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Services", href: "/services" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Partnerships", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const

const regions = [
  "Kenya",
  "East Africa",
  "West Africa",
  "Francophone Africa",
  "Lusophone Africa",
  "Southern Africa",
  "Horn of Africa",
] as const

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-hidden bg-[#0c0606] text-white">
      <div className="h-0.5 w-full bg-linear-to-r from-[#bf2a2c] via-[#c9a84c] to-[#bf2a2c]/30" />

      <div className="section-shell pt-14 pb-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#c9a84c]">
              Pan-African Development Advisory &middot; Est. Nairobi, Kenya
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[0.95] tracking-tight text-white">
              CIDE
              <br />
              <span className="text-[#bf2a2c]">Group.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm lg:text-right">
            <p className="mb-7 text-sm leading-relaxed text-white/72">
              Locally grounded, evidence-driven, and impact-oriented solutions to Africa&apos;s most complex
              development, humanitarian, and business challenges.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#bf2a2c] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9a1f21]"
              >
                Get in Touch
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/focus-areas"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/18 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white/78 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell">
        <div className="h-px bg-white/8" />
      </div>

      <div className="section-shell py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-6">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Services</p>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[13px] leading-snug text-white/72 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Focus Areas</p>
            <ul className="space-y-2.5">
              {focusLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[13px] leading-snug text-white/72 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[13px] text-white/72 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Contact</p>
            <div className="space-y-5">
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/52">General</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-[13px] text-white/78 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/52">Partnerships</p>
                <a
                  href={`mailto:${siteConfig.partnershipsEmail}`}
                  className="break-all text-[13px] text-white/78 transition-colors hover:text-white"
                >
                  {siteConfig.partnershipsEmail}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/52">Phone</p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-[13px] text-white/78 transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/52">Address</p>
                <p className="text-[13px] leading-relaxed text-white/72">{siteConfig.address}</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {[
                  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                  { href: siteConfig.social.twitter, label: "X / Twitter", Icon: XIcon },
                  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex h-7 w-7 items-center justify-center rounded-sm border border-white/20 text-white/62 transition-all hover:border-[#bf2a2c]/70 hover:bg-[#bf2a2c]/15 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="section-shell overflow-x-auto py-4">
          <div className="flex items-center gap-0 whitespace-nowrap">
            <span className="mr-5 shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bf2a2c]">
              Coverage
            </span>
            {regions.map((region, index) => (
              <span key={region} className="flex items-center">
                <span className="text-[11px] tracking-wide text-white/48">{region}</span>
                {index < regions.length - 1 ? <span className="mx-3 text-[10px] text-white/24">·</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="section-shell flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-[11px] text-white/52">
              &copy; {currentYear} {siteConfig.legalName}
            </p>
            <span className="hidden text-[10px] text-white/12 sm:block">·</span>
            <p className="text-[11px] text-white/46">
              Reg. {siteConfig.companyNumber} &middot; Registered in Kenya
            </p>
          </div>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-white/52 transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
