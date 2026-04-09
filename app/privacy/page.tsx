import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Privacy Policy - CIDE Group",
  description: "Privacy policy for CIDE Group website and services",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="section-shell py-24" style={{ maxWidth: "860px" }}>
        <h1 className="text-4xl font-bold text-foreground mb-12">Privacy Policy</h1>

        <div className="prose prose-sm max-w-none text-text-secondary space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us through our contact forms and service inquiries,
              including name, email, organization, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiries, provide services, and improve our website
              experience. We may also send you updates about our work if you opt in to our newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:text-primary-dark">
                {siteConfig.email}
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{" "}
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
