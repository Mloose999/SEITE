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
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([])
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
        body: JSON.stringify({ ...formData, workshops: selectedWorkshops }),
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

  const toggleWorkshop = (workshop: string) => {
    setSelectedWorkshops(prev => 
      prev.includes(workshop)
        ? prev.filter(w => w !== workshop)
        : [...prev, workshop]
    )
  }

  const workshops = [
    { id: "mindset", label: t("contact.workshopMindset") },
    { id: "patterns", label: t("contact.workshopPatterns") },
    { id: "heart", label: t("contact.workshopHeart") },
    { id: "nervous", label: t("contact.workshopNervous") },
    { id: "complete", label: t("contact.workshopComplete") },
    { id: "transformation", label: t("contact.workshopTransformation") },
  ]

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
    <main className="min-h-screen relative bg-beige/20">
      {/* Header */}
      <header className="relative z-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
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
              <Button variant="ghost" className="text-foreground/70 hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("contact.back")}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative z-10 py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Left - Image & Info (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/contact-portrait.jpg"
                  alt="Linda"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Contact Info below image */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <Mail className="w-4 h-4 text-foreground/40" />
                  <span className="text-sm">info@lindaholtkamp.de</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Phone className="w-4 h-4 text-foreground/40" />
                  <span className="text-sm">+49 171 5812251</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-4 h-4 text-foreground/40" />
                  <span className="text-sm">Deutschland</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Form (3 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="mb-10">
                <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-4">
                  Contact
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 leading-tight">
                  {t("contact.title")}
                </h1>
                <p className="text-foreground/60 font-light leading-relaxed max-w-md">
                  {t("contact.description")}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                
                {/* Name Field */}
                <div className="relative">
                  <Label 
                    htmlFor="name" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name 
                        ? '-top-5 text-xs text-foreground/50' 
                        : 'top-3 text-foreground/40'
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
                    className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus:border-foreground/50 focus:ring-0 py-3 px-0 transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <Label 
                    htmlFor="email" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formData.email 
                        ? '-top-5 text-xs text-foreground/50' 
                        : 'top-3 text-foreground/40'
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
                    className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus:border-foreground/50 focus:ring-0 py-3 px-0 transition-all duration-300"
                  />
                </div>

                {/* Workshop Interest Selection */}
                <div className="pt-4">
                  <Label className="text-foreground/50 text-xs font-light tracking-wide block mb-4">
                    {t("contact.workshopInterest")}
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {workshops.map((workshop) => (
                      <button
                        key={workshop.id}
                        type="button"
                        onClick={() => toggleWorkshop(workshop.id)}
                        className={`text-left px-4 py-3 border transition-all duration-300 text-sm ${
                          selectedWorkshops.includes(workshop.id)
                            ? 'border-foreground bg-foreground/5 text-foreground'
                            : 'border-foreground/20 text-foreground/60 hover:border-foreground/40 hover:text-foreground/80'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`w-4 h-4 border flex items-center justify-center transition-all duration-300 ${
                            selectedWorkshops.includes(workshop.id)
                              ? 'border-foreground bg-foreground'
                              : 'border-foreground/30'
                          }`}>
                            {selectedWorkshops.includes(workshop.id) && (
                              <CheckCircle className="w-3 h-3 text-background" />
                            )}
                          </span>
                          {workshop.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <Label 
                    htmlFor="message" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message 
                        ? '-top-5 text-xs text-foreground/50' 
                        : 'top-3 text-foreground/40'
                    }`}
                  >
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="bg-transparent border-0 border-b border-foreground/20 rounded-none focus:border-foreground/50 focus:ring-0 py-3 px-0 resize-none transition-all duration-300"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-foreground text-background hover:bg-foreground/90 px-10 py-6 text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        {t("contact.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Send className="w-4 h-4" />
                        {t("contact.send")}
                      </span>
                    )}
                  </Button>
                </div>
              </form>

              <div className="flex items-center gap-2 mt-8 text-foreground/40 text-xs">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                {t("contact.responseTime")}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
