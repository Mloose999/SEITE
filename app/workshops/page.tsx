"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Brain, Flame, Sparkles, Heart, Check, Clock, FileText, Video } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export default function WorkshopsPage() {
  const { t } = useLanguage()

  const workshops = [
    {
      id: "mindset",
      icon: Sparkles,
      title: t("workshopDetails.mindset.title"),
      subtitle: t("workshopDetails.mindset.subtitle"),
      description: t("workshopDetails.mindset.description"),
      points: [
        t("workshopDetails.mindset.point1"),
        t("workshopDetails.mindset.point2"),
        t("workshopDetails.mindset.point3"),
        t("workshopDetails.mindset.point4"),
      ],
      image: "/images/workshop-mindset.jpg"
    },
    {
      id: "patterns",
      icon: Brain,
      title: t("workshopDetails.patterns.title"),
      subtitle: t("workshopDetails.patterns.subtitle"),
      description: t("workshopDetails.patterns.description"),
      points: [
        t("workshopDetails.patterns.point1"),
        t("workshopDetails.patterns.point2"),
        t("workshopDetails.patterns.point3"),
        t("workshopDetails.patterns.point4"),
      ],
      image: "/images/workshop-patterns.jpg"
    },
    {
      id: "heart",
      icon: Heart,
      title: t("workshopDetails.heart.title"),
      subtitle: t("workshopDetails.heart.subtitle"),
      description: t("workshopDetails.heart.description"),
      points: [
        t("workshopDetails.heart.point1"),
        t("workshopDetails.heart.point2"),
        t("workshopDetails.heart.point3"),
        t("workshopDetails.heart.point4"),
      ],
      image: "/images/workshop-heart.jpg"
    },
    {
      id: "nervous",
      icon: Flame,
      title: t("workshopDetails.nervous.title"),
      subtitle: t("workshopDetails.nervous.subtitle"),
      description: t("workshopDetails.nervous.description"),
      points: [
        t("workshopDetails.nervous.point1"),
        t("workshopDetails.nervous.point2"),
        t("workshopDetails.nervous.point3"),
        t("workshopDetails.nervous.point4"),
      ],
      image: "/images/workshop-nervous-new.jpg"
    }
  ]

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-8">
          <Link 
            href="/#workshops" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("workshopDetails.back")}
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-foreground/60 font-light tracking-[0.3em] uppercase text-xs mb-6">
              {t("workshopDetails.label")}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 leading-tight">
              {t("workshopDetails.title")}
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed font-light">
              {t("workshopDetails.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-32">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/5] overflow-hidden rounded-t-full ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}>
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center">
                      <workshop.icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                    </div>
                    <span className="text-foreground/50 font-light text-sm tracking-wider uppercase">
                      {t("workshopDetails.workshop")} {index + 1}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-3 leading-tight">
                    {workshop.title}
                  </h2>
                  
                  <p className="text-foreground/60 font-light italic mb-6">
                    {workshop.subtitle}
                  </p>
                  
                  <p className="text-foreground/70 leading-relaxed font-light mb-8">
                    {workshop.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-foreground font-medium text-sm uppercase tracking-wide mb-4">
                      {t("workshopDetails.whatYouLearn")}
                    </p>
                    {workshop.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-5 h-5 border border-foreground/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-foreground" />
                        </div>
                        <span className="text-foreground/70 font-light">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-beige/30">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              {t("workshopDetails.included.title")}
            </h2>
            <p className="text-foreground/70 font-light max-w-2xl mx-auto">
              {t("workshopDetails.included.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Video, title: t("workshopDetails.included.video"), desc: t("workshopDetails.included.videoDesc") },
              { icon: FileText, title: t("workshopDetails.included.workbook"), desc: t("workshopDetails.included.workbookDesc") },
              { icon: Clock, title: t("workshopDetails.included.lifetime"), desc: t("workshopDetails.included.lifetimeDesc") },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Individual */}
            <div className="p-10 border border-foreground/10 bg-white">
              <p className="text-foreground/60 font-light tracking-[0.2em] uppercase text-xs mb-4">
                {t("workshopDetails.pricing.individual")}
              </p>
              <p className="font-serif text-5xl font-medium text-foreground mb-4">59 €</p>
              <p className="text-foreground/60 font-light">{t("workshopDetails.pricing.perWorkshop")}</p>
            </div>

            {/* Bundle */}
            <div className="p-10 border border-foreground bg-foreground text-background relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-background text-foreground text-xs font-medium px-3 py-1">
                {t("workshopDetails.pricing.bestValue")}
              </div>
              <p className="text-background/60 font-light tracking-[0.2em] uppercase text-xs mb-4">
                {t("workshopDetails.pricing.fullProgram")}
              </p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-background/50 line-through text-xl">236 €</span>
                <span className="font-serif text-5xl font-medium text-background">199 €</span>
              </div>
              <p className="text-background/60 font-light mb-8">{t("workshopDetails.pricing.allFour")}</p>
              <Link
                href="/#contact"
                className="inline-block w-full text-center py-4 bg-background text-foreground font-medium hover:bg-background/90 transition-all duration-300"
              >
                {t("workshopDetails.pricing.getBundle")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
