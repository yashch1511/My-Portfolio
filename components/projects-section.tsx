"use client"

import { cn } from "@/lib/utils"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Student teacher portal",
    description:
      "A web application designed to streamline communication between teachers and students, similar to Microsoft Teams. The platform features dedicated chatrooms where teachers can interact with their assigned students in real time. It also includes an announcements section for posting important updates and a progress tracking feature to monitor student activities. Built with React, Node.js, and Firebase, the system ensures a responsive, secure, and scalable environment. Role-based access control allows only authorized users to join specific chatrooms, providing an intuitive and organized experience for both students and teachers.",
    image: "/image.png",
    tags: ["React.js", "Tailwind", "Firebase"],
    featured: true,
  },
  {
    title: "InternHub",
    description:
    "Designed and developed a dynamic recruitment platform that connects recruiters with candidates, featuring \textbf{Firebase Authentication for secure role-based access}, real-time job application handling, and intuitive dashboards for recruiters to \textbf{post listings, review applicants}, and \textbf{send automated offer letters via one-click email integration}, streamlining the entire hiring workflow.",
    image: "/interhub.png",
    tags: ["React", "Node.js", "Firebase", "CSS"],
  },
  {
    title: " Multi-Account Zerodha Trading Interface",
    description: "Built a full-stack trading platform using the Zerodha Kite Connect API that supports \textbf{simultaneous access and order placement across multiple accounts}. Developed a TypeScript backend to manage independent session tokens securely, and a React frontend for toggling between accounts, viewing holdings, and placing orders instantly. \textbf{Reduced account-switching and trade execution time by up to 90\%, saving approximately 8 minutes per session} for users managing 3–5 accounts. ",
    image: "/3d-portfolio-website.png",
    tags: ["Zerodha-API", "React", "CSS", "Node.js"],
  },
  {
    title: "AI Pac-Man Game",
    description:"This project implements a Deep Convolutional Q-Network (DCQN) to train an AI agent to play Atari Ms. Pac-Man using Gymnassium and PyTorch The agent learns to maximize rewards by eating pellets while avoiding ghosts, and it reaches human-level performance after training.",
    image: "/pacman.png",
    tags: ["PyTorch", "Torchvision", "Gymnasium", "Python"],
  },
 
]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={projects[0].image || "/placeholder.svg"}
                    alt={projects[0].title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    Featured Project
                  </Badge>
                  <h3 className="font-heading font-bold text-3xl mb-4 text-primary">{projects[0].title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <Card
                key={project.title}
                className="glass-effect hover:scale-105 transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
