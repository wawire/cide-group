import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Terms of Use - CIDE Group",
  description: "Terms of use for the CIDE Group website and services.",
  alternates: { canonical: `${siteConfig.url}/terms` },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="section-shell py-24" style={{ maxWidth: "860px" }}>
        <h1 className="text-4xl font-bold text-foreground mb-12">Terms of Use</h1>

        <div className="prose prose-sm max-w-none text-text-secondary space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement. CIDE Group reserves the right to modify these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on CIDE
              Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
              a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p>
              The materials on CIDE Group's website are provided on an "as is" basis. CIDE Group makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
            <p>
              In no event shall CIDE Group or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on CIDE Group's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact</h2>
            <p>
              If you have questions about these terms, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:text-primary-dark">
                {siteConfig.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
