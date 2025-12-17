"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Service } from "@/lib/services"

interface HomeServiceItemProps {
  service: Service
  index?: number
}

export function HomeServiceItem({ service, index = 0 }: HomeServiceItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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
    <div
      className={cn(
        "relative group overflow-hidden rounded-2xl transition-all duration-500 bg-white",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        isHovered ? "shadow-xl shadow-primary/10 scale-[1.02]" : "shadow-md hover:shadow-lg",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-500 flex-shrink-0 group-hover:scale-110 transform transition-transform">
            <service.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-500" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-500 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 text-sm">
              {service.shortDescription}
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start"
              style={{
                transitionDelay: `${idx * 50}ms`,
                opacity: isHovered ? 1 : 0.9,
                transform: isHovered ? "translateX(0)" : "translateX(-5px)",
                transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 group-hover:bg-primary transition-all duration-500 flex-shrink-0"></div>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <Link href={`/services/${service.slug}`} className="block">
          <Button
            variant="ghost"
            className="w-full justify-between group-hover:text-primary transition-colors duration-500 border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5"
          >
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

