# Global components

Build or confirm reusable CIDE Group site components before assembling pages. Base every component on the confirmed global design system in `docs/redesign-standards.md` and `app/globals.css`. Use `prompts/global-design-system.md` if the foundations still need confirmation.

## Repository context

- Confirm the repository root, repository instructions and Git status before editing. Work in the current checkout and preserve unrelated local changes.
- Inspect existing implementations and representative page usage before adding components. This project uses Next.js App Router, React, TypeScript, Tailwind CSS v4 and shadcn/Radix primitives configured through `components.json`.
- Reuse shared components under `components/` and primitives under `components/ui/`. Prefer server components; add client boundaries only where interaction requires them.
- Keep organisation facts, destinations, imagery and content in the existing `content/` modules or pass them through typed props. Use `content/site.ts` for shared identity and contact information. Do not hardcode organisation facts inside reusable presentation components.

## Create or confirm reusable patterns

- **Section headings:** optional kicker, heading and introduction, with semantic heading levels independent of visual size. Reuse `.section-heading` and `.section-kicker`.
- **CTA blocks:** heading, supporting copy, primary action and optional secondary action. Inspect `components/cta-section.tsx` and `components/page-callout.tsx` before creating another pattern.
- **Project/programme cards:** title, summary, relevant location or thematic metadata, optional image and a clear destination. Follow the existing project model and inspect `components/featured-projects-section.tsx` and project listings. Do not invent a separate programme content model unless current requirements need one.
- **Story/news cards:** title, summary, category, date when available, optional image and destination. Align with the actual knowledge and research content models; do not fabricate news or publication metadata.
- **Impact/stat cards:** value, label, unit and optional context or source. Inspect `components/impact-metrics-section.tsx`. Keep meaningful values readable without animation and avoid unsupported impact claims.
- **Partner/logo rows:** consistent logo sizing, aspect ratio, spacing, accessible names and optional destinations. Reuse `components/partner-logos.tsx`, `components/partners-section.tsx` and `content/partners.ts`. Preserve reduced-motion behaviour and keyboard access for moving rows.
- **Resource/download cards:** title, description, resource type and verified download destination. Show format, file size and language only when supplied by real metadata. Distinguish downloads from internal detail links and handle unavailable resources without dead links.
- **Breadcrumbs:** semantic labelled navigation, ordered hierarchy, real destinations and `aria-current="page"` on the current item. Keep labels content-driven and allow wrapping on narrow screens.
- **Pagination:** implement only where actual collections need it. Preserve filters and search parameters, identify the current page, give previous/next controls accessible names and handle first, last and out-of-range pages. Prefer navigable URLs for page-based listings.
- **Empty states:** distinguish no content, no search results and failed loading. Provide concise context and a useful next action when available; do not disguise errors as empty results.
- **Form fields and validation messages:** inspect `app/contact/ContactForm.tsx` and existing validation before extracting shared patterns. Support associated labels, helper text, required indicators, field errors, submission feedback and pending/disabled states. Preserve server-side validation and API contracts.

## Implementation requirements

- Use existing global colours, typography, spacing, containers, radii, shadows and interaction styles. Extend shared tokens or variants only for a demonstrated reusable need.
- Keep component APIs small and typed. Prefer composition and clear variants over many boolean props or one universal card with unrelated responsibilities. Avoid abstractions for hypothetical future pages.
- Support real content: long titles, multi-line descriptions, optional metadata, missing images and varying collection lengths. Do not rely on fixed text heights or truncate essential information without an accessible alternative.
- Make every pattern responsive and keyboard accessible. Use semantic links for navigation and buttons for actions, visible focus, sensible focus order and sufficiently sized targets. Avoid nested links/buttons and hover-only information.
- Associate errors and helper text with fields using appropriate IDs and `aria-describedby`; mark invalid fields and announce submission outcomes appropriately. Preserve entered values after validation errors.
- Use existing approved imagery and logo variants. Provide meaningful alt text, empty alt text for decorative images, consistent crops and dimensions that prevent layout shifts. Use `next/image` where suitable.
- Respect reduced motion. Keep animation restrained and avoid adding dependencies or replacing the existing animation stack.
- Preserve content, routes, metadata, API contracts and unrelated edits. Extract duplicated presentation only where needed, with minimal representative page integration to verify reuse. Do not redesign all pages or deploy as part of this task.

## Deliverables and validation

1. Briefly identify existing reusable patterns, concrete gaps, proposed files and validation approach, then proceed. Confirm adequate components without unnecessary rewrites.
2. Implement the smallest set of shared components and representative usages needed to establish the patterns above. Clearly identify patterns deferred because no current content or interaction requires them.
3. Update the existing `docs/redesign-standards.md` with component paths, purpose, typed prop/variant conventions, content sources and short usage examples. Keep this alongside the global design-system guidance; do not create a separate audit or report.
4. Verify representative components with real content at mobile and desktop widths, keyboard navigation, zoom/reflow and reduced motion. Check long and missing content, collection boundaries, form validation and loading/error/empty states where relevant.
5. Run focused tests for meaningful behaviour changes using the repository's existing tooling, then `npm run lint` and `npm run build` in the intended checkout. Report exact results and any checks that could not be run. Do not claim accessibility conformance from static checks alone.
6. Summarize changes, validation and remaining risks in chat. Subsequent page work must reuse these components and global tokens before introducing new patterns.
