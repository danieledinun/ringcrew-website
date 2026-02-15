# Vercel Environment Variables Setup

To receive email notifications when users submit the onboarding form, add these environment variables to your Vercel project:

## Required Environment Variables

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your `ringcrew-website` project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

### RESEND_API_KEY
- **Value:** `re_ZcpkQh2Y_C4Ek3bdz55vDpkLKQyB9XKkx`
- **Environment:** Production, Preview, Development (select all)

### ADMIN_EMAIL
- **Value:** `danieledinunziosf@gmail.com`
- **Environment:** Production, Preview, Development (select all)

## What This Does

When a user completes the onboarding form at `/get-started`, you'll receive an email at `danieledinunziosf@gmail.com` with:

- Business name and contact details
- Industry and services offered
- Customer questions they want answered
- Booking preferences and tools
- Phone setup preferences
- Any special notes

The user will also receive a confirmation email at their submitted email address.

## After Adding Variables

After adding the environment variables, redeploy your site:
1. Go to **Deployments** tab
2. Click the three dots on the latest deployment
3. Click **Redeploy**
4. Select **Use existing build cache**
5. Click **Redeploy**

The email notifications will work after the redeploy completes.
