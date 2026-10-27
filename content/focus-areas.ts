import { editorialImages } from "@/content/imagery"
export type FocusAreaCampaign = {
  name: string
  partner?: string
  description: string
  url?: string
}

export type FocusArea = {
  slug: string
  title: string
  summary: string
  overview: string
  image: string
  practiceAreas: string[]
  outcomes: string[]
  relatedServiceSlugs: string[]
  featuredProjectIds: string[]
  campaigns?: FocusAreaCampaign[]
}

export const focusAreas: FocusArea[] = [
  {
    slug: "climate-energy-environment",
    image: editorialImages["focus-climate"].src,
    title: "Climate, Energy & Environment",
    summary:
      "Locally led climate resilience, clean energy and circular economy solutions.",
    overview:
      "We help communities and institutions respond to climate risks, restore landscapes and use resources sustainably.",
    practiceAreas: [
      "Drought and flood preparedness",
      "School climate resilience and environmental stewardship",
      "Clean energy and energy-saving solutions",
      "Tree nurseries, agroforestry and land regeneration",
      "Circular economy and solid waste management",
    ],
    outcomes: [
      "Climate resilience priorities translated into locally grounded implementation.",
      "Clean energy and nature-based solutions positioned for scale and long-term value.",
      "Environmental policy, finance, and partnerships aligned around sustainable growth.",
    ],
    relatedServiceSlugs: ["research", "project-management", "enterprise", "mel"],
    featuredProjectIds: [],
  },
  {
    slug: "education-lifelong-learning",
    image: editorialImages["focus-education"].src,
    title: "Education, Digital Literacy & Youth Engagement",
    summary:
      "Inclusive learning, digital skills and employment pathways for young people.",
    overview:
      "We support safe, inclusive education and help young people build skills for work and participation in the digital economy.",
    practiceAreas: [
      "Inclusive education and education in emergencies",
      "AI, digital literacy and youth employment skills",
      "Blended learning, virtual labs and school connectivity",
      "Mentorship for youth, adolescent girls and young women",
      "School safety and climate resilience",
    ],
    outcomes: [
      "Education systems strengthened through policy, planning, and stakeholder engagement.",
      "Inclusive, safe, and supportive learning environments improved across contexts.",
      "Learners better equipped with foundational, vocational, and future-ready skills.",
    ],
    relatedServiceSlugs: ["capacity-development", "project-management", "research", "tech", "mel"],
    featuredProjectIds: [],
  },
  {
    slug: "agriculture-food-security-livelihoods",
    image: editorialImages["focus-agriculture"].src,
    title: "Food Security & Economic Development",
    summary:
      "Stronger food systems, livelihoods and economic opportunities for women and young people.",
    overview:
      "We work with communities, farmer cooperatives and enterprises to improve food security, market access and household resilience.",
    practiceAreas: [
      "Climate-smart and diversified farming",
      "Farmer cooperative links to suppliers and markets",
      "Savings groups, financial literacy and digital tracking",
      "Women\u2019s enterprise and youth marketplace skills",
      "Household resilience to shocks",
    ],
    outcomes: [
      "Food systems strengthened through climate-smart, locally driven interventions.",
      "Farmer organisations and enterprises better positioned for productivity and market access.",
      "Rural livelihoods supported through more resilient and commercially viable systems.",
    ],
    relatedServiceSlugs: ["project-management", "enterprise", "capacity-development", "mel", "research"],
    featuredProjectIds: [],
  },
  {
    slug: "child-rights-social-justice",
    image: editorialImages["focus-child-rights"].src,
    title: "Child Rights, Safeguarding & Child Protection",
    summary:
      "Practical safeguarding systems that protect children and strengthen accountability.",
    overview:
      "We help partners embed safeguarding, child rights and safe participation across programmes and institutions.",
    practiceAreas: [
      "Safeguarding risk assessments, audits and action plans",
      "Prevention of sexual exploitation, abuse and harassment (PSEAH)",
      "Online child protection and child protection in emergencies",
      "Partner due diligence, policies and response mechanisms",
      "Training, case management and safeguarding investigations",
      "Child-led research and ethical storytelling",
    ],
    outcomes: [
      "Child rights and safeguarding embedded more strongly in programmes and institutions.",
      "Participation and accountability approaches strengthened for children and communities.",
      "Ethical storytelling and social justice principles carried into advocacy and communications practice.",
    ],
    relatedServiceSlugs: ["advocacy", "communications", "capacity-development", "research"],
    featuredProjectIds: [],
    campaigns: [
      {
        name: "#OverExposed Campaign",
        partner: "Chance for Childhood",
        description:
          "CIDE Group partners with Chance for Childhood and other organisations supporting the #OverExposed Campaign, which challenges traditional thinking in the development sector on the ethical use of imagery and storytelling, and urges fellow organisations to rethink how we use the stories of the people we support.",
      },
    ],
  },
  {
    slug: "economic-empowerment",
    image: editorialImages["focus-economic"].src,
    title: "Economic Empowerment",
    summary:
      "Inclusive economic growth that equips individuals and communities with skills, resources, and sustainable livelihood pathways.",
    overview:
      "We help women and young people build enterprises, access finance and develop skills for sustainable livelihoods.",
    practiceAreas: [
      "Local economic development and locally driven enterprise support",
      "Youth employment and skills development",
      "Enterprise development and investment readiness",
      "Financial inclusion through VSLAs and Savings for Transformation models",
      "Stakeholder capacity building for governments, partners, and communities",
    ],
    outcomes: [
      "Local enterprises and livelihood pathways strengthened around market demand.",
      "Women and young people better positioned for productivity and enterprise growth.",
      "Financial inclusion and community-led economic systems improved.",
    ],
    relatedServiceSlugs: ["enterprise", "capacity-development", "project-management", "research"],
    featuredProjectIds: [],
  },
  {
    slug: "wash",
    image: editorialImages["focus-wash"].src,
    title: "Water, Sanitation and Hygiene (WASH)",
    summary:
      "Community engagement and campaigns that support safer hygiene and sanitation practices.",
    overview:
      "We help partners turn WASH priorities into clear communication and community-led behaviour change.",
    practiceAreas: [
      "Handwashing and hygiene communication",
      "World Water Day, Global Handwashing Day and Toilet Day campaigns",
      "Community sanitation and open defecation campaigns",
      "Locally adapted WASH behaviour-change programmes",
    ],
    outcomes: [
      "Communities supported to adopt safer hygiene and sanitation practices.",
      "Behaviour change and public health outcomes strengthened through community-centred programming.",
      "WASH messaging adapted to local audiences and programme priorities.",
    ],
    relatedServiceSlugs: ["project-management", "research", "mel", "communications"],
    featuredProjectIds: [],
  },
  {
    slug: "health-nutrition",
    title: "Health & Nutrition",
    summary: "School meals, kitchen gardening and nutrition-sensitive programmes.",
    overview: "We support partners to connect nutrition, education and food systems through practical, locally adapted programmes.",
    image: editorialImages["project-health"].src,
    practiceAreas: ["School meals programmes", "Kitchen gardening", "Nutrition-sensitive value chains", "Nutrition-sensitive programme design"],
    outcomes: ["Nutrition priorities integrated into programme design.", "Schools and communities supported with practical food and nutrition approaches."],
    relatedServiceSlugs: ["project-management", "research", "mel"],
    featuredProjectIds: [],
  },
  {
    slug: "gedsi",
    title: "Gender Equality, Disability & Social Inclusion",
    summary: "Inclusive programmes and institutions that address barriers to participation.",
    overview: "We help partners embed gender equality, disability and social inclusion across programme design, delivery and institutional practice.",
    image: editorialImages["service-capacity"].src,
    practiceAreas: ["GEDSI mainstreaming and inclusive programme design", "Gender analysis, audits and assessments", "Gender action plans", "Training and institutional capacity development"],
    outcomes: ["Barriers to participation identified and addressed.", "Inclusion embedded in programme plans and institutional practice."],
    relatedServiceSlugs: ["research", "capacity-development", "project-management", "mel"],
    featuredProjectIds: [],
  },
]

export function getFocusAreaBySlug(slug: string) {
  return focusAreas.find((area) => area.slug === slug)
}
