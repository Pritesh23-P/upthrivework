import '@/styles/tailwind.css'
import { JsonLd } from '@/components/JsonLd'

const BASE_URL = 'https://upthrivewerk.com'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s - UpthriveWork',
    default: 'UpthriveWork - Your trusted academic help hub',
  },
  description:
    'UpthriveWork is a student-focused hub delivering full stack projects, AI/ML solutions, assignments, presentations, and custom academic help — trusted by students across hundreds of universities worldwide.',
  keywords: [
    'academic help',
    'full stack project',
    'AI ML project',
    'assignment help',
    'presentation help',
    'custom academic help',
    'student project help',
    'capstone project',
    'dissertation help',
    'university assignment',
    'UpthriveWork',
  ],
  authors: [{ name: 'UpthriveWork Hub' }],
  creator: 'UpthriveWork Hub',
  publisher: 'UpthriveWork Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },

  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'UpthriveWork Hub',
    title: 'UpthriveWork - Your trusted academic help hub',
    description:
      'Expert academic help for students — full stack projects, AI/ML solutions, assignments, presentations, and more. Trusted by students at 100+ universities worldwide.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'UpthriveWork Hub — Academic excellence delivered by experts',
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'UpthriveWork - Your trusted academic help hub',
    description:
      'Expert academic help for students — full stack projects, AI/ML solutions, assignments, presentations, and more.',
    images: [`${BASE_URL}/og-image.png`],
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <JsonLd />
      </body>
    </html>
  )
}
