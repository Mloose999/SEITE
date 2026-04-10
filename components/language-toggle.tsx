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
      width="36" 
      height="24" 
      viewBox="0 0 36 24" 
      style={{ display: 'block' }}
      aria-label="Deutsche Flagge"
    >
      <rect x="0" y="0" width="36" height="8" fill="#000000"/>
      <rect x="0" y="8" width="36" height="8" fill="#DD0000"/>
      <rect x="0" y="16" width="36" height="8" fill="#FFCC00"/>
    </svg>
  )
}

// UK flag (Union Jack)
function UKFlag() {
  return (
    <svg 
      width="36" 
      height="24" 
      viewBox="0 0 36 24" 
      style={{ display: 'block' }}
      aria-label="UK Flag"
    >
      {/* Blue background */}
      <rect width="36" height="24" fill="#012169"/>
      
      {/* White diagonal stripes */}
      <path d="M0,0 L36,24 M36,0 L0,24" stroke="#FFFFFF" strokeWidth="4"/>
      
      {/* Red diagonal stripes */}
      <path d="M0,0 L36,24" stroke="#C8102E" strokeWidth="2"/>
      <path d="M36,0 L0,24" stroke="#C8102E" strokeWidth="2"/>
      
      {/* White cross */}
      <rect x="15" y="0" width="6" height="24" fill="#FFFFFF"/>
      <rect x="0" y="9" width="36" height="6" fill="#FFFFFF"/>
      
      {/* Red cross */}
      <rect x="16" y="0" width="4" height="24" fill="#C8102E"/>
      <rect x="0" y="10" width="36" height="4" fill="#C8102E"/>
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
      {language === "en" ? <GermanFlag /> : <UKFlag />}
    </Button>
  )
}
