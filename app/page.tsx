import { siteConfig } from "@/content/site"
import HeroSection from "@/components/hero-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import ServicesSection from "@/components/services-section"
import FeaturedProjectsSection from "@/components/featured-projects-section"
import ImpactMetricsSection from "@/components/impact-metrics-section"
import PartnersSection from "@/components/partners-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "development consultancy Africa",
    "pan-African consulting firm",
    "MEL services Kenya",
    "research and evaluation Africa",
    "capacity building East Africa",
    "GEDSI",
    "policy advisory Africa",
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
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjectsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ImpactMetricsSection />
      </ScrollReveal>
      <ScrollReveal>
        <PartnersSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </main>
  )
}
