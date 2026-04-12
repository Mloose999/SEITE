import type { Metadata } from 'next'
import { Poppins, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

const lora = Lora({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Linda Holtkamp - Mindset Coaching | Change Your Life',
  description: 'Change Your Life with Linda. My job is to see you win. Personal mindset coaching to help you break free from limiting beliefs and step into a life of abundance.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/logo-original.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo-original.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo-original.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo-original.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/images/logo-original.png',
    shortcut: '/images/logo-original.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lora.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
