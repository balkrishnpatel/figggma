"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services"

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsVisible(true)
      },
      100 + index * 150,
    )

    return () => clearTimeout(timer)
  }, [index])

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-700 border-gray-200 group relative h-full",
        isHovered ? "shadow-xl shadow-primary/10 -translate-y-3 border-primary/20" : "shadow-md hover:shadow-lg",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Top border gradient */}
      <div className="h-1.5 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-700 scale-x-0 group-hover:scale-x-100"></div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-700 group-hover:w-6 group-hover:h-6"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-accent/30 transition-all duration-700 group-hover:w-6 group-hover:h-6"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-accent/30 transition-all duration-700 group-hover:w-6 group-hover:h-6"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-700 group-hover:w-6 group-hover:h-6"></div>

      <CardHeader className="relative overflow-hidden">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-700 relative z-10 group-hover:animate-pulse-slow">
          <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
          <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-500 relative z-10" />
        </div>

        <CardTitle className="text-2xl text-gray-900 group-hover:text-primary transition-colors duration-500 relative z-10 font-bold">
          {service.title}
        </CardTitle>

        <CardDescription className="text-gray-500 relative z-10 group-hover:text-gray-700 transition-colors duration-500 mt-3 text-base">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 pb-2">
        <ul className="space-y-3.5">
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
              <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 mr-3 group-hover/item:scale-150 group-hover/item:bg-primary transition-all duration-500"></div>
              <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-500">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="relative z-10 pt-4">
        <Link href={`/services/${service.slug}`} className="w-full">
          <Button
            variant="ghost"
            className="w-full justify-between group-hover:text-primary transition-all duration-500 group/btn border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 py-6"
          >
            <span className="font-medium">Learn More</span>
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-500 group-hover/btn:translate-x-2" />
          </Button>
        </Link>
      </CardFooter>

      {/* Corner accent */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 translate-x-full group-hover:animate-shimmer"></div>
      </div>
    </Card>
  )
}

