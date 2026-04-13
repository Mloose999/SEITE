"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export default function NervousPage() {
  const { t } = useLanguage()

  const steps = [
    {
      number: 1,
      title: t("nervous.step1.title"),
      intro: t("nervous.step1.intro"),
      points: [
        t("nervous.step1.point1"),
        t("nervous.step1.point2"),
        t("nervous.step1.point3"),
        t("nervous.step1.point4")
      ],
      outcome: t("nervous.step1.outcome")
    },
    {
      number: 2,
      title: t("nervous.step2.title"),
      intro: t("nervous.step2.intro"),
      points: [
        t("nervous.step2.point1"),
        t("nervous.step2.point2"),
        t("nervous.step2.point3"),
        t("nervous.step2.point4")
      ],
      outcome: t("nervous.step2.outcome")
    },
    {
      number: 3,
      title: t("nervous.step3.title"),
      intro: t("nervous.step3.intro"),
      points: [
        t("nervous.step3.point1"),
        t("nervous.step3.point2"),
        t("nervous.step3.point3"),
        t("nervous.step3.point4")
      ],
      outcome: t("nervous.step3.outcome")
    }
  ]

  const changes = [
    t("nervous.changes1"),
    t("nervous.changes2"),
    t("nervous.changes3"),
    t("nervous.changes4"),
    t("nervous.changes5")
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
          src="/images/workshop-nervous-bg.jpg"
          alt="Nervous System Regulation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/30" />
        
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
              {t("nervous.label")}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
              {t("nervous.title")}
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t("nervous.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro text */}
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
                {t("nervous.journey.label")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
                {t("nervous.journey.title")}
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed mb-6">
                {t("nervous.journey.description")}
              </p>
              <p className="text-foreground/70 font-light text-lg leading-relaxed italic">
                {t("nervous.journey.truth")}
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
      <section className="py-20 md:py-28 bg-beige/30">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("nervous.stuck.label")}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <p className="text-foreground/70 font-light">{t("nervous.stuck.point1")}</p>
                <p className="text-foreground/70 font-light">{t("nervous.stuck.point2")}</p>
              </div>
              <div className="space-y-4">
                <p className="text-foreground/70 font-light">{t("nervous.stuck.point3")}</p>
                <p className="text-foreground/70 font-light">{t("nervous.stuck.point4")}</p>
              </div>
            </div>
            <div className="border-l-2 border-foreground/20 pl-8">
              <p className="text-foreground font-medium mb-2">{t("nervous.stuck.truth1")}</p>
              <p className="text-foreground/70 font-light">{t("nervous.stuck.truth2")}</p>
            </div>
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
                  <p className="text-foreground/70 font-light text-lg ml-0 md:ml-24">
                    {step.intro}
                  </p>
                </div>

                {/* Points */}
                <div className="space-y-4 mb-8 ml-0 md:ml-24">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-foreground/60 mt-1 flex-shrink-0" strokeWidth={1.5} />
                      <p className="text-foreground/70 font-light">{point}</p>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div className="ml-0 md:ml-24 pt-6 border-t border-foreground/10">
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

      {/* Foundation section */}
      <section className="py-20 md:py-28 bg-beige/30">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("nervous.foundation.label")}
            </p>
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
              {t("nervous.foundation.text1")}
            </p>
            <p className="text-foreground/70 font-light text-lg leading-relaxed mb-8">
              {t("nervous.foundation.text2")}
            </p>
            <p className="text-foreground/70 font-light text-lg leading-relaxed italic">
              {t("nervous.foundation.text3")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What changes */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10 text-center">
              {t("nervous.changes.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {changes.map((change, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground/70 font-light">{change}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final truth */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
              {t("nervous.final1")}
            </p>
            <p className="text-foreground/70 font-light text-lg mb-10">
              {t("nervous.final2")}
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

      {/* Navigation - only previous since this is the last workshop */}
      <section className="py-16 md:py-20 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-8">
          <Link
            href="/workshops/heart"
            className="group inline-flex items-center gap-3 hover:opacity-60 transition-opacity duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
            <div className="text-left">
              <p className="text-foreground/60 font-light text-xs uppercase tracking-[0.2em]">{t("workshopDetails.prevWorkshop")}</p>
              <p className="font-serif font-medium text-foreground">{t("workshops.workshop3.title")}</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
