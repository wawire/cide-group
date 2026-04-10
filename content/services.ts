export type ServiceIconKey =
  | "smartphone"
  | "megaphone"
  | "building"
  | "users"
  | "chart"
  | "line-chart"
  | "blocks"
  | "calendar"

export type Service = {
  id: string
  order: number
  slug: string
  title: string
  shortTitle: string
  summary: string
  subtitle: string
  description: string
  icon: ServiceIconKey
  image: string
  capabilities: string[]
}

export const services: Service[] = [
  {
    id: "tech",
    order: 1,
    slug: "tech",
    title: "ICT and Digital Solutions",
    shortTitle: "ICT & Digital Solutions",
    summary:
      "AI-enabled digital tools and platforms that improve service delivery, transparency, and innovation.",
    subtitle: "AI-enabled digital tools and platforms for improved service delivery",
    description:
      "We harness Artificial Intelligence (AI) to design and deploy digital tools and platforms that improve service delivery, enhance transparency, and accelerate innovation.",
    icon: "smartphone",
    image: "/projects/health-workers-with-tablets.jpg",
    capabilities: [
      "AI-enabled digital tools and service platforms",
      "Digital systems that improve transparency and service delivery",
      "Technology-enabled participation and feedback systems",
      "Practical digital solutions tailored to local implementation realities",
    ],
  },
  {
    id: "communications",
    order: 2,
    slug: "communications",
    title: "Strategic Communications and Knowledge Management",
    shortTitle: "Communications & Knowledge",
    summary:
      "Ethical storytelling, campaigns, and knowledge products that strengthen visibility, accountability, and public engagement.",
    subtitle: "Ethical communications and knowledge management for visibility and accountability",
    description:
      "We support ethical storytelling, communication products, and knowledge management approaches that improve visibility, accountability, and public engagement across programmes.",
    icon: "megaphone",
    image: "/hero/communications-mel-filming.png",
    capabilities: [
      "Ethical storytelling and knowledge products",
      "Campaign content and public engagement support",
      "Communications for development and behaviour change",
      "Safeguarding-aligned communication practice",
      "Documentation and visibility support",
    ],
  },
  {
    id: "advocacy",
    order: 3,
    slug: "advocacy",
    title: "Policy Advocacy and Stakeholder Engagement",
    shortTitle: "Advocacy & Engagement",
    summary:
      "Rights-based advocacy, stakeholder engagement, and social justice support grounded in participation and accountability.",
    subtitle: "Rights-based advocacy and stakeholder engagement for systems change",
    description:
      "We advance rights-based advocacy and participatory engagement approaches that strengthen accountability, child protection, safeguarding, and social justice outcomes.",
    icon: "building",
    image: "/projects/advocacy-training-workshop.jpg",
    capabilities: [
      "Child rights mainstreaming",
      "Child and adult safeguarding",
      "Child protection in emergencies",
      "Child participation and child-led research",
      "Stakeholder engagement and partnership coordination",
      "Development of child-friendly IEC materials and contextualised manuals",
    ],
  },
  {
    id: "research",
    order: 4,
    slug: "research",
    title: "Research, Evidence and Policy Advisory",
    shortTitle: "Research & Evidence",
    summary:
      "Applied research, evaluations, and policy advisory services that strengthen decision-making and programme effectiveness.",
    subtitle: "Applied research, evaluations, and policy advisory for stronger decisions",
    description:
      "We provide applied research, evaluations, policy advisory, and analytics to strengthen decision-making and improve programme effectiveness.",
    icon: "chart",
    image: "/hero/research-evidence-community.png",
    capabilities: [
      "Applied research and assessments",
      "Evaluations and impact assessments",
      "Policy advisory and evidence synthesis",
      "Analytics to guide strategic decision-making",
      "Data-driven insights for programme improvement",
    ],
  },
  {
    id: "project-management",
    order: 5,
    slug: "project-management",
    title: "Programme Design and Implementation",
    shortTitle: "Programme Design & Implementation",
    summary:
      "Scalable development and humanitarian programmes with end-to-end implementation support.",
    subtitle: "Scalable development and humanitarian programmes with end-to-end support",
    description:
      "We design and implement scalable development and humanitarian programmes that deliver measurable impact in complex environments.",
    icon: "blocks",
    image: "/hero/field-programme-implementation.png",
    capabilities: [
      "Programme design and implementation",
      "Technical assistance and cross-sector coordination",
      "Community-led delivery and systems strengthening",
      "Sustainability planning and local ownership",
      "End-to-end support from design to evaluation",
    ],
  },
  {
    id: "enterprise",
    order: 6,
    slug: "enterprise",
    title: "Social Enterprise and Systems Development",
    shortTitle: "Enterprise & Systems",
    summary:
      "Inclusive markets, social enterprise growth, and sustainable systems that drive long-term economic and social impact.",
    subtitle: "Inclusive markets, enterprise growth, and sustainable systems development",
    description:
      "We support the growth of inclusive markets, social enterprises, and sustainable systems that drive long-term economic and social impact.",
    icon: "users",
    image: "/focus-areas/livelihoods-vsla-cash-transfer.jpg",
    capabilities: [
      "Inclusive market systems support",
      "Social enterprise development",
      "Investment readiness and market assessments",
      "Financial inclusion and local enterprise models",
      "Sustainable systems that drive long-term economic and social impact",
    ],
  },
  {
    id: "capacity-development",
    order: 7,
    slug: "capacity-development",
    title: "Capacity Development",
    shortTitle: "Capacity Development",
    summary:
      "Practical capacity building for educators, institutions, governments, partners, and communities.",
    subtitle: "Practical capacity development tailored to local systems and institutions",
    description:
      "We design and deliver practical capacity development support that equips institutions, educators, partners, and communities with the tools needed for stronger delivery.",
    icon: "line-chart",
    image: "/hero/gedsi-systems-development.png",
    capabilities: [
      "Teacher training and professional development",
      "Career guidance and life skills training",
      "Capacity building for farmer organisations, cooperatives, and agribusiness enterprises",
      "Targeted training for governments, partners, and communities",
      "Development of practical tools, manuals, and learning resources",
    ],
  },
  {
    id: "mel",
    order: 8,
    slug: "mel",
    title: "Monitoring, Evaluation, Learning and Reporting",
    shortTitle: "MEL & Reporting",
    summary:
      "Robust MEL frameworks, impact assessments, and learning systems for accountability and continuous improvement.",
    subtitle: "Robust MEL frameworks, impact assessments, and learning systems",
    description:
      "We deliver robust MEL frameworks, impact assessments, reporting, and learning systems to ensure accountability and continuous improvement.",
    icon: "calendar",
    image: "/research/digital-dashboard-real-time-programme-data.jpg",
    capabilities: [
      "MEL frameworks and learning systems",
      "Impact assessments and reporting",
      "Monitoring tools for accountability and improvement",
      "Value-for-money and results tracking",
      "Documentation of lessons learned and continuous improvement",
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
