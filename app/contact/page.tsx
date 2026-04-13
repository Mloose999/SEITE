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
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Ein Fehler ist aufgetreten")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen relative flex items-center justify-center px-6 bg-gradient-to-br from-beige via-beige-light to-accent/30">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-beige/90 via-beige-light/85 to-accent/50" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-md w-full text-center bg-white/60 backdrop-blur-xl p-12 shadow-2xl border border-white/50"
        >
          <div className="bg-accent/50 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-foreground" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t("contact.thankYou")}
          </h1>
          <p className="text-foreground/70 mb-8">
            {t("contact.received")}
          </p>
          <Link href="/">
            <Button className="bg-foreground text-white hover:bg-foreground/90 px-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("contact.backHome")}
            </Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative flex flex-col lg:flex-row">
      {/* Left Side - Form & Content */}
      <div className="relative w-full lg:w-1/2 min-h-screen bg-beige/30">
        {/* Header */}
        <header className="relative z-10 backdrop-blur-md bg-white/30 border-b border-white/30">
          <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-full shadow-md">
                <Image
                  src="/images/logo-original.png"
                  alt="Change Your Life with Linda"
                  width={55}
                  height={55}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    filter: "sepia(1) saturate(4) brightness(0.9) hue-rotate(-30deg) drop-shadow(0 0 10px rgba(128, 0, 32, 0.7)) drop-shadow(0 0 20px rgba(139, 0, 0, 0.5))" 
                  }}
                />
              </div>
              <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
                Linda Holtkamp
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <LanguageToggle isScrolled={true} />
              <Link href="/">
                <Button variant="ghost" className="text-foreground/70 hover:text-foreground hover:bg-white/30">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("contact.back")}
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <section className="relative z-10 py-12 md:py-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-sm font-medium tracking-widest text-foreground/50 uppercase mb-4"
              >
                Contact
              </motion.span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {t("contact.title")}
              </h1>
              <p className="text-foreground/60 leading-relaxed">
                {t("contact.description")}
              </p>
            </motion.div>

            {/* Contact Info - Compact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-10 text-sm"
            >
              <div className="flex items-center gap-2 text-foreground/60">
                <Mail className="w-4 h-4" />
                <span>info@lindaholtkamp.de</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <Phone className="w-4 h-4" />
                <span>+49 171 5812251</span>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                
                {/* Name Field */}
                <motion.div 
                  className="relative"
                  animate={{ scale: focusedField === 'name' ? 1.01 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label 
                    htmlFor="name" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === 'name' || formData.name 
                        ? '-top-2.5 text-xs bg-beige/50 px-2 text-foreground/70' 
                        : 'top-4 text-foreground/50'
                    }`}
                  >
                    {t("contact.name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white/60 border border-foreground/10 focus:border-foreground/30 focus:ring-0 py-6 px-4 transition-all duration-300"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div 
                  className="relative"
                  animate={{ scale: focusedField === 'email' ? 1.01 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label 
                    htmlFor="email" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === 'email' || formData.email 
                        ? '-top-2.5 text-xs bg-beige/50 px-2 text-foreground/70' 
                        : 'top-4 text-foreground/50'
                    }`}
                  >
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white/60 border border-foreground/10 focus:border-foreground/30 focus:ring-0 py-6 px-4 transition-all duration-300"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div 
                  className="relative"
                  animate={{ scale: focusedField === 'message' ? 1.005 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                      focusedField === 'message' || formData.message 
                        ? '-top-2.5 text-xs bg-beige/50 px-2 text-foreground/70' 
                        : 'top-4 text-foreground/50'
                    }`}
                  >
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-white/60 border border-foreground/10 focus:border-foreground/30 focus:ring-0 py-4 px-4 pt-6 resize-none transition-all duration-300"
                  />
                </motion.div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-white hover:bg-foreground/90 py-6 text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t("contact.sending")}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <Send className="w-4 h-4" />
                      {t("contact.send")}
                    </span>
                  )}
                </Button>
              </form>

              <div className="flex items-center gap-2 justify-center mt-6 text-foreground/40 text-xs">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                {t("contact.responseTime")}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block relative w-1/2 min-h-screen">
        <Image
          src="/images/contact-portrait.jpg"
          alt="Linda working"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-beige/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-beige/30 via-transparent to-beige/20" />
      </div>

      {/* Mobile Image - shown above form on small screens */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-48 overflow-hidden -z-10">
        <Image
          src="/images/contact-portrait.jpg"
          alt="Linda working"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige/70 to-beige" />
      </div>
    </main>
  )
}
