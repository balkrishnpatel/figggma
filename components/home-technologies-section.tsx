"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-mobile"

interface Technology {
  title: string
  icon: string
  description: string
  slug: string
}

interface HomeTechnologiesSectionProps {
  technologies: Technology[]
}

export function HomeTechnologiesSection({ technologies }: HomeTechnologiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  // Calculate parallax effect for each card
  const getParallaxStyle = (index: number) => {
    if (isMobile || !isInView) return {}

    // Different parallax speeds based on index
    const speed = index % 2 === 0 ? 0.03 : -0.03
    const translateY = scrollY * speed

    return {
      transform: `translateY(${translateY}px)`,
      transition: "transform 0.1s ease-out",
    }
  }

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-20 px-4">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-accent/5 blur-[100px] dark:bg-accent/10 animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10 animate-pulse-slow"></div>

        {/* Animated wave pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
            fill="url(#gradient)"
            className="animate-wave-slow"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Technologies grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={tech.slug}
            ref={(el) => (cardRefs.current[index] = el)}
            className={cn(
              "tech-card relative transform transition-all duration-700",
              !isInView && "translate-y-16 opacity-0",
            )}
            style={{
              transitionDelay: `${index * 150}ms`,
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(40px)",
              ...getParallaxStyle(index),
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="group relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
              {/* Modern card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/90 dark:from-gray-900 dark:to-gray-950/90 rounded-2xl z-0"></div>

              {/* Animated border - DARKER BORDER HERE */}
              <div className="absolute inset-0 rounded-2xl border border-gray-200 dark:border-white z-10 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent/50 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

              {/* Floating gradient blobs */}
              <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Card content */}
              <div className="p-8 relative z-20">
                {/* Icon with modern animation */}
                <div className="mb-6 inline-block">
                  <div
                    className={cn(
                      "relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 overflow-hidden",
                      activeIndex === index
                        ? "bg-gradient-to-br from-accent to-primary text-white shadow-lg"
                        : "bg-gray-100/80 backdrop-blur-sm text-accent dark:bg-gray-800/80 dark:text-gray-200",
                    )}
                  >
                    <span
                      className={cn("text-3xl transition-all duration-500", activeIndex === index ? "scale-110" : "")}
                    >
                      {tech.icon}
                    </span>

                    {/* Animated background shine */}
                    {activeIndex === index && (
                      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-white/20"></div>
                    )}
                  </div>

                  {/* Animated rings */}
                  <div
                    className={cn(
                      "absolute -inset-2 rounded-full border border-dashed border-accent/30 transition-all duration-500 opacity-0 scale-0",
                      activeIndex === index && "opacity-100 scale-100 animate-spin-slow",
                    )}
                  ></div>

                  {/* Floating particles */}
                  {activeIndex === index && (
                    <>
                      <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-accent/60 animate-float"></span>
                      <span
                        className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-primary/60 animate-float"
                        style={{ animationDelay: "1s" }}
                      ></span>
                    </>
                  )}
                </div>

                {/* Content with animations */}
                <h3
                  className={cn(
                    "text-2xl font-bold mb-3 transition-all duration-300",
                    activeIndex === index ? "text-accent" : "text-gray-900 dark:text-gray-100",
                  )}
                >
                  {tech.title}

                  {/* Animated underline */}
                  <span
                    className={cn(
                      "block h-0.5 bg-gradient-to-r from-accent to-primary mt-1 transition-all duration-500",
                      activeIndex === index ? "w-1/2" : "w-0",
                    )}
                  ></span>
                </h3>

                <p
                  className={cn(
                    "text-gray-600 dark:text-gray-400 mb-6 transition-all duration-500 line-clamp-3",
                    activeIndex === index ? "text-gray-700 dark:text-gray-300" : "",
                  )}
                >
                  {tech.description}
                </p>

                {/* Modern CTA button */}
                <Link href={`/technologies/${tech.slug}`}>
                  <Button
                    className={cn(
                      "group/btn relative overflow-hidden transition-all duration-500",
                      activeIndex === index
                        ? "bg-gradient-to-r from-accent to-primary text-white shadow-md hover:shadow-lg"
                        : "bg-gray-100/80 backdrop-blur-sm text-gray-800 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700/80",
                    )}
                  >
                    <span className="relative z-10">Learn More</span>
                    <span
                      className={cn("relative z-10 ml-2 transition-all duration-300", "group-hover/btn:translate-x-1")}
                    >
                      <ArrowRight className={cn("h-4 w-4", activeIndex === index ? "animate-pulse-subtle" : "")} />
                    </span>

                    {/* Animated background effect */}
                    {activeIndex === index && (
                      <span className="absolute inset-0 z-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

