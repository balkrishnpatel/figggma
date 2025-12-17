"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  FaHome,
  FaServer,
  FaLaptopCode,
  FaIndustry,
  FaNewspaper,
  FaBriefcase,
  FaEnvelope,
  FaShieldAlt,
  FaSitemap,
} from "react-icons/fa"

export default function SitemapPage() {
  useEffect(() => {
    // Update document title
    document.title = "Sitemap | CyberInstant"
  }, [])

  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const sitemapCategories = [
    {
      id: "main",
      title: "Main Pages",
      icon: <FaHome className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Technologies", url: "/technologies" },
        { name: "Industries", url: "/industries" },
        { name: "Portfolio", url: "/portfolio" },
        { name: "Blog", url: "/blog" },
        { name: "Careers", url: "/careers" },
        { name: "Contact", url: "/contact" },
      ],
    },
    {
      id: "services",
      title: "Services",
      icon: <FaServer className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "Custom Software Development", url: "/services/custom-software-development" },
        { name: "Mobile App Development", url: "/services/mobile-app-development" },
        { name: "Web Development", url: "/services/web-development" },
        { name: "UI/UX Design", url: "/services/ui-ux-design" },
        { name: "Cloud Solutions", url: "/services/cloud-solutions" },
        { name: "AI & Machine Learning", url: "/services/ai-machine-learning" },
        { name: "Hire Dedicated Teams", url: "/services/hire-dedicated-teams" },
      ],
    },
    {
      id: "technologies",
      title: "Technologies",
      icon: <FaLaptopCode className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "Artificial Intelligence", url: "/technologies/ai" },
        { name: "Cloud Computing", url: "/technologies/cloud" },
        { name: "Internet of Things", url: "/technologies/iot" },
        { name: "Big Data", url: "/technologies/big-data" },
        { name: "DevOps", url: "/technologies/devops" },
        { name: "Virtual Reality", url: "/technologies/virtual-reality" },
        { name: "Mixed Reality", url: "/technologies/mixed-reality" },
        { name: "3D Modeling", url: "/technologies/3d-modeling" },
      ],
    },
    {
      id: "industries",
      title: "Industries",
      icon: <FaIndustry className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "Healthcare", url: "/industries/healthcare" },
        { name: "Finance", url: "/industries/finance" },
        { name: "Retail", url: "/industries/retail" },
        { name: "Education", url: "/industries/education" },
        { name: "Manufacturing", url: "/industries/manufacturing" },
        { name: "Transportation", url: "/industries/transportation" },
        { name: "Energy", url: "/industries/energy" },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      icon: <FaNewspaper className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "Case Studies", url: "/resources/case-studies" },
        { name: "Whitepapers", url: "/resources/whitepapers" },
        { name: "Webinars", url: "/resources/webinars" },
        { name: "Documentation", url: "/resources/documentation" },
        { name: "Knowledge Base", url: "/resources/knowledge-base" },
      ],
    },
    {
      id: "company",
      title: "Company",
      icon: <FaBriefcase className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "About Us", url: "/company/about" },
        { name: "Leadership", url: "/company/leadership" },
        { name: "Careers", url: "/company/careers" },
        { name: "Partners", url: "/company/partners" },
        { name: "Press", url: "/company/press" },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "from-primary to-accent",
      links: [
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-accent/5 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent dark:from-primary/80 dark:to-accent/80 transform -skew-y-6"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-accent dark:bg-accent/80 rounded-full blur-3xl"></div>
          <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-primary dark:bg-primary/80 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <FaSitemap className="text-5xl text-accent dark:text-accent/90 mr-4" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              Site
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">map</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Navigate through all pages and resources available on our website
          </motion.p>
        </div>
      </motion.div>

      {/* Category Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {sitemapCategories.map((category, index) => (
            <motion.button
              key={category.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`flex items-center px-4 py-2 rounded-full shadow-md transition-all ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sitemapCategories
            .filter((category) => activeCategory === null || category.id === activeCategory)
            .map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                custom={categoryIndex}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] ${
                  activeCategory === category.id ? "ring-4 ring-offset-2 dark:ring-offset-gray-900 ring-primary" : ""
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {category.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        custom={linkIndex}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          href={link.url}
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary/90 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Interactive Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            className="inline-block bg-gradient-to-r from-primary to-accent p-1 rounded-2xl"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl px-8 py-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our team is ready to help you navigate our services
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-accent rounded-lg shadow-md hover:from-primary/90 hover:to-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              >
                <FaEnvelope className="mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center text-primary dark:text-primary/90 hover:text-accent dark:hover:text-accent/90 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Return to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
