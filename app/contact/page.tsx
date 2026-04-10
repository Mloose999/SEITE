"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="bg-accent/20 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t("contact.thankYou")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("contact.received")}
          </p>
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("contact.backHome")}
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Change Your Life with Linda"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
              Linda Holtkamp
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle isScrolled={true} />
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("contact.back")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                {t("contact.name")}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t("contact.namePlaceholder")}
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-card border-border focus:border-primary focus:ring-primary rounded-lg py-3 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                {t("contact.email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-card border-border focus:border-primary focus:ring-primary rounded-lg py-3 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                {t("contact.message")}
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="bg-card border-border focus:border-primary focus:ring-primary rounded-lg py-3 px-4 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  {t("contact.sending")}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {t("contact.send")}
                </span>
              )}
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-sm mt-8">
            {t("contact.responseTime")}
          </p>
        </div>
      </section>
    </main>
  )
}
