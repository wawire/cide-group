"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
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
    lineClass: "bg-[#c9a84c]",
    kickerClass: "text-[#c9a84c]",
    stripClass: "bg-[#c9a84c]",
    badgeBg: "bg-[#c9a84c]/15",
    badgeText: "text-[#7a5c0e]",
    borderClass: "border-[#c9a84c]",
  },
  Secretariat: {
    label: "Secretariat",
    description:
      "Executive leadership and core operations team directing strategy, partnerships, and organisational management.",
    lineClass: "bg-[#bf2a2c]",
    kickerClass: "text-[#bf2a2c]",
    stripClass: "bg-[#bf2a2c]",
    badgeBg: "bg-[#bf2a2c]/10",
    badgeText: "text-[#bf2a2c]",
    borderClass: "border-[#bf2a2c]",
  },
  "Technical Advisory": {
    label: "Technical Advisory",
    description:
      "Senior thematic specialists leading CIDE Group's work across climate, education, safeguarding, inclusion, and communications.",
    lineClass: "bg-[#140909]",
    kickerClass: "text-[#140909]",
    stripClass: "bg-[#140909]",
    badgeBg: "bg-[#140909]/8",
    badgeText: "text-[#4a3030]",
    borderClass: "border-[#140909]/40",
  },
}

/* ── Initials fallback ──────────────────────────────────────────────────── */
function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#ede5e0]">
      <span className="text-4xl font-bold text-[#bf2a2c]/25 select-none tracking-tight">{letters}</span>
    </div>
  )
}

/* ── Card photo — grayscale → colour on hover ───────────────────────────── */
function CardPhoto({ member }: { member: TeamMember }) {
  const [err, setErr] = useState(false)
  if (!member.image || err) return <Initials name={member.name} />
  return (
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-[filter,transform] duration-500 ease-out"
      onError={() => setErr(true)}
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
    />
  )
}

/* ── Modal photo — always full colour ───────────────────────────────────── */
function ModalPhoto({ member }: { member: TeamMember }) {
  const [err, setErr] = useState(false)
  if (!member.image || err) return <Initials name={member.name} />
  return (
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover object-top"
      sizes="300px"
    />
  )
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
      className="group w-full h-full text-left flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf2a2c] focus-visible:ring-offset-2 rounded-2xl"
    >
      {/* Photo at 50% card width — centred, thin accent border on bottom + right */}
      <div className="w-1/2 mx-auto">
        <div
          className={cn(
            "relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-[#ede5e0] border-b-2 border-r-2",
            borderClass,
          )}
        >
          <CardPhoto member={member} />
        </div>
      </div>
      {/* Text always at the top of its area, wraps naturally */}
      <div className="mt-3.5 text-center flex-1">
        <p className="font-bold text-[#140909] text-[15px] leading-snug group-hover:text-[#bf2a2c] transition-colors duration-200">
          {member.name}
        </p>
        <p className="mt-1 text-[13px] text-[#7a6666] leading-snug break-words">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px]" onClick={onClose} aria-hidden="true" />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Profile: ${member.name}`}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-270 max-h-[92vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#f0eae6] hover:bg-[#e2d9d4] transition-colors"
        >
          <X size={17} strokeWidth={2.5} className="text-[#5a4a4a]" />
        </button>

        <div className="grid md:grid-cols-[380px_1fr]">
          {/* Photo — no strip, clean match to card style */}
          <div className="relative aspect-4/5 md:aspect-auto md:min-h-115 bg-[#ede5e0] shrink-0">
            <ModalPhoto member={member} />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col gap-5">
            <span className={cn("w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]", cfg.badgeBg, cfg.badgeText)}>
              {cfg.label}
            </span>

            <div>
              <h2 className="text-xl font-bold text-[#140909] leading-tight">{member.name}</h2>
              <p className="mt-1 text-sm text-[#6b5c5c] leading-snug font-medium">{member.title}</p>
            </div>

            <hr className="border-[#ede5e0]" />

            <p className="text-[14px] leading-[1.7] text-[#4a3a3a] flex-1">{member.bio}</p>

            {member.expertise.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9a8888] mb-2">Focus areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[#f5f0ec] text-[12px] font-medium text-[#6b5c5c]">
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
              <div className={cn("mb-8 pl-4 border-l-4", cfg.borderClass)}>
                <h2 className={cn("text-xl font-bold leading-tight", cfg.kickerClass)}>{cfg.label}</h2>
                <p className="mt-1.5 text-sm text-[#7a6666] max-w-xl leading-relaxed">{cfg.description}</p>
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
