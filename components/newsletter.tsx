"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Newsletter() {
  const { t } = useLanguage()

  return (
    <section id="newsletter" className="py-28 md:py-40 bg-gradient-to-br from-accent via-beige to-beige-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8">
            <Sparkles className="w-4 h-4 text-foreground/60" />
            <span className="text-foreground/70 text-xs tracking-[0.2em] uppercase font-light">Newsletter</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
            {t("newsletter.title")}
          </h2>
          
          <p className="text-foreground/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            {t("newsletter.description")}
          </p>

          <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row bg-white p-2 shadow-lg opacity-60 cursor-not-allowed select-none">
                <div className="flex-1 h-14 px-6 flex items-center">
                  <span className="text-foreground/40 font-light text-sm tracking-[0.15em] uppercase">Coming Soon</span>
                </div>
                <div className="h-14 px-8 bg-foreground/30 text-white flex items-center justify-center gap-2">
                  <span className="text-sm">{t("newsletter.cta")}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-foreground/40 text-xs mt-4 font-light">
                No spam. Unsubscribe anytime.
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
