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
}

export const focusAreas: FocusArea[] = [
  {
    slug: "climate-energy-environment",
    image: "/focus-areas/climate-reforestation-planting.jpg",
    title: "Climate, Energy and Environment",
    summary:
      "Powering Africa's transition to a climate-resilient, low-carbon future through scalable, high-impact solutions.",
    overview:
      "Africa sits at the centre of the global climate and development agenda. We work with governments, organisations, donors, investors, and the private sector to design and implement programmes that strengthen community resilience, accelerate the transition to clean energy, and promote inclusive, sustainable growth. Our work translates environmental science and global policy into practical, locally viable solutions that protect natural assets, sustain livelihoods, and create green economic opportunities.",
    practiceAreas: [
      "Climate resilience integration across agriculture, health, infrastructure, and governance",
      "Clean energy transition and energy efficiency support",
      "Climate policy and finance for low-carbon transitions",
      "Nature-based solutions, including agroforestry, landscape restoration, and natural regeneration",
      "Climate-smart agriculture and natural resource management",
      "Environmental and climate assessments",
      "Stakeholder engagement and inclusive environmental planning",
      "Circular economy solutions",
      "Climate-resilient infrastructure support",
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
    image: "/images/AI GEDSI Capacity Building.png",
    title: "Education and Lifelong Learning",
    summary:
      "Improving learning outcomes through stronger systems, cross-sector collaboration, and inclusive, evidence-based approaches.",
    overview:
      "We support the delivery of high-quality, inclusive education for children and young people across Africa. Our work strengthens education systems and implements locally grounded solutions aligned with global education frameworks, national priorities, and donor goals. We focus on building systems that enable foundational literacy and numeracy, 21st-century skills, STEM competencies, vocational skills, and critical thinking.",
    practiceAreas: [
      "Systems strengthening and policy support",
      "Mental health and psychosocial support in learning environments",
      "Inclusive education and education in emergencies",
      "Peacebuilding and resilience through education",
      "Teacher development and capacity building",
      "Cross-sectoral programming linking education with health, nutrition, and safety",
      "Technology and innovation for learning outcomes and system efficiency",
      "Teacher training and professional development",
      "Career guidance and life skills training",
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
    image: "/focus-areas/agriculture-vegetable-crop.jpg",
    title: "Agriculture, Food Security and Sustainable Livelihoods",
    summary:
      "Scalable, locally driven, and climate-smart solutions that strengthen food systems, rural economies, and resilience.",
    overview:
      "Agricultural and rural development plays a critical role in reducing poverty, strengthening food security, and supporting long-term economic stability across rural communities. We work with governments, donors, private sector actors, and community stakeholders to design and implement programmes that address food insecurity at its root by strengthening agricultural systems, enhancing market access, reducing post-harvest losses, and building resilience to climate and economic shocks.",
    practiceAreas: [
      "Design, implementation, and evaluation of climate-smart rural development and food security programmes",
      "Technical assistance for programme delivery, institutional strengthening, and policy support",
      "Public-private partnerships for investment and value chain efficiency",
      "Agricultural value chain development across production, processing, aggregation, marketing, and distribution",
      "Value chain and market systems analysis",
      "Capacity building for farmer organisations, cooperatives, and agribusiness enterprises",
      "Training in climate-smart agriculture, farm management, post-harvest handling, and agribusiness development",
      "Youth and women empowerment for productivity, enterprise development, and market access",
      "Support for MEL frameworks to track outcomes, impact, and value for money",
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
    image: "/projects/advocacy-training-workshop.jpg",
    title: "Child Rights and Social Justice",
    summary:
      "Rights-based and participatory approaches that advance child protection, safeguarding, and social justice.",
    overview:
      "Through our advocacy pillar, we advance children's rights through holistic, rights-based, and participatory approaches aligned with the Convention on the Rights of the Child. Our work combines safeguarding, child protection, participation, and ethical communications to strengthen systems that protect children and uphold dignity.",
    practiceAreas: [
      "Child rights mainstreaming",
      "Child and adult safeguarding",
      "Child protection in emergencies",
      "Child participation and child-led research",
      "Capacity building for child protection actors",
      "Development of child-friendly IEC materials and contextualised manuals",
      "Ethical storytelling and safeguarding-aligned communications",
      "Support for campaigns such as rights-based ethical storytelling initiatives",
    ],
    outcomes: [
      "Child rights and safeguarding embedded more strongly in programmes and institutions.",
      "Participation and accountability approaches strengthened for children and communities.",
      "Ethical storytelling and social justice principles carried into advocacy and communications practice.",
    ],
    relatedServiceSlugs: ["advocacy", "communications", "capacity-development", "research"],
    featuredProjectIds: [],
  },
  {
    slug: "economic-empowerment",
    image: "/focus-areas/livelihoods-vsla-cash-transfer.jpg",
    title: "Economic Empowerment",
    summary:
      "Inclusive economic growth that equips individuals and communities with skills, resources, and sustainable livelihood pathways.",
    overview:
      "We drive inclusive economic growth by equipping individuals and communities with the skills, resources, and opportunities needed to participate meaningfully in Africa's economic transformation. Our approach addresses systemic barriers to finance, strengthens local enterprise, and creates sustainable livelihood pathways, especially for women and young people.",
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
    image: "/focus-areas/wash-children-clean-water.png",
    title: "Water, Sanitation and Hygiene (WASH)",
    summary:
      "Climate-resilient, inclusive, and scalable WASH solutions that improve public health and strengthen community resilience.",
    overview:
      "Water is fundamental to life, health, and economic productivity, yet millions across Africa still lack access to safe and reliable services. We partner with governments, donors, and the private sector to deliver climate-resilient, inclusive, and scalable WASH solutions that improve public health, strengthen community resilience, and drive sustainable development, especially in underserved and high-risk settings.",
    practiceAreas: [
      "Climate-resilient water access",
      "Inclusive sanitation solutions",
      "Community-centred programming on handwashing, menstrual hygiene management, and disease prevention",
      "Innovative WASH technologies, including filtration systems",
      "Conflict-sensitive water systems",
      "Infrastructure delivery combined with community engagement and systems strengthening",
    ],
    outcomes: [
      "Safer and more reliable water and sanitation access supported in underserved settings.",
      "Behaviour change and public health outcomes strengthened through community-centred programming.",
      "WASH solutions designed to be scalable, locally owned, and aligned with development priorities.",
    ],
    relatedServiceSlugs: ["project-management", "research", "mel", "communications"],
    featuredProjectIds: [],
  },
]

export function getFocusAreaBySlug(slug: string) {
  return focusAreas.find((area) => area.slug === slug)
}
