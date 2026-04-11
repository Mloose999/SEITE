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
  const [focusedField, setFocusedField] = useState<string | null>(null)
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
          className="relative z-10 max-w-md w-full text-center bg-white/60 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/50"
        >
          <div className="bg-accent/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-foreground" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            {t("contact.thankYou")}
          </h1>
          <p className="text-foreground/70 mb-8">
            {t("contact.received")}
          </p>
          <Link href="/">
            <Button className="bg-foreground text-white hover:bg-foreground/90 px-8 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("contact.backHome")}
            </Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-beige via-beige-light to-accent/30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-beige/85 via-beige-light/80 to-accent/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-beige/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/20 rounded-full blur-3xl" />

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md bg-white/30 border-b border-white/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full shadow-md">
              <Image
                src="/images/logo-original.png"
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
              <Button variant="ghost" className="text-foreground/70 hover:text-foreground hover:bg-white/30 rounded-full">
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
                  className="inline-block text-sm font-medium tracking-widest text-foreground/60 uppercase mb-4"
                >
                  Contact
                </motion.span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                  {t("contact.title")}
                </h1>
                <p className="text-foreground/60 text-lg leading-relaxed max-w-md">
                  {t("contact.description")}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 pt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-beige flex items-center justify-center shadow-sm">
                    <Mail className="w-6 h-6 text-foreground/80" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium">E-Mail</p>
                    <p className="font-medium text-foreground">info@lindaholtkamp.de</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-beige flex items-center justify-center shadow-sm">
                    <Phone className="w-6 h-6 text-foreground/80" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium">Telefon</p>
                    <p className="font-medium text-foreground">+49 123 456 7890</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/70 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-beige flex items-center justify-center shadow-sm">
                    <MapPin className="w-6 h-6 text-foreground/80" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 font-medium">Standort</p>
                    <p className="font-medium text-foreground">Deutschland</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Modern Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-2 md:p-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-beige flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5 text-foreground/80" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Nachricht senden
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <motion.div 
                    className="relative"
                    animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === 'name' || formData.name 
                          ? '-top-2.5 text-xs bg-beige-light/80 backdrop-blur-sm px-2 text-foreground/70 rounded' 
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
                      className="bg-white/40 backdrop-blur-sm border-2 border-accent/30 focus:border-accent focus:ring-0 rounded-2xl py-6 px-4 transition-all duration-300 hover:border-accent/50 hover:bg-white/50"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div 
                    className="relative"
                    animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === 'email' || formData.email 
                          ? '-top-2.5 text-xs bg-beige-light/80 backdrop-blur-sm px-2 text-foreground/70 rounded' 
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
                      className="bg-white/40 backdrop-blur-sm border-2 border-accent/30 focus:border-accent focus:ring-0 rounded-2xl py-6 px-4 transition-all duration-300 hover:border-accent/50 hover:bg-white/50"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div 
                    className="relative"
                    animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label 
                      htmlFor="message" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === 'message' || formData.message 
                          ? '-top-2.5 text-xs bg-beige-light/80 backdrop-blur-sm px-2 text-foreground/70 rounded' 
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
                      className="bg-white/40 backdrop-blur-sm border-2 border-accent/30 focus:border-accent focus:ring-0 rounded-2xl py-4 px-4 pt-6 resize-none transition-all duration-300 hover:border-accent/50 hover:bg-white/50"
                    />
                  </motion.div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-foreground to-foreground/90 text-white hover:from-foreground/90 hover:to-foreground/80 py-6 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:hover:scale-100 rounded-2xl mt-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contact.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        {t("contact.send")}
                      </span>
                    )}
                  </Button>
                </form>

                <div className="flex items-center gap-2 justify-center mt-8 text-foreground/50 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {t("contact.responseTime")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
