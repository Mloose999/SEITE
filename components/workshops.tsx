import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Brain, Flame, Sparkles, Heart, Users, Check, ArrowRight } from "lucide-react"

const workshops = [
  {
    icon: Brain,
    title: "Understanding Yourself & Regulating Your Nervous System",
    description: "Learn to understand your inner world and develop tools to regulate your nervous system for greater calm and clarity.",
    image: "/images/workshop-nervous.jpg"
  },
  {
    icon: Flame,
    title: "Transforming Fears & Limiting Beliefs",
    description: "Identify and release the fears and beliefs that have been holding you back from living your fullest life.",
    image: "/images/workshop-fears.jpg"
  },
  {
    icon: Sparkles,
    title: "Creating a New Life from a New Energy",
    description: "Step into a new vibration and learn to create your reality from a place of empowerment and possibility.",
    image: "/images/workshop-energy.jpg"
  },
  {
    icon: Heart,
    title: "From Insecurity to a Healthy Relationship",
    description: "Build confidence and learn the foundations of creating and maintaining healthy, fulfilling relationships.",
    image: "/images/workshop-relationship.jpg"
  }
]

const workshopStructure = [
  {
    step: "01",
    title: "Introduction & Self-Reflection",
    description: "Each topic begins with a clear explanation and a self-assessment to help you understand where you currently stand."
  },
  {
    step: "02",
    title: "Content & Practical Exercises",
    description: "You will receive reading material, tools, and exercises for each topic, along with practical ways to apply what you learn."
  },
  {
    step: "03",
    title: "Integration & Application",
    description: "Follow-up exercises and self-tests help you integrate the lessons into your everyday routines and see real progress."
  }
]

export function Workshops() {
  return (
    <section id="workshops" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">Transformation Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Workshops & Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            All workshops can be booked individually, so you can start exactly where you feel you need the most support.
          </p>
        </div>

        {/* Hero Image with Overlay Text */}
        <div className="relative mb-24">
          <div className="relative overflow-hidden aspect-[21/9]">
            <Image
              src="/images/workshop.jpg"
              alt="Personal transformation workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12 max-w-xl">
                <p className="text-card font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Your journey to transformation starts here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              How Each Workshop Works
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              Each workshop is carefully designed with a proven structure that guides you from understanding to lasting change. You will learn, practice, and integrate at your own pace.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {workshopStructure.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-start gap-5">
                  <span className="font-serif text-5xl md:text-6xl font-bold text-accent/20 leading-none">
                    {item.step}
                  </span>
                  <div className="pt-2">
                    <h4 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Workshops - Card Style with Images */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Individual Workshops
              </h3>
              <p className="text-muted-foreground mt-2">Choose the topics that resonate with you most</p>
            </div>
            <div className="inline-flex items-center gap-3 bg-accent/10 px-5 py-3 border border-accent/20">
              <span className="font-serif text-3xl font-bold text-accent">29 €</span>
              <span className="text-sm text-muted-foreground">per workshop</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {workshops.map((workshop, index) => {
              const isEven = index % 2 === 0
              return (
                <div 
                  key={index} 
                  className="group relative"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                  </div>
                  {/* White text box - alternating positions */}
                  <div className={`relative z-20 -mt-16 ${isEven ? 'mr-8 ml-0' : 'ml-8 mr-0'}`}>
                    <div className="bg-[#f5f5f3] p-6 shadow-lg">
                      <h4 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2">
                        {workshop.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {workshop.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Complete Program Package - Modern Split Design */}
        <div className="mb-28">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src="/images/complete-package.jpg"
                alt="Complete transformation program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
            </div>
            {/* Content Side */}
            <div className="bg-secondary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-card/70 font-semibold tracking-widest uppercase text-sm mb-4">Complete Package</p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-card mb-6">
                Full Transformation Program
              </h3>
              <p className="text-card/80 leading-relaxed mb-8">
                Experience the complete transformation process with all four workshops combined. 
                A structured, step-by-step journey from inner healing to building confident, healthy relationships.
              </p>
              
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-card/50 line-through text-lg">116 €</span>
                <span className="font-serif text-5xl font-bold text-card">99 €</span>
              </div>
              
              <div className="space-y-3">
                {["All 4 workshops included", "Structured transformation journey", "Save 17 € with the bundle"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-card/90">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 1:1 Coaching - Full Width Split Design */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Content Side */}
          <div className="bg-accent p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
            <p className="text-accent-foreground/70 font-semibold tracking-widest uppercase text-sm mb-4">Personal Support</p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
              1:1 Coaching
            </h3>
            <p className="text-accent-foreground/80 leading-relaxed text-lg mb-8">
              For personalized guidance in urgent or complex situations, I offer individual coaching sessions. 
              Work directly on your specific blockages, fears, or emotional patterns in a safe, private space.
            </p>
            
            <div className="space-y-5">
              <p className="text-accent-foreground font-medium text-lg">Available formats:</p>
              <div className="space-y-4">
                {[
                  { format: "Live Sessions", desc: "In-person or video call" },
                  { format: "Email Coaching", desc: "Written guidance at your pace" },
                  { format: "Phone / WhatsApp", desc: "Quick support when you need it" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent-foreground/80 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="text-accent-foreground font-medium text-lg">{item.format}</span>
                      <p className="text-accent-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-10 py-6 text-base font-medium transition-all duration-300 hover:scale-105 group"
                >
                  Book a Session
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto min-h-[400px] order-1 md:order-2">
            <Image
              src="/images/coaching.jpg"
              alt="1:1 personal coaching session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
