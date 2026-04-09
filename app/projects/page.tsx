import Image from "next/image"
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
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1920&q=85"
          alt="CIDE Group projects across Africa - community-led development"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Work</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-3xl leading-tight">
            Evidence in Action Across Africa
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Every project is a story of partnership, evidence, and sustained impact. Filter to explore the portfolio.
          </p>
        </div>
      </section>

      <ProjectsClientPage />
    </main>
  )
}
