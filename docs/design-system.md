# CIDE Group Design System

These conventions describe the implemented global foundations and requirements for future page work. They do not certify whole-site accessibility or production readiness. Current source takes precedence when an implementation changes; update this document alongside shared changes.

## Sources and working scope

- [Global CSS](../app/globals.css) owns semantic colours, theme mappings and shared layout utilities.
- [Root layout](../app/layout.tsx) loads fonts, navigation, footer, skip link, page transitions and cookie preferences.
- [Site configuration](../content/site.ts) owns organisation identity, canonical URL, contact details and logo references. Other `content/` modules own projects, services, knowledge, research, team and partners.
- [Component configuration](../components.json) defines shadcn aliases and the Tailwind CSS entry point. Reuse `components/` and the actual primitives in `components/ui/` before adding patterns.
- [Design-system prompt](../prompts/global-design-system.md) and [global-components prompt](../prompts/global-components.md) guide subsequent implementation. They describe requested work, not proof that every pattern already exists.
- Use Next.js App Router, strict TypeScript and server components by default. Keep client boundaries limited to interaction. Preserve routes, content contracts and unrelated local changes.

## Colour roles

Current light-theme values in CSS:

| Role | Tokens | Values |
| --- | --- | --- |
| Primary action | `--primary`, `--primary-foreground` | `#bf2a2c`, `#ffffff` |
| Brand shades | `--primary-dark`, `--primary-light` | `#9a1f21`, `#d94547` |
| Page and text | `--background`, `--foreground` | `#fafaf9`, `#1a1010` |
| Panels | `--surface`, `--surface-secondary` | `#ffffff`, `#f0ebe8` |
| Supporting text | `--text-secondary`, `--text-muted` | `#3d2b2b`, `#7a5c5c` |
| Cards/popovers | `--card`, `--popover`; corresponding foregrounds | `#ffffff`; `#1a1010` |
| Secondary/muted | `--secondary`, `--muted` | `#f0ebe8` |
| Accent | `--accent`, `--accent-foreground` | `#bf2a2c`, `#ffffff` |
| Supporting brand colours | `--accent-green`, `--accent-brown`, `--accent-gold`, `--accent-warm` | `#2d6a4f`, `#7c4a1d`, `#c9a84c`, `#f5f0eb` |
| Dark hero | `--hero-background` | `#1a0808` |
| Borders/input/focus | `--border`, `--input`, `--ring` | `#e2d9d9`, `#ffffff`, `#9a1f21` |
| Destructive fill | `--destructive`, `--destructive-foreground` | `#b91c1c`, `#ffffff` |
| Status fills | `--success`, `--warning`, `--info`; each corresponding `-foreground` | `#166534`, `#854d0e`, `#1e40af`; white text |
| Inline links | `--link`, `--link-visited` | `#9a1f21`, `#7c4a1d` |
| Control boundary | `--control-border` | `#8c7373` |
| Status text | `--destructive-text`, `--success-text`, `--warning-text`, `--info-text` | `#b91c1c`, `#166534`, `#854d0e`, `#1e40af` |

Use mapped Tailwind utilities such as `bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground` and `border-border`. Surface, secondary surface, secondary/muted text, red shades, supporting brand accents, links, control boundaries, status fills and status text all have mappings. Examples: `bg-surface`, `text-text-secondary`, `text-text-muted`, `border-control-border`, `text-destructive-text`, `bg-success text-success-foreground`. Status fills use their paired white foreground; status-text tokens adapt to light/dark surfaces. Do not use a decorative border to identify a field boundary.

Dark overrides exist under `.dark`, including background `#140a0a`, foreground `#faf5f5`, surface `#1e1010`, secondary surface `#2a1515` and ring `#d94547`. The root layout does not mount the existing ThemeProvider. A dark-mode toggle and complete dark-theme support are not established features.

