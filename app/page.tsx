import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <FloatingElements />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}
