"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HomeIndustryItemProps {
  industry: {
    title: string
    icon: string
    description: string
    slug: string
  }
  index: number
}

export function HomeIndustryItem({ industry, index }: HomeIndustryItemProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-colors duration-500 flex-shrink-0 group-hover:scale-110 transform transition-transform">
              <span className="text-3xl">{industry.icon}</span>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-500">
                {industry.title}
              </h3>

              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 mt-2 text-sm md:text-base">
                {industry.description}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link href={`/industries/${industry.slug}`} className="block">
              <Button
                variant="ghost"
                className="w-full justify-between group-hover:text-accent transition-colors duration-500 border border-transparent group-hover:border-accent/20 group-hover:bg-accent/5"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  )
}

