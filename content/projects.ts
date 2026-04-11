export type Project = {
  id: string
  title: string
  description: string
  fullDescription: string
  tags: string[]
  countries: string[]
  location: string
  image: string
  outcomes: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "inclusive-health-systems-western-kenya",
    title: "Building Inclusive Health Systems in Western Kenya",
    description:
      "Through participatory MEL design and GEDSI mainstreaming, we helped a regional health programme reach 120,000+ people.",
    fullDescription:
      "CIDE supported county health teams and civil society partners to redesign delivery pathways for underserved groups. We introduced practical MEL indicators, optimized referral pathways, and aligned district-level reporting with national standards.",
    tags: ["MEL", "GEDSI", "Digital Solutions"],
    countries: ["Kenya"],
    location: "Western Kenya",
    image: "/projects/health-workers-with-tablets.jpg",
    outcomes: [
      "120,000+ people reached by improved services",
      "County-level dashboards adopted by health managers",
      "Inclusion indicators integrated into partner reporting",
    ],
    featured: true,
  },
  {
    id: "climate-justice-east-africa",
    title: "Amplifying Voices for Climate Justice in East Africa",
    description: "We supported coalition building and policy advocacy resulting in three policy reforms.",
    fullDescription:
      "Working with local coalitions, CIDE developed evidence briefs and a regional advocacy strategy. The engagement model combined grassroots consultation with direct policy dialogue to align climate action with community priorities.",
    tags: ["Policy Advocacy", "Strategic Communications"],
    countries: ["Kenya", "Tanzania", "Uganda"],
    location: "East Africa",
    image: "/projects/advocacy-training-workshop.jpg",
    outcomes: [
      "3 policy reforms influenced through coalition advocacy",
      "Cross-border working group established",
      "Community consultation integrated in policy process",
    ],
    featured: true,
  },
  {
    id: "behavior-change-evidence-campaigns",
    title: "Driving Behavior Change Through Evidence-Based Campaigns",
    description: "Multi-channel campaign reached 2 million people across six countries.",
    fullDescription:
      "CIDE designed a campaign strategy grounded in formative research and audience segmentation. We synchronized radio, digital, and community channels to maintain message consistency and measurable conversion pathways.",
    tags: ["Research", "Campaign Management"],
    countries: ["Kenya", "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Somalia"],
    location: "Six African countries",
    image: "/projects/digital-campaign-dashboard.jpg",
    outcomes: [
      "2M people reached through coordinated channels",
      "Audience sentiment improved in post-campaign surveys",
      "Partner teams trained on campaign performance tracking",
    ],
    featured: true,
  },
  {
    id: "mel-systems-ngo-networks",
    title: "Strengthening MEL Systems for NGO Networks",
    description: "Developed comprehensive MEL frameworks for a network of 20+ organizations.",
    fullDescription:
      "CIDE co-designed MEL frameworks, indicators, and reporting cadences for network-wide consistency. We also developed staff training modules and governance check-ins to sustain quality across all member organizations.",
    tags: ["MEL", "Capacity Building"],
    countries: ["Kenya", "Uganda"],
    location: "Kenya and Uganda",
    image: "/projects/data-analysis-workshop.jpg",
    outcomes: [
      "20+ organizations aligned on MEL standards",
      "Reporting quality improved across partner portfolio",
      "Learning cycles embedded into quarterly programme reviews",
    ],
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}
