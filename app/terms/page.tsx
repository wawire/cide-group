import PageHero from "@/components/page-hero"
import { siteConfig } from "@/content/site"
import Link from "next/link"

export const metadata = {
  title: "Terms of Use - CIDE Group",
  description:
    "Terms governing the use of the CIDE Group website, its content, and services.",
  alternates: { canonical: `${siteConfig.url}/terms` },
}

const lastUpdated = "April 2026"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Terms of Use" }}
        title="Terms of Use">
        <p className="text-sm text-white/55">Last updated: {lastUpdated} &nbsp;&middot;&nbsp; {siteConfig.legalName}</p>
      </PageHero>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="section-shell reading-width space-y-10 text-base leading-relaxed text-text-secondary">

          {/* 1 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website at{" "}
              <a href={siteConfig.url} className="text-primary hover:underline">{siteConfig.url}</a>{" "}
              (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;) and our{" "}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. If you do not agree to
              these Terms, please do not use this Site.
            </p>
            <p>
              These Terms are published by <strong>{siteConfig.legalName}</strong> (&ldquo;CIDE Group&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in Kenya
              (No. {siteConfig.companyNumber}). We reserve the right to modify these Terms at any time. Continued use of
              the Site after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">2. Permitted Use</h2>
            <p className="mb-3">
              You may access and use the Site for lawful, informational, and non-commercial purposes, subject to these
              Terms. You may not:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Copy, reproduce, modify, or distribute any content from the Site without our prior written permission</li>
              <li>Use the Site or its content for any commercial purpose without our express consent</li>
              <li>Attempt to gain unauthorised access to any system, server, or data connected to the Site</li>
              <li>Use automated tools (bots, scrapers, crawlers) to extract content from the Site in bulk</li>
              <li>Submit false, misleading, or fraudulent information through our contact form</li>
              <li>Use the Site in any way that violates applicable Kenyan law or the laws of any other jurisdiction</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">3. Intellectual Property</h2>
            <p className="mb-3">
              All content on this Site — including text, photographs, graphics, logos, icons, and software — is the
              property of {siteConfig.legalName} or its content suppliers, and is protected by applicable intellectual
              property laws in Kenya and internationally.
            </p>
            <p>
              You may print or download content from the Site for personal, non-commercial reference purposes only.
              You may not republish, sell, or create derivative works from Site content without our prior written
              authorisation. Attribution of CIDE Group as the source is required in all permitted uses.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">4. Disclaimer of Warranties</h2>
            <p className="mb-3">
              The information published on this Site is provided for general informational purposes only. CIDE Group
              makes no representations about the accuracy, completeness, reliability, or suitability of the content for
              any particular purpose.
            </p>
            <div className="rounded-lg border border-border border-l-[3px] border-l-accent-gold bg-surface-secondary px-5 py-4">
              <p className="mb-0 text-sm">
                <strong>Website disclaimer:</strong> The information on this website is for general informational
                purposes only. CIDE Group makes no representations about the accuracy or completeness of any
                information on this site or found by following any link on this site. CIDE Group will not be liable
                for any errors or omissions in this information nor for the availability of this information.
              </p>
            </div>
            <p className="mt-3">
              Nothing on this Site constitutes professional advisory, legal, financial, or technical advice. You should
              not act on any information on this Site without seeking independent professional guidance appropriate to
              your specific circumstances.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, CIDE Group shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising from your use of, or inability to use, this Site
              or its content — including damages for loss of data, profit, business interruption, or any other
              commercial damages or losses. This limitation applies regardless of whether CIDE Group was advised of
              the possibility of such damages.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">6. Third-Party Links</h2>
            <p>
              This Site may contain links to external websites operated by third parties. These links are provided
              for your convenience only. CIDE Group has no control over, and accepts no responsibility for, the
              content, privacy practices, or terms of any third-party website. A link does not imply our endorsement
              of that website or any products or services it offers.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">7. Contact Form &amp; Communications</h2>
            <p>
              When you submit a message via our contact form, you consent to CIDE Group processing your personal data
              to respond to your enquiry, in accordance with our{" "}
              <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. We will not add you
              to any mailing list without your explicit opt-in. We aim to respond to all enquiries within{" "}
              {siteConfig.contactResponseSla}.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of <strong>Kenya</strong>. Any dispute arising in connection with
              these Terms or the use of this Site shall be subject to the exclusive jurisdiction of the courts of
              Kenya.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-lg font-bold text-hero-background pb-2 mb-4 border-b border-border">9. Contact</h2>
            <div className="rounded-lg border border-border border-l-[3px] border-l-primary bg-surface-secondary px-5 py-4 leading-[1.9]">
              <strong>{siteConfig.legalName}</strong><br />
              {siteConfig.address}<br />
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a><br />
              <a href={`tel:${siteConfig.phoneHref}`} className="text-primary hover:underline">{siteConfig.phone}</a>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs text-text-muted">
              {siteConfig.legalName} &middot; Reg. {siteConfig.companyNumber} &middot; Kenya
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-xs text-text-muted hover:text-foreground transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-xs text-primary hover:text-primary-dark transition-colors font-semibold">
                Contact CIDE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
