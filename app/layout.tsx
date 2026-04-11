import type { Metadata } from 'next'
import { Nunito, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Linda Holtkamp - Mindset Coaching | Change Your Life',
  description: 'Change Your Life with Linda. My job is to see you win. Personal mindset coaching to help you break free from limiting beliefs and step into a life of abundance.',
  generator: 'v0.app',
  icons: {
    icon: '/images/favicon.jpg',
    apple: '/images/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
