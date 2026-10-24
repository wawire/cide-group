import Link from "next/link"

type BreadcrumbsProps = {
  ancestors: readonly { label: string; href: string }[]
  current: string
}

export default function Breadcrumbs({ ancestors, current }: BreadcrumbsProps) {
  return <nav aria-label="Breadcrumb" className="text-sm">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 break-words">
      {ancestors.map((item) => <li key={item.href} className="min-w-0">
        <Link href={item.href} className="inline-link inline-block py-2">{item.label}</Link>
        <span aria-hidden="true" className="ml-2">/</span>
      </li>)}
      <li aria-current="page" className="min-w-0 py-2">{current}</li>
    </ol>
  </nav>
}
