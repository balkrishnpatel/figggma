"use client"

import { services } from "@/lib/services"
import { ServiceCard } from "@/components/service-card"
import { ArrowRight, CheckCircle, Users, Code, Zap, Globe, Shield, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Modify the useEffect for the intersection observer to make content visible immediately on mobile
  useEffect(() => {
    // For mobile devices, make services visible immediately without requiring scroll
    if (isMobile) {
      setIsVisible((prev) => ({
        ...prev,
        0: true, // Make the first section (services) visible immediately
        1: true, // Also make the CTA visible
      }))
    }

    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }))
              observer.unobserve(entry.target)
            }
          })
        },
        {
          // Lower threshold on mobile to trigger visibility sooner
          threshold: isMobile ? 0.01 : 0.1,
          // Add root margin to trigger earlier on mobile
          rootMargin: isMobile ? "0px 0px 50px 0px" : "0px",
        },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isMobile]) // Add isMobile as a dependency

  const addToRefs = (el, index) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current[index] = el
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  // Custom animations for service cards
  const cardVariants = (index) => {
    // Different animations based on position and device
    if (isMobile) {
      // Simpler animation for mobile to ensure visibility
      return {
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: index * 0.05, // Faster staggering on mobile
          },
        },
      }
    }

    // Desktop animations with more complex positioning
    const positions = [
      { x: -20, y: 30 }, // Left side cards move up and right
      { x: 0, y: 40 }, // Center cards move up
      { x: 20, y: 30 }, // Right side cards move up and left
    ]

    const position = positions[index % 3]

    return {
      hidden: {
        opacity: 0,
        y: position.y,
        x: position.x,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.8 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.08,
        },
      },
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Enhanced Hero Section with Parallax */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>

          {/* Animated decorative elements - simplified for mobile */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl hidden md:block"
          ></motion.div>

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl hidden md:block"
          ></motion.div>

          {/* Simplified background for mobile */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"
          ></motion.div>

          {/* Floating code-like pattern - hidden on mobile */}
          <div className="absolute inset-0 opacity-10 hidden md:block">
            <div className="absolute top-1/4 left-1/4 text-xs text-white/30 font-mono">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.3,
                    duration: 0.8,
                  }}
                  className="mb-3"
                >
                  {"{"}service: "digital-transformation", expertise: ["web", "mobile", "cloud"]{"}"}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md rounded-full mb-6 border border-white/30 shadow-lg"
            >
              <span className="text-sm font-medium text-white flex items-center">
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-2 h-2 rounded-full bg-accent mr-2"
                ></motion.span>
                <Sparkles className="w-4 h-4 mr-1.5 text-accent" /> Comprehensive Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent relative"
            >
              Our Services
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-100 mb-8"
            >
              We offer a comprehensive range of IT and digital services to help businesses transform and thrive in the
              digital age with cutting-edge solutions tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 group px-4 py-2 md:px-6 md:py-6 text-base md:text-lg shadow-xl">
                  Get Started
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated wave divider - simplified for mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full text-white fill-current"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </section>

      {/* Enhanced Services Section with Staggered Animation and Dynamic Layout */}
      <section className="py-10 md:py-24" ref={(el) => addToRefs(el, 0)}>
        <div className="container px-4 mx-auto">
          <motion.div initial="hidden" animate={"visible"} variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
                className="inline-block"
              >
                <Sparkles className="w-4 h-4 inline-block mr-1.5" />
              </motion.span>
              Explore Our Offerings
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tailored Digital Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of services designed to help your business innovate, grow, and succeed in today's
              digital landscape.
            </p>
          </motion.div>

          {/* Dynamic service card layout with connecting elements */}
          <div className="relative">
            {/* Decorative connecting lines - only visible on desktop */}
            {!isMobile && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible[0] ? { opacity: 0.5 } : { opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-primary/20 z-0"
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible[0] ? { opacity: 0.5 } : { opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="absolute hidden lg:block left-1/4 top-1/4 bottom-0 w-0.5 border-l border-dashed border-primary/20 z-0"
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible[0] ? { opacity: 0.5 } : { opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  className="absolute hidden lg:block left-3/4 top-1/3 bottom-0 w-0.5 border-l border-dashed border-primary/20 z-0"
                ></motion.div>
              </>
            )}

            {/* Featured service (larger) */}
            <motion.div
              className="mb-6 md:mb-16 lg:mb-24 relative z-10"
              initial="hidden"
              animate={isVisible[0] ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0 : 0.2 },
                },
              }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl"></div>
                  <div className="relative p-3 md:p-6 lg:p-8 bg-white/80 rounded-xl z-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-1/3 flex justify-center">
                        <motion.div
                          whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                        >
                          <Code className="h-8 w-8 md:h-10 md:w-10 text-white" />
                        </motion.div>
                      </div>
                      <div className="w-full md:w-2/3 text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {services[0].title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">{services[0].description}</p>
                        <Link
                          href={`/services/${services[0].slug}`}
                          className="inline-flex items-center text-primary hover:text-accent transition-colors group"
                        >
                          Learn More
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                              ease: "easeInOut",
                            }}
                          >
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Staggered service cards in dynamic layout - simplified for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-16 relative z-10">
              {services.slice(1).map((service, index) => {
                // Calculate offset for staggered layout - only on desktop
                const isEven = index % 2 === 0
                const isThird = index % 3 === 0

                // Different vertical offsets based on position - only applied on desktop
                const yOffset = !isMobile && (isThird ? "lg:-mt-8" : isEven ? "lg:mt-12" : "lg:mt-0")

                return (
                  <motion.div
                    key={service.slug}
                    initial="hidden"
                    animate={isVisible[0] ? "visible" : "hidden"}
                    variants={cardVariants(index)}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className={`${yOffset} relative`}
                  >
                    {/* Decorative connector dots - only on desktop */}
                    {!isMobile && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isVisible[0] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="absolute hidden lg:block -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 z-0"
                      ></motion.div>
                    )}

                    <ServiceCard service={service} index={index} />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Enhanced CTA with 3D effect and animation */}
          <motion.div
            ref={(el) => addToRefs(el, 1)}
            initial="hidden"
            animate={isVisible[1] ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mt-16 md:mt-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl md:rounded-2xl p-6 md:p-10 border border-primary/10 shadow-xl md:shadow-2xl relative overflow-hidden group hover:shadow-accent/20 transition-all duration-500"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500"
            ></motion.div>

            {/* Floating particles - reduced for mobile */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(isMobile ? 3 : 6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="max-w-xl">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center md:text-left">
                    Need a Dedicated Development Team?
                  </h3>
                  <p className="text-gray-600 mb-0 text-center md:text-left text-sm md:text-base">
                    Access world-class talent working exclusively on your projects, helping you scale quickly and
                    deliver exceptional results.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto"
              >
                <Link
                  href="/services/hire-dedicated-teams"
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg group"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Hire Dedicated Teams
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section with Animated Cards */}
      <section
        className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        ref={(el) => addToRefs(el, 2)}
      >
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        {/* Animated decorative elements - simplified for mobile */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-3xl"
        ></motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={isVisible[2] ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              <Star className="w-4 h-4 inline-block mr-1.5" /> Why Choose Us
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Vastorax Advantage
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through our commitment to quality, innovation, and client success.
            </p>
          </motion.div>

          {/* Advantages with offset positioning - simplified for mobile */}
          <motion.div
            initial="hidden"
            animate={isVisible[2] ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative"
          >
            {[
              {
                icon: <Code className="h-6 w-6 text-white" />,
                title: "Technical Excellence",
                description:
                  "Our team of experts delivers high-quality solutions using the latest technologies and best practices.",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                offset: "lg:translate-y-0",
              },
              {
                icon: <Zap className="h-6 w-6 text-white" />,
                title: "Rapid Delivery",
                description:
                  "We employ agile methodologies to ensure fast, efficient delivery without compromising quality.",
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
                offset: "lg:translate-y-12",
              },
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Global Expertise",
                description: "Access to a diverse pool of talent with experience across industries and technologies.",
                color: "bg-gradient-to-br from-purple-500 to-violet-600",
                offset: "lg:translate-y-0",
              },
              {
                icon: <Shield className="h-6 w-6 text-white" />,
                title: "Reliable Support",
                description:
                  "Comprehensive support and maintenance to ensure your solutions continue to perform optimally.",
                color: "bg-gradient-to-br from-amber-500 to-orange-600",
                offset: "lg:translate-y-12",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={`group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white relative overflow-hidden ${!isMobile ? advantage.offset : ""}`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                    className={`w-14 h-14 rounded-xl ${advantage.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {advantage.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{advantage.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Steps with Enhanced Animation */}
          <div className="mt-16 md:mt-20" ref={(el) => addToRefs(el, 3)}>
            <motion.h3
              initial="hidden"
              animate={isVisible[3] ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center"
            >
              Our Service Delivery Process
            </motion.h3>

            <div className="relative">
              {/* Animated connection line - only on desktop */}
              {!isMobile && (
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 z-0 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isVisible[3] ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
                  ></motion.div>
                </div>
              )}

              <motion.div
                initial="hidden"
                animate={isVisible[3] ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              >
                {[
                  {
                    number: "01",
                    title: "Discovery & Planning",
                    description: "We analyze your requirements and develop a comprehensive project plan.",
                    icon: <CheckCircle className="h-6 w-6 text-white" />,
                  },
                  {
                    number: "02",
                    title: "Design & Development",
                    description: "Our team designs and develops your solution with regular feedback cycles.",
                    icon: <Code className="h-6 w-6 text-white" />,
                  },
                  {
                    number: "03",
                    title: "Testing & Refinement",
                    description: "Rigorous testing ensures your solution meets the highest quality standards.",
                    icon: <Shield className="h-6 w-6 text-white" />,
                  },
                  {
                    number: "04",
                    title: "Deployment & Support",
                    description: "We deploy your solution and provide ongoing support and maintenance.",
                    icon: <Zap className="h-6 w-6 text-white" />,
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="relative p-6 md:p-8 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group bg-white"
                  >
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={isVisible[3] ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 z-10"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="pt-8 md:pt-10 text-center">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        Step {step.number}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Parallax and Animations */}
      <section
        className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden"
        ref={(el) => addToRefs(el, 4)}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        {/* Animated particles - reduced for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible[4] ? "visible" : "hidden"}
          variants={fadeInUp}
          className="container px-4 mx-auto text-center relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible[4] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible[4] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base"
          >
            Partner with Vastorax to leverage cutting-edge technology solutions that drive growth, efficiency, and
            innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible[4] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact">
                <Button className="inline-flex items-center justify-center w-full md:w-auto px-8 py-6 md:px-8 md:py-6 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg group">
                  Schedule a Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Button>
              </Link>
            </motion.div>

            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-white/40 text-black hover:bg-white/15 px-6 py-3 md:px-8 md:py-6 text-base md:text-lg group shadow-xl w-full sm:w-auto"
                >
                  View Our Portfolio
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Button>
              </Link>
            </motion.div> */}
          </motion.div>

          {/* Floating elements */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/4 left-10 w-16 md:w-20 h-16 md:h-20 bg-white/10 rounded-full blur-xl"
          ></motion.div>

          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-1/4 right-10 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full blur-xl"
          ></motion.div>
        </motion.div>
      </section>
    </main>
  )
}

