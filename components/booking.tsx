"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
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
                Book a Session
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Start your transformation today. Book a 1:1 coaching session and take the first step 
                toward a life of clarity, strength, and purpose.
              </p>
              
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Button>
              </Link>

              <p className="mt-8 text-muted-foreground text-sm">
                Fill out the contact form and Linda will get back to you to schedule your session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