Use roughly 60% neutral surfaces, 30% secondary structural colour and 10% accent emphasis as a visual-weight heuristic. Contrast, brand requirements, focus and semantic status colours take priority. Keep primary actions prominent and utility areas subordinate. Do not assign green/gold a status meaning or recolour imagery solely to meet the ratio. Dedicated status roles are implemented; use text or an icon with an accessible label as well as colour.

## Typography

Manrope is mapped to `font-sans`; Source Serif 4 to `font-serif`, loaded with `next/font` in the root layout. Use sans for body and controls, and the established serif treatment for page heroes and callouts. Preserve semantic heading levels independently of visual size.

| Style | Current size | Line height / convention |
| --- | --- | --- |
| Body (`text-base`) | `1rem` | Body uses `leading-relaxed` |
| Labels/captions | `text-xs` `0.75rem`; `text-sm` `0.875rem` | Follow the component's existing hierarchy; a universal label/caption class is not defined |
| `text-lg` / `text-xl` | `1.0625rem` / `1.1875rem` | Global Tailwind overrides |
| `text-2xl` / `text-3xl` / `text-4xl` | `1.375rem` / `1.75rem` / `2.125rem` | Global Tailwind overrides |
| `text-5xl` / `text-6xl` / `text-7xl` | `2.625rem` / `3.25rem` / `4rem` | Global Tailwind overrides |
| `.page-title` | `clamp(2rem, 3.5vw, 3rem)` | `1.15` |
| `.display-title` | `clamp(2.5rem, 4.8vw, 4.5rem)` | `1.08` |
| `.section-heading` | `clamp(1.5rem, 2.5vw, 2.125rem)` | `1.2`, semibold |
| `.section-kicker` | `text-xs` | Bold, uppercase, `0.12em` tracking |

H1-H6 now receive tight tracking (-0.025em), balanced wrapping and explicit base styles. Body explicitly uses Manrope, regular weight, 1rem/1.625. See the implemented heading and utility table below. Component utilities override these base defaults; heading semantics stay independent of size. PageHero uses `max-w-3xl` for the title and `max-w-2xl` for supporting text; avoid stretching prose across the full section width.

## Spacing and layout

| Token / utility | Current behaviour |
| --- | --- |
| Tailwind spacing unit | `0.25rem`; prefer the existing spacing scale for component gaps/padding |
| `.section-shell` | `width: min(calc(100% - 2.5rem), 1600px)`, centred; outside CSS layers so it wins over layered width utilities |
| `.section-space` | Block padding `clamp(3rem, 5.5vw, 4.5rem)` |
| `.callout-space` | Block padding `clamp(3.5rem, 6vw, 5rem)` |
| PageHero padding | `.section-space` / `--section-space` |
| `.home-hero` | Minimum height `clamp(31rem, 65svh, 40rem)` with a `vh` fallback |
| Breakpoints | Tailwind defaults: `sm` 40rem, `md` 48rem, `lg` 64rem, `xl` 80rem, `2xl` 96rem; no project overrides currently |
| Radius | Base `--radius: 0.375rem`; `sm` subtracts 4px, `md` subtracts 2px, `lg` uses the base, `xl` adds 2px; `2xl`/`3xl`/`4xl` use 12/16/20px at the default root size |
| `.surface-panel` | Surface background, rounded-xl, border and shadow-sm |

Use existing spacing and container utilities before adding arbitrary per-page values. Keep shadows subordinate to hierarchy; do not create a separate elevation system without a demonstrated need.

## Reusable components and content

