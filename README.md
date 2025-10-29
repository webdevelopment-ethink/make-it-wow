# Make It Wow - LED Letters & Custom Neon Hire

A fast, responsive one-page marketing website for Make It Wow, a Brisbane-based LED letter and custom neon sign hire business.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Image Optimization:** Next/Image

## ✨ Features

- ⚡ Fast and optimized performance
- 📱 Fully responsive design
- ♿ Accessibility-first (semantic HTML, ARIA labels, keyboard navigation)
- 🎨 Smooth scroll animations and transitions
- 🖼️ Custom lightbox gallery
- 📧 Contact form (mailto integration)
- 🔍 SEO optimized with JSON-LD schema
- 🎯 Sticky navigation with active section highlighting

## 📦 Installation (2 Commands - That's It!)

1. **Install dependencies (only needed once):**
   ```bash
   npm install
   ```

2. **Run the website:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

**That's it!** The website is now running locally. No external downloads, no complex setup, just these two simple commands.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

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
│   ├── FAQs.tsx            # Accordion FAQ section
│   ├── About.tsx           # About the business
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Site footer
├── images/                 # Gallery images
├── public/                 # Static assets
└── config files            # Next.js, Tailwind, TypeScript configs
```

## 🔧 Customization

### Update Contact Information

Edit the following files to update contact details:

1. **Phone & Email:**
   - `components/Hero.tsx`
   - `components/About.tsx`
   - `components/Contact.tsx`
   - `components/Footer.tsx`
   - `app/layout.tsx` (JSON-LD schema)

2. **Colors:**
   - Update `tailwind.config.js`:
     ```js
     colors: {
       brand: {
         dark: '#111827',     // Near-black
         accent: '#FFB703',   // Warm glow
         light: '#F8FAFC',    // Light background
       },
     }
     ```

3. **Content:**
   - Each component contains the content inline
   - Simply edit the text strings in each component file

### Add More Images

1. Place new images in the `images/` folder
2. Update the `galleryImages` array in `components/Gallery.tsx`:
   ```typescript
   {
     src: '/images/your-image-name.jpg',
     alt: 'Descriptive alt text',
     caption: 'Display Caption • Style • Location',
   }
   ```

## 📧 Integrating a Real Contact Form

The contact form currently uses a `mailto:` fallback. To integrate a proper form backend:

### Option 1: Formspree (Easiest)

1. Sign up at [Formspree](https://formspree.io)
2. Create a new form and get your form endpoint
3. Update `components/Contact.tsx`:
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
       alert('Message sent successfully!')
       // Reset form
     }
   }
   ```

### Option 2: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Update `components/Contact.tsx`:
   ```typescript
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     
     emailjs.sendForm(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       e.currentTarget,
       'YOUR_PUBLIC_KEY'
     ).then(
       (result) => {
         alert('Message sent successfully!')
       },
       (error) => {
         alert('Failed to send message. Please try again.')
       }
     )
   }
   ```

### Option 3: Next.js API Route

1. Create `app/api/contact/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server'
   import nodemailer from 'nodemailer'
   
   export async function POST(request: Request) {
     const body = await request.json()
     
     const transporter = nodemailer.createTransport({
       // Your SMTP config
     })
     
     await transporter.sendMail({
       from: 'noreply@makeitwow.com.au',
       to: 'hello@makeitwow.com.au',
       subject: `Booking Enquiry from ${body.name}`,
       text: `Name: ${body.name}...`,
     })
     
     return NextResponse.json({ success: true })
   }
   ```

2. Update the form to use this API route

## 🎨 Design System

### Typography
- **Headings:** Poppins (600-800 weight)
- **Body:** Inter (400-500 weight)

### Color Palette
- **Primary (Dark):** #111827
- **Accent (Gold):** #FFB703
- **Light Background:** #F8FAFC

### Button Styles
- `btn-primary` - Primary CTA (gold background)
- `btn-secondary` - Secondary CTA (dark with white border)
- `btn-outline` - Outline button (white background)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Skip-to-content link
- Alt text for all images
- Sufficient color contrast (WCAG AA compliant)
- Focus indicators on all interactive elements

## 🔍 SEO

- Optimized meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD LocalBusiness schema
- Semantic HTML structure
- Descriptive alt text for images
- Fast loading times with Next/Image optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 Make It Wow. All rights reserved.

## 🤝 Support

For technical support or questions:
- Email: hello@makeitwow.com.au
- Phone: 0400 000 000

---

Built with ❤️ using Next.js and Tailwind CSS

