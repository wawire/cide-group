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
    name: "Dr Daniel Oloo",
    title: "Executive Director",
    group: "Leadership",
    bio:
      "Dr Daniel Oloo leads CIDE Group's strategy, partnerships, and programme delivery across Africa. His work spans research, policy engagement, strategic communications, digital media, and AI in governance.",
    expertise: ["Strategy", "Partnerships", "Programme Delivery", "Policy Engagement"],
    image: "/team/dr-daniel-oloo-ongonga/headshot.png",
    sourceFolder: "source-assets/team/dr-daniel-oloo-ongonga",
    publishStatus: "ready",
  },
  {
    slug: "lavender-alwaka-ondere",
    name: "Lavender Ondere",
    title: "Lead, Environmental Sustainability & Climate Change",
    group: "Technical Advisory",
    bio:
      "Lavender Ondere leads CIDE Group's environment and climate work, supporting integrated solutions across resilience, sustainability, and environmental systems change.",
    expertise: ["Environmental Sustainability", "Climate Change", "Resilience", "Systems Change"],
    image: "/team/lavender-alwaka-ondere/headshot.png",
    sourceFolder: "source-assets/team/lavender-alwaka-ondere",
    publishStatus: "ready",
  },
  {
    slug: "george-owuor",
    name: "George Owuor",
    title: "Senior Consultant, Gender Equity, Diversity and Social Inclusion (GEDSI)",
    group: "Technical Advisory",
    bio:
      "George Owuor is a senior GEDSI specialist supporting inclusive development, policy engagement, and rights-based programming across Africa.",
    expertise: ["GEDSI", "Inclusive Development", "Policy Engagement", "Social Inclusion"],
    image: "/team/george-owuor/headshot.png",
    sourceFolder: "source-assets/team/george-owuor",
    publishStatus: "ready",
  },
  {
    slug: "salome-wenyaa",
    name: "Salome Wenyaa",
    title: "Lead Consultant, Education & Lifelong Learning",
    group: "Technical Advisory",
    bio:
      "Salome Wenyaa is a seasoned education specialist with over 30 years of experience across Kenya and the wider East African region. At CIDE Group, she advises on curriculum reform, education policy, and systems strengthening, with recognized expertise in CBC/CBA and ECDE.",
    expertise: ["Curriculum Reform", "Education Policy", "Education Systems Strengthening", "CBC/CBA and ECDE"],
    image: "/team/salome-wenyaa/Salome.jpeg",
    sourceFolder: "public/team/salome-wenyaa",
    publishStatus: "ready",
  },

  {
    slug: "sharon-kiboi-chemtai",
    name: "Sharon Kiboi",
    title: "Communications Consultant (Communications for Development)",
    group: "Communications and Knowledge Management",
    bio:
      "Sharon Kiboi supports communications for development work that strengthens public engagement, visibility, and programme communications.",
    expertise: ["Communications for Development", "Public Engagement", "Content Development", "Visibility"],
    image: "/team/sharon-kiboi-chemtai/headshot.png",
    sourceFolder: "source-assets/team/sharon-kiboi-chemtai",
    publishStatus: "ready",
  },
  {
    slug: "mercy-kahenda",
    name: "Mercy Kahenda",
    title: "Senior Communications Consultant (Writer/Reporter)",
    group: "Communications and Knowledge Management",
    bio:
      "Mercy Kahenda is a senior communications consultant, writer, and reporter supporting clear, evidence-based storytelling and knowledge products.",
    expertise: ["Writing", "Reporting", "Knowledge Products", "Strategic Communications"],
    image: "/team/mercy-kahenda/headshot.jpg",
    sourceFolder: "source-assets/team/mercy-kahenda",
    publishStatus: "ready",
  },
]

export const publishedTeamMembers = teamMembers.filter((member) => member.publishStatus === "ready")

export function getTeamMembersByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group)
}

