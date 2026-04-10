export type NavLink = {
  label: string
  href: string
  description?: string
}

export type ImpactMetric = {
  number: number
  value: string
  label: string
  suffix: string
}

export const siteConfig = {
  name: "CIDE Group",
  legalName: "COMMUNE IDEE (CIDE) GROUPE LTD",
  tagline: "Pan-African Development Advisory, Research & Programme Implementation Firm",
  narrativeLine:
    "CIDE Group delivers locally grounded, evidence-driven, and impact-oriented solutions to Africa's most complex development, humanitarian, and business challenges.",
  description:
    "CIDE Group is a pan-African development advisory, research, programme design, and implementation organisation working across Anglophone, Francophone, and Lusophone Africa.",
  url: "https://cidegroup.org",
  email: "communications@cidegroup.org",
  partnershipsEmail: "partnerships@cidegroup.org",
  phone: "+254 745 704 580",
  phoneHref: "+254745704580",
  address: "Nairobi, Kenya",
  companyNumber: "PVT-BB1OWQW3",
  heroEyebrow: "Pan-African Development Advisory | Nairobi, Kenya",
  heroSubheading:
    "Locally grounded, evidence-driven, and impact-oriented support across development, humanitarian, and market system challenges.",
  logo: {
    primary: "/brand/cide-group-logo-color.svg",
    png: "/brand/cide-group-logo-color.png",
    socialCard: "/brand/cide-logo-social-card.jpg",
    alt: "CIDE Group",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  twitterHandle: "@cidegroup",
  contactResponseSla: "48 hours",
} as const

export const aboutNavLinks: NavLink[] = [
  {
    label: "Company Profile",
    href: "/about",
    description: "Mission, profile, and operating approach.",
  },
  {
    label: "Team",
    href: "/about/team",
    description: "Leadership, technical advisory, and communications specialists.",
  },
  {
    label: "Partnership Approach",
    href: "/partners",
    description: "How we structure collaboration across sectors and programmes.",
  },
]

export const primaryNavLinks: NavLink[] = [
  { label: "Research", href: "/research" },
]

export const exploreLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/about/team" },
  { label: "Services", href: "/services" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Partnerships", href: "/partners" },
  { label: "Contact", href: "/contact" },
]

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
]

export const impactMetrics: ImpactMetric[] = [
  { number: 500, value: "500+", label: "Communities Reached", suffix: "+" },
  { number: 150, value: "150+", label: "Projects Completed", suffix: "+" },
  { number: 12, value: "12", label: "Countries", suffix: "" },
  { number: 200, value: "200+", label: "Research Reports", suffix: "+" },
  { number: 85, value: "85+", label: "Partners Supported", suffix: "+" },
  { number: 2, value: "2M+", label: "People Impacted", suffix: "M+" },
  { number: 50, value: "50+", label: "Campaigns Managed", suffix: "+" },
  { number: 100, value: "100%", label: "Partner Return Rate", suffix: "%" },
]

export const companyProfile = {
  mission:
    "To empower organisations and enterprises with innovative, sustainable solutions that inspire change and deliver lasting impact.",
  vision:
    "To be a trusted leader in delivering practical, evidence-based solutions that strengthen systems to enable communities to thrive.",
  coreValues: [
    {
      title: "COMPASSION",
      description: "We put people first, acting with empathy, dignity, and respect.",
    },
    {
      title: "INTEGRITY",
      description: "We uphold honesty, transparency, and accountability in all engagements.",
    },
    {
      title: "DEPENDABILITY",
      description: "We deliver on our commitments and prioritise client success.",
    },
    {
      title: "EMPOWERMENT",
      description: "We promote inclusive environments where people and institutions can succeed.",
    },
    {
      title: "INNOVATION",
      description: "We translate ideas and knowledge into practical, high-impact solutions.",
    },
    {
      title: "PROFESSIONALISM",
      description: "We maintain the highest ethical and quality standards in our work.",
    },
  ],
  approach: ["Research", "Design", "Implement", "Evaluate"],
  serviceJourney: ["Research", "Design", "Implement", "Evaluate"],
  pillars: [
    "Community leadership, participation and ownership",
    "Evidence-based decision-making",
    "Sustainability and systems strengthening",
    "Inclusion, dignity, and accountability",
    "Scalable and measurable impact",
    "Locally grounded implementation",
  ],
} as const

export const contactCountries = [
  "Kenya",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Ethiopia",
  "Somalia",
  "South Sudan",
  "Burundi",
  "Djibouti",
  "Eritrea",
  "Nigeria",
  "Ghana",
  "Senegal",
  "Cote d'Ivoire",
  "Mali",
  "Burkina Faso",
  "Niger",
  "Guinea",
  "Sierra Leone",
  "Liberia",
  "Togo",
  "Benin",
  "Gambia",
  "Guinea-Bissau",
  "Mauritania",
  "Cape Verde",
  "DR Congo",
  "Congo",
  "Cameroon",
  "Chad",
  "Central African Republic",
  "Gabon",
  "Equatorial Guinea",
  "South Africa",
  "Zambia",
  "Zimbabwe",
  "Malawi",
  "Mozambique",
  "Botswana",
  "Namibia",
  "Lesotho",
  "Eswatini",
  "Madagascar",
  "Egypt",
  "Sudan",
  "Libya",
  "Morocco",
  "Algeria",
  "Tunisia",
  "Other",
] as const

