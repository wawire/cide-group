import type { MetadataRoute } from "next"
import { focusAreas, projects, services } from "@/content"
import { publishedResearchResources } from "@/content/research"
import { knowledgeArticles } from "@/content/knowledge"

const BASE_URL = "https://cidegroup.org"


export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/team`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/focus-areas`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/research`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/knowledge`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/where-we-work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/partners`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/careers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const focusAreaPages: MetadataRoute.Sitemap = focusAreas.map((area) => ({
    url: `${BASE_URL}/focus-areas/${area.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const researchPages: MetadataRoute.Sitemap = publishedResearchResources
    .map((resource) => ({
      url: `${BASE_URL}/research#resource-${resource.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))

  const knowledgePages: MetadataRoute.Sitemap = knowledgeArticles.map((article) => ({
    url: `${BASE_URL}/knowledge/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...focusAreaPages, ...projectPages, ...researchPages, ...knowledgePages]
}
