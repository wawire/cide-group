# CIDE Group prompts

## Global design system

Create or confirm the CIDE Group global design system before page-by-page work.

CIDE Group is a pan-African development advisory, research and programme implementation firm. Build on the existing brand and production UI, with clear content hierarchy, readable typography, generous white space and simple navigation.

### Repository context

- Confirm the repository root, repository instructions and Git status before editing. Work in the current checkout and preserve unrelated local changes.
- Read `docs/redesign-standards.md`, relevant existing design guidance, `app/globals.css`, `app/layout.tsx`, `components.json`, `components/ui/` and representative pages before proposing changes.
- This project uses Next.js App Router, React, TypeScript, Tailwind CSS v4 and shadcn/Radix components. Implement global styling through CSS variables, Tailwind theme mappings and existing reusable components.
- Use `content/site.ts` for brand identity and logo references, and existing assets under `public/brand/` and the relevant imagery directories. Confirm asset suitability; do not invent brand approvals or replace logos.
- Prefer current source over stale documentation when describing implemented tokens. Resolve discrepancies explicitly.

### Preserve and consolidate

- Retain the existing CIDE red palette: `--primary`, `--primary-dark` and `--primary-light`, currently `#bf2a2c`, `#9a1f21` and `#d94547`. Reuse existing neutral surfaces and supporting green, brown and gold tokens where their semantic roles justify them. Check actual values in the target checkout.
- Retain Manrope and Source Serif 4 as configured through `next/font` in `app/layout.tsx`. Define when sans and serif styles apply rather than introducing another typeface.
- Reuse `.section-shell`, `.section-space`, `.callout-space`, `.page-title`, `.display-title`, `.section-heading`, `.section-kicker` and `.surface-panel` before introducing new layout or style abstractions.
- Reuse existing button, card, input, select and other UI primitives. Extend shared variants only where an existing variant cannot meet a demonstrated need.
- Treat existing tokens as a baseline to validate, not proof that every colour pairing or state is accessible. Correct shared defects at their source.

### Define or confirm globally

- Colours and semantic roles: page background, surfaces, primary action, secondary action, body text, muted text, borders, focus, links, destructive actions, success, warning and information. Keep brand accents distinct from status meanings.
- Typography: body, H1–H6, display headings, labels, captions and supporting text, with font family, size, weight, line height, letter spacing and readable line lengths. Preserve semantic heading order independently of visual size.
- Spacing: a coherent scale for inline gaps, component padding, card grids, sections and callouts, with responsive rules.
- Layout: shared container widths, gutters, reading widths and responsive breakpoints. Verify Tailwind v4 defaults and existing overrides before adding breakpoints.
- Buttons: primary, secondary, outline, ghost, link and destructive variants, sizes and icon usage; default, hover, focus-visible, active, disabled and loading states.
- Links: inline links, navigation links and links on dark surfaces, including visited states where appropriate and non-colour cues.
- Cards: content hierarchy, padding, borders, radius, shadow, image placement and interactive states. Avoid nested interactive controls and misleading clickable surfaces.
- Images: approved asset selection, aspect ratios, cropping, focal points, captions, alt text, logo clear space and appropriate light/dark logo variants. Use `next/image` where suitable and prevent layout shifts.
- Borders, radii and shadows: a small shared set tied to component roles, avoiding arbitrary per-page values.
- Forms: labels, helper text, required indicators, validation errors, disabled/read-only states and submission feedback, using the existing form primitives.
- Interaction and motion: visible keyboard focus, hover and active states, consistent durations and easing, and `prefers-reduced-motion` support for transitions, scrolling and animated content. Retain existing animation dependencies unless a change is required.
- Theme behaviour: verify how light and dark tokens are actually used. Validate supported themes without introducing a new theme switcher as part of this task.

### Requirements

- Target WCAG 2.2 AA: verify actual text/background pairs at 4.5:1 for normal text and 3:1 for large text, plus applicable 3:1 non-text contrast. Check interaction states, keyboard access, unobscured focus and target sizes. Never communicate meaning through colour alone.
- Use one coherent responsive type and spacing system. Prefer reusable semantic tokens and component variants over page-specific overrides, duplicated values or arbitrary styling.
- Use roughly 60% neutral surfaces, 30% secondary structural colour and 10% accent emphasis as a visual-weight heuristic. Brand, readability, contrast, focus visibility and status semantics take priority; do not recolour photos or charts to meet a ratio.
- Keep utility areas subordinate to navigation and page content. Give primary actions clear emphasis and secondary actions quieter styling.
- Keep animation restrained and purposeful. Respect reduced motion and provide controls for persistent moving content where required.
- Validate with real content on mobile and desktop, including long headings, dense cards, forms, empty/error states, keyboard navigation and zoom/reflow.
- Keep changes focused on shared design foundations and necessary representative usage. Preserve content, URLs, metadata, API contracts and unrelated work. Do not redesign every page, add dependencies or deploy as part of this task.

### Deliverables and validation

1. Briefly state the current system, gaps, proposed files and validation approach, then implement the smallest necessary shared changes. If the existing system meets the requirements, confirm it without unnecessary rewrites.
2. Document final tokens and reusable conventions in the existing `docs/redesign-standards.md`. Include token names, values, semantic roles, typography and spacing rules, container/breakpoint behaviour, component variants, imagery and motion guidance, accessibility constraints and short usage examples. Distinguish implemented rules from unresolved gaps; do not create a separate report.
3. Check representative pages and shared navigation, cards, buttons and forms at mobile and desktop widths. Run focused tests if relevant, then `npm run lint` and `npm run build` using the target checkout's package scripts. Report exact results and any checks that could not be run; do not claim accessibility conformance from static checks alone.
4. Summarize changes, validation and remaining risks in chat. Subsequent page prompts must reuse `docs/redesign-standards.md`, `app/globals.css` and shared component variants, extending the global system only for a demonstrated reusable need.
