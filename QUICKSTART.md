# Quick Start Guide

Get your Make It Wow website up and running in **2 minutes** with just **2 commands**!

## 🚀 Super Simple Setup

No external downloads needed. No complex configuration. Just run these two commands:

### Step 1: Install (one-time only)

```bash
npm install
```

This installs Next.js, React, Tailwind CSS, and Framer Motion (all standard web packages).

### Step 2: Run the Website

```bash
npm run dev
```

### Step 3: View Your Site

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Done!** Your website is now running. That's literally all you need to do.

## ✏️ Step 3: Customize Your Content

### Update Contact Information

**Search and replace these placeholders across the project:**

1. **Phone Number:** `0400 000 000`
   - Files: `components/Hero.tsx`, `components/About.tsx`, `components/Contact.tsx`, `app/layout.tsx`

2. **Email:** `hello@makeitwow.com.au`
   - Files: `components/About.tsx`, `components/Contact.tsx`, `app/layout.tsx`

3. **ABN:** `00 000 000 000`
   - File: `components/Footer.tsx`

### Add Real Social Media Links

Edit `components/Footer.tsx`:
```typescript
<a
  href="https://facebook.com/YOUR_PAGE"  // ← Update this
  target="_blank"
  rel="noopener noreferrer"
  ...
```

### Customize Gallery Images

Images are already loaded from `public/images/`. To add more:

1. Add images to `public/images/`
2. Edit `components/Gallery.tsx`
3. Add to the `galleryImages` array:
   ```typescript
   {
     src: '/images/your-new-image.jpg',
     alt: 'Descriptive text',
     caption: 'Display Caption',
   }
   ```

## 🚀 Step 4: Deploy

### Option A: Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site is live.

### Option B: Other Platforms

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions for:
- Netlify
- AWS Amplify
- Docker/Self-hosted

## 📧 Step 5: Set Up Contact Form

The form currently uses `mailto:` as a fallback. For better functionality:

### Recommended: Use Formspree

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. Update `components/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  if (response.ok) {
    alert('Message sent! We\'ll get back to you within 24 hours.')
    setFormData({
      name: '', email: '', phone: '', 
      eventDate: '', venue: '', interest: '', message: ''
    })
  } else {
    alert('Oops! Something went wrong. Please try again.')
  }
}
```

See [README.md](./README.md) for more form integration options.

## 🎨 Step 6: Branding (Optional)

### Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    dark: '#111827',    // Primary dark color
    accent: '#FFB703',  // Gold/accent color
    light: '#F8FAFC',   // Light background
  },
}
```

### Add Your Logo

Replace the text logo in `components/Header.tsx` with an image:
```typescript
<Link href="#home">
  <Image
    src="/images/logo.png"
    alt="Make It Wow"
    width={150}
    height={50}
  />
</Link>
```

### Add Favicon

1. Create a favicon (16x16, 32x32, 48x48)
2. Replace `public/favicon.ico`
3. Optionally add more sizes:
   - `public/favicon-16x16.png`
   - `public/favicon-32x32.png`
   - `public/apple-touch-icon.png` (180x180)

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Replace all placeholder content
- [ ] Update contact information
- [ ] Set up contact form backend
- [ ] Add real social media links
- [ ] Test all navigation links
- [ ] Test form submission
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Set up Google Analytics (optional)
- [ ] Test on different browsers
- [ ] Verify all images load
- [ ] Update OG image for social sharing
- [ ] Set up custom domain
- [ ] Test contact form email delivery

## 🆘 Common Issues

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not loading
```bash
npm run dev
```
Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Images not displaying
- Check images are in `public/images/`
- Paths should start with `/images/` not `images/`
- Restart dev server after adding new images

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

## 📚 Next Steps

1. Read the full [README.md](./README.md) for detailed documentation
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
3. Explore [Next.js docs](https://nextjs.org/docs) to learn more
4. Join the [Next.js Discord](https://discord.gg/nextjs) for community support

---

**Need help?** Open an issue or contact support at hello@makeitwow.com.au

Happy building! 🎉

