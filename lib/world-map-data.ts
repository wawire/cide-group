import { z } from "zod"

const position = z.tuple([z.number().finite().min(-180).max(180), z.number().finite().min(-90).max(90)])
const polygon = z.array(z.array(position).min(4)).min(1)
const geometry = z.discriminatedUnion("type", [
  z.object({ type: z.literal("Polygon"), coordinates: polygon }),
  z.object({ type: z.literal("MultiPolygon"), coordinates: z.array(polygon).min(1) }),
])

const worldMapSchema = z.object({
  type: z.literal("FeatureCollection"),
  features: z.array(z.object({
    type: z.literal("Feature"),
    properties: z.object({ code: z.string(), name: z.string() }),
    geometry,
  })).min(1),
})

export async function loadWorldMap(signal: AbortSignal) {
  const response = await fetch("/maps/world-countries.geojson", { signal })
  if (!response.ok) throw new Error(`Map boundaries could not load: HTTP ${response.status}`)
  const payload: unknown = await response.json()
  return worldMapSchema.parse(payload)
}
