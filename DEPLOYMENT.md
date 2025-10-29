# Deployment Guide

This Next.js application can be deployed to various platforms. Here are the most popular options:

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is made by the creators of Next.js.

### Steps:

1. **Install Vercel CLI (optional):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel website:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Deploy via CLI:**
   ```bash
   vercel
   ```

4. **Environment Variables:**
   - Add any environment variables in the Vercel dashboard
   - Go to Project Settings → Environment Variables

### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain (e.g., makeitwow.com.au)
- Follow DNS configuration instructions

---

## 🌐 Netlify

### Steps:

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Make sure to install the Next.js plugin in Netlify

2. **Deploy:**
   - Connect your Git repository
   - Configure build settings
   - Click "Deploy site"

---

## ☁️ AWS Amplify

### Steps:

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click "Save and deploy"

---

## 🐳 Docker (Self-hosted)

### Steps:

1. **Create a Dockerfile:**
   ```dockerfile
   FROM node:18-alpine AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and run:**
   ```bash
   docker build -t make-it-wow .
   docker run -p 3000:3000 make-it-wow
   ```

---

## 📋 Pre-deployment Checklist

- [ ] Update contact information (phone, email, ABN)
- [ ] Replace placeholder text with real content
- [ ] Add real social media links in Footer.tsx
- [ ] Set up form backend (Formspree, EmailJS, or API route)
- [ ] Add Google Analytics or other tracking (optional)
- [ ] Test all links and navigation
- [ ] Verify all images load correctly
- [ ] Run Lighthouse audit for performance/SEO
- [ ] Test on multiple devices and browsers
- [ ] Set up custom domain DNS
- [ ] Add SSL certificate (usually automatic on hosting platforms)
- [ ] Set up email forwarding for hello@makeitwow.com.au
- [ ] Create and upload real favicon and OG image

---

## 🔍 SEO Setup After Deployment

1. **Google Search Console:**
   - Add and verify your website
   - Submit sitemap: `https://makeitwow.com.au/sitemap.xml`

2. **Google Business Profile:**
   - Create/claim your business listing
   - Add accurate location and contact info
   - Upload photos of your LED letters

3. **Social Media:**
   - Update og:image URL in `app/layout.tsx`
   - Create a 1200x630px image for social sharing
   - Test with [OpenGraph.xyz](https://www.opengraph.xyz/)

---

## 🎯 Performance Tips

- Images are already optimized with Next/Image
- Consider adding `next-sitemap` package for automatic sitemap generation
- Enable Vercel Analytics for performance insights
- Monitor Core Web Vitals in Google Search Console

---

## 🆘 Troubleshooting

### Build fails:
- Run `npm run build` locally to test
- Check for any TypeScript errors
- Verify all dependencies are in package.json

### Images not loading:
- Ensure images are in `public/images/`
- Check image paths start with `/images/`
- Verify image files are committed to Git

### Form not working:
- Check browser console for errors
- Verify mailto: links or form backend configuration
- Test email deliverability

---

Need help? Contact support or refer to [Next.js deployment docs](https://nextjs.org/docs/deployment).

