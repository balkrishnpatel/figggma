import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LeadershipPage() {
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
              Leadership
            </span>
            <h1 className="text-4xl py-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Meet Our Leadership Team
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Our experienced leadership team brings decades of industry expertise to guide our company's vision and
              strategy.
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

      {/* Executive Team Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Executive Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Executive Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries who drive our company's strategy and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                position: "Chief Executive Officer",
                image: "/leadership1.jpeg?height=400&width=400",
                bio: "Alex has over 20 years of experience in the technology industry and has led MHLP since its founding in 2010. Under his leadership, the company has grown from a small startup to a global digital solutions provider.",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Samantha Lee",
                position: "Chief Technology Officer",
                image: "/leadership2.jpeg?height=400&width=400",
                bio: "Samantha brings 15+ years of technical expertise to MHLP. She oversees our technology strategy and ensures we stay at the forefront of innovation in AI, cloud computing, and software development.",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Michael Chen",
                position: "Chief Operating Officer",
                image: "/leadership3.jpeg?height=400&width=400",
                bio: "Michael has a strong background in operations and business strategy. He ensures our company runs efficiently and delivers exceptional value to our clients through streamlined processes and operational excellence.",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Emily Rodriguez",
                position: "Chief Financial Officer",
                image: "/leadership4.jpeg?height=400&width=400",
                bio: "Emily has extensive experience in financial management and strategic planning. She oversees our financial operations and ensures the company's continued growth and profitability.",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "David Wilson",
                position: "Chief Marketing Officer",
                image: "/leadership5.jpeg?height=400&width=400",
                bio: "David is a seasoned marketing executive with a passion for technology. He leads our marketing initiatives and helps us connect with clients who can benefit from our innovative solutions.",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Sarah Thompson",
                position: "Chief People Officer",
                image: "/leadership6.jpeg?height=400&width=400",
                bio: "Sarah is dedicated to creating an exceptional workplace culture. She oversees our talent acquisition, development, and retention strategies to ensure we have the best team in the industry.",
                linkedin: "#",
                twitter: "#",
              },
            ].map((executive, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={executive.image || "/placeholder.svg"}
                    alt={executive.name}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h4 className="text-white font-bold">{executive.name}</h4>
                      <p className="text-white/80 text-sm">{executive.position}</p>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {executive.name}
                </h4>
                <p className="text-primary font-medium text-sm mb-2">{executive.position}</p>
                <p className="text-gray-600 mb-4">{executive.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={executive.linkedin}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href={executive.twitter}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Board of Directors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Board
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who provide guidance and oversight to our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Robert Chang",
                position: "Chairman of the Board",
                image: "/leadership7.jpeg?height=300&width=300",
              },
              {
                name: "Jennifer Williams",
                position: "Board Member",
                image: "/leadership8.jpeg?height=300&width=300",
              },
              {
                name: "Thomas Baker",
                position: "Board Member",
                image: "/leadership9.jpeg?height=300&width=300",
              },
              {
                name: "Lisa Martinez",
                position: "Board Member",
                image: "/leadership10.jpeg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative overflow-hidden rounded-full w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-primary font-medium text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Leadership Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The core values and principles that guide our leadership team and company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Obsession",
                description:
                  "We start with the customer and work backwards. We work vigorously to earn and keep customer trust.",
                icon: "🎯",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek new ideas and technologies to solve complex problems and create value for our clients.",
                icon: "💡",
              },
              {
                title: "Excellence",
                description:
                  "We have high standards and continuously raise the bar. We ensure our products and services are of the highest quality.",
                icon: "🏆",
              },
              {
                title: "Ownership",
                description:
                  "We take ownership of our work and think long-term. We don't sacrifice long-term value for short-term results.",
                icon: "🔑",
              },
              {
                title: "Learn and Be Curious",
                description:
                  "We are never done learning and always seek to improve ourselves. We are curious about new possibilities.",
                icon: "🔍",
              },
              {
                title: "Integrity",
                description: "We earn trust through our actions. We speak candidly and treat others with respect.",
                icon: "⚖️",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-600">{principle.description}</p>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Interested in working with our leadership team? Explore career opportunities at MHLP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/careers">
              <Button className="bg-white text-primary hover:bg-gray-100">View Open Positions</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-primary hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

