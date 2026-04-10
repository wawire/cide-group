"use client"

import dynamic from "next/dynamic"
import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/content/site"
import { cn } from "@/lib/utils"

const AboutMenu = dynamic(() => import("./about-menu").then((mod) => mod.AboutMenu), {
  loading: () => null,
})

const ServicesMegaMenu = dynamic(() => import("./mega-menu-services").then((mod) => mod.ServicesMegaMenu), {
  loading: () => null,
})

const ProjectsMegaMenu = dynamic(() => import("./mega-menu-projects").then((mod) => mod.ProjectsMegaMenu), {
  loading: () => null,
})

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
  // Timeout ref used to delay closing so mouse can travel from trigger Ã¢â€ â€™ panel
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

  const isWhatWeDoActive =
    pathname.startsWith("/services") || pathname.startsWith("/focus-areas")

  const isImpactActive = pathname.startsWith("/projects")

  // Open immediately; cancel any pending close
  const openMenu = useCallback((menu: DesktopMenu) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpenDesktopMenu(menu)
  }, [])

  // Schedule close Ã¢â‚¬â€ cancelled if mouse re-enters a menu area within 200 ms
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
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
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      // Close desktop mega menu on outside click
      if (openDesktopMenu && navRef.current && !navRef.current.contains(target)) {
        closeNow()
      }
      // Close mobile menu on outside click
      if (!isOpen) return
      if (mobileMenuRef.current?.contains(target)) return
      if (mobileToggleRef.current?.contains(target)) return
      setIsOpen(false)
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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

  // Shared trigger button class Ã¢â‚¬â€ animated underline indicator, no chevron
  const triggerClass = (active: boolean, menuOpen = false) =>
    cn(
      "relative px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer select-none",
      "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:rounded-full",
      "after:transition-transform after:duration-200 after:origin-left",
      active || menuOpen
        ? "text-primary after:bg-primary after:scale-x-100"
        : "text-foreground hover:text-primary after:bg-primary after:scale-x-0 hover:after:scale-x-100",
    )

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85 transition-shadow duration-200",
        isScrolled && "shadow-sm",
      )}
    >
      <div className="w-full overflow-visible">
        <div className="section-shell">
          <div className="flex justify-between items-center h-20 gap-6">

            {/* Logo */}
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
                className="h-10 md:h-11 w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-4">

              {/* Desktop nav Ã¢â‚¬â€ triggers only; panels rendered BELOW outside these wrappers */}
              <div className="hidden md:flex items-center">

                {/* About trigger */}
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "about"}
                  aria-controls="about-menu"
                  onMouseEnter={() => openMenu("about")}
                  onMouseLeave={scheduleClose}
                  onClick={() =>
                    setOpenDesktopMenu((c) => (c === "about" ? null : "about"))
                  }
                  className={triggerClass(isAboutActive, openDesktopMenu === "about")}
                >
                  About
                </button>

                {/* What We Do trigger */}
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "what-we-do"}
                  aria-controls="what-we-do-mega-menu"
                  onMouseEnter={() => openMenu("what-we-do")}
                  onMouseLeave={scheduleClose}
                  onClick={() =>
                    setOpenDesktopMenu((c) => (c === "what-we-do" ? null : "what-we-do"))
                  }
                  className={triggerClass(isWhatWeDoActive, openDesktopMenu === "what-we-do")}
                >
                  What We Do
                </button>

                {/* Impact trigger */}
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openDesktopMenu === "impact"}
                  aria-controls="impact-mega-menu"
                  onMouseEnter={() => openMenu("impact")}
                  onMouseLeave={scheduleClose}
                  onClick={() =>
                    setOpenDesktopMenu((c) => (c === "impact" ? null : "impact"))
                  }
                  className={triggerClass(isImpactActive, openDesktopMenu === "impact")}
                >
                  Impact
                </button>

                {/* Research Ã¢â‚¬â€ flat link */}
                <Link
                  href="/research"
                  aria-current={isActive("/research") ? "page" : undefined}
                  onMouseEnter={scheduleClose}
                  onClick={closeNow}
                  className={triggerClass(isActive("/research"))}
                >
                  Research
                </Link>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                onClick={closeNow}
                className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-sm shadow-primary/30 transition-all duration-200 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get Involved
              </Link>

              {/* Mobile toggle */}
              <button
                type="button"
                ref={mobileToggleRef}
                onClick={() => {
                  closeNow()
                  setIsOpen((c) => !c)
                }}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary transition-colors duration-200"
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

      {/*
        Mega menus rendered HERE at the nav level Ã¢â‚¬â€ NOT inside trigger wrapper divs.
        They share the same openMenu/scheduleClose handlers so hovering from
        a trigger button into the panel cancels the close timer.
      */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="md:hidden border-t border-border bg-background/98 backdrop-blur px-4 pt-3 pb-5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "flex items-center rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200",
                isActive(link.href)
                  ? "text-primary bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-surface",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border mt-2">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className="block w-full rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-primary-dark">
                Get Involved
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
