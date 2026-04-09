"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/content/services"
import { ServiceIcon } from "./service-icon"

type ServicesMegaMenuProps = {
  open: boolean
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  menuId: string
}

export function ServicesMegaMenu({ open, onClose, onMouseEnter, onMouseLeave, menuId }: ServicesMegaMenuProps) {
  return (
    <div
      id={menuId}
      role="menu"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-0 right-0 top-full z-40 transition-all duration-200 ${
        open ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-1 pointer-events-none"
      }`}
    >
        <div className="w-full bg-background border-b border-border shadow-lg">
          <div className="section-shell py-12">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">What We Do</h2>
              <p className="text-text-secondary">
                Comprehensive solutions addressing Africa&apos;s most pressing development challenges
              </p>
            </div>

            <div className="grid grid-cols-4 gap-8 mb-10">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="group/item flex flex-col p-5 rounded-lg border border-transparent hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-surface group-hover/item:bg-primary group-hover/item:text-white transition-all duration-200 mb-4 text-primary shrink-0">
                    <ServiceIcon icon={service.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="font-semibold text-base text-foreground group-hover/item:text-primary transition-colors mb-2 leading-snug">
                    {service.shortTitle.split(" &")[0]}
                    {service.shortTitle.includes("&") && (
                      <>
                        <br />
                        <span className="text-sm font-medium">& {service.shortTitle.split("& ")[1]}</span>
                      </>
                    )}
                  </h3>

                  <p className="text-xs text-text-secondary line-clamp-2 mb-3 grow">
                    Learn how we deploy this expertise across the continent
                  </p>

                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-0 group-hover/item:translate-x-1">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="border-t border-border pt-8 flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Need specialized support?</p>
                <p className="text-xs text-text-secondary">
                  Our integrated approach combines multiple services for maximum impact
                </p>
              </div>
              <Link
                href="/services"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium text-sm"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
