import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Make It Wow — LED Letters & Custom Neon Hire, Brisbane',
  description: 'Transform your event with 1m steel LED letters, giant numbers, and custom neon signs. Professional delivery, setup & pickup across Brisbane, Gold Coast & Sunshine Coast.',
  keywords: ['LED letters hire Brisbane', 'neon sign hire', 'wedding letters', 'event lighting Brisbane', 'LED numbers hire', 'custom neon signs'],
  authors: [{ name: 'Make It Wow' }],
  openGraph: {
    title: 'Make It Wow — LED Letters & Custom Neon Hire, Brisbane',
    description: 'Transform your event with 1m steel LED letters, giant numbers, and custom neon signs.',
    url: 'https://makeitwow.com.au',
    siteName: 'Make It Wow',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://makeitwow.com.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Make It Wow - LED Letters & Neon Hire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make It Wow — LED Letters & Custom Neon Hire, Brisbane',
    description: 'Transform your event with 1m steel LED letters, giant numbers, and custom neon signs.',
    images: ['https://makeitwow.com.au/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Make It Wow',
    image: 'https://makeitwow.com.au/og-image.jpg',
    telephone: '+61400000000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: ['Brisbane', 'Gold Coast', 'Sunshine Coast'],
    url: 'https://makeitwow.com.au',
    priceRange: '$$',
    description: 'Professional LED letter and custom neon sign hire for weddings and events across South East Queensland.',
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}

