import { siteConfig } from "@/content/site"

interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  canonical?: string
}

export function generateMetaTags(metadata: SEOMetadata) {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords?.join(", "),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      image: metadata.image,
      url: metadata.url,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      image: metadata.image,
    },
  }
}

export function generateJsonLd(type: string, data: Record<string, unknown>) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
  }
  return JSON.stringify({ ...baseSchema, ...data })
}

export function generateOrganizationSchema() {
  const socialUrls = Object.values(siteConfig.social).filter((url) => url !== "#")

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.logo.png}`,
      width: 200,
      height: 60,
    },
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: siteConfig.postalAddress.postOfficeBoxNumber,
      postalCode: siteConfig.postalAddress.postalCode,
      addressLocality: siteConfig.postalAddress.addressLocality,
      addressRegion: siteConfig.postalAddress.addressLocality,
      addressCountry: siteConfig.postalAddress.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "General Enquiries",
        email: siteConfig.email,
        telephone: siteConfig.phoneHref,
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "Partnerships",
        email: siteConfig.partnershipsEmail,
        availableLanguage: "English",
      },
    ],
    ...(socialUrls.length > 0 && { sameAs: socialUrls }),
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  }
}


