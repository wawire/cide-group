import type { MetadataRoute } from "next"
import { focusAreas, projects, services } from "@/content"
import { researchResources } from "@/content/research"

const BASE_URL = "https://cidegroup.org"

// Parse "Month YYYY" strings from content into Date objects
function parseContentDate(dateStr: string): Date {
  const parsed = new Date(dateStr)
  return isNaN(parsed.getTime()) ? new Date("2024-07-01") : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date("2025-01-01"), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/team`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/focus-areas`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/research`, lastModified: new Date("2025-01-01"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/partners`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/careers`, lastModified: new Date("2025-01-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const focusAreaPages: MetadataRoute.Sitemap = focusAreas.map((area) => ({
    url: `${BASE_URL}/focus-areas/${area.slug}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const researchPages: MetadataRoute.Sitemap = researchResources
    .filter((r) => r.downloadUrl || r.externalUrl)
    .map((resource) => ({
      url: `${BASE_URL}/research#resource-${resource.id}`,
      lastModified: parseContentDate(resource.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))

  return [...staticPages, ...servicePages, ...focusAreaPages, ...projectPages, ...researchPages]
}
