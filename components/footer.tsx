import Link from "next/link"
import { siteConfig, legalLinks } from "@/content/site"
import { ArrowUpRight } from "lucide-react"

// ─── Inline SVGs — lucide deprecated brand icons ───────────────────────────
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

// ─── Link columns ───────────────────────────────────────────────────────────
const servicesLinks = [
  { label: "Programme Design & Implementation", href: "/services/project-management" },
  { label: "Research & Policy Advisory",        href: "/services/research" },
  { label: "MEL & Reporting",                   href: "/services/mel" },
  { label: "Strategic Communications",          href: "/services/communications" },
  { label: "ICT & Digital Solutions",           href: "/services/tech" },
  { label: "Capacity Development",              href: "/services/capacity-development" },
  { label: "Social Enterprise & Systems",       href: "/services/enterprise" },
  { label: "Policy Advocacy",                   href: "/services/advocacy" },
]

const focusLinks = [
  { label: "Climate, Energy & Environment",     href: "/focus-areas/climate-energy-environment" },
  { label: "Education & Lifelong Learning",     href: "/focus-areas/education-lifelong-learning" },
  { label: "Agriculture & Food Security",       href: "/focus-areas/agriculture-food-security-livelihoods" },
  { label: "Child Rights & Social Justice",     href: "/focus-areas/child-rights-social-justice" },
  { label: "Economic Empowerment",              href: "/focus-areas/economic-empowerment" },
  { label: "WASH",                              href: "/focus-areas/wash" },
]

const companyLinks = [
  { label: "About CIDE Group",     href: "/about" },
  { label: "Our Team",             href: "/about/team" },
  { label: "Services",             href: "/services" },
  { label: "Focus Areas",         href: "/focus-areas" },
  { label: "Projects",             href: "/projects" },
  { label: "Research",             href: "/research" },
  { label: "Partnerships",         href: "/partners" },
  { label: "Careers",              href: "/careers" },
  { label: "Contact",              href: "/contact" },
]

const regions = [
  "Kenya", "East Africa", "West Africa",
  "Francophone Africa", "Lusophone Africa", "Southern Africa", "Horn of Africa",
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0c0606] text-white overflow-hidden">

      {/* ── 2px brand rule — full bleed ──────────────────────────────────── */}
      <div className="h-0.5 w-full bg-linear-to-r from-[#bf2a2c] via-[#c9a84c] to-[#bf2a2c]/30" />

      {/* ── Masthead — wordmark + CTAs ───────────────────────────────────── */}
      <div className="section-shell pt-14 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          {/* Wordmark block */}
          <div>
            {/* Eyebrow */}
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c9a84c] mb-4">
              Pan-African Development Advisory &middot; Est. Nairobi, Kenya
            </p>
            {/* Large serif wordmark */}
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[0.95] text-white tracking-tight">
              CIDE<br />
              <span className="text-[#bf2a2c]">Group.</span>
            </h2>
          </div>

          {/* Right — tagline + CTAs */}
          <div className="lg:text-right lg:max-w-sm">
            <p className="text-sm text-white/50 leading-relaxed mb-7">
              Locally grounded, evidence-driven, and impact-oriented solutions to Africa's most complex
              development, humanitarian, and business challenges.
            </p>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-5 py-2.5 text-xs uppercase tracking-[0.12em] rounded-sm"
              >
                Get in Touch
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/focus-areas"
                className="inline-flex items-center justify-center gap-2 border border-white/18 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5 transition-colors font-bold px-5 py-2.5 text-xs uppercase tracking-[0.12em] rounded-sm"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Thin rule ────────────────────────────────────────────────────── */}
      <div className="section-shell">
        <div className="h-px bg-white/8" />
      </div>

      {/* ── Four-column link grid ─────────────────────────────────────────── */}
      <div className="section-shell py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c] mb-5">Services</p>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-white transition-colors leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c] mb-5">Focus Areas</p>
            <ul className="space-y-2.5">
              {focusLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-white transition-colors leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c] mb-5">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c] mb-5">Contact</p>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-1">General</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[13px] text-white/55 hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-1">Partnerships</p>
                <a
                  href={`mailto:${siteConfig.partnershipsEmail}`}
                  className="text-[13px] text-white/55 hover:text-white transition-colors break-all"
                >
                  {siteConfig.partnershipsEmail}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-1">Phone</p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-[13px] text-white/55 hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/25 mb-1">Address</p>
                <p className="text-[13px] text-white/45 leading-relaxed">{siteConfig.address}</p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
                  { href: siteConfig.social.twitter,  label: "X / Twitter", Icon: XIcon },
                  { href: siteConfig.social.facebook, label: "Facebook", Icon: FacebookIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex h-7 w-7 items-center justify-center rounded-sm border border-white/12 text-white/35 hover:border-[#bf2a2c]/70 hover:text-white hover:bg-[#bf2a2c]/15 transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Geographic coverage strip ─────────────────────────────────────── */}
      <div className="border-t border-white/6">
        <div className="section-shell py-4 overflow-x-auto">
          <div className="flex items-center gap-0 whitespace-nowrap">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#bf2a2c] mr-5 shrink-0">
              Coverage
            </span>
            {regions.map((region, i) => (
              <span key={region} className="flex items-center">
                <span className="text-[11px] text-white/28 tracking-wide">{region}</span>
                {i < regions.length - 1 && (
                  <span className="mx-3 text-white/14 text-[10px]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div className="border-t border-white/6">
        <div className="section-shell py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
            <p className="text-[11px] text-white/22">
              &copy; {currentYear} {siteConfig.legalName}
            </p>
            <span className="hidden sm:block text-white/12 text-[10px]">·</span>
            <p className="text-[11px] text-white/18">
              Reg. {siteConfig.companyNumber} &middot; Registered in Kenya
            </p>
          </div>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-white/28 hover:text-white/60 transition-colors"
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
