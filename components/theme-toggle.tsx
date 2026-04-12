"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  isScrolled?: boolean
}

export function ThemeToggle({ isScrolled = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
        isScrolled 
          ? "text-foreground hover:bg-foreground/10" 
          : "text-white hover:bg-white/10"
      }`}
      aria-label={theme === "dark" ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
