"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" className="py-28 md:py-40 bg-gradient-to-br from-accent via-beige to-beige-light relative overflow-hidden">
      {/* Top transition gradient from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-beige-light via-beige-light/70 to-transparent z-10 pointer-events-none" />
      
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
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-5 py-2.5 mb-8">
            <Sparkles className="w-4 h-4 text-foreground/60" />
            <span className="text-foreground/70 text-xs tracking-[0.2em] uppercase font-light">Newsletter</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
            {t("newsletter.title")}
          </h2>
          
          <p className="text-foreground/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            {t("newsletter.description")}
          </p>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white py-6 px-10 inline-block shadow-lg"
            >
              <p className="text-foreground font-medium">
                {t("newsletter.success")}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className={`flex flex-col sm:flex-row bg-white p-2 shadow-lg transition-all duration-300 ${isFocused ? 'shadow-xl ring-2 ring-accent/30' : ''}`}>
                <Input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                  className="flex-1 h-14 px-6 bg-transparent border-0 text-foreground placeholder:text-foreground/40 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button 
                  type="submit"
                  className="h-14 px-8 bg-foreground text-white hover:bg-foreground/80 transition-all duration-300 group"
                >
                  <span>{t("newsletter.cta")}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="text-foreground/40 text-xs mt-4 font-light">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
