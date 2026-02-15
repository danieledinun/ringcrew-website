# RingCrew.ai Website - Quick Start Guide

## ✅ What's Built (Ready to Use)

### Core Pages
- ✅ Homepage with 11 sections (fully functional)
- ✅ /get-started (5-step onboarding form with email integration)
- ✅ /pricing (3 pricing tiers)
- ✅ /how-it-works
- ✅ /about
- ✅ /contact
- ✅ /blog (placeholder with 3 post examples)
- ✅ /industries/hvac (complete industry page - template for others)

### Infrastructure
- ✅ Tailwind v4 with brand design system
- ✅ shadcn/ui components integrated
- ✅ SEO metadata on all pages
- ✅ Sitemap.xml & robots.txt
- ✅ Email integration (Resend)
- ✅ Responsive mobile design
- ✅ Form validation (Zod)

## 🚀 To Get Started RIGHT NOW

### 1. Install & Run (2 minutes)
```bash
cd ringcrew-website
npm install
cp .env.example .env.local
# Edit .env.local with your email
npm run dev
```

Open http://localhost:3000

### 2. Set Up Email (5 minutes)
1. Sign up at https://resend.com (free tier works)
2. Get API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ADMIN_EMAIL=your-email@example.com
   ```
4. Test: Submit form at /get-started

### 3. Deploy to Vercel (10 minutes)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial RingCrew website"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main

# Then in Vercel:
# - Import repository
# - Add environment variables (RESEND_API_KEY, ADMIN_EMAIL)
# - Deploy
```

## 📋 What to Do Next

### Critical (Do First)
1. **Create the 6 remaining industry pages** (30 mins)
   - Copy `/app/industries/hvac/page.tsx`
   - Save as: plumbing, dental, med-spa, auto-repair, roofing, pest-control
   - Change the slug on line 8: `const industry = industries.find(i => i.slug === 'YOUR_SLUG')!;`
   - ALL the content is already in `/lib/industries.ts` - no editing needed!

2. **Add your actual email** in `.env.local` and Vercel

3. **Test the onboarding form end-to-end**

### Important (Do Soon)
4. **Add real demo audio** (placeholder exists)
   - Record a sample call
   - Save as `/public/audio/demo-call.mp3`
   - Update `src/components/sections/LiveDemo.tsx`

5. **Create OG images** (1200x630 px)
   - `/public/og-image.png` (homepage)
   - `/public/og-hvac.png`, etc. (per industry)

6. **Point domain to Vercel**
   - In Vercel: Domains → Add `ringcrew.ai`
   - Update DNS: Add Vercel nameservers

### Nice to Have
7. Write 5 blog posts (template ready in `/blog`)
8. Add Google Analytics (GTM script)
9. Add JSON-LD structured data (increases SEO rich snippets)
10. Add animations with Framer Motion (already installed)

## 🎯 Test These URLs

After running `npm run dev`:

- http://localhost:3000 → Homepage
- http://localhost:3000/get-started → **PRIMARY CONVERSION PAGE**
- http://localhost:3000/pricing
- http://localhost:3000/industries/hvac → Industry template
- http://localhost:3000/how-it-works
- http://localhost:3000/sitemap.xml → SEO sitemap

## ⚠️ Important Notes

- **The onboarding form is THE MOST IMPORTANT PAGE** - it's your primary conversion point
- Every CTA on the site points to `/get-started`
- NO demo calls, NO calendars - 100% self-serve
- Form submissions send 2 emails:
  1. Admin (you) → all form data
  2. Customer → confirmation with next steps

## 📊 Key Metrics to Track

Once deployed, track:
1. Form start rate (visitors who click "Get Started")
2. Form completion rate (step 5 submissions)
3. Drop-off by step (which step loses people)
4. Traffic sources per industry page

## 🆘 Troubleshooting

**Build fails?**
```bash
npm run build
```
Look for TypeScript errors. Build succeeds = ready to deploy.

**Email not sending?**
- Check RESEND_API_KEY is correct
- Verify domain in Resend dashboard (or use free @resend.dev emails for testing)

**Styles look broken?**
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

## 📁 File You'll Edit Most

- `/lib/constants.ts` → Update business info, pricing, FAQs
- `/lib/industries.ts` → Update industry content, stats, testimonials
- `/app/get-started/page.tsx` → Tweak onboarding form
- `/components/sections/*` → Update homepage sections

## 🎨 Brand Colors

- Primary Green: `#22c55e` (use `bg-primary`, `text-primary`)
- Accent Blue: `#3b82f6` (use `bg-accent`, `text-accent`)
- All in `globals.css` - edit there to change brand colors

---

**You're ready to go!** 🚀

Run `npm run dev` and visit http://localhost:3000
