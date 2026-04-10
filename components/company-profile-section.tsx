import { Card } from "@/components/ui/card"
import { companyProfile, siteConfig } from "@/content/site"

export default function CompanyProfileSection() {
  return (
    <section className="py-20 bg-[#f4efec] border-y border-[#e6dcda]">
      <div className="section-shell">
        <div className="text-center mb-10">
          <p className="section-kicker mb-3">Vision, Mission and Values</p>
          <h2 className="section-heading">What Guides CIDE Group</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <Card className="p-8 bg-white border-[#e2d9d9]">
            <p className="section-kicker mb-3">Our Mission</p>
            <p className="text-xl leading-relaxed text-foreground">{companyProfile.mission}</p>
          </Card>
          <Card className="p-8 bg-white border-[#e2d9d9]">
            <p className="section-kicker mb-3">Our Vision</p>
            <p className="text-xl leading-relaxed text-foreground">{companyProfile.vision}</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <Card className="p-8 bg-white border-[#e2d9d9]">
            <p className="section-kicker mb-4">Values Guide Our Every Move</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {companyProfile.coreValues.map((value) => (
                <div key={value.title} className="rounded-lg border border-[#e2d9d9] bg-[#faf7f5] px-4 py-4">
                  <p className="text-sm font-semibold text-foreground mb-2">{value.title}</p>
                  <p className="text-xs leading-relaxed text-text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-[#1a0808] text-white border-[#1a0808]">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Profile At A Glance</p>
            <div className="space-y-4 text-sm">
              <p className="text-white/85">
                <span className="text-white font-semibold">Legal Name:</span> {siteConfig.legalName}
              </p>
              <p className="text-white/85">
                <span className="text-white font-semibold">Head Office:</span> {siteConfig.address}
              </p>
              <p className="text-white/85">
                <span className="text-white font-semibold">Email:</span> {siteConfig.email}
              </p>
              <p className="text-white/85">
                <span className="text-white font-semibold">Phone:</span> {siteConfig.phone}
              </p>
              <p className="text-white/85">
                <span className="text-white font-semibold">Registration:</span> {siteConfig.companyNumber}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
