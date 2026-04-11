"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { SignatureUnderline } from "./signature-underline"

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
    <section id="philosophy" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">{t("philosophy.label")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-balance mb-2">
            {t("philosophy.title")}
          </h2>
          <SignatureUnderline className="mx-auto" />
        </div>

        {/* Featured Image with Quote */}
        <div className="relative mb-20">
          <div className="relative overflow-hidden aspect-square md:aspect-[4/3]">
            <Image
              src="/images/hourglass.jpg"
              alt="Transformation takes time - hourglass symbolizing the journey"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-card font-serif text-lg md:text-xl lg:text-2xl font-medium italic max-w-xl">
                {t("philosophy.quote")}
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout with Large Numbers */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {philosophyItems.map((item, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Large decorative number */}
              <span className="absolute -top-8 -left-2 md:-top-12 md:-left-4 font-serif text-[120px] md:text-[180px] font-bold text-foreground/5 leading-none select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              {/* Content */}
              <div className="relative pt-8">
                <div className="w-12 h-[2px] bg-foreground/30 mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
