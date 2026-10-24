import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export const formControlClassName = "w-full min-w-0 rounded-md border border-control-border bg-surface px-3 py-3 text-base text-foreground placeholder:text-text-muted transition-colors duration-200 hover:border-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60 aria-invalid:border-destructive-text"

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      className={cn(formControlClassName, "min-h-11 read-only:bg-muted", className)}
      {...props}
    />
  )
}
