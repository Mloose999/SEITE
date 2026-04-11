"use client"

import Image from "next/image"
import { Brain, Flame, Sparkles, Heart, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Workshops() {
  const { t } = useLanguage()

  const workshops = [
    {
      icon: Brain,
      title: t("workshops.workshop1.title"),
      description: t("workshops.workshop1.description"),
      image: "/images/workshop-nervous.jpg"
    },
    {
      icon: Flame,
      title: t("workshops.workshop2.title"),
      description: t("workshops.workshop2.description"),
      image: "/images/workshop-fears.jpg"
    },
    {
      icon: Sparkles,
      title: t("workshops.workshop3.title"),
      description: t("workshops.workshop3.description"),
      image: "/images/workshop-energy.jpg"
    },
    {
      icon: Heart,
      title: t("workshops.workshop4.title"),
      description: t("workshops.workshop4.description"),
      image: "/images/workshop-relationship.jpg"
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
    <section id="workshops" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">{t("workshops.label")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            {t("workshops.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("workshops.description")}
          </p>
        </div>

        {/* Hero Image with Overlay Text */}
        <div className="relative mb-24">
          <div className="relative overflow-hidden aspect-[21/9]">
            <Image
              src="/images/workshop.jpg"
              alt="Personal transformation workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12 max-w-xl">
                <p className="text-card font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  {t("workshops.heroText")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t("workshops.howItWorks")}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              {t("workshops.howItWorksDescription")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-accent/30" />
            
            {workshopStructure.map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-sm mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Workshops - Side by Side with Arch Images */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {t("workshops.individual")}
              </h3>
              <p className="text-muted-foreground mt-2">{t("workshops.individualDescription")}</p>
            </div>
            <p className="text-foreground font-serif text-2xl font-bold">29 € <span className="text-base font-normal text-muted-foreground">{t("workshops.perWorkshop")}</span></p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {workshops.map((workshop, index) => (
              <div 
                key={index} 
                className="group"
              >
                {/* Arch-shaped Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full mb-5">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Simple Text Below */}
                <div className="text-center">
                  <h4 className="font-serif text-base md:text-lg font-bold text-foreground mb-2">
                    {workshop.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Complete Program Package - Full Width with Background Image */}
      <div className="relative overflow-hidden mb-28">
        {/* Background Image */}
        <Image
          src="/images/complete-package-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20 lg:py-24">
          <p className="text-foreground/70 font-semibold tracking-widest uppercase text-sm mb-4">{t("workshops.completePackage")}</p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("workshops.fullProgram")}
          </h3>
          <p className="text-foreground/70 leading-relaxed text-lg mb-10 max-w-xl">
            {t("workshops.fullProgramDescription")}
          </p>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            {/* Price */}
            <div>
              <span className="text-foreground/60 line-through text-lg block mb-1">116 €</span>
              <span className="font-serif text-6xl md:text-7xl font-bold text-foreground">99 €</span>
            </div>
            
            {/* Benefits */}
            <div className="space-y-3 pb-2">
              {[t("workshops.allWorkshops"), t("workshops.structuredJourney"), t("workshops.saveBundle")].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-foreground" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 1:1 Coaching - Full Width Beige Section */}
      <div className="w-full bg-beige-light py-20 md:py-28 mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground/70 font-semibold tracking-widest uppercase text-sm mb-4">{t("workshops.personalSupport")}</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("workshops.coaching")}
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-10">
              {t("workshops.coachingDescription")}
            </p>
            
            <div className="space-y-6">
              <p className="text-foreground font-medium">{t("workshops.availableFormats")}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { format: t("workshops.liveSessions"), desc: t("workshops.liveSessionsDesc") },
                  { format: t("workshops.emailCoaching"), desc: t("workshops.emailCoachingDesc") },
                  { format: t("workshops.phoneWhatsapp"), desc: t("workshops.phoneWhatsappDesc") }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-foreground font-medium">{item.format}</span>
                    <span className="text-foreground/70 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
