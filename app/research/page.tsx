import Image from "next/image"
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
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=85"
          alt="Research and data analysis for African development programmes"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Knowledge Hub</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-3xl leading-tight">
            Research, Insights & Thought Leadership
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Explore research reports, briefs, and practical insights showing how evidence informs better decisions.
          </p>
        </div>
      </section>

      <ResearchContent />
    </main>
  )
}
