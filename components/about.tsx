"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">{t("about.label")}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden w-full relative">
              <Image
                src="/images/coach.jpg"
                alt="Linda Holtkamp - Mindset Coach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t("about.p1")}</p>
            <p className="font-serif text-xl text-accent font-medium">
              {t("about.highlight")}
            </p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
            <p>{t("about.p5")}</p>
            <p>{t("about.p6")}</p>
            <p className="font-serif text-lg text-foreground">
              {t("about.mission")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