| Pattern | Existing implementation and convention |
| --- | --- |
| Page hero | [PageHero](../components/page-hero.tsx): required `title: ReactNode` and `breadcrumb: { ancestors: readonly { label: string; href: string }[]; current: string }`; optional `description`, `titleAside` and `children`. Renders the shared breadcrumb and one H1. Inner heroes have no eyebrow, service number or category badges. Keep location/byline metadata below the heading. Uses section-space and page-title tokens; actions use shared Button variants. |
| CTA block | [PageCallout](../components/page-callout.tsx): required `eyebrow`, `title`, `description`, `children`. Renders an H2 and accepts action markup. [CTASection](../components/cta-section.tsx) supplies homepage copy and contact actions. |
| Buttons | [Button](../components/ui/button.tsx): default, destructive, outline, secondary, ghost, link, inverse and inverse-outline; sizes default, sm, lg, icon, icon-sm, icon-lg. Use asChild with a link for navigation. Shared loading/disabled/focus states are implemented; see the state matrix below. |
| Cards | [Card primitives](../components/ui/card.tsx): compose header, title, description, content, action and footer. CardTitle renders a div by default; use asChild with an h2/h3 for heading semantics. Titles use leading-snug to support wrapping. Domain-specific cards still appear inline in pages and sections. |
| Images | [ContentImage](../components/content-image.tsx) requires `src`, `alt` and `sizes`, using a 3:2 frame with object-contain. [TeamPortrait](../components/team-portrait.tsx) handles team imagery; inspect its props before use. Preserve approved logos under `public/brand/`, image proportions and meaningful alt text. Use `next/image` where appropriate and provide dimensions/sizes. |
| Partners | [PartnerLogos](../components/partner-logos.tsx), [PartnersSection](../components/partners-section.tsx), data in [partners](../content/partners.ts). Reuse existing sizing and reduced-motion behaviour. |
| Impact | [ImpactMetricsSection](../components/impact-metrics-section.tsx); verify the source of every metric. Do not invent figures or treat a whole section as an already extracted generic stat card. |
| Forms | [ContactForm](../app/contact/ContactForm.tsx), [client validation](../lib/form-validation.ts), [server validation](../app/api/contact/route.ts). ContactForm uses Input, Select (native), Textarea, Checkbox, FormField and Button. FormField binds label, helper and error IDs through Radix Slot. Errors are summarised, linked and focused; values persist after server failure. |

Example composition using the existing API:

```tsx
<PageCallout eyebrow="Partnerships" title={title} description={description}>
  <Button asChild>
    <Link href="/contact">Discuss a partnership</Link>
  </Button>
</PageCallout>
```

Use typed props and content modules instead of embedding organisation facts in generic components. Prefer small composed patterns over a universal card with many boolean switches. Breadcrumbs, pagination, resource cards and empty states must be checked for actual reuse before extraction; the prompts are not an inventory of completed components.

## Accessibility and interaction requirements

- Target WCAG 2.2 AA, including actual text/background contrast of 4.5:1 for normal text, 3:1 for large text and applicable non-text contrast. Verify hover, focus, active, disabled and error states; colour alone must not convey meaning.
- Preserve the root skip link and its focusable main-content target. The root wrapper no longer declares role=main; route-level main elements supply the single main landmark.
- Keep keyboard focus visible and unobscured. Global CSS and Button provide a 2px outline with 2px offset. ID targets have 6rem scroll margin. PageHero/PageCallout and inverse-surface scope ring and inline links to white on dark surfaces. Component overrides still require rendered checks.
- Associate labels with inputs; connect helper/error text through IDs and `aria-describedby`. Keep entered values on errors and announce submission outcomes. ContactForm now links field errors, focuses an alert summary, exposes pending status and focuses success feedback. Error-summary links focus the corresponding control. Phone validation errors are displayed too.
- Inline links must be identifiable beyond colour. Use links for navigation, buttons for actions, meaningful accessible names and no nested interactive controls.
- Respect reduced motion for scrolling, transitions and persistent moving content. The shared media-query hook provides a conservative reduced-motion server snapshot and live preference changes. ScrollReveal, ScrollFadeSection, StaggerContainer, parallax, counters, hero, testimonials and cookie feedback honour it. CSS disables smooth scrolling and shortens transitions/animations. The hero uses manual slide controls. Testimonial autoplay and partner motion stop under reduced motion.
- Keep approved imagery consistent, preserve focal points and do not use decorative images as the sole source of information.

## Validation

