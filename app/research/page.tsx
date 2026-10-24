import PageHero from "@/components/page-hero"
import ResearchContent from "./ResearchContent"

import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Research & Knowledge Hub - Development Insights | CIDE Group",
  description:
    "Explore CIDE Group's research reports, policy briefs, and thought leadership on governance, health systems, MEL, GEDSI, and evidence-based programming across Africa.",
  keywords: [
    "Africa development research",
    "GEDSI",
    "monitoring evaluation learning",
    "MEL",
    "evidence-based programming",
    "climate adaptation",
    "development policy Africa",
  ],
  alternates: { canonical: `${siteConfig.url}/research` },
  openGraph: {
    title: "Research & Knowledge Hub - Development Insights | CIDE Group",
    description:
      "Research reports, policy briefs, and thought leadership on governance, health systems, MEL, and evidence-based programming across Africa.",
    url: `${siteConfig.url}/research`,
  },
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Research" }}
        title={<>Research, Insights & Thought Leadership</>}
        description="Research and evidence to inform better decisions. Contact our team about reports, policy briefs and learning resources."
      />

      <ResearchContent />
    </main>
  )
}
