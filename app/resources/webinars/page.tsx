import Link from "next/link"
import { ArrowRight, Calendar, Clock, Filter, Play, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WebinarsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-3">
              Webinars
            </span>
            <h1 className="text-4xl py-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Educational Webinars
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Join our expert-led webinars to gain insights, learn best practices, and stay up-to-date with the latest
              trends in technology.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input type="text" placeholder="Search webinars..." className="pl-10" />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-500">Filter by:</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    All Topics
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full bg-primary/10 text-primary">
                    Artificial Intelligence
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Cloud Computing
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Cybersecurity
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Upcoming Webinars
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "The Future of AI in Business: Trends and Applications",
                date: "June 15, 2023",
                time: "2:00 PM - 3:30 PM EST",
                speakers: ["Dr. Sarah Johnson, AI Research Director", "Michael Chen, CTO"],
                image: "/the_future_of_ai_in_business_trends.jpg?height=400&width=600",
                description:
                  "Join our experts as they discuss emerging trends in artificial intelligence and how businesses can leverage AI to drive growth and innovation.",
                topics: ["Artificial Intelligence", "Machine Learning", "Business Strategy"],
                slug: "future-of-ai-in-business",
              },
              {
                title: "Cloud Migration Strategies: Best Practices and Pitfalls",
                date: "June 22, 2023",
                time: "1:00 PM - 2:30 PM EST",
                speakers: ["David Rodriguez, Cloud Solutions Architect", "Emily Wong, DevOps Lead"],
                image: "/cloud_migration_strategies.jpg?height=400&width=600",
                description:
                  "Learn proven strategies for successful cloud migration, common pitfalls to avoid, and how to maximize the benefits of cloud computing for your organization.",
                topics: ["Cloud Computing", "DevOps", "Digital Transformation"],
                slug: "cloud-migration-strategies",
              },
            ].map((webinar, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={webinar.image || "/placeholder.svg"}
                    alt={webinar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center text-white mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {webinar.date} | {webinar.time}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{webinar.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Speakers:</h4>
                    <ul className="space-y-1">
                      {webinar.speakers.map((speaker, idx) => (
                        <li key={idx} className="flex items-center">
                          <User className="h-4 w-4 text-primary mr-2" />
                          <span className="text-gray-600 text-sm">{speaker}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/resources/webinars/${webinar.slug}`}
                      className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                    >
                      <Button variant="ghost" className="p-0 text-primary hover:text-accent hover:bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <Button className="bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Demand Webinars */}
      <section className="py-10 pb-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            On-Demand Webinars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity in the Age of Remote Work",
                date: "May 10, 2023",
                duration: "60 min",
                speakers: ["Michelle Chen, Security Specialist"],
                image: "/webinars1.jpeg?height=300&width=400",
                topics: ["Cybersecurity", "Remote Work"],
                slug: "cybersecurity-remote-work",
              },
              {
                title: "Digital Transformation Roadmap for SMBs",
                date: "April 25, 2023",
                duration: "75 min",
                speakers: ["James Wilson, Digital Strategy Director"],
                image: "/webinars2.jpeg?height=300&width=400",
                topics: ["Digital Transformation", "Business Strategy"],
                slug: "digital-transformation-smb",
              },
              {
                title: "Building Scalable Microservices Architecture",
                date: "April 12, 2023",
                duration: "90 min",
                speakers: ["Alex Johnson, Principal Architect"],
                image: "/webinars3.jpeg?height=300&width=400",
                topics: ["Microservices", "Software Architecture"],
                slug: "scalable-microservices",
              },
              {
                title: "Data Analytics for Business Intelligence",
                date: "March 30, 2023",
                duration: "60 min",
                speakers: ["Sarah Thompson, Data Science Lead"],
                image: "/webinars4.jpeg?height=300&width=400",
                topics: ["Data Analytics", "Business Intelligence"],
                slug: "data-analytics-bi",
              },
              {
                title: "Mobile App Development Best Practices",
                date: "March 15, 2023",
                duration: "75 min",
                speakers: ["David Rodriguez, Mobile Development Lead"],
                image: "/webinars5.jpeg?height=300&width=400",
                topics: ["Mobile Development", "UX/UI Design"],
                slug: "mobile-app-best-practices",
              },
              {
                title: "Blockchain Applications in Enterprise",
                date: "February 28, 2023",
                duration: "60 min",
                speakers: ["Michael Chen, Blockchain Specialist"],
                image: "/webinars6.jpeg?height=300&width=400",
                topics: ["Blockchain", "Enterprise Solutions"],
                slug: "blockchain-enterprise",
              },
            ].map((webinar, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={webinar.image || "/placeholder.svg"}
                    alt={webinar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <User className="h-4 w-4 inline mr-1" />
                    {webinar.speakers[0]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/resources/webinars/${webinar.slug}`}
                    className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                  >
                    <Button variant="ghost" className="p-0 text-primary hover:text-accent hover:bg-transparent">
                      Watch Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
              View All Webinars <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Host Your Own Webinar Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Hosting a Webinar?</h2>
            <p className="text-white/80 mb-8">
              If you're an industry expert with valuable insights to share, we'd love to collaborate with you on a
              webinar. Our platform reaches thousands of technology professionals worldwide.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 group">
              Become a Speaker
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

