"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

interface LanguageToggleProps {
  isScrolled?: boolean
}

// German flag (black, red, gold)
function GermanFlag() {
  return (
    <svg 
      width="60" 
      height="40" 
      viewBox="0 0 60 40" 
      style={{ display: 'block' }}
      aria-label="Deutsche Flagge"
    >
      <rect x="0" y="0" width="60" height="13.33" fill="#000000"/>
      <rect x="0" y="13.33" width="60" height="13.34" fill="#DD0000"/>
      <rect x="0" y="26.67" width="60" height="13.33" fill="#FFCC00"/>
    </svg>
  )
}

// UK flag (Union Jack)
function UKFlag() {
  return (
    <svg 
      width="60" 
      height="40" 
      viewBox="0 0 60 40" 
      style={{ display: 'block' }}
      aria-label="UK Flag"
    >
      {/* Blue background */}
      <rect width="60" height="40" fill="#012169"/>
      
      {/* White diagonal stripes */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="8"/>
      
      {/* Red diagonal stripes */}
      <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="4"/>
      <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
      
      {/* White cross */}
      <rect x="25" y="0" width="10" height="40" fill="#FFFFFF"/>
      <rect x="0" y="15" width="60" height="10" fill="#FFFFFF"/>
      
      {/* Red cross */}
      <rect x="27" y="0" width="6" height="40" fill="#C8102E"/>
      <rect x="0" y="17" width="60" height="6" fill="#C8102E"/>
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
      className={`flex items-center justify-center p-2 h-auto transition-colors ${
        isScrolled 
          ? "text-foreground hover:text-primary hover:bg-primary/10" 
          : "text-card hover:text-card/80 hover:bg-card/10"
      }`}
      title={language === "en" ? "Auf Deutsch wechseln" : "Switch to English"}
    >
      {language === "en" ? <GermanFlag /> : <UKFlag />}
    </Button>
  )
}
