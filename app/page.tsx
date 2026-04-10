import { siteConfig } from "@/content/site"
import HeroSection from "@/components/hero-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import ApproachSection from "@/components/approach-section"
import ServicesSection from "@/components/services-section"
import ImpactMetricsSection from "@/components/impact-metrics-section"
import FeaturedProjectsSection from "@/components/featured-projects-section"
import PartnersSection from "@/components/partners-section"
import CTASection from "@/components/cta-section"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "pan-African development advisory",
    "programme implementation Africa",
    "research and policy advisory Africa",
    "education and lifelong learning Africa",
    "climate and environment Africa",
    "agriculture and livelihoods Africa",
    "WASH solutions Africa",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ScrollReveal>
        <WhoWeAreSection />
      </ScrollReveal>
      <ScrollReveal>
        <ApproachSection />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ImpactMetricsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjectsSection />
      </ScrollReveal>
      <ScrollReveal>
        <PartnersSection />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </main>
  )
}
