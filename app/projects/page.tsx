import PageHero from "@/components/page-hero"
import ProjectsClientPage from "./ProjectsClientPage"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Project Portfolio - CIDE Group",
  description:
    "Explore CIDE Group's portfolio of evidence-based development projects across Africa — from health systems to policy advocacy and digital transformation.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: "Project Portfolio - CIDE Group",
    description:
      "Evidence-based development projects delivered across 12 African countries, spanning health, governance, climate, and economic inclusion.",
    url: `${siteConfig.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Projects" }}
        title="Evidence in Action Across Africa"
        description="Every project is a story of partnership, evidence, and sustained impact. Filter to explore the portfolio."
      />

      <ProjectsClientPage />
    </main>
  )
}
