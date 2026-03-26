import Image from "next/image"
import { Feather, Infinity } from "lucide-react"

const philosophyItems = [
  {
    icon: Feather,
    title: "Harness Your Inner Power",
    description: "Transform subconscious beliefs and unlock your potential using proven techniques inspired by Neville Goddard and Dr. Joe Dispenza. Personal guidance to love, health, and spiritual growth."
  },
  {
    icon: Infinity,
    title: "Transform Your Mindset and Unlock Your Potential",
    description: "Discover how powerful your thoughts are and learn to reprogram unconscious beliefs for a life of love, health, and spiritual growth."
  }
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">Philosophy</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-balance">
            The Foundation of Transformation
          </h2>
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
                &quot;True transformation is not about time, it&apos;s about intention and commitment to change.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {philosophyItems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <item.icon className="w-16 h-16 text-accent" strokeWidth={1.5} />
              </div>
              <div className={`text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
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
