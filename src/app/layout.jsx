import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - UpthriveWork',
    default: 'UpthriveWork - Student Project & Academic Help Services Worldwide',
  },
  description:
    'UpthriveWork provides expert full stack project making, AI/ML project making, assignment making, presentation making, and custom academic help for students worldwide.',
  keywords: [
    'full stack project',
    'AI ML project',
    'assignment',
    'presentation',
    'custom academic help',
  ],
  authors: [{ name: 'UpthriveWork' }],
  creator: 'UpthriveWork',
  metadataBase: new URL('https://upthriveWork.com'),
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0%25' y1='100%25' x2='100%25' y2='0%25'><stop offset='0%25' stop-color='%230EA5E9'/><stop offset='100%25' stop-color='%230284C7'/></linearGradient></defs><circle cx='16' cy='16' r='15' stroke='url(%23g)' stroke-width='1.5' fill='none'/><path d='M16 22V10M16 10L11 15M16 10L21 15' stroke='url(%23g)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><circle cx='10' cy='23' r='1.5' fill='%230284C7' opacity='0.7'/><circle cx='16' cy='25.5' r='1.5' fill='%230284C7' opacity='0.5'/><circle cx='22' cy='23' r='1.5' fill='%230284C7' opacity='0.7'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: 'UpthriveWork - Student Project & Academic Help Services',
    description:
      'Expert full stack project making, AI/ML project making, assignment making, presentation making and custom academic help for students worldwide.',
    url: 'https://upthriveWork.com',
    siteName: 'UpthriveWork',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpthriveWork - Student Project & Academic Help Services',
    description:
      'Expert full stack project making, AI/ML project making, assignment making, presentation making and custom academic help for students worldwide.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}