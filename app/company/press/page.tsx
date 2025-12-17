import Link from "next/link"
import { ArrowRight, Calendar, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PressPage() {
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
              Press & Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              News & Media Resources
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Stay up-to-date with the latest news, announcements, and media resources from Vastorax.
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

      {/* Press Releases Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Press Releases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Announcements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our recent press releases and company announcements.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Vastorax Launches New AI-Powered Analytics Platform",
                date: "May 15, 2023",
                excerpt:
                  "Vastorax today announced the launch of its new AI-powered analytics platform, designed to help businesses extract actionable insights from their data.",
                link: "#",
              },
              {
                title: "Vastorax Named a Leader in Digital Transformation Services",
                date: "April 3, 2023",
                excerpt:
                  "Vastorax has been recognized as a Leader in the 2023 Digital Transformation Services report by Industry Analysts, Inc.",
                link: "#",
              },
              {
                title: "Vastorax Expands Global Presence with New Office in Singapore",
                date: "March 10, 2023",
                excerpt:
                  "Vastorax today announced the opening of its new office in Singapore, expanding its presence in the Asia-Pacific region.",
                link: "#",
              },
              {
                title: "Vastorax Acquires CloudTech Solutions to Enhance Cloud Capabilities",
                date: "February 22, 2023",
                excerpt:
                  "Vastorax today announced the acquisition of CloudTech Solutions, a leading provider of cloud migration and management services.",
                link: "#",
              },
              {
                title: "Vastorax Announces Strategic Partnership with Global Retail Alliance",
                date: "January 15, 2023",
                excerpt:
                  "Vastorax today announced a strategic partnership with the Global Retail Alliance to deliver innovative digital solutions to retailers worldwide.",
                link: "#",
              },
            ].map((release, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {release.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                  {release.title}
                </h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <Link
                  href={release.link}
                  className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                >
                  Read full release
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/company/press/archive">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Press Release Archive
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Media Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              In The News
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recent media coverage featuring Vastorax and our leadership team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI in Business: Interview with Vastorax CEO",
                publication: "Tech Insights Magazine",
                date: "June 5, 2023",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "How Vastorax is Revolutionizing Healthcare Technology",
                publication: "Healthcare Innovation",
                date: "May 22, 2023",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "Digital Transformation Success Stories: Vastorax's Approach",
                publication: "Business Technology Review",
                date: "April 18, 2023",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "Vastorax CTO Discusses Emerging Technology Trends",
                publication: "Future Tech Today",
                date: "March 30, 2023",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "The Role of Blockchain in Financial Services: Insights from Vastorax",
                publication: "FinTech Weekly",
                date: "February 15, 2023",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "Vastorax Named Among Top 50 Most Innovative Companies",
                publication: "Innovation Leaders",
                date: "January 10, 2023",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{article.publication}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-4">
                    {article.title}
                  </h3>
                  <Link
                    href={article.link}
                    className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                  >
                    Read article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Media Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resources for Media
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download official logos, executive headshots, product images, and other media assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Company Logos",
                description: "Download our official logos in various formats and resolutions.",
                icon: "🎨",
                link: "#",
              },
              {
                title: "Executive Headshots",
                description: "Professional photos of our leadership team for media use.",
                icon: "👥",
                link: "#",
              },
              {
                title: "Product Images",
                description: "High-resolution images of our products and solutions.",
                icon: "📱",
                link: "#",
              },
              {
                title: "Office Photos",
                description: "Images of our global offices and work environment.",
                icon: "🏢",
                link: "#",
              },
              {
                title: "Brand Guidelines",
                description: "Guidelines for proper usage of our brand assets.",
                icon: "📋",
                link: "#",
              },
              {
                title: "Company Fact Sheet",
                description: "Key facts and figures about Vastorax.",
                icon: "📊",
                link: "#",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{resource.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="inline-flex items-center text-primary group-hover:text-accent transition-colors duration-300"
                >
                  Download
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Contact</h2>
            <p className="text-white/80 mb-8">
              For media inquiries, interview requests, or additional information, please contact our media relations
              team.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Press & Media Relations</h3>
              <p className="mb-2">
                <strong>Email:</strong> media@cyberinstant.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="mb-6">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 group">
                Contact Media Relations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

