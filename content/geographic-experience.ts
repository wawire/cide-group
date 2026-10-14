export type ExperienceLocation = {
  code: string
  name: string
  label: string
  region: "Africa" | "Europe" | "North America" | "Asia"
  kind: "country" | "region"
}

export const experienceLocations: ExperienceLocation[] = [
  { code: "ke", name: "Kenya", label: "Kenya", region: "Africa", kind: "country" },
  { code: "ug", name: "Uganda", label: "Uganda", region: "Africa", kind: "country" },
  { code: "tz", name: "Tanzania", label: "Tanzania", region: "Africa", kind: "country" },
  { code: "et", name: "Ethiopia", label: "Ethiopia", region: "Africa", kind: "country" },
  { code: "rw", name: "Rwanda", label: "Rwanda", region: "Africa", kind: "country" },
  { code: "mw", name: "Malawi", label: "Malawi", region: "Africa", kind: "country" },
  { code: "ci", name: "Côte d’Ivoire", label: "Côte d’Ivoire", region: "Africa", kind: "country" },
  { code: "cf", name: "Central African Republic (CAR)", label: "CAR", region: "Africa", kind: "country" },
  { code: "cd", name: "Democratic Republic of Congo (DRC)", label: "DRC", region: "Africa", kind: "country" },
  { code: "zm", name: "Zambia", label: "Zambia", region: "Africa", kind: "country" },
  { code: "ss", name: "South Sudan", label: "South Sudan", region: "Africa", kind: "country" },
  { code: "bi", name: "Burundi", label: "Burundi", region: "Africa", kind: "country" },
  { code: "us", name: "United States", label: "United States", region: "North America", kind: "country" },
  { code: "asia", name: "Asia", label: "Asia", region: "Asia", kind: "region" },
  { code: "es", name: "Spain", label: "Spain", region: "Europe", kind: "country" },
]

export const experienceStatement =
  "Our multidisciplinary team of experts brings over a decade of experience and has worked with non-profit, public and private organisations, implementing assignments in Kenya, Uganda, Tanzania, Ethiopia, Rwanda, Malawi, Côte d’Ivoire, Central African Republic (CAR), Democratic Republic of Congo (DRC), Zambia, South Sudan, Burundi, the United States, Asia and Spain."
