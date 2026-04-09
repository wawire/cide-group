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
