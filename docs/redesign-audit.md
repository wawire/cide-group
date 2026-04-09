# Website Redesign Audit (Baseline)

Date: 2026-03-03  
Project: `C:\Projects\cide-group`

## Technical Baseline
- `npm run lint`: pass
- `npm run build`: pass

## Gaps Found Before Redesign
- Accessibility:
  - No global skip link to jump to main content.
  - Inconsistent visible focus states across navigation and forms.
  - Form labels in contact page were not associated with input `id`s.
- UX and IA:
  - Footer linked to routes that do not exist (`/team`, `/mission`, `/careers`, `/accessibility`).
  - Services cards in homepage linked to invalid slugs.
  - Projects cards linked to non-existent detail routes.
- Content quality:
  - Character-encoding artifacts visible in user-facing text.
  - Hero used placeholder background imagery.
- Design system consistency:
  - Typography relied on default-like stacks.
  - Section spacing, heading hierarchy, and token usage were inconsistent.

## Scope Applied
- Global tokens and typography refresh.
- Accessibility and navigation improvements.
- Homepage visual and content hierarchy update.
- Services, projects, and contact conversion flow redesign.
- Broken-link and route-completeness fixes.
