import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "HealthConnect Platform",
    slug: "health-connect-platform",
    category: "Healthcare",
    description:
      "A comprehensive telemedicine platform connecting patients with healthcare providers for virtual consultations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    featured: true,
  },
  {
    id: 2,
    title: "FinTrack Mobile App",
    slug: "fintrack-mobile-app",
    category: "Finance",
    description:
      "A personal finance management mobile application with budgeting, expense tracking, and investment monitoring.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    featured: true,
  },
  {
    id: 3,
    title: "SmartRetail E-commerce",
    slug: "smartretail-ecommerce",
    category: "Retail",
    description:
      "An AI-powered e-commerce platform with personalized recommendations and advanced search capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TensorFlow.js", "PostgreSQL", "Stripe"],
    featured: true,
  },
  {
    id: 4,
    title: "ManufacturePro IoT System",
    slug: "manufacturepro-iot-system",
    category: "Manufacturing",
    description:
      "An IoT-based manufacturing monitoring system for real-time equipment tracking and predictive maintenance.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "MQTT", "AWS IoT", "TensorFlow"],
    featured: false,
  },
  {
    id: 5,
    title: "EduLearn LMS",
    slug: "edulearn-lms",
    category: "Education",
    description:
      "A comprehensive learning management system for educational institutions with interactive course content.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    featured: false,
  },
  {
    id: 6,
    title: "CityServices Portal",
    slug: "cityservices-portal",
    category: "Government",
    description:
      "A citizen services portal for municipal governments to streamline service requests and information access.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
    featured: false,
  },
  {
    id: 7,
    title: "LogisticsTrack System",
    slug: "logisticstrack-system",
    category: "Transportation",
    description: "A logistics management system with real-time tracking, route optimization, and delivery management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    featured: false,
  },
  {
    id: 8,
    title: "EnergyMonitor Platform",
    slug: "energymonitor-platform",
    category: "Energy",
    description: "A smart energy monitoring platform for utilities and consumers to track and optimize energy usage.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Python", "InfluxDB", "TensorFlow"],
    featured: false,
  },
  {
    id: 9,
    title: "MediaStream Platform",
    slug: "mediastream-platform",
    category: "Media",
    description: "A content streaming platform with personalized recommendations and multi-device synchronization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "FFmpeg"],
    featured: false,
  },
]

export default function PortfolioPage() {
  const featuredProjects = portfolioItems.filter((item) => item.featured)
  const regularProjects = portfolioItems.filter((item) => !item.featured)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-300">
              Explore our successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                      <span className="font-medium">View project</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-10 pb-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                    <span className="font-medium text-sm">View details</span>
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your business goals with our custom technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 group">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

