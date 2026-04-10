"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.about": "About",
    "nav.services": "Services",
    "nav.workshops": "Workshops",
    "nav.booking": "Booking",
    "nav.bookNow": "Book Now",
    "header.tagline": "My job is to see you win",
    "header.brand": "Linda Holtkamp - Mindset Coaching",
    
    // Hero
    "hero.subtitle": "Change Your Life with Linda",
    "hero.title": "Giving up is not an option",
    "hero.tagline": "It starts with you",
    "hero.description": "Mental strength is the foundation of a fulfilled life. Your thoughts shape your reality, and when you learn to master your mind, you unlock the power to overcome challenges, grow beyond limitations, and create the life you truly desire.",
    "hero.cta": "Start Your Journey",
    
    // Philosophy
    "philosophy.label": "Philosophy",
    "philosophy.title": "The Foundation of Transformation",
    "philosophy.quote": "\"True transformation is not about time, it's about intention and commitment to change.\"",
    "philosophy.item1.title": "Harness Your Inner Power",
    "philosophy.item1.description": "Transform subconscious beliefs and unlock your potential using proven techniques inspired by Neville Goddard and Dr. Joe Dispenza. Personal guidance to love, health, and spiritual growth.",
    "philosophy.item2.title": "Transform Your Mindset and Unlock Your Potential",
    "philosophy.item2.description": "Discover how powerful your thoughts are and learn to reprogram unconscious beliefs for a life of love, health, and spiritual growth.",
    
    // Services
    "services.label": "What I Offer",
    "services.title": "Services",
    "services.description": "Personalized coaching and guidance to help you transform your mindset and unlock your true potential.",
    "services.belief.title": "Belief Transformation",
    "services.belief.description": "Transform unconscious beliefs with personalized guidance inspired by Neville Goddard and Dr. Joe Dispenza",
    "services.emotional.title": "Emotional Healing",
    "services.emotional.description": "Heal emotional wounds and foster love, health, and spiritual awakening",
    "services.manifestation.title": "Manifestation Mastery",
    "services.manifestation.description": "Enhance your manifesting abilities through spiritual and mental techniques",
    "services.spiritual.title": "Spiritual Expansion",
    "services.spiritual.description": "Expand your awareness and elevate your spiritual journey",
    
    // Workshops
    "workshops.label": "Transformation Journey",
    "workshops.title": "Workshops & Programs",
    "workshops.description": "All workshops can be booked individually, so you can start exactly where you feel you need the most support.",
    "workshops.heroText": "Your journey to transformation starts here",
    "workshops.howItWorks": "How Each Workshop Works",
    "workshops.howItWorksDescription": "Each workshop is carefully designed with a proven structure that guides you from understanding to lasting change. You will learn, practice, and integrate at your own pace.",
    "workshops.step1.title": "Introduction & Self-Reflection",
    "workshops.step1.description": "Each topic begins with a clear explanation and a self-assessment to help you understand where you currently stand.",
    "workshops.step2.title": "Content & Practical Exercises",
    "workshops.step2.description": "You will receive reading material, tools, and exercises for each topic, along with practical ways to apply what you learn.",
    "workshops.step3.title": "Integration & Application",
    "workshops.step3.description": "Follow-up exercises and self-tests help you integrate the lessons into your everyday routines and see real progress.",
    "workshops.individual": "Individual Workshops",
    "workshops.individualDescription": "Choose the topics that resonate with you most",
    "workshops.perWorkshop": "per workshop",
    "workshops.workshop1.title": "Understanding Yourself & Regulating Your Nervous System",
    "workshops.workshop1.description": "Learn to understand your inner world and develop tools to regulate your nervous system for greater calm and clarity.",
    "workshops.workshop2.title": "Transforming Fears & Limiting Beliefs",
    "workshops.workshop2.description": "Identify and release the fears and beliefs that have been holding you back from living your fullest life.",
    "workshops.workshop3.title": "Creating a New Life from a New Energy",
    "workshops.workshop3.description": "Step into a new vibration and learn to create your reality from a place of empowerment and possibility.",
    "workshops.workshop4.title": "From Insecurity to a Healthy Relationship",
    "workshops.workshop4.description": "Build confidence and learn the foundations of creating and maintaining healthy, fulfilling relationships.",
    "workshops.completePackage": "Complete Package",
    "workshops.fullProgram": "Full Transformation Program",
    "workshops.fullProgramDescription": "Experience the complete transformation process with all four workshops combined. A structured, step-by-step journey from inner healing to building confident, healthy relationships.",
    "workshops.allWorkshops": "All 4 workshops included",
    "workshops.structuredJourney": "Structured transformation journey",
    "workshops.saveBundle": "Save 17 € with the bundle",
    "workshops.personalSupport": "Personal Support",
    "workshops.coaching": "1:1 Coaching",
    "workshops.coachingDescription": "For personalized guidance in urgent or complex situations, I offer individual coaching sessions. Work directly on your specific blockages, fears, or emotional patterns in a safe, private space.",
    "workshops.availableFormats": "Available formats:",
    "workshops.liveSessions": "Live Sessions",
    "workshops.liveSessionsDesc": "In-person or video call",
    "workshops.emailCoaching": "Email Coaching",
    "workshops.emailCoachingDesc": "Written guidance at your pace",
    "workshops.phoneWhatsapp": "Phone / WhatsApp",
    "workshops.phoneWhatsappDesc": "Quick support when you need it",
    
    // About
    "about.label": "My Story",
    "about.title": "About Me",
    "about.p1": "In my mid-30s, my life changed completely from one day to the next. The life I had known, the structure I was used to, and the sense of security I relied on — all of it suddenly disappeared. I found myself alone, left only with myself and a quiet inner knowing that there had to be more to life than what I had been living.",
    "about.highlight": "Giving up was never an option.",
    "about.p2": "So I did something I had avoided for a long time — I began to truly work on myself. I started getting to know who I really was — not the version of me that functioned for others, not the person who constantly adapted to meet expectations, but my authentic self. I faced my fears, my insecurities, and the patterns that had kept me stuck in limitation and lack for years.",
    "about.p3": "This journey was not easy. It was filled with doubts, emotional challenges, and moments where I questioned everything. But it was exactly in those moments that I discovered my greatest strength and began to rebuild my life from within.",
    "about.p4": "Today, I am no longer the person who lived just to function and fit in. Today, I live freely — step by step — guided by my own values, dreams, and desires.",
    "about.p5": "This transformation is what led me to become a life and motivation coach. I now help people break free from patterns of lack and step into a life of abundance — in love, in health, and in wealth.",
    "about.p6": "Because I know from personal experience that true change doesn't start on the outside. It starts the moment you reconnect with yourself, shift your mindset, and begin to believe that you are allowed to live a life that truly fulfills you.",
    "about.mission": "My mission is to guide others through this journey — to help them move from survival to self-trust, from fear to clarity, and from limitation to a life they consciously choose and create.",
    
    // Booking
    "booking.title": "Book a Session",
    "booking.description": "Start your transformation today. Book a 1:1 coaching session and take the first step toward a life of clarity, strength, and purpose.",
    "booking.cta": "Book Now",
    "booking.info": "Fill out the contact form and Linda will get back to you to schedule your session.",
    
    // Newsletter
    "newsletter.title": "Stay Connected",
    "newsletter.description": "Join the newsletter and receive insights, inspiration, and tools to strengthen your mindset and elevate your life.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.cta": "Subscribe",
    "newsletter.success": "Thank you for subscribing! Check your inbox for a confirmation.",
    
    // Footer
    "footer.impressum": "Impressum",
    "footer.rights": "All rights reserved.",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.description": "Ready to start your transformation? Fill out the form below and Linda will reach out to schedule your session.",
    "contact.name": "Your Name",
    "contact.namePlaceholder": "Enter your full name",
    "contact.email": "Email Address",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.message": "What would you like help with?",
    "contact.messagePlaceholder": "Tell Linda about your goals, challenges, or what you're hoping to achieve through coaching...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.thankYou": "Thank You!",
    "contact.received": "Your message has been received. Linda will get back to you as soon as possible.",
    "contact.back": "Back",
    "contact.backHome": "Back to Home",
    "contact.responseTime": "Linda typically responds within 24-48 hours.",
  },
  de: {
    // Header
    "nav.about": "Über mich",
    "nav.services": "Leistungen",
    "nav.workshops": "Workshops",
    "nav.booking": "Buchung",
    "nav.bookNow": "Jetzt buchen",
    "header.tagline": "My job is to see you win",
    "header.brand": "Linda Holtkamp - Mindset Coaching",
    
    // Hero
    "hero.subtitle": "Verändere dein Leben mit Linda",
    "hero.title": "Aufgeben ist keine Option",
    "hero.tagline": "Es beginnt mit dir",
    "hero.description": "Mentale Stärke ist das Fundament eines erfüllten Lebens. Deine Gedanken formen deine Realität, und wenn du lernst, deinen Geist zu meistern, entfesselst du die Kraft, Herausforderungen zu überwinden, über Grenzen hinauszuwachsen und das Leben zu erschaffen, das du dir wirklich wünschst.",
    "hero.cta": "Starte deine Reise",
    
    // Philosophy
    "philosophy.label": "Philosophie",
    "philosophy.title": "Das Fundament der Transformation",
    "philosophy.quote": "\"Wahre Transformation braucht keine Zeit, sondern Absicht und Hingabe zur Veränderung.\"",
    "philosophy.item1.title": "Nutze deine innere Kraft",
    "philosophy.item1.description": "Transformiere unterbewusste Glaubenssätze und entfalte dein Potenzial mit bewährten Techniken, inspiriert von Neville Goddard und Dr. Joe Dispenza. Persönliche Begleitung zu Liebe, Gesundheit und spirituellem Wachstum.",
    "philosophy.item2.title": "Transformiere dein Mindset und entfalte dein Potenzial",
    "philosophy.item2.description": "Entdecke, wie kraftvoll deine Gedanken sind, und lerne, unterbewusste Glaubenssätze für ein Leben voller Liebe, Gesundheit und spirituellem Wachstum zu reprogrammieren.",
    
    // Services
    "services.label": "Mein Angebot",
    "services.title": "Leistungen",
    "services.description": "Persönliches Coaching und Begleitung, um dein Mindset zu transformieren und dein wahres Potenzial zu entfalten.",
    "services.belief.title": "Glaubenssatz-Transformation",
    "services.belief.description": "Transformiere unterbewusste Glaubenssätze mit persönlicher Begleitung, inspiriert von Neville Goddard und Dr. Joe Dispenza",
    "services.emotional.title": "Emotionale Heilung",
    "services.emotional.description": "Heile emotionale Wunden und fördere Liebe, Gesundheit und spirituelles Erwachen",
    "services.manifestation.title": "Manifestations-Meisterschaft",
    "services.manifestation.description": "Verbessere deine Manifestationsfähigkeiten durch spirituelle und mentale Techniken",
    "services.spiritual.title": "Spirituelle Erweiterung",
    "services.spiritual.description": "Erweitere dein Bewusstsein und hebe deine spirituelle Reise auf ein neues Level",
    
    // Workshops
    "workshops.label": "Transformationsreise",
    "workshops.title": "Workshops & Programme",
    "workshops.description": "Alle Workshops können einzeln gebucht werden, sodass du genau dort beginnen kannst, wo du die meiste Unterstützung brauchst.",
    "workshops.heroText": "Deine Reise zur Transformation beginnt hier",
    "workshops.howItWorks": "So funktioniert jeder Workshop",
    "workshops.howItWorksDescription": "Jeder Workshop ist sorgfältig mit einer bewährten Struktur gestaltet, die dich von Verständnis zu nachhaltiger Veränderung führt. Du lernst, übst und integrierst in deinem eigenen Tempo.",
    "workshops.step1.title": "Einführung & Selbstreflexion",
    "workshops.step1.description": "Jedes Thema beginnt mit einer klaren Erklärung und einer Selbsteinschätzung, um zu verstehen, wo du gerade stehst.",
    "workshops.step2.title": "Inhalte & praktische Übungen",
    "workshops.step2.description": "Du erhältst Lesematerial, Werkzeuge und Übungen zu jedem Thema, zusammen mit praktischen Anwendungsmöglichkeiten.",
    "workshops.step3.title": "Integration & Anwendung",
    "workshops.step3.description": "Folgeübungen und Selbsttests helfen dir, die Lektionen in deinen Alltag zu integrieren und echte Fortschritte zu sehen.",
    "workshops.individual": "Einzelne Workshops",
    "workshops.individualDescription": "Wähle die Themen, die dich am meisten ansprechen",
    "workshops.perWorkshop": "pro Workshop",
    "workshops.workshop1.title": "Dich selbst verstehen & dein Nervensystem regulieren",
    "workshops.workshop1.description": "Lerne, deine innere Welt zu verstehen und entwickle Werkzeuge zur Regulierung deines Nervensystems für mehr Ruhe und Klarheit.",
    "workshops.workshop2.title": "Ängste & limitierende Glaubenssätze transformieren",
    "workshops.workshop2.description": "Identifiziere und löse die Ängste und Glaubenssätze, die dich davon abgehalten haben, dein vollstes Leben zu leben.",
    "workshops.workshop3.title": "Ein neues Leben aus einer neuen Energie erschaffen",
    "workshops.workshop3.description": "Tritt in eine neue Schwingung ein und lerne, deine Realität aus einem Ort der Ermächtigung und Möglichkeit zu erschaffen.",
    "workshops.workshop4.title": "Von Unsicherheit zu einer gesunden Beziehung",
    "workshops.workshop4.description": "Baue Selbstvertrauen auf und lerne die Grundlagen für gesunde, erfüllende Beziehungen.",
    "workshops.completePackage": "Komplettpaket",
    "workshops.fullProgram": "Volles Transformationsprogramm",
    "workshops.fullProgramDescription": "Erlebe den kompletten Transformationsprozess mit allen vier Workshops kombiniert. Eine strukturierte, schrittweise Reise von innerer Heilung zu selbstbewussten, gesunden Beziehungen.",
    "workshops.allWorkshops": "Alle 4 Workshops inklusive",
    "workshops.structuredJourney": "Strukturierte Transformationsreise",
    "workshops.saveBundle": "Spare 17 € mit dem Paket",
    "workshops.personalSupport": "Persönliche Unterstützung",
    "workshops.coaching": "1:1 Coaching",
    "workshops.coachingDescription": "Für persönliche Begleitung in dringenden oder komplexen Situationen biete ich individuelle Coaching-Sitzungen an. Arbeite direkt an deinen spezifischen Blockaden, Ängsten oder emotionalen Mustern in einem sicheren, privaten Raum.",
    "workshops.availableFormats": "Verfügbare Formate:",
    "workshops.liveSessions": "Live-Sitzungen",
    "workshops.liveSessionsDesc": "Persönlich oder per Videocall",
    "workshops.emailCoaching": "E-Mail-Coaching",
    "workshops.emailCoachingDesc": "Schriftliche Begleitung in deinem Tempo",
    "workshops.phoneWhatsapp": "Telefon / WhatsApp",
    "workshops.phoneWhatsappDesc": "Schnelle Unterstützung, wenn du sie brauchst",
    
    // About
    "about.label": "Meine Geschichte",
    "about.title": "Über mich",
    "about.p1": "Mitte 30 veränderte sich mein Leben von einem Tag auf den anderen komplett. Das Leben, das ich kannte, die Struktur, an die ich gewöhnt war, und das Gefühl von Sicherheit, auf das ich mich verließ — alles verschwand plötzlich. Ich fand mich allein wieder, nur mit mir selbst und einem leisen inneren Wissen, dass es mehr im Leben geben musste als das, was ich gelebt hatte.",
    "about.highlight": "Aufgeben war nie eine Option.",
    "about.p2": "Also tat ich etwas, das ich lange Zeit vermieden hatte — ich begann wirklich an mir zu arbeiten. Ich begann herauszufinden, wer ich wirklich war — nicht die Version von mir, die für andere funktionierte, nicht die Person, die sich ständig anpasste, um Erwartungen zu erfüllen, sondern mein authentisches Selbst. Ich stellte mich meinen Ängsten, meinen Unsicherheiten und den Mustern, die mich jahrelang in Begrenzung und Mangel gefangen gehalten hatten.",
    "about.p3": "Diese Reise war nicht einfach. Sie war voller Zweifel, emotionaler Herausforderungen und Momente, in denen ich alles in Frage stellte. Aber genau in diesen Momenten entdeckte ich meine größte Stärke und begann, mein Leben von innen heraus neu aufzubauen.",
    "about.p4": "Heute bin ich nicht mehr die Person, die nur lebte, um zu funktionieren und dazuzugehören. Heute lebe ich frei — Schritt für Schritt — geleitet von meinen eigenen Werten, Träumen und Wünschen.",
    "about.p5": "Diese Transformation hat mich dazu geführt, Life- und Motivationscoach zu werden. Ich helfe jetzt Menschen, sich von Mustern des Mangels zu befreien und in ein Leben der Fülle einzutreten — in Liebe, Gesundheit und Wohlstand.",
    "about.p6": "Denn ich weiß aus eigener Erfahrung, dass wahre Veränderung nicht von außen beginnt. Sie beginnt in dem Moment, in dem du dich wieder mit dir selbst verbindest, dein Mindset veränderst und anfängst zu glauben, dass du ein Leben leben darfst, das dich wirklich erfüllt.",
    "about.mission": "Meine Mission ist es, andere auf dieser Reise zu begleiten — ihnen zu helfen, von Überleben zu Selbstvertrauen, von Angst zu Klarheit und von Begrenzung zu einem Leben zu gelangen, das sie bewusst wählen und erschaffen.",
    
    // Booking
    "booking.title": "Termin buchen",
    "booking.description": "Starte heute deine Transformation. Buche eine 1:1 Coaching-Sitzung und mache den ersten Schritt zu einem Leben voller Klarheit, Stärke und Sinn.",
    "booking.cta": "Jetzt buchen",
    "booking.info": "Fülle das Kontaktformular aus und Linda wird sich bei dir melden, um deinen Termin zu vereinbaren.",
    
    // Newsletter
    "newsletter.title": "Bleib verbunden",
    "newsletter.description": "Abonniere den Newsletter und erhalte Einblicke, Inspiration und Werkzeuge, um dein Mindset zu stärken und dein Leben zu transformieren.",
    "newsletter.placeholder": "Deine E-Mail-Adresse",
    "newsletter.cta": "Abonnieren",
    "newsletter.success": "Vielen Dank für dein Abonnement! Prüfe deinen Posteingang für eine Bestätigung.",
    
    // Footer
    "footer.impressum": "Impressum",
    "footer.rights": "Alle Rechte vorbehalten.",
    
    // Contact
    "contact.title": "Kontakt aufnehmen",
    "contact.description": "Bereit, deine Transformation zu starten? Fülle das Formular aus und Linda wird sich bei dir melden, um deinen Termin zu vereinbaren.",
    "contact.name": "Dein Name",
    "contact.namePlaceholder": "Gib deinen vollständigen Namen ein",
    "contact.email": "E-Mail-Adresse",
    "contact.emailPlaceholder": "deine.email@beispiel.de",
    "contact.message": "Wobei kann ich dir helfen?",
    "contact.messagePlaceholder": "Erzähle Linda von deinen Zielen, Herausforderungen oder was du durch das Coaching erreichen möchtest...",
    "contact.send": "Nachricht senden",
    "contact.sending": "Wird gesendet...",
    "contact.thankYou": "Vielen Dank!",
    "contact.received": "Deine Nachricht wurde empfangen. Linda wird sich so schnell wie möglich bei dir melden.",
    "contact.back": "Zurück",
    "contact.backHome": "Zur Startseite",
    "contact.responseTime": "Linda antwortet in der Regel innerhalb von 24-48 Stunden.",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
