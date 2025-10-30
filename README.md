# Make It Wow - LED Letters & Custom Neon Hire

A fast, responsive one-page marketing website for Make It Wow, a Brisbane-based LED letter and custom neon sign hire business.

## 🚀 Quick Start

### Installation (first time only)
```bash
npm install
```

### Run the website
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Image Optimization:** Next/Image

## 📁 Project Structure

```
Make it Wow/
├── app/
│   ├── layout.tsx          # Root layout with metadata & JSON-LD
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── Header.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section with CTA
│   ├── WhatWeDo.tsx        # Service overview
│   ├── Highlights.tsx      # Key features grid
│   ├── Gallery.tsx         # Image gallery with lightbox
│   ├── Packages.tsx        # Pricing packages
│   ├── Reviews.tsx         # Customer testimonials
│   ├── About.tsx           # About the business
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Site footer
└── public/
    └── images/             # Gallery images
```

## 🔧 Customization

### Update Contact Information

Search and replace these placeholders:
- **Phone:** `0400 000 000`
- **Email:** `hello@makeitwow.com.au`
- **ABN:** `00 000 000 000` (in Footer.tsx)

### Add/Update Images

1. Place images in `public/images/`
2. Update `galleryImages` array in `components/Gallery.tsx`

### Change Brand Colors

Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    dark: '#111827',     // Near-black
    accent: '#FFB703',   // Warm gold
    light: '#F8FAFC',    // Light background
  },
}
```

## 📧 Contact Form Setup with W3Forms

Your contact form is **already integrated with W3Forms**! You just need to get your access key:

### Quick Setup (2 minutes):

1. **Get your FREE access key:**
   - Go to [W3Forms.com](https://web3forms.com/)
   - Click "Get Started" and enter your email
   - You'll receive an access key instantly

2. **Add your access key:**
   - Open `components/Contact.tsx`
   - Find line 34: `access_key: 'YOUR_W3FORMS_ACCESS_KEY_HERE'`
   - Replace with your actual key: `access_key: 'abc123-your-key-here'`

3. **Done!** Your form now sends submissions directly to your email.

### Features included:
- ✅ Form submissions sent to your email
- ✅ Loading spinner during submission
- ✅ Success/error messages
- ✅ Automatic form reset after success
- ✅ No backend code needed
- ✅ 100% free for up to 250 submissions/month

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Your site will be live in ~2 minutes with automatic SSL and global CDN.

### Other Options
- **Netlify:** Connect Git repo, set build command to `npm run build`
- **AWS Amplify:** Use AWS Console to deploy
- **Docker:** Standard Next.js Dockerfile

## ✅ Pre-Launch Checklist

- [ ] **Get W3Forms access key** and add it to `Contact.tsx` (line 34)
- [ ] Replace placeholder contact info (phone, email, ABN)
- [ ] Update social media links in Footer.tsx
- [ ] Test form submission (make sure you receive emails)
- [ ] Test all navigation links
- [ ] Check mobile responsiveness on real devices
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Verify all images load correctly
- [ ] Set up custom domain

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📄 License

© 2025 Make It Wow. All rights reserved.

---

Built with Next.js, Tailwind CSS, and Framer Motion
