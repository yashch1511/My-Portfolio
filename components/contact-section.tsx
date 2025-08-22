"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import {db} from "@/components/firebase" // adjust path if firebase.ts is in same folder
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
useEffect(() => {
  console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
  console.log("Project ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);
}, []);

  

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget as HTMLFormElement;
    const target = e.target as typeof e.target & {
      user_name: { value: string }
      user_email: { value: string }
      subject: { value: string }
      message: { value: string }
    }

    try {
  await addDoc(collection(db, "messages"), {
    name: target.user_name.value,
    email: target.user_email.value,
    subject: target.subject.value,
    message: target.message.value,
    createdAt: serverTimestamp(),
  })

  alert("Message sent successfully!")
  form.reset()
} catch (err) {
  console.error("Error sending message: ", err)
  alert("Failed to send message")
} finally {
  setLoading(false) // ✅ always reset loading
}
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-primary">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-primary">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">yashch1511@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">7021212867</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-chart-3" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-heading font-semibold text-xl mb-4 text-secondary">Current Status</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <Badge variant="secondary">Available for new projects</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm currently accepting new freelance projects and full-time opportunities. Let's discuss how we can
                    work together!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="user_name"
                        placeholder="Your name"
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="user_email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      placeholder="Project inquiry"
                      className="hover:border-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="hover:border-primary/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full hover:scale-105 transition-all duration-300 animate-glow"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
