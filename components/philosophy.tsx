"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Philosophy() {
  const { t } = useLanguage()

  const philosophyItems = [
    {
      title: t("philosophy.item1.title"),
      description: t("philosophy.item1.description")
    },
    {
      title: t("philosophy.item2.title"),
      description: t("philosophy.item2.description")
    }
  ]

  return (
    <section id="philosophy" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-6">{t("philosophy.label")}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-balance leading-tight">
            {t("philosophy.title")}
          </h2>
        </motion.div>

        {/* Featured Image with Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-24"
        >
          <div className="relative overflow-hidden aspect-square md:aspect-[16/9]">
            <Image
              src="/images/hourglass.jpg"
              alt="Transformation takes time - hourglass symbolizing the journey"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
              <p className="text-white font-serif text-xl md:text-2xl lg:text-3xl font-light italic max-w-2xl leading-relaxed">
                {t("philosophy.quote")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout with elegant numbers */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {philosophyItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Elegant number styling */}
              <span className="font-serif text-8xl md:text-9xl font-light text-foreground/5 leading-none select-none pointer-events-none mb-6 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              {/* Content */}
              <div className="relative -mt-12">
                <div className="w-16 h-px bg-foreground/20 mb-8" />
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-5 text-balance leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
