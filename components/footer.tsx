"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.booking"), href: "#booking" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-beige text-foreground py-20 relative">
      {/* Top transition gradient from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-beige-light via-beige-light/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-5">
            <Image
              src="/images/logo-original.png"
              alt="Change Your Life with Linda"
              width={90}
              height={90}
              className="object-contain"
              style={{ 
                filter: "sepia(1) saturate(4) brightness(0.9) hue-rotate(-30deg) drop-shadow(0 0 10px rgba(128, 0, 32, 0.7)) drop-shadow(0 0 20px rgba(139, 0, 0, 0.5))" 
              }}
            />
            <div>
              <p className="font-serif text-2xl font-medium mb-2 text-foreground">{t("header.brand")}</p>
              <p className="text-foreground/50 text-sm font-light tracking-wide">{t("header.tagline")}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-foreground/60 hover:text-foreground transition-colors duration-300 text-sm font-light tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-11 h-11 border border-foreground/20 flex items-center justify-center hover:border-foreground/50 hover:bg-white/30 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 text-foreground/70" />
              </Link>
            ))}
          </div>
        </div>

        {/* Impressum */}
        <div className="mt-16 pt-10 border-t border-foreground/10">
          <div className="text-center mb-8">
            <h3 className="font-serif text-lg font-medium text-foreground mb-5 tracking-wide">{t("footer.impressum")}</h3>
            <div className="text-foreground/50 text-sm space-y-2 font-light">
              <p className="font-medium text-foreground/80">Linda Holtkamp</p>
              <p>Reemstuckenkamp 22 c, 22523 Hamburg</p>
              <p>
                <a href="tel:+491715812251" className="hover:text-foreground transition-colors duration-300">
                  +49 171 5812251
                </a>
              </p>
              <p>
                <a href="mailto:info@lindaholtkamp.com" className="hover:text-foreground transition-colors duration-300">
                  info@lindaholtkamp.com
                </a>
              </p>
            </div>
          </div>
          <p className="text-foreground/40 text-sm text-center font-light">
            © {new Date().getFullYear()} Linda Holtkamp - Mindset Coaching. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
