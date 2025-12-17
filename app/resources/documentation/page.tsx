import Link from "next/link"
import { ArrowRight, Book, Search, FileText, Code, Server, Database, Shield, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DocumentationPage() {
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
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium mb-3 animate-fade-in">
              Resources
            </span>
            <h1 className="text-4xl py-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-slide-up">
              Documentation
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-slide-up animation-delay-200">
              Comprehensive technical guides and documentation to help you implement and optimize our solutions.
            </p>
            <div className="relative max-w-xl mx-auto animate-slide-up animation-delay-400">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documentation..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 focus:bg-white/20 focus:border-white/30"
              />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Popular Documentation Categories */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Browse By Category
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Documentation Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive documentation organized by technology and solution areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "API Reference",
                description: "Comprehensive API documentation with examples and integration guides.",
                icon: <Code className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                link: "/resources/documentation/api-reference",
              },
              {
                title: "Platform Guides",
                description: "Step-by-step guides for setting up and using our platform.",
                icon: <Layers className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
                link: "/resources/documentation/platform-guides",
              },
              {
                title: "Backend Services",
                description: "Documentation for our backend services and infrastructure.",
                icon: <Server className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-purple-500 to-violet-600",
                link: "/resources/documentation/backend-services",
              },
              {
                title: "Database Solutions",
                description: "Guides for database setup, optimization, and management.",
                icon: <Database className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-amber-500 to-orange-600",
                link: "/resources/documentation/database-solutions",
              },
              {
                title: "Security Guidelines",
                description: "Best practices and implementation guides for security.",
                icon: <Shield className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-pink-500 to-rose-600",
                link: "/resources/documentation/security-guidelines",
              },
              {
                title: "SDK Documentation",
                description: "Documentation for our SDKs across various programming languages.",
                icon: <FileText className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-teal-500 to-cyan-600",
                link: "/resources/documentation/sdk-documentation",
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium">Explore documentation</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Documentation Updates */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Recently Updated Documentation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay up-to-date with our latest documentation updates and improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "API Authentication Updates",
                date: "Updated 3 days ago",
                description: "New authentication methods and security enhancements for API access.",
                category: "API Reference",
                link: "/resources/documentation/api-reference/authentication",
              },
              {
                title: "Database Migration Guide",
                date: "Updated 1 week ago",
                description: "Step-by-step guide for migrating between database versions with zero downtime.",
                category: "Database Solutions",
                link: "/resources/documentation/database-solutions/migration",
              },
              {
                title: "React SDK v2.0 Release",
                date: "Updated 2 weeks ago",
                description:
                  "Documentation for the latest version of our React SDK with new features and improvements.",
                category: "SDK Documentation",
                link: "/resources/documentation/sdk-documentation/react",
              },
              {
                title: "Kubernetes Deployment Guide",
                date: "Updated 3 weeks ago",
                description: "Updated guide for deploying our platform on Kubernetes clusters.",
                category: "Platform Guides",
                link: "/resources/documentation/platform-guides/kubernetes",
              },
              {
                title: "Security Best Practices",
                date: "Updated 1 month ago",
                description: "Updated security guidelines and best practices for secure implementation.",
                category: "Security Guidelines",
                link: "/resources/documentation/security-guidelines/best-practices",
              },
              {
                title: "Performance Optimization",
                date: "Updated 1 month ago",
                description: "Techniques and strategies for optimizing performance of your applications.",
                category: "Platform Guides",
                link: "/resources/documentation/platform-guides/performance",
              },
            ].map((doc, index) => (
              <Link
                key={index}
                href={doc.link}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {doc.category}
                  </span>
                  <span className="text-sm text-gray-500">{doc.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {doc.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{doc.description}</p>
                <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium text-sm">Read documentation</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
              View All Documentation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Resources */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/supporting_resources.jpg?height=600&width=800"
                  alt="Documentation resources"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Additional Resources
              </span>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Supporting Resources
              </h2>
              <p className="text-gray-600 mb-6">
                In addition to our comprehensive documentation, we offer a variety of resources to help you get the most
                out of our solutions.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Tutorials & Guides
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Step-by-step tutorials and guides for common implementation scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Code Samples
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ready-to-use code samples and examples for various programming languages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      Reference Architecture
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Reference architectures and design patterns for common use cases.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Technical Support?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our technical support team is available to help you with any questions or issues you may encounter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 group">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/10">
              Visit Knowledge Base
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
    </main>
  )
}

