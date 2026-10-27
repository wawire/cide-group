import { editorialImages } from "@/content/imagery"
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
      "Practical digital systems that improve service delivery, access and accountability.",
    subtitle: "AI-enabled digital tools and platforms for improved service delivery",
    description:
      "We combine digital innovation and AI with practical systems design to support organisations, schools and young people.",
    icon: "smartphone",
    image: editorialImages["service-tech"].src,
    capabilities: [
      "ICT strategy and digital transformation",
      "Websites, mobile applications and SMS platforms",
      "Cloud solutions and data management",
      "Cybersecurity, IT governance and infrastructure",
      "Digital literacy, virtual labs and school connectivity",
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
      "We turn complex programmes and evidence into clear stories, campaigns and knowledge products that people can use.",
    icon: "megaphone",
    image: editorialImages["service-communications"].src,
    capabilities: [
      "Films, podcasts, photography and publications",
      "Communication strategies and audience messaging",
      "Advocacy and behaviour-change campaigns",
      "Sustainability communication and ESG reporting",
      "Issue framing and narrative development",
      "Research translation and knowledge management",
      "Communications training and ethical storytelling",
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
      "We help partners understand policy environments, build alliances and engage communities and decision-makers.",
    icon: "building",
    image: editorialImages["service-advocacy"].src,
    capabilities: [
      "Policy research, analysis and engagement frameworks",
      "Stakeholder mapping and engagement planning",
      "Consortium and partnership coordination",
      "Advocacy capacity strengthening",
      "Humanitarian and development advocacy",
    ],
  },
  {
    id: "research",
    order: 4,
    slug: "research",
    title: "Research & Evidence Generation",
    shortTitle: "Research & Evidence",
    summary:
      "Applied research, evaluations, and policy advisory services that strengthen decision-making and programme effectiveness.",
    subtitle: "Relevant evidence for policy and programme decisions",
    description:
      "We co-create country-specific evidence that partners can use to shape policy, design programmes and improve delivery.",
    icon: "chart",
    image: editorialImages["service-research"].src,
    capabilities: [
      "Baseline, midline and endline studies",
      "Knowledge, attitudes and practices assessments",
      "Audience and stakeholder analysis",
      "Formative and operational research",
      "Impact assessments and feasibility studies",
      "Participatory and community-led research",
    ],
  },
  {
    id: "project-management",
    order: 5,
    slug: "project-management",
    title: "Programme Design, Implementation & Sustainability",
    shortTitle: "Programme Delivery",
    summary:
      "Scalable development and humanitarian programmes with end-to-end implementation support.",
    subtitle: "Scalable development and humanitarian programmes with end-to-end support",
    description:
      "We help partners move from concept to delivery, with practical plans for quality, risk and long-term sustainability.",
    icon: "blocks",
    image: editorialImages["service-programme"].src,
    capabilities: [
      "Theory of change and programme design",
      "Programme rollout, management and coordination",
      "Quality assurance and risk management",
      "Institutional and community capacity building",
      "Sustainability and exit planning",
    ],
  },
  {
    id: "enterprise",
    order: 6,
    slug: "enterprise",
    title: "Enterprise & Organisational Support Services",
    shortTitle: "Enterprise & Organisations",
    summary:
      "Stronger institutions and enterprises through strategy, practical systems and organisational support.",
    subtitle: "Practical support for stronger institutions and enterprises",
    description:
      "We help organisations and enterprises assess capacity, plan their direction and strengthen the systems that support delivery.",
    icon: "users",
    image: editorialImages["service-enterprise"].src,
    capabilities: [
      "Organisational capacity assessment and development",
      "Strategy development and strategic planning",
      "Partnership, compliance agreements and MoUs",
      "Business development and grant management support",
      "Due diligence and social impact assessments",
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
      "We build technical, leadership and operational skills for government, NGOs, businesses, community organisations, and youth and women\u2019s groups.",
    icon: "line-chart",
    image: editorialImages["service-capacity"].src,
    capabilities: [
      "Tailored technical and leadership training",
      "Operational capacity strengthening",
      "Organisational manuals, policies and frameworks",
      "Practical tools and hands-on facilitation",
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
    image: editorialImages["service-mel"].src,
    capabilities: [
      "MEL frameworks, tools and methodologies",
      "Digital data collection and real-time monitoring",
      "Baseline, midline and endline studies",
      "Impact assessments and accountability frameworks",
      "Learning documentation and knowledge products",
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
