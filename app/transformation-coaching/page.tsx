"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

export default function TransformationCoachingPage() {
  const { t } = useLanguage()

  const phases = [
    {
      number: "01",
      title: t("transformation.phase1.title"),
      intro: t("transformation.phase1.description"),
      points: [
        t("transformation.phase1.point1"),
        t("transformation.phase1.point2"),
        t("transformation.phase1.point3"),
      ],
      outcome: t("transformation.phase1.outcome"),
    },
    {
      number: "02",
      title: t("transformation.phase2.title"),
      intro: t("transformation.phase2.description"),
      points: [
        t("transformation.phase2.point1"),
        t("transformation.phase2.point2"),
        t("transformation.phase2.point3"),
      ],
      outcome: t("transformation.phase2.outcome"),
    },
    {
      number: "03",
      title: t("transformation.phase3.title"),
      intro: t("transformation.phase3.description"),
      points: [
        t("transformation.phase3.point1"),
        t("transformation.phase3.point2"),
        t("transformation.phase3.point3"),
      ],
      outcome: t("transformation.phase3.outcome"),
    },
    {
      number: "04",
      title: t("transformation.phase4.title"),
      intro: t("transformation.phase4.description"),
      points: [
        t("transformation.phase4.point1"),
        t("transformation.phase4.point2"),
        t("transformation.phase4.point3"),
      ],
      outcome: t("transformation.phase4.outcome"),
    },
  ]

  const support = [
    { title: t("transformation.support.sessions"), description: t("transformation.support.sessionsDesc") },
    { title: t("transformation.support.emails"), description: t("transformation.support.emailsDesc") },
    { title: t("transformation.support.whatsapp"), description: t("transformation.support.whatsappDesc") },
    { title: t("transformation.support.emailSupport"), description: t("transformation.support.emailSupportDesc") },
  ]

  const differentiators = [
    t("transformation.different.point1"),
    t("transformation.different.point2"),
    t("transformation.different.point3"),
    t("transformation.different.point4"),
    t("transformation.different.point5"),
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
          src="/images/transformation-coaching-bg.jpg"
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
              {t("transformation.label")}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 text-balance">
              {t("transformation.title")}
            </h1>
            <p className="text-white/70 font-light text-lg max-w-2xl leading-relaxed">
              {t("transformation.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="bg-beige/30 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            
            {/* Left Column - Journey Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-6">
                {t("transformation.journey.title")}
              </p>
              <p className="text-foreground/70 font-light leading-relaxed text-base mb-10">
                {t("transformation.journey.description")}
              </p>
              
              <ul className="space-y-4 mt-auto">
                {[
                  t("transformation.different.point1"),
                  t("transformation.different.point2"),
                  t("transformation.different.point3"),
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/60 font-light text-sm">
                    <Check className="w-4 h-4 text-foreground/40 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - Price Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-background border border-foreground/10 p-10 md:p-12 flex flex-col"
            >
              <p className="text-foreground/40 font-light text-xs tracking-[0.25em] uppercase mb-6">
                {t("transformation.investment")}
              </p>
              <p className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
                {t("transformation.price")}
              </p>
              
              <div className="border-t border-foreground/10 pt-8 mt-auto">
                <p className="text-foreground/50 font-light text-sm mb-6">
                  {t("transformation.journey.description")}
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-8 py-4 bg-foreground text-background font-medium text-sm tracking-[0.1em] uppercase hover:bg-foreground/80 transition-all duration-300"
                >
                  {t("workshops.contactCta")}
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-16 text-center"
          >
            {t("mindset.stepLabel")}
          </motion.p>

          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-t border-foreground/10 py-16"
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-8">
                <div className="font-serif text-6xl font-light text-foreground/20">
                  {phase.number}
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-foreground/60 font-light leading-relaxed mb-8 max-w-xl">
                    {phase.intro}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {phase.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-foreground/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-foreground/70 font-light">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-foreground/50 font-light text-sm italic border-l-2 border-foreground/10 pl-4">
                    {phase.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Structure */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/support-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("transformation.support.title")}
            </p>
            <p className="text-foreground/70 font-light max-w-2xl text-lg leading-relaxed">
              {t("transformation.support.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-px bg-foreground/10">
            {support.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background/80 backdrop-blur-sm p-8 md:p-10 group hover:bg-background transition-all duration-500"
              >
                <span className="text-foreground/20 font-serif text-4xl font-light block mb-6">
                  0{index + 1}
                </span>
                <h4 className="font-medium text-foreground mb-4 text-lg">{item.title}</h4>
                <p className="text-foreground/60 font-light text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-10 text-center">
              {t("transformation.different.title")}
            </p>

            <div className="max-w-2xl mx-auto space-y-4">
              {differentiators.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Check className="w-5 h-5 text-foreground/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground/70 font-light">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Note and CTA */}
      <section className="py-20 md:py-28 bg-[#f8f6f3]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-4">
              {t("transformation.finalNote")}
            </p>
            <p className="text-foreground/60 font-light mb-10">
              {t("transformation.finalNote2")}
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
    </main>
  )
}
