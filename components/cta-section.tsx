import { Button } from "@/components/ui/button"
import PageCallout from "@/components/page-callout"
import Link from "next/link"
import { siteConfig } from "@/content/site"

export default function CTASection() {
  return (
    <PageCallout
      eyebrow="Let's Work Together"
      title="Ready to build lasting impact?"
      description="Partner with us to design and deliver locally grounded, evidence-driven solutions across Africa."
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Button asChild variant="inverse" size="lg"><Link href="/contact">
          Get in Touch
        </Link></Button>
        <Button asChild variant="inverse-outline" size="lg"><Link href="/focus-areas">
          Explore Solutions
        </Link></Button>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/60 text-sm">
        <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors font-medium">
          {siteConfig.email}
        </a>
        <span className="hidden sm:block text-white/30">|</span>
        <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white transition-colors font-medium">
          {siteConfig.phone}
        </a>
      </div>
    </PageCallout>
  )
}
