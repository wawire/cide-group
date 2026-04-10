import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Mail } from "lucide-react"
import { siteConfig, companyProfile } from "@/content/site"

export const metadata = {
  title: "Careers - Join CIDE Group",
  description:
    "Join a pan-African development advisory and implementation team working across research, programme design, MEL, communications, and systems strengthening.",
  alternates: { canonical: `${siteConfig.url}/careers` },
  openGraph: {
    title: "Careers - Join CIDE Group",
    description:
      "Opportunities to work with CIDE Group across Africa in development advisory, research, programme implementation, and communications.",
    url: `${siteConfig.url}/careers`,
  },
}

const whyJoin = [
  {
    title: "Pan-African reach",
    description:
      "Work on assignments spanning Anglophone, Francophone, and Lusophone Africa — from community-level field delivery to national policy engagement.",
  },
  {
    title: "Evidence-led practice",
    description:
      "Every engagement is grounded in applied research, rigorous MEL, and learning systems that drive continuous improvement.",
  },
  {
    title: "Multidisciplinary team",
    description:
      "Collaborate with specialists across climate, education, GEDSI, safeguarding, communications, and programme management.",
  },
  {
    title: "Locally grounded",
    description:
      "We work closely with communities and national partners — our solutions are shaped by the people closest to the challenges.",
  },
]

const areasOfWork = [
  "Programme Design & Implementation",
  "Research, Evidence & Policy Advisory",
  "Monitoring, Evaluation & Learning",
  "Strategic Communications & Knowledge Management",
  "Gender Equity, Diversity and Social Inclusion (GEDSI)",
  "Climate, Energy & Environment",
  "Agriculture, Food Security & Livelihoods",
  "Child Rights & Safeguarding",
  "ICT & Digital Solutions",
  "Capacity Development",
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <Image
          src="/hero/field-programme-implementation.png"
          alt="CIDE team working on development programmes across Africa"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/60 to-[#bf2a2c]/15" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Careers</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-5 leading-tight max-w-4xl">
            Help build Africa's development future
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            CIDE Group brings together practitioners, researchers, and communicators who are serious about
            locally grounded, evidence-driven impact across Africa.
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="max-w-3xl mb-10">
            <p className="section-kicker mb-4">Why CIDE Group</p>
            <h2 className="section-heading mb-5">A team built for serious development work</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our multidisciplinary team brings extensive experience working in leading international NGOs and
              Government Ministries, Departments and Agencies, supporting global development partners including
              USAID, BMZ, KOICA, SIDA, EU, AU, IGAD, and UN Agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {whyJoin.map((item) => (
              <Card key={item.title} className="border-border bg-white p-7">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Values */}
          <div className="border-t border-border pt-12">
            <p className="section-kicker mb-6">Our Values</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {companyProfile.coreValues.map((value) => (
                <div key={value.title} className="rounded-xl border border-[#e2d9d9] bg-[#faf7f5] px-5 py-5">
                  <p className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">{value.title}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas we hire in */}
      <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
        <div className="section-shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-kicker mb-4">Areas of Work</p>
            <h2 className="section-heading mb-5">Where we bring in talent</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We engage consultants, associates, and full-time specialists across a broad range of thematic areas.
              Whether you are an experienced technical advisor or an emerging practitioner, we are interested in
              professionals who combine subject matter depth with a commitment to community-led solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {areasOfWork.map((area) => (
              <div key={area} className="flex items-start gap-3 rounded-lg border border-[#e2d9d9] bg-white px-4 py-3">
                <CheckCircle size={15} className="text-[#bf2a2c] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles / expression of interest */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="max-w-3xl mb-10">
            <p className="section-kicker mb-4">Work With Us</p>
            <h2 className="section-heading mb-5">We welcome expressions of interest</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Are you a development practitioner, researcher, or communications specialist? We are always interested
              in hearing from talented people who share our commitment to locally grounded, evidence-driven impact
              across Africa.
            </p>
          </div>

          <Card className="border-border bg-white p-8 lg:p-12 max-w-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#bf2a2c]/10 text-[#bf2a2c] shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Send an expression of interest</h3>
                <p className="text-text-secondary text-sm">
                  Share your CV and a brief note on your thematic focus and availability.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=Expression of Interest – CIDE Group`}
              className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide"
            >
              {siteConfig.email}
              <ArrowRight size={15} />
            </a>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="w-full max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5">Want to partner, not join?</h2>
          <p className="text-lg text-white/90 mb-8">
            If you are an organisation or institution looking to collaborate, visit our partnerships page.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/partners">
              Partnership Approach
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
