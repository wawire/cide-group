export type ResearchResource = {
  id: number
  type: "report" | "blog" | "infographic" | "case-study"
  category: string
  title: string
  description: string
  date: string
  readTime: string
  featured: boolean
  image: string
  downloadUrl?: string
  externalUrl?: string
}

export const researchResources: ResearchResource[] = [
  {
    id: 1,
    type: "report",
    category: "Research",
    title: "Climate Adaptation in East Africa: Community-Led Strategies for Resilience",
    description:
      "A cross-country study of how communities in Kenya, Uganda, and Tanzania are adapting to climate risk.",
    date: "December 2024",
    readTime: "15 min",
    featured: true,
    image: "/research/digital-dashboard-real-time-programme-data.jpg",
  },
  {
    id: 2,
    type: "blog",
    category: "GEDSI",
    title: "Mainstreaming Inclusion: Why GEDSI Matters in Development",
    description:
      "How gender, disability, and social inclusion drive better implementation and stronger outcomes.",
    date: "November 2024",
    readTime: "8 min",
    featured: false,
    image: "/research/community-members-advocacy-training-workshop.jpg",
  },
  {
    id: 3,
    type: "infographic",
    category: "Data & Evidence",
    title: "CIDE Impact Dashboard 2024",
    description: "A visual summary of impact indicators across 12 countries.",
    date: "October 2024",
    readTime: "3 min",
    featured: false,
    image: "/projects/digital-campaign-dashboard.jpg",
  },
  {
    id: 4,
    type: "report",
    category: "MEL",
    title: "Building Learning Agendas for Adaptive Programming",
    description: "A practical guide for integrating real-time learning loops into programme delivery.",
    date: "September 2024",
    readTime: "20 min",
    featured: false,
    image: "/projects/data-analysis-workshop.jpg",
  },
  {
    id: 5,
    type: "blog",
    category: "Strategy",
    title: "Co-Creation in Practice: Lessons from 150+ Projects",
    description: "Field-tested lessons on partnership design and local ownership.",
    date: "August 2024",
    readTime: "12 min",
    featured: false,
    image: "/research/community-health-workers-mobile-tablets-rural.jpg",
  },
  {
    id: 6,
    type: "case-study",
    category: "Projects",
    title: "Inclusive Health Systems: Case Study from Western Kenya",
    description: "How GEDSI mainstreaming improved quality and reach of health services.",
    date: "July 2024",
    readTime: "10 min",
    featured: false,
    image: "/projects/health-workers-with-tablets.jpg",
  },
]

export const featuredResearchResource =
  researchResources.find((resource) => resource.featured) ?? researchResources[0]

