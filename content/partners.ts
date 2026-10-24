export type PartnerPermissionStatus = "pending" | "approved"

export type ApprovedPartner = {
  slug: string
  name: string
  logo: string
  sourceAsset: string
  category: string
  permissionStatus: "approved"
}

export type PendingPartner = {
  slug: string
  name: string
  sourceAsset: string
  category: string
  permissionStatus: "pending"
  logo?: never
}

export type Partner = ApprovedPartner | PendingPartner

export const partnerCategoryOrder = [
  "Development Finance",
  "Foundation",
  "Development Partner",
  "Civil Society",
  "Government",
  "UN Agency",
] as const

export const partners: Partner[] = [
  {
    slug: "african-development-bank",
    name: "African Development Bank",
    sourceAsset: "source-assets/partners/african-development-bank.jpg",
    category: "Development Finance",
    permissionStatus: "pending",
  },
  {
    slug: "ford-foundation",
    name: "Ford Foundation",
    sourceAsset: "source-assets/partners/ford-foundation.jpg",
    category: "Foundation",
    permissionStatus: "pending",
  },
  {
    slug: "gates-foundation",
    name: "Gates Foundation",
    sourceAsset: "source-assets/partners/gates-foundation.jpg",
    category: "Foundation",
    permissionStatus: "pending",
  },
  {
    slug: "giz",
    name: "GIZ",
    sourceAsset: "source-assets/partners/giz.jpg",
    category: "Development Partner",
    permissionStatus: "pending",
  },
  {
    slug: "human-rights-watch",
    name: "Human Rights Watch",
    sourceAsset: "source-assets/partners/human-rights-watch.jpg",
    category: "Civil Society",
    permissionStatus: "pending",
  },
  {
    slug: "oxfam",
    name: "Oxfam",
    sourceAsset: "source-assets/partners/oxfam.jpg",
    category: "Development Partner",
    permissionStatus: "pending",
  },
  {
    slug: "open-society-foundations",
    name: "Open Society Foundations",
    sourceAsset: "source-assets/partners/open-society-foundations.jpg",
    category: "Foundation",
    permissionStatus: "pending",
  },
  {
    slug: "save-the-children",
    name: "Save the Children",
    sourceAsset: "source-assets/partners/save-the-children.jpg",
    category: "Development Partner",
    permissionStatus: "pending",
  },
  {
    slug: "uk-aid",
    name: "UK Aid",
    sourceAsset: "source-assets/partners/uk-aid.jpg",
    category: "Government",
    permissionStatus: "pending",
  },
  {
    slug: "uk-foreign-office",
    name: "UK Foreign Office",
    sourceAsset: "source-assets/partners/uk-foreign-office.jpg",
    category: "Government",
    permissionStatus: "pending",
  },
  {
    slug: "undp",
    name: "UNDP",
    sourceAsset: "source-assets/partners/undp.jpg",
    category: "UN Agency",
    permissionStatus: "pending",
  },
  {
    slug: "world-bank",
    name: "World Bank",
    sourceAsset: "source-assets/partners/world-bank.jpg",
    category: "Development Finance",
    permissionStatus: "pending",
  },
]

export const approvedPartners = partners.filter(
  (partner): partner is ApprovedPartner => partner.permissionStatus === "approved",
)

type FeaturedPartner = {
  name: string
  logo: string
  href: string
  logoSource?: string
}

export const featuredPartners: readonly FeaturedPartner[] = [
  {
    name: "Mara Basin Conservation Forum",
    logo: "/partners/mara-basin.png",
    href: "https://marabasinconservation.org/",
  },
  {
    name: "Miss Koch Kenya",
    logo: "/partners/miss-koch-kenya.jpeg",
    href: "https://misskoch.org/",
  },
  {
    name: "Restoration of Elgeyo Marakwet Escarpment Initiative (REMEI)",
    logo: "/partners/remei.png",
    href: "https://www.restoreelgeyomarakwet.org/",
  },
  {
    name: "ASEITY 222",
    logo: "/partners/aseity.png",
    href: "https://aseity.global/",
  },
  {
    name: "Jitolee Good Friends Foundation",
    logo: "/partners/jitolee.jpeg",
    href: "https://jitoleegoodfriendsfoundation.org/",
  },
  {
    name: "Global Compassion Coalition",
    logo: "/partners/global-compassion-coalition.png",
    href: "https://www.globalcompassioncoalition.org/",
    logoSource: "https://www.globalcompassioncoalition.org/wp-content/uploads/2026/07/GCC-Logo-2026-Small.png",
  },
  {
    name: "Chance for Childhood",
    logo: "/partners/chance-for-childhood.png",
    href: "https://www.chanceforchildhood.org/",
  },
  {
    name: "Slum Child Foundation",
    logo: "/partners/slum-child-foundation.png",
    logoSource: "https://www.wus-austria.org/files/user/docs/Downloads/Draft%20Agenda%20Slums%20Improving%20Life%20Skills%20of%20Teenage%20Mothers%2007122022.pdf",
    href: "https://slumchildfoundation.org/",
  },
  {
    name: "Turning Point",
    logo: "/partners/turning-point.png",
    href: "https://www.turningpointmagazine.africa/",
    logoSource: "https://www.turningpointmagazine.africa/",
  },
] as const
