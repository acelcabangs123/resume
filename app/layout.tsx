import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Russell C. Cabang - Web Developer & Data Analyst',
  description: 'Professional resume and portfolio of Russell Cabang, a Web Developer, Data Analyst, and Executive Assistant based in Quezon City, Philippines.',
  icons: {
    icon: [
      {
        url: '/rc.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/rc.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/rc.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/rc.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
