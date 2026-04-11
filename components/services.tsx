"use client"

import { Leaf, HeartHandshake, Sun, Compass } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SignatureUnderline } from "./signature-underline"

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
    <section id="services" className="py-24 md:py-32 bg-beige-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-foreground/70 font-semibold tracking-widest uppercase text-sm mb-4">
            {t("services.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            {t("services.title")}
          </h2>
          <SignatureUnderline className="mx-auto mb-6" />
          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </div>

        {/* Services - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <service.icon className="w-10 h-10 text-foreground/50 mb-5" strokeWidth={1.2} />
              
              {/* Content */}
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
