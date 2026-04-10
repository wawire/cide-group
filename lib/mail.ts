import nodemailer from "nodemailer"
import { siteConfig } from "@/content/site"

type ContactSubmission = {
  name: string
  organization: string
  email: string
  phone?: string
  country: string
  message: string
  subscribe?: boolean
}

type MailRuntimeConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  password: string
  fromName: string
  fromEmail: string
  contactReplyTo: string
  contactRecipients: string[]
  autoResponseEnabled: boolean
}

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim()
  return value ? value : null
}

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (!value) return fallback
  return ["1", "true", "yes", "on"].includes(value.trim().toLowerCase())
}

function getContactRecipients() {
  const configured = process.env.CONTACT_NOTIFICATION_TO
    ?.split(",")
    .map((value) => value.trim())
    .filter(Boolean)

  const defaults = [siteConfig.email, siteConfig.partnershipsEmail]

  return Array.from(new Set([...(configured || []), ...defaults]))
}

function getPublicContactEmails() {
  return Array.from(new Set([siteConfig.partnershipsEmail, siteConfig.email]))
}

function getMailRuntimeConfig(): MailRuntimeConfig | null {
  const host = getRequiredEnv("SMTP_HOST")
  const user = getRequiredEnv("SMTP_USER")
  const password = getRequiredEnv("SMTP_PASSWORD")
  const rawPort = getRequiredEnv("SMTP_PORT")

  if (!host || !user || !password || !rawPort) {
    return null
  }

  const port = Number(rawPort)
  if (!Number.isInteger(port) || port <= 0) {
    return null
  }

  return {
    host,
    port,
    secure: parseBoolean(process.env.SMTP_SECURE, port === 465),
    user,
    password,
    fromName: process.env.SMTP_FROM_NAME?.trim() || siteConfig.name,
    fromEmail: process.env.SMTP_FROM_EMAIL?.trim() || user,
    contactReplyTo: process.env.CONTACT_REPLY_TO_EMAIL?.trim() || siteConfig.email,
    contactRecipients: getContactRecipients(),
    autoResponseEnabled: parseBoolean(process.env.CONTACT_AUTO_RESPONSE_ENABLED, true),
  }
}

function getTransporter(config: MailRuntimeConfig) {
  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.password,
      },
    })
  }

  return cachedTransporter
}

export async function sendContactEmails({
  name,
  organization,
  email,
  phone,
  country,
  message,
  subscribe,
}: ContactSubmission) {
  const config = getMailRuntimeConfig()
  if (!config) {
    throw new Error("Email service not configured")
  }

  const transporter = getTransporter(config)

  const safeName = escapeHtml(name)
  const safeOrganization = escapeHtml(organization)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone?.trim() || "Not provided")
  const safeCountry = escapeHtml(country)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")
  const publicContactEmails = getPublicContactEmails()
  const urgentContactText = publicContactEmails.join(" or ")
  const urgentContactHtml = publicContactEmails
    .map((address) => {
      const safeAddress = escapeHtml(address)
      return `<a href="mailto:${safeAddress}">${safeAddress}</a>`
    })
    .join(" or ")

  const notificationSubject = `New Website Enquiry from ${name} - ${organization}`
  const notificationText = [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Organization: ${organization}`,
    `Email: ${email}`,
    `Phone: ${phone?.trim() || "Not provided"}`,
    `Country: ${country}`,
    "",
    "Message:",
    message,
    "",
    subscribe ? "This contact opted in to updates." : "This contact did not opt in to updates.",
  ].join("\n")

  const notificationHtml = `
    <h2>New Website Enquiry</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Organization:</strong> ${safeOrganization}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone}</p>
    <p><strong>Country:</strong> ${safeCountry}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
    ${subscribe ? "<p><em>This contact opted in to updates.</em></p>" : ""}
  `

  await transporter.sendMail({
    from: `${config.fromName} <${config.fromEmail}>`,
    to: config.contactRecipients,
    replyTo: email,
    subject: notificationSubject,
    text: notificationText,
    html: notificationHtml,
  })

  if (config.autoResponseEnabled) {
    try {
      const acknowledgementSubject = "Thank you for contacting CIDE Group"
      const acknowledgementText = [
        `Hello ${name},`,
        "",
        "Thank you for contacting CIDE Group.",
        "This is to confirm that we have received your message.",
        "A member of our team will review it and respond as soon as possible.",
        "",
        `If your enquiry is urgent, please reply to this email or contact us at ${urgentContactText}.`,
        "",
        "Kind regards,",
        "CIDE Group",
      ].join("\n")

      const acknowledgementHtml = `
        <p>Hello ${safeName},</p>
        <p>Thank you for contacting CIDE Group.</p>
        <p>This is to confirm that we have received your message.</p>
        <p>A member of our team will review it and respond as soon as possible.</p>
        <p>
          If your enquiry is urgent, please reply to this email or contact us at
          ${urgentContactHtml}.
        </p>
        <p>Kind regards,<br>CIDE Group</p>
      `

      await transporter.sendMail({
        from: `${config.fromName} <${config.fromEmail}>`,
        to: email,
        replyTo: config.contactReplyTo,
        subject: acknowledgementSubject,
        text: acknowledgementText,
        html: acknowledgementHtml,
      })
    } catch (error) {
      console.error("Contact acknowledgement delivery failed", error)
    }
  }
}
