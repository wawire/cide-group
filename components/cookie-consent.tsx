"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/lib/use-reduced-motion"

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
  const reducedMotion = useReducedMotion()

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
          initial={reducedMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reducedMotion ? undefined : { y: 20, opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] sm:w-[420px]"
          role="region"
          aria-label="Cookie preferences"
        >
          <div className="rounded-xl border border-border bg-surface shadow-lg overflow-hidden">
            <div className="h-0.5 bg-linear-to-r from-primary via-accent-gold to-transparent" />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <ShieldCheck size={15} className="text-primary" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Cookie preferences</p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={reject}
                  aria-label="Decline and close"
                >
                  <X size={14} />
                </Button>
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
                <Button
                  type="button"
                  onClick={accept}
                  className="flex-1 whitespace-normal text-xs"
                >
                  Accept Analytics
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={reject}
                  className="flex-1 whitespace-normal text-xs"
                >
                  Essential Only
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
