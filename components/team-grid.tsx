"use client"

import { useState, useEffect, useCallback } from "react"
import TeamPortrait from "@/components/team-portrait"
import { X } from "lucide-react"
import { type TeamMember, type TeamGroup, teamGroupOrder, publishedTeamMembers } from "@/content/team"
import { cn } from "@/lib/utils"

/* ── Per-group colour tokens (Tailwind only — no inline styles) ─────────── */
const groupConfig: Record<
  TeamGroup,
  {
    label: string
    description: string
    lineClass: string
    kickerClass: string
    stripClass: string
    badgeBg: string
    badgeText: string
    borderClass: string
  }
> = {
  "Advisory Board": {
    label: "Advisory Board",
    description:
      "Distinguished international specialists providing strategic guidance on CIDE Group's global advisory and programme work.",
    lineClass: "bg-accent-gold",
    kickerClass: "text-accent-gold",
    stripClass: "bg-accent-gold",
    badgeBg: "bg-accent-gold/15",
    badgeText: "text-accent-brown",
    borderClass: "border-accent-gold",
  },
  Secretariat: {
    label: "Secretariat",
    description:
      "Executive leadership and core operations team directing strategy, partnerships, and organisational management.",
    lineClass: "bg-primary",
    kickerClass: "text-primary",
    stripClass: "bg-primary",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    borderClass: "border-primary",
  },
  "Technical Advisory": {
    label: "Technical Advisory",
    description:
      "Senior thematic specialists leading CIDE Group's work across climate, education, safeguarding, inclusion, and communications.",
    lineClass: "bg-hero-background",
    kickerClass: "text-hero-background",
    stripClass: "bg-hero-background",
    badgeBg: "bg-hero-background/8",
    badgeText: "text-text-secondary",
    borderClass: "border-hero-background/40",
  },
}


/* ── Card ────────────────────────────────────────────────────────────────── */
function MemberCard({
  member,
  borderClass,
  onClick,
}: {
  member: TeamMember
  borderClass: string
  onClick: (m: TeamMember) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(member)}
      className="group w-full h-full text-left flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
    >
      {/* Photo at 50% card width — centred, thin accent border on bottom + right */}
      <div className="w-1/2 mx-auto">
        <div
          className={cn(
            "relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-surface-secondary border-b-2 border-r-2",
            borderClass,
          )}
        >
          <TeamPortrait
            name={member.name}
            src={member.image}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
            className="grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-[filter,transform] duration-500 ease-out"
          />
        </div>
      </div>
      {/* Text always at the top of its area, wraps naturally */}
      <div className="mt-3.5 text-center flex-1">
        <p className="font-bold text-hero-background text-[15px] leading-snug group-hover:text-primary transition-colors duration-200">
          {member.name}
        </p>
        <p className="mt-1 text-[13px] text-text-muted leading-snug break-words">
          {member.title}
        </p>
      </div>
    </button>
  )
}

/* ── Modal ───────────────────────────────────────────────────────────────── */
function MemberModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  useEffect(() => {
    if (!member) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [member, onClose])

  if (!member) return null
  const cfg = groupConfig[member.group]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-10">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px]" onClick={onClose} aria-hidden="true" />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Profile: ${member.name}`}
        className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-270 max-h-[96vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-surface-secondary hover:bg-border transition-colors"
        >
          <X size={16} strokeWidth={2.5} className="text-text-secondary" />
        </button>

        <div className="grid md:grid-cols-[380px_1fr]">
          {/* Photo — landscape crop on mobile, portrait on desktop */}
          <div className="relative aspect-[4/3] sm:aspect-[3/2] md:aspect-auto md:min-h-115 bg-surface-secondary shrink-0">
            <TeamPortrait name={member.name} src={member.image} sizes="300px" />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-10 flex flex-col gap-3 md:gap-5">
            <span className={cn("w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]", cfg.badgeBg, cfg.badgeText)}>
              {cfg.label}
            </span>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-hero-background leading-tight">{member.name}</h2>
              <p className="mt-1 text-xs sm:text-sm text-text-muted leading-snug font-medium">{member.title}</p>
            </div>

            <hr className="border-surface-secondary" />

            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-text-secondary flex-1">{member.bio}</p>

            {member.expertise.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted mb-2">Focus areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((tag) => (
                    <span key={tag} className="px-2 sm:px-2.5 py-1 rounded-full bg-surface-secondary text-[11px] sm:text-[12px] font-medium text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Page export ─────────────────────────────────────────────────────────── */
export default function TeamGrid() {
  const [active, setActive] = useState<TeamMember | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <div className="space-y-20 md:space-y-24">
        {teamGroupOrder.map((group) => {
          const members = publishedTeamMembers.filter((m) => m.group === group)
          if (members.length === 0) return null
          const cfg = groupConfig[group]

          return (
            <section key={group} id={group.toLowerCase().replace(/\s+/g, "-")}>
              {/* Section heading — single line with left accent */}
              <div className={cn("mb-6 md:mb-8 pl-3 md:pl-4 border-l-4", cfg.borderClass)}>
                <h2 className={cn("text-base sm:text-lg md:text-xl font-bold leading-tight", cfg.kickerClass)}>{cfg.label}</h2>
                <p className="mt-1.5 text-xs sm:text-sm text-text-muted max-w-xl leading-relaxed">{cfg.description}</p>
              </div>

              {/* Card grid — flex-wrap so partial rows centre automatically */}
              <div className="flex flex-wrap justify-center gap-3">
                {members.map((member) => (
                  <div
                    key={member.slug}
                    className="w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] lg:w-[calc(25%-9px)] flex flex-col"
                  >
                    <MemberCard member={member} borderClass={cfg.borderClass} onClick={setActive} />
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <MemberModal member={active} onClose={close} />
    </>
  )
}
