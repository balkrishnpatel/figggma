"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { services } from "@/lib/services"
import { HomeFeatures } from "@/app/home-features"
import { ResourceCard } from "@/components/resource-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { HomeServicesSection } from "@/components/home-services-section"
import { HomeTechnologiesSection } from "@/components/home-technologies-section"
import { HomeIndustriesSection } from "@/components/home-industries-section"

// Technology data
const technologies = [
  {
    title: "Cloud Computing",
    icon: "☁️",
    description: "Scalable infrastructure and services with AWS, Azure, and Google Cloud.",
    slug: "cloud-computing",
  },
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    description: "Machine learning and AI implementations for business intelligence.",
    slug: "artificial-intelligence",
  },
  {
    title: "DevOps & Automation",
    slug: "devops-automation",
    description: "CI/CD pipelines, infrastructure automation, and development operations.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "⚙️",
  },
  {
    title: "Big Data & Analytics",
    icon: "📊",
    description: "Data processing and business intelligence solutions.",
    slug: "big-data-analytics",
  },
]

// Industry data
const industries = [
  {
    title: "Healthcare",
    icon: "🏥",
    description: "Digital solutions for healthcare providers and patient management.",
    slug: "healthcare",
  },
  {
    title: "Finance",
    icon: "💰",
    description: "FinTech and banking solutions for secure operations.",
    slug: "finance",
  },
  {
    title: "Retail & E-commerce",
    icon: "🛍️",
    description: "Digital transformation for retail businesses.",
    slug: "retail-ecommerce",
  },
  {
    title: "Government",
    icon: "🏛️",
    description: "Public sector digital transformation solutions.",
    slug: "government",
  },
]

// Resources data
// const resources = [
//   {
//     title: "Blog",
//     icon: "📝",
//     description: "Insights, tutorials, and industry news.",
//     slug: "blog",
//   },
//   {
//     title: "Case Studies",
//     icon: "📊",
//     description: "Success stories and client testimonials.",
//     slug: "resources/case-studies",
//   },
//   {
//     title: "Whitepapers",
//     icon: "📄",
//     description: "In-depth research and analysis.",
//     slug: "resources/whitepapers",
//   },
//   {
//     title: "Webinars",
//     icon: "🎥",
//     description: "Educational online events and recordings.",
//     slug: "resources/webinars",
//   },
// ]
const resources = [
  {
    title: "Home Loan",
    icon: "🏠",
    description: "Your Dream Home Awaits - Explore Our Range Of Home Loan Products.",
    slug: "home-loan"
  },
  {
    title: "Loan against Property",
    icon: "🏘️",
    description: "Unlock your property's value with tailored loan solutions.",
    slug: "loan-against-property"
  },
  {
    title: "Personal Loan",
    icon: "💼",
    description: "Achieve your dreams with our versatile personal loan options.",
    slug: "personal-loan"
  },
  {
    title: "Business Loan",
    icon: "💰",
    description: "Boost your business growth with our flexible financing options.",
    slug: "business-loan"
  },
  {
    title: "Education Loan",
    icon: "🎓",
    description: "Invest in your child's future with our specialized education loans.",
    slug: "education-loan"
  },
  {
    title: "Car Loan",
    icon: "🚗",
    description: "Drive your dream car with our quick and flexible car loans.",
    slug: "car-loan"
  },
  {
    title: "Gold Loan",
    icon: "💍",
    description: "Meet your financial needs with gold loans from trusted banks.",
    slug: "gold-loan"
  },
  {
    title: "Credit Cards",
    icon: "💳",
    description: "Upgrade your lifestyle with feature-packed, rewarding credit cards.",
    slug: "credit-cards"
  },
  {
    title: "Life Insurance",
    icon: "☂️",
    description: "Protect Your Loved One's Future With Our Reliable Life Insurance Plans.",
    slug: "life-insurance",
    pricing: "Starting from ₹ 450/month*"
  },
  {
    title: "Health Insurance",
    icon: "🏥",
    description: "Ensuring Your Health Is In Good Hands - Explore Our Top-notch Insurance Solutions.",
    slug: "health-insurance",
    pricing: "Starting from ₹ 450/month*"
  },
  {
    title: "General Insurance",
    icon: "🛡️",
    description: "Insurance Made Easy - Your Protection, Our Expertise.",
    slug: "general-insurance",
    pricing: "Starting from ₹ 450/month*"
  },
   {
    title: "Bill Payments",
    icon: "💳",
    description: "Simplify All Your Bill Payments with Bharat Bill Pay System (BBPS)!",
    slug: "bill-payments"
  }
]

