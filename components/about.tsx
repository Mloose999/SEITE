import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">My Story</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden w-full relative">
              <Image
                src="/images/coach.jpg"
                alt="Linda Holtkamp - Mindset Coach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              In my mid-30s, my life changed completely from one day to the next. The life I had known, 
              the structure I was used to, and the sense of security I relied on — all of it suddenly disappeared. 
              I found myself alone, left only with myself and a quiet inner knowing that there had to be more to 
              life than what I had been living.
            </p>
            <p className="font-serif text-xl text-accent font-medium">
              Giving up was never an option.
            </p>
            <p>
              So I did something I had avoided for a long time — I began to truly work on myself. I started 
              getting to know who I really was — not the version of me that functioned for others, not the 
              person who constantly adapted to meet expectations, but my authentic self. I faced my fears, 
              my insecurities, and the patterns that had kept me stuck in limitation and lack for years.
            </p>
            <p>
              This journey was not easy. It was filled with doubts, emotional challenges, and moments where 
              I questioned everything. But it was exactly in those moments that I discovered my greatest 
              strength and began to rebuild my life from within.
            </p>
            <p>
              Today, I am no longer the person who lived just to function and fit in. Today, I live freely — 
              step by step — guided by my own values, dreams, and desires.
            </p>
            <p>
              This transformation is what led me to become a life and motivation coach. I now help people 
              break free from patterns of lack and step into a life of abundance — in love, in health, and in wealth.
            </p>
            <p>
              Because I know from personal experience that true change doesn&apos;t start on the outside. It starts 
              the moment you reconnect with yourself, shift your mindset, and begin to believe that you are 
              allowed to live a life that truly fulfills you.
            </p>
            <p className="font-serif text-lg text-foreground">
              My mission is to guide others through this journey — to help them move from survival to self-trust, 
              from fear to clarity, and from limitation to a life they consciously choose and create.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
