import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { formControlClassName } from "./input"

export function Select({ className, ...props }: ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(formControlClassName, "min-h-11", className)}
      {...props}
    />
  )
}
