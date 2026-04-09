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
    slug: "environment",
    image: "https://images.unsplash.com/photo-1542601906897-1dfe4f03ff29?auto=format&fit=crop&w=800&q=80",
    title: "Environment, Climate and Sustainability",
    summary:
      "We partner with organisations and communities to restore ecosystems, improve livelihoods, and build climate resilience through locally led solutions.",
    overview:
      "Our environmental practice connects policy, evidence, and implementation so climate strategies are practical at community and institutional level. We support organisations to navigate adaptation, sustainability planning, ecosystem restoration, and resilient livelihoods with work grounded in local realities.",
    practiceAreas: [
      "Circular economy",
      "Environmental and climate assessments",
      "Environmental, Social and Governance (ESG)",
      "Climate adaptation and mitigation strategies",
      "Sustainability and resilience programming",
      "Policy support and institutional capacity development",
      "Regenerative agriculture, agroforestry, landscape restoration, and FMNR",
      "Community and institutional training",
      "Stakeholder engagement",
    ],
    outcomes: [
      "Climate adaptation priorities translated into practical implementation plans.",
      "Communities and institutions equipped to manage natural resources sustainably.",
      "Evidence and governance systems aligned to long-term resilience goals.",
    ],
    relatedServiceSlugs: ["research", "project-management", "mel"],
    featuredProjectIds: ["climate-justice-east-africa"],
  },
  {
    slug: "child-rights",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    title: "Child Rights and Social Justice",
    summary:
      "We advance children's rights through holistic, rights-based, and participatory approaches aligned with the Convention on the Rights of the Child (CRC).",
    overview:
      "CIDE supports programmes and institutions to embed child rights, safeguarding, and meaningful participation in service delivery and policy work. Our approach combines technical advisory support with contextual safeguarding systems, training, and child-friendly engagement methods.",
    practiceAreas: [
      "Child rights mainstreaming",
      "Child and adult safeguarding",
      "Child protection in emergencies",
      "Child participation and child-led research",
      "Capacity building for child protection actors",
      "Development of child-friendly IEC materials and contextualised manuals",
    ],
    outcomes: [
      "Safeguarding standards embedded across partner systems and programme workflows.",
      "Children and caregivers included in research, design, and accountability processes.",
      "Rights-based delivery models translated into practice for local teams.",
    ],
    relatedServiceSlugs: ["advocacy", "capacity-development", "project-management"],
    featuredProjectIds: ["inclusive-health-systems-western-kenya"],
  },
  {
    slug: "gedsi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    title: "Gender Equality, Disability and Social Inclusion (GEDSI)",
    summary:
      "We support organisations to embed inclusive, equitable, and rights-based approaches across programmes and institutions.",
    overview:
      "Our GEDSI work helps organisations move beyond compliance to real inclusion in strategy, programme design, implementation, and learning. We combine analysis, audits, facilitation, and systems strengthening to help partners close participation gaps and improve outcomes for historically excluded groups.",
    practiceAreas: [
      "GEDSI mainstreaming",
      "Inclusive programme design",
      "Training and institutional capacity development",
      "Gender analysis, audits, assessments, and gender action plans",
    ],
    outcomes: [
      "Inclusion standards built into programme design, delivery, and learning systems.",
      "Teams trained to apply equitable and accessible approaches in practice.",
      "Evidence used to improve participation and outcome equity across portfolios.",
    ],
    relatedServiceSlugs: ["enterprise", "research", "capacity-development"],
    featuredProjectIds: ["inclusive-health-systems-western-kenya", "mel-systems-ngo-networks"],
  },
  {
    slug: "education",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    title: "Education and Learning",
    summary:
      "We provide technical expertise across the education and child wellbeing spectrum, including early childhood, inclusive education, and education in emergencies.",
    overview:
      "CIDE supports education actors to strengthen systems, leadership, and learner wellbeing across formal and non-formal settings. We help partners design practical strategies for inclusive learning, staff development, institutional planning, and education delivery in fragile and changing contexts.",
    practiceAreas: [
      "Education policy and framework development",
      "Institutional strategic planning",
      "Career guidance and life skills training",
      "Leadership development",
      "Mental health and psychosocial support",
    ],
    outcomes: [
      "Learner-centred strategies strengthened across schools and community platforms.",
      "Institutions equipped with practical leadership, planning, and wellbeing tools.",
      "Education programmes designed to adapt to crisis and fragile contexts.",
    ],
    relatedServiceSlugs: ["capacity-development", "project-management", "mel"],
    featuredProjectIds: ["mel-systems-ngo-networks"],
  },
  {
    slug: "health-wash-livelihoods",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    title: "Health, WASH & Economic Livelihoods",
    summary: "We deliver advisory and technical support across health systems, water and sanitation, nutrition, and economic empowerment programmes.",
    overview:
      "Some mandates cut across sectors and need multidisciplinary support rather than a single practice lens. CIDE brings together policy, evidence, communication, and implementation expertise to respond to complex challenges in health, WASH, livelihoods, and wider systems change work.",
    practiceAreas: [
      "Water, Sanitation and Hygiene (WASH)",
      "Health and nutrition",
      "Economic empowerment and social justice",
      "Human capital development",
    ],
    outcomes: [
      "Cross-sector advisory support delivered where development challenges overlap.",
      "Policy, evidence, and implementation insights connected across thematic areas.",
      "Flexible multidisciplinary teams mobilized around complex mandates.",
    ],
    relatedServiceSlugs: ["research", "communications", "enterprise"],
    featuredProjectIds: ["behavior-change-evidence-campaigns"],
  },
]

export function getFocusAreaBySlug(slug: string) {
  return focusAreas.find((area) => area.slug === slug)
}

