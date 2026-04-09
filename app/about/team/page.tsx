import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { publishedTeamMembers, teamGroupOrder, type TeamGroup } from "@/content/team"
import { cn } from "@/lib/utils"

import { siteConfig } from "@/content/site"

export const metadata = {
  title: "Our Team - CIDE Group Leadership & Technical Advisors",
  description:
    "Meet the CIDE Group team: senior leadership, technical advisory specialists, and communications experts driving development impact across Africa.",
  alternates: { canonical: `${siteConfig.url}/about/team` },
  openGraph: {
    title: "Our Team - CIDE Group Leadership & Technical Advisors",
    description:
      "Meet the CIDE Group team: senior leadership, technical advisory specialists, and communications experts driving development impact across Africa.",
    url: `${siteConfig.url}/about/team`,
  },
}

const groupMeta: Record<
  TeamGroup,
  {
    title: string
    description: string
    badgeClass: string
    dividerClass: string
  }
> = {
  Leadership: {
    title: "Leadership",
    description: "Strategic direction, partnership stewardship, and executive oversight for high-trust assignments.",
    badgeClass: "bg-primary/8 text-primary",
    dividerClass: "bg-[#bf2a2c]",
  },
  "Technical Advisory": {
    title: "Technical Advisory",
    description: "Senior specialists leading thematic work across policy, climate, GEDSI, resilience, and programme design.",
    badgeClass: "bg-[#140909]/6 text-[#140909]",
    dividerClass: "bg-[#140909]",
  },
  "Communications and Knowledge Management": {
    title: "Communications and Knowledge",
    description: "Advisors who turn strategy, evidence, and delivery insight into strong narratives, knowledge products, and visibility.",
    badgeClass: "bg-[#c9a84c]/18 text-[#8a6a14]",
    dividerClass: "bg-[#c9a84c]",
  },
}

function formatExpertise(expertise: string[]) {
  if (expertise.length <= 1) {
    return expertise[0] ?? ""
  }

  if (expertise.length === 2) {
    return `${expertise[0]} and ${expertise[1]}`
  }

  return `${expertise.slice(0, -1).join(", ")}, and ${expertise.at(-1)}`
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-[#140909]">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=85"
          alt="CIDE Group team collaboration"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,9,9,0.94)_0%,rgba(20,9,9,0.86)_45%,rgba(191,42,44,0.28)_100%)]" />

        <div className="relative z-10 section-shell py-24 md:py-32">
          <div className="max-w-5xl">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 mb-7">
              <ArrowLeft size={16} />
              Back to About
            </Link>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a84c] mb-4">Our Team</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6 max-w-5xl leading-[0.98]">
              The people behind CIDE Group&apos;s advisory work.
            </h1>
            <p className="text-xl text-white/78 max-w-3xl leading-relaxed mb-8">
              Our team combines senior leadership, technical depth, and communications expertise across assignments that
              demand credibility, clarity, and disciplined delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/92">
                <Link href="/contact">
                  Talk to Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/6 text-white hover:bg-white/12 hover:text-white"
              >
                <Link href="/focus-areas">Explore Focus Areas</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/68">
              <span>Executive leadership</span>
              <span>Technical advisory</span>
              <span>Communications and knowledge management</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-20">
        <div className="section-shell">
          <div className="space-y-16 md:space-y-20">
            {teamGroupOrder.map((group) => {
              const members = publishedTeamMembers.filter((member) => member.group === group)
              if (members.length === 0) return null

              const meta = groupMeta[group]

              return (
                <section key={group} className="border-t border-border pt-10 first:border-t-0 first:pt-0 md:pt-12">
                  <div className="grid gap-10 xl:grid-cols-[260px_minmax(0,1fr)]">
                    <div className="xl:sticky xl:top-28">
                      <p className="section-kicker mb-4">{meta.title}</p>
                      <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">{meta.title}</h2>
                      <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{meta.description}</p>
                      <div className="mt-6 inline-flex rounded-full border border-border bg-[#faf7f5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                        {members.length} {members.length === 1 ? "profile" : "profiles"}
                      </div>
                    </div>

                    <div className="space-y-10">
                      {members.map((member, index) => (
                        <article key={member.slug} className="grid gap-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8">
                          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-[#efe6e1]">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 768px) 100vw, 190px"
                            />
                            <div className={cn("absolute inset-x-0 bottom-0 h-1.5", meta.dividerClass)} />
                          </div>

                          <div className={cn(index !== members.length - 1 && "border-b border-border pb-10", "md:pt-1")}>
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div className="max-w-3xl">
                                <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                                  {member.name}
                                </h3>
                                <p className="mt-3 text-base font-medium leading-relaxed text-text-secondary">
                                  {member.title}
                                </p>
                              </div>
                              <span
                                className={cn(
                                  "inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                                  meta.badgeClass,
                                )}
                              >
                                {meta.title}
                              </span>
                            </div>

                            <p className="mt-5 max-w-4xl text-base leading-relaxed text-text-secondary md:text-lg">
                              {member.bio}
                            </p>

                            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-text-secondary md:text-[15px]">
                              <span className="font-semibold text-primary">Focus:</span> {formatExpertise(member.expertise)}.
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-2">
        <div className="section-shell">
          <div className="rounded-[30px] border border-border bg-[#f6f0ec] px-8 py-10 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Associate Network</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Additional sector and country depth when the assignment calls for it.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                  Beyond the core team, CIDE works with a wider network of associates and collaborators across Africa.
                  That gives each mandate the right combination of local context, specialist expertise, and delivery
                  capacity without forcing a generic structure onto the work.
                </p>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to Our Team
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
