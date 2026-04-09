# Website Redesign Standards

Date: 2026-03-03

## 1. Accessibility (WCAG 2.2 AA)
- Provide a keyboard-accessible skip link (`Skip to main content`).
- Ensure visible focus states on all interactive controls.
- Use explicit `label` to `input` bindings with `id`/`htmlFor`.
- Use semantic landmarks: `nav`, `main`, `footer`.

## 2. Design System
- Centralize colors, borders, radii, and semantic tokens in `app/globals.css`.
- Use consistent section shell and heading utilities:
  - `.section-shell`
  - `.section-heading`
  - `.section-kicker`
  - `.surface-panel`
- Use expressive but readable typography with loaded fonts:
  - Sans: `Manrope`
  - Serif display: `Source Serif 4`

## 3. Performance
- Use optimized `next/image` for hero and portfolio imagery.
- Keep animation lightweight and purpose-driven.
- Keep route-level pages statically generated where possible.

## 4. SEO and Metadata
- Keep page metadata titles and descriptions unique by route.
- Preserve canonical site URL and robots directives.
- Ensure no dead-end internal links.

## 5. Conversion and IA
- Use one primary CTA per section and per page.
- Keep clear top navigation to services, projects, and contact pathways.
- Ensure supporting pages (projects details, service details) are complete and reachable.

## 6. Quality Gate Before Release
- `npm run lint` passes.
- `npm run build` passes.
- Manual check:
  - Keyboard navigation across header, filters, and forms.
  - Mobile layout for hero, cards, and contact form.
  - All key links resolve to valid pages.
