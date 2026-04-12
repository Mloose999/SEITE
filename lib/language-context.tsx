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
    "services.description": "Personalized coaching and guidance designed to help you master your thoughts, shift your inner state, and unlock your true potential.",
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
    "about.p1": "In my mid-30s, my life changed completely overnight. The structure I relied on, the certainty I trusted, and the identity I had built all collapsed.",
    "about.p2": "What remained was silence and a deep, undeniable knowing that I was meant for more.",
    "about.p3": "So I made a decision. I would no longer live a life built on adaptation. I would rebuild from truth.",
    "about.p4": "I turned inward and began the real work of facing patterns, confronting limitations, and dismantling the beliefs that had quietly shaped my reality for years.",
    "about.p5": "But very quickly, I encountered a problem most people never talk about. I was surrounded by information. Endless strategies. Countless methods. Coaches teaching mindset work, belief change, and transformation.",
    "about.p6": "And yet, despite doing everything \"right,\" I felt overwhelmed, unclear, and ultimately alone in the process.",
    "about.p7": "That's when I understood a fundamental truth: Information does not create transformation. Precision, integration, and execution do.",
    "about.highlight": "My job is to see you win.",
    "about.p8": "I don't just guide. I partner. That means we do not operate in theory. We work in execution.",
    "about.p9": "The work we do together is structured, personalized, and results focused. We do not just shift perspectives. We implement, track, and refine in real time based on your daily life, your decisions, and your outcomes.",
    "about.p10": "Because real transformation is not found in understanding more. It is found in becoming someone who moves differently, consistently, consciously, and with precision.",
    "about.p11": "This is for those who are ready to stop circling the same patterns and start creating tangible results in their life, their relationships, their health, and their wealth.",
    "about.closing": "If you are ready to operate at that level, I will meet you there.",
    
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
    
    // Legal Pages
    "legal.backHome": "Back to Home",
    "footer.datenschutz": "Privacy Policy",
    "footer.agb": "Terms & Conditions",
    
    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.responsible": "Responsible according to § 5 TMG",
    "impressum.contact": "Contact",
    "impressum.disclaimer.title": "Disclaimer",
    "impressum.disclaimer.content": "Liability for Content: As a service provider, we are responsible for our own content on these pages according to general laws pursuant to § 7 Para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
    "impressum.disclaimer.links": "Liability for Links: Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.",
    "impressum.copyright.title": "Copyright",
    "impressum.copyright.content": "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.",
    
    // Datenschutz Page
    "datenschutz.title": "Privacy Policy",
    "datenschutz.intro": "We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.",
    "datenschutz.collection.title": "Data Collection",
    "datenschutz.collection.content": "When you visit our website, certain data is automatically collected for technical reasons. This includes: IP address, date and time of the request, time zone difference to GMT, content of the request, access status/HTTP status code, amount of data transferred, website from which the request comes, browser, operating system and its interface, language and version of the browser software.",
    "datenschutz.contact.title": "Contact Form",
    "datenschutz.contact.content": "If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We will not share this data without your consent.",
    "datenschutz.cookies.title": "Cookies",
    "datenschutz.cookies.content": "Our website uses cookies. These are small text files that your web browser stores on your device. Cookies help us to make our offer more user-friendly, effective and secure.",
    "datenschutz.analytics.title": "Google Analytics",
    "datenschutz.analytics.content": "This website uses Google Analytics, a web analytics service provided by Google LLC. Google Analytics uses cookies to analyze your use of the website. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. We use Google Analytics only with your consent. You can revoke your consent at any time by deleting the cookies in your browser.",
    "datenschutz.rights.title": "Your Rights",
    "datenschutz.rights.content": "You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction, blocking or deletion of this data. You can contact us at any time at the address given in the legal notice if you have further questions on the subject of data protection.",
    
    // AGB Page
    "agb.title": "Terms & Conditions",
    "agb.scope.title": "Scope of Application",
    "agb.scope.content": "These General Terms and Conditions apply to all contracts concluded between Linda Holtkamp - Mindset Coaching and clients regarding coaching services, workshops, and online programs.",
    "agb.services.title": "Services",
    "agb.services.content": "The scope of services results from the respective service description. Coaching services are not a substitute for medical or psychotherapeutic treatment. The client is responsible for seeking professional medical help if needed.",
    "agb.booking.title": "Booking and Payment",
    "agb.booking.content": "Bookings become binding upon confirmation. Payment is due according to the agreed payment terms. For workshops and programs, the fee is due before the start of the service.",
    "agb.cancellation.title": "Cancellation Policy",
    "agb.cancellation.content": "Appointments can be cancelled or rescheduled free of charge up to 48 hours before the agreed date. In case of later cancellation or no-show, the full fee will be charged.",
    "agb.confidentiality.title": "Confidentiality",
    "agb.confidentiality.content": "All information shared during coaching sessions is treated confidentially. The coach is bound by professional secrecy.",
    "agb.liability.title": "Liability",
    "agb.liability.content": "The client participates in coaching at their own responsibility. The coach is not liable for the success of the coaching or for decisions made by the client based on the coaching.",
    "agb.final.title": "Final Provisions",
    "agb.final.content": "German law applies. Should individual provisions of these terms and conditions be or become invalid, this shall not affect the validity of the remaining provisions.",
    
    // Cookie Consent
    "cookies.title": "Cookie Settings",
    "cookies.description": "We use cookies to analyze our website traffic and improve your experience. By clicking \"Accept\", you consent to the use of analytics cookies.",
    "cookies.accept": "Accept",
    "cookies.decline": "Decline",
    "cookies.learnMore": "Learn more",
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
    "services.description": "Persönliches Coaching und Begleitung, um deine Gedanken zu meistern, deinen inneren Zustand zu verändern und dein wahres Potenzial zu entfalten.",
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
    "about.p1": "Mitte 30 veränderte sich mein Leben über Nacht komplett. Die Struktur, auf die ich mich verlassen hatte, die Sicherheit, der ich vertraute, und die Identität, die ich aufgebaut hatte — alles brach zusammen.",
    "about.p2": "Was blieb, war Stille und ein tiefes, unbestreitbares Wissen, dass ich für mehr bestimmt war.",
    "about.p3": "Also traf ich eine Entscheidung. Ich würde nicht länger ein Leben leben, das auf Anpassung aufgebaut war. Ich würde aus der Wahrheit heraus neu aufbauen.",
    "about.p4": "Ich wandte mich nach innen und begann die wahre Arbeit: Muster zu konfrontieren, Grenzen zu überwinden und die Glaubenssätze abzubauen, die meine Realität jahrelang still geformt hatten.",
    "about.p5": "Aber sehr schnell stieß ich auf ein Problem, über das die meisten Menschen nie sprechen. Ich war umgeben von Informationen. Endlose Strategien. Unzählige Methoden. Coaches, die Mindset-Arbeit, Glaubenssatzänderung und Transformation lehrten.",
    "about.p6": "Und doch, obwohl ich alles \"richtig\" machte, fühlte ich mich überfordert, unklar und letztendlich allein in dem Prozess.",
    "about.p7": "Da verstand ich eine fundamentale Wahrheit: Information schafft keine Transformation. Präzision, Integration und Umsetzung tun es.",
    "about.highlight": "My job is to see you win.",
    "about.p8": "Ich begleite nicht nur. Ich bin Partner. Das bedeutet, wir arbeiten nicht in der Theorie. Wir arbeiten in der Umsetzung.",
    "about.p9": "Die Arbeit, die wir zusammen machen, ist strukturiert, personalisiert und ergebnisorientiert. Wir verschieben nicht nur Perspektiven. Wir implementieren, verfolgen und verfeinern in Echtzeit basierend auf deinem täglichen Leben, deinen Entscheidungen und deinen Ergebnissen.",
    "about.p10": "Denn echte Transformation findet man nicht darin, mehr zu verstehen. Man findet sie darin, jemand zu werden, der sich anders bewegt, konsequent, bewusst und mit Präzision.",
    "about.p11": "Das ist für diejenigen, die bereit sind, aufzuhören, dieselben Muster zu umkreisen und anfangen, greifbare Ergebnisse in ihrem Leben, ihren Beziehungen, ihrer Gesundheit und ihrem Wohlstand zu schaffen.",
    "about.closing": "Wenn du bereit bist, auf diesem Level zu arbeiten, werde ich dich dort treffen.",
    
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
    
    // Legal Pages
    "legal.backHome": "Zur Startseite",
    "footer.datenschutz": "Datenschutz",
    "footer.agb": "AGB",
    
    // Impressum Page
    "impressum.title": "Impressum",
    "impressum.responsible": "Verantwortlich gemäß § 5 TMG",
    "impressum.contact": "Kontakt",
    "impressum.disclaimer.title": "Haftungsausschluss",
    "impressum.disclaimer.content": "Haftung für Inhalte: Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    "impressum.disclaimer.links": "Haftung für Links: Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    "impressum.copyright.title": "Urheberrecht",
    "impressum.copyright.content": "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    
    // Datenschutz Page
    "datenschutz.title": "Datenschutzerklärung",
    "datenschutz.intro": "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
    "datenschutz.collection.title": "Datenerfassung",
    "datenschutz.collection.content": "Beim Besuch unserer Website werden aus technischen Gründen bestimmte Daten automatisch erfasst. Dazu gehören: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur GMT, Inhalt der Anforderung, Zugriffsstatus/HTTP-Statuscode, übertragene Datenmenge, Website von der die Anforderung kommt, Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware.",
    "datenschutz.contact.title": "Kontaktformular",
    "datenschutz.contact.content": "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
    "datenschutz.cookies.title": "Cookies",
    "datenschutz.cookies.content": "Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.",
    "datenschutz.analytics.title": "Google Analytics",
    "datenschutz.analytics.content": "Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics verwendet Cookies, um die Nutzung der Website zu analysieren. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir nutzen Google Analytics nur mit Ihrer Einwilligung. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookies in Ihrem Browser löschen.",
    "datenschutz.rights.title": "Ihre Rechte",
    "datenschutz.rights.content": "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.",
    
    // AGB Page
    "agb.title": "Allgemeine Geschäftsbedingungen",
    "agb.scope.title": "Geltungsbereich",
    "agb.scope.content": "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen Linda Holtkamp - Mindset Coaching und Klienten über Coaching-Leistungen, Workshops und Online-Programme geschlossen werden.",
    "agb.services.title": "Leistungen",
    "agb.services.content": "Der Umfang der Leistungen ergibt sich aus der jeweiligen Leistungsbeschreibung. Coaching-Leistungen sind kein Ersatz für eine ärztliche oder psychotherapeutische Behandlung. Der Klient ist selbst dafür verantwortlich, bei Bedarf professionelle medizinische Hilfe zu suchen.",
    "agb.booking.title": "Buchung und Zahlung",
    "agb.booking.content": "Buchungen werden mit Bestätigung verbindlich. Die Zahlung ist entsprechend der vereinbarten Zahlungsbedingungen fällig. Bei Workshops und Programmen ist die Gebühr vor Beginn der Leistung fällig.",
    "agb.cancellation.title": "Stornierungsbedingungen",
    "agb.cancellation.content": "Termine können bis zu 48 Stunden vor dem vereinbarten Termin kostenlos storniert oder verschoben werden. Bei späterer Absage oder Nichterscheinen wird die volle Gebühr berechnet.",
    "agb.confidentiality.title": "Vertraulichkeit",
    "agb.confidentiality.content": "Alle während der Coaching-Sitzungen geteilten Informationen werden vertraulich behandelt. Der Coach ist zur Verschwiegenheit verpflichtet.",
    "agb.liability.title": "Haftung",
    "agb.liability.content": "Der Klient nimmt am Coaching in eigener Verantwortung teil. Der Coach haftet nicht für den Erfolg des Coachings oder für Entscheidungen, die der Klient auf Grundlage des Coachings trifft.",
    "agb.final.title": "Schlussbestimmungen",
    "agb.final.content": "Es gilt deutsches Recht. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.",
    
    // Cookie Consent
    "cookies.title": "Cookie-Einstellungen",
    "cookies.description": "Wir verwenden Cookies, um unseren Website-Traffic zu analysieren und dein Erlebnis zu verbessern. Mit Klick auf \"Akzeptieren\" stimmst du der Verwendung von Analyse-Cookies zu.",
    "cookies.accept": "Akzeptieren",
    "cookies.decline": "Ablehnen",
    "cookies.learnMore": "Mehr erfahren",
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
