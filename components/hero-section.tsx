"use client"

import { cn } from "@/lib/utils"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { SiLeetcode } from "react-icons/si";


export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth"
    })
  }
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <Badge variant="secondary" className="mb-6 animate-glow">
            Available for new opportunities
          </Badge>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-in-up">
            Web
            <br />
            Developer
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            I craft exceptional digital experiences through innovative design and cutting-edge technology
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="group hover:scale-105 transition-all duration-300"
            
              onClick={scrollToProjects}>
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-3">
              <Button
                             onClick={() => window.open("https://github.com/yashch1511", "_blank")}

                variant="outline"
                size="icon"
                className="hover:scale-110 transition-all duration-300 bg-transparent"
              >
                <Github className="h-4 w-4" />
              </Button>

              <a
  href="https://leetcode.com/u/yashchaturvedi1511/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="icon"
    className="hover:scale-110 transition-all duration-300 bg-transparent hover:text-[#FFA116]"
  >
    <SiLeetcode className="h-4 w-4" />
  </Button>
</a>
              
              
            </div>
          </div>
        </div>
      </div>

      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  )
}
