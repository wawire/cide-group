import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { formControlClassName } from "./input"

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(formControlClassName, "min-h-32 resize-y read-only:bg-muted", className)}
      {...props}
    />
  )
}
