import Link from "next/link"
import { ArrowRight, Calendar, Download, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WhitepapersPage() {
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
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium mb-3">
              Resources
            </span>
            <h1 className="text-4xl py-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Whitepapers
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              In-depth research and analysis on various technology topics to help you make informed decisions.
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
                <Input type="text" placeholder="Search whitepapers..." className="pl-10" />
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

      {/* Featured Whitepapers */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Whitepapers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "The Future of AI in Enterprise: Trends and Implementation Strategies",
                date: "June 2023",
                excerpt:
                  "This comprehensive whitepaper explores emerging trends in artificial intelligence and provides practical strategies for implementing AI solutions in enterprise environments.",
                image: "/the_future_of_ai_in_enterprise.jpg?height=400&width=600",
                topics: ["Artificial Intelligence", "Enterprise Technology", "Digital Transformation"],
                pages: 42,
                slug: "future-of-ai-enterprise",
              },
              {
                title: "Cloud Migration: Best Practices for Seamless Transitions",
                date: "May 2023",
                excerpt:
                  "Learn proven methodologies and best practices for migrating your infrastructure and applications to the cloud while minimizing disruption and maximizing ROI.",
                image: "/cloud_migratio_ best_practices.jpg?height=400&width=600",
                topics: ["Cloud Computing", "Infrastructure", "Digital Transformation"],
                pages: 38,
                slug: "cloud-migration-best-practices",
              },
            ].map((whitepaper, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={whitepaper.image || "/placeholder.svg"}
                    alt={whitepaper.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center text-white mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {whitepaper.date} | {whitepaper.pages} pages
                      </div>
                      <h3 className="text-xl font-semibold text-white">{whitepaper.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{whitepaper.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {whitepaper.topics.map((topic, idx) => (
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
                      href={`/resources/whitepapers/${whitepaper.slug}`}
                      className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                    >
                      <Button variant="ghost" className="p-0 text-primary hover:text-accent hover:bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <Button className="bg-primary hover:bg-primary/90 text-white flex items-center">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Whitepapers */}
      <section className="py-10 pb-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            All Whitepapers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity in the Age of Remote Work",
                date: "April 2023",
                excerpt:
                  "Addressing the unique cybersecurity challenges that arise in remote and hybrid work environments.",
                topics: ["Cybersecurity", "Remote Work"],
                pages: 32,
                slug: "cybersecurity-remote-work",
              },
              {
                title: "Blockchain for Enterprise: Beyond Cryptocurrency",
                date: "March 2023",
                excerpt: "Exploring practical applications of blockchain technology in enterprise environments.",
                topics: ["Blockchain", "Enterprise Technology"],
                pages: 36,
                slug: "blockchain-enterprise",
              },
              {
                title: "The State of DevOps: Trends and Best Practices",
                date: "March 2023",
                excerpt: "An analysis of current DevOps trends and recommendations for implementing DevOps practices.",
                topics: ["DevOps", "Software Development"],
                pages: 28,
                slug: "state-of-devops",
              },
              {
                title: "Data Privacy Regulations: A Global Perspective",
                date: "February 2023",
                excerpt:
                  "A comprehensive overview of data privacy regulations around the world and compliance strategies.",
                topics: ["Data Privacy", "Compliance", "Regulations"],
                pages: 45,
                slug: "data-privacy-regulations",
              },
              {
                title: "Edge Computing: The Next Frontier",
                date: "February 2023",
                excerpt: "Exploring the potential of edge computing and its applications across various industries.",
                topics: ["Edge Computing", "IoT", "Infrastructure"],
                pages: 30,
                slug: "edge-computing-next-frontier",
              },
              {
                title: "Digital Transformation Roadmap for SMBs",
                date: "January 2023",
                excerpt:
                  "A practical guide for small and medium-sized businesses embarking on digital transformation journeys.",
                topics: ["Digital Transformation", "SMB", "Strategy"],
                pages: 34,
                slug: "digital-transformation-smb",
              },
            ].map((whitepaper, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {whitepaper.date}
                    </div>
                    <div className="text-sm">{whitepaper.pages} pages</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{whitepaper.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {whitepaper.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/resources/whitepapers/${whitepaper.slug}`}
                      className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                    >
                      <Button variant="ghost" className="p-0 text-primary hover:text-accent hover:bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Download className="mr-1 h-3 w-3" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
              Load More Whitepapers{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Research?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team of experts can provide custom research and analysis tailored to your specific business needs and
            challenges.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 group">
            Contact Our Research Team
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </main>
  )
}

