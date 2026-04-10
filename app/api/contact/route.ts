import { NextResponse } from "next/server"
import { sendContactEmails } from "@/lib/mail"
import { z } from "zod"

export const runtime = "nodejs"

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const MIN_FORM_FILL_MS = 1500
const ipHits = new Map<string, number[]>()

const payloadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  organization: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().min(2).max(100),
  message: z.string().trim().min(20).max(3000),
  subscribe: z.boolean().optional().default(false),
  website: z.string().max(0).optional(), // honeypot field
  formStartedAt: z.number().optional(),
  turnstileToken: z.string().optional(),
})

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown"
  return request.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string, now: number) {
  const recent = (ipHits.get(ip) || []).filter((ts) => now - ts < WINDOW_MS)
  recent.push(now)
  ipHits.set(ip, recent)
  return recent.length > MAX_REQUESTS
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true

  const form = new URLSearchParams()
  form.set("secret", secret)
  form.set("response", token)
  form.set("remoteip", ip)

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
    cache: "no-store",
  })

  if (!res.ok) return false
  const data = (await res.json()) as { success?: boolean }
  return Boolean(data.success)
}

export async function POST(request: Request) {
  const now = Date.now()
  const ip = getClientIp(request)

  if (isRateLimited(ip, now)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
  }

  const parsed = payloadSchema.safeParse(await request.json())
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const { name, organization, email, phone, country, message, subscribe, website, formStartedAt, turnstileToken } = parsed.data

  if (website) {
    return NextResponse.json({ success: true })
  }

  if (typeof formStartedAt === "number" && now - formStartedAt < MIN_FORM_FILL_MS) {
    return NextResponse.json({ error: "Submission rejected. Please try again." }, { status: 400 })
  }

  if (process.env.TURNSTILE_SECRET_KEY) {
    const validTurnstile = turnstileToken ? await verifyTurnstile(turnstileToken, ip) : false
    if (!validTurnstile) {
      return NextResponse.json({ error: "Captcha validation failed." }, { status: 400 })
    }
  }

  try {
    await sendContactEmails({ name, organization, email, phone, country, message, subscribe })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact email delivery failed", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
