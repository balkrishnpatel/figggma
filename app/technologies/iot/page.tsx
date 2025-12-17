import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IoTTechnologyPage() {
  const technology = {
    title: "Internet of Things",
    slug: "iot",
    icon: "📱",
    shortDescription: "Connected device ecosystems for smart applications.",
    fullDescription:
      "Our IoT solutions help businesses connect devices and systems to create smart, data-driven applications. We develop IoT strategies, implement connected device ecosystems, and build platforms that collect and analyze data from sensors and devices to drive operational improvements.",
    features: [
      "IoT strategy and architecture",
      "Connected device development",
      "IoT platform implementation",
      "Edge computing solutions",
      "IoT data analytics",
      "IoT security and privacy",
    ],
    benefits: [
      "Improve operational efficiency with real-time data",
      "Enable predictive maintenance to reduce downtime",
      "Create new revenue streams with connected products",
      "Enhance decision-making with IoT analytics",
      "Improve customer experiences with smart products",
    ],
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <Link href="/technologies">
              <Button variant="ghost" className="text-gray-300 hover:text-white mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to
                Technologies
              </Button>
            </Link>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6 animate-pulse-slow">
                <span className="text-4xl">{technology.icon}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {technology.title}
              </h1>
            </div>

            <p className="text-lg text-gray-300">{technology.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
              <p className="text-lg text-gray-600 mb-8">{technology.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {technology.features.map((feature, index) => (
                      <li key={index} className="flex items-start group/item">
                        <CheckCircle className="h-5 w-5 text-accent group-hover:text-primary mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300">
                    Benefits
                  </h3>
                  <ul className="space-y-4">
                    {technology.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start group/item">
                        <CheckCircle className="h-5 w-5 text-accent group-hover:text-primary mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="mb-6">
                Contact us today to discuss how our {technology.title} solutions can help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100 group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

