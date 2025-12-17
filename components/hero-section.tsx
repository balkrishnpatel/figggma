"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const heroElement = heroRef.current
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement)
      }
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out py-12 pt-24 md:py-0"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(23, 165, 137, 0.4) 0%, rgba(0, 112, 186, 0.6) 35%, rgba(17, 24, 39, 1) 100%)
        `,
      }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-36 h-36 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-accent/30 rounded-full blur-xl animate-pulse"></div>

        {/* Grid overlay with improved opacity */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:50px_50px]"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10 mt-8 sm:mt-0">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-md rounded-full mb-4 md:mb-6 border border-white/30 animate-fade-in mt-4 sm:mt-0">
            <span className="text-xs md:text-sm font-medium text-white flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Transforming Businesses with Technology
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight relative animate-slide-up">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent relative z-10">
              Vastorax
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-foreground via-accent to-accent/80 bg-clip-text text-transparent relative animation-delay-200">
              Digital Solutions for the Modern Era
              <div className="absolute -inset-1 bg-accent/10 blur-sm rounded-lg -z-10"></div>
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-8 animate-slide-up animation-delay-400">
            We provide comprehensive IT services and digital solutions to help businesses thrive in an increasingly
            digital world.
          </p>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6 animate-fade-in animation-delay-600">
            {[
              { text: "Trusted by 500+ Companies", icon: "🏢" },
              { text: "24/7 Support", icon: "🔧" },
              { text: "99.9% Uptime", icon: "⚡" },
              { text: "Award-Winning Solutions", icon: "🏆" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center group bg-white/15 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10 shadow-lg"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 text-sm md:text-lg bg-white/10 rounded-full">
                  {item.icon}
                </div>
                <span className="text-white text-xs md:text-sm group-hover:text-white transition-colors font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

