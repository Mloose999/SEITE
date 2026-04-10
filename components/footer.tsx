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
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/logo.jpg"
              alt="Change Your Life with Linda"
              width={140}
              height={140}
              className="object-contain"
            />
            <div>
              <p className="font-serif text-2xl font-extrabold mb-1 text-accent">{t("header.brand")}</p>
              <p className="text-secondary-foreground/70 text-sm italic">{t("header.tagline")}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-accent" />
              </Link>
            ))}
          </div>
        </div>

        {/* Impressum */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="text-center mb-6">
            <h3 className="font-serif text-lg font-semibold text-accent mb-4">{t("footer.impressum")}</h3>
            <div className="text-secondary-foreground/70 text-sm space-y-1">
              <p className="font-medium text-secondary-foreground">Linda Holtkamp</p>
              <p>Reemstückenkamp 22 c, 22523 Hamburg</p>
              <p>
                <a href="tel:+491715812251" className="hover:text-accent transition-colors">
                  +49 171 5812251
                </a>
              </p>
              <p>
                <a href="mailto:info@lindaholtkamp.com" className="hover:text-accent transition-colors">
                  info@lindaholtkamp.com
                </a>
              </p>
            </div>
          </div>
          <p className="text-secondary-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Linda Holtkamp - Mindset Coaching. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
