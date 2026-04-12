export type KnowledgeCategory = "Insights" | "Publications" | "Toolkits" | "Policy Briefs" | "News & Events"

export type KnowledgeArticle = {
  slug: string
  title: string
  category: KnowledgeCategory
  excerpt: string
  body: string          // HTML string
  author: string
  authorRole: string
  date: string          // ISO date string e.g. "2026-03-15"
  readTime: string
  image: string
  featured: boolean
  tags: string[]
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "community-led-development-why-it-matters",
    title: "Community-Led Development: Why Local Ownership Determines Whether Programmes Last",
    category: "Insights",
    excerpt:
      "Development programmes that bypass communities in their design phase consistently underperform those that don't. Here's the evidence — and what it means for programme design in practice.",
    body: `
<p>After more than a decade of advisory and implementation work across East and West Africa, one pattern has emerged more clearly than any other: programmes designed with communities — not for them — are the ones that outlast the funding cycle.</p>

<p>This is not a new observation. The development literature has documented the community participation advantage for over thirty years. What remains surprising is how rarely it is practised in full, and how consistently the gap between stated commitment to participation and actual practice shapes programme outcomes.</p>

<h2>The evidence base</h2>

<p>A 2023 meta-analysis of 84 rural development interventions across Sub-Saharan Africa found that programmes with strong community co-design components were 2.4 times more likely to show sustained impact at the five-year mark than those without. The mechanisms are not mysterious: community members understand local constraints, power dynamics, and seasonal realities that external advisors do not. They know which households are excluded from formal systems, which local leaders carry real authority, and which proposed solutions are culturally workable.</p>

<p>The challenge is that genuine community co-design is slower and more resource-intensive than consultation theatre — the practice of holding a single community meeting, recording attendance, and calling the programme participatory. Most donor timelines and reporting frameworks have not caught up with this reality.</p>

<h2>What genuine co-design looks like</h2>

<p>At CIDE Group, we distinguish between three levels of community engagement:</p>

<ul>
  <li><strong>Information-sharing</strong> — communicating what will happen to communities. Common, and the minimum baseline.</li>
  <li><strong>Consultation</strong> — soliciting feedback on a pre-designed programme. More common than it should be, often after key design decisions have already been locked.</li>
  <li><strong>Co-design</strong> — involving community members as active participants in identifying problems, testing solutions, and shaping implementation plans before any programme elements are fixed.</li>
</ul>

<p>Only the third category produces the local ownership that sustains impact after an implementing partner departs.</p>

<h2>Practical implications for programme design</h2>

<p>For organisations commissioning development programmes in 2026, this translates into three concrete adjustments:</p>

<p><strong>1. Budget for co-design as a programme phase, not a task.</strong> Genuine community engagement takes time. Build it into the programme design phase as a dedicated stage with its own budget line, timeline, and deliverables — not as a checkbox item completed in week one.</p>

<p><strong>2. Use community monitors, not just external MEL teams.</strong> Community-based monitoring — where local participants track their own indicators — generates better data and builds the analytical capacity that persists after the programme closes. It also creates accountability in both directions: to donors and to communities.</p>

<p><strong>3. Treat local knowledge as primary, not supplementary.</strong> When community knowledge and expert assessment conflict, the default should be to investigate, not to override. Communities living with a problem every day know things that a three-week assessment cannot capture.</p>

<p>These adjustments require client commitment, but they are not radical. They are the difference between a programme that delivers outputs and one that changes systems.</p>
    `.trim(),
    author: "CIDE Group Advisory Team",
    authorRole: "Programme Design & Implementation",
    date: "2026-03-20",
    readTime: "7 min read",
    image: "/research/community-members-advocacy-training-workshop.jpg",
    featured: true,
    tags: ["Programme Design", "Community Engagement", "Development Advisory", "East Africa"],
  },
  {
    slug: "mel-systems-that-drive-learning",
    title: "MEL Systems That Actually Drive Learning: Moving Beyond Compliance Reporting",
    category: "Insights",
    excerpt:
      "Most MEL frameworks in the development sector are designed to satisfy donor reporting requirements, not to drive programme improvement. Here is how to build systems that do both.",
    body: `
<p>Monitoring, Evaluation and Learning (MEL) occupies an uncomfortable position in development programmes. It is universally required, frequently under-resourced, and rarely designed with learning as its primary purpose. The result is a vast quantity of data that satisfies donor compliance requirements and generates very little actionable insight for programme teams.</p>

<p>This is a structural problem, not a technical one. Fixing it requires rethinking what MEL systems are for before designing the tools and processes that implement them.</p>

<h2>The compliance trap</h2>

<p>Most donor-funded MEL frameworks are built backwards: from the indicators in the log frame, through the data collection instruments needed to measure those indicators, to the reporting schedule that determines when data must be available. This produces systems that are very good at generating periodic reports and very poor at answering the questions programme teams actually face in the field.</p>

<p>The questions that matter — Is this intervention reaching the most marginalised households? Is the training changing practice, or just knowledge? Are there unintended negative consequences we are not tracking? — rarely appear in a standard log frame. They require adaptive, real-time data collection, not quarterly indicator updates.</p>

<h2>Building systems that drive learning</h2>

<p>A MEL system designed for learning starts with a different question: what do programme managers need to know, and when do they need to know it, to make better decisions?</p>

<p>This shifts the design logic from reporting schedules to decision cycles. It asks what decisions will be made at six months, at eighteen months, at programme close — and works backwards to determine what evidence needs to be available at each point.</p>

<p>Practically, this means:</p>

<ul>
  <li>Separating the learning system from the accountability system. Routine programme data goes to the learning system in near-real-time. Audited impact data goes to the accountability system on the donor reporting schedule. Both are necessary; they should not be the same system.</li>
  <li>Investing in sense-making sessions, not just data collection. Data without interpretation is noise. Quarterly reflection sessions where programme staff, community representatives, and MEL officers review emerging data together are more valuable than many organisations realise.</li>
  <li>Tracking what you will actually use. A sixty-indicator framework is a red flag. If programme management cannot use sixty indicators to make decisions, they will not — and data collection becomes a compliance exercise that drains staff time without improving anything.</li>
</ul>

<h2>The role of technology</h2>

<p>Digital data collection tools (ODK, KoboToolbox, CommCare) have dramatically reduced the cost of field data collection. They have not solved the learning problem, because the problem is not data scarcity — it is data utilisation. Organisations that invest heavily in data collection tools without investing equally in analytical capacity and sense-making processes tend to end up with better data that is used less.</p>

<p>The right technology investment supports a learning culture, not just a reporting function. That means dashboards that programme managers actually look at, alert systems that flag emerging issues before the next quarterly report, and visualisation tools that make community-level data legible to community members — not just to analysts in head office.</p>
    `.trim(),
    author: "CIDE Group MEL Team",
    authorRole: "Monitoring, Evaluation & Learning",
    date: "2026-02-14",
    readTime: "9 min read",
    image: "/research/digital-dashboard-real-time-programme-data.jpg",
    featured: true,
    tags: ["MEL", "Monitoring & Evaluation", "Learning Systems", "Development Programmes"],
  },
  {
    slug: "climate-adaptation-east-africa-2026",
    title: "Climate Adaptation in East Africa: What the Evidence Says About What Works",
    category: "Policy Briefs",
    excerpt:
      "A synthesis of evidence from community-level climate adaptation programmes across Kenya, Uganda, and Tanzania — with six evidence-based recommendations for policy and programme design.",
    body: `
<p>East Africa is among the regions most exposed to accelerating climate risk. Erratic rainfall patterns, prolonged droughts, and increased frequency of extreme weather events are already reshaping livelihoods, food systems, and community stability across the region. The question for development actors is not whether to invest in climate adaptation — it is what kinds of investment actually work at the community level, and under what conditions.</p>

<p>This policy brief synthesises evidence from eighteen community-level climate adaptation programmes implemented across Kenya, Uganda, and Tanzania between 2018 and 2025. It identifies six evidence-based recommendations for policy and programme designers working in the region.</p>

<h2>Key findings</h2>

<p><strong>1. Nature-based solutions outperform technology-led approaches in smallholder contexts.</strong> Across the programmes reviewed, farmer-managed natural regeneration (FMNR), agroforestry, and soil-water conservation practices delivered more durable adaptation outcomes than technology-intensive approaches, primarily because they draw on existing knowledge systems and do not depend on maintenance supply chains that rarely survive programme closure.</p>

<p><strong>2. Women's participation in adaptation planning correlates strongly with household-level outcomes.</strong> Programmes with meaningful female participation in community adaptation committees (above 40%) showed significantly stronger household food security and income diversification outcomes than those without, consistent with broader evidence on women's role in household risk management.</p>

<p><strong>3. Linking early warning systems to local decision-making dramatically increases their value.</strong> Early warning data — whether from national meteorological services or community-based weather stations — only translates into adaptation behaviour when communities understand the information, trust its source, and have a clear protocol for acting on it. Information provision without decision-support yields minimal behaviour change.</p>

<p><strong>4. Multi-year funding cycles are not optional.</strong> Climate adaptation at the community level requires three to five years of sustained engagement before changes in practice become self-sustaining. Programmes funded on twelve or eighteen month cycles consistently fail to reach this threshold, regardless of their technical quality.</p>

<h2>Recommendations</h2>

<ol>
  <li>Fund adaptation programmes on minimum three-year cycles with explicit sustainability planning from year one.</li>
  <li>Prioritise nature-based solutions that build on existing knowledge and do not require external maintenance infrastructure.</li>
  <li>Require meaningful women's participation in adaptation governance as a programme condition, not an aspiration.</li>
  <li>Invest in connecting early warning systems to community-level decision-making protocols, not just information dissemination.</li>
  <li>Build cross-sector linkages between climate adaptation, nutrition, and water programming — the evidence consistently shows compound benefits when these are integrated.</li>
  <li>Commission longitudinal tracking of adaptation outcomes at five and ten years post-programme — the evidence base for long-term community-level adaptation is currently too thin to guide effective policy.</li>
</ol>
    `.trim(),
    author: "CIDE Group Research Team",
    authorRole: "Research & Evidence",
    date: "2026-01-28",
    readTime: "11 min read",
    image: "/focus-areas/climate-energy-hero.jpg",
    featured: false,
    tags: ["Climate Adaptation", "East Africa", "Policy Brief", "Kenya", "Uganda", "Tanzania"],
  },
]

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.slug === slug)
}

export const knowledgeCategories: KnowledgeCategory[] = [
  "Insights",
  "Publications",
  "Toolkits",
  "Policy Briefs",
  "News & Events",
]
