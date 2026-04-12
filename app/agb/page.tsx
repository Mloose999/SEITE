"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion } from "framer-motion"

export default function AGBPage() {
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
              {t("agb.title")}
            </h1>

            <div className="space-y-10 text-foreground/80 leading-relaxed">
              {/* Scope */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  1. {t("agb.scope.title")}
                </h2>
                <p>{t("agb.scope.content")}</p>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  2. {t("agb.services.title")}
                </h2>
                <p>{t("agb.services.content")}</p>
              </div>

              {/* Booking */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  3. {t("agb.booking.title")}
                </h2>
                <p>{t("agb.booking.content")}</p>
              </div>

              {/* Cancellation */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  4. {t("agb.cancellation.title")}
                </h2>
                <p>{t("agb.cancellation.content")}</p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  5. {t("agb.confidentiality.title")}
                </h2>
                <p>{t("agb.confidentiality.content")}</p>
              </div>

              {/* Liability */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  6. {t("agb.liability.title")}
                </h2>
                <p>{t("agb.liability.content")}</p>
              </div>

              {/* Final Provisions */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  7. {t("agb.final.title")}
                </h2>
                <p>{t("agb.final.content")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
