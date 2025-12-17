"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HomeTechnologyItemProps {
  technology: {
    title: string
    icon: string
    description: string
    slug: string
  }
  index: number
}

export function HomeTechnologyItem({ technology, index }: HomeTechnologyItemProps) {
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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Left border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform origin-top transition-transform duration-500 scale-y-0 group-hover:scale-y-100"></div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-500 flex-shrink-0 group-hover:scale-110 transform transition-transform">
              <span className="text-3xl">{technology.icon}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-500">
              {technology.title}
            </h3>
          </div>

          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-500 mb-6 text-sm md:text-base">
            {technology.description}
          </p>

          <Link href={`/technologies/${technology.slug}`} className="block">
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
    </motion.div>
  )
}

