# Go-Live Checklist (CIDE Group)

## Build and quality
- `npm ci`
- `npm run lint`
- `npm run build`
- Confirm no TypeScript errors (`tsc --noEmit` runs in build script)

## Security
- Verify security headers in response:
  - `Content-Security-Policy`
  - `X-Frame-Options`
  - `X-Content-Type-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`
- Verify HSTS at Nginx level in production HTTPS response.

## Contact form
- Submit a valid form; confirm delivery to `communications.cidegroup@gmail.com`.
- Submit spam-like payload and verify rate limit/validation behavior.
- If Turnstile is enabled, verify invalid token rejection.

## SEO and indexing
- Verify:
  - `/robots.txt`
  - `/sitemap.xml`
  - Canonical URL
  - Open Graph preview image
- Validate structured data (Organization schema).

## Accessibility
- Keyboard-only navigation through header, mega menus, and forms.
- Confirm visible focus styles for interactive elements.
- Run Lighthouse accessibility audit and resolve critical issues.

## Performance
- Run Lighthouse on `/`, `/about`, `/services`.
- Confirm optimized images are being served by Next.js.
- Re-check LCP after deploy.

## Operations
- PM2 process healthy: `pm2 status`
- Health endpoint: `/api/health`
- Nginx reload and SSL renewal status
- Uptime monitor and alerting configured
- Backups configured and tested
