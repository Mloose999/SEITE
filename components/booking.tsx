"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Booking() {
  const { t } = useLanguage()

  return (
    <section id="booking" className="pt-28 md:pt-40 pb-0 bg-beige-light">
      <div className="max-w-7xl mx-auto px-8 pb-28 md:pb-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Image with elegant treatment */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="relative">
              <Image
                src="/images/book.jpg"
                alt="Book a coaching session"
                width={500}
                height={500}
                className="object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>
          </motion.div>
          
          {/* Text Box - elegant overlapping design */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full lg:w-1/2 lg:-ml-16 z-20"
          >
            <div className="bg-white p-10 md:p-14 lg:p-16 text-center lg:text-left shadow-xl">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
                {t("booking.title")}
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 font-light">
                {t("booking.description")}
              </p>
              
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-foreground text-white hover:bg-foreground/80 px-12 py-7 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500"
                >
                  {t("booking.cta")}
                </Button>
              </Link>

              <p className="mt-10 text-muted-foreground text-sm font-light">
                {t("booking.info")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Transition gradient to newsletter section */}
      <div className="h-32 md:h-48 bg-gradient-to-b from-beige-light via-beige-light/50 to-accent" />
    </section>
  )
}
