import { Leaf, HeartHandshake, Sun, Compass } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "Belief Transformation",
    description: "Transform unconscious beliefs with personalized guidance inspired by Neville Goddard and Dr. Joe Dispenza"
  },
  {
    icon: HeartHandshake,
    title: "Emotional Healing",
    description: "Heal emotional wounds and foster love, health, and spiritual awakening"
  },
  {
    icon: Sun,
    title: "Manifestation Mastery",
    description: "Enhance your manifesting abilities through spiritual and mental techniques"
  },
  {
    icon: Compass,
    title: "Spiritual Expansion",
    description: "Expand your awareness and elevate your spiritual journey"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left side - Sticky header */}
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">What I Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Personalized coaching and guidance to help you transform your mindset and unlock your true potential.
            </p>
          </div>

          {/* Right side - Services list */}
          <div className="md:col-span-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group flex gap-6 p-6 bg-[#f5f5f3] hover:bg-secondary/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-card" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
