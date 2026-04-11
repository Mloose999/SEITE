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

        {/* Services - Elegant Overlapping Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white p-10 md:p-12 transition-all duration-500 group-hover:shadow-2xl">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/30 to-transparent" />
                
                {/* Icon with circle background */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-beige to-accent/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-foreground/70" strokeWidth={1.2} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Subtle bottom border on hover */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
