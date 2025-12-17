import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ResourceCard } from "@/components/resource-card"
import { Button } from "@/components/ui/button"

const resources = [
  {
    title: "Blog",
    slug: "blog",
    description:
      "Insights, tutorials, and industry news to keep you informed about the latest in technology and digital innovation.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📝",
  },
  {
    title: "Case Studies",
    slug: "case-studies",
    description:
      "Success stories and client testimonials showcasing how our solutions have helped businesses achieve their goals.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📊",
  },
  {
    title: "Whitepapers",
    slug: "whitepapers",
    description: "In-depth research and analysis on various technology topics to help you make informed decisions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📄",
  },
  {
    title: "Webinars",
    slug: "webinars",
    description: "Educational online events and recordings covering a wide range of technology and business topics.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎥",
  },
  {
    title: "eBooks",
    slug: "ebooks",
    description: "Comprehensive guides on various technology topics to help you deepen your knowledge and skills.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📚",
  },
  {
    title: "Podcasts",
    slug: "podcasts",
    description:
      "Audio content featuring interviews with industry experts, discussions on technology trends, and more.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎙️",
  },
  {
    title: "Infographics",
    slug: "infographics",
    description:
      "Visual representations of complex information and data to help you understand key concepts at a glance.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📈",
  },
  {
    title: "Videos",
    slug: "videos",
    description:
      "Visual content including tutorials, product demos, and educational videos on various technology topics.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎬",
  },
]

// Featured blog posts
const featuredBlogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch",
    slug: "future-of-ai-in-business",
    excerpt:
      "Explore the emerging trends in artificial intelligence and how they're reshaping business operations and strategy.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    author: "Alex Johnson",
    readTime: "8 min read",
    category: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Building Scalable Cloud Infrastructure: Best Practices",
    slug: "building-scalable-cloud-infrastructure",
    excerpt:
      "Learn the best practices for designing and implementing cloud infrastructure that can scale with your business needs.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 28, 2023",
    author: "Samantha Lee",
    readTime: "10 min read",
    category: "Cloud Computing",
  },
]

// Featured case studies
const featuredCaseStudies = [
  {
    title: "National Hospital Network Transforms Patient Care with Telemedicine",
    industry: "Healthcare",
    image: "/national_hospital_network_transforms.jpg?height=400&width=600",
    excerpt:
      "Learn how we helped a national hospital network implement a telemedicine platform that reduced patient wait times by 40% and increased appointment adherence by 35%.",
    results: [
      "40% reduction in wait times",
      "35% increase in appointment adherence",
      "28% improvement in patient satisfaction",
    ],
    slug: "national-hospital-telemedicine",
  },
  {
    title: "Global Bank Modernizes Digital Banking Experience",
    industry: "Finance",
    image: "/global_bank_modernizes_digital.jpg?height=400&width=600",
    excerpt:
      "Discover how our digital banking platform helped a global bank increase mobile banking adoption by 45% and reduce branch transactions by 30%.",
    results: [
      "45% increase in mobile banking adoption",
      "30% reduction in branch transactions",
      "25% improvement in customer satisfaction",
    ],
    slug: "global-bank-digital-transformation",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-lg text-gray-300">
              Knowledge and insights to help you stay informed about the latest trends and developments in technology
              and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Featured Content
              </span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Latest from Our Blog
              </h2>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 group">
                View All Blog Posts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{post.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="mr-4">{post.date}</div>
                    <div className="mr-4">{post.author}</div>
                    <div>{post.readTime}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Client Success
              </span>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Case Studies
              </h2>
            </div>
            <Link href="/resources/case-studies" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 group">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{caseStudy.excerpt}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                          <span className="text-gray-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/resources/case-studies/${caseStudy.slug}`}
                    className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                  >
                    <Button variant="ghost" className="p-0 text-primary hover:text-accent hover:bg-transparent">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Knowledge Center
            </span>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Explore All Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive collection of resources designed to help you stay informed and make better
              decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard key={resource.slug} resource={resource} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive the latest resources, insights, and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

