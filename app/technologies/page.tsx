"use client"

import { TechnologyCard } from "@/components/technology-card"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Globe, Shield, Sparkles, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const technologies = [
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    description: "AWS, Azure, Google Cloud solutions for scalable infrastructure and services.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "☁️",
  },
  {
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Machine learning, deep learning, and AI implementations for business intelligence.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🧠",
  },
  {
    title: "Blockchain",
    slug: "blockchain",
    description: "Distributed ledger technology solutions for secure, transparent transactions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🔗",
  },
  {
    title: "Internet of Things",
    slug: "internet-of-things",
    description: "Connected device ecosystems for smart homes, cities, and industrial applications.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📱",
  },
  {
    title: "Big Data & Analytics",
    slug: "big-data-analytics",
    description: "Data processing, visualization, and business intelligence solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📊",
  },
  {
    title: "DevOps & Automation",
    slug: "devops-automation",
    description: "CI/CD pipelines, infrastructure automation, and development operations.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "⚙️",
  },
  {
    title: "Augmented Reality",
    slug: "augmented-reality",
    description: "AR applications for marketing, training, and product visualization.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "👓",
  },
  {
    title: "Virtual Reality",
    slug: "virtual-reality",
    description: "Immersive VR experiences for training, entertainment, and visualization.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🥽",
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Advanced security solutions to protect data, applications, and infrastructure.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🔒",
  },
  {
    title: "5G Technology",
    slug: "5g-technology",
    description: "Next-generation wireless technology for ultra-fast connectivity.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📡",
  },
]

export default function TechnologiesPage() {
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])

  useEffect(() => {
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
        { threshold: 0.1 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

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

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>

          {/* Animated decorative elements */}
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
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
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
            className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
          ></motion.div>

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

          {/* Floating code-like pattern with improved animation */}
          <div className="absolute inset-0 opacity-10">
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
                  {"{"}technology: "cloud-computing", features: ["scalable", "secure", "reliable"]{"}"}
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
                <Sparkles className="w-4 h-4 mr-1.5 text-accent" /> Cutting-Edge Technology Stack
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent relative"
            >
              Our Technologies
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-100 mb-8"
            >
              We leverage cutting-edge technologies to deliver innovative solutions that drive business growth and
              digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 group px-6 py-6 text-lg shadow-xl">
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

        {/* Animated wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
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

      {/* Technologies Grid Section */}
      <section className="py-24" ref={(el) => addToRefs(el, 0)}>
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible[0] ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
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
              Explore Our Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cutting-Edge Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive technology stack designed to help your business innovate, grow, and succeed in
              today's digital landscape.
            </p>
          </motion.div>

          {/* Dynamic technology card layout with connecting elements */}
          <div className="relative">
            {/* Decorative connecting lines */}
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

            {/* Featured technology (larger) */}
            <motion.div
              initial="hidden"
              animate={isVisible[0] ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2 },
                },
              }}
              className="mb-16 lg:mb-24 relative z-10"
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl"></div>
                  <div className="relative p-6 md:p-8 bg-white/80 rounded-xl z-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-1/3 flex justify-center">
                        <motion.div
                          whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                          className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                        >
                          <Code className="h-10 w-10 text-white" />
                        </motion.div>
                      </div>
                      <div className="w-full md:w-2/3 text-left">
                        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {technologies[0].title}
                        </h3>
                        <p className="text-gray-600 mb-4">{technologies[0].description}</p>
                        <Link
                          href={`/technologies/${technologies[0].slug}`}
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

            {/* Display ALL technologies in the grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10">
              {technologies.slice(1).map((tech, index) => {
                // Calculate offset for staggered layout
                const isEven = index % 2 === 0
                const isThird = index % 3 === 0

                // Different vertical offsets based on position
                const yOffset = isThird ? "lg:-mt-8" : isEven ? "lg:mt-12" : "lg:mt-0"

                return (
                  <motion.div
                    key={tech.slug}
                    initial="hidden"
                    animate={isVisible[0] ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, y: 30, x: index % 3 === 0 ? -20 : index % 3 === 2 ? 20 : 0, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        transition: { duration: 0.8 + index * 0.1, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 },
                      },
                    }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className={`${yOffset} relative`}
                  >
                    {/* Decorative connector dots */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible[0] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute hidden lg:block -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 z-0"
                    ></motion.div>

                    <TechnologyCard technology={tech} index={index} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Technologies Section */}
      <section
        className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        ref={(el) => addToRefs(el, 2)}
      >
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        {/* Animated decorative elements */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        ></motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={isVisible[2] ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              <Star className="w-4 h-4 inline-block mr-1.5" /> Why Choose Our Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technology Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through our commitment to innovation, scalability, and future-proof
              technology solutions.
            </p>
          </motion.div>

          {/* Advantages with offset positioning */}
          <motion.div
            initial="hidden"
            animate={isVisible[2] ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {[
              {
                icon: <Code className="h-6 w-6 text-white" />,
                title: "Cutting-Edge Solutions",
                description:
                  "Access to the latest technologies and frameworks to keep your business ahead of the competition.",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                offset: "lg:translate-y-0",
              },
              {
                icon: <Zap className="h-6 w-6 text-white" />,
                title: "Scalable Architecture",
                description: "Our technology solutions are designed to grow with your business needs and user demands.",
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
                offset: "lg:translate-y-12",
              },
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Global Standards",
                description: "We follow international best practices and standards for all technology implementations.",
                color: "bg-gradient-to-br from-purple-500 to-violet-600",
                offset: "lg:translate-y-0",
              },
              {
                icon: <Shield className="h-6 w-6 text-white" />,
                title: "Secure & Reliable",
                description:
                  "Our technology stack prioritizes security and reliability to protect your data and ensure uptime.",
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
                className={`group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white relative overflow-hidden ${advantage.offset}`}
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
                  <p className="text-gray-600">{advantage.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with Parallax and Animations */}
      <section
        className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden"
        ref={(el) => addToRefs(el, 4)}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Ready to Leverage Cutting-Edge Technology?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible[4] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto mb-8"
          >
            Partner with Vastorax to implement innovative technology solutions that drive growth, efficiency, and
            competitive advantage.
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
                  Schedule a Technology Consultation
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

          {/* Floating elements */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          ></motion.div>

          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          ></motion.div>
        </motion.div>
      </section>
    </main>
  )
}

