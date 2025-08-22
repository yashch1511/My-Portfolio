"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "0s", animationDuration: "8s" }}
      />
      <div
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/20 rounded-full animate-float"
        style={{ animationDelay: "2s", animationDuration: "10s" }}
      />
      <div
        className="absolute top-1/2 left-1/6 w-3 h-3 bg-accent/30 rounded-full animate-float"
        style={{ animationDelay: "4s", animationDuration: "12s" }}
      />
      <div
        className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-chart-3/20 rounded-full animate-float"
        style={{ animationDelay: "6s", animationDuration: "9s" }}
      />

      {/* Floating squares */}
      <div
        className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary/10 rotate-45 animate-float"
        style={{ animationDelay: "1s", animationDuration: "11s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-secondary/15 rotate-45 animate-float"
        style={{ animationDelay: "3s", animationDuration: "7s" }}
      />

      {/* Larger background elements */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0s", animationDuration: "20s" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-secondary/5 to-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "10s", animationDuration: "25s" }}
      />
    </div>
  )
}
