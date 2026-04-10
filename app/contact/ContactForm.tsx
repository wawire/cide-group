"use client"

import type React from "react"
import { useId, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { contactCountries, siteConfig } from "@/content/site"
import { validateContactForm, type FormErrors } from "@/lib/form-validation"
import { Mail, Phone, MapPin } from "lucide-react"

type FormDataState = {
  name: string
  organization: string
  email: string
  phone: string
  country: string
  message: string
  subscribe: boolean
  website: string
  formStartedAt: number
}

export default function ContactForm() {
  const initialState = useMemo<FormDataState>(
    () => ({
      name: "",
      organization: "",
      email: "",
      phone: "",
      country: "",
      message: "",
      subscribe: false,
      website: "",
      formStartedAt: Date.now(),
    }),
    [],
  )

  const [formData, setFormData] = useState<FormDataState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({})

  const formId = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))

    if (name in fieldErrors) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerError(null)

    const errors = validateContactForm(formData)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setSubmitted(true)
      setFormData({ ...initialState, formStartedAt: Date.now() })
      setFieldErrors({})
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="bg-surface border border-border p-8 md:p-10">
              {submitted && (
                <div className="mb-6 rounded-lg border border-primary bg-primary/10 p-4 text-primary" role="status">
                  Thank you for reaching out. Your message has been received.
                </div>
              )}

              {serverError && (
                <div className="mb-6 rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive" role="alert">
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input type="hidden" name="formStartedAt" value={formData.formStartedAt} />

                <div>
                  <label htmlFor={`${formId}-name`} className="mb-2 block text-sm font-semibold text-foreground">
                    Your Name <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-name`}
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? `${formId}-name-error` : undefined}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 aria-invalid:border-destructive"
                    placeholder="Your full name"
                  />
                  {fieldErrors.name && (
                    <p id={`${formId}-name-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-org`} className="mb-2 block text-sm font-semibold text-foreground">
                    Organization <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-org`}
                    type="text"
                    name="organization"
                    required
                    autoComplete="organization"
                    aria-invalid={!!fieldErrors.organization}
                    aria-describedby={fieldErrors.organization ? `${formId}-org-error` : undefined}
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 aria-invalid:border-destructive"
                    placeholder="Your organization name"
                  />
                  {fieldErrors.organization && (
                    <p id={`${formId}-org-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                      {fieldErrors.organization}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-email`} className="mb-2 block text-sm font-semibold text-foreground">
                    Email Address <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 aria-invalid:border-destructive"
                    placeholder="your.email@organization.org"
                  />
                  {fieldErrors.email && (
                    <p id={`${formId}-email-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-phone`} className="mb-2 block text-sm font-semibold text-foreground">
                    Phone Number <span className="text-xs font-normal text-text-muted">(Optional)</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? `${formId}-phone-error` : undefined}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 aria-invalid:border-destructive"
                    placeholder="+254 XXX XXX XXX"
                  />
                  {fieldErrors.phone && (
                    <p id={`${formId}-phone-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-country`} className="mb-2 block text-sm font-semibold text-foreground">
                    Country <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <select
                    id={`${formId}-country`}
                    name="country"
                    required
                    autoComplete="country-name"
                    aria-invalid={!!fieldErrors.country}
                    aria-describedby={fieldErrors.country ? `${formId}-country-error` : undefined}
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 aria-invalid:border-destructive"
                  >
                    <option value="">Select a country</option>
                    {contactCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.country && (
                    <p id={`${formId}-country-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                      {fieldErrors.country}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-message`} className="mb-2 block text-sm font-semibold text-foreground">
                    How can we support you? <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    required
                    rows={5}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? `${formId}-message-error` : undefined}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 aria-invalid:border-destructive"
                    placeholder="Tell us about your project, challenge, or partnership opportunity"
                  />
                  {fieldErrors.message && (
                    <p id={`${formId}-message-error`} role="alert" className="mt-1.5 text-sm text-destructive">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`${formId}-subscribe`}
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded accent-primary"
                  />
                  <label htmlFor={`${formId}-subscribe`} className="text-sm text-text-secondary">
                    Subscribe to our newsletter for updates and insights
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-center text-xs text-text-muted">
                  For urgent enquiries, call us directly or email our team.
                </p>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <Mail size={24} className="text-primary" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <div className="space-y-2 text-text-secondary">
                <a href={`mailto:${siteConfig.partnershipsEmail}`} className="block transition-colors hover:text-primary">
                  {siteConfig.partnershipsEmail}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="block transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3">
                <Phone size={24} className="text-primary" />
                <h3 className="font-semibold text-foreground">Phone</h3>
              </div>
              <a href={`tel:${siteConfig.phoneHref}`} className="mb-1 block text-text-secondary transition-colors hover:text-primary">
                {siteConfig.phone}
              </a>
              <p className="text-xs text-text-muted">Mon-Fri, 8am-5pm EAT</p>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3">
                <MapPin size={24} className="text-primary" />
                <h3 className="font-semibold text-foreground">Address</h3>
              </div>
              <p className="text-text-secondary">
                {siteConfig.address}
                <br />
                <span className="text-xs text-text-muted">{siteConfig.legalName}</span>
                <br />
                <span className="text-xs text-text-muted">Company No. {siteConfig.companyNumber}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
