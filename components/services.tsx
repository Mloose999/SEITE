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

        {/* Services - Elegant Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative overflow-hidden ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
            >
              {/* Card with hover effect */}
              <div className="bg-white p-8 md:p-10 h-full transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                {/* Number */}
                <span className="font-serif text-5xl font-light text-foreground/10 block mb-6">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-beige flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-accent">
                  <service.icon className="w-6 h-6 text-foreground/60 group-hover:text-foreground transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
