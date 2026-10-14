import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HeroBackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white">
      <ArrowLeft size={15} aria-hidden="true" />
      {children}
    </Link>
  )
}
