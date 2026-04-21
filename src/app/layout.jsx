import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - UpthriveWork',
    default: 'UpthriveWork - Your trusted academic help hub',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
