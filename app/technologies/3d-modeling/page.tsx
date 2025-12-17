import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, Code, Users, Lightbulb, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThreeDModelingPage() {
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
                <span className="text-4xl">🎭</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                3D Modeling & Animation
              </h1>
            </div>

            <p className="text-lg text-gray-300">
              Create stunning 3D models, visualizations, and animations that bring your ideas to life with exceptional
              detail and realism.
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
                Our 3D modeling and animation services help businesses create stunning visual assets for a wide range of
                applications. From product visualizations and architectural renderings to animated explainer videos and
                interactive 3D experiences, our team of skilled artists and animators brings your ideas to life with
                exceptional detail and realism.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Key Services
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "High-quality 3D modeling and texturing",
                      "Photorealistic product rendering",
                      "Architectural visualization",
                      "Character modeling and animation",
                      "3D animation and motion graphics",
                      "Interactive 3D for web and mobile",
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
                      "Product visualization and marketing",
                      "Architectural and interior design presentations",
                      "Explainer videos and promotional content",
                      "Virtual showrooms and product configurators",
                      "Medical and scientific visualizations",
                      "Gaming and interactive experiences",
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
                Benefits of 3D Modeling & Animation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Enhanced Visualization",
                    description:
                      "Show products, concepts, and designs in photorealistic detail before they're physically created.",
                  },
                  {
                    title: "Improved Communication",
                    description:
                      "Explain complex ideas and processes clearly through visual storytelling and animation.",
                  },
                  {
                    title: "Cost Efficiency",
                    description:
                      "Create product images and videos without expensive photo shoots or physical prototypes.",
                  },
                  {
                    title: "Increased Engagement",
                    description: "Capture and maintain audience attention with dynamic, interactive 3D content.",
                  },
                  {
                    title: "Design Flexibility",
                    description: "Easily make changes and iterations to 3D models without starting from scratch.",
                  },
                  {
                    title: "Multi-purpose Assets",
                    description: "Reuse 3D assets across various marketing channels and applications.",
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
                    <h3 className="text-2xl font-bold mb-4 text-primary">Interactive Product Configurator</h3>
                    <p className="text-gray-600 mb-4">
                      We developed a 3D product configurator for a luxury furniture brand that allowed customers to
                      customize products in real-time and visualize them from any angle, resulting in significant
                      improvements in online sales and customer satisfaction.
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">48% increase in online conversion rate</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">32% reduction in product returns</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">3.5x increase in time spent on product pages</span>
                      </li>
                    </ul>
                    <Button className="bg-primary text-white hover:bg-primary/90">Read Full Case Study</Button>
                  </div>
                  <div className="md:w-1/2 h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt="3D Product Configurator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Process Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <Users className="h-6 w-6 mr-2 text-primary" />
                Our 3D Development Process
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Concept & Planning",
                    description:
                      "We work with you to understand your vision, goals, and requirements for the 3D assets or animations.",
                  },
                  {
                    step: "2",
                    title: "Modeling & Texturing",
                    description: "Our 3D artists create detailed models and apply realistic textures and materials.",
                  },
                  {
                    step: "3",
                    title: "Lighting & Rendering",
                    description: "We set up professional lighting and render high-quality images or animation frames.",
                  },
                  {
                    step: "4",
                    title: "Animation & Effects",
                    description: "For animated content, we create smooth movements, transitions, and special effects.",
                  },
                  {
                    step: "5",
                    title: "Post-Production & Delivery",
                    description:
                      "We apply final touches, compositing, and deliver the assets in your required formats.",
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
              <h3 className="text-2xl font-bold mb-4">Ready to bring your ideas to life with 3D?</h3>
              <p className="mb-6">
                Contact us today to discuss how our 3D modeling and animation services can help you create stunning
                visual content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100 group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our 3D Portfolio
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
                title: "Virtual Reality",
                icon: "🥽",
                description: "Create fully immersive digital environments using 3D models and animations.",
                slug: "virtual-reality",
              },
              {
                title: "Augmented Reality",
                icon: "👓",
                description: "Enhance the real world with interactive 3D digital content.",
                slug: "augmented-reality",
              },
              {
                title: "Game Development",
                icon: "🎮",
                description: "Create engaging interactive experiences with 3D assets and animations.",
                slug: "game-development",
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

