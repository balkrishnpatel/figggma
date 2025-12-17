import Link from "next/link"
import { ArrowRight, Search, HelpCircle, FileText, MessageCircle, Book, Lightbulb, Tag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function KnowledgeBasePage() {
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
            <h1 className="text-4xl py-3 md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-slide-up">
              Knowledge Base
            </h1>
            <p className="text-lg text-gray-200 mb-8 animate-slide-up animation-delay-200">
              Find answers to common questions, troubleshooting guides, and helpful resources.
            </p>
            <div className="relative max-w-xl mx-auto animate-slide-up animation-delay-400">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search knowledge base..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 focus:bg-white/20 focus:border-white/30"
              />
              <Button className="absolute right-1 top-1 bg-white/20 hover:bg-white/30 text-white border-none">
                Search
              </Button>
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

      {/* Popular Categories */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Browse By Category
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Popular Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our knowledge base by category to find the information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Getting Started",
                description: "Guides for new users to get up and running quickly.",
                icon: <Book className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                link: "/resources/knowledge-base/getting-started",
                count: 24,
              },
              {
                title: "Troubleshooting",
                description: "Solutions to common issues and error messages.",
                icon: <HelpCircle className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-red-500 to-rose-600",
                link: "/resources/knowledge-base/troubleshooting",
                count: 42,
              },
              {
                title: "Best Practices",
                description: "Recommendations for optimal use of our solutions.",
                icon: <Lightbulb className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-amber-500 to-orange-600",
                link: "/resources/knowledge-base/best-practices",
                count: 18,
              },
              {
                title: "FAQs",
                description: "Answers to frequently asked questions.",
                icon: <MessageCircle className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
                link: "/resources/knowledge-base/faqs",
                count: 36,
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white hover:-translate-y-1 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                  {category.count} articles
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Most Helpful
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Popular Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our most frequently accessed knowledge base articles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Reset Your Password",
                category: "Account Management",
                views: "5.2k views",
                link: "/resources/knowledge-base/account-management/reset-password",
              },
              {
                title: "Troubleshooting API Connection Issues",
                category: "API",
                views: "4.8k views",
                link: "/resources/knowledge-base/api/connection-issues",
              },
              {
                title: "Setting Up Two-Factor Authentication",
                category: "Security",
                views: "4.3k views",
                link: "/resources/knowledge-base/security/two-factor-authentication",
              },
              {
                title: "Optimizing Database Performance",
                category: "Database",
                views: "3.9k views",
                link: "/resources/knowledge-base/database/performance-optimization",
              },
              {
                title: "Understanding Usage Billing",
                category: "Billing",
                views: "3.7k views",
                link: "/resources/knowledge-base/billing/usage-billing",
              },
              {
                title: "Integrating with Third-Party Services",
                category: "Integration",
                views: "3.5k views",
                link: "/resources/knowledge-base/integration/third-party-services",
              },
            ].map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="flex items-center mb-3">
                  <Tag className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm text-primary">{article.category}</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.views}</span>
                  <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                    <span className="font-medium">Read article</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Recently Added Articles */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Recently Added Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay up-to-date with our latest knowledge base articles and updates.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Using the New Dashboard Analytics Features",
                category: "Platform Updates",
                date: "Added 2 days ago",
                excerpt:
                  "Learn how to use the new analytics features in the dashboard to gain insights into your application's performance.",
                link: "/resources/knowledge-base/platform-updates/dashboard-analytics",
              },
              {
                title: "Implementing Single Sign-On (SSO) with OAuth 2.0",
                category: "Authentication",
                date: "Added 5 days ago",
                excerpt:
                  "A step-by-step guide to implementing Single Sign-On using OAuth 2.0 for seamless user authentication.",
                link: "/resources/knowledge-base/authentication/sso-oauth",
              },
              {
                title: "Migrating from v1 to v2 API",
                category: "API",
                date: "Added 1 week ago",
                excerpt:
                  "Important information and steps for migrating from our v1 API to the new v2 API with minimal disruption.",
                link: "/resources/knowledge-base/api/v1-to-v2-migration",
              },
              {
                title: "Optimizing Mobile App Performance",
                category: "Mobile Development",
                date: "Added 2 weeks ago",
                excerpt:
                  "Tips and techniques for optimizing the performance of mobile applications built with our SDK.",
                link: "/resources/knowledge-base/mobile-development/performance-optimization",
              },
            ].map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="group block p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center mb-2 md:mb-0">
                    <Tag className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-primary">{article.category}</span>
                  </div>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                  <span className="font-medium">Read full article</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Need More Help?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Additional Support Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? We offer multiple support channels to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Contact Support",
                description: "Get in touch with our support team for personalized assistance with your issues.",
                icon: <MessageCircle className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                link: "/contact",
                buttonText: "Contact Support",
              },
              {
                title: "Community Forum",
                description: "Join our community forum to connect with other users and share knowledge.",
                icon: <Users className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-purple-500 to-violet-600",
                link: "/community",
                buttonText: "Visit Forum",
              },
              {
                title: "Developer Documentation",
                description: "Access comprehensive technical documentation for developers.",
                icon: <FileText className="h-6 w-6 text-white" />,
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
                link: "/resources/documentation",
                buttonText: "View Documentation",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white text-center"
              >
                <div className={`w-16 h-16 rounded-full ${option.color} flex items-center justify-center mb-4 mx-auto`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Link href={option.link}>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white w-full">
                    {option.buttonText}
                  </Button>
                </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Couldn't Find What You're Looking For?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our support team is ready to help you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact'>
            <Button className="bg-white text-primary hover:bg-gray-100 group">
              Submit a Support Ticket
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
            {/* <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button> */}
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