For implementation work, run focused behavioural checks where applicable, then `npm run lint` and `npm run build` (includes `tsc --noEmit`). Use `npm.cmd` on Windows when PowerShell blocks the npm script shim. There is no test script or browser-test suite configured in package.json.

Check real content on mobile and desktop, 200% zoom and narrow reflow: long headings, cards without images, forms with errors, menus, hero controls, logo rows and page transitions. Verify keyboard behaviour and supported theme states. Static checks alone do not establish accessibility compliance.

## Confirmed gaps and follow-up checks

| Area | Current evidence / consequence | Required follow-up |
| --- | --- | --- |
| Token mapping | Surface, text, supporting accents, statuses, links and control boundaries are mapped | Extend semantic roles only for a demonstrated reusable need |
| Semantic colours | Destructive pair corrected; status fills/text and link pairs defined | Check actual state/background combinations and overlays |
| Forms | Shared controls, described errors, focused summary, loading and outcome feedback implemented | Reuse these controls; live SMTP and production anti-abuse behaviour remain outside design-system validation |
| Landmarks | Root duplicate main role removed; skip target retained | Keep one main per route |
| Motion | Shared CSS and JavaScript motion respect the live preference | New motion must use the same preference hook and preserve content availability |
| Hero controls | Hero slides are manual; partner strip pauses on hover/focus and respects reduced motion | Keep manual controls available and exclude outgoing slides from accessibility exposure |
| Cookie preferences | Nonmodal named region replaces false modal semantics; shared buttons and reduced motion used | Verify stored preferences with actual analytics configuration before release |
| Themes | Dark variables and a ThemeProvider component exist, but the root does not mount the provider | Treat complete dark-mode support as unconfirmed; do not promise a working switcher |
| Turnstile | API requires a token when secret is set; browser sends none and CSP lacks challenge origins | Complete browser/CSP/server integration before enabling; current secret configuration breaks ordinary form submissions |
| Abuse controls | Contact limiter is an in-process Map, five requests per ten minutes per reported IP; first forwarded IP is trusted | Verify trusted proxy behaviour, restart/multi-process limitations and bounded resource use |
| SEO/content | Route metadata and sitemap exist; research sitemap entries include URL fragments | Verify canonical/indexing strategy, resource links, social cards and real imagery; do not infer correctness from file presence |
| Operations | Checked-in deployment paths/ports differ between workflows and ops helpers; production workflow performs broad process/config operations | Follow the deployment guide's drift and risk notes before any operational changes |

The table distinguishes implemented foundations from release checks and unrelated operational work. This system does not assert full-site accessibility or operational readiness.

Use [go-live checklist](go-live-checklist.md) for release checks and [deployment guidance](deploy-vultr.md) for operational risks. Browser accessibility, live headers, SMTP delivery and production state require verification in the appropriate environment.


## Implemented typography, layout and motion tokens

| Element / role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| H1 base | Manrope; PageHero opts into Source Serif 4 | --page-title-size: clamp(2rem, 3.5vw, 3rem) | 600 | 1.15 | -0.025em |
| H2 base | Manrope; callouts opt into serif | clamp(1.5rem, 2.5vw, 2.125rem) | 600 | 1.2 | -0.025em |
| H3 base | Manrope | --heading-3-size: clamp(1.1875rem, 1.8vw, 1.375rem) | 600 | 1.35 | -0.025em |
| H4 base | Manrope | --heading-4-size: 1.1875rem | 600 | 1.4 | -0.025em |
| H5 / H6 base | Manrope | 1rem / 0.875rem | 600 / 700 | 1.5 | -0.025em |
| Body | Manrope | 1rem | 400 | 1.625 | Normal |
| .field-label | Manrope | 0.875rem | 600 | 1.5 | Normal |
| .supporting-text | Manrope | 0.875rem | Inherits | 1.625 | Normal |
| .caption | Manrope | 0.75rem | Inherits | 1.5 | Normal |

