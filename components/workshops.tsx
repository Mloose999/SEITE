"use client"

import Image from "next/image"
import Link from "next/link"
import { Brain, Flame, Sparkles, Heart, Check, Video, Mail, Phone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Workshops() {
  const { t } = useLanguage()

  const workshops = [
    {
      icon: Sparkles,
      title: t("workshops.workshop1.title"),
      description: t("workshops.workshop1.description"),
      image: "/images/workshop-mindset.jpg"
    },
    {
      icon: Brain,
      title: t("workshops.workshop2.title"),
      description: t("workshops.workshop2.description"),
      image: "/images/workshop-patterns.jpg"
    },
    {
      icon: Heart,
      title: t("workshops.workshop3.title"),
      description: t("workshops.workshop3.description"),
      image: "/images/workshop-heart.jpg"
    },
    {
      icon: Flame,
      title: t("workshops.workshop4.title"),
      description: t("workshops.workshop4.description"),
      image: "/images/workshop-nervous-new.jpg"
    }
  ]

  const workshopStructure = [
    {
      step: "01",
      title: t("workshops.step1.title"),
      description: t("workshops.step1.description")
    },
    {
      step: "02",
      title: t("workshops.step2.title"),
      description: t("workshops.step2.description")
    },
    {
      step: "03",
      title: t("workshops.step3.title"),
      description: t("workshops.step3.description")
    }
  ]

  return (
    <section id="workshops" className="bg-background">
      {/* Full-width background image section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/images/workshop-hero.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige via-beige/60 to-background" />
        
        {/* Content over background */}
        <div className="relative z-10 pt-40 md:pt-56 pb-28 md:pb-40">
          <div className="max-w-7xl mx-auto px-8">
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">{t("workshops.label")}</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 text-balance leading-tight">
                {t("workshops.title")}
              </h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                {t("workshops.description")}
              </p>
            </motion.div>

            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-foreground font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-snug">
                {t("workshops.heroText")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">
        {/* Workshop Structure */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-20">
            <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              {t("workshops.howItWorks")}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto font-light">
              {t("workshops.howItWorksDescription")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative">
            {/* Elegant connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-border" />
            
            {workshopStructure.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center group"
              >
                <div className="relative z-10 w-16 h-16 bg-white border border-border flex items-center justify-center font-serif font-medium text-lg mx-auto mb-8 transition-all duration-500 group-hover:border-foreground group-hover:shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl font-medium text-foreground mb-4">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Individual Workshops - Elegant Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                {t("workshops.individual")}
              </h3>
              <p className="text-muted-foreground mt-3 font-light">{t("workshops.individualDescription")}</p>
            </div>
            <p className="text-foreground font-serif text-3xl font-medium">29 € <span className="text-base font-light text-muted-foreground ml-1">{t("workshops.perWorkshop")}</span></p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {workshops.map((workshop, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                {/* Arch-shaped Image with elegant hover */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full mb-6">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
                </div>
                {/* Text Below */}
                <div className="text-center">
                  <h4 className="font-serif text-lg md:text-xl font-medium text-foreground mb-3 transition-colors duration-300 group-hover:text-foreground/70">
                    {workshop.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light">
                    {workshop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Complete Program Package + 1:1 Coaching - Single Background Image */}
      <div className="-mt-8 md:-mt-12 relative overflow-hidden">
        {/* Single Background Image covering both sections */}
        <Image
          src="/images/complete-package-bg.jpg"
          alt=""
          fill
          className="object-contain object-top md:object-cover md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-beige/40 to-background md:from-background md:via-beige/50 md:to-background" />
        
        <div className="relative z-10">
          {/* Complete Package Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-8 py-24 md:py-32"
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">{t("workshops.completePackage")}</p>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight">
              {t("workshops.fullProgram")}
            </h3>
            <p className="text-foreground/70 leading-relaxed text-lg mb-14 max-w-xl font-light">
              {t("workshops.fullProgramDescription")}
            </p>
            
            <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-20">
              {/* Price with elegant styling */}
              <div>
                <span className="text-foreground/50 line-through text-lg block mb-2 font-light">116 €</span>
                <span className="font-serif text-7xl md:text-8xl font-medium text-foreground tracking-tight">99 €</span>
              </div>
              
              {/* Benefits with refined styling */}
              <div className="space-y-4 pb-3">
                {[t("workshops.allWorkshops"), t("workshops.structuredJourney"), t("workshops.saveBundle")].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-foreground">
                    <div className="w-5 h-5 border border-foreground/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="max-w-7xl mx-auto px-8">
            <div className="h-px bg-foreground/10" />
          </div>

          {/* Premium Program - Personal Transformation Coaching Section */}
          <div className="max-w-7xl mx-auto px-8 py-28 md:py-36 pb-36 md:pb-48">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 md:gap-20"
            >
              {/* Left - Content */}
              <div className="flex flex-col justify-center">
                <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">{t("workshops.premiumProgram")}</p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
                  {t("workshops.transformationCoaching")}
                </h3>
                <p className="text-foreground/70 leading-relaxed font-light text-lg mb-8">
                  {t("workshops.transformationCoachingDescription")}
                </p>
                <Link 
                  href="/transformation-coaching" 
                  className="inline-flex items-center gap-3 text-foreground font-medium group hover:gap-4 transition-all duration-300"
                >
                  {t("workshops.learnMore")}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </div>
              
              {/* Right - Formats */}
              <div className="flex flex-col justify-center">
                <p className="text-foreground font-medium tracking-wide mb-10 text-sm uppercase">{t("workshops.availableFormats")}</p>
                <div className="space-y-8">
                  {[
                    { format: t("workshops.liveSessions"), desc: t("workshops.liveSessionsDesc"), icon: Video },
                    { format: t("workshops.emailCoaching"), desc: t("workshops.emailCoachingDesc"), icon: Mail },
                    { format: t("workshops.phoneWhatsapp"), desc: t("workshops.phoneWhatsappDesc"), icon: Phone }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5 group">
                      <item.icon className="w-6 h-6 text-foreground/60 mt-0.5 transition-all duration-300 group-hover:text-foreground group-hover:scale-110" strokeWidth={1.5} />
                      <div>
                        <span className="text-foreground font-medium block mb-1">{item.format}</span>
                        <span className="text-foreground/60 text-sm font-light">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
