"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect py-4" : "py-6",
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="font-heading font-bold text-xl text-primary">Yash Chaturvedi</div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "transition-all duration-300 hover:scale-105",
                  activeSection === item.id && "animate-glow",
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
