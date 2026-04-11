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

        {/* Featured Image with Quote - Split Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-28 grid md:grid-cols-2 gap-0"
        >
          {/* Quote Side */}
          <div className="bg-foreground p-10 md:p-16 flex items-center justify-center order-2 md:order-1">
            <p className="text-white font-serif text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed max-w-md text-center md:text-left">
              {t("philosophy.quote")}
            </p>
          </div>
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto order-1 md:order-2">
            <Image
              src="/images/transformation-journey.jpg"
              alt="Transformation journey - peaceful sunrise"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Two Column Layout with elegant centered lines */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {philosophyItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Number with centered lines */}
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="w-16 h-px bg-foreground/20" />
                <span className="font-serif text-6xl md:text-7xl font-light text-foreground/15 leading-none select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-16 h-px bg-foreground/20" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-5 text-balance leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light max-w-md mx-auto">
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
