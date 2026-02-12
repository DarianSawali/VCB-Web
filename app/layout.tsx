import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vancouvercbc.org'
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  ...(googleVerification && {
    verification: { google: googleVerification },
  }),
  title: {
    default: 'City Blessing Church | Vancouver & New Westminster',
    template: '%s | City Blessing Church',
  },
  description:
    'City Blessing Church in New Westminster, BC. Join us for worship, community, and growth. Saturday services, Carecells, Compassion Ministries, and livestream.',
  keywords: [
    'City Blessing Church',
    'church Vancouver',
    'church New Westminster',
    'Christian church BC',
    'worship',
    'Carecell',
    'Compassion Ministries',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'City Blessing Church',
    title: 'City Blessing Church | Vancouver & New Westminster',
    description:
      'City Blessing Church in New Westminster, BC. Join us for worship, community, and growth.',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'City Blessing Church',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'City Blessing Church | Vancouver & New Westminster',
    description: 'City Blessing Church in New Westminster, BC. Worship, community, and growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'City Blessing Church',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    'City Blessing Church in New Westminster, BC. Join us for worship, community, and growth.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '320 8th St',
    addressLocality: 'New Westminster',
    addressRegion: 'BC',
    postalCode: 'V3M 3R4',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://www.instagram.com/cityblessingvancouver/',
    'https://www.youtube.com/@vancouvercityblessing7174',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

