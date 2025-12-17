"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface IndustryProps {
  industry: {
    title: string
    icon: string
    description: string
    slug: string
  }
  index: number
}

export function IndustryCard({ industry, index }: IndustryProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="h-full p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

        <div className="flex items-start mb-4 relative z-10">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mr-4 group-hover:from-accent/20 group-hover:to-primary/20 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
            <span className="text-2xl">{industry.icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-accent transition-colors duration-300 mt-2">
            {industry.title}
          </h3>
        </div>

        <p className="text-gray-600 mb-4 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
          {industry.description}
        </p>

        <div className="relative z-10">
          <Link href={`/industries/${industry.slug}`} className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-between group-hover:text-primary transition-colors duration-300 group/btn"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-2" />
            </Button>
          </Link>
        </div>

        {/* Corner accent */}
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  )
}

