"use client"

import type { LucideIcon, LucideProps } from "lucide-react"
import { BarChart3, Building2, Layers, Megaphone, Smartphone, TrendingUp, Users, BarChart2 } from "lucide-react"
import type { ServiceIconKey } from "@/content/services"

const iconMap = {
  smartphone: Smartphone,
  megaphone: Megaphone,
  building: Building2,
  users: Users,
  chart: BarChart3,
  "line-chart": TrendingUp,
  blocks: Layers,
  calendar: BarChart2,
} satisfies Record<ServiceIconKey, LucideIcon>

type ServiceIconProps = LucideProps & {
  icon: ServiceIconKey
}

export function ServiceIcon({ icon, ...props }: ServiceIconProps) {
  const Icon = iconMap[icon]
  return <Icon {...props} />
}
