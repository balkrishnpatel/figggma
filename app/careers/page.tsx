"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

// Job listing data
const jobListings = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "We're looking for a Senior React Developer to join our engineering team and help build innovative web applications for our clients.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Experience with Next.js, TypeScript, and state management libraries",
      "Strong understanding of web performance optimization",
      "Experience with responsive design and cross-browser compatibility",
      "Excellent problem-solving skills and attention to detail",
    ],
    responsibilities: [
      "Develop high-quality, scalable web applications using React and Next.js",
      "Collaborate with designers, product managers, and other developers",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with the latest trends and best practices in front-end development",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our digital products and services.",
    requirements: [
      "3+ years of experience in UX/UI design for web and mobile applications",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with design systems and component libraries",
      "Understanding of accessibility standards and best practices",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs for web and mobile applications",
      "Conduct user research and usability testing to inform design decisions",
      "Collaborate with developers to ensure accurate implementation of designs",
      "Maintain and evolve our design system",
      "Stay current with UX/UI trends and best practices",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: [
      "3+ years of experience with cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization technologies (Docker, Kubernetes)",
      "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Experience with CI/CD tools (GitHub Actions, Jenkins, CircleCI)",
      "Strong scripting skills (Bash, Python)",
    ],
    responsibilities: [
      "Design, implement, and maintain our cloud infrastructure",
      "Automate deployment processes and build CI/CD pipelines",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and ensure compliance",
      "Collaborate with development teams to improve deployment processes",
    ],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "We're seeking a Product Manager to lead the development of innovative digital products that solve real customer problems.",
    requirements: [
      "3+ years of experience in product management for software products",
      "Strong understanding of product development lifecycle",
      "Experience with agile methodologies",
      "Excellent communication and stakeholder management skills",
      "Data-driven approach to decision making",
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competitive landscape",
      "Track and measure product performance metrics",
    ],
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Data",
    location: "Boston, MA",
    type: "Full-time",
    description:
      "We're looking for a Data Scientist to help us extract insights from data and build machine learning models to solve business problems.",
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python and data science libraries (NumPy, Pandas, Scikit-learn)",
      "Experience with deep learning frameworks (TensorFlow, PyTorch)",
      "Strong statistical knowledge and experimental design",
    ],
    responsibilities: [
      "Develop machine learning models to solve business problems",
      "Analyze large datasets to extract insights and trends",
      "Collaborate with engineering teams to implement models in production",
      "Communicate findings and recommendations to stakeholders",
      "Stay current with the latest research and techniques in AI/ML",
    ],
  },
  {
    id: 6,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Austin, TX",
    type: "Full-time",
    description:
      "We're seeking a Marketing Specialist to help us promote our products and services to target audiences.",
    requirements: [
      "3+ years of experience in digital marketing",
      "Experience with content marketing, social media, and email campaigns",
      "Knowledge of SEO/SEM and analytics tools",
      "Strong writing and communication skills",
      "Creative thinking and problem-solving abilities",
    ],
    responsibilities: [
      "Develop and execute marketing campaigns across various channels",
      "Create compelling content for website, blog, and social media",
      "Analyze campaign performance and optimize strategies",
      "Collaborate with sales and product teams",
      "Stay up-to-date with digital marketing trends and best practices",
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState<string>("All")
  const [locationFilter, setLocationFilter] = useState<string>("All")

  // Get unique departments and locations for filters
  const departments = ["All", ...Array.from(new Set(jobListings.map((job) => job.department)))]
  const locations = ["All", ...Array.from(new Set(jobListings.map((job) => job.location)))]

  // Filter jobs based on search term and filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "All" || job.department === departmentFilter
    const matchesLocation = locationFilter === "All" || job.location === locationFilter

    return matchesSearch && matchesDepartment && matchesLocation
  })

  const toggleJobExpansion = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null)
    } else {
      setExpandedJob(jobId)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're looking for talented individuals who are passionate about technology and innovation to help us build
              the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="#open-positions">
                <Button className="bg-white text-primary hover:bg-gray-100 group">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Join Us
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              What Makes Us Different
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At MHLP, we believe in creating an environment where talented individuals can thrive, innovate,
              and make a real impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation & Growth",
                description:
                  "Work on cutting-edge projects and continuously expand your skills with our learning and development programs.",
                icon: "🚀",
              },
              {
                title: "Work-Life Balance",
                description:
                  "We value your well-being with flexible work arrangements, generous PTO, and wellness programs.",
                icon: "⚖️",
              },
              {
                title: "Inclusive Culture",
                description: "Join a diverse team where every voice is heard and different perspectives are valued.",
                icon: "🌈",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Enjoy comprehensive health coverage, retirement plans, and competitive compensation packages.",
                icon: "🏆",
              },
              {
                title: "Global Opportunities",
                description:
                  "Work with clients and colleagues from around the world and explore international career paths.",
                icon: "🌎",
              },
              {
                title: "Make an Impact",
                description:
                  "Contribute to meaningful projects that solve real-world problems and drive digital transformation.",
                icon: "💡",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Open Positions
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our current job openings and find the perfect role for your skills and interests.
            </motion.p>
          </div>

          {/* Search and Filters */}
          <motion.div
            className="mb-8 bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search positions..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-500">Filter by:</span>
                </div>

                <div className="w-full md:w-48">
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-48">
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="p-6 cursor-pointer" onClick={() => toggleJobExpansion(job.id)}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1 text-primary" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-primary" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-primary" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <Button
                          variant="ghost"
                          className="text-primary hover:text-accent transition-colors duration-300 p-0 h-auto hover:bg-transparent"
                        >
                          {expandedJob === job.id ? (
                            <ChevronUp className="h-5 w-5 mr-2" />
                          ) : (
                            <ChevronDown className="h-5 w-5 mr-2" />
                          )}
                          {expandedJob === job.id ? "Hide Details" : "View Details"}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 mb-6">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                              <span className="text-gray-600">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                className="bg-white p-8 rounded-xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-600 mb-4">No positions found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setDepartmentFilter("All")
                    setLocationFilter("All")
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Employee Stories
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Life at MHLP
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hear from our team members about their experiences working at MHLP.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working at MHLP has been an incredible journey. The collaborative culture and challenging projects have helped me grow both professionally and personally.",
                name: "David Chen",
                position: "Segggnior Developer",
                image: "/placeholder.svg?height=100&width=100",
                years: "3 years at MHLP",
              },
              {
                quote:
                  "What I love most about MHLP is the emphasis on work-life balance and continuous learning. I've been able to explore new technologies and advance my career while maintaining a healthy lifestyle.",
                name: "Sarah Johnson",
                position: "UX Designer",
                image: "/placeholder.svg?height=100&width=100",
                years: "2 years at MHLP",
              },
              {
                quote:
                  "The inclusive environment at MHLP makes it a truly special place to work. Everyone's ideas are valued, and we're encouraged to innovate and think outside the box.",
                name: "Michael Rodriguez",
                position: "Product Manager",
                image: "/placeholder.svg?height=100&width=100",
                years: "4 years at MHLP",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="mb-6">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <p className="text-xs text-primary">{testimonial.years}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our open positions and take the next step in your career journey with MHLP.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="#open-positions">
              <Button className="bg-white text-primary hover:bg-gray-100 group">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
    </main>
  )
}

