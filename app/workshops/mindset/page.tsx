"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

export default function MindsetPage() {
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      title: t("mindset.step1.title"),
      intro: t("mindset.step1.intro"),
      points: [t("mindset.step1.point1"), t("mindset.step1.point2"), t("mindset.step1.point3")],
      outcome: t("mindset.step1.outcome"),
    },
    {
      number: "02",
      title: t("mindset.step2.title"),
      intro: t("mindset.step2.intro"),
      points: [t("mindset.step2.point1"), t("mindset.step2.point2"), t("mindset.step2.point3")],
      outcome: t("mindset.step2.outcome"),
    },
    {
      number: "03",
      title: t("mindset.step3.title"),
      intro: t("mindset.step3.intro"),
      points: [t("mindset.step3.point1"), t("mindset.step3.point2"), t("mindset.step3.point3")],
      outcome: t("mindset.step3.outcome"),
    },
    {
      number: "04",
      title: t("mindset.step4.title"),
      intro: t("mindset.step4.intro"),
      points: [t("mindset.step4.point1"), t("mindset.step4.point2"), t("mindset.step4.point3")],
      outcome: t("mindset.step4.outcome"),
    },
  ]

  const included = [
    t("mindset.included1"),
    t("mindset.included2"),
    t("mindset.included3"),
    t("mindset.included4"),
  ]

  const valuable = [
    t("mindset.valuable1"),
    t("mindset.valuable2"),
    t("mindset.valuable3"),
    t("mindset.valuable4"),
  ]

  return (
    <main className="bg-background min-h-screen">

      {/* Language Toggle - Fixed top right */}
      <div className="fixed top-6 right-8 z-50">
        <LanguageToggle isScrolled={true} />
      </div>

      {/* Hero – full-width background image */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/workshop-mindset-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-20 md:pb-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("workshopDetails.back")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-white/60 font-light tracking-[0.3em] uppercase text-xs mb-5">
              {t("workshopDetails.label")}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 text-balance">
              {t("workshopDetails.mindset.title")}
            </h1>
            <p className="text-white/70 font-light text-lg max-w-2xl leading-relaxed">
              {t("workshopDetails.mindset.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price - Elegant inline with journey intro */}
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
                {t("mindset.journey.label")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 leading-tight">
                {t("mindset.journey.title")}
              </h2>
              <p className="text-foreground/70 font-light text-lg leading-relaxed">
                {t("mindset.journey.description")}
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

      {/* Steps */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-8 space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="border-t border-foreground/10 py-14 grid md:grid-cols-[120px_1fr] gap-8 md:gap-12"
            >
              {/* Step number only */}
              <div>
                <span className="font-serif text-5xl font-medium text-foreground/15 leading-none">{step.number}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-foreground/70 font-light mb-6 leading-relaxed">{step.intro}</p>
                <div className="space-y-3 mb-7">
                  {step.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className="w-4 h-4 border border-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-foreground" />
                      </div>
                      <span className="text-foreground/75 font-light leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/60 font-light italic border-l-2 border-foreground/20 pl-4">
                  {step.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's included & What makes it valuable – side by side */}
      <section className="py-20 md:py-28 bg-beige/20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("workshopDetails.included.title")}
            </p>
            <div className="space-y-5">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-4 h-4 border border-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-foreground" />
                  </div>
                  <span className="text-foreground/75 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What makes it valuable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("mindset.valuable.label")}
            </p>
            <div className="space-y-5">
              {valuable.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-4 h-4 border border-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-foreground" />
                  </div>
                  <span className="text-foreground/75 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final note and CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-10">
              {t("mindset.finalNote")}
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

      {/* Next workshop */}
      <section className="py-12 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-8 flex justify-end">
          <Link
            href="/workshops/patterns"
            className="inline-flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors duration-300"
          >
            {t("workshopDetails.nextWorkshop")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