// Testimonial data
const testimonials = [
  {
    quote:
      "MHLP transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp Inc.",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    quote:
      "Working with MHLP was a game-changer for our company. Their expertise in digital transformation helped us stay ahead of the competition.",
    author: "Michael Chen",
    position: "CEO, Innovate Solutions",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    quote:
      "The team at MHLP understood our unique challenges and delivered a custom solution that perfectly addressed our needs. Highly recommended!",
    author: "Emily Rodriguez",
    position: "Director of IT, Global Enterprises",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    quote:
      "We've worked with several IT consultants before, but none have matched the level of expertise and dedication that MHLP brings to the table.",
    author: "James Wilson",
    position: "COO, NextGen Retail",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    quote:
      "Their AI solutions have dramatically improved our data analysis capabilities. We're now making better decisions faster than ever before.",
    author: "Lisa Thompson",
    position: "Data Science Director, HealthTech Inc.",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
  {
    quote:
      "The mobile app they developed for us has received outstanding feedback from our customers. User engagement has increased by over 200%.",
    author: "Robert Garcia",
    position: "Product Manager, MobileFirst",
    image: "/placeholder.svg?height=80&width=80",
    companyLogo: "/placeholder.svg?height=40&width=120",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Services Preview Section */}
      {/* <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Our Services
            </span>
            <h2 className="text-2xl md:text-4xl py-2 font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of IT and digital services to help businesses transform and thrive in the digital
              age.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <HomeServicesSection services={services.slice(0, 13)} />
          </div>

          <div className="mt-10 md:mt-14 text-center">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group px-6 py-2 md:px-8 md:py-6 text-base md:text-lg shadow-lg">
                View All Services{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-10 md:mb-16">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
        Our Services
      </span>
      <h2 className="text-2xl md:text-4xl py-2 font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Innovative Software Solutions
      </h2>
      <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
        We deliver cutting-edge software development and technology solutions to help businesses scale, automate, and succeed in the digital world.
      </p>
    </div>

    <div className="max-w-7xl mx-auto">
      <HomeServicesSection services={services.slice(0, 13)} />
    </div>

    <div className="mt-10 md:mt-14 text-center">
      {/* <Link href="/home"> */}
        <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group px-6 py-2 md:px-8 md:py-6 text-base md:text-lg shadow-lg">
          Explore All Solutions{" "}
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      {/* </Link> */}
    </div>
  </div>
</section>
      {/* Technologies Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Technologies
            </span>
            <h2 className="text-2xl md:text-4xl py-2 font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies to deliver innovative solutions that drive business growth and digital
              transformation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <HomeTechnologiesSection technologies={technologies} />
          </div>

          <div className="mt-10 md:mt-14 text-center">
            {/* <Link href="/technologies"> */}
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
                View All Technologies{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <HomeFeatures />

      {/* Industries Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Industries
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sectors We Serve
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              We provide specialized solutions for various industries, helping businesses address their unique
              challenges.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <HomeIndustriesSection industries={industries} />
          </div>

          <div className="mt-10 md:mt-14 text-center">
            {/* <Link href="/industries"> */}
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
                View All Industries{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10 md:mb-16">
            {/* <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Resources
            </span> */}
            <h2 className="text-2xl md:text-4xl py-2 font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
             We Facilitate
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
             Wide Range of Financial Products That suits your customer's needs!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {resources.map((resource, index) => (
              <ResourceCard key={resource.slug} resource={resource} index={index} />
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            {/* <Link href="/resources"> */}
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
                View All Resources{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4 mx-auto">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-6 md:mb-8">
            Partner with MHLP to leverage cutting-edge technology solutions that drive growth, efficiency, and
            innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/contact"> */}
              <Button className="bg-white text-primary hover:bg-gray-100 group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            {/* </Link> */}
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-16 md:w-20 h-16 md:h-20 bg-white/10 rounded-full blur-xl"></div>
          <div
            className="absolute bottom-1/4 right-10 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full blur-xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>
    </main>
  )
}

