"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="pt-28 md:pt-40 pb-0 bg-background">
      <div className="max-w-7xl mx-auto px-8 pb-28 md:pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-6">{t("about.label")}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image with elegant treatment */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden w-full relative">
              <Image
                src="/images/about-portrait.jpg"
                alt="Linda Holtkamp - Mindset Coach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Content with refined typography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed font-light"
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
            <p>{t("about.p5")}</p>
            <p>{t("about.p6")}</p>
            <p>{t("about.p7")}</p>
            <div className="relative my-16 py-12">
              <div className="absolute left-0 top-0 w-12 h-px bg-foreground/20" />
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground font-medium text-center relative z-10 px-8 leading-snug">
                {t("about.highlight")}
              </p>
              <div className="absolute right-0 bottom-0 w-12 h-px bg-foreground/20" />
            </div>
            <p>{t("about.p8")}</p>
            <p>{t("about.p9")}</p>
            <p>{t("about.p10")}</p>
            <p>{t("about.p11")}</p>
            <p className="font-serif text-lg text-foreground font-medium pt-4">
              {t("about.closing")}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Transition gradient to booking section */}
      <div className="h-32 md:h-48 bg-gradient-to-b from-background via-background/50 to-beige-light" />
    </section>
  )
}
