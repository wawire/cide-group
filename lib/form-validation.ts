export interface FormErrors {
  name?: string
  organization?: string
  email?: string
  phone?: string
  country?: string
  message?: string
}

export function validateContactForm(data: Record<string, unknown>): FormErrors {
  const errors: FormErrors = {}

  // Name validation
  if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
    errors.name = "Name is required"
  } else if (data.name.length < 2) {
    errors.name = "Name must be at least 2 characters"
  }

  // Organization validation
  if (!data.organization || typeof data.organization !== "string" || !data.organization.trim()) {
    errors.organization = "Organization is required"
  }

  // Email validation
  if (!data.email || typeof data.email !== "string") {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Phone validation (optional)
  if (data.phone && typeof data.phone === "string" && data.phone.trim()) {
    if (!/^[\d\s+\-()]+$/.test(data.phone)) {
      errors.phone = "Please enter a valid phone number"
    }
  }

  // Country validation
  if (!data.country || typeof data.country !== "string" || !data.country.trim()) {
    errors.country = "Country is required"
  }

  // Message validation
  if (!data.message || typeof data.message !== "string" || !data.message.trim()) {
    errors.message = "Message is required"
  } else if (data.message.length < 10) {
    errors.message = "Message must be at least 10 characters"
  } else if (data.message.length > 5000) {
    errors.message = "Message must not exceed 5000 characters"
  }

  return errors
}
