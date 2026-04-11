"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Mail className="w-14 h-14 text-accent mx-auto mb-8" strokeWidth={1.5} />
        
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          {t("newsletter.title")}
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          {t("newsletter.description")}
        </p>

        {isSubmitted ? (
          <div className="bg-accent/20 py-4 px-8 inline-block">
            <p className="text-accent font-medium">
              {t("newsletter.success")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 bg-muted border-0 focus:ring-2 focus:ring-primary"
            />
            <Button 
              type="submit"
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              {t("newsletter.cta")}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
