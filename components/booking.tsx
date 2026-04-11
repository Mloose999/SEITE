"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Booking() {
  const { t } = useLanguage()

  return (
    <section id="booking" className="py-24 md:py-32 bg-beige-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 max-w-md mx-auto lg:mx-0 flex-shrink-0">
            <div className="relative">
              <Image
                src="/images/book.jpg"
                alt="Book a coaching session"
                width={400}
                height={400}
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
            </div>
          </div>
          
          {/* Text Box - slightly overlapping the image on desktop */}
          <div className="relative w-full lg:w-1/2 lg:-ml-12 z-20">
            <div className="bg-[#f5f5f3] p-8 md:p-12 text-center lg:text-left shadow-lg">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                {t("booking.title")}
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {t("booking.description")}
              </p>
              
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                >
                  {t("booking.cta")}
                </Button>
              </Link>

              <p className="mt-8 text-muted-foreground text-sm">
                {t("booking.info")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
