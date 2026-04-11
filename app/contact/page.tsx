"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

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
      <main className="min-h-screen relative flex items-center justify-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-md w-full text-center bg-card/80 backdrop-blur-xl p-12 rounded-2xl shadow-2xl border border-border/50"
        >
          <div className="bg-accent/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t("contact.thankYou")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("contact.received")}
          </p>
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("contact.backHome")}
            </Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md bg-card/30 border-b border-border/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full">
              <Image
                src="/images/logo-green.jpg"
                alt="Change Your Life with Linda"
                width={50}
                height={50}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
              Linda Holtkamp
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle isScrolled={true} />
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("contact.back")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-sm font-medium tracking-widest text-primary uppercase mb-4"
                >
                  Contact
                </motion.span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                  {t("contact.title")}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {t("contact.description")}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 pt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:bg-card/70 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-Mail</p>
                    <p className="font-medium text-foreground">info@linda-holtkamp.de</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:bg-card/70 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-medium text-foreground">+49 123 456 7890</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/30 hover:bg-card/70 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Standort</p>
                    <p className="font-medium text-foreground">Deutschland</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card/70 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-border/30">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Nachricht senden
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium text-sm">
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
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary rounded-xl py-6 px-4 transition-all duration-300 focus:bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium text-sm">
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
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary rounded-xl py-6 px-4 transition-all duration-300 focus:bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium text-sm">
                      {t("contact.message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("contact.messagePlaceholder")}
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary rounded-xl py-4 px-4 resize-none transition-all duration-300 focus:bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100 rounded-xl"
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

                <p className="text-center text-muted-foreground text-sm mt-6">
                  {t("contact.responseTime")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
