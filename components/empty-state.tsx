import type { ReactNode } from "react"

type EmptyStateProps = {
  title: string
  description: string
  children?: ReactNode
}

export default function EmptyState({ title, description, children }: EmptyStateProps) {
  return <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
    <p role="status" className="text-lg font-semibold text-foreground">{title}</p>
    <p className="mt-3 max-w-2xl text-text-secondary">{description}</p>
    {children && <div className="mt-5 flex flex-wrap gap-4">{children}</div>}
  </div>
}
