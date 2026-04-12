export type Region = "East Africa" | "West Africa" | "Horn of Africa" | "Southern Africa" | "Francophone Africa"

export type CountryPresence = {
  name: string
  region: Region
  flag: string           // emoji flag
  presenceType: "Active Programmes" | "Research & Advisory" | "Partner Networks"
  sectors: string[]
  highlight: string      // one-line evidence of presence
  projectCount: number
}

export const countryPresences: CountryPresence[] = [
  {
    name: "Kenya",
    region: "East Africa",
    flag: "🇰🇪",
    presenceType: "Active Programmes",
    sectors: ["MEL", "Health Systems", "Climate", "GEDSI", "ICT & Digital", "Policy Advocacy"],
    highlight: "Headquarters — Nairobi. Largest portfolio of active projects across health, climate, and digital solutions.",
    projectCount: 8,
  },
  {
    name: "Uganda",
    region: "East Africa",
    flag: "🇺🇬",
    presenceType: "Active Programmes",
    sectors: ["Climate Advocacy", "Research", "Strategic Communications"],
    highlight: "Climate justice coalition building and cross-border policy advocacy across East Africa.",
    projectCount: 3,
  },
  {
    name: "Tanzania",
    region: "East Africa",
    flag: "🇹🇿",
    presenceType: "Active Programmes",
    sectors: ["Behaviour Change", "Research", "Campaign Management"],
    highlight: "Multi-channel behaviour change campaigns reaching 2M+ people across six countries.",
    projectCount: 3,
  },
  {
    name: "Rwanda",
    region: "East Africa",
    flag: "🇷🇼",
    presenceType: "Active Programmes",
    sectors: ["Campaign Management", "MEL", "Capacity Development"],
    highlight: "Evidence-based campaign design and MEL system strengthening.",
    projectCount: 2,
  },
  {
    name: "Ethiopia",
    region: "Horn of Africa",
    flag: "🇪🇹",
    presenceType: "Active Programmes",
    sectors: ["Research", "Humanitarian", "Campaign Management"],
    highlight: "Research and communications support for humanitarian and development programmes.",
    projectCount: 2,
  },
  {
    name: "Somalia",
    region: "Horn of Africa",
    flag: "🇸🇴",
    presenceType: "Research & Advisory",
    sectors: ["Research", "Humanitarian", "GEDSI"],
    highlight: "Research and evidence advisory in complex, fragile contexts.",
    projectCount: 1,
  },
  {
    name: "South Sudan",
    region: "Horn of Africa",
    flag: "🇸🇸",
    presenceType: "Research & Advisory",
    sectors: ["Humanitarian", "Research", "Capacity Development"],
    highlight: "Capacity development and evidence-based advisory in post-conflict settings.",
    projectCount: 1,
  },
  {
    name: "Nigeria",
    region: "West Africa",
    flag: "🇳🇬",
    presenceType: "Partner Networks",
    sectors: ["Policy Advocacy", "Research", "Enterprise Support"],
    highlight: "Partner networks and policy advisory across West Africa's largest economy.",
    projectCount: 1,
  },
  {
    name: "Ghana",
    region: "West Africa",
    flag: "🇬🇭",
    presenceType: "Partner Networks",
    sectors: ["Enterprise Support", "ICT & Digital", "Capacity Development"],
    highlight: "Digital solutions and enterprise support through established partner networks.",
    projectCount: 1,
  },
  {
    name: "Senegal",
    region: "Francophone Africa",
    flag: "🇸🇳",
    presenceType: "Partner Networks",
    sectors: ["Research", "Policy Advisory", "Strategic Communications"],
    highlight: "Francophone advisory and research through regional partnerships.",
    projectCount: 1,
  },
  {
    name: "Cameroon",
    region: "Francophone Africa",
    flag: "🇨🇲",
    presenceType: "Partner Networks",
    sectors: ["Research", "GEDSI", "Capacity Development"],
    highlight: "GEDSI and research advisory through Francophone partner networks.",
    projectCount: 1,
  },
  {
    name: "Zambia",
    region: "Southern Africa",
    flag: "🇿🇲",
    presenceType: "Research & Advisory",
    sectors: ["Agriculture", "Climate", "Research"],
    highlight: "Agriculture, food security and climate resilience advisory.",
    projectCount: 1,
  },
]

export const regions: Region[] = [
  "East Africa",
  "Horn of Africa",
  "West Africa",
  "Francophone Africa",
  "Southern Africa",
]

export const presenceTypeColors: Record<CountryPresence["presenceType"], { badge: string; dot: string }> = {
  "Active Programmes":   { badge: "bg-[#bf2a2c]/10 text-[#bf2a2c] border-[#bf2a2c]/20",  dot: "bg-[#bf2a2c]" },
  "Research & Advisory": { badge: "bg-[#c9a84c]/15 text-[#7a5e0a] border-[#c9a84c]/30",  dot: "bg-[#c9a84c]" },
  "Partner Networks":    { badge: "bg-[#1a0808]/8 text-[#4a3535] border-[#e2d9d9]",       dot: "bg-[#9a7070]" },
}