The existing utility size overrides now have explicit default line heights: lg 1.625, xl 1.5, 2xl 1.35, 3xl 1.25, 4xl 1.2, 5xl 1.15, 6xl 1.1 and 7xl 1.08. Explicit leading utilities override them. Display/section/title classes retain their documented fluid sizes. Serif is an editorial emphasis, not the default for labels or body copy.

Layout tokens: --content-width is 100rem (1600px at the default root size); --reading-width is 65ch; --page-gutter is 1.25rem. section-shell uses these variables and reading-width caps prose. The spacing scale is 4px at the default root: use 2/3/4/6/8 for 8/12/16/24/32px gaps, card padding 6 and section/callout clamps for section rhythm. Start grids with one column, then add sm/md/lg columns when real content fits. No breakpoint was added.

Radius is 2px sm, 4px md, 6px lg, 8px xl, 12px 2xl, 16px 3xl and 20px 4xl at the default root size. Circular avatars, dots and pill shapes retain rounded-full. Use shadow-xs for controls and shadow-sm for cards/panels. Keep image wrappers at the card's outer radius and avoid a second decorative elevation system.

--motion-duration is 180ms; --motion-ease is cubic-bezier(0.22, 1, 0.36, 1). Tailwind transition utilities inherit these defaults; explicit duration utilities take precedence. Existing entrance timings remain component-owned. The media hook in lib/use-reduced-motion.ts uses a visible/static server fallback and subscribes to live preference changes. Keep the same DOM tree when preferences change so entered form values and focus survive.

## Component states and usage

| Button variant | Default role | Hover | Active / focus |
| --- | --- | --- | --- |
| default | Brand primary fill and white text | primary-dark | Shared active brightness and opaque focus outline |
| secondary | Secondary surface / foreground | Secondary at 80% | Shared states |
| outline | Background / foreground, control-border | Secondary surface / foreground | Shared states |
| ghost | Transparent / inherited text | Secondary surface / foreground | Shared states |
| link | Underlined link text | Thicker underline | Shared states |
| destructive | Destructive fill / paired foreground | Fill at 90% | Shared states |
| inverse | White fill / primary-dark text | White at 90% | Use in inverse-surface or PageCallout/PageHero for a white focus outline |
| inverse-outline | White border/text / transparent fill | White at 10% | Same inverse context |

Button sizes: default and icon are at least 44px; lg and icon-lg are at least 48px; sm and icon-sm are 32px for compact contexts. Verify adjacent-target spacing and real text wrapping. Icon-only controls need an accessible name. Decorative icons should have aria-hidden=true. Disabled native buttons cannot activate and fade to 50%. loading sets native disabled, aria-disabled and aria-busy and adds a CSS spinner; callers supply the visible loading label. For asChild links, use disabled/loading sparingly: the shared handler prevents default navigation, but child event handlers must also honour the disabled state. Prefer native buttons for asynchronous actions.

```tsx
<Button type="submit" loading={pending}>
  {pending ? "Sending..." : "Send message"}
</Button>

<Card>
  <CardHeader>
    <CardTitle asChild><h3>{title}</h3></CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>{children}</CardContent>
</Card>

<FormField id="contact-email" label="Email" required error={errors.email}>
  <Input type="email" name="email" required autoComplete="email" />
</FormField>
```

FormField requires a stable unique id and exactly one control child. It provides the label, optional required marker, optional description, error ID, aria-invalid and aria-describedby. Pass required to the control too for native semantics. Input, native Select and Textarea share background, boundary, text, placeholder, hover, focus, disabled, read-only and invalid styles. Text inputs/selects are at least 44px high; 16px control text avoids small-text mobile focus zoom. Checkbox uses a 24px target plus its associated clickable label. Do not set readOnly on native select/checkbox; use disabled where appropriate and explain unavailable options.

ContactForm disables its fieldset while submitting, retains values after failure, exposes a focused linked error summary, announces pending status and focuses success feedback. It uses an optional phone field with displayed validation errors. No API or delivery contract changed.

