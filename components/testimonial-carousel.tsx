"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Users, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  author: string
  position: string
  image: string
  companyLogo?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalTestimonials = testimonials.length
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
  }

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, totalTestimonials])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column - Stats and heading */}
        <div className="lg:col-span-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 animate-pulse-slow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    100+
                  </h3>
                  <p className="text-gray-600">Clients Worldwide</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 animate-float">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    80+
                  </h3>
                  <p className="text-gray-600">Countries Served</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    800+
                  </h3>
                  <p className="text-gray-600">Client Reviews</p>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-70"></div>
            </div>

            {/* Client logos */}
          </motion.div>
        </div>

        {/* Right column - Testimonial carousel */}
        <div className="lg:col-span-8 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="overflow-hidden rounded-xl h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group h-full relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

                  {/* Quote mark */}
                  <div className="absolute top-6 right-8 text-8xl text-primary/10 font-serif">"</div>

                  <p className="text-gray-700 mb-8 italic text-xl relative z-10">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="mr-6 relative">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-lg">
                        <img
                          src={testimonials[currentIndex].image }
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xl">{testimonials[currentIndex].author}</h4>
                      <p className="text-md text-gray-500">{testimonials[currentIndex].position}</p>
                    </div>

                    {testimonials[currentIndex].companyLogo && (
                      <div className="ml-auto">
                        <img
                          src={testimonials[currentIndex].companyLogo || "/placeholder.svg"}
                          alt="Company logo"
                          className="h-10 w-auto opacity-70"
                        />
                      </div>
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-70"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Navigation buttons - perfectly aligned */}
          <div className="absolute bottom-6 right-6 flex space-x-3 z-10">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-900 hover:text-white transition-all duration-300 h-12 w-12 flex items-center justify-center shadow-md border-gray-200"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-900 hover:text-white transition-all duration-300 h-12 w-12 flex items-center justify-center shadow-md border-gray-200"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

