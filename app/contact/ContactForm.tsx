"use client"

import { editorialImages } from "@/content/imagery"

import type React from "react"
import { useEffect, useId, useRef, useState } from "react"
import { contactCountries, siteConfig } from "@/content/site"
import { validateContactForm, type FormErrors } from "@/lib/form-validation"
import { trackContactFormSubmit, trackEmailClick, trackPhoneClick } from "@/lib/analytics"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FormField } from "@/components/ui/form-field"

const enquiryTypes = [
  "Programme / Project Support",
  "Research & Evidence",
  "Monitoring, Evaluation & Learning",
  "Strategic Communications",
  "ICT & Digital Solutions",
  "Capacity Development",
  "Partnership / Consortium",
  "General Enquiry",
] as const

type FormDataState = {
  name: string
  organization: string
  email: string
  phone: string
  country: string
  enquiryType: string
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
  const [initialState] = useState<FormDataState>(
    () => ({
      name: "",
      organization: "",
      email: "",
      phone: "",
      country: "",
      enquiryType: "",
      message: "",
      subscribe: false,
      privacyConsent: false,
      website: "",
      formStartedAt: Date.now(),
    }),
  )

  const [formData, setFormData] = useState<FormDataState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({})
  const formId = useId()
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

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
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      requestAnimationFrame(() => errorSummaryRef.current?.focus())
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
      trackContactFormSubmit(formData.enquiryType)
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      requestAnimationFrame(() => errorSummaryRef.current?.focus())
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <section className="section-space bg-background">
      <div className="section-shell grid overflow-hidden rounded-xl border border-border lg:grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)]">

        {/* ── Left — dark info panel ──────────────────────────────────────── */}
        <div className="inverse-surface relative bg-hero-background flex flex-col overflow-hidden">

          {/* Background image overlay */}
          <div className="absolute inset-0">
            <Image
              src={editorialImages["contact-conversation"].src}
              alt={editorialImages["contact-conversation"].alt}
              fill
              className="object-cover object-center opacity-20"
              sizes="420px"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-b from-hero-background/60 via-hero-background/80 to-hero-background" />
          </div>

          <div className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-10">
            {/* Kicker */}
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-gold mb-8">
              Contact CIDE Group
            </p>

            {/* Heading */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-tight mb-5">
                Let's build something lasting together.
              </h2>
              <p className="text-white/80 leading-relaxed text-sm">
                Whether you are a government agency, donor, NGO, or private sector partner — we are ready to
                listen and co-design practical solutions for your context.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-12 space-y-6">
              {contactPoints.map(({ icon: Icon, label, value, href, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon size={14} className="text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/55 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-white/70 hover:text-white transition-colors break-all"
                        onClick={href.startsWith("mailto:") ? trackEmailClick : href.startsWith("tel:") ? trackPhoneClick : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/70 leading-relaxed">{value}</p>
                    )}
                    {sub && <p className="text-[11px] text-white/55 mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom rule */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-[11px] text-white/55 leading-relaxed">{siteConfig.legalName}</p>
              <p className="text-[11px] text-white/50" aria-label={`Registration number: ${siteConfig.companyNumber}`}>Reg. {siteConfig.companyNumber}</p>
            </div>
          </div>
        </div>

        {/* ── Right — form ──────────────────────────────────────────────── */}
        <div className="flex flex-col bg-card p-6 sm:p-8 lg:p-10">
          <div className="max-w-xl w-full mx-auto">

            {submitted ? (
              <div ref={successRef} tabIndex={-1} className="text-center py-16">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mb-6">
                  <CheckCircle size={32} className="text-success-text" aria-hidden="true" />
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
                  <p className="text-sm text-text-muted">Fields marked <span className="text-primary">*</span> are required.</p>
                </div>

                <div ref={errorSummaryRef} tabIndex={-1} hidden={!serverError && !Object.values(fieldErrors).some(Boolean)} className="mb-6 rounded-md border border-destructive-text p-4" role="alert">
                  <p className="font-semibold text-destructive-text">{serverError || "Please correct the following fields."}</p>
                  {Object.entries(fieldErrors).some(([, error]) => error) && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                      {Object.entries(fieldErrors).map(([name, error]) => error ? (
                        <li key={name}><a className="inline-link" href={`#${formId}-${name}`} onClick={(event) => {
                          event.preventDefault()
                          document.getElementById(`${formId}-${name}`)?.focus()
                        }}>{error}</a></li>
                      ) : null)}
                    </ul>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-busy={isLoading}>
                  <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <input type="hidden" name="formStartedAt" value={formData.formStartedAt} />
                  <fieldset disabled={isLoading} className="min-w-0 space-y-5">
                    <legend className="sr-only">Your enquiry</legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField id={`${formId}-name`} label="Name" required error={fieldErrors.name}>
                        <Input name="name" required autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Full name" />
                      </FormField>
                      <FormField id={`${formId}-organization`} label="Organisation" required error={fieldErrors.organization}>
                        <Input name="organization" required autoComplete="organization" value={formData.organization} onChange={handleChange} placeholder="Organisation name" />
                      </FormField>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField id={`${formId}-email`} label="Email" required error={fieldErrors.email}>
                        <Input type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} placeholder="your@org.com" />
                      </FormField>
                      <FormField id={`${formId}-phone`} label="Phone" error={fieldErrors.phone}>
                        <Input type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="+254 XXX XXX XXX" />
                      </FormField>
                    </div>
                    <FormField id={`${formId}-country`} label="Country" required error={fieldErrors.country}>
                      <Select name="country" required autoComplete="country-name" value={formData.country} onChange={handleChange}>
                        <option value="">Select your country</option>
                        {contactCountries.map((country) => <option key={country} value={country}>{country}</option>)}
                      </Select>
                    </FormField>
                    <FormField id={`${formId}-enquiryType`} label="Nature of Enquiry" required error={fieldErrors.enquiryType}>
                      <Select name="enquiryType" required value={formData.enquiryType} onChange={handleChange}>
                        <option value="">Select the nature of your enquiry</option>
                        {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                      </Select>
                    </FormField>
                    <FormField id={`${formId}-message`} label="How can we support you?" required description="Use 20 to 3,000 characters." error={fieldErrors.message}>
                      <Textarea name="message" required rows={5} maxLength={3000} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, challenge, or partnership opportunity" />
                    </FormField>
                    <div className="flex items-start gap-3">
                      <Checkbox id={`${formId}-subscribe`} name="subscribe" checked={formData.subscribe} onChange={handleChange} />
                      <label htmlFor={`${formId}-subscribe`} className="supporting-text">Subscribe to receive updates, insights, and programme news from CIDE Group</label>
                    </div>
                    <div className="rounded-md border border-control-border bg-muted p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox id={`${formId}-privacyConsent`} name="privacyConsent" required checked={formData.privacyConsent} onChange={handleChange} aria-invalid={!!fieldErrors.privacyConsent} aria-describedby={fieldErrors.privacyConsent ? `${formId}-privacyConsent-error` : undefined} />
                        <label htmlFor={`${formId}-privacyConsent`} className="supporting-text">
                          I have read and agree to the{" "}
                          <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="inline-link">Privacy Policy<span className="sr-only"> (opens in a new tab)</span></Link>
                          . I understand CIDE Group will process my data to respond to this enquiry. <span className="text-destructive-text" aria-hidden="true">*</span>
                        </label>
                      </div>
                      {fieldErrors.privacyConsent && <p id={`${formId}-privacyConsent-error`} className="mt-2 text-sm text-destructive-text">{fieldErrors.privacyConsent}</p>}
                    </div>
                  </fieldset>
                  <p className="caption">
                    <ShieldCheck size={14} className="mr-1 inline" aria-hidden="true" />
                    CIDE Group processes your data to respond to your enquiry, in line with our <Link href="/privacy" className="inline-link">Privacy Policy</Link>. We do not share your data with third parties for marketing purposes.
                  </p>
                  <Button type="submit" loading={isLoading} size="lg" className="w-full">
                    {isLoading ? "Sending…" : "Send Message"}
                    {!isLoading && <ArrowRight size={16} aria-hidden="true" />}
                  </Button>
                  <p className="caption text-center" role="status">{isLoading ? "Your message is being sent." : `We respond within ${siteConfig.contactResponseSla}. For urgent matters, call us directly.`}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
