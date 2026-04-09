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
      "AI, digital transformation, websites, mobile apps, and SMS platforms for improved service delivery.",
    subtitle: "Harnessing AI and digital transformation for better service delivery",
    description:
      "We support governments, organisations, and enterprises to harness Artificial Intelligence (AI) and digital transformation for improved efficiency, innovation, and service delivery.",
    icon: "smartphone",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "ICT strategy development and digital transformation",
      "Systems development: websites, mobile applications, and SMS-based platforms",
      "Cloud solutions and data management",
      "Cybersecurity solutions",
      "ICT infrastructure design and optimisation",
      "IT governance and systems optimisation",
      "ICT support and maintenance services",
    ],
  },
  {
    id: "communications",
    order: 2,
    slug: "communications",
    title: "Strategic Communications and Knowledge Management",
    shortTitle: "Strategic Communications & Knowledge Management",
    summary:
      "Branding, campaigns, knowledge management, and storytelling that drives public action.",
    subtitle: "Strengthening reputation, visibility, and stakeholder engagement",
    description:
      "We support organisations to craft compelling narratives, strengthen reputations, and engage stakeholders effectively.",
    icon: "megaphone",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Branding and brand toolkit development",
      "Graphic design and layout",
      "Communication strategy and plan development",
      "Crisis communication and media relations",
      "Impact storytelling: video, photography, blogs, and case studies",
      "Behaviour change communication (BCC)",
      "Content development and documentation",
      "Media landscape and stakeholder analysis",
      "Digital campaigns and media engagement",
      "Social media and content strategy",
      "Knowledge management systems and platforms",
      "Communication capacity building",
    ],
  },
  {
    id: "advocacy",
    order: 3,
    slug: "advocacy",
    title: "Policy Advocacy and Stakeholder Engagement",
    shortTitle: "Policy Advocacy & Stakeholder Engagement",
    summary:
      "Coalition building, policy research, and engagement frameworks for systemic change.",
    subtitle: "Influencing policy, partnerships, and systemic change",
    description:
      "We support organisations and coalitions to influence policy, strengthen partnerships, and drive systemic change.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Advocacy capacity strengthening",
      "Consortium and partnership coordination",
      "Policy research, analysis, and engagement frameworks",
      "Stakeholder mapping and engagement planning",
      "Humanitarian and development advocacy",
    ],
  },
  {
    id: "research",
    order: 4,
    slug: "research",
    title: "Research and Evidence Generation",
    shortTitle: "Research & Evidence Generation",
    summary:
      "Baseline studies, KAP assessments, formative research, and impact evaluations.",
    subtitle: "High-quality qualitative and quantitative evidence for decisions",
    description:
      "We deliver high-quality qualitative and quantitative research to inform planning, learning, accountability, and decision-making.",
    icon: "chart",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Baseline, midline, and endline studies",
      "Knowledge, attitudes, and practices (KAP) assessments",
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
    title: "Programme Design, Implementation, Management and Sustainability",
    shortTitle: "Programme Design & Management",
    summary:
      "End-to-end programme support from theory of change to sustainability and exit planning.",
    subtitle: "End-to-end programme support for accountability and long-term impact",
    description:
      "We provide end-to-end programme support to ensure effectiveness, accountability, and long-term impact.",
    icon: "blocks",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Theory of change and programme design",
      "Project rollout and coordination",
      "Sustainability and exit planning",
      "Institutional and community capacity building",
      "Quality assurance and risk management",
    ],
  },
  {
    id: "enterprise",
    order: 6,
    slug: "enterprise",
    title: "Enterprise and Organisational Support Services",
    shortTitle: "Enterprise & Organisational Support",
    summary:
      "Strategy, due diligence, grant management, and accountability frameworks for institutions.",
    subtitle: "Strengthening governance, performance, and sustainability",
    description:
      "We provide comprehensive enterprise and institutional support to strengthen governance, performance, and sustainability.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Organisational capacity assessment and development",
      "Strategy development and strategic planning",
      "Development of MoUs, partnerships, and compliance agreements",
      "Business development and grant management support",
      "Due diligence services",
      "Social impact assessments and accountability frameworks",
    ],
  },
  {
    id: "capacity-development",
    order: 7,
    slug: "capacity-development",
    title: "Capacity Development",
    shortTitle: "Capacity Development",
    summary:
      "Tailored training for CBOs, MDAs, NGOs, startups, and community groups.",
    subtitle: "Practical, results-oriented learning tailored to institutional needs",
    description:
      "We design and deliver practical, results-oriented capacity development programmes tailored to institutional needs.",
    icon: "line-chart",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Tailored training for CBOs, MDAs, NGOs, private sector entities, startups, youth, and women's groups",
      "Customised technical, leadership, and operational capacity strengthening",
      "Design, review, and contextualisation of organisational manuals, policies, and frameworks",
    ],
  },
  {
    id: "mel",
    order: 8,
    slug: "mel",
    title: "Monitoring, Evaluation and Learning (MEL)",
    shortTitle: "Monitoring, Evaluation & Learning",
    summary:
      "MEL system design, digital data tools, and learning routines for adaptive management.",
    subtitle: "Real-time insights and adaptive management",
    description:
      "We design and implement MEL systems that generate real-time insights and support adaptive management.",
    icon: "calendar",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "MEL system design and digital data solutions",
      "Learning documentation and knowledge products",
      "Evaluation frameworks, tools, and methodologies",
      "Real-time data collection and programme monitoring",
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
