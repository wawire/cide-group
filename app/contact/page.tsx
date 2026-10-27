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
        breadcrumb={{ ancestors: [{ label: "Home", href: "/" }], current: "Contact" }}
        title="Contact us"
        description="Discuss a programme, tender or partnership. We help governments, businesses, civil society and development partners turn priorities into practical plans."
      />

      <ContactForm />
    </main>
  )
}
