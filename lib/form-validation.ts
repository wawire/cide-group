export interface FormErrors {
  name?: string
  organization?: string
  email?: string
  phone?: string
  country?: string
  enquiryType?: string
  message?: string
  privacyConsent?: string
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
  } else if (data.organization.trim().length < 2) {
    errors.organization = "Organization must be at least 2 characters"
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

  // Enquiry type validation
  if (!data.enquiryType || typeof data.enquiryType !== "string" || !data.enquiryType.trim()) {
    errors.enquiryType = "Please select the nature of your enquiry"
  }

  // Message validation
  if (!data.message || typeof data.message !== "string" || !data.message.trim()) {
    errors.message = "Message is required"
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters"
  } else if (data.message.length > 3000) {
    errors.message = "Message must not exceed 3000 characters"
  }

  // Privacy consent — required
  if (!data.privacyConsent) {
    errors.privacyConsent = "You must agree to the Privacy Policy to submit this form"
  }

  return errors
}
