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
        <Link
          href="/contact"
          className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
        >
          Get in Touch
        </Link>
        <Link
          href="/focus-areas"
          className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
        >
          Explore Solutions
        </Link>
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
