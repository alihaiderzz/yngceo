"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lightbulb, Target, Megaphone, DollarSign, Presentation, BookOpen, ArrowRight, Check } from "lucide-react"

export default function FounderOSLanding() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 lg:py-32 lg:py-40 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
        
        <div className="relative max-w-6xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          {/* Logo */}
          <div className="flex justify-center mb-2 sm:mb-4 md:mb-6">
            <div className="relative h-[80px] w-[200px] sm:h-[100px] sm:w-[260px] md:h-[120px] md:w-[320px] lg:h-[140px] lg:w-[370px] xl:h-[160px] xl:w-[400px]">
              <Image 
                src="/YNG%20CEO.PNG" 
                alt="YNG CEO" 
                fill 
                className="object-contain"
                style={{ mixBlendMode: 'darken' }}
                priority
              />
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm mb-1 sm:mb-2 md:mb-4">
            <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-black/60 leading-tight">
              <span className="hidden sm:inline">From YNG CEO • </span>Now Available
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-balance leading-[1.05] px-2">
            The Operating System for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Young Entrepreneurs</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-black/5 -rotate-1" />
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/60 font-light max-w-3xl mx-auto text-balance leading-relaxed tracking-tight px-2 sm:px-4">
            Plan, build, and launch your next business from a single Notion dashboard.
          </p>
          
          <div className="pt-2 sm:pt-4 md:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
            <Button 
              size="lg" 
              className="group bg-black text-white hover:bg-black/90 text-sm sm:text-base px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg w-full sm:w-auto" 
              asChild
            >
              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Get FounderOS
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full font-medium tracking-tight border-2 border-black/10 hover:border-black/30 bg-white/50 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* The Dream Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4">We Get It</h2>
              <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light leading-relaxed text-white/90 px-2 sm:px-4">
              <p>
                We are all hustlers. Young CEOs building our empires before the sun rises and long after it sets. 
                Every single day, we wake up chasing something bigger—that dream car, that dream home, that life 
                of complete freedom.
              </p>
              
              <p>
                We scroll through Instagram, seeing success stories and thinking, "That could be me." We stay up 
                late, working on side hustles while our friends are out. We skip the parties, skip the "normal" 
                life, because we're obsessed with one thing: making it happen.
              </p>
              
              <p>
                The grind is real. The late nights are real. The doubt and the fear—they're all real. But so is 
                the vision. So is the hunger. So is that burning desire to create something that's completely ours.
              </p>
              
              <p className="pt-4 text-white font-medium">
                FounderOS isn't just a tool. It's your command center for turning those late-night ideas into 
                real businesses. For tracking every dollar, every milestone, every win. Because the only thing 
                standing between you and that life you're chasing is execution—and we built this to make that 
                execution effortless.
              </p>
              
              <p className="text-white/80 italic text-sm sm:text-base md:text-lg">
                The life you want exists. The business you're building will work. The freedom you're chasing is 
                closer than you think. Let's make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section id="features" className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6">What's Inside</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/50 font-light max-w-2xl mx-auto">
              Everything you need to build, launch, and scale your startup
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Idea Vault",
                description: "Capture and rank your startup ideas systematically.",
              },
              {
                icon: Target,
                title: "Execution Tracker",
                description: "Stay consistent with daily goals and milestones.",
              },
              {
                icon: Megaphone,
                title: "Marketing Hub",
                description: "Plan your content and ads in one centralized place.",
              },
              {
                icon: DollarSign,
                title: "Finance Sheet",
                description: "Track revenue, expenses, and profits with clarity.",
              },
              {
                icon: Presentation,
                title: "Pitch Zone",
                description: "Build investor-ready decks with AI guidance.",
              },
              {
                icon: BookOpen,
                title: "Learning Library",
                description: "Curated resources to upgrade your skills continuously.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group relative p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-black/5 hover:border-black/20 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 rounded-xl sm:rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-black/5 group-hover:bg-black flex items-center justify-center mb-3 sm:mb-4 md:mb-6 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-black/60 font-light leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6">Why It Works</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/50 font-light max-w-2xl mx-auto">
              Built by founders, for founders
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {[
              {
                title: "Built for Founders",
                description: "Made by someone who gets the grind. Every feature is battle-tested.",
              },
              {
                title: "Plug & Play",
                description: "Instantly duplicate to Notion and start building. No setup required.",
              },
              {
                title: "Always Evolving",
                description: "Regular updates with new tools, frameworks, and best practices.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3 sm:space-y-4 md:space-y-5 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/5 group-hover:bg-black transition-colors duration-300 flex items-center justify-center mx-auto mb-2">
                  <Check className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-black/60 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-xs mx-auto px-2 sm:px-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-balance leading-[1.1] px-2 sm:px-4">
            Ready to build your empire?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/60 font-light text-balance max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Join hundreds of young entrepreneurs using FounderOS to turn ideas into reality.
          </p>
          <div className="pt-2 sm:pt-4 md:pt-6 px-2 sm:px-4">
            <Button 
              size="lg" 
              className="group bg-black text-white hover:bg-black/90 text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 lg:py-8 rounded-full font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl w-full sm:w-auto" 
              asChild
            >
              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Get FounderOS
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <div className="relative h-[60px] w-[160px] sm:h-[80px] sm:w-[220px] md:h-[100px] md:w-[280px] lg:h-[120px] lg:w-[340px] xl:h-[140px] xl:w-[380px]">
              <Image 
                src="/YNG%20CEO.PNG" 
                alt="YNG CEO" 
                fill 
                className="object-contain"
                style={{ mixBlendMode: 'darken' }}
              />
            </div>
            <p className="text-black/50 font-light text-xs sm:text-sm text-center md:text-left">© 2025 YNG CEO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
