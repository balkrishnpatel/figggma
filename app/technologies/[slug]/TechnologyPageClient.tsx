"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Code,
  Users,
  Zap,
  BarChart,
  Shield,
  Clock,
  Sparkles,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { technologies } from "./technologies"

interface TechnologyPageProps {
  techno: string
}

export default function TechnologyPageClient({ techno }: TechnologyPageProps) {
  const technology = technologies.find((tech) => tech.slug === techno)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    hero: false,
    overview: false,
    features: false,
    success: false,
    why: false,
    demo: false,
    cta: false,
  })

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    success: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    demo: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  }

  const [activeSection, setActiveSection] = useState<string>("hero")
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; delay: number; speed: number }>
  >([])
  const [countersAnimated, setCountersAnimated] = useState(false)

  // Parallax effect for hero section
  const { scrollY: scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 300], [1, 0.3])
  const heroY = useTransform(scrollYProgress, [0, 300], [0, 100])
  const heroScale = useTransform(scrollYProgress, [0, 300], [1, 0.95])
  const springScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Background gradient animation
  const gradientPosition = useTransform(springScrollY, [0, 1000], [0, 100])
  const gradientRotation = useTransform(springScrollY, [0, 1000], [0, 45])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      delay: Math.random() * 5,
      speed: Math.random() * 2 + 1,
    }))
    setParticles(newParticles)

    // Set up intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }))

            if (sectionId !== "hero") {
              setActiveSection(sectionId)
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = Object.entries(sectionRefs)
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, ref] = sections[i]
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Staggered animation for hero section
    const timer = setTimeout(() => {
      setVisibleSections((prev) => ({ ...prev, hero: true }))
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  if (!technology) {
    notFound()
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  }

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  const floatAnimation = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3 + i,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    }),
  }

  const glowAnimation = {
    initial: { boxShadow: "0 0 0 rgba(99, 102, 241, 0)" },
    animate: {
      boxShadow: ["0 0 0 rgba(99, 102, 241, 0)", "0 0 20px rgba(99, 102, 241, 0.5)", "0 0 0 rgba(99, 102, 241, 0)"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  const rotateAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  const pathAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  // Counter animation
  const animateCounter = (value: string) => {
    if (countersAnimated) return value

    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    if (isNaN(numericValue)) return value

    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setCountersAnimated(true)}
      >
        {value}
      </motion.span>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10 opacity-70"
        style={{
          backgroundPosition: `${gradientPosition.get()}% ${gradientPosition.get()}%`,
          rotate: gradientRotation,
        }}
      />

      {/* Floating Navigation */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg border border-gray-100">
          <ul className="flex flex-col gap-4">
            {Object.keys(sectionRefs).map((section) => (
              <li key={section} className="relative group">
                <button
                  onClick={() => handleSectionClick(section)}
                  className="w-3 h-3 rounded-full transition-all duration-300 relative"
                  aria-label={`Navigate to ${section} section`}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === section
                        ? "bg-primary scale-100"
                        : "bg-gray-300 scale-100 group-hover:bg-gray-400"
                    }`}
                  />
                  {activeSection === section && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary/30"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.8, opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </button>
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-white shadow-md border border-gray-100 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Hero Section with Animated Background */}
      <motion.section
        ref={sectionRefs.hero}
        className="py-24 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden"
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        id="hero"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Animated particles */}
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white/20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -30 * particle.speed, 0],
                x: [0, Math.sin(index) * 15, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating tech icon */}
        <motion.div
          className="absolute top-12 right-12 text-4xl opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {technology.icon}
        </motion.div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                x: visibleSections.hero ? 0 : -20,
              }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/technologies">
                <Button variant="ghost" className="text-gray-300 hover:text-white mb-6 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to
                  Technologies
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                y: visibleSections.hero ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6 backdrop-blur-sm border border-white/10"
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
                style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
              >
                <span className="text-4xl">{technology.icon}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white/5"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <h1 className="text-4xl py-3 md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {technology.title}
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                y: visibleSections.hero ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {technology.shortDescription}
            </motion.p>
            {/* 
            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: visibleSections.hero ? 1 : 0,
                y: visibleSections.hero ? 0 : 20,
              }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button className="bg-white text-primary hover:bg-gray-100 group relative overflow-hidden" size="lg">
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 group" size="lg">
                <Sparkles className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                See Demo
              </Button>
            </motion.div> */}
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
          </div>
        </motion.div> */}

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 text-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Overview Section */}
            <motion.div
              ref={sectionRefs.overview}
              className="mb-20"
              id="overview"
              initial="hidden"
              animate={visibleSections.overview ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center mb-6" variants={fadeIn} custom={0}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 relative"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  custom={1}
                >
                  <Sparkles className="h-6 w-6 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5, opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="h-px w-10 bg-gradient-to-r from-primary to-accent mb-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                </div>
              </motion.div>

              <motion.p className="text-lg text-gray-600 mb-8 leading-relaxed" variants={fadeIn} custom={1}>
                {technology.fullDescription}
              </motion.p>

              {/* Key Metrics */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                variants={fadeIn}
                custom={2}
                ref={sectionRefs.features}
                id="features"
              >
                {technology.stats?.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(99, 102, 241, 0.3)",
                    }}
                    variants={cardVariants}
                    custom={index}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.div
                      className="text-3xl font-bold text-primary mb-2 relative"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {visibleSections.features ? stat.value : "0%"}
                    </motion.div>
                    <div className="text-sm text-gray-600 relative">{stat.label}</div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" variants={fadeIn} custom={3}>
                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -mt-10 -mr-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(30px)" }}
                  />

                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Star className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      Key Features
                    </h3>
                  </div>

                  <motion.ul
                    className="space-y-4 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {technology.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start group/item"
                        variants={listItemVariants}
                        custom={index}
                      >
                        <div className="mr-3 mt-0.5 flex-shrink-0 relative">
                          <motion.div
                            className="w-5 h-5 rounded-full bg-accent/10 absolute inset-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.05 * index, duration: 0.3 }}
                          />
                          <CheckCircle className="h-5 w-5 text-accent group-hover:text-primary relative z-10 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full -mb-10 -ml-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: "blur(30px)" }}
                  />

                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                    >
                      <Zap className="h-5 w-5 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-accent group-hover:text-primary transition-colors duration-300">
                      Benefits
                    </h3>
                  </div>

                  <motion.ul
                    className="space-y-4 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {technology.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start group/item"
                        variants={listItemVariants}
                        custom={index}
                      >
                        <div className="mr-3 mt-0.5 flex-shrink-0 relative">
                          <motion.div
                            className="w-5 h-5 rounded-full bg-primary/10 absolute inset-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.05 * index, duration: 0.3 }}
                          />
                          <CheckCircle className="h-5 w-5 text-primary group-hover:text-accent relative z-10 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Use Cases Section */}
            {technology.useCases && (
              <motion.div
                ref={sectionRefs.success}
                className="mb-20"
                id="success"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.div className="flex items-center mb-8" variants={fadeIn} custom={0}>
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 relative"
                    variants={floatAnimation}
                    initial="initial"
                    animate="animate"
                    custom={2}
                  >
                    <BarChart className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary/30"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.5, opacity: [1, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                  <div>
                    <motion.div
                      className="h-px w-10 bg-gradient-to-r from-primary to-accent mb-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                    <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {technology.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                      variants={cardVariants}
                      custom={index}
                      whileHover={{
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {index === 0 && <Users className="h-6 w-6 text-primary" />}
                        {index === 1 && <Code className="h-6 w-6 text-primary" />}
                        {index === 2 && <BarChart className="h-6 w-6 text-primary" />}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                          animate={{
                            boxShadow: [
                              "0 0 0 rgba(99, 102, 241, 0)",
                              "0 0 20px rgba(99, 102, 241, 0.5)",
                              "0 0 0 rgba(99, 102, 241, 0)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </motion.div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300 relative z-10">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                        {useCase.description}
                      </p>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Why Choose Us Section */}
            <motion.div
              ref={sectionRefs.why}
              className="mb-20"
              id="why"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center mb-8" variants={fadeIn} custom={0}>
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 relative"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  custom={3}
                >
                  <Shield className="h-6 w-6 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5, opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="h-px w-10 bg-gradient-to-r from-primary to-accent mb-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <h2 className="text-3xl font-bold text-gray-900">Why Choose Our {technology.title} Solutions</h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={1}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Shield className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Expert Team
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Our team of certified {technology.title} specialists brings years of experience and deep expertise
                      to every project.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={2}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Zap className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Proven Methodology
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Our battle-tested approach ensures successful implementation and measurable results for your
                      business.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={3}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Clock className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Rapid Implementation
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      We deliver solutions quickly and efficiently, helping you realize value from your investment
                      faster.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </motion.div>

                <motion.div
                  className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  variants={cardVariants}
                  custom={4}
                  whileHover={{ y: -5 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 relative z-10">
                    <Users className="h-6 w-6 text-primary" />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ boxShadow: "0 0 0 rgba(99, 102, 241, 0)" }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(99, 102, 241, 0)",
                          "0 0 20px rgba(99, 102, 241, 0.5)",
                          "0 0 0 rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Our relationship doesn't end at deployment. We provide continuous support and optimization for
                      your solution.
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Technology Showcase */}
            {/* <motion.div
              ref={sectionRefs.demo}
              className="mb-20 overflow-hidden rounded-xl"
              id="demo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt={`${technology.title} showcase`}
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center text-white p-6 relative z-10">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      See {technology.title} in Action
                    </motion.h3>
                    <motion.p
                      className="text-lg mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Discover how our solutions can transform your business
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        className="bg-white text-primary hover:bg-gray-100 relative overflow-hidden group"
                        size="lg"
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">Request a Demo</span>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div> */}

            {/* CTA Section */}
            <motion.div
              ref={sectionRefs.cta}
              className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white transform transition-transform hover:scale-[1.02] duration-300 relative overflow-hidden"
              id="cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                scale: 1.03,
              }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full"
                style={{ filter: "blur(40px)" }}
                animate={{
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full"
                style={{ filter: "blur(40px)" }}
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              <motion.h3
                className="text-2xl font-bold mb-4 relative z-10"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to get started?
              </motion.h3>
              <motion.p
                className="mb-6 relative z-10"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Contact us today to discuss how our {technology.title} solutions can help your business thrive.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 relative z-10"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white group">
                    {" "}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-black hover:bg-white/10" size="lg">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

