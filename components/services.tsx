"use client"

import { Leaf, HeartHandshake, Sun, Compass } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Leaf,
      title: t("services.belief.title"),
      description: t("services.belief.description"),
      number: "01"
    },
    {
      icon: HeartHandshake,
      title: t("services.emotional.title"),
      description: t("services.emotional.description"),
      number: "02"
    },
    {
      icon: Sun,
      title: t("services.manifestation.title"),
      description: t("services.manifestation.description"),
      number: "03"
    },
    {
      icon: Compass,
      title: t("services.spiritual.title"),
      description: t("services.spiritual.description"),
      number: "04"
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
            {t("services.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-2xl p-8 md:p-10 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Number Badge */}
              <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-500">
                {service.number}
              </span>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent/0 group-hover:bg-accent/30 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
