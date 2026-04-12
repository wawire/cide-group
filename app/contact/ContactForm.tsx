"use client"

import type React from "react"
import { useId, useMemo, useState } from "react"
import { contactCountries, siteConfig } from "@/content/site"
import { validateContactForm, type FormErrors } from "@/lib/form-validation"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type FormDataState = {
  name: string
  organization: string
  email: string
  phone: string
  country: string
  message: string
  subscribe: boolean
  privacyConsent: boolean
  website: string
  formStartedAt: number
}

const contactPoints = [
  {
    icon: Mail,
    label: "General",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Mail,
    label: "Partnerships",
    value: siteConfig.partnershipsEmail,
    href: `mailto:${siteConfig.partnershipsEmail}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    sub: "Mon–Fri, 8am–5pm EAT",
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
    href: undefined,
  },
]

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
      privacyConsent: false,
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
    if (name in fieldErrors) setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerError(null)
    const errors = validateContactForm(formData)
    if (Object.keys(errors).length > 0) { setFieldErrors(errors); return }
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

  const inputClass = (error?: string) =>
    `w-full rounded-lg border ${error ? "border-red-400" : "border-[#e2d9d9]"} bg-white px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-[#bf2a2c] focus:ring-2 focus:ring-[#bf2a2c]/15 transition-colors`

  return (
    <section className="bg-background">
      <div className="grid lg:grid-cols-[420px_1fr] min-h-[70vh]">

        {/* ── Left — dark info panel ──────────────────────────────────────── */}
        <div className="relative bg-[#1a0808] flex flex-col overflow-hidden">

          {/* Background image overlay */}
          <div className="absolute inset-0">
            <Image
              src="/research/community-members-advocacy-training-workshop.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-20"
              sizes="420px"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#1a0808]/60 via-[#1a0808]/80 to-[#1a0808]" />
          </div>

          <div className="relative z-10 flex flex-col h-full p-10 lg:p-12">
            {/* Kicker */}
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c] mb-8">
              Contact CIDE Group
            </p>

            {/* Heading */}
            <div className="mb-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight mb-5">
                Let's build something lasting together.
              </h2>
              <p className="text-white/55 leading-relaxed text-sm">
                Whether you are a government agency, donor, NGO, or private sector partner — we are ready to
                listen and co-design practical solutions for your context.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-12 space-y-6">
              {contactPoints.map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-[#bf2a2c]/20 flex items-center justify-center">
                    <Icon size={14} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-white/70 hover:text-white transition-colors break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/70 leading-relaxed">{value}</p>
                    )}
                    {sub && <p className="text-[11px] text-white/30 mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom rule */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-[11px] text-white/30 leading-relaxed">{siteConfig.legalName}</p>
              <p className="text-[11px] text-white/20">Reg. {siteConfig.companyNumber}</p>
            </div>
          </div>
        </div>

        {/* ── Right — form ──────────────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 py-14 lg:px-16 lg:py-20 bg-[#faf7f5]">
          <div className="max-w-xl w-full mx-auto">

            {submitted ? (
              <div className="text-center py-16">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#bf2a2c]/10 mb-6">
                  <CheckCircle size={32} className="text-[#bf2a2c]" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Message received</h3>
                <p className="text-text-secondary leading-relaxed">
                  Thank you for reaching out. We will be in touch within {siteConfig.contactResponseSla}.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
                  <p className="text-sm text-text-muted">Fields marked <span className="text-[#bf2a2c]">*</span> are required.</p>
                </div>

                {serverError && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
                    {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <input type="hidden" name="formStartedAt" value={formData.formStartedAt} />

                  {/* Name + Org — side by side */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={`${formId}-name`} className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">
                        Name <span className="text-[#bf2a2c]">*</span>
                      </label>
                      <input id={`${formId}-name`} type="text" name="name" required autoComplete="name" aria-invalid={!!fieldErrors.name} value={formData.name} onChange={handleChange} className={inputClass(fieldErrors.name)} placeholder="Full name" />
                      {fieldErrors.name && <p role="alert" className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor={`${formId}-org`} className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">
                        Organisation <span className="text-[#bf2a2c]">*</span>
                      </label>
                      <input id={`${formId}-org`} type="text" name="organization" required autoComplete="organization" aria-invalid={!!fieldErrors.organization} value={formData.organization} onChange={handleChange} className={inputClass(fieldErrors.organization)} placeholder="Organisation name" />
                      {fieldErrors.organization && <p role="alert" className="mt-1 text-xs text-red-600">{fieldErrors.organization}</p>}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={`${formId}-email`} className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">
                        Email <span className="text-[#bf2a2c]">*</span>
                      </label>
                      <input id={`${formId}-email`} type="email" name="email" required autoComplete="email" aria-invalid={!!fieldErrors.email} value={formData.email} onChange={handleChange} className={inputClass(fieldErrors.email)} placeholder="your@org.com" />
                      {fieldErrors.email && <p role="alert" className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">
                        Phone <span className="text-xs font-normal normal-case text-text-muted">(optional)</span>
                      </label>
                      <input id={`${formId}-phone`} type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} className={inputClass()} placeholder="+254 XXX XXX XXX" />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor={`${formId}-country`} className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">
                      Country <span className="text-[#bf2a2c]">*</span>
                    </label>
                    <select id={`${formId}-country`} name="country" required autoComplete="country-name" aria-invalid={!!fieldErrors.country} value={formData.country} onChange={handleChange} className={inputClass(fieldErrors.country)}>
                      <option value="">Select your country</option>
                      {contactCountries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    {fieldErrors.country && <p role="alert" className="mt-1 text-xs text-red-600">{fieldErrors.country}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor={`${formId}-message`} className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground">
                      How can we support you? <span className="text-[#bf2a2c]">*</span>
                    </label>
                    <textarea id={`${formId}-message`} name="message" required rows={5} aria-invalid={!!fieldErrors.message} value={formData.message} onChange={handleChange} className={inputClass(fieldErrors.message)} placeholder="Tell us about your project, challenge, or partnership opportunity" />
                    {fieldErrors.message && <p role="alert" className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>}
                  </div>

                  {/* Subscribe */}
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id={`${formId}-subscribe`} name="subscribe" checked={formData.subscribe} onChange={handleChange} className="mt-0.5 h-4 w-4 rounded accent-[#bf2a2c]" />
                    <label htmlFor={`${formId}-subscribe`} className="text-sm text-text-secondary leading-snug">
                      Subscribe to receive updates, insights, and programme news from CIDE Group
                    </label>
                  </div>

                  {/* Privacy consent — required */}
                  <div className={`rounded-lg border p-4 ${fieldErrors.privacyConsent ? "border-red-300 bg-red-50" : "border-[#e2d9d9] bg-[#f4efec]/60"}`}>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id={`${formId}-privacy`}
                        name="privacyConsent"
                        required
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.privacyConsent}
                        className="mt-0.5 h-4 w-4 rounded accent-[#bf2a2c] shrink-0"
                      />
                      <label htmlFor={`${formId}-privacy`} className="text-sm text-text-secondary leading-snug">
                        I have read and agree to the{" "}
                        <Link href="/privacy" target="_blank" className="text-[#bf2a2c] underline underline-offset-2 hover:text-[#9a1f21] font-medium">
                          Privacy Policy
                        </Link>
                        . I understand CIDE Group will process my data to respond to this enquiry.{" "}
                        <span className="text-[#bf2a2c]">*</span>
                      </label>
                    </div>
                    {fieldErrors.privacyConsent && (
                      <p role="alert" className="mt-2 text-xs text-red-600 flex items-center gap-1.5">
                        <ShieldCheck size={12} className="shrink-0" />
                        {fieldErrors.privacyConsent}
                      </p>
                    )}
                  </div>

                  {/* Data notice */}
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    <ShieldCheck size={11} className="inline mr-1 text-text-muted" aria-hidden="true" />
                    CIDE Group processes your data to respond to your enquiry, in line with our{" "}
                    <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                    . We do not share your data with third parties for marketing purposes.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] disabled:opacity-60 disabled:cursor-not-allowed transition-colors font-bold px-6 py-4 rounded-lg text-sm uppercase tracking-wide"
                  >
                    {isLoading ? "Sending…" : "Send Message"}
                    {!isLoading && <ArrowRight size={15} />}
                  </button>

                  <p className="text-center text-[11px] text-text-muted">
                    We respond within {siteConfig.contactResponseSla}. For urgent matters, call us directly.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
