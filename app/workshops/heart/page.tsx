"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export default function HeartPage() {
  const { t } = useLanguage()

  const steps = [
    {
      number: 1,
      title: t("heart.step1.title"),
      intro: t("heart.step1.intro"),
      points: [
        t("heart.step1.point1"),
        t("heart.step1.point2"),
        t("heart.step1.point3")
      ],
      outcome: t("heart.step1.outcome")
    },
    {
      number: 2,
      title: t("heart.step2.title"),
      intro: t("heart.step2.intro"),
      points: [
        t("heart.step2.point1"),
        t("heart.step2.point2"),
        t("heart.step2.point3")
      ],
      outcome: t("heart.step2.outcome")
    },
    {
      number: 3,
      title: t("heart.step3.title"),
      intro: t("heart.step3.intro"),
      points: [
        t("heart.step3.point1"),
        t("heart.step3.point2"),
        t("heart.step3.point3")
      ],
      outcome: t("heart.step3.outcome")
    },
    {
      number: 4,
      title: t("heart.step4.title"),
      intro: t("heart.step4.intro"),
      points: [
        t("heart.step4.point1"),
        t("heart.step4.point2"),
        t("heart.step4.point3")
      ],
      outcome: t("heart.step4.outcome")
    },
    {
      number: 5,
      title: t("heart.step5.title"),
      intro: t("heart.step5.intro"),
      points: [
        t("heart.step5.point1"),
        t("heart.step5.point2"),
        t("heart.step5.point3")
      ],
      outcome: t("heart.step5.outcome")
    },
    {
      number: 6,
      title: t("heart.step6.title"),
      intro: t("heart.step6.intro"),
      points: [
        t("heart.step6.point1"),
        t("heart.step6.point2"),
        t("heart.step6.point3"),
        t("heart.step6.point4"),
        t("heart.step6.point5")
      ],
      outcome: t("heart.step6.outcome")
    }
  ]

  const changes = [
    t("heart.changes1"),
    t("heart.changes2"),
    t("heart.changes3"),
    t("heart.changes4"),
    t("heart.changes5")
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Language Toggle - Fixed top right */}
      <div className="fixed top-6 right-8 z-50">
        <LanguageToggle isScrolled={true} />
      </div>

      {/* Hero with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/workshop-heart-bg.jpg"
          alt="Heal Your Heart"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("workshopDetails.back")}
            </Link>
            
            <p className="text-white/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("heart.label")}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
              {t("heart.title")}
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4">
              {t("heart.tagline1")}
            </p>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t("heart.tagline2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price and intro section */}
      <section className="py-20 md:py-28 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
          >
            <div className="md:flex-1">
              <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
                {t("heart.journey.label")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
                {t("heart.journey.title")}
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed">
                {t("heart.journey.description")}
              </p>
            </div>

            {/* Price */}
            <div className="md:flex-shrink-0 md:pl-8">
              <p className="text-foreground/50 font-light text-sm mb-2 tracking-[0.2em] uppercase">{t("transformation.investment")}</p>
              <p className="font-serif text-5xl md:text-6xl font-medium text-foreground">59 €</p>
              <p className="text-foreground/50 font-light text-sm mt-2">{t("pricing.oneTimeInvestment")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why you feel stuck */}
      <section className="py-20 md:py-28 bg-foreground/3">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("heart.stuck.label")}
            </p>
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
              {t("heart.stuck.text1")}
            </p>
            <p className="text-foreground/70 font-light text-lg">
              {t("heart.stuck.text2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Step number and title */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-foreground/40 font-serif text-5xl md:text-6xl font-light">{String(step.number).padStart(2, '0')}</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 font-light text-lg ml-24">
                    {step.intro}
                  </p>
                </div>

                {/* Points */}
                <div className="space-y-4 mb-8 ml-24">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-foreground/60 mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <p className="text-foreground/70 font-light">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div className="ml-24 pt-6 border-t border-foreground/10">
                  <p className="text-foreground/50 font-light text-sm uppercase tracking-[0.2em] mb-2">
                    Outcome
                  </p>
                  <p className="font-light text-foreground italic">"{step.outcome}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-20 md:py-28 bg-foreground/3">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10 text-center">
              {t("heart.changes.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {changes.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70 font-light">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Truth */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
              {t("heart.final1")}
            </p>
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-10">
              {t("heart.final2")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-foreground text-background font-medium text-sm tracking-[0.1em] uppercase hover:bg-foreground/90 transition-all duration-300"
            >
              {t("workshops.contactCta")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-20 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-8">
            <Link
              href="/workshops/patterns"
              className="group flex items-center gap-3 p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-foreground/60 font-light text-xs uppercase tracking-[0.2em]">{t("workshopDetails.prevWorkshop")}</p>
                <p className="font-serif font-medium text-foreground">{t("workshops.workshop2.title")}</p>
              </div>
            </Link>

            <Link
              href="/workshops/nervous"
              className="group flex items-center gap-3 p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 justify-end text-right"
            >
              <div className="text-right">
                <p className="text-foreground/60 font-light text-xs uppercase tracking-[0.2em]">{t("workshopDetails.nextWorkshop")}</p>
                <p className="font-serif font-medium text-foreground">{t("workshops.workshop4.title")}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
