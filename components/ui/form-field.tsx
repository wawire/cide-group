import type { ReactElement } from "react"
import { Slot } from "@radix-ui/react-slot"

type FormFieldProps = {
  id: string
  label: string
  required?: boolean
  description?: string
  error?: string
  children: ReactElement
}

export function FormField({ id, label, required, description, error, children }: FormFieldProps) {
  const descriptionId = description ? `${id}-help` : undefined
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="min-w-0 space-y-2">
      <label htmlFor={id} className="field-label block">
        {label} {required ? <span className="text-destructive-text" aria-hidden="true">*</span> : <span className="caption">(optional)</span>}
      </label>
      {description && <p id={descriptionId} className="supporting-text">{description}</p>}
      <Slot
        id={id}
        aria-invalid={!!error}
        aria-describedby={[descriptionId, errorId].filter(Boolean).join(" ") || undefined}
      >
        {children}
      </Slot>
      {error && <p id={errorId} className="text-sm font-medium text-destructive-text">{error}</p>}
    </div>
  )
}