Cards use existing Card primitives and surface-panel. Keep 1.5rem padding and gap-6 between sections; headers use gap-2. A card is not interactive by default. Use a descriptive link for navigation, group-focus-within styling when needed, and no nested buttons inside encompassing links. CardTitle asChild lets the page own heading level. ContentImage remains a 3:2 frame with object-contain: do not silently crop project evidence to fill a decorative frame.

Inline prose links use inline-link, including visited state and an underline in all states. Navigation links use aria-current and colour/background indicators without underlines; focus outlines remain visible. Disclosure buttons expose aria-expanded/aria-controls, use ordinary Tab navigation, and close on Escape with focus restored to the trigger. They do not claim ARIA application-menu semantics.

## Images and supported themes

Use content/site.ts for the selected colour logo. Existing white SVG/PNG variants can be used on dark surfaces after verifying legibility. Preserve aspect ratio, do not recolour or distort, and keep the current navigation logo sizing. Use at least one icon-stroke width of clear space as a layout convention, not a claimed brand requirement. Inspect each asset for editorial suitability; presence in public/brand does not establish new approval.

Keep photography in its original colours. ContentImage uses 3:2 object-contain; TeamPortrait retains its current portrait framing. Use object-cover only when the crop/focal point has been reviewed at mobile and desktop widths. Provide width/height or a stable aspect-ratio wrapper and appropriate sizes. Informative alt text describes purpose; decorative images use empty alt. Add captions when context, source or attribution is necessary. Editorial photographs are owned by content/imagery.ts and exported as optimised WebP files under public/images/editorial/. The catalogue records the exact pixel dimensions, descriptive alt text and illustrative status. New editorial images depict contemporary African-led work; they must not be presented as documentary proof of named clients, project results or staff identities. Keep existing staff portraits and brand/partner assets separate from generated editorial scenes.

The public site currently supports the light theme and intentional dark hero/callout/footer surfaces. No theme switcher or automatic system-dark selection was introduced. Dark token foundations are also defined for reusable components: control-border #a08080; destructive-text #fca5a5; success-text #86efac; warning-text #fde68a; info-text #93c5fd; link #ff9294; visited #e0c8c8. Dark accent fill is #bf2a2c with white foreground. Fill statuses retain their light values and paired white foregrounds; text status roles use the separate lighter values. Native controls follow scoped color-scheme. Do not enable a full-site dark theme until page-specific hardcoded surfaces/text and imagery have been validated.

inverse-surface scopes white focus/link tokens and inherited paragraph text for intentionally dark sections; PageHero and PageCallout also scope focus/link tokens. Scope inverse buttons inside one of these contexts so focus remains visible against the adjacent surface.

Opaque reference contrast calculations: white/primary 5.86:1, white/primary-dark 8.10:1, white/destructive 6.47:1, white/success 7.13:1, white/warning 6.85:1 and white/info 8.72:1. Muted light text on secondary surface is 5.05:1. Validate alpha hover states and imagery overlays in context; these figures do not prove whole-site conformance. Decorative gold and primary-light are not automatically approved for normal text on white.

## Moving content and validation boundaries

The hero has manual arrows, dots and swipe, with no autoplay, eyebrow, play/pause control or progress bar. The partner strip cycles all nine logos continuously, showing five slots on desktop and two on mobile. It pauses on hover/focus and becomes static under reduced motion. There is no visible play/pause control. Pointer clicks retain the track position; keyboard focus can scroll the row without a visible scrollbar. Testimonials default to manual changes, with an optional rotation control that stops under reduced motion, hover or focus. Testimonial copy is owned by content/testimonials.ts and was approved by the site owner in this session. PageTransition is a server-rendered pass-through, with no route exit animation or pathname-driven remount. Outgoing hero images are aria-hidden; manual slide selection identifies the current control. Pausing motion must not remove content or its navigation links.

