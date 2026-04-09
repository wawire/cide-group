import { services } from "@/content/services"
import { companyProfile, contactCountries, impactMetrics, primaryNavLinks, siteConfig } from "@/content/site"

export const SITE_CONFIG = {
  name: siteConfig.name,
  description: siteConfig.tagline,
  tagline: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  partnershipsEmail: siteConfig.partnershipsEmail,
  phone: siteConfig.phone,
  address: siteConfig.address,
  companyNumber: siteConfig.companyNumber,
  registeredName: siteConfig.legalName,
}

export const NAVIGATION_LINKS = {
  main: [
    ...primaryNavLinks,
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
}

export const SERVICES = services.map((service) => ({
  id: service.id,
  title: service.shortTitle,
  slug: service.slug,
  icon: service.icon,
}))

export const IMPACT_METRICS = impactMetrics.map((metric) => ({
  number: metric.value,
  label: metric.label,
}))

export const CORE_VALUES = companyProfile.coreValues

export const COUNTRIES = [...contactCountries]
