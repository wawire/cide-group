"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Globe2, MapPin } from "lucide-react"
import type { GeoJSON, Map as LeafletMap, PathOptions } from "leaflet"
import { experienceLocations, type ExperienceLocation } from "@/content/geographic-experience"
import { loadWorldMap } from "@/lib/world-map-data"
import "leaflet/dist/leaflet.css"

const locationsByCode = new Map(experienceLocations.map((location) => [location.code, location]))
const africaBounds: [[number, number], [number, number]] = [[-36, -20], [40, 55]]
const worldBounds: [[number, number], [number, number]] = [[-55, -170], [75, 170]]

function countryStyle(code: string, selected: string | undefined): PathOptions {
  const highlighted = locationsByCode.has(code)
  return {
    color: highlighted ? "#efc6a1" : "#91aba0",
    weight: highlighted ? 1.5 : 0.7,
    fillColor: code === selected ? "#c9a84c" : highlighted ? "#bf2a2c" : "#f8f6ee",
    fillOpacity: 1,
  }
}

export default function GeographicExperienceMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const layersRef = useRef(new Map<string, GeoJSON>())
  const selectionRef = useRef<ExperienceLocation | null>(null)
  const [selected, setSelected] = useState<ExperienceLocation | null>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [attempt, setAttempt] = useState(0)

  const selectLocation = useCallback((location: ExperienceLocation) => {
    selectionRef.current = location
    setSelected(location)
    layersRef.current.forEach((layer, code) => layer.setStyle(countryStyle(code, location.code)))
    const map = mapRef.current
    if (!map) return
    const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (location.kind === "region") {
      map.fitBounds([[0, 45], [65, 150]], { padding: [24, 24], animate })
    } else if (location.code === "us") {
      map.fitBounds([[24, -125], [50, -66]], { padding: [24, 24], animate })
    } else {
      const layer = layersRef.current.get(location.code)
      if (layer) map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 6, animate })
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const mapContainer = container
    const controller = new AbortController()
    const layers = new Map<string, GeoJSON>()
    let map: LeafletMap | undefined
    let resizeObserver: ResizeObserver | undefined

    async function initialize() {
      try {
        const [L, data] = await Promise.all([import("leaflet"), loadWorldMap(controller.signal)])
        if (controller.signal.aborted) return
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        map = L.map(mapContainer, {
          minZoom: 1,
          maxZoom: 7,
          scrollWheelZoom: false,
          zoomSnap: 0.25,
          maxBounds: [[-85, -180], [85, 180]],
          maxBoundsViscosity: 1,
          zoomAnimation: !reducedMotion,
          fadeAnimation: !reducedMotion,
          markerZoomAnimation: !reducedMotion,
          inertia: !reducedMotion,
        })
        mapRef.current = map
        layersRef.current = layers
        map.fitBounds(africaBounds, { padding: [18, 18], animate: false })
        map.attributionControl.addAttribution('Boundaries: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener noreferrer">Natural Earth</a>')

        for (const feature of data.features) {
          const code = feature.properties.code
          const location = locationsByCode.get(code)
          const layer = L.geoJSON(feature, {
            style: countryStyle(code, selectionRef.current?.code),
            interactive: Boolean(location),
          }).addTo(map)
          layers.set(code, layer)
          if (location) {
            const tooltip = document.createElement("span")
            tooltip.className = "experience-map-tooltip"
            const flag = document.createElement("img")
            flag.src = `/flags/${code}.svg`
            flag.alt = ""
            flag.width = 24
            flag.height = 18
            tooltip.append(flag, document.createTextNode(location.name))
            layer.bindTooltip(tooltip, { sticky: true })
            layer.on({
              click: () => selectLocation(location),
              mouseover: () => layer.setStyle({ weight: 2.5, fillOpacity: 0.8 }),
              mouseout: () => layer.setStyle(countryStyle(code, selectionRef.current?.code)),
            })
          }
        }
        resizeObserver = new ResizeObserver(() => map?.invalidateSize())
        resizeObserver.observe(mapContainer)
        if (selectionRef.current) selectLocation(selectionRef.current)
        setStatus("ready")
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Unable to initialize the geographic experience map", error)
          setStatus("error")
        }
      }
    }

    void initialize()
    return () => {
      controller.abort()
      resizeObserver?.disconnect()
      map?.remove()
      if (mapRef.current === map) {
        mapRef.current = null
        layers.clear()
      }
    }
  }, [attempt, selectLocation])

  const showOverview = (view: "africa" | "world") => {
    selectionRef.current = null
    setSelected(null)
    layersRef.current.forEach((layer, code) => layer.setStyle(countryStyle(code, undefined)))
    mapRef.current?.fitBounds(view === "africa" ? africaBounds : worldBounds, {
      padding: [18, 18],
      animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    })
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-end gap-4">
        <div className="flex gap-2">
          <button type="button" onClick={() => showOverview("africa")} disabled={status !== "ready"} className="rounded-full border border-border px-4 py-2 text-xs font-semibold hover:bg-muted disabled:opacity-50">Africa view</button>
          <button type="button" onClick={() => showOverview("world")} disabled={status !== "ready"} className="rounded-full border border-border px-4 py-2 text-xs font-semibold hover:bg-muted disabled:opacity-50">World view</button>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
        <div className="relative isolate overflow-hidden rounded-xl border border-border">
          <div ref={containerRef} role="region" aria-label="Interactive map of team assignment experience" className="experience-map h-96 w-full md:h-[480px]" />
          {status !== "ready" && (
            <div className="absolute inset-0 z-[1001] flex flex-col items-center justify-center gap-4 bg-accent-green px-6 text-center text-white" role="status">
              <span>{status === "loading" ? "Loading the map…" : "The map could not load. You can still explore the locations below."}</span>
              {status === "error" && (
                <button type="button" onClick={() => { setStatus("loading"); setAttempt((value) => value + 1) }} className="rounded-full border border-white/50 px-5 py-2 text-sm">Retry map</button>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col rounded-xl border border-border bg-surface-secondary p-6" aria-live="polite" aria-atomic="true">
          <p className="section-kicker mb-6">Team Experience</p>
          {selected ? (
            <>
              {selected.kind === "country" ? <Image src={`/flags/${selected.code}.svg`} alt="" width={64} height={48} className="mb-5 rounded-sm" /> : <Globe2 size={40} className="mb-5 text-primary" aria-hidden="true" />}
              <h3 className="font-serif text-2xl font-semibold text-foreground">{selected.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{selected.region}{selected.kind === "region" ? " · Regional experience" : " · Country experience"}</p>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                Our multidisciplinary team has implemented assignments {selected.kind === "region" ? "across this region" : "in this country"}.
              </p>
              {selected.kind === "region" && <p className="mt-3 text-xs leading-relaxed text-text-muted">Asia is shown as a region; individual countries have not been specified.</p>}
            </>
          ) : (
            <>
              <MapPin size={36} className="mb-5 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">Africa and beyond</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">Explore the countries and regions where our team brings assignment experience.</p>
            </>
          )}
          <p className="mt-auto pt-8 text-xs leading-relaxed text-text-muted">Highlighted countries represent team assignment experience.</p>
        </div>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {experienceLocations.map((location) => (
          <li key={location.code}>
            <button type="button" onClick={() => selectLocation(location)} aria-pressed={selected?.code === location.code} aria-label={`Explore ${location.name}`} className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left text-xs font-semibold transition-colors ${selected?.code === location.code ? "border-primary bg-primary/5 text-primary" : "border-border bg-surface text-foreground hover:border-primary/50"}`}>
              {location.kind === "country" ? <Image src={`/flags/${location.code}.svg`} alt="" width={28} height={21} className="shrink-0 rounded-sm" /> : <Globe2 size={28} className="shrink-0 text-primary" aria-hidden="true" />}
              <span>{location.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
