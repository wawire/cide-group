import Link from "next/link"
import { siteConfig } from "@/content/site"

export default function CTASection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #bf2a2c 0%, #9a1f21 50%, #1a0808 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-white/5 blur-[80px] rounded-full" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-5">Let's Work Together</p>
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
          Ready to build
          <br />
          lasting impact?
        </h2>
        <p className="text-lg md:text-xl mb-12 text-white/75 leading-relaxed max-w-xl mx-auto">
          Partner with us to design and deliver locally grounded, evidence-driven solutions across Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/contact"
            className="bg-white text-[#bf2a2c] hover:bg-white/90 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all shadow-lg"
          >
            Get in Touch
          </Link>
          <Link
            href="/focus-areas"
            className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-wide transition-all"
          >
            Explore Solutions
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white/60 text-sm">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors font-medium">
            {siteConfig.email}
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white transition-colors font-medium">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
