"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, ShieldCheck } from "lucide-react"

const STORAGE_KEY = "cide_cookie_consent"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function updateConsent(granted: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
    })
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "accepted") {
      updateConsent(true)
    } else if (!stored) {
      // No preference stored — show banner after a short delay
      const t = setTimeout(() => setVisible(true), 1400)
      return () => clearTimeout(t)
    }
    // "rejected" → consent stays denied by default
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted")
    updateConsent(true)
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected")
    updateConsent(false)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] sm:w-[420px]"
          role="dialog"
          aria-label="Cookie preferences"
          aria-modal="true"
        >
          <div className="rounded-xl border border-[#e2d9d9] bg-white shadow-2xl shadow-black/12 overflow-hidden">
            <div className="h-0.5 bg-linear-to-r from-[#bf2a2c] via-[#c9a84c] to-transparent" />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#bf2a2c]/10">
                    <ShieldCheck size={15} className="text-[#bf2a2c]" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Cookie preferences</p>
                </div>
                <button
                  onClick={reject}
                  className="shrink-0 rounded p-1 text-text-muted hover:text-foreground hover:bg-[#f4efec] transition-colors"
                  aria-label="Decline and close"
                >
                  <X size={14} />
                </button>
              </div>

              <p className="text-xs leading-relaxed text-text-secondary mb-1">
                We use analytics cookies (Google Analytics) to understand how visitors navigate our site and improve our
                services. Essential cookies are always active and cannot be declined.
              </p>
              <p className="text-xs text-text-muted mb-4">
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  Read our Privacy Policy
                </Link>
              </p>

              <div className="flex gap-2.5">
                <button
                  onClick={accept}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#bf2a2c] text-white hover:bg-[#9a1f21] transition-colors font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wide"
                >
                  Accept Analytics
                </button>
                <button
                  onClick={reject}
                  className="flex-1 inline-flex items-center justify-center border border-[#e2d9d9] text-text-secondary hover:bg-[#f4efec] hover:border-[#d1c5c5] transition-colors font-semibold px-4 py-2.5 rounded-lg text-xs"
                >
                  Essential Only
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
