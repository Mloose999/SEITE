"use client"

import { LanguageProvider } from "@/lib/language-context"
import { CookieConsent } from "@/components/cookie-consent"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <CookieConsent />
    </LanguageProvider>
  )
}
