"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

export default function ImpressumPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12">
              {t("impressum.title")}
            </h1>

            <div className="space-y-10 text-foreground/80 leading-relaxed">
              {/* Responsible */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("impressum.responsible")}
                </h2>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Linda Holtkamp</p>
                  <p>Reemstuckenkamp 22 c</p>
                  <p>22523 Hamburg</p>
                  <p>Deutschland</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("impressum.contact")}
                </h2>
                <div className="space-y-1">
                  <p>
                    Telefon:{" "}
                    <a href="tel:+491715812251" className="text-foreground hover:underline">
                      +49 171 5812251
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:info@lindaholtkamp.de" className="text-foreground hover:underline">
                      info@lindaholtkamp.de
                    </a>
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("impressum.disclaimer.title")}
                </h2>
                <p className="mb-4">{t("impressum.disclaimer.content")}</p>
                <p>{t("impressum.disclaimer.links")}</p>
              </div>

              {/* Copyright */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {t("impressum.copyright.title")}
                </h2>
                <p>{t("impressum.copyright.content")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
