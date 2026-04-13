"use client"

import Link from "next/link"
import { ArrowLeft, Check, Video, Mail, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

export default function TransformationCoachingPage() {
  const { t } = useLanguage()

  const phases = [
    {
      number: "01",
      title: t("transformation.phase1.title"),
      description: t("transformation.phase1.description"),
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
      description: t("transformation.phase2.description"),
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
      description: t("transformation.phase3.description"),
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
      description: t("transformation.phase4.description"),
      points: [
        t("transformation.phase4.point1"),
        t("transformation.phase4.point2"),
        t("transformation.phase4.point3"),
      ],
      outcome: t("transformation.phase4.outcome"),
    },
  ]

  const supportFeatures = [
    { icon: Video, title: t("transformation.support.sessions"), description: t("transformation.support.sessionsDesc") },
    { icon: Mail, title: t("transformation.support.emails"), description: t("transformation.support.emailsDesc") },
    { icon: MessageCircle, title: t("transformation.support.whatsapp"), description: t("transformation.support.whatsappDesc") },
    { icon: Phone, title: t("transformation.support.emailSupport"), description: t("transformation.support.emailSupportDesc") },
  ]

  const differentiators = [
    t("transformation.different.point1"),
    t("transformation.different.point2"),
    t("transformation.different.point3"),
    t("transformation.different.point4"),
    t("transformation.different.point5"),
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/#workshops">
            <Button variant="ghost" className="text-foreground/70 hover:text-foreground hover:bg-accent/20 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("legal.backHome")}
            </Button>
          </Link>
          <LanguageToggle isScrolled={true} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("transformation.label")}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 text-balance leading-tight">
              {t("transformation.title")}
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10">
              {t("transformation.description")}
            </p>
            
            {/* Investment */}
            <div className="inline-block bg-foreground/5 border border-foreground/10 px-8 py-6 rounded-sm">
              <p className="text-foreground/60 text-sm font-light mb-2">{t("transformation.investment")}</p>
              <p className="font-serif text-4xl font-medium text-foreground">
                {t("transformation.price")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              {t("transformation.journey.title")}
            </h2>
            <p className="text-foreground/70 font-light max-w-xl mx-auto">
              {t("transformation.journey.description")}
            </p>
          </motion.div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Phase Number */}
                <div className="flex items-start gap-8">
                  <div className="hidden md:flex w-20 h-20 border border-foreground/20 items-center justify-center font-serif text-2xl font-medium text-foreground/40 shrink-0">
                    {phase.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="md:hidden text-foreground/40 font-serif text-lg mb-2">Phase {phase.number}</div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-foreground/70 font-light mb-6">
                      {phase.description}
                    </p>
                    
                    {/* Points */}
                    <ul className="space-y-3 mb-6">
                      {phase.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <Check className="w-5 h-5 text-foreground/40 mt-0.5 shrink-0" strokeWidth={1.5} />
                          <span className="font-light">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Outcome */}
                    <div className="bg-foreground/5 border-l-2 border-foreground/20 pl-4 py-2">
                      <p className="text-foreground/60 text-sm font-light italic">
                        {phase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 w-px h-16 bg-foreground/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Structure */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              {t("transformation.support.title")}
            </h2>
            <p className="text-foreground/70 font-light max-w-xl mx-auto">
              {t("transformation.support.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 bg-background border border-foreground/10"
              >
                <feature.icon className="w-6 h-6 text-foreground/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-10 text-center">
              {t("transformation.different.title")}
            </h2>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {differentiators.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 border border-foreground/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-foreground/80 font-light">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              {t("transformation.finalNote")}
            </p>
            <p className="text-foreground/60 font-light">
              {t("transformation.finalNote2")}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
