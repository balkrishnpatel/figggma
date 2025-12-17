"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { IndustryCard } from "@/components/industry-card"
import { Button } from "@/components/ui/button"
const industries = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Digital solutions for healthcare providers, telemedicine, and patient management.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏥",
  },
  {
    title: "Finance",
    slug: "finance",
    description: "FinTech and banking solutions for secure, efficient financial operations.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "💰",
  },
  {
    title: "Retail & E-commerce",
    slug: "retail-ecommerce", // Updated to match the slug format
    description: "Digital transformation for retail businesses and online shopping platforms.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🛒",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description: "Industry 4.0 and smart manufacturing solutions for operational efficiency.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏭",
  },
  {
    title: "Education",
    slug: "education",
    description: "EdTech and learning management systems for modern educational institutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎓",
  },
  {
    title: "Government",
    slug: "government",
    description: "Public sector digital transformation and citizen service solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏛️",
  },
  {
    title: "Transportation & Logistics",
    slug: "transportation",
    description: "Smart logistics, fleet management, and supply chain optimization.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🚚",
  },
  {
    title: "Energy & Utilities",
    slug: "energy",
    description: "Smart grid, renewable energy, and utility management solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "⚡",
  },
  {
    title: "Media & Entertainment",
    slug: "media",
    description: "Digital content delivery, streaming platforms, and audience engagement.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎬",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description: "Property management, virtual tours, and smart building solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏢",
  },
  {
    title: "Hospitality & Tourism",
    slug: "hospitality",
    description: "Guest experience, booking systems, and operational efficiency solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏨",
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    description: "Precision farming, crop monitoring, and agricultural management systems.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌾",
  },
]

export default function IndustriesPage() {
  // Animation variants
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
      {/* Enhanced Hero Section with Parallax */}
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

          {/* Floating industry icons */}
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
                  {"{"}industry: "digital-transformation", sectors: ["healthcare", "finance", "retail"]{"}"}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1.5 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                Specialized Industry Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent relative"
            >
              Industries We Serve
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-100 mb-8"
            >
              We provide specialized solutions for various sectors, helping businesses across industries leverage
              technology for growth and innovation.
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

      {/* Industries Grid Section with Staggered Animation */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 inline-block mr-1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </motion.span>
              Explore Our Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tailored Solutions for Every Sector
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our specialized solutions designed to address the unique challenges and opportunities in your
              industry.
            </p>
          </motion.div>

          {/* Dynamic industry card layout with connecting elements */}
          <div className="relative">
            {/* Decorative connecting lines */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-primary/20 z-0"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute hidden lg:block left-1/4 top-1/4 bottom-0 w-0.5 border-l border-dashed border-primary/20 z-0"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="absolute hidden lg:block left-3/4 top-1/3 bottom-0 w-0.5 border-l border-dashed border-primary/20 z-0"
            ></motion.div>

            {/* Staggered industry cards in dynamic layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            >
              {industries.map((industry, index) => {
                // Calculate offset for staggered layout
                const isEven = index % 2 === 0
                const isThird = index % 3 === 0

                // Different vertical offsets based on position
                const yOffset = isThird ? "lg:-mt-8" : isEven ? "lg:mt-12" : "lg:mt-0"

                return (
                  <motion.div
                    key={industry.slug}
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className={`${yOffset} relative`}
                  >
                    {/* Decorative connector dots */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute hidden lg:block -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 z-0"
                    ></motion.div>

                    <IndustryCard industry={industry} index={index} />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Enhanced View All Industries Section with Animation */}
          <motion.div
            className="mt-24 py-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Background elements */}
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

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full mb-6 border border-primary/30 shadow-lg"
              >
                <span className="text-sm font-medium text-primary flex items-center">
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
                  Industry-Specific Expertise
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                Need a Custom Industry Solution?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8"
              >
                Our team of experts can help you identify the right technologies and approaches for your specific
                industry challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact">
                  <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg group whitespace-nowrap">
                    Discuss Your Industry Needs
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
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

