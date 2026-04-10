"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-accent font-semibold text-lg md:text-xl tracking-widest uppercase mb-4">{t("hero.subtitle")}</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-card leading-tight text-balance mb-6">
          {t("hero.title")}
        </h1>
        <p className="text-accent/90 italic text-lg mb-8">{t("hero.tagline")}</p>
        <p className="text-card/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          {t("hero.description")}
        </p>
        <Button 
          size="lg"
          onClick={scrollToPhilosophy}
          className="bg-card text-foreground hover:bg-card/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
        >
          {t("hero.cta")}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToPhilosophy}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-card/80 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
