"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigateToContact = useCallback(() => {
    window.location.href = "/contact"
  }, [])

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.workshops"), href: "#workshops" },
    { name: t("nav.premiumProgram"), href: "/transformation-coaching" },
    { name: t("nav.booking"), href: "#booking" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-4 group"
        >
          <div className="relative overflow-hidden rounded-full shadow-md">
            <Image
              src="/images/logo-original.png"
              alt="Change Your Life with Linda"
              width={65}
              height={65}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              style={{ 
                filter: "sepia(1) saturate(4) brightness(0.9) hue-rotate(-30deg) drop-shadow(0 0 10px rgba(128, 0, 32, 0.7)) drop-shadow(0 0 20px rgba(139, 0, 0, 0.5))" 
              }}
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className={`font-serif text-lg font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              {t("header.brand")}
            </span>
            <span className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}>
              {t("header.tagline")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm tracking-wide font-light transition-all duration-300 hover:opacity-70 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled 
                  ? "text-foreground after:bg-foreground" 
                  : "text-white after:bg-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <LanguageToggle isScrolled={isScrolled} />
          <Button 
            size="sm"
            className={`px-8 py-5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
              isScrolled 
                ? "bg-foreground text-white hover:bg-foreground/80" 
                : "bg-white text-foreground hover:bg-white/90"
            }`}
            onClick={navigateToContact}
          >
            {t("nav.bookNow")}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle isScrolled={isScrolled} />
          <button
            className={`p-2 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with elegant animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border/50 shadow-lg"
          >
            <nav className="flex flex-col p-8 gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-foreground font-light text-lg tracking-wide py-2 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <Button 
                  className="bg-foreground text-white hover:bg-foreground/80 mt-4 w-full py-6 text-xs tracking-[0.15em] uppercase"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    navigateToContact()
                  }}
                >
                  {t("nav.bookNow")}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
