import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private", "/api"],
    },
    host: "https://cidegroup.org",
    sitemap: "https://cidegroup.org/sitemap.xml",
  }
}
