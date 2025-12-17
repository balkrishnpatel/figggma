import Link from "next/link"
import { ArrowRight, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CaseStudiesPage() {
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
              Case Studies
            </span>
            <h1 className="text-4xl py-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Client Success Stories
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore how our solutions have helped businesses across various industries achieve their goals and
              overcome challenges.
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
                <Input type="text" placeholder="Search case studies..." className="pl-10" />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-500">Filter by:</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    All Industries
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full bg-primary/10 text-primary">
                    Healthcare
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Finance
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Retail
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Manufacturing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
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
            ].map((caseStudy, index) => (
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

      {/* All Case Studies */}
      <section className="py-10 pb-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            All Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fashion Retailer Implements Omnichannel Platform",
                industry: "Retail",
                image: "/case-studies5.jpeg?height=300&width=400",
                excerpt:
                  "How a fashion retailer increased online sales by 35% and improved inventory turnover by 20% with our omnichannel retail platform.",
                slug: "fashion-retailer-omnichannel",
              },
              {
                title: "Automotive Parts Manufacturer Reduces Downtime",
                industry: "Manufacturing",
                image: "/case-studies1.jpeg?height=300&width=400",
                excerpt:
                  "How our predictive maintenance system helped reduce unplanned downtime by 35% and maintenance costs by 25%.",
                slug: "automotive-predictive-maintenance",
              },
              {
                title: "University System Enhances Student Engagement",
                industry: "Education",
                image: "/case-studies2.jpeg?height=300&width=400",
                excerpt:
                  "How our learning management system increased student engagement by 45% and improved course completion rates by 30%.",
                slug: "university-learning-management",
              },
              {
                title: "Municipal Government Improves Citizen Services",
                industry: "Government",
                image: "/case-studies3.jpeg?height=300&width=400",
                excerpt:
                  "How our citizen service portal reduced service request resolution time by 40% and improved citizen satisfaction by 35%.",
                slug: "municipal-citizen-services",
              },
              {
                title: "Investment Firm Enhances Advisor Productivity",
                industry: "Finance",
                image: "/case-studies4.jpeg?height=300&width=400",
                excerpt:
                  "How our wealth management platform improved advisor productivity by 25% and increased client satisfaction by 40%.",
                slug: "investment-wealth-management",
              },
              {
                title: "Healthcare Provider Implements Analytics Platform",
                industry: "Healthcare",
                image: "/case-studies5.jpeg?height=300&width=400",
                excerpt:
                  "How our healthcare analytics platform helped identify cost-saving opportunities of over $2.5 million annually.",
                slug: "healthcare-analytics-platform",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="h-40 overflow-hidden">
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
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{caseStudy.excerpt}</p>
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

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
              Load More Case Studies{" "}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help your business overcome challenges and achieve your goals with
            our custom technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-black hover:bg-white/10">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

