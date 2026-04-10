# CIDE Group Website

A professional, modern website for CIDE Group, a development consultancy based in Kenya working across Africa.

## Features

### Pages
- **Homepage** - Comprehensive landing page with hero, services, featured projects, testimonials, and impact metrics
- **About Us** - Company story, mission/vision/values, team, and geographic reach
- **Services Overview** - All 8 core services with detailed descriptions
- **Individual Service Pages** - Complete documentation for each service including capabilities, case studies, and processes
- **Projects Portfolio** - Filterable project gallery with service areas and countries
- **Research Hub** - Content hub with reports, blogs, infographics, and case studies
- **Contact** - Professional contact form with validation

### Design System
- **Colors**: Primary orange (#E86B2D), accent green (#2D5F3F), warm neutrals
- **Typography**: Geist font family with semantic heading hierarchy
- **Components**: Reusable Button, Card, Badge, and custom components
- **Animations**: Scroll-fade effects, stagger animations, smooth transitions

### Advanced Features
- Responsive design (mobile-first)
- Animated counter metrics
- Testimonial carousel with auto-advance
- Dynamic project filtering
- Form validation and submission handling
- SEO optimization with JSON-LD schema
- Accessibility (WCAG 2.1 AA compliant)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: CSS transitions and Framer Motion-ready
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/cidegroup/website.git
cd website

# Install dependencies
npm install

# Set environment variables (if needed)
cp .env.example .env.local

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
\`\`\`

### Build & Deploy

\`\`\`bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
npm install -g vercel
vercel
\`\`\`

## Project Structure

\`\`\`
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── services/            # Services pages
│   ├── projects/            # Projects portfolio
│   ├── research/            # Research hub
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of use
│   ├── layout.tsx           # Root layout with SEO
│   ├── robots.ts            # SEO robots file
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── ui/                  # shadcn UI components
│   ├── navigation.tsx       # Header with dropdown menu
│   ├── footer.tsx           # Footer
│   ├── hero-section.tsx     # Homepage hero
│   ├── services-section.tsx # Services grid
│   ├── featured-projects-section.tsx
│   ├── our-approach-section.tsx
│   ├── impact-metrics-section.tsx
│   ├── testimonials-section.tsx
│   ├── cta-section.tsx
│   ├── scroll-fade-section.tsx  # Animation component
│   └── stagger-container.tsx    # Animation component
├── lib/
│   ├── constants.ts         # Brand constants
│   ├── form-validation.ts   # Form validation utilities
│   └── seo-utils.ts         # SEO helpers
├── public/
│   ├── images/              # Project images
│   └── favicon.ico
├── app/globals.css          # Global styles & design tokens
└── next.config.mjs          # Next.js configuration

\`\`\`

## Key Components

### Navigation
- Sticky header with dropdown services menu
- Mobile hamburger menu with responsive layout
- Proper focus management and accessibility

### Forms
- Contact form with validation
- Newsletter subscription
- Error states and success feedback

### Animations
- Scroll-fade effects for sections
- Stagger animations for content grids
- Smooth page transitions
- Carousel auto-advance with manual controls

### SEO
- Comprehensive metadata on all pages
- JSON-LD schema markup
- Sitemap and robots.txt
- OpenGraph and Twitter card support

## Configuration

### Environment Variables
Create `.env.local` for any API keys or configuration:

\`\`\`
NEXT_PUBLIC_SITE_URL=https://cidegroup.org
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=communications@cidegroup.org
SMTP_PASSWORD=your_private_email_password
SMTP_FROM_NAME=CIDE Group
SMTP_FROM_EMAIL=communications@cidegroup.org
CONTACT_NOTIFICATION_TO=communications@cidegroup.org,partnerships@cidegroup.org
CONTACT_REPLY_TO_EMAIL=communications@cidegroup.org
CONTACT_AUTO_RESPONSE_ENABLED=true
\`\`\`

### Customization

**Brand Colors**: Edit `app/globals.css` CSS variables section

**Navigation and Site Settings**: Update `content/site.ts`

**Services**: Update `content/services.ts`

**Impact Metrics**: Update `content/site.ts`

## Performance

- Page load time optimized for <3 seconds
- Images optimized with WebP format and lazy loading
- Code splitting for efficient bundle sizes
- Static generation where possible
- Dynamic routes for scalability

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML elements
- Proper contrast ratios
- Keyboard navigation support
- ARIA labels and roles
- Screen reader optimized

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Maintenance

### Adding New Projects
1. Add the project entry to `content/projects.ts`
2. Add or update publishable project images in `public/`
3. The listing page, detail page, and sitemap will pick it up automatically

### Adding Blog Posts
1. Add the resource entry to `content/research.ts`
2. Add any publishable supporting asset to `public/`
3. Create a dedicated route later if the resource needs its own page

### Updating Services
1. Update the service entry in `content/services.ts`
2. The services hub, service detail pages, homepage section, and sitemap will stay in sync

## Deployment

### Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Other Platforms
The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Your own server with Node.js

### Vultr
See [docs/deploy-vultr.md](/C:/Projects/cide-group/docs/deploy-vultr.md) for the VM-based Vultr deployment runbook that matches this repository's current Nginx and PM2 setup.

### Docker
```bash
docker compose up --build
```

The project now includes a production `Dockerfile` and `compose.yaml`. The container reads runtime variables from `.env.production.local` and serves the app on port `3000`.

## Support & Contributions

For questions or contributions, contact:
- Email: info@cidegroup.org
- Website: https://cidegroup.org

## License

Proprietary - All rights reserved CIDE Group

---

Built with Next.js, TypeScript, and Tailwind CSS
