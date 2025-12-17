import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, Code, Users, Lightbulb, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VirtualRealityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/technologies">
              <Button variant="ghost" className="text-gray-300 hover:text-white mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to
                Technologies
              </Button>
            </Link>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6 animate-pulse-slow">
                <span className="text-4xl">🥽</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Virtual Reality
              </h1>
            </div>

            <p className="text-lg text-gray-300">
              Immersive virtual reality solutions that transform how users interact with digital content and
              environments.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Virtual Reality (VR) solutions create immersive digital experiences that transport users to entirely
                new environments. From training simulations to entertainment applications, our VR technology enables
                businesses to engage users in ways never before possible, creating memorable and impactful experiences
                that drive results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Immersive 3D environments and experiences",
                      "Interactive VR applications and games",
                      "360° video production and integration",
                      "Multi-user VR experiences",
                      "Cross-platform VR development",
                      "VR hardware integration and optimization",
                    ].map((feature, index) => (
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
                  <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Applications
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Training and simulation for various industries",
                      "Virtual product demonstrations and showrooms",
                      "Immersive marketing and brand experiences",
                      "Educational and learning environments",
                      "Virtual tourism and property tours",
                      "Entertainment and gaming applications",
                    ].map((application, index) => (
                      <li key={index} className="flex items-start group/item">
                        <CheckCircle className="h-5 w-5 text-accent group-hover:text-primary mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                          {application}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <Zap className="h-6 w-6 mr-2 text-primary" />
                Benefits of Virtual Reality
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Enhanced Engagement",
                    description:
                      "Create memorable experiences that captivate users and increase engagement with your brand or content.",
                  },
                  {
                    title: "Improved Learning",
                    description:
                      "Accelerate learning and retention through immersive, interactive educational experiences.",
                  },
                  {
                    title: "Cost-Effective Training",
                    description:
                      "Reduce training costs and risks by simulating real-world scenarios in a safe, virtual environment.",
                  },
                  {
                    title: "Innovative Marketing",
                    description:
                      "Stand out from competitors with cutting-edge VR marketing experiences that showcase products in new ways.",
                  },
                  {
                    title: "Remote Collaboration",
                    description:
                      "Enable teams to collaborate in shared virtual spaces regardless of physical location.",
                  },
                  {
                    title: "Data Visualization",
                    description:
                      "Transform complex data into intuitive 3D visualizations for better understanding and decision-making.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Case Study</h2>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Manufacturing Training Simulation</h3>
                    <p className="text-gray-600 mb-4">
                      We developed a comprehensive VR training program for a global manufacturing company that reduced
                      training time by 40% and improved safety metrics by 35%.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">40% reduction in training time</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">35% improvement in safety metrics</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">28% increase in knowledge retention</span>
                      </li>
                    </ul>
                    <Button className="bg-primary text-white hover:bg-primary/90">Read Full Case Study</Button>
                  </div>
                  <div className="md:w-1/2 h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="VR Training Simulation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <Users className="h-6 w-6 mr-2 text-primary" />
                Our VR Development Approach
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Discovery & Planning",
                    description:
                      "We begin by understanding your goals, target audience, and use cases to develop a comprehensive VR strategy.",
                  },
                  {
                    step: "2",
                    title: "Design & Prototyping",
                    description:
                      "Our designers create immersive 3D environments and interactive elements, followed by rapid prototyping for early feedback.",
                  },
                  {
                    step: "3",
                    title: "Development",
                    description:
                      "Our VR developers build the application using industry-leading tools and frameworks optimized for performance.",
                  },
                  {
                    step: "4",
                    title: "Testing & Optimization",
                    description:
                      "We rigorously test across multiple VR platforms and devices to ensure a seamless, comfortable user experience.",
                  },
                  {
                    step: "5",
                    title: "Deployment & Support",
                    description:
                      "We help you deploy your VR application and provide ongoing support and updates as needed.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <span className="text-primary font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-2xl font-bold mb-4">Ready to explore Virtual Reality for your business?</h3>
              <p className="mb-6">
                Contact us today to discuss how our VR solutions can help you create immersive experiences that drive
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100 group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our VR Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Related Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Augmented Reality",
                icon: "👓",
                description: "Overlay digital content onto the real world for enhanced experiences.",
                slug: "augmented-reality",
              },
              {
                title: "Mixed Reality",
                icon: "🌐",
                description: "Blend real and virtual worlds to create new environments and visualizations.",
                slug: "mixed-reality",
              },
              {
                title: "3D Modeling & Animation",
                icon: "🎭",
                description: "Create detailed 3D models and animations for various applications.",
                slug: "3d-modeling",
              },
            ].map((tech, index) => (
              <Link
                key={index}
                href={`/technologies/${tech.slug}`}
                className="group block p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {tech.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{tech.description}</p>
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

