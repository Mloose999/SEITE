"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Mail className="w-14 h-14 text-accent mx-auto mb-8" strokeWidth={1.5} />
        
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Stay Connected
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Join the newsletter and receive insights, inspiration, and tools to strengthen your mindset 
          and elevate your life.
        </p>

        {isSubmitted ? (
          <div className="bg-accent/20 py-4 px-8 inline-block">
            <p className="text-accent font-medium">
              Thank you for subscribing! Check your inbox for a confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 bg-muted border-0 focus:ring-2 focus:ring-primary"
            />
            <Button 
              type="submit"
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
