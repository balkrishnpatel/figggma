"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-mobile"

interface Industry {
  title: string
  icon: string
  description: string
  slug: string
}

interface HomeIndustriesSectionProps {
  industries: Industry[]
}

export function HomeIndustriesSection({ industries }: HomeIndustriesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  // Track mouse position for 3D card effect
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  // Calculate 3D tilt effect for cards
  const get3DTiltStyle = (index: number) => {
    if (isMobile || !cardRefs.current[index] || activeIndex !== index) return {}

    const card = cardRefs.current[index]
    if (!card) return {}

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mousePosition.x - centerX) / (rect.width / 2)) * 5 // Max 5 degrees
    const rotateX = ((centerY - mousePosition.y) / (rect.height / 2)) * 5 // Max 5 degrees

    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out",
    }
  }

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-20 px-4">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10 animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/5 blur-[100px] dark:bg-accent/10 animate-pulse-slow"></div>

        {/* Animated dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="h-full w-full bg-[radial-gradient(rgba(217,70,239,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
      </div>

      {/* Industries grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
        {industries.map((industry, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={industry.slug}
              ref={(el) => (cardRefs.current[index] = el)}
              className={cn(
                "industry-card relative transform transition-all duration-700",
                !isInView && "translate-y-16 opacity-0",
              )}
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0) rotate(0)" : "translateY(40px) rotate(2deg)",
                ...get3DTiltStyle(index),
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="group relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
                {/* Modern card background with dark overlay */}
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl z-0"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/5 group-hover:to-accent/5 dark:group-hover:from-primary/10 dark:group-hover:to-accent/10 transition-colors duration-700 rounded-2xl"></div>

                {/* Animated border with gradient - DARKER BORDER HERE */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 dark:border-white z-10 overflow-hidden">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent transition-colors duration-700",
                      activeIndex === index ? "via-accent/20" : "",
                    )}
                  ></div>
                </div>

                {/* Decorative corner accents */}
                <div
                  className={cn(
                    "absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-700 rounded-tl-xl z-10",
                    activeIndex === index && "border-primary/50",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-accent/30 transition-all duration-700 rounded-tr-xl z-10",
                    activeIndex === index && "border-accent/50",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-accent/30 transition-all duration-700 rounded-bl-xl z-10",
                    activeIndex === index && "border-accent/50",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-700 rounded-br-xl z-10",
                    activeIndex === index && "border-primary/50",
                  )}
                ></div>

                {/* Card content with 3D effect */}
                <div className="p-8 relative z-20">
                  {/* Icon with modern animation */}
                  <div className="mb-6 inline-block">
                    <div
                      className={cn(
                        "relative flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-500",
                        activeIndex === index
                          ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg"
                          : "bg-gray-100 text-primary dark:bg-gray-800 dark:text-gray-200",
                      )}
                    >
                      <span
                        className={cn("text-3xl transition-all duration-500", activeIndex === index ? "scale-110" : "")}
                      >
                        {industry.icon}
                      </span>
                    </div>

                    {/* Animated decorative elements */}
                    {activeIndex === index && (
                      <>
                        <div className="absolute -inset-3 border border-dashed border-primary/30 rounded-xl rotate-6 animate-spin-slow"></div>
                        <div className="absolute -inset-6 border border-dashed border-accent/20 rounded-xl -rotate-3 animate-spin-slow-reverse"></div>
                        <div className="absolute h-2 w-2 rounded-full bg-primary/60 animate-float"></div>
                        <div
                          className="absolute h-1.5 w-1.5 rounded-full bg-accent/60 animate-float"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </>
                    )}
                  </div>

                  {/* Content with animations */}
                  <h3
                    className={cn(
                      "text-2xl font-bold mb-3 transition-all duration-300",
                      activeIndex === index ? "text-primary" : "text-gray-900 dark:text-gray-100",
                    )}
                  >
                    {industry.title}

                    {/* Animated underline */}
                    <span
                      className={cn(
                        "block h-0.5 bg-gradient-to-r from-primary to-accent mt-1 transition-all duration-500",
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
                    {industry.description}
                  </p>

                  {/* Modern CTA button */}
                  {/* <Link href={`/industries/${industry.slug}`}> */}
                    <Button
                      className={cn(
                        "group/btn relative overflow-hidden transition-all duration-500",
                        activeIndex === index
                          ? "bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-lg"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
                      )}
                    >
                      <span className="relative z-10">Learn More</span>
                      <span
                        className={cn(
                          "relative z-10 ml-2 transition-all duration-300",
                          "group-hover/btn:translate-x-1",
                        )}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>

                      {/* Animated background effect */}
                      {activeIndex === index && (
                        <>
                          <span className="absolute inset-0 z-0 -translate-x-full animate-shimmer"></span>
                          <span className="absolute inset-0 z-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        </>
                      )}
                    </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

