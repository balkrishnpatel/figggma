"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { services } from "@/lib/services"

interface MegaMenuProps {
  isScrolled: boolean
  activeCategory: string | null
  onCloseCross?:()=>void
  onClose?: () => void
}

interface MenuSection {
  title: string
  subtitle: string
  items: {
    name: string
    href: string
    description?: string
    icon?: React.ComponentType<{ className?: string }>
    isExternal?: boolean
    featured?: boolean
  }[]
  featuredItem?: {
    title: string
    description: string
    image: string
    link: string
  }
}

export function MegaMenu({ isScrolled, activeCategory,onCloseCross, onClose }: MegaMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Add "Hire Dedicated Team" to the services section in the mega menu

  // Update the services section in the menuSections object
  const menuSections: Record<string, MenuSection> = {
    company: {
      title: "Company",
      subtitle: "Learn more about our organization and values",
      items: [
        {
          name: "About Us",
          href: "/company/about",
          description: "Our mission, vision, and journey",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          ),
        },
        {
          name: "Leadership",
          href: "/company/leadership",
          description: "Meet our experienced leadership team",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
        },
        {
          name: "Careers",
          href: "/company/careers",
          description: "Join our team of talented professionals",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          ),
          featured: true,
        },
        {
          name: "Partners",
          href: "/company/partners",
          description: "Our strategic technology and business partners",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          ),
        },
        
        {
          name: "Contact Us",
          href: "/contact",
          description: "Get in touch with our team",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          ),
        },
      ],
      featuredItem: {
        title: "Join Our Team",
        description: "We're looking for talented individuals to help us build the future of technology.",
        image: "/join_our_team.jpg?height=200&width=300",
        link: "/company/careers",
      },
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive solutions for your business needs",
      items: [
        ...services.slice(0, 4).map((service) => ({
          name: service.title,
          href: `/services/${service.slug}`,
          description: service.shortDescription,
          icon: service.icon,
          featured: ["mobile-app-development", "web-development", "custom-software-development"].includes(service.slug),
        })),
        {
          name: "Hire Dedicated Teams",
          href: "/services/hire-dedicated-teams",
          description: "Access skilled professionals who work exclusively on your projects.",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
          featured: true,
        },
        ...services.slice(5, 8).map((service) => ({
          name: service.title,
          href: `/services/${service.slug}`,
          description: service.shortDescription,
          icon: service.icon,
          featured: false,
        })),
      ],
      featuredItem: {
        title: "Custom Software Solutions",
        description: "Tailored software development to address your unique business challenges.",
        image: "/custom_software_solution.jpg?height=200&width=300",
        link: "/services/custom-software-development",
      },
    },
    technologies: {
      title: "Technologies",
      subtitle: "Cutting-edge tech powering our solutions",
      items: [
        {
          name: "Cloud Computing",
          href: "/technologies/cloud-computing",
          description: "AWS, Azure, Google Cloud solutions",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
          ),
          featured: true,
        },
        {
          name: "Artificial Intelligence",
          href: "/technologies/artificial-intelligence",
          description: "Machine learning and AI implementations",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
              <path d="M12 6v4" />
              <path d="M16 10l-4 4-4-4" />
            </svg>
          ),
          featured: true,
        },
        {
          name: "Blockchain",
          href: "/technologies/blockchain",
          description: "Distributed ledger technology solutions",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <rect x="2" y="7" width="20" height="10" rx="2" ry="2" />
              <line x1="12" y1="17" x2="12" y2="21" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="7" y1="7" x2="7" y2="3" />
              <line x1="17" y1="7" x2="17" y2="3" />
              <line x1="7" y1="3" x2="17" y2="3" />
            </svg>
          ),
        },
        {
          name: "Internet of Things",
          href: "/technologies/internet-of-things",
          description: "Connected device ecosystems",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          ),
        },
        {
          name: "Big Data & Analytics",
          href: "/technologies/big-data-analytics",
          description: "Data processing and business intelligence",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
        },
        {
          name: "DevOps & Automation",
          href: "/technologies/devops-automation",
          description: "CI/CD pipelines and infrastructure automation",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
              <line x1="9.69" y1="8" x2="21.17" y2="8" />
              <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
              <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
              <line x1="14.31" y1="16" x2="2.83" y2="16" />
              <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
            </svg>
          ),
        },
      ],
      featuredItem: {
        title: "AI-Powered Solutions",
        description: "Leverage the power of artificial intelligence to transform your business.",
        image: "/ai_powered_solution.jpg?height=200&width=300",
        link: "/technologies/artificial-intelligence",
      },
    },
    // industries: {
    //   title: "Industries",
    //   subtitle: "Specialized solutions for various sectors",
    //   items: [
    //     {
    //       name: "Healthcare",
    //       href: "/industries/healthcare",
    //       description: "Digital solutions for healthcare providers",
    //       icon: (props) => (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           {...props}
    //         >
    //           <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    //         </svg>
    //       ),
    //       featured: true,
    //     },
    //     {
    //       name: "Finance",
    //       href: "/industries/finance",
    //       description: "FinTech and banking solutions",
    //       icon: (props) => (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           {...props}
    //         >
    //           <line x1="12" y1="1" x2="12" y2="23" />
    //           <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    //         </svg>
    //       ),
    //       featured: true,
    //     },
    //     {
    //       name: "Retail & E-commerce",
    //       href: "/industries/retail-ecommerce",
    //       description: "Digital transformation for retail businesses",
    //       icon: (props) => (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           {...props}
    //         >
    //           <circle cx="9" cy="21" r="1" />
    //           <circle cx="20" cy="21" r="1" />
    //           <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    //         </svg>
    //       ),
    //       featured: true,
    //     },
    //     {
    //       name: "Manufacturing",
    //       href: "/industries/manufacturing",
    //       description: "Industry 4.0 and smart manufacturing",
    //       icon: (props) => (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           {...props}
    //         >
    //           <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17z" />
    //           <path d="M16 8V1" />
    //           <path d="M12 12v8" />
    //           <path d="M8 12v8" />
    //           <path d="M16 12v8" />
    //         </svg>
    //       ),
    //     },
    //     {
    //       name: "Education",
    //       href: "/industries/education",
    //       description: "EdTech and learning management systems",
    //       icon: (props) => (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           {...props}
    //         >
    //           <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    //           <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    //         </svg>
    //       ),
    //     },
       
    //   ],
    //   featuredItem: {
    //     title: "Healthcare Solutions",
    //     description: "Digital transformation for healthcare providers to improve patient care.",
    //     image: "/health_care.jpg?height=200&width=300",
    //     link: "/industries/healthcare",
    //   },
    // },
    
    
    industries: {
  title: "Industries",
  subtitle: "Specialized solutions for various sectors",
  items: [
    {
      name: "Healthcare",
      href: "/industries/healthcare",
      description: "Digital solutions for healthcare providers",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      featured: true,
    },
    {
      name: "Finance",
      href: "/industries/finance",
      description: "FinTech and banking solutions",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      featured: true,
    },
    {
      name: "Banking & Insurance",
      href: "/industries/banking-insurance",
      description: "Core banking systems and insurance platforms",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
      featured: true,
    },
    {
      name: "Investment & Wealth Management",
      href: "/industries/investment-wealth",
      description: "Portfolio management and wealth advisory platforms",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      featured: true,
    },
    {
      name: "Payment Solutions",
      href: "/industries/payment-solutions",
      description: "Digital payment gateways and wallet solutions",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      name: "Accounting & Tax",
      href: "/industries/accounting-tax",
      description: "Automated accounting and tax management systems",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      name: "Blockchain & Crypto",
      href: "/industries/blockchain-crypto",
      description: "Cryptocurrency exchanges and blockchain solutions",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect x="8" y="2" width="8" height="8" rx="2" />
          <rect x="2" y="8" width="8" height="8" rx="2" />
          <rect x="14" y="8" width="8" height="8" rx="2" />
          <rect x="8" y="14" width="8" height="8" rx="2" />
        </svg>
      ),
    },
    {
      name: "Lending & Credit",
      href: "/industries/lending-credit",
      description: "Digital lending platforms and credit scoring",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      name: "Retail & E-commerce",
      href: "/industries/retail-ecommerce",
      description: "Digital transformation for retail businesses",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      featured: true,
    },
   
    {
      name: "Education",
      href: "/industries/education",
      description: "EdTech and learning management systems",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
   {
  name: "Finance & Banking",
  href: "/industries/finance",
  description: "Financial services and banking platforms",
  icon: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
}
  ],
  featuredItem: {
    title: "Financial Services Solutions",
    description: "Comprehensive digital solutions for banking, fintech, and financial institutions.",
    image: "/flexible_team_composition.jpg?height=200&width=300",
    link: "/industries/finance",
  },
},
    
    
    
    
    
    resources: {
      title: "Resources",
      subtitle: "Knowledge and insights to help you succeed",
      items: [
        {
          name: "Blog",
          href: "/blog",
          description: "Insights, tutorials, and industry news",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          ),
          featured: true,
        },
        {
          name: "Case Studies",
          href: "/resources/case-studies",
          description: "Success stories and client testimonials",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          ),
          featured: true,
        },
        {
          name: "Whitepapers",
          href: "/resources/whitepapers",
          description: "In-depth research and analysis",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          ),
        },
        {
          name: "Webinars",
          href: "/resources/webinars",
          description: "Educational online events and recordings",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
          ),
        },
        {
          name: "Documentation",
          href: "/resources/documentation",
          description: "Technical guides and documentation",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          ),
          featured: true,
        },
        {
          name: "Knowledge Base",
          href: "/resources/knowledge-base",
          description: "FAQs and troubleshooting resources",
          icon: (props) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          ),
          featured: true,
        },
      ],
      featuredItem: {
        title: "Latest Insights",
        description: "Stay up-to-date with the latest trends and insights in technology.",
        image: "/latest_insights.jpg?height=200&width=300",
        link: "/blog",
      },
    },
  }

  if (!activeCategory || !menuSections[activeCategory]) {
    return null
  }

  const activeSection = menuSections[activeCategory]
  const featuredItems = activeSection.items.filter((item) => item.featured)
  const regularItems = activeSection.items.filter((item) => !item.featured)

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute left-0 right-0 w-full shadow-lg border-t z-50",
            isScrolled ? "bg-white border-gray-200" : "bg-white/95 backdrop-blur-md border-gray-200/50",
            "md:max-h-[calc(100vh-80px)] max-h-[80vh] overflow-y-auto",
          )}
        >
          <div className="container mx-auto px-4">
            <div className="py-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {activeSection.title}
                  </h3>
                  <p className="text-gray-500">{activeSection.subtitle}</p>
                </div>
                <button onClick={onCloseCross} className="text-gray-500 hover:text-gray-700 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Featured items */}
                {featuredItems.length > 0 && (
                  <div className="col-span-12 lg:col-span-4 space-y-4">
                    <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b border-gray-200">Featured</h4>
                    {featuredItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="group block p-4 rounded-xl border border-gray-200 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/15 hover:to-accent/15 hover:border-primary/30 transition-all duration-300"
                          onClick={onClose}
                        >
                          <div className="flex items-start">
                            {item.icon && (
                              <div className="mr-4 mt-1">
                                <item.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                              </div>
                            )}
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium text-gray-900 group-hover:text-primary group-hover:scale-105 transition-all">
                                  {item.name}
                                </h4>
                                {item.isExternal && <ExternalLink className="ml-1 h-3 w-3 text-gray-400" />}
                              </div>
                              {item.description && (
                                <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Regular items */}
                <div
                  className={cn(
                    "col-span-12",
                    featuredItems.length > 0 ? "lg:col-span-4" : "lg:col-span-8",
                    activeSection.featuredItem ? "" : "lg:col-span-8",
                  )}
                >
                  <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b border-gray-200">
                    All {activeSection.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {regularItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="group block p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                          onClick={onClose}
                        >
                          <div className="flex items-start">
                            {item.icon && (
                              <div className="mr-3 mt-0.5">
                                <item.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                              </div>
                            )}
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium text-gray-700 group-hover:text-primary group-hover:scale-105 transition-all">
                                  {item.name}
                                </h4>
                                {item.isExternal && <ExternalLink className="ml-1 h-3 w-3 text-gray-400" />}
                              </div>
                              {item.description && (
                                <p className="mt-1 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Featured content */}
                {activeSection.featuredItem && (
                  <div className="col-span-12 lg:col-span-4">
                    <div className="rounded-xl overflow-hidden border border-gray-200 h-full">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={activeSection.featuredItem.image || "/placeholder.svg"}
                          alt={activeSection.featuredItem.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <h4 className="absolute bottom-3 left-4 text-white font-bold text-lg">
                          {activeSection.featuredItem.title}
                        </h4>
                      </div>
                      <div className="p-4">
                        <p className="text-gray-600 text-sm mb-4">{activeSection.featuredItem.description}</p>
                        <Link
                          href={activeSection.featuredItem.link}
                          className="inline-flex items-center text-primary hover:text-accent font-medium text-sm group"
                          onClick={onClose}
                        >
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {activeCategory === "services" && (
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <Link
                    href="/services"
                    className="inline-flex items-center px-4 py-2 text-primary hover:text-accent font-medium group bg-primary/5 hover:bg-primary/15 rounded-full transition-all hover:scale-105"
                    onClick={onClose}
                  >
                    View all services
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

