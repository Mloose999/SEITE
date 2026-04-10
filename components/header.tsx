"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.workshops"), href: "#workshops" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.jpg"
            alt="Change Your Life with Linda"
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className={`font-serif text-lg font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-card"
            }`}>
              {t("header.brand")}
            </span>
            <span className={`text-xs font-medium italic transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-card/80"
            }`}>
              {t("header.tagline")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <LanguageToggle isScrolled={isScrolled} />
          <Button 
            size="sm"
            className={`px-6 transition-all ${
              isScrolled 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-card text-foreground hover:bg-card/90"
            }`}
            onClick={() => router.push("/contact")}
          >
            {t("nav.bookNow")}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle isScrolled={isScrolled} />
          <button
            className={`p-2 ${isScrolled ? "text-foreground" : "text-card"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-foreground font-medium py-2"
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
              onClick={() => {
                router.push("/contact")
                setIsMobileMenuOpen(false)
              }}
            >
              {t("nav.bookNow")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
