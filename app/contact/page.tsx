import Image from "next/image"
import ContactForm from "./ContactForm"

import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Contact CIDE Group - Partner With Us",
  description:
    "Reach out to CIDE Group to co-design development solutions for your community, organization, or government programme across Africa.",
  keywords: ["contact CIDE", "partnership Africa", "development consultancy Kenya", "co-creation"],
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact CIDE Group - Partner With Us",
    description:
      "Reach out to CIDE Group to co-design development solutions for your community, organization, or government programme across Africa.",
    url: `${siteConfig.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="/research/community-health-workers-mobile-tablets-rural.jpg"
          alt="CIDE Group engaging with field teams and community partners"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/55 to-[#bf2a2c]/15" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6 max-w-3xl leading-tight">
            Let&apos;s Co-Create Lasting Change Together
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Whether you are a government agency, donor organization, NGO, or civil society partner - we are ready to
            listen and co-design practical solutions.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
