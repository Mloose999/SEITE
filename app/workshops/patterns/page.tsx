"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

export default function PatternsPage() {
  const { t } = useLanguage()

  const parts = [
    {
      number: 1,
      title: t("patterns.part1.title"),
      intro: t("patterns.part1.intro"),
      points: [
        t("patterns.part1.point1"),
        t("patterns.part1.point2"),
        t("patterns.part1.point3")
      ],
      outcome: t("patterns.part1.outcome")
    },
    {
      number: 2,
      title: t("patterns.part2.title"),
      intro: t("patterns.part2.intro"),
      points: [
        t("patterns.part2.point1"),
        t("patterns.part2.point2"),
        t("patterns.part2.point3"),
        t("patterns.part2.point4")
      ],
      outcome: t("patterns.part2.outcome")
    },
    {
      number: 3,
      title: t("patterns.part3.title"),
      intro: t("patterns.part3.intro"),
      points: [
        t("patterns.part3.point1"),
        t("patterns.part3.point2"),
        t("patterns.part3.point3")
      ],
      outcome: t("patterns.part3.outcome")
    },
    {
      number: 4,
      title: t("patterns.part4.title"),
      intro: t("patterns.part4.intro"),
      points: [
        t("patterns.part4.point1"),
        t("patterns.part4.point2"),
        t("patterns.part4.point3")
      ],
      outcome: t("patterns.part4.outcome")
    },
    {
      number: 5,
      title: t("patterns.part5.title"),
      intro: t("patterns.part5.intro"),
      points: [
        t("patterns.part5.point1"),
        t("patterns.part5.point2"),
        t("patterns.part5.point3")
      ],
      outcome: t("patterns.part5.outcome")
    }
  ]

  const included = [
    t("patterns.included1"),
    t("patterns.included2"),
    t("patterns.included3"),
    t("patterns.included4")
  ]

  const valuable = [
    t("patterns.valuable1"),
    t("patterns.valuable2"),
    t("patterns.valuable3"),
    t("patterns.valuable4")
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero with background image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/workshop-patterns-bg.jpg"
          alt="Breaking Repeating Patterns"
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
              {t("patterns.label")}
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
              {t("patterns.title")}
            </h1>
            <p className="font-light text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t("patterns.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price - Elegant inline section */}
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
                {t("patterns.journey.label")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
                {t("patterns.journey.title")}
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed">
                {t("patterns.journey.description")}
              </p>
            </div>

            {/* Price */}
            <div className="md:flex-shrink-0 md:pl-8">
              <p className="text-foreground/50 font-light text-sm mb-2 tracking-[0.2em] uppercase">{t("transformation.investment")}</p>
              <p className="font-serif text-5xl md:text-6xl font-medium text-foreground">59 €</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parts */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-24 md:space-y-32">
            {parts.map((part, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Part number and title */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-foreground/40 font-serif text-5xl md:text-6xl font-light">{String(part.number).padStart(2, '0')}</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                      {part.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 font-light text-lg ml-24">
                    {part.intro}
                  </p>
                </div>

                {/* Points */}
                <div className="space-y-4 mb-8 ml-24">
                  {part.points.map((point, i) => (
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
                  <p className="font-light text-foreground italic">"{part.outcome}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Two column */}
      <section className="py-20 md:py-28 bg-foreground/3">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Included */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
                {t("patterns.included.title")}
              </h3>
              <div className="space-y-5">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground/70 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valuable */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
                {t("patterns.valuable.label")}
              </h3>
              <div className="space-y-5">
                {valuable.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground/70 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridge to Premium */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
              {t("patterns.bridge")}
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-4 border border-foreground text-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              {t("transformation.cta")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-20 border-t border-foreground/10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-8">
            <Link
              href="/workshops/mindset"
              className="group flex items-center gap-3 p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
              <div className="text-left">
                <p className="text-foreground/60 font-light text-xs uppercase tracking-[0.2em]">{t("workshopDetails.prevWorkshop")}</p>
                <p className="font-serif font-medium text-foreground">{t("workshops.workshop1.title")}</p>
              </div>
            </Link>

            <Link
              href="/workshops/heart"
              className="group flex items-center gap-3 p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300 justify-end text-right"
            >
              <div className="text-right">
                <p className="text-foreground/60 font-light text-xs uppercase tracking-[0.2em]">{t("workshopDetails.nextWorkshop")}</p>
                <p className="font-serif font-medium text-foreground">{t("workshops.workshop3.title")}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