Validate mobile, tablet and desktop, long text, 200% text scaling and narrow reflow. Check shared navigation, buttons, image/card layouts, empty/error/success/pending states, keyboard focus, live reduced-motion changes and stored cookie preferences. Browser checks for form response states may mock the API to avoid sending real enquiries; distinguish this from testing SMTP delivery. The cookie preference notice is a named nonmodal region and does not trap or steal focus.

Future page work must reuse this document, app/globals.css and shared variants. Remaining page-specific colour migration, screen-reader assessment, all-route audits, complete dark-theme enablement and live analytics/contact delivery are separate checks, not claims established by lint/build or the token system.

## Shared content patterns

| Component | Typed API and content ownership | Representative use |
| --- | --- | --- |
| `components/section-heading.tsx` | `title: ReactNode`; optional string `kicker`, `introduction`, `className`; `as: h2 / h3 / h4` defaults to h2. Uses section-heading/section-kicker utilities. | Research library |
| `components/project-card.tsx` | `project` picks the existing Project identity, title, description, location, tags and outcomes; optional image. Optional `outcomeLimit` restricts the displayed outcome list. | Homepage, filtered projects, focus-area projects and related project listings |
| `components/knowledge-card.tsx` | `article` picks KnowledgeArticle slug, title, category, excerpt, author and tags; optional image and ISO date. No invented publication metadata. | Featured and remaining knowledge articles |
| `components/resource-card.tsx` | `resource` picks ResearchResource identity, title, description, type, category and real destinations; optional image. Download URL takes priority over external reading URL; absent destinations render unavailable text. | Research results; currently no published downloadable resources |
| `components/breadcrumbs.tsx` | Required `ancestors: readonly {label, href}[]` and `current: string`. Ordered, labelled navigation wraps; links have no underline; only the final item has aria-current. | Every inner-page hero through PageHero |
| `components/empty-state.tsx` | Required title and description strings; optional children for links/buttons. Status text announces an empty collection or filtered result. Errors must use separate error feedback. | Project filters, knowledge category and research search |

```tsx
<SectionHeading kicker="Research library" title="Reports & resources" />
<ProjectCard project={project} outcomeLimit={3} />
<KnowledgeCard article={article} />
<ResourceCard resource={resource} />
<Breadcrumbs ancestors={[{ label: "Projects", href: "/projects" }]} current={project.title} />
<EmptyState title="No matching resources" description="Try another topic or search term." />
```

Cards render full titles and summaries without fixed text heights or essential-text truncation. Project/knowledge title links provide one named navigation stop per card; decorative repeated images have empty alt text. Optional images omit the frame when absent. Resource cards distinguish download and reading actions and do not claim format, size or language absent from the content model. Keep supplied destinations verified in content modules. No new programme or news model is introduced.

Existing PageCallout/CTASection, partner rows and FormField/control primitives remain the reusable patterns described above. ImpactMetricsSection retains its existing content and animation, with a complete static accessible value and final visual values before entering the viewport or under reduced motion. Unit/suffix and label remain supplied by content/site.ts. No impact claims were added.

Pagination is deferred: current collections have no page-size requirement. Add URL-based pagination only when a real collection needs it, preserving filter parameters and checking first, last and out-of-range pages. Loading/failure abstractions are deferred because these collections use local content; do not turn future fetch failures into empty states. Research download interaction awaits a verified published destination. Live form delivery remains outside this component extraction.

Validation for this extraction must distinguish lint/build and markup checks from browser assessment. Mobile/desktop framing, keyboard operation, zoom/reflow, live reduced motion and form response states require browser checks; static validation does not establish accessibility conformance.

Shared-pattern adoption also covers matching SectionHeading groups and PageCallout actions across routes. Knowledge categories use labelled neutral metadata rather than separate hardcoded category palettes. Presentation utility colours map to existing global semantic roles, including legal pages, team cards and filters. Decorative component gradients remain locally defined where they express an intentional image overlay or background. Research search controls retain shared control boundaries and focus styles without page-level overrides. Project filter targets are at least 44px high and the filter bar is sticky only at desktop widths, preserving space for results on narrow screens.
