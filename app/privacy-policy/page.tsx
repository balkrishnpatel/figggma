"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { FaLock, FaUserShield, FaCookieBite, FaGlobe, FaShieldAlt, FaClipboardList } from "react-icons/fa"

export default function PrivacyPolicyPage() {
  useEffect(() => {
    // Update document title
    document.title = "Privacy Policy | CyberInstant"
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
      id: "information-collection",
      title: "Information We Collect",
      icon: <FaClipboardList className="text-4xl text-primary mb-4" />,
      content:
        "We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on our website, or otherwise when you contact us.",
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <FaUserShield className="text-4xl text-primary mb-4" />,
      content:
        "We may use the information we collect for various purposes, including providing, maintaining, and improving our services, processing transactions, responding to inquiries, sending administrative information, and marketing communications.",
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      icon: <FaCookieBite className="text-4xl text-primary mb-4" />,
      content:
        "We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information about your browsing activities on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <FaLock className="text-4xl text-primary mb-4" />,
      content:
        "We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.",
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
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            How we collect, use, and protect your personal information
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
                <motion.li custom={4} initial="hidden" animate="visible" variants={fadeIn}>
                  <Link
                    href="#your-rights"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="mr-3 text-primary group-hover:text-accent transition-colors">
                      <FaShieldAlt className="text-4xl text-primary mb-4" />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      Your Rights
                    </span>
                  </Link>
                </motion.li>
                <motion.li custom={5} initial="hidden" animate="visible" variants={fadeIn}>
                  <Link
                    href="#international-transfers"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="mr-3 text-primary group-hover:text-accent transition-colors">
                      <FaGlobe className="text-4xl text-primary mb-4" />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      International Transfers
                    </span>
                  </Link>
                </motion.li>
              </ul>

              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Have questions about your privacy?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                >
                  Contact Our Privacy Team
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
                    CyberInstant ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our website or
                    use our services.
                  </p>

                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={0}
                    className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">1. Introduction</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      At CyberInstant, we value your privacy and are dedicated to being transparent about our data
                      practices. This policy outlines our commitment to respecting your privacy and protecting any
                      personal information you share with us.
                    </p>

                    <div className="mt-6 bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                        Our Privacy Principles
                      </h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>We only collect information that is necessary for the services we provide</li>
                        <li>We are transparent about how we use your data</li>
                        <li>We implement robust security measures to protect your information</li>
                        <li>We respect your rights regarding your personal data</li>
                      </ul>
                    </div>
                  </motion.section>

                  {sections.map((section, index) => (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      custom={index + 1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center mb-6">
                        <div className="mr-4 bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">{section.icon}</div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {index + 2}. {section.title}
                        </h2>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{section.content}</p>

                      {section.id === "information-collection" && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Personal Information</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              <li>Name and contact information</li>
                              <li>Business information</li>
                              <li>Payment information</li>
                              <li>Account credentials</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg">
                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technical Information</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                              <li>IP address and device information</li>
                              <li>Browser type and settings</li>
                              <li>Operating system</li>
                              <li>Usage data and analytics</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === "information-use" && (
                        <div className="mt-6 p-5 border border-primary/20 dark:border-primary/30 rounded-lg">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Legal Basis for Processing
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            We process your personal information based on one or more of the following legal grounds:
                          </p>
                          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>To perform our contract with you</li>
                            <li>To comply with legal obligations</li>
                            <li>For our legitimate business interests</li>
                            <li>With your consent, which you can withdraw at any time</li>
                          </ul>
                        </div>
                      )}

                      {section.id === "cookies" && (
                        <div className="mt-6 bg-primary/5 dark:bg-primary/10 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Types of Cookies We Use
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-primary dark:text-accent mb-2">Essential Cookies</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Necessary for the website to function properly. These cannot be disabled.
                              </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-primary dark:text-accent mb-2">Analytics Cookies</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Help us understand how visitors interact with our website.
                              </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-primary dark:text-accent mb-2">Marketing Cookies</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Used to track visitors across websites to display relevant advertisements.
                              </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                              <h4 className="font-semibold text-primary dark:text-accent mb-2">Preference Cookies</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Enable the website to remember your preferences and settings.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.section>
                  ))}

                  <motion.section
                    id="your-rights"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={5}
                    className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-6">
                      <div className="mr-4 bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                        <FaShieldAlt className="text-4xl text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Your Rights</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Depending on your location, you may have certain rights regarding your personal information, such
                      as:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Right to Access</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          You can request a copy of the personal information we hold about you.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Right to Rectification</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          You can request that we correct any inaccurate or incomplete information.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Right to Erasure</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          You can request that we delete your personal information in certain circumstances.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Right to Restrict Processing
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          You can request that we limit how we use your personal information.
                        </p>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section
                    id="international-transfers"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={6}
                    className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-6">
                      <div className="mr-4 bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                        <FaGlobe className="text-4xl text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. International Transfers</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Your information may be transferred to, and maintained on, computers located outside of your
                      state, province, country, or other governmental jurisdiction where the data protection laws may
                      differ from those in your jurisdiction. We ensure that appropriate safeguards are in place to
                      protect your personal information when transferred internationally.
                    </p>
                  </motion.section>

                  <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={7}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      8. Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                      the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to
                      review this Privacy Policy periodically for any changes.
                    </p>

                    <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        If you have any questions about this Privacy Policy, please contact us:
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                      >
                        Contact Our Privacy Team
                      </Link>
                    </div>
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
