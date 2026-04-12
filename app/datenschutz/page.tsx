"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

export default function DatenschutzPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-foreground/70 hover:text-foreground hover:bg-accent/20 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("legal.backHome")}
            </Button>
          </Link>
          <LanguageToggle isScrolled={true} />
        </div>
      </header>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              {t("datenschutz.title")}
            </h1>

            <p className="text-foreground/80 leading-relaxed mb-12">
              {t("datenschutz.intro")}
            </p>

            <div className="space-y-10 text-foreground/80 leading-relaxed">
              {/* Data Collection */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("datenschutz.collection.title")}
                </h2>
                <p>{t("datenschutz.collection.content")}</p>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("datenschutz.contact.title")}
                </h2>
                <p>{t("datenschutz.contact.content")}</p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("datenschutz.cookies.title")}
                </h2>
                <p>{t("datenschutz.cookies.content")}</p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("datenschutz.rights.title")}
                </h2>
                <p>{t("datenschutz.rights.content")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
