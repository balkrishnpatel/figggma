"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { FaShieldAlt, FaBalanceScale, FaFileContract, FaUserShield } from "react-icons/fa"

export default function TermsOfServicePage() {
  useEffect(() => {
    // Update document title
    document.title = "Terms of Service | CyberInstant"
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  }

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <FaFileContract className="text-4xl text-primary mb-4" />,
      content:
        "By accessing or using CyberInstant's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    },
    {
      id: "services",
      title: "Description of Services",
      icon: <FaBalanceScale className="text-4xl text-primary mb-4" />,
      content:
        "CyberInstant provides technology solutions including but not limited to software development, AI implementation, cloud services, and digital transformation consulting as described on our website.",
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: <FaUserShield className="text-4xl text-primary mb-4" />,
      content:
        "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users agree to notify CyberInstant immediately of any unauthorized use of their account.",
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <FaShieldAlt className="text-4xl text-primary mb-4" />,
      content:
        "All content, features, and functionality on the CyberInstant website, including but not limited to text, graphics, logos, icons, and images, are the exclusive property of CyberInstant and are protected by copyright, trademark, and other intellectual property laws.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Our commitment to transparency and fair business practices
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Quick Navigation</h3>
              <ul className="space-y-4">
                {sections.map((section, index) => (
                  <motion.li key={section.id} custom={index} initial="hidden" animate="visible" variants={fadeIn}>
                    <Link
                      href={`#${section.id}`}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="mr-3 text-primary group-hover:text-accent transition-colors">
                        {section.icon}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {section.title}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Need assistance with our terms?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                >
                  Contact Our Legal Team
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400">Last Updated: April 8, 2025</p>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    These Terms of Service ("Terms") govern your access to and use of CyberInstant's website, products,
                    and services. Please read these Terms carefully before using our services.
                  </p>

                  {sections.map((section, index) => (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700 last:border-0"
                    >
                      <div className="flex items-center mb-6">
                        <div className="mr-4 bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">{section.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {index + 1}. {section.title}
                        </h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{section.content}</p>

                      {section.id === "acceptance" && (
                        <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Additional Information
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            By creating an account or using our services, you represent that you are at least 18 years
                            of age and have the legal capacity to enter into these Terms. If you are using our services
                            on behalf of a company or organization, you represent that you have the authority to bind
                            such entity to these Terms.
                          </p>
                        </div>
                      )}

                      {section.id === "services" && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-lg">
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Service Availability</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              We strive to ensure our services are available 24/7, but we cannot guarantee uninterrupted
                              access due to maintenance or factors beyond our control.
                            </p>
                          </div>
                          <div className="bg-accent/5 dark:bg-accent/10 p-5 rounded-lg">
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Service Modifications</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              We reserve the right to modify, suspend, or discontinue any part of our services at any
                              time, with or without notice.
                            </p>
                          </div>
                        </div>
                      )}

                      {section.id === "intellectual-property" && (
                        <div className="mt-6 p-5 border border-primary/20 dark:border-primary/30 rounded-lg">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">License Grant</h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            Subject to these Terms, CyberInstant grants you a limited, non-exclusive, non-transferable,
                            and revocable license to access and use our services for your personal or internal business
                            purposes.
                          </p>
                        </div>
                      )}
                    </motion.section>
                  ))}

                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={4}
                    className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      5. Limitation of Liability
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      CyberInstant shall not be liable for any indirect, incidental, special, consequential, or punitive
                      damages resulting from your access to or use of, or inability to access or use, the services or
                      any content provided on or through the services.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      In no event shall our total liability to you for all claims arising from or relating to these
                      Terms or your use of the services exceed the amount paid by you, if any, for accessing or using
                      our services during the twelve (12) months immediately preceding the event giving rise to the
                      liability.
                    </p>
                  </motion.section>

                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={5}
                    className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">6. Changes to Terms</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      CyberInstant reserves the right to modify these Terms of Service at any time. We will provide
                      notice of any material changes by posting the new Terms on our website. Your continued use of the
                      services after such modifications will constitute your acknowledgment and agreement to the
                      modified terms.
                    </p>
                  </motion.section>

                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={6}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">7. Governing Law</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                      which CyberInstant is established, without regard to its conflict of law provisions.
                    </p>
                  </motion.section>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 text-center"
            >
              <Link href="/" className="inline-flex items-center text-primary hover:text-accent transition-colors">
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
    </div>
  )
}
