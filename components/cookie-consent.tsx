"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function CookieConsent() {
  const { t } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Load Google Analytics
    loadGoogleAnalytics()
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  const loadGoogleAnalytics = () => {
    const measurementId = "G-NRNV8VSD5N"
    
    // Check if script is already loaded
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
      console.log("[v0] GA script already loaded")
      return
    }

    console.log("[v0] Loading Google Analytics with ID:", measurementId)

    // Initialize dataLayer and gtag function BEFORE loading the script
    window.dataLayer = window.dataLayer || []
    window.gtag = function(...args: unknown[]) {
      window.dataLayer.push(arguments)
    }
    window.gtag("js", new Date())
    window.gtag("config", measurementId)

    // Load gtag.js script
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.async = true
    script.onload = () => {
      console.log("[v0] GA script loaded successfully")
    }
    document.head.appendChild(script)
  }

  // Check on mount if consent was given previously
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (consent === "accepted") {
      loadGoogleAnalytics()
    }
  }, [])

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-background border border-foreground/10 shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {t("cookies.title")}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {t("cookies.description")}{" "}
                  <Link
                    href="/datenschutz"
                    className="text-accent hover:text-accent/80 underline transition-colors"
                  >
                    {t("cookies.learnMore")}
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={declineCookies}
                  className="px-6 py-3 text-sm font-medium text-foreground/70 hover:text-foreground border border-foreground/20 transition-colors"
                >
                  {t("cookies.decline")}
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-3 text-sm font-medium text-background bg-accent hover:bg-accent/90 transition-colors"
                >
                  {t("cookies.accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}
