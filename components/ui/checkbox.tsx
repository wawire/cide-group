import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Checkbox({ className, ...props }: Omit<ComponentProps<"input">, "type">) {
  return (
    <input
      {...props}
      type="checkbox"
      data-slot="checkbox"
      className={cn("mt-0.5 size-6 shrink-0 accent-primary disabled:cursor-not-allowed disabled:opacity-60", className)}
    />
  )
}
