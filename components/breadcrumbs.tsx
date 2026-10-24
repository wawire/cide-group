import Link from "next/link"

export type BreadcrumbsProps = {
  ancestors: readonly { label: string; href: string }[]
  current: string
}

export default function Breadcrumbs({ ancestors, current }: BreadcrumbsProps) {
  return <nav aria-label="Breadcrumb" className="text-sm">
    <ol className="break-words leading-relaxed">
      {ancestors.map((item) => <li key={item.href} className="inline">
        <Link href={item.href} className="inline-block py-2 align-middle no-underline opacity-80 transition-opacity hover:opacity-100">{item.label}</Link>
        <span aria-hidden="true" className="mx-2">/</span>
      </li>)}
      <li aria-current="page" className="inline align-middle">{current}</li>
    </ol>
  </nav>
}
