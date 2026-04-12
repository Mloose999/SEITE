"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/lib/language-context"
import { CookieConsent } from "@/components/cookie-consent"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LanguageProvider>
        {children}
        <CookieConsent />
      </LanguageProvider>
    </ThemeProvider>
  )
}
