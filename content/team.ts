export type TeamGroup =
  | "Advisory Board"
  | "Secretariat"
  | "Technical Advisory"

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
  "Advisory Board",
  "Secretariat",
  "Technical Advisory",
]

export const teamMembers: TeamMember[] = [
  // ── Advisory Board ────────────────────────────────────────────────────────
  {
    slug: "ashley-lehman",
    name: "Ashley Lehman",
    title: "Board Member, USA",
    group: "Advisory Board",
    bio: "Ashley Lehman is an ecologist and forest monitoring specialist with over 15 years of global experience supporting governments and regional institutions to advance sustainable landscape management. She specialises in the design and implementation of National Forest Monitoring Systems, national forest inventories, remote sensing integration, and greenhouse gas reporting, translating complex data into practical, country-led solutions that support effective land management. Ashley has led multi-country programmes and strategic partnerships, including her role as Africa Climate Change Programme Manager with the U.S. Forest Service, where she guided regional approaches to forest monitoring and capacity development. She also managed the Women in Climate Action programme across six Central African countries, supporting over 130 early-career women through technical training and professional development.",
    expertise: ["Forest Monitoring", "Landscape Management", "Climate Change", "Capacity Development"],
    image: "/team/ashley/headshot.jpg",
    sourceFolder: "public/team/ashley",
    publishStatus: "ready",
  },
  {
    slug: "dr-daniel-oloo-board",
    name: "Dr Daniel Oloo (PhD)",
    title: "Board Member, Kenya",
    group: "Advisory Board",
    bio: "Dr Daniel Oloo leads CIDE Group's strategy, partnerships, and programme delivery across Africa. His work spans research, policy engagement, strategic communications, digital media, and AI in governance.",
    expertise: ["Strategy", "Partnerships", "Programme Delivery", "Policy Engagement"],
    image: "/team/dr-daniel-oloo-ongonga/headshot.png",
    sourceFolder: "source-assets/team/dr-daniel-oloo-ongonga",
    publishStatus: "ready",
  },
  {
    slug: "dr-jose-moriano",
    name: "Dr José Moriano (PhD)",
    title: "Board Member, Spain",
    group: "Advisory Board",
    bio: "Dr José Moriano (PhD) is a globally recognised expert in Communication for Development (C4D), with over 30 years of experience advancing participatory communication and youth engagement across Africa, Asia, Latin America, and Europe. He specialises in designing inclusive communication strategies that foster civic participation and drive social change, with a strong focus on co-creation, digital media, and youth-led approaches. José has advised European Union institutions, international NGOs, and global development agencies, leading communication frameworks that strengthen youth inclusion and amplify community voices. He holds a PhD in Communication Sciences and serves as an Associate Professor at Universidad San Pablo CEU in Madrid, contributing to research and capacity building on youth participation and social transformation.",
    expertise: ["Communication for Development", "Youth Engagement", "Participatory Communication", "Digital Media"],
    image: "/team/jose/headshot.jpg",
    sourceFolder: "public/team/jose",
    publishStatus: "ready",
  },

  // ── Secretariat ───────────────────────────────────────────────────────────
  {
    slug: "dr-daniel-oloo-ongonga",
    name: "Dr Daniel Oloo (PhD)",
    title: "Executive Director",
    group: "Secretariat",
    bio: "Dr Daniel Oloo leads CIDE Group's strategy, partnerships, and programme delivery across Africa. His work spans research, policy engagement, strategic communications, digital media, and AI in governance.",
    expertise: ["Strategy", "Partnerships", "Programme Delivery", "Policy Engagement"],
    image: "/team/dr-daniel-oloo-ongonga/headshot.png",
    sourceFolder: "source-assets/team/dr-daniel-oloo-ongonga",
    publishStatus: "ready",
  },
  {
    slug: "lavender-alwaka-ondere",
    name: "Lavender Ondere",
    title: "Deputy Director & Lead, Environmental Sustainability & Climate Change",
    group: "Secretariat",
    bio: "Lavender Ondere is CIDE Group's Deputy Director and leads the organisation's environment and climate portfolio, supporting integrated solutions across resilience, sustainability, and environmental systems change.",
    expertise: ["Environmental Sustainability", "Climate Change", "Resilience", "Systems Change"],
    image: "/team/lavender-alwaka-ondere/headshot.png",
    sourceFolder: "source-assets/team/lavender-alwaka-ondere",
    publishStatus: "ready",
  },
  {
    slug: "robert-wanjohi",
    name: "Robert Wanjohi",
    title: "Communications & Storytelling",
    group: "Secretariat",
    bio: "Robert Wanjohi leads communications and storytelling at CIDE Group, translating complex development narratives into compelling content that strengthens organisational visibility and stakeholder engagement across Africa.",
    expertise: ["Strategic Communications", "Storytelling", "Content Development", "Stakeholder Engagement"],
    image: "/team/robert-wanjohi/headshot.jpg",
    sourceFolder: "source-assets/team/robert-wanjohi",
    publishStatus: "ready",
  },
  {
    slug: "sharon-kiboi-chemtai",
    name: "Sharon Kiboi",
    title: "Communications for Development",
    group: "Secretariat",
    bio: "Sharon Kiboi supports communications for development work that strengthens public engagement, visibility, and programme communications across CIDE Group's portfolio.",
    expertise: ["Communications for Development", "Public Engagement", "Content Development", "Visibility"],
    image: "/team/sharon-kiboi-chemtai/headshot.png",
    sourceFolder: "source-assets/team/sharon-kiboi-chemtai",
    publishStatus: "ready",
  },

  // ── Technical Advisory ────────────────────────────────────────────────────
  {
    slug: "salome-wenyaa",
    name: "Salome Wenyaa",
    title: "Lead, Education & Lifelong Learning",
    group: "Technical Advisory",
    bio: "Salome Wenyaa is a seasoned education specialist with over 30 years of experience across Kenya and the wider East African region. At CIDE Group, she advises on curriculum reform, education policy, and systems strengthening, with recognised expertise in CBC/CBA and ECDE.",
    expertise: ["Curriculum Reform", "Education Policy", "Education Systems Strengthening", "CBC/CBA and ECDE"],
    image: "/team/salome-wenyaa/Salome.jpeg",
    sourceFolder: "public/team/salome-wenyaa",
    publishStatus: "ready",
  },
  {
    slug: "george-owuor",
    name: "George Owuor",
    title: "Lead, Gender Equity, Diversity and Social Inclusion (GEDSI)",
    group: "Technical Advisory",
    bio: "George Owuor is a senior GEDSI specialist supporting inclusive development, policy engagement, and rights-based programming across Africa.",
    expertise: ["GEDSI", "Inclusive Development", "Policy Engagement", "Social Inclusion"],
    image: "/team/george-owuor/headshot.png",
    sourceFolder: "source-assets/team/george-owuor",
    publishStatus: "ready",
  },
  {
    slug: "mercy-kahenda",
    name: "Mercy Kahenda",
    title: "Senior Communications Consultant (Writing and Reporting)",
    group: "Technical Advisory",
    bio: "Mercy Kahenda is a senior communications consultant, writer, and reporter supporting clear, evidence-based storytelling and knowledge products across CIDE Group's advisory and programme work.",
    expertise: ["Writing", "Reporting", "Knowledge Products", "Strategic Communications"],
    image: "/team/mercy-kahenda/headshot.jpg",
    sourceFolder: "source-assets/team/mercy-kahenda",
    publishStatus: "ready",
  },
  {
    slug: "donald-omingo",
    name: "Donald Omingo",
    title: "Lead, Safeguarding & PSEAH",
    group: "Technical Advisory",
    bio: "Donald Omingo leads safeguarding and PSEAH (Protection from Sexual Exploitation, Abuse, and Harassment) work at CIDE Group, supporting organisations to embed robust protection frameworks across their programmes and institutional structures.",
    expertise: ["Safeguarding", "PSEAH", "Protection Frameworks", "Institutional Compliance"],
    image: "/team/placeholder.png",
    sourceFolder: "source-assets/team/donald-omingo",
    publishStatus: "ready",
  },
  {
    slug: "grace-oduor",
    name: "Grace Oduor",
    title: "Communications Consultant",
    group: "Technical Advisory",
    bio: "Grace Oduor is a results-driven Communications Consultant with over nine years of experience strengthening the visibility, positioning, and reputation of mission-driven organisations across Africa. She specialises in strategic communications, ethical storytelling, donor visibility, and advocacy for humanitarian and development issues including child rights, gender equality, and climate justice. Her work focuses on translating complex social issues into compelling, culturally nuanced narratives that engage global audiences, influence decision-makers, and drive meaningful impact.",
    expertise: ["Strategic Communications", "Ethical Storytelling", "Donor Visibility", "Advocacy"],
    image: "/team/grace-oduor/headshot.jpg",
    sourceFolder: "public/team/grace-oduor",
    publishStatus: "ready",
  },
  {
    slug: "jack-omondi",
    name: "Jack Omondi",
    title: "Lead, Sustainability & Climate Change",
    group: "Technical Advisory",
    bio: "Jack Omondi is a climate and sustainability programmes specialist with over nine years of experience managing multi-donor, multi-country initiatives across Africa. He has led and coordinated large-scale programmes ranging from continent-wide science networks to green TVET systems spanning 110 centres in 35 countries. His expertise includes climate programme design, grant writing, donor reporting, stakeholder coordination with African Union bodies, MEAL framework development, and nature-based solutions, with a strong focus on urban forestry for climate adaptation in African cities.",
    expertise: ["Climate Change", "Sustainability", "Programme Design", "Nature-Based Solutions"],
    image: "/team/jack-omondi/headshot.jpg",
    sourceFolder: "public/team/jack-omondi",
    publishStatus: "ready",
  },
]

export const publishedTeamMembers = teamMembers.filter((member) => member.publishStatus === "ready")

export function getTeamMembersByGroup(group: TeamGroup) {
  return teamMembers.filter((member) => member.group === group)
}
