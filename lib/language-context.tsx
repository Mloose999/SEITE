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
    "workshops.workshop1.title": "Mindset Foundation Journey",
    "workshops.workshop1.description": "A structured, self-guided program to understand your patterns, build deep awareness, and create the foundation for real inner change.",
    "workshops.workshop2.title": "Breaking Repeating Patterns",
    "workshops.workshop2.description": "Discover why you keep attracting the same situations and relationships, and learn how to finally break free from the cycles holding you back.",
    "workshops.workshop3.title": "Heal Your Heart",
    "workshops.workshop3.description": "Release the pain of the past and reconnect with who you were before everything started to hurt. This is where your healing begins.",
    "workshops.workshop4.title": "Nervous System Regulation",
    "workshops.workshop4.description": "Before you can heal, your body needs to feel safe. Learn to regulate your nervous system as the foundation for emotional freedom and lasting change.",
    "workshops.completePackage": "Complete Package",
    "workshops.fullProgram": "Full Transformation Program",
    "workshops.fullProgramDescription": "Experience the complete transformation process with all four workshops combined. A structured, step-by-step journey from inner healing to building confident, healthy relationships.",
    "workshops.allWorkshops": "All 4 workshops included",
    "workshops.structuredJourney": "Structured transformation journey",
    "workshops.saveBundle": "Save 37 € with the bundle",
    "workshops.savingsNote": "You save 37 €",
    "workshops.viewDetails": "View Details",
    "workshops.premiumProgram": "Premium Program",
    "workshops.transformationCoaching": "Personal Transformation Coaching",
    "workshops.transformationCoachingDescription": "A deeply personalized 1:1 coaching experience designed to guide you from awareness to real, lasting transformation with continuous support, structure, and accountability.",
    "workshops.learnMore": "Learn More",
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
    
    // Workshop Details Page
    "workshopDetails.back": "Back to Overview",
    "workshopDetails.label": "Self-Guided Programs",
    "workshopDetails.title": "Transform Your Life",
    "workshopDetails.description": "Each workshop is designed to take you deeper into understanding yourself, releasing what no longer serves you, and building the foundation for lasting change.",
    "workshopDetails.workshop": "Workshop",
    "workshopDetails.whatYouLearn": "What you will learn:",
    
    "workshopDetails.mindset.title": "Mindset Foundation Journey",
    "workshopDetails.mindset.subtitle": "Your foundation for real inner change",
    "workshopDetails.mindset.description": "A structured, self-guided program designed to help you understand your patterns, build deep awareness, and create the foundation for real inner change.",
    "workshopDetails.mindset.point1": "Identify your core beliefs and how they shape your reality",
    "workshopDetails.mindset.point2": "Understand the connection between thoughts, emotions, and behavior",
    "workshopDetails.mindset.point3": "Build a daily practice for mindset transformation",
    "workshopDetails.mindset.point4": "Create lasting change from the inside out",
    
    "workshopDetails.patterns.title": "Breaking Repeating Patterns",
    "workshopDetails.patterns.subtitle": "Understand why you keep attracting the same situations",
    "workshopDetails.patterns.description": "Discover why you keep attracting the same situations and relationships, and learn how to finally break free from the cycles holding you back.",
    "workshopDetails.patterns.point1": "Recognize the hidden patterns running your life",
    "workshopDetails.patterns.point2": "Understand the root cause of repeating cycles",
    "workshopDetails.patterns.point3": "Learn tools to interrupt automatic responses",
    "workshopDetails.patterns.point4": "Create new pathways for different outcomes",
    
    "workshopDetails.heart.title": "Heal Your Heart",
    "workshopDetails.heart.subtitle": "Reconnect with who you were before everything started to hurt",
    "workshopDetails.heart.description": "Release the pain of the past and reconnect with who you were before everything started to hurt. This is where your healing begins.",
    "workshopDetails.heart.point1": "Process unresolved emotions in a safe way",
    "workshopDetails.heart.point2": "Release attachments that keep you stuck in the past",
    "workshopDetails.heart.point3": "Rebuild your relationship with yourself",
    "workshopDetails.heart.point4": "Open your heart to new possibilities",
    
    "workshopDetails.nervous.title": "Nervous System Regulation",
    "workshopDetails.nervous.subtitle": "Before you can heal, your body needs to feel safe",
    "workshopDetails.nervous.description": "Before you can heal, your body needs to feel safe. Learn to regulate your nervous system as the foundation for emotional freedom and lasting change.",
    "workshopDetails.nervous.point1": "Understand how your nervous system affects everything",
    "workshopDetails.nervous.point2": "Learn practical tools for regulation",
    "workshopDetails.nervous.point3": "Create safety in your body",
    "workshopDetails.nervous.point4": "Build resilience for life's challenges",
    
    "workshopDetails.included.title": "What's Included",
    "workshopDetails.included.description": "Each workshop gives you everything you need for self-guided transformation.",
    "workshopDetails.included.video": "Video Lessons",
    "workshopDetails.included.videoDesc": "In-depth video content guiding you through each concept",
    "workshopDetails.included.workbook": "Digital Workbook",
    "workshopDetails.included.workbookDesc": "Exercises and reflections to deepen your understanding",
    "workshopDetails.included.lifetime": "Lifetime Access",
    "workshopDetails.included.lifetimeDesc": "Return to the material whenever you need it",
    
    "workshopDetails.pricing.individual": "Single Workshop",
    "workshopDetails.pricing.perWorkshop": "per workshop",
    "workshopDetails.pricing.chooseSingle": "Choose Your Workshop",
    "workshopDetails.pricing.bestValue": "Best Value",
    "workshopDetails.pricing.fullProgram": "Full Transformation Program",
    "workshopDetails.pricing.allFour": "All 4 workshops included",
    "workshopDetails.pricing.getBundle": "Get the Full Program",
    "workshopDetails.prevWorkshop": "Previous Workshop",
    "workshopDetails.nextWorkshop": "Next Workshop",

    // Mindset Foundation Journey Page
    "mindset.stepLabel": "Step",
    "mindset.journey.label": "Your Foundation Journey",
    "mindset.journey.title": "Your Foundation Journey",
    "mindset.journey.description": "This program guides you step by step through the essential phases of inner work — giving you clarity, structure, and practical tools to understand and shift your mindset.",

    "mindset.step1.title": "Awareness & Understanding",
    "mindset.step1.intro": "You begin by building a deeper awareness of your inner world.",
    "mindset.step1.point1": "Understand how belief systems are formed in childhood",
    "mindset.step1.point2": "Recognize your thoughts, emotions, and behaviors",
    "mindset.step1.point3": "Identify recurring patterns in your life",
    "mindset.step1.outcome": "This step helps you clearly see what has been running in the background.",

    "mindset.step2.title": "Pattern Recognition",
    "mindset.step2.intro": "You start connecting the dots within your personal story.",
    "mindset.step2.point1": "Identify limiting beliefs and inner blocks",
    "mindset.step2.point2": "Understand emotional triggers and reactions",
    "mindset.step2.point3": "See how past experiences influence your current reality",
    "mindset.step2.outcome": "This step creates deeper self-understanding and clarity.",

    "mindset.step3.title": "Mindset Shift",
    "mindset.step3.intro": "Now you begin to actively shift your internal perspective.",
    "mindset.step3.point1": "Learn how to question limiting beliefs",
    "mindset.step3.point2": "Develop new empowering thought patterns",
    "mindset.step3.point3": "Start consciously changing your mindset",
    "mindset.step3.outcome": "This is where real inner change begins.",

    "mindset.step4.title": "Integration into Daily Life",
    "mindset.step4.intro": "You bring your new awareness into real-life situations.",
    "mindset.step4.point1": "Apply what you have learned in your daily life",
    "mindset.step4.point2": "Practice new ways of thinking and reacting",
    "mindset.step4.point3": "Build consistency and self-awareness",
    "mindset.step4.outcome": "This step helps you turn insight into real-life change.",

    "mindset.included1": "Structured step-by-step video modules",
    "mindset.included2": "Deep reflection workbook and exercises",
    "mindset.included3": "Practical implementation tasks for real-life application",
    "mindset.included4": "Clear guidance throughout the entire process",

    "mindset.valuable.label": "What Makes This Program Valuable",
    "mindset.valuable1": "Clear structure instead of overwhelm",
    "mindset.valuable2": "Focus on real understanding, not surface-level motivation",
    "mindset.valuable3": "Practical tools you can apply immediately",
    "mindset.valuable4": "A strong foundation for deeper transformation",

    "mindset.finalNote": "This program is designed to help you finally understand yourself on a deeper level and begin creating real change — step by step, at your own pace.",

    // Breaking Repeating Patterns Page
    "patterns.label": "Self-Guided Workshop",
    "patterns.title": "Breaking Repeating Patterns",
    "patterns.description": "Discover why you keep attracting the same situations and relationships, and learn how to finally break free from the cycles holding you back.",
    "patterns.journey.label": "The 5-Part Workshop",
    "patterns.journey.title": "Understanding and Breaking Your Patterns",
    "patterns.journey.description": "In this workshop, you'll move through five interconnected parts that help you understand your patterns deeply and give you tools to interrupt the cycle.",

    "patterns.part1.title": "Understanding Patterns",
    "patterns.part1.intro": "We start by exploring what behavioral and emotional patterns are and why we repeat them.",
    "patterns.part1.point1": "What are behavioral and emotional patterns?",
    "patterns.part1.point2": "Why we repeat them unconsciously",
    "patterns.part1.point3": "The role of the subconscious mind",
    "patterns.part1.outcome": "This is not random",

    "patterns.part2.title": "Your Personal Pattern Loop",
    "patterns.part2.intro": "You'll map out your own pattern cycle and see it clearly for the first time.",
    "patterns.part2.point1": "Trigger → Thought → Emotion → Behavior → Result",
    "patterns.part2.point2": "Understanding your personal cycle",
    "patterns.part2.point3": "Exercise: Map your own pattern",
    "patterns.part2.point4": "Seeing your loop clearly",
    "patterns.part2.outcome": "They SEE their loop for the first time",

    "patterns.part3.title": "The Root Cause",
    "patterns.part3.intro": "We dig deeper to understand where your patterns come from.",
    "patterns.part3.point1": "Where patterns come from (childhood, experiences)",
    "patterns.part3.point2": "Emotional conditioning",
    "patterns.part3.point3": "Why logic doesn't change it",
    "patterns.part3.outcome": "Deep emotional understanding",

    "patterns.part4.title": "Breaking the Cycle",
    "patterns.part4.intro": "Now you get the tools to interrupt the pattern in real-time.",
    "patterns.part4.point1": "Awareness in real-time",
    "patterns.part4.point2": "The 'Pause & Choose' method",
    "patterns.part4.point3": "Choosing a new response",
    "patterns.part4.outcome": "I have control",

    "patterns.part5.title": "Integration",
    "patterns.part5.intro": "You learn how to apply this in your daily life and make it stick.",
    "patterns.part5.point1": "How to apply this in daily life",
    "patterns.part5.point2": "Why repetition is key",
    "patterns.part5.point3": "Small steps → big change",
    "patterns.part5.outcome": "Real-life change begins",

    "patterns.included.title": "What's Included",
    "patterns.included1": "Deep understanding of your repeating patterns",
    "patterns.included2": "Clear mapping of your personal pattern cycle",
    "patterns.included3": "Understanding of the root causes",
    "patterns.included4": "A practical tool to interrupt the cycle",

    "patterns.valuable.label": "What Makes This Workshop Valuable",
    "patterns.valuable1": "Move beyond surface understanding to real change",
    "patterns.valuable2": "Get tools you can use immediately",
    "patterns.valuable3": "Understand your patterns on an emotional level",
    "patterns.valuable4": "Begin your journey toward breaking the cycle",

    "patterns.bridge": "Understanding your patterns is powerful — but real change comes from consistent guidance and deeper work.",

    // Transformation Coaching Page
    "transformation.label": "Premium Program",
    "transformation.title": "Personal Transformation Coaching",
    "transformation.description": "A deeply personalized 1:1 coaching experience designed to guide you from awareness to real, lasting transformation with continuous support, structure, and accountability.",
    "transformation.investment": "Investment",
    "transformation.price": "Starting at 249 EUR / month",
    
    "transformation.journey.title": "Your Transformation Journey",
    "transformation.journey.description": "This program follows a clear and structured process to ensure real and sustainable change.",
    
    "transformation.phase1.title": "Awareness & Pattern Identification",
    "transformation.phase1.description": "You begin by gaining clarity on your internal patterns.",
    "transformation.phase1.point1": "Identify subconscious beliefs and emotional triggers",
    "transformation.phase1.point2": "Understand how your past shaped your current behavior",
    "transformation.phase1.point3": "Recognize repeating cycles in your life",
    "transformation.phase1.outcome": "This phase creates deep awareness - the foundation for real change.",
    
    "transformation.phase2.title": "Inner Work & Belief Transformation",
    "transformation.phase2.description": "We start working directly with your limiting beliefs.",
    "transformation.phase2.point1": "Break down old belief systems",
    "transformation.phase2.point2": "Reframe and release limiting thoughts",
    "transformation.phase2.point3": "Shift your internal narrative",
    "transformation.phase2.outcome": "This is where real inner change begins.",
    
    "transformation.phase3.title": "Emotional Integration",
    "transformation.phase3.description": "Transformation is not only mental - it needs to be felt and integrated.",
    "transformation.phase3.point1": "Process emotional blocks",
    "transformation.phase3.point2": "Build emotional awareness and stability",
    "transformation.phase3.point3": "Strengthen your connection to yourself",
    "transformation.phase3.outcome": "This phase creates inner safety and emotional balance.",
    
    "transformation.phase4.title": "Real-Life Application & Stability",
    "transformation.phase4.description": "Now we bring everything into your daily life.",
    "transformation.phase4.point1": "Apply new patterns in real situations",
    "transformation.phase4.point2": "Build consistency and new habits",
    "transformation.phase4.point3": "Create long-term stability and alignment",
    "transformation.phase4.outcome": "This is where transformation becomes your new normal.",
    
    "transformation.support.title": "Your Ongoing Support Structure",
    "transformation.support.description": "To guide you through every phase, you receive:",
    "transformation.support.sessions": "Bi-weekly 1:1 Transformation Sessions",
    "transformation.support.sessionsDesc": "30-minute Zoom calls for deep guidance, reflection, and progress tracking",
    "transformation.support.emails": "Weekly Accountability Emails",
    "transformation.support.emailsDesc": "Personalized motivation and accountability to keep you on track",
    "transformation.support.whatsapp": "Direct WhatsApp Access",
    "transformation.support.whatsappDesc": "Support during challenging moments, including 1x 15-minute call per month if needed",
    "transformation.support.emailSupport": "Ongoing Email Support",
    "transformation.support.emailSupportDesc": "For questions, clarity, and reflection between sessions",
    
    "transformation.different.title": "What Makes This Program Different",
    "transformation.different.point1": "Fully personalized guidance - no one-size-fits-all approach",
    "transformation.different.point2": "Continuous support between sessions",
    "transformation.different.point3": "Structured transformation process (not random coaching)",
    "transformation.different.point4": "Focus on real-life integration, not just understanding",
    "transformation.different.point5": "Deep work on subconscious belief systems",
    
    "transformation.finalNote": "You are not left alone between sessions.",
    "transformation.finalNote2": "You are guided through every phase of your transformation - step by step.",
    "transformation.cta": "Start Your Transformation",
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
    "workshops.workshop1.title": "Mindset Foundation Journey",
    "workshops.workshop1.description": "Ein strukturiertes, selbstgefuehrtes Programm, um deine Muster zu verstehen, tiefes Bewusstsein aufzubauen und das Fundament fuer echte innere Veraenderung zu schaffen.",
    "workshops.workshop2.title": "Breaking Repeating Patterns",
    "workshops.workshop2.description": "Entdecke, warum du immer wieder dieselben Situationen und Beziehungen anziehst, und lerne, wie du endlich die Zyklen durchbrichst, die dich zurueckhalten.",
    "workshops.workshop3.title": "Heal Your Heart",
    "workshops.workshop3.description": "Lass den Schmerz der Vergangenheit los und verbinde dich wieder mit der Person, die du warst, bevor alles angefangen hat wehzutun. Hier beginnt deine Heilung.",
    "workshops.workshop4.title": "Nervous System Regulation",
    "workshops.workshop4.description": "Bevor du heilen kannst, muss sich dein Koerper sicher fuehlen. Lerne, dein Nervensystem zu regulieren als Grundlage fuer emotionale Freiheit und nachhaltige Veraenderung.",
    "workshops.completePackage": "Komplettpaket",
    "workshops.fullProgram": "Volles Transformationsprogramm",
    "workshops.fullProgramDescription": "Erlebe den kompletten Transformationsprozess mit allen vier Workshops kombiniert. Eine strukturierte, schrittweise Reise von innerer Heilung zu selbstbewussten, gesunden Beziehungen.",
    "workshops.allWorkshops": "Alle 4 Workshops inklusive",
    "workshops.structuredJourney": "Strukturierte Transformationsreise",
    "workshops.saveBundle": "Spare 37 �� mit dem Paket",
    "workshops.savingsNote": "Du sparst 37 €",
    "workshops.viewDetails": "Details ansehen",
    "workshops.premiumProgram": "Premium Programm",
    "workshops.transformationCoaching": "Personal Transformation Coaching",
    "workshops.transformationCoachingDescription": "Ein zutiefst personalisiertes 1:1 Coaching-Erlebnis, das dich von Bewusstsein zu echter, nachhaltiger Transformation fuehrt - mit kontinuierlicher Unterstuetzung, Struktur und Accountability.",
    "workshops.learnMore": "Mehr erfahren",
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
    
    // Workshop Details Page
    "workshopDetails.back": "Zurueck zur Uebersicht",
    "workshopDetails.label": "Selbstgefuehrte Programme",
    "workshopDetails.title": "Transformiere dein Leben",
    "workshopDetails.description": "Jeder Workshop ist darauf ausgelegt, dich tiefer in das Verstaendnis deiner selbst zu fuehren, loszulassen was dir nicht mehr dient, und das Fundament fuer nachhaltige Veraenderung aufzubauen.",
    "workshopDetails.workshop": "Workshop",
    "workshopDetails.whatYouLearn": "Was du lernen wirst:",
    
    "workshopDetails.mindset.title": "Mindset Foundation Journey",
    "workshopDetails.mindset.subtitle": "Dein Fundament fuer echte innere Veraenderung",
    "workshopDetails.mindset.description": "Ein strukturiertes, selbstgefuehrtes Programm, das dir hilft, deine Muster zu verstehen, tiefes Bewusstsein aufzubauen und das Fundament fuer echte innere Veraenderung zu schaffen.",
    "workshopDetails.mindset.point1": "Identifiziere deine Kernueberzeugungen und wie sie deine Realitaet formen",
    "workshopDetails.mindset.point2": "Verstehe die Verbindung zwischen Gedanken, Emotionen und Verhalten",
    "workshopDetails.mindset.point3": "Baue eine taegliche Praxis fuer Mindset-Transformation auf",
    "workshopDetails.mindset.point4": "Schaffe nachhaltige Veraenderung von innen heraus",
    
    "workshopDetails.patterns.title": "Breaking Repeating Patterns",
    "workshopDetails.patterns.subtitle": "Verstehe, warum du immer dieselben Situationen anziehst",
    "workshopDetails.patterns.description": "Entdecke, warum du immer wieder dieselben Situationen und Beziehungen anziehst, und lerne, wie du endlich aus den Zyklen ausbrichst, die dich zurueckhalten.",
    "workshopDetails.patterns.point1": "Erkenne die versteckten Muster, die dein Leben steuern",
    "workshopDetails.patterns.point2": "Verstehe die Wurzel von sich wiederholenden Zyklen",
    "workshopDetails.patterns.point3": "Lerne Werkzeuge, um automatische Reaktionen zu unterbrechen",
    "workshopDetails.patterns.point4": "Schaffe neue Wege fuer andere Ergebnisse",
    
    "workshopDetails.heart.title": "Heal Your Heart",
    "workshopDetails.heart.subtitle": "Verbinde dich wieder mit der Person, die du warst, bevor alles angefangen hat wehzutun",
    "workshopDetails.heart.description": "Lass den Schmerz der Vergangenheit los und verbinde dich wieder mit der Person, die du warst, bevor alles angefangen hat wehzutun. Hier beginnt deine Heilung.",
    "workshopDetails.heart.point1": "Verarbeite ungeloeste Emotionen auf sichere Weise",
    "workshopDetails.heart.point2": "Loese Bindungen, die dich in der Vergangenheit festhalten",
    "workshopDetails.heart.point3": "Baue deine Beziehung zu dir selbst neu auf",
    "workshopDetails.heart.point4": "Oeffne dein Herz fuer neue Moeglichkeiten",
    
    "workshopDetails.nervous.title": "Nervous System Regulation",
    "workshopDetails.nervous.subtitle": "Bevor du heilen kannst, muss sich dein Koerper sicher fuehlen",
    "workshopDetails.nervous.description": "Bevor du heilen kannst, muss sich dein Koerper sicher fuehlen. Lerne, dein Nervensystem zu regulieren als Grundlage fuer emotionale Freiheit und nachhaltige Veraenderung.",
    "workshopDetails.nervous.point1": "Verstehe, wie dein Nervensystem alles beeinflusst",
    "workshopDetails.nervous.point2": "Lerne praktische Werkzeuge zur Regulation",
    "workshopDetails.nervous.point3": "Schaffe Sicherheit in deinem Koerper",
    "workshopDetails.nervous.point4": "Baue Resilienz fuer die Herausforderungen des Lebens auf",
    
    "workshopDetails.included.title": "Was enthalten ist",
    "workshopDetails.included.description": "Jeder Workshop gibt dir alles, was du fuer selbstgefuehrte Transformation brauchst.",
    "workshopDetails.included.video": "Video-Lektionen",
    "workshopDetails.included.videoDesc": "Ausfuehrliche Video-Inhalte, die dich durch jedes Konzept fuehren",
    "workshopDetails.included.workbook": "Digitales Arbeitsbuch",
    "workshopDetails.included.workbookDesc": "Uebungen und Reflexionen zur Vertiefung deines Verstaendnisses",
    "workshopDetails.included.lifetime": "Lebenslanger Zugang",
    "workshopDetails.included.lifetimeDesc": "Kehre zum Material zurueck, wann immer du es brauchst",
    
    "workshopDetails.pricing.individual": "Einzelner Workshop",
    "workshopDetails.pricing.perWorkshop": "pro Workshop",
    "workshopDetails.pricing.chooseSingle": "Waehle deinen Workshop",
    "workshopDetails.pricing.bestValue": "Bester Wert",
    "workshopDetails.pricing.fullProgram": "Komplettes Transformations-Programm",
    "workshopDetails.pricing.allFour": "Alle 4 Workshops enthalten",
    "workshopDetails.pricing.getBundle": "Hol dir das komplette Programm",
    "workshopDetails.prevWorkshop": "Vorheriger Workshop",
    "workshopDetails.nextWorkshop": "Naechster Workshop",

    // Mindset Foundation Journey Page
    "mindset.stepLabel": "Schritt",
    "mindset.journey.label": "Deine Foundation Journey",
    "mindset.journey.title": "Deine Foundation Journey",
    "mindset.journey.description": "Dieses Programm fuehrt dich Schritt fuer Schritt durch die wesentlichen Phasen der inneren Arbeit — mit Klarheit, Struktur und praktischen Werkzeugen, um dein Mindset zu verstehen und zu veraendern.",

    "mindset.step1.title": "Bewusstsein & Verstaendnis",
    "mindset.step1.intro": "Du beginnst damit, ein tieferes Bewusstsein fuer deine innere Welt aufzubauen.",
    "mindset.step1.point1": "Verstehe, wie Glaubenssaetze in der Kindheit geformt werden",
    "mindset.step1.point2": "Erkenne deine Gedanken, Emotionen und Verhaltensweisen",
    "mindset.step1.point3": "Identifiziere wiederkehrende Muster in deinem Leben",
    "mindset.step1.outcome": "Dieser Schritt hilft dir, klar zu sehen, was im Hintergrund lief.",

    "mindset.step2.title": "Mustererkennung",
    "mindset.step2.intro": "Du beginnst, die Zusammenhaenge in deiner persoenlichen Geschichte zu erkennen.",
    "mindset.step2.point1": "Identifiziere limitierende Glaubenssaetze und innere Blockaden",
    "mindset.step2.point2": "Verstehe emotionale Trigger und Reaktionen",
    "mindset.step2.point3": "Erkenne, wie vergangene Erfahrungen deine aktuelle Realitaet beeinflussen",
    "mindset.step2.outcome": "Dieser Schritt schafft tieferes Selbstverstaendnis und Klarheit.",

    "mindset.step3.title": "Mindset-Shift",
    "mindset.step3.intro": "Jetzt beginnst du aktiv, deine innere Perspektive zu veraendern.",
    "mindset.step3.point1": "Lerne, limitierende Glaubenssaetze zu hinterfragen",
    "mindset.step3.point2": "Entwickle neue staerkende Denkmuster",
    "mindset.step3.point3": "Beginne, dein Mindset bewusst zu veraendern",
    "mindset.step3.outcome": "Hier beginnt echte innere Veraenderung.",

    "mindset.step4.title": "Integration in den Alltag",
    "mindset.step4.intro": "Du bringst dein neues Bewusstsein in reale Lebenssituationen.",
    "mindset.step4.point1": "Wende das Gelernte in deinem Alltag an",
    "mindset.step4.point2": "Uebe neue Denk- und Reaktionsweisen",
    "mindset.step4.point3": "Baue Konsistenz und Selbstbewusstsein auf",
    "mindset.step4.outcome": "Dieser Schritt hilft dir, Erkenntnis in echte Lebensveraenderung umzuwandeln.",

    "mindset.included1": "Strukturierte Schritt-fuer-Schritt Videomodule",
    "mindset.included2": "Tiefgehendes Reflexions-Workbook mit Uebungen",
    "mindset.included3": "Praktische Umsetzungsaufgaben fuer den Alltag",
    "mindset.included4": "Klare Begleitung durch den gesamten Prozess",

    // Breaking Repeating Patterns Page
    "patterns.label": "Selbstgefuehrter Workshop",
    "patterns.title": "Breaking Repeating Patterns",
    "patterns.description": "Entdecke, warum du immer wieder dieselben Situationen und Beziehungen anziehst, und lerne, wie du endlich aus den Zyklen ausbrichst, die dich zurueckhalten.",
    "patterns.journey.label": "Der 5-teilige Workshop",
    "patterns.journey.title": "Verstehen und Durchbrechen deiner Muster",
    "patterns.journey.description": "In diesem Workshop bewegst du dich durch fuenf miteinander verbundene Teile, die dir helfen, deine Muster tief zu verstehen und dir Werkzeuge zum Unterbrechen des Zyklus geben.",

    "patterns.part1.title": "Verstehen von Mustern",
    "patterns.part1.intro": "Wir beginnen damit, zu erforschen, was emotionale und verhaltensgemaessige Muster sind und warum wir sie wiederholen.",
    "patterns.part1.point1": "Was sind emotionale und verhaltensgemaessige Muster?",
    "patterns.part1.point2": "Warum wir sie unbewusst wiederholen",
    "patterns.part1.point3": "Die Rolle des Unterbewusstseins",
    "patterns.part1.outcome": "Das ist nicht zufaellig",

    "patterns.part2.title": "Deine persoenliche Musterschleife",
    "patterns.part2.intro": "Du wirst deinen eigenen Musterzyklus abbilden und ihn zum ersten Mal klar sehen.",
    "patterns.part2.point1": "Trigger → Gedanke → Emotion → Verhalten → Ergebnis",
    "patterns.part2.point2": "Verstaendnis deines persoenlichen Zyklus",
    "patterns.part2.point3": "Uebung: Karte deines Musters",
    "patterns.part2.point4": "Sehe deine Schleife klar",
    "patterns.part2.outcome": "Du siehst deine Schleife zum ersten Mal",

    "patterns.part3.title": "Die Wurzel",
    "patterns.part3.intro": "Wir graben tiefer, um zu verstehen, woher deine Muster kommen.",
    "patterns.part3.point1": "Woher Muster kommen (Kindheit, Erfahrungen)",
    "patterns.part3.point2": "Emotionale Konditionierung",
    "patterns.part3.point3": "Warum Logik es nicht aendert",
    "patterns.part3.outcome": "Tiefes emotionales Verstaendnis",

    "patterns.part4.title": "Durchbrechen des Zyklus",
    "patterns.part4.intro": "Jetzt bekommst du die Werkzeuge, um das Muster in Echtzeit zu unterbrechen.",
    "patterns.part4.point1": "Bewusstsein in Echtzeit",
    "patterns.part4.point2": "Die 'Pause & Waehle' Methode",
    "patterns.part4.point3": "Eine neue Antwort waehlen",
    "patterns.part4.outcome": "Ich habe Kontrolle",

    "patterns.part5.title": "Integration",
    "patterns.part5.intro": "Du lernst, wie du das in deinem Alltag anwendest und es beibehältst.",
    "patterns.part5.point1": "Wie du das im Alltag anwendest",
    "patterns.part5.point2": "Warum Wiederholung wichtig ist",
    "patterns.part5.point3": "Kleine Schritte → großer Wandel",
    "patterns.part5.outcome": "Der Wandel im echten Leben beginnt",

    "patterns.included.title": "Was enthalten ist",
    "patterns.included1": "Tiefes Verstaendnis deiner sich wiederholenden Muster",
    "patterns.included2": "Klares Mapping deines persoenlichen Musterzyklus",
    "patterns.included3": "Verstaendnis der Wurzeln",
    "patterns.included4": "Ein praktisches Werkzeug zum Unterbrechen des Zyklus",

    "patterns.valuable.label": "Was diesen Workshop wertvoll macht",
    "patterns.valuable1": "Gehe ueber oberflächliches Verstaendnis zu echtem Wandel",
    "patterns.valuable2": "Bekomme Werkzeuge, die du sofort anwenden kannst",
    "patterns.valuable3": "Verstehe deine Muster auf emotionaler Ebene",
    "patterns.valuable4": "Beginne deine Reise zum Durchbrechen des Zyklus",

    "patterns.bridge": "Deine Muster zu verstehen ist maechtig — aber echter Wandel kommt von konsistenter Anleitung und tieferer Arbeit.",

    // Transformation Coaching Page
    "transformation.label": "Premium Programm",
    "transformation.title": "Personal Transformation Coaching",
    "transformation.description": "Ein zutiefst personalisiertes 1:1 Coaching-Erlebnis, das dich von Bewusstsein zu echter, nachhaltiger Transformation fuehrt - mit kontinuierlicher Unterstuetzung, Struktur und Accountability.",
    "transformation.investment": "Investment",
    "transformation.price": "Ab 249 EUR / Monat",
    
    "transformation.journey.title": "Deine Transformationsreise",
    "transformation.journey.description": "Dieses Programm folgt einem klaren und strukturierten Prozess, um echte und nachhaltige Veraenderung zu gewaehrleisten.",
    
    "transformation.phase1.title": "Bewusstsein & Muster-Identifikation",
    "transformation.phase1.description": "Du beginnst damit, Klarheit ueber deine inneren Muster zu gewinnen.",
    "transformation.phase1.point1": "Identifiziere unterbewusste Ueberzeugungen und emotionale Trigger",
    "transformation.phase1.point2": "Verstehe, wie deine Vergangenheit dein aktuelles Verhalten geformt hat",
    "transformation.phase1.point3": "Erkenne sich wiederholende Zyklen in deinem Leben",
    "transformation.phase1.outcome": "Diese Phase schafft tiefes Bewusstsein - das Fundament fuer echte Veraenderung.",
    
    "transformation.phase2.title": "Innere Arbeit & Glaubenssatz-Transformation",
    "transformation.phase2.description": "Wir beginnen direkt mit deinen limitierenden Glaubenssaetzen zu arbeiten.",
    "transformation.phase2.point1": "Alte Glaubenssysteme aufloesen",
    "transformation.phase2.point2": "Limitierende Gedanken neu rahmen und loslassen",
    "transformation.phase2.point3": "Dein inneres Narrativ veraendern",
    "transformation.phase2.outcome": "Hier beginnt echte innere Veraenderung.",
    
    "transformation.phase3.title": "Emotionale Integration",
    "transformation.phase3.description": "Transformation ist nicht nur mental - sie muss gefuehlt und integriert werden.",
    "transformation.phase3.point1": "Emotionale Blockaden verarbeiten",
    "transformation.phase3.point2": "Emotionales Bewusstsein und Stabilitaet aufbauen",
    "transformation.phase3.point3": "Deine Verbindung zu dir selbst staerken",
    "transformation.phase3.outcome": "Diese Phase schafft innere Sicherheit und emotionale Balance.",
    
    "transformation.phase4.title": "Anwendung im echten Leben & Stabilitaet",
    "transformation.phase4.description": "Jetzt bringen wir alles in deinen Alltag.",
    "transformation.phase4.point1": "Neue Muster in realen Situationen anwenden",
    "transformation.phase4.point2": "Konsistenz und neue Gewohnheiten aufbauen",
    "transformation.phase4.point3": "Langfristige Stabilitaet und Ausrichtung schaffen",
    "transformation.phase4.outcome": "Hier wird Transformation zu deinem neuen Normal.",
    
    "transformation.support.title": "Deine fortlaufende Unterstuetzungsstruktur",
    "transformation.support.description": "Um dich durch jede Phase zu begleiten, erhaeltst du:",
    "transformation.support.sessions": "Zwei-woechentliche 1:1 Transformations-Sessions",
    "transformation.support.sessionsDesc": "30-minuetige Zoom-Calls fuer tiefe Begleitung, Reflexion und Fortschrittsverfolgung",
    "transformation.support.emails": "Woechentliche Accountability-E-Mails",
    "transformation.support.emailsDesc": "Personalisierte Motivation und Accountability, um dich auf Kurs zu halten",
    "transformation.support.whatsapp": "Direkter WhatsApp-Zugang",
    "transformation.support.whatsappDesc": "Unterstuetzung in herausfordernden Momenten, inklusive 1x 15-Minuten-Call pro Monat bei Bedarf",
    "transformation.support.emailSupport": "Fortlaufender E-Mail-Support",
    "transformation.support.emailSupportDesc": "Fuer Fragen, Klarheit und Reflexion zwischen den Sessions",
    
    "transformation.different.title": "Was dieses Programm anders macht",
    "transformation.different.point1": "Vollstaendig personalisierte Begleitung - kein Einheitsansatz",
    "transformation.different.point2": "Kontinuierliche Unterstuetzung zwischen den Sessions",
    "transformation.different.point3": "Strukturierter Transformationsprozess (kein zufaelliges Coaching)",
    "transformation.different.point4": "Fokus auf Integration im echten Leben, nicht nur Verstaendnis",
    "transformation.different.point5": "Tiefe Arbeit an unterbewussten Glaubenssystemen",
    
    "transformation.finalNote": "Du wirst zwischen den Sessions nicht allein gelassen.",
    "transformation.finalNote2": "Du wirst durch jede Phase deiner Transformation begleitet - Schritt fuer Schritt.",
    "transformation.cta": "Starte deine Transformation",
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
