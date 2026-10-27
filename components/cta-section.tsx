import { Button } from "@/components/ui/button"
import PageCallout from "@/components/page-callout"
import Link from "next/link"

export default function CTASection() {
  return (
    <PageCallout
      eyebrow="Let's Work Together"
      title="Ready to build lasting impact?"
      description="Partner with us to design and deliver locally grounded, evidence-driven solutions across Africa."
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="inverse" size="lg"><Link href="/contact">
          Get in Touch
        </Link></Button>
        <Button asChild variant="inverse-outline" size="lg"><Link href="/focus-areas">
          Explore Solutions
        </Link></Button>
      </div>
    </PageCallout>
  )
}
