"use client"

import { cn } from "@/lib/utils"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-primary",
    skills: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 60 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 75 },
    ],
  },
  
  {
    title: "Backend & Database",
    icon: Database,
    color: "text-chart-3",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Spring Boot", level: 50 },
      { name: "Firebase", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Zap,
    color: "text-chart-4",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Postman", level: 78 },
      { name: "Bootstrap", level: 72 },
      { name: "Testing", level: 80 },
    ],
  },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(
                () => {
                  setAnimatedSkills((prev) => new Set([...prev, `${categoryIndex}-${skillIndex}`]))
                },
                categoryIndex * 200 + skillIndex * 100,
              )
            })
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for building exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className="glass-effect hover:scale-105 transition-all duration-300 border-primary/10 hover:border-primary/30"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className={cn("h-6 w-6", category.color)} />
                      <span className="font-heading">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress
                          value={animatedSkills.has(`${categoryIndex}-${skillIndex}`) ? skill.level : 0}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
