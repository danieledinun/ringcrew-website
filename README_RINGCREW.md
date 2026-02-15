# RingCrew.ai Website

Complete marketing website for RingCrew - an AI receptionist service for local service businesses (HVAC, plumbing, dental, med spas, auto repair, roofing, pest control).

## Overview

This is a fully-featured Next.js 14 marketing website with:
- **11-section homepage** with all conversion elements
- **Self-serve onboarding form** (5-step multi-step form) - PRIMARY CONVERSION PAGE
- **7 industry-specific landing pages** (HVAC example fully built, template ready for others)
- **Pricing page** with 3 tier plans
- **How It Works** page
- **Blog architecture** (ready for content)
- **About, Contact, Legal pages**
- **Full SEO optimization** (metadata, sitemap, robots.txt)
- **Tailwind v4** design system with professional green brand colors
- **shadcn/ui components**
- **Email automation** via Resend

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Accessible, customizable components
- **Framer Motion** - Animations (ready to add)
- **React Hook Form + Zod** - Type-safe form validation
- **Resend** - Transactional emails
- **Lucide React** - Icons

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your credentials:

```env
RESEND_API_KEY=re_your_api_key_here  # Get from https://resend.com
ADMIN_EMAIL=your-email@example.com    # Where form submissions go
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (nav, footer, SEO defaults)
│   ├── page.tsx                  # Homepage (all 11 sections)
│   ├── pricing/page.tsx          # Pricing page
│   ├── how-it-works/page.tsx     # How It Works page
│   ├── get-started/page.tsx      # ★ Self-serve onboarding form (PRIMARY CONVERSION)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx             # Blog index
│   ├── industries/               # Industry landing pages
│   │   └── hvac/page.tsx         # ★ HVAC page (fully built, template for others)
│   ├── api/
│   │   └── onboarding/route.ts   # ★ Form submission handler (Resend emails)
│   ├── sitemap.ts                # XML sitemap
│   └── robots.ts                 # robots.txt
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Homepage sections (Hero, Features, FAQ, etc.)
│   ├── shared/                   # Reusable components
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── constants.ts              # Business info, pricing, features, FAQs
│   ├── industries.ts             # ★ All 7 industry data (headlines, FAQs, stats)
│   ├── seo.ts                    # Metadata generators
│   ├── form-schema.ts            # Zod schema for onboarding form
│   └── utils.ts
└── public/                       # Static assets
```

## Key Pages

### 1. Homepage (`/`)
11 sections:
1. Hero with CTA
2. Trust Bar (integrations)
3. Problem Statement (stats)
4. How It Works (3 steps)
5. Features Grid (6 features)
6. Live Demo (audio player placeholder)
7. ROI Calculator (interactive)
8. Industry Grid (7 industries)
9. Testimonials
10. FAQ
11. Final CTA

### 2. Get Started (`/get-started`) ★ PRIMARY CONVERSION PAGE
5-step onboarding form:
- Step 1: Business info (name, email, industry)
- Step 2: Services & hours
- Step 3: Common questions & pricing
- Step 4: Appointments & tools
- Step 5: Phone setup & final details

On submit:
- Sends admin email with all form data (via Resend)
- Sends confirmation email to prospect
- Shows success screen

### 3. Industry Pages (`/industries/*`)
Template built for HVAC (fully complete). Ready to duplicate for:
- `/industries/plumbing`
- `/industries/dental`
- `/industries/med-spa`
- `/industries/auto-repair`
- `/industries/roofing`
- `/industries/pest-control`

Each page has:
- Industry-specific headline & copy
- Pain points
- How it works
- Industry-specific FAQs
- Testimonial
- Pre-filled CTA button with `?industry={slug}` param

## Configuration

### Brand Colors

Primary green: `#22c55e` (brand-500)
Accent blue: `#3b82f6`

Defined in `src/app/globals.css`

### Fonts

- **Headings**: Plus Jakarta Sans
- **Body**: Inter

Loaded via `next/font` in `src/app/layout.tsx`

### Industries Data

Edit `src/lib/industries.ts` to customize:
- Headlines
- Subheadlines
- Pain points
- FAQs
- Stats
- Testimonials
- Meta titles/descriptions

### Pricing Plans

Edit `src/lib/constants.ts` > `PRICING_PLANS`

### FAQ Items

Edit `src/lib/constants.ts` > `FAQ_ITEMS`

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
4. Deploy

Domain: Point `ringcrew.ai` DNS to Vercel

### Environment Variables for Production

```env
RESEND_API_KEY=re_live_key
ADMIN_EMAIL=hello@ringcrew.ai
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Add domain `ringcrew.ai` and verify DNS
3. Get API key
4. Add to `.env.local`

Emails sent:
- **Admin notification**: Full form data after submission
- **Customer confirmation**: Welcome email with next steps

## TODO / Next Steps

### High Priority
1. **Create remaining 6 industry pages**
   - Copy `/industries/hvac/page.tsx`
   - Replace `hvac` slug with each industry
   - All data already in `src/lib/industries.ts`

2. **Add real demo audio**
   - Record sample call
   - Add to `/public/audio/demo-call.mp3`
   - Update `LiveDemo.tsx` component

3. **Add OG images**
   - Create 1200×630 images
   - `/public/og-image.png` (homepage)
   - `/public/og-hvac.png` (per industry)

4. **Add structured data (JSON-LD)**
   - Organization schema (homepage)
   - FAQPage schema (FAQ sections)
   - Service schema (industry pages)
   - Article schema (blog posts)

### Medium Priority
5. **Write 5 blog posts**
   - Template ready in `/blog`
   - Create MDX files in `/content/blog/`

6. **Add Google Analytics**
   - Add GTM script to layout
   - Set up conversion tracking

7. **Legal pages content**
   - Privacy Policy
   - Terms of Service

8. **Add animations**
   - Framer Motion already installed
   - Scroll animations in sections
   - Page transitions

### Low Priority
9. **Performance optimization**
   - Optimize images
   - Add `priority` prop to hero image
   - Lazy load below-fold sections

10. **A/B testing setup**
    - Headline variants
    - CTA button copy

## SEO Checklist

- ✅ Unique meta titles & descriptions per page
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ One H1 per page
- ✅ Internal linking structure
- ⏳ Structured data (JSON-LD) - Ready to add
- ⏳ OG images - Need to create
- ⏳ Blog posts - Template ready

## Notes

- **No dark mode**: PRD specifies light mode only for v1
- **No demo calendar**: All conversion via self-serve form
- **Mobile-first**: All pages responsive
- **Conversion focus**: Every CTA points to `/get-started`

## Support

Questions? Email hello@ringcrew.ai

## License

Proprietary - RingCrew.ai
