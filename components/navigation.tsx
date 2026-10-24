"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AboutMenu } from "./about-menu"
import { ServicesMegaMenu } from "./mega-menu-services"
import { ProjectsMegaMenu } from "./mega-menu-projects"

const mobileNavLinks = [
  { href: "/about", label: "About" },
  { href: "/about/team", label: "Team" },
  { href: "/partners", label: "Partnerships" },
  { href: "/services", label: "What We Do" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/projects", label: "Impact" },
  { href: "/research", label: "Research" },
]

type DesktopMenu = "about" | "what-we-do" | "impact" | null

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDesktopMenu, setOpenDesktopMenu] = useState<DesktopMenu>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/about") return pathname === href
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const isAboutActive =
    pathname === "/about" ||
    pathname.startsWith("/about/") ||
    pathname === "/partners" ||
    pathname === "/focus-areas" ||
    pathname.startsWith("/focus-areas/")

  const isWhatWeDoActive = pathname.startsWith("/services") || pathname.startsWith("/focus-areas")
  const isImpactActive = pathname.startsWith("/projects")

  const openMenu = useCallback((menu: DesktopMenu) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }

    setOpenDesktopMenu(menu)
  }, [])

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }

    closeTimer.current = setTimeout(() => {
      const focusedElement = document.activeElement
      if (
        navRef.current?.querySelector('[aria-expanded="true"]') === focusedElement ||
        navRef.current?.querySelector('.navigation-panel')?.contains(focusedElement)
      ) return
      setOpenDesktopMenu(null)
    }, 200)
  }, [])

  const closeNow = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }

    setOpenDesktopMenu(null)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (openDesktopMenu && navRef.current && !navRef.current.contains(target)) {
        closeNow()
      }

      if (!isOpen) return
      if (mobileMenuRef.current?.contains(target)) return
      if (mobileToggleRef.current?.contains(target)) return

      setIsOpen(false)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const trigger = openDesktopMenu ? navRef.current?.querySelector<HTMLButtonElement>(`[aria-controls="${openDesktopMenu === "about" ? "about-menu" : openDesktopMenu === "what-we-do" ? "what-we-do-mega-menu" : "impact-mega-menu"}"]`) : null
        if (isOpen) mobileToggleRef.current?.focus()
        else trigger?.focus()
        setIsOpen(false)
        closeNow()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, openDesktopMenu, closeNow])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const triggerClass = (active: boolean, menuOpen = false) =>
    cn(
      "relative inline-flex items-center gap-1.5 px-3 py-2 min-h-11 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer select-none",
      active || menuOpen
        ? "text-primary"
        : "text-foreground hover:text-primary",
    )

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      onKeyDown={(event) => {
        if (event.key !== "Tab" || !openDesktopMenu) return
        const navigation = event.currentTarget
        const trigger = navigation.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
        const panelId = trigger?.getAttribute("aria-controls")
        const panel = panelId ? document.getElementById(panelId) : null
        if (!trigger || !panel) return
        const links = Array.from(panel.querySelectorAll<HTMLAnchorElement>('a[href]'))
        if (!event.shiftKey && event.target === trigger && links[0]) {
          event.preventDefault()
          links[0].focus()
        } else if (event.shiftKey && event.target === links[0]) {
          event.preventDefault()
          trigger.focus()
        } else if (!event.shiftKey && event.target === links.at(-1)) {
          const controls = Array.from(navigation.querySelectorAll<HTMLElement>('a[href], button'))
            .filter((control) => !panel.contains(control) && control.getClientRects().length > 0)
          const nextControl = controls[controls.indexOf(trigger) + 1]
          if (nextControl) {
            event.preventDefault()
            closeNow()
            nextControl.focus()
          }
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeNow()
          setIsOpen(false)
        }
      }}
      className={cn(
        "[&_a]:no-underline sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85 transition-shadow duration-200",
        isScrolled && "shadow-sm",
      )}
    >
      <div className="w-full overflow-visible">
        <div className="section-shell">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="/"
              onClick={closeNow}
              className="shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded"
            >
              <Image
                src={siteConfig.logo.primary}
                alt={siteConfig.logo.alt}
                width={168}
                height={48}
                className="h-9 w-auto md:h-10"
                priority
              />
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden items-center lg:flex">
                <button
                  type="button"
                  aria-expanded={openDesktopMenu === "about"}
                  aria-controls="about-menu"
                  onMouseLeave={scheduleClose}
                  onClick={() => setOpenDesktopMenu((current) => (current === "about" ? null : "about"))}
                  className={triggerClass(isAboutActive, openDesktopMenu === "about")}
                >
                  About
                </button>

                <button
                  type="button"
                  aria-expanded={openDesktopMenu === "what-we-do"}
                  aria-controls="what-we-do-mega-menu"
                  onMouseLeave={scheduleClose}
                  onClick={() =>
                    setOpenDesktopMenu((current) => (current === "what-we-do" ? null : "what-we-do"))
                  }
                  className={triggerClass(isWhatWeDoActive, openDesktopMenu === "what-we-do")}
                >
                  What We Do
                </button>

                <button
                  type="button"
                  aria-expanded={openDesktopMenu === "impact"}
                  aria-controls="impact-mega-menu"
                  onMouseLeave={scheduleClose}
                  onClick={() => setOpenDesktopMenu((current) => (current === "impact" ? null : "impact"))}
                  className={triggerClass(isImpactActive, openDesktopMenu === "impact")}
                >
                  Impact
                </button>

                <Link
                  href="/research"
                  aria-current={isActive("/research") ? "page" : undefined}
                  onMouseEnter={scheduleClose}
                  onFocus={closeNow}
                  onClick={closeNow}
                  className={triggerClass(isActive("/research"))}
                >
                  Research
                </Link>
              </div>

              <Button asChild className="hidden lg:inline-flex">
                <Link href="/contact" onClick={closeNow}>Get Involved</Link>
              </Button>

              <button
                type="button"
                ref={mobileToggleRef}
                onClick={() => {
                  closeNow()
                  setIsOpen((current) => !current)
                }}
                className="inline-flex items-center justify-center rounded-md p-2.5 min-h-11 min-w-11 text-foreground transition-colors duration-200 hover:text-primary lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {openDesktopMenu === "about" ? (
        <AboutMenu
          open
          onMouseEnter={() => openMenu("about")}
          onMouseLeave={scheduleClose}
          onClose={closeNow}
          menuId="about-menu"
          isActive={isActive}
        />
      ) : null}

      {openDesktopMenu === "what-we-do" ? (
        <ServicesMegaMenu
          open
          onMouseEnter={() => openMenu("what-we-do")}
          onMouseLeave={scheduleClose}
          onClose={closeNow}
          menuId="what-we-do-mega-menu"
        />
      ) : null}

      {openDesktopMenu === "impact" ? (
        <ProjectsMegaMenu
          open
          onMouseEnter={() => openMenu("impact")}
          onMouseLeave={scheduleClose}
          onClose={closeNow}
          menuId="impact-mega-menu"
        />
      ) : null}

      {isOpen ? (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="max-h-[calc(100svh_-_4rem)] overflow-y-auto space-y-1 border-t border-border bg-background/98 px-4 pt-3 pb-5 backdrop-blur animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden"
        >
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "flex items-center rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200",
                isActive(link.href)
                  ? "bg-primary/5 text-primary"
                  : "text-foreground hover:bg-surface hover:text-primary",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 border-t border-border pt-3">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className="block w-full rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-primary-dark">
                Get Involved
              </span>
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
