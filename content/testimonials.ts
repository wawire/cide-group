export type Testimonial = {
  id: number
  quote: string
  author: string
  title: string
  organization: string
  since: string
}

export const testimonials: readonly Testimonial[] = [
  {
    id: 1,
    quote:
      "CIDE did not just deliver a report. They helped our team build internal capacity to sustain MEL systems and use data for decisions.",
    author: "Dr. Jane Mwangi",
    title: "Programme Director",
    organization: "Community Health Initiative Kenya",
    since: "Partnership since 2022",
  },
  {
    id: 2,
    quote:
      "From day one, CIDE listened to community priorities and co-designed practical interventions. The campaign outcomes were measurable and durable.",
    author: "Michael Odhiambo",
    title: "Executive Director",
    organization: "East Africa Climate Coalition",
    since: "Partnership since 2020",
  },
  {
    id: 3,
    quote:
      "Their GEDSI expertise helped us engage groups we previously struggled to reach. The partnership improved both quality and equity of our programming.",
    author: "Amina Hassan",
    title: "Deputy Country Director",
    organization: "Global Health Initiative Tanzania",
    since: "Partnership since 2021",
  },
]
