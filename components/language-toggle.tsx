"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  isScrolled?: boolean
}

// German flag (black, red, gold)
function GermanFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 3" className={className} aria-label="German flag">
      <rect width="3" height="1" y="0" fill="#000000"/>
      <rect width="3" height="1" y="1" fill="#DD0000"/>
      <rect width="3" height="1" y="2" fill="#FFCC00"/>
    </svg>
  )
}

// UK flag (Union Jack)
function UKFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={className} aria-label="UK flag">
      <rect width="30" height="30" fill="#012169"/>
      <path d="M0,0 L30,30 M30,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L30,30" stroke="#C8102E" strokeWidth="2"/>
      <path d="M30,0 L0,30" stroke="#C8102E" strokeWidth="2"/>
      <path d="M15,0 v30 M0,15 h30" stroke="#fff" strokeWidth="10"/>
      <path d="M15,0 v30 M0,15 h30" stroke="#C8102E" strokeWidth="6"/>
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
      className={`flex items-center justify-center p-1.5 h-auto transition-colors ${
        isScrolled 
          ? "text-foreground hover:text-primary hover:bg-primary/10" 
          : "text-card hover:text-card/80 hover:bg-card/10"
      }`}
      title={language === "en" ? "Auf Deutsch wechseln" : "Switch to English"}
    >
      {language === "en" ? (
        <GermanFlag className="w-8 h-8 rounded shadow-sm" />
      ) : (
        <UKFlag className="w-8 h-8 rounded shadow-sm" />
      )}
    </Button>
  )
}
