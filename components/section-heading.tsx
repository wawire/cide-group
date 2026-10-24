import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  title: ReactNode
  kicker?: string
  introduction?: string
  as?: "h2" | "h3" | "h4"
  className?: string
}

export default function SectionHeading({ title, kicker, introduction, as: Heading = "h2", className }: SectionHeadingProps) {
  return <div className={cn("min-w-0", className)}>
    {kicker && <p className="section-kicker mb-3">{kicker}</p>}
    <Heading className="section-heading">{title}</Heading>
    {introduction && <p className="mt-4 max-w-2xl text-text-secondary">{introduction}</p>}
  </div>
}
