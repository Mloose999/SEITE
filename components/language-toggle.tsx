"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  isScrolled?: boolean
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
      className={`flex items-center gap-1.5 px-3 py-1.5 h-auto text-sm font-medium transition-colors ${
        isScrolled 
          ? "text-foreground hover:text-primary hover:bg-primary/10" 
          : "text-card hover:text-card/80 hover:bg-card/10"
      }`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "DE" : "EN"}</span>
    </Button>
  )
}
