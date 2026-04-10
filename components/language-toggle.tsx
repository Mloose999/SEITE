"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  isScrolled?: boolean
}

// German flag (black, red, gold)
function GermanFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 5 3" className={className} aria-label="German flag">
      <rect width="5" height="1" y="0" fill="#000000"/>
      <rect width="5" height="1" y="1" fill="#DD0000"/>
      <rect width="5" height="1" y="2" fill="#FFCC00"/>
    </svg>
  )
}

// UK flag (Union Jack)
function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-label="UK flag">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )
}

export function LanguageToggle({ isScrolled = true }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 h-auto text-sm font-medium transition-colors ${
        isScrolled 
          ? "text-foreground hover:text-primary hover:bg-primary/10" 
          : "text-card hover:text-card/80 hover:bg-card/10"
      }`}
      title={language === "en" ? "Auf Deutsch wechseln" : "Switch to English"}
    >
      {language === "en" ? (
        <>
          <GermanFlag className="w-5 h-4 rounded-sm shadow-sm" />
          <span>DE</span>
        </>
      ) : (
        <>
          <UKFlag className="w-5 h-4 rounded-sm shadow-sm" />
          <span>EN</span>
        </>
      )}
    </Button>
  )
}
