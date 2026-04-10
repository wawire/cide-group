"use client"

import Link from "next/link"
import { ArrowRight, Users, Building2, Globe, Target } from "lucide-react"
import { cn } from "@/lib/utils"

type AboutMenuProps = {
  open: boolean
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  menuId: string
  isActive: (href: string) => boolean
}

const aboutLinks = [
  {
    href: "/about",
    label: "Company Profile",
    description: "Mission, vision, values, and our 360-degree operating approach.",
    icon: Building2,
  },
  {
    href: "/about/team",
    label: "Our Team",
    description: "Leadership, technical advisory, and communications specialists.",
    icon: Users,
  },
  {
    href: "/focus-areas",
    label: "Focus Areas",
    description: "Thematic areas where we deploy deep expertise across Africa.",
    icon: Target,
  },
  {
    href: "/partners",
    label: "Partnership Approach",
    description: "How we structure collaboration across programmes, sectors, and institutions.",
    icon: Globe,
  },
]

export function AboutMenu({ open, onClose, onMouseEnter, onMouseLeave, menuId, isActive }: AboutMenuProps) {
  return (
    <div
      id={menuId}
      role="menu"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 right-0 top-full z-40 transition-all duration-200 ${
        open
          ? "opacity-100 visible translate-y-0 pointer-events-auto"
          : "opacity-0 invisible -translate-y-1 pointer-events-none"
      }`}
    >
        <div className="w-full bg-background border-b border-border shadow-lg">
          <div className="section-shell py-12">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">About CIDE Group</h2>
              <p className="text-text-secondary">
                Company profile, leadership team, partnership approach, and thematic focus areas.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-10">
              {aboutLinks.map((link) => {
                const Icon = link.icon
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={onClose}
                    className={cn(
                      "group/item flex flex-col p-5 rounded-lg border transition-all duration-200",
                      active
                        ? "border-primary bg-primary/5"
                        : "border-transparent hover:border-primary hover:bg-primary/5",
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center w-14 h-14 rounded-lg transition-all duration-200 mb-4",
                        active
                          ? "bg-primary text-white"
                          : "bg-surface text-primary group-hover/item:bg-primary group-hover/item:text-white",
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3
                      className={cn(
                        "font-semibold text-base mb-2 leading-snug transition-colors",
                        active ? "text-primary" : "text-foreground group-hover/item:text-primary",
                      )}
                    >
                      {link.label}
                    </h3>

                    <p className="text-xs text-text-secondary line-clamp-2 mb-3 grow">
                      {link.description}
                    </p>

                    <div
                      className={cn(
                        "flex items-center text-primary text-sm font-medium transition-all",
                        active
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 group-hover/item:opacity-100 translate-x-0 group-hover/item:translate-x-1",
                      )}
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="border-t border-border pt-8 flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Ready to work together?</p>
                <p className="text-xs text-text-secondary">
                  Reach out to discuss partnerships, advisory support, or programme collaboration.
                </p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm shrink-0"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
