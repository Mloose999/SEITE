"use client"

import { Leaf, HeartHandshake, Sun, Compass } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Leaf,
      title: t("services.belief.title"),
      description: t("services.belief.description"),
    },
    {
      icon: HeartHandshake,
      title: t("services.emotional.title"),
      description: t("services.emotional.description"),
    },
    {
      icon: Sun,
      title: t("services.manifestation.title"),
      description: t("services.manifestation.description"),
    },
    {
      icon: Compass,
      title: t("services.spiritual.title"),
      description: t("services.spiritual.description"),
    }
  ]

  return (
    <section id="services" className="py-28 md:py-40 bg-beige-light">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <p className="text-foreground/50 font-light tracking-[0.3em] uppercase text-xs mb-6">
            {t("services.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg font-light">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Services - Elegant 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon with elegant styling */}
              <div className="w-16 h-16 border border-foreground/10 flex items-center justify-center mb-7 transition-all duration-500 group-hover:border-foreground/30">
                <service.icon className="w-7 h-7 text-foreground/40 group-hover:text-foreground/60 transition-colors duration-500" strokeWidth={1} />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
