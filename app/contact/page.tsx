import PageHero from "@/components/page-hero"
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
      <PageHero
        eyebrow="Get in Touch"
        title="Contact us"
        description="Whether you are a government agency, donor organization, NGO, or civil society partner - we are ready to listen and co-design practical solutions."
      />

      <ContactForm />
    </main>
  )
}
