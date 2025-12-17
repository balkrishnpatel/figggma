"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface HomeServicesSectionProps {
  services: Service[]
}

export function HomeServicesSection({ services }: HomeServicesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverStates, setHoverStates] = useState(services.map(() => false))

  useEffect(() => {
    services.forEach((_, index) => {
      setTimeout(
        () => {
          setVisibleIndexes((prev) => [...prev, index])
        },
        100 + index * 150,
      )
    })

    // Calculate max scroll width
    const updateScrollMetrics = () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth
        const clientWidth = scrollContainerRef.current.clientWidth
        setMaxScroll(scrollWidth - clientWidth)
      }
    }

    updateScrollMetrics()
    window.addEventListener("resize", updateScrollMetrics)

    // Add scroll event listener
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const newPosition = scrollContainerRef.current.scrollLeft
        setScrollPosition(newPosition)

        // Calculate active index based on scroll position
        const containerWidth = scrollContainerRef.current.clientWidth
        const itemWidth = containerWidth / Math.min(4, services.length)
        const newIndex = Math.floor(newPosition / itemWidth)
        setActiveIndex(Math.min(newIndex, services.length - 1))
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", updateScrollMetrics)
      }
    }
  }, [services])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollBy({
        left: -containerWidth / 2,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollBy({
        left: containerWidth / 2,
        behavior: "smooth",
      })
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth
      const itemWidth = containerWidth / Math.min(4, services.length)
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative overflow-hidden py-20 px-4">
      {/* Navigation buttons */}
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
          onClick={scrollLeft}
          disabled={scrollPosition <= 10}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>

      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
          onClick={scrollRight}
          disabled={scrollPosition >= maxScroll - 10}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory max-w-[90rem] mx-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, index) => {
          const isHovered = hoverStates[index]
          const isVisible = visibleIndexes.includes(index)

          return (
            <div
              key={index}
              className="px-3 snap-start"
              style={{
                flex: "0 0 auto",
                width: "28.57%",
                minWidth: "380px",
                maxWidth: "480px",
              }}
            >
              <Card
                className={cn(
                  "overflow-hidden transition-all duration-700 border-gray-200 group relative h-full",
                  isHovered
                    ? "shadow-xl shadow-primary/10 -translate-y-2 border-primary/20"
                    : "shadow-md hover:shadow-lg",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                onMouseEnter={() => {
                  const newHoverStates = [...hoverStates]
                  newHoverStates[index] = true
                  setHoverStates(newHoverStates)
                }}
                onMouseLeave={() => {
                  const newHoverStates = [...hoverStates]
                  newHoverStates[index] = false
                  setHoverStates(newHoverStates)
                }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Top border gradient */}
                <div className="h-1.5 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-700 scale-x-0 group-hover:scale-x-100"></div>

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-700 group-hover:w-5 group-hover:h-5"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-accent/30 transition-all duration-700 group-hover:w-5 group-hover:h-5"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-accent/30 transition-all duration-700 group-hover:w-5 group-hover:h-5"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-700 group-hover:w-5 group-hover:h-5"></div>

                <CardHeader className="relative overflow-hidden p-5 pb-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-700 relative z-10 group-hover:animate-pulse-slow">
                    <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                    <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-500 relative z-10" />
                  </div>

                  <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors duration-500 relative z-10 font-bold">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-gray-500 relative z-10 group-hover:text-gray-700 transition-colors duration-500 mt-2 text-sm line-clamp-2">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 pb-2 px-5 min-h-[120px]">
                  <ul className="space-y-3">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start group/item"
                        style={{
                          transitionDelay: `${idx * 50}ms`,
                          opacity: isHovered ? 1 : 0.9,
                          transform: isHovered ? "translateX(0)" : "translateX(-5px)",
                          transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 mr-2.5 group-hover/item:scale-150 group-hover/item:bg-primary transition-all duration-500"></div>
                        <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-500">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10 pt-3 px-5 pb-5">
                  <Link href={`/services/${service.slug}`} className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-between transition-all duration-500 group/btn relative overflow-hidden border border-transparent group-hover:text-white"
                    >
                      <span className="font-medium relative z-10">Learn More</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-500 group-hover/btn:translate-x-2 relative z-10" />
                      <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Button>
                  </Link>
                </CardFooter>

                {/* Corner accent */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 translate-x-full group-hover:animate-shimmer"></div>
                </div>
              </Card>
            </div>
          )
        })}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === activeIndex ? "w-8 bg-primary" : "w-4 bg-gray-300 hover:bg-gray-400",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

