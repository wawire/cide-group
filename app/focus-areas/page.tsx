import { focusAreas } from "@/content/focus-areas"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Our Integrated Solutions | CIDE Group",
  description:
    "Explore CIDE Group's integrated solutions across climate, education, agriculture, child rights, economic empowerment, and WASH.",
  alternates: { canonical: `${siteConfig.url}/focus-areas` },
  openGraph: {
    title: "Our Integrated Solutions | CIDE Group",
    description:
      "Integrated solutions across climate, education, agriculture, child rights, economic empowerment, and WASH.",
    url: `${siteConfig.url}/focus-areas`,
  },
}

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/focus-areas/humanitarian-community-settlement.jpg"
          alt="Integrated development solutions across thematic areas"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/92 via-[#1a0808]/50 to-[#bf2a2c]/15" />
        <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#bf2a2c] via-[#c9a84c] to-transparent" />
        <div className="relative z-10 section-shell pb-16 pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Our Integrated Solutions</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-4xl leading-[0.95]">
            Thematic solutions grounded in Africa's realities
          </h1>
          <p className="text-xl text-white/75 max-w-2xl leading-relaxed">
            Where policy, systems, communities, and implementation realities come together for lasting impact.
          </p>
        </div>
      </section>

      {/* ── Full-bleed image card grid ────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="section-shell">

          {/* Top row — large feature + tall side card */}
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-4 mb-4">

            {/* Feature card */}
            {focusAreas[0] && (
              <Link href={`/focus-areas/${focusAreas[0].slug}`} className="group block">
                <div className="relative h-80 lg:h-[480px] rounded-xl overflow-hidden">
                  <Image
                    src={focusAreas[0].image}
                    alt={focusAreas[0].title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-2">Focus Area</p>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2 leading-tight">
                      {focusAreas[0].title}
                    </h2>
                    <p className="text-sm text-white/65 leading-relaxed mb-4 max-w-md hidden md:block">
                      {focusAreas[0].summary}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a84c] group-hover:gap-3 transition-all uppercase tracking-wide">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Side card */}
            {focusAreas[1] && (
              <Link href={`/focus-areas/${focusAreas[1].slug}`} className="group block">
                <div className="relative h-80 lg:h-[480px] rounded-xl overflow-hidden">
                  <Image
                    src={focusAreas[1].image}
                    alt={focusAreas[1].title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/90 via-[#1a0808]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-2">Focus Area</p>
                    <h2 className="font-serif text-2xl font-semibold text-white mb-3 leading-tight">
                      {focusAreas[1].title}
                    </h2>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a84c] group-hover:gap-3 transition-all uppercase tracking-wide">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Middle row — three equal cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {focusAreas.slice(2, 5).map((area) => (
              <Link key={area.slug} href={`/focus-areas/${area.slug}`} className="group block">
                <div className="relative h-64 md:h-72 rounded-xl overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/85 via-[#1a0808]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-serif text-lg font-semibold text-white mb-2 leading-snug">
                      {area.title}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c9a84c] group-hover:gap-2.5 transition-all uppercase tracking-wide">
                      Explore <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row — remaining */}
          {focusAreas.length > 5 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.slice(5).map((area) => (
                <Link key={area.slug} href={`/focus-areas/${area.slug}`} className="group block">
                  <div className="relative h-56 rounded-xl overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0808]/85 via-[#1a0808]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="font-serif text-lg font-semibold text-white mb-2 leading-snug">
                        {area.title}
                      </h2>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c9a84c] group-hover:gap-2.5 transition-all uppercase tracking-wide">
                        Explore <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Pillars strip ─────────────────────────────────────────────────── */}
      <section className="bg-[#1a0808] py-12">
        <div className="section-shell">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Community-Led", desc: "Communities closest to the challenge at the centre of every decision." },
              { title: "Evidence-Based", desc: "Research, analytics, and learning guide strategy and continuous adaptation." },
              { title: "Built for Scale", desc: "Solutions designed for long-term resilience, replication, and measurable impact." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#bf2a2c] pl-5">
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="section-shell">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/focus-areas/livelihoods-women-farming.png"
              alt="CIDE community development work"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#1a0808]/80" />
            <div className="relative z-10 py-16 px-8 md:px-16 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-4">Work With Us</p>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
                Bring your challenge to us
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                We are ready to design support that fits your context, mandate, and implementation reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide"
              >
                Start a Conversation
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
