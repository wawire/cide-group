"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type TeamPortraitProps = {
  name: string
  src: string
  sizes: string
  className?: string
}

export default function TeamPortrait({ name, src, sizes, className }: TeamPortraitProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null)

  if (!src || failedSource === src) {
    const initials = name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase()
    return (
      <div role="img" aria-label={name} className="absolute inset-0 flex items-center justify-center bg-surface-secondary">
        <span className="select-none text-4xl font-bold tracking-tight text-primary/25">{initials}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      sizes={sizes}
      className={cn("object-cover object-top", className)}
      onError={() => setFailedSource(src)}
    />
  )
}
