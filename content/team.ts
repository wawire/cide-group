export type TeamGroup =
  | "Leadership"
  | "Technical Advisory"
  | "Communications and Knowledge Management"

export type TeamMember = {
  slug: string
  name: string
  title: string
  group: TeamGroup
  bio: string
  expertise: string[]
  image: string
  sourceFolder: string
  publishStatus: "source-only" | "ready"
}

export const teamSourceDirectory = "source-assets/team"

export const teamGroupOrder: TeamGroup[] = [
  "Leadership",
  "Technical Advisory",
  "Communications and Knowledge Management",
]

export const teamMembers: TeamMember[] = [
  {
    slug: "dr-daniel-oloo-ongonga",
    name: "Dr Daniel Oloo Ong'ong'a",
    title: "Executive Director",
    group: "Leadership",
    bio:
      "Dr Daniel Oloo Ong'ong'a leads CIDE Group's strategy, partnerships, and programme delivery across Africa. His work spans research, policy engagement, strategic communications, digital media, and AI in governance. He holds a PhD in Communication and also serves as a Research Fellow at the Afro-Sino Centre of International Relations.",
    expertise: ["Strategy", "Policy Engagement", "Digital Media", "AI Governance"],
    image: "/team/dr-daniel-oloo-ongonga/headshot.png",
    sourceFolder: "source-assets/team/dr-daniel-oloo-ongonga",
    publishStatus: "ready",
  },
  {
    slug: "george-owuor",
    name: "George Owuor",
    title: "Senior Consultant, Gender Equity, Diversity and Social Inclusion (GEDSI)",
    group: "Technical Advisory",
    bio:
      "George Owuor is a senior GEDSI and policy specialist with over 16 years of experience advancing inclusive development across Africa. At CIDE Group, he leads advisory work on gender equality, policy advocacy, and strategic partnerships for governments, NGOs, and development partners. His background includes leadership and technical roles with FAWE, PATH, Practical Action, and Plan International.",
    expertise: ["GEDSI", "Policy Advocacy", "Partnerships", "Inclusive Development"],
    image: "/team/george-owuor/headshot.png",
    sourceFolder: "source-assets/team/george-owuor",
    publishStatus: "ready",
  },
  {
    slug: "lavender-alwaka-ondere",
    name: "Lavender Alwaka Ondere",
    title: "Lead Consultant, Environment, Climate Change, Natural Resource Management and Resilience",
    group: "Technical Advisory",
    bio:
      "Lavender Alwaka Ondere leads CIDE Group's environment, climate, natural resource management, and resilience practice. She has more than 10 years of experience designing and coordinating multi-country programmes in climate adaptation, sustainable land use, ecosystem restoration, and livelihoods. Her work bridges donor strategy, government systems, and locally grounded implementation across Africa.",
    expertise: ["Climate Adaptation", "Natural Resource Management", "Resilience", "Programme Design"],
    image: "/team/lavender-alwaka-ondere/headshot.png",
    sourceFolder: "source-assets/team/lavender-alwaka-ondere",
    publishStatus: "ready",
  },
  {
    slug: "mercy-kahenda",
    name: "Mercy Kahenda",
    title: "Senior Communications Consultant",
    group: "Communications and Knowledge Management",
    bio:
      "Mercy Kahenda is a senior communications consultant and health and science reporter with over 16 years of newsroom and knowledge-management experience. She translates complex research, policy, and programme evidence into clear stories that inform decision-makers and influence public debate. Her reporting has focused on health systems, maternal health, public health emergencies, and accountability.",
    expertise: ["Strategic Storytelling", "Knowledge Management", "Health Reporting", "Policy Writing"],
    image: "/team/mercy-kahenda/headshot.jpg",
    sourceFolder: "source-assets/team/mercy-kahenda",
    publishStatus: "ready",
  },
  {
    slug: "sharon-kiboi-chemtai",
    name: "Sharon Kiboi Chemtai",
    title: "Strategic Communications Consultant",
    group: "Communications and Knowledge Management",
    bio:
      "Sharon Kiboi Chemtai is a strategic communications consultant with more than seven years of experience supporting donor-funded development programmes. She designs communication and knowledge-management strategies, multimedia storytelling, advocacy support, and partner-facing content that improve visibility and stakeholder engagement. Her work is grounded in ethical storytelling and development communication practice.",
    expertise: ["Strategic Communications", "Multimedia Storytelling", "Advocacy Support", "Knowledge Management"],
    image: "/team/sharon-kiboi-chemtai/headshot.png",
    sourceFolder: "source-assets/team/sharon-kiboi-chemtai",
    publishStatus: "ready",
  },
]

export const publishedTeamMembers = teamMembers.filter((member) => member.publishStatus === "ready")

export function getTeamMembersByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group)
}

