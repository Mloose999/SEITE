"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()

  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content with elegant animations */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 font-light text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] text-balance mb-8"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 italic text-lg md:text-xl mb-6 font-light"
        >
          {t("hero.tagline")}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light"
        >
          {t("hero.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            size="lg"
            onClick={scrollToPhilosophy}
            className="bg-white text-foreground hover:bg-white/90 px-10 py-7 text-sm font-medium tracking-wider uppercase transition-all duration-500 hover:tracking-widest border-0"
          >
            {t("hero.cta")}
          </Button>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToPhilosophy}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase group-hover:text-white/80 transition-colors">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.button>
    </section>
  )
}
