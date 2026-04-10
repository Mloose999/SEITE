"use client"

import { Leaf, HeartHandshake, Sun, Compass } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Leaf,
      title: t("services.belief.title"),
      description: t("services.belief.description")
    },
    {
      icon: HeartHandshake,
      title: t("services.emotional.title"),
      description: t("services.emotional.description")
    },
    {
      icon: Sun,
      title: t("services.manifestation.title"),
      description: t("services.manifestation.description")
    },
    {
      icon: Compass,
      title: t("services.spiritual.title"),
      description: t("services.spiritual.description")
    }
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left side - Sticky header */}
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">{t("services.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("services.description")}
            </p>
          </div>

          {/* Right side - Services list */}
          <div className="md:col-span-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group flex gap-6 p-6 bg-[#f5f5f3] hover:bg-secondary/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-card" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
