import { siteConfig } from "@/content/site"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - CIDE Group",
  description:
    "How CIDE Group collects, uses, and protects your personal data in line with the Kenya Data Protection Act 2019.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  robots: { index: true, follow: true },
}

const lastUpdated = "April 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a0808] pt-32 pb-14">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/55 text-sm">
            Last updated: {lastUpdated} &nbsp;&middot;&nbsp; {siteConfig.legalName}
          </p>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="section-shell" style={{ maxWidth: "760px" }}>
          <div className="space-y-10 text-[0.9375rem] leading-[1.75] text-[#4a3535]">

            {/* 1 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">1. Who We Are</h2>
              <p className="mb-3">
                This Privacy Policy is published by <strong>{siteConfig.legalName}</strong> (&ldquo;CIDE Group&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in Kenya (Registration
                No. {siteConfig.companyNumber}) with its principal office at {siteConfig.address}.
              </p>
              <p>
                We operate the website at{" "}
                <a href={siteConfig.url} className="text-[#bf2a2c] hover:underline">{siteConfig.url}</a>{" "}
                (the &ldquo;Site&rdquo;). This Policy explains how we collect, use, store, and protect personal data in
                connection with the Site, in compliance with the{" "}
                <strong>Kenya Data Protection Act 2019 (KDPA 2019)</strong>.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">2. Personal Data We Collect</h2>
              <h3 className="text-base font-bold text-[#1a0808] mt-5 mb-2">2.1 Information you provide to us</h3>
              <p className="mb-3">When you submit an enquiry through our contact form, we collect:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Full name and organisation name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Country or region</li>
                <li>The content of your message or enquiry</li>
                <li>Whether you have opted in to receive updates and programme news from CIDE Group (opt-in only)</li>
              </ul>
              <h3 className="text-base font-bold text-[#1a0808] mt-5 mb-2">2.2 Analytics data (with your consent)</h3>
              <p className="mb-3">
                If you accept analytics cookies, we collect anonymised usage data through{" "}
                <strong>Google Analytics 4 (GA4)</strong>, including pages visited, session duration, approximate
                geographic location (country/city only), device type, and interactions with page elements. Google
                Analytics data is anonymised — we do not have access to your IP address. Analytics cookies are only
                placed after you provide consent.
              </p>
              <h3 className="text-base font-bold text-[#1a0808] mt-5 mb-2">2.3 Essential cookies</h3>
              <p>
                We use essential cookies required for the Site to function correctly (form security tokens, session
                integrity). These do not track you across other sites and do not require your consent.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">3. How We Use Your Data</h2>
              <div className="overflow-x-auto rounded-lg border border-[#e6dcda]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1a0808]">
                      <th className="text-left text-[0.6875rem] font-bold uppercase tracking-widest text-[#c9a84c] px-4 py-3">Purpose</th>
                      <th className="text-left text-[0.6875rem] font-bold uppercase tracking-widest text-[#c9a84c] px-4 py-3">Legal Basis (KDPA 2019)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Responding to your contact form enquiry", "Consent — you initiate contact and consent is collected on the form"],
                      ["Sending programme updates and news", "Explicit consent — only if you opted in via the subscribe checkbox"],
                      ["Analysing how visitors use the Site", "Consent — analytics cookies are only set after you accept in the cookie banner"],
                      ["Protecting the Site from spam and automated abuse", "Legitimate interest — we use rate limiting and Cloudflare Turnstile to prevent form abuse"],
                    ].map(([purpose, basis], i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-[#faf7f5]" : "bg-white"}>
                        <td className="px-4 py-3 border-b border-[#e6dcda] align-top">{purpose}</td>
                        <td className="px-4 py-3 border-b border-[#e6dcda] align-top text-[#6b5555]">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3">We do not use your data for advertising, profiling, or automated decision-making.</p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">4. How Long We Keep Your Data</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact form submissions:</strong> Retained for up to <strong>24 months</strong> from submission date, or longer if you enter an active working relationship with CIDE Group.</li>
                <li><strong>Newsletter subscription:</strong> Retained until you unsubscribe. Each newsletter includes an unsubscribe link.</li>
                <li><strong>Google Analytics data:</strong> Retained for <strong>14 months</strong> within GA4 (Google&apos;s default analytics retention period).</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">5. Who We Share Your Data With</h2>
              <p className="mb-3">We do not sell, rent, or trade your personal data. We share data only with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Google LLC (Google Analytics):</strong> If you accept analytics cookies. Data is processed under Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#bf2a2c] hover:underline">Privacy Policy</a>.</li>
                <li><strong>Email service providers:</strong> Used to route contact form submissions to CIDE Group staff. They process your name, email, and message solely to deliver the email.</li>
                <li><strong>Cloudflare (Turnstile):</strong> Our contact form uses Cloudflare Turnstile for bot protection. Cloudflare may process browser signals and IP address to verify human submissions. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-[#bf2a2c] hover:underline">Cloudflare&apos;s Privacy Policy</a>.</li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">6. Your Rights Under the KDPA 2019</h2>
              <p className="mb-3">As a data subject under the Kenya Data Protection Act 2019, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data.</li>
                <li><strong>Erasure</strong> — ask us to delete your data, unless we are required to retain it for legal reasons.</li>
                <li><strong>Withdraw consent</strong> — at any time where processing is based on consent, without affecting prior lawful processing.</li>
                <li><strong>Object</strong> — to processing based on legitimate interest.</li>
                <li><strong>Portability</strong> — request your data in a structured, machine-readable format.</li>
              </ul>
              <div className="rounded-lg border border-[#e6dcda] border-l-[3px] border-l-[#bf2a2c] bg-[#f4efec] px-5 py-4">
                <p className="mb-0">
                  To exercise any right, email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-[#bf2a2c] hover:underline font-semibold">{siteConfig.email}</a>{" "}
                  with the subject line <strong>&ldquo;Data Subject Request&rdquo;</strong>. We will respond within{" "}
                  <strong>21 days</strong>. If you are unsatisfied with our response, you may complain to the{" "}
                  <strong>Office of the Data Protection Commissioner of Kenya</strong> at{" "}
                  <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer" className="text-[#bf2a2c] hover:underline">odpc.go.ke</a>.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">7. Cookies</h2>
              <div className="overflow-x-auto rounded-lg border border-[#e6dcda] mb-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1a0808]">
                      <th className="text-left text-[0.6875rem] font-bold uppercase tracking-widest text-[#c9a84c] px-4 py-3">Category</th>
                      <th className="text-left text-[0.6875rem] font-bold uppercase tracking-widest text-[#c9a84c] px-4 py-3">Purpose</th>
                      <th className="text-left text-[0.6875rem] font-bold uppercase tracking-widest text-[#c9a84c] px-4 py-3">Consent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-3 border-b border-[#e6dcda] font-semibold">Essential</td>
                      <td className="px-4 py-3 border-b border-[#e6dcda] text-[#6b5555]">Form security, session integrity. Cannot be disabled.</td>
                      <td className="px-4 py-3 border-b border-[#e6dcda] text-[#6b5555]">Not required</td>
                    </tr>
                    <tr className="bg-[#faf7f5]">
                      <td className="px-4 py-3 font-semibold">Analytics (GA4)</td>
                      <td className="px-4 py-3 text-[#6b5555]">Anonymised usage data — pages, sessions, referral source.</td>
                      <td className="px-4 py-3 text-[#6b5555]">Yes — asked on first visit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>You can change your cookie preference by clearing your browser&apos;s local storage or by contacting us. We do not use advertising or social media tracking cookies.</p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">8. Security</h2>
              <p className="mb-3">We take reasonable technical and organisational measures to protect your data, including HTTPS encryption, rate limiting on form endpoints, bot protection via Cloudflare Turnstile, and restricted access to form submissions.</p>
              <p>No internet transmission is 100% secure. If you have security concerns, contact us immediately at <a href={`mailto:${siteConfig.email}`} className="text-[#bf2a2c] hover:underline">{siteConfig.email}</a>.</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">9. Children&apos;s Privacy</h2>
              <p>This Site is not directed at children under 16. We do not knowingly collect personal data from children. If you believe a child has submitted data through this Site, please contact us and we will delete it promptly.</p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">10. Changes to This Policy</h2>
              <p>We may update this Policy from time to time. We will update the &ldquo;Last updated&rdquo; date when changes are made. Material changes will be noted on the Site homepage or communicated to newsletter subscribers by email.</p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-lg font-bold text-[#1a0808] pb-2 mb-4 border-b border-[#e6dcda]">11. Contact Us</h2>
              <div className="rounded-lg border border-[#e6dcda] border-l-[3px] border-l-[#bf2a2c] bg-[#f4efec] px-5 py-4 leading-[1.9]">
                <strong>{siteConfig.legalName}</strong><br />
                {siteConfig.address}<br />
                <a href={`mailto:${siteConfig.email}`} className="text-[#bf2a2c] hover:underline">{siteConfig.email}</a><br />
                <a href={`tel:${siteConfig.phoneHref}`} className="text-[#bf2a2c] hover:underline">{siteConfig.phone}</a>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-[#e6dcda] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-xs text-text-muted">
              {siteConfig.legalName} &middot; Reg. {siteConfig.companyNumber} &middot; Kenya
            </p>
            <div className="flex items-center gap-5">
              <Link href="/terms" className="text-xs text-text-muted hover:text-foreground transition-colors underline underline-offset-2">
                Terms of Use
              </Link>
              <Link href="/contact" className="text-xs text-[#bf2a2c] hover:text-[#9a1f21] transition-colors font-semibold">
                Contact CIDE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
