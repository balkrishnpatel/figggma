import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const companyPages = [
  {
    title: "About Us",
    slug: "about",
    description: "Learn about our mission, vision, values, and the story behind MHLP.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏢",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description: "Meet our experienced leadership team guiding the company's vision and strategy.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "👥",
  },
  {
    title: "Careers",
    slug: "careers",
    description: "Explore career opportunities and join our team of talented professionals.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "💼",
  },
  {
    title: "Culture",
    slug: "culture",
    description: "Discover our company culture, values, and what makes MHLP a great place to work.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌟",
  },
  {
    title: "Partners",
    slug: "partners",
    description: "Learn about our strategic technology and business partners.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🤝",
  },
  {
    title: "Press & Media",
    slug: "press",
    description: "Access our press releases, media resources, and company news.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📰",
  },
  {
    title: "Corporate Social Responsibility",
    slug: "csr",
    description: "Learn about our commitment to social responsibility and sustainability.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌍",
  },
  {
    title: "Investor Relations",
    slug: "investors",
    description: "Information for investors and financial stakeholders.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📈",
  },
]

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our Company
            </h1>
            <p className="text-lg text-gray-300">
              Learn more about MHLP, our mission, our team, and our commitment to innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyPages.map((page) => (
              <Link
                key={page.slug}
                href={`/company/${page.slug}`}
                className="group block p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{page.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {page.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary transition-colors duration-300 group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

