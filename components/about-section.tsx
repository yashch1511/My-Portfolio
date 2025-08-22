"use client"

import { cn } from "@/lib/utils"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="font-heading font-semibold text-2xl mb-4 text-primary">Hello Recruiters</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Aspiring software developer with strong problem-solving skills and a passion for building innovative, data-driven solutions. Proficient in React, Node.js, PostgreSQL, Firebase, with expertise in web development. Adept at  optimizing system performance, and creating efficient, user-centric applications. Seeking opportunities to apply my technical expertise and critical thinking to impactful projects while continuously learning and growing in the field.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Java Spring Boot</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="font-heading font-semibold text-2xl mb-4 text-secondary">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of technology to solve real-world problems. Every project is an opportunity
                    to learn something new and push the boundaries of what's possible in web development.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
                <Avatar className="w-80 h-120 border-4 border-primary/20 relative z-10">
                  <AvatarImage src="/photo.png.jpeg" alt="Yash Chaturvedi" />
                  <AvatarFallback className="text-6xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    AC
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
