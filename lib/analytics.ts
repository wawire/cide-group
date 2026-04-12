/**
 * GA4 event tracking helpers.
 * All calls are no-ops when gtag is unavailable (consent denied, GA4 not configured).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function track(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params)
  }
}

// ── Contact form ────────────────────────────────────────────────────────────

export function trackContactFormSubmit(enquiryType?: string) {
  track("contact_form_submit", {
    form_id: "contact",
    ...(enquiryType && { enquiry_type: enquiryType }),
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

// ── CTA clicks ──────────────────────────────────────────────────────────────

export function trackCtaClick(ctaText: string, sectionName?: string) {
  track("cta_click", {
    cta_text: ctaText,
    section_name: sectionName ?? "",
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

// ── File downloads ──────────────────────────────────────────────────────────

export function trackFileDownload(fileName: string) {
  track("file_download", {
    file_name: fileName,
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

// ── Link clicks ─────────────────────────────────────────────────────────────

export function trackEmailClick() {
  track("email_click", {
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

export function trackPhoneClick() {
  track("phone_click", {
    page_location: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

// ── Project views ────────────────────────────────────────────────────────────

export function trackProjectView(projectName: string, sector?: string, country?: string) {
  track("project_view", {
    project_name: projectName,
    ...(sector && { sector }),
    ...(country && { country }),
  })
}

// ── Knowledge Hub ────────────────────────────────────────────────────────────

export function trackArticleReadComplete(articleTitle: string, category?: string) {
  track("article_read_complete", {
    article_title: articleTitle,
    ...(category && { category }),
  })
}
