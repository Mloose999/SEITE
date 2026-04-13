"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clock, FileText, Video } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

interface WorkshopDetailPageProps {
  workshopKey: "mindset" | "patterns" | "heart" | "nervous"
  image: string
  prevSlug?: string
  nextSlug?: string
}

export function WorkshopDetailPage({ workshopKey, image, prevSlug, nextSlug }: WorkshopDetailPageProps) {
  const { t } = useLanguage()

  const k = `workshopDetails.${workshopKey}`

  const points = [
    t(`${k}.point1`),
    t(`${k}.point2`),
    t(`${k}.point3`),
    t(`${k}.point4`),
  ]

  const included = [
    { icon: Video, title: t("workshopDetails.included.video"), desc: t("workshopDetails.included.videoDesc") },
    { icon: FileText, title: t("workshopDetails.included.workbook"), desc: t("workshopDetails.included.workbookDesc") },
    { icon: Clock, title: t("workshopDetails.included.lifetime"), desc: t("workshopDetails.included.lifetimeDesc") },
  ]

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-0">
        <div className="max-w-7xl mx-auto px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("workshopDetails.back")}
          </Link>

          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-end pb-20 md:pb-32">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
                {t("workshopDetails.label")}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                {t(`${k}.title`)}
              </h1>
              <p className="text-foreground/60 font-light italic text-lg mb-8">
                {t(`${k}.subtitle`)}
              </p>
              <p className="text-foreground/70 leading-relaxed font-light text-lg">
                {t(`${k}.description`)}
              </p>
            </motion.div>

            {/* Image – arch shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative aspect-[3/4] overflow-hidden rounded-t-full"
            >
              <Image src={image} alt={t(`${k}.title`)} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className="py-20 md:py-28 bg-beige/30">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-foreground font-medium text-sm uppercase tracking-widest mb-10">
              {t("workshopDetails.whatYouLearn")}
            </p>
            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="w-5 h-5 border border-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <span className="text-foreground/80 font-light text-lg leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              {t("workshopDetails.included.title")}
            </h2>
            <p className="text-foreground/70 font-light max-w-xl mx-auto">
              {t("workshopDetails.included.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8 border border-foreground/8"
              >
                <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 md:py-28 bg-beige/30">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Single */}
            <div className="p-10 border border-foreground/10 bg-background">
              <p className="text-foreground/60 font-light tracking-[0.2em] uppercase text-xs mb-4">
                {t("workshopDetails.pricing.individual")}
              </p>
              <p className="font-serif text-3xl font-medium text-foreground">59 €</p>
            </div>

            {/* Bundle */}
            <div className="p-10 border border-foreground bg-foreground text-background relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-background text-foreground text-xs font-medium px-3 py-1">
                {t("workshopDetails.pricing.bestValue")}
              </div>
              <p className="text-background/60 font-light tracking-[0.2em] uppercase text-xs mb-4">
                {t("workshopDetails.pricing.fullProgram")}
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-background/50 line-through text-lg">236 €</span>
                <span className="font-serif text-3xl font-medium text-background">199 €</span>
              </div>
              <p className="text-background/60 font-light">{t("workshopDetails.pricing.allFour")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Coaching CTA */}
      <section className="py-14 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-foreground/50 font-light text-sm mb-1">
              {t("workshopDetails.premium.label")}
            </p>
            <p className="text-foreground font-light">
              {t("workshopDetails.premium.title")}
            </p>
          </div>
          <Link
            href="/transformation-coaching"
            className="flex-shrink-0 inline-flex items-center gap-3 border border-foreground px-8 py-3 text-sm font-medium tracking-wide text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {t("workshopDetails.premium.cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prevSlug || nextSlug) && (
        <section className="py-16 border-t border-foreground/10">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
            {prevSlug ? (
              <Link
                href={`/workshops/${prevSlug}`}
                className="inline-flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("workshopDetails.prevWorkshop")}
              </Link>
            ) : <span />}

            {nextSlug ? (
              <Link
                href={`/workshops/${nextSlug}`}
                className="inline-flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                {t("workshopDetails.nextWorkshop")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <span />}
          </div>
        </section>
      )}
    </main>
  )
}
