import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
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
              Partners
            </span>
            <h1 className="text-4xl py-3 md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our Strategic Partners
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              We collaborate with industry-leading technology and business partners to deliver exceptional solutions to
              our clients.
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

      {/* Technology Partners Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Technology Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Leading Technology Alliances
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with the world's leading technology providers to deliver cutting-edge solutions to our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Microsoft",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="64" height="64">
                    <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                    <path fill="#f35325" d="M1 1h10v10H1z" />
                    <path fill="#81bc06" d="M12 1h10v10H12z" />
                    <path fill="#05a6f0" d="M1 12h10v10H1z" />
                    <path fill="#ffba08" d="M12 12h10v10H12z" />
                  </svg>
                ),
                description: "Gold Partner",
                link: "https://microsoft.com",
              },
              {
                name: "AWS",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.3 200" width="64" height="38">
                    <path
                      fill="#FF9900"
                      d="M93.5 70.9l-11.2 4.8s-1.6-12-17.9-12c-16.3 0-19.5 12.4-19.5 16.7 0 4.3 1.2 14.6 18.3 18.7 17.1 4.1 22.8 8.9 22.8 17.4 0 8.5-6.9 17-21.1 17-18.3 0-25.2-9.3-25.2-9.3l11.4-5.7s3.3 7.3 14.6 7.3c11.4 0 12.6-7.7 12.6-10.2 0-6.1-5.7-11.4-17.9-14.2-12.2-2.8-23.6-7.7-23.6-22 0-14.3 13.4-22.8 27.7-22.8 27.5 0 29 21.3 29 21.3zm32.2 55.5c-15.4 11.4-37.7 17.4-56.9 17.4-27 0-51.3-10-69.7-26.5-1.4-1.3-.2-3.1 1.6-2.1 19.7 11.5 44 18.4 69.2 18.4 17 0 35.6-3.5 52.8-10.8 2.6-1.1 4.7 1.7 2.2 3.6l.8 0z"
                    />
                    <path
                      fill="#FF9900"
                      d="M156.9 114l-2.2-1.9c-1.5-1.3-3.3-.6-3.3 1.3v3.8c0 1.9 1.8 2.6 3.3 1.3l2.2-1.9c1.5-1.3 1.5-1.3 0-2.6z"
                    />
                  </svg>
                ),
                description: "Advanced Consulting Partner",
                link: "https://aws.amazon.com",
              },
              {
                name: "Google Cloud",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <path fill="#4285F4" d="M32.7 31.3l15.3-15.3 2.8 2.8-15.3 15.3z" />
                    <path fill="#EA4335" d="M50.8 28.3l-2.8-2.8 2.8-2.8 2.8 2.8z" />
                    <path fill="#34A853" d="M32.7 31.3l-2.8 2.8-15.3-15.3 2.8-2.8z" />
                    <path fill="#FBBC05" d="M14.6 16l2.8 2.8-2.8 2.8-2.8-2.8z" />
                    <path fill="#4285F4" d="M32.7 31.3l-2.8-2.8-2.8 2.8 2.8 2.8z" />
                    <path fill="#EA4335" d="M32.7 36.9l-2.8-2.8 2.8-2.8 2.8 2.8z" />
                  </svg>
                ),
                description: "Premier Partner",
                link: "https://cloud.google.com",
              },
              {
                name: "Salesforce",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <path
                      fill="#00A1E0"
                      d="M29.1 11.5c2.1-2.2 5-3.5 8.2-3.5 5.5 0 10 3.9 11.1 9.1 2.1-0.9 4.5-1.4 7-1.4 9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9-1.2 0-2.3-0.1-3.4-0.3-2.1 3.9-6.2 6.5-10.9 6.5-2.1 0-4.1-0.5-5.8-1.5-2.1 4.3-6.5 7.3-11.6 7.3-5.8 0-10.7-3.8-12.4-9-1 0.2-2 0.3-3 0.3-8.3 0-15-6.7-15-15 0-5.9 3.4-11 8.4-13.4-0.5-1.7-0.8-3.5-0.8-5.3 0-10.5 8.5-19 19-19 4.6 0 8.8 1.6 12.1 4.3"
                    />
                  </svg>
                ),
                description: "Platinum Consulting Partner",
                link: "https://salesforce.com",
              },
              {
                name: "Adobe",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <path fill="#FA0F00" d="M12.1 12.1h39.8v39.8H12.1z" />
                    <path fill="#FFFFFF" d="M28.5 30.5l-5.9 14h-5.4l11.3-25.9h0.1l11.3 25.9h-5.4z" />
                    <path fill="#FFFFFF" d="M39.8 44.5l-5.9-14 5.9-11.9h5.4z" />
                  </svg>
                ),
                description: "Solution Partner",
                link: "https://adobe.com",
              },
              {
                name: "Oracle",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <path
                      fill="#F80000"
                      d="M32 12c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
                    />
                    <path fill="#F80000" d="M26 26h12v12H26z" />
                  </svg>
                ),
                description: "Gold Partner",
                link: "https://oracle.com",
              },
              {
                name: "IBM",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <path
                      fill="#1F70C1"
                      d="M10 14h44v4H10zM10 22h44v4H10zM10 30h44v4H10zM10 38h44v4H10zM10 46h44v4H10z"
                    />
                  </svg>
                ),
                description: "Business Partner",
                link: "https://ibm.com",
              },
              {
                name: "SAP",
                icon: () => (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <path fill="#0FAAFF" d="M10 10h44v44H10z" />
                    <path
                      fill="#FFFFFF"
                      d="M32 20c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
                    />
                  </svg>
                ),
                description: "Silver Partner",
                link: "https://sap.com",
              },
            ].map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group flex flex-col items-center text-center"
              >
                <div className="h-16 flex items-center justify-center mb-4">{partner.icon()}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliances Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Strategic Alliances
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industry Partnerships
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic industry partnerships help us deliver comprehensive solutions across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Healthcare Alliance",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                ),
                description:
                  "Partnering with leading healthcare organizations to deliver innovative digital health solutions.",
                link: "#healthcare-alliance",
              },
              {
                name: "Financial Services Network",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                ),
                description:
                  "Collaborating with financial institutions to develop secure, compliant fintech solutions.",
                link: "#financial-services",
              },
              {
                name: "Retail Innovation Consortium",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                ),
                description: "Working with retail leaders to transform the shopping experience through technology.",
                link: "#retail-innovation",
              },
              {
                name: "Manufacturing Excellence Group",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17z" />
                    <path d="M16 8V1" />
                    <path d="M12 12v8" />
                    <path d="M8 12v8" />
                    <path d="M4 12v8" />
                  </svg>
                ),
                description: "Partnering with manufacturers to implement Industry 4.0 technologies and solutions.",
                link: "#manufacturing-excellence",
              },
              {
                name: "Education Technology Alliance",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                description: "Collaborating with educational institutions to advance digital learning platforms.",
                link: "#education-technology",
              },
              {
                name: "Government Solutions Network",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                ),
                description: "Working with government agencies to modernize public services through technology.",
                link: "#government-solutions",
              },
            ].map((alliance, index) => (
              <a
                key={index}
                href={alliance.link}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    {alliance.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {alliance.name}
                  </h3>
                </div>
                <p className="text-gray-600">{alliance.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Program Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Partner Program
              </span>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join Our Partner Ecosystem
              </h2>
              <p className="text-gray-600 mb-6">
                MHLP's Partner Program offers a collaborative framework for businesses to grow together. By
                joining our ecosystem, you'll gain access to our expertise, resources, and network to deliver
                exceptional value to your clients.
              </p>
              <p className="text-gray-600 mb-6">
                We offer different partnership models tailored to your business needs, whether you're a technology
                provider, service provider, or industry specialist.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technology Partners</h4>
                    <p className="text-gray-600">
                      Integrate your technology with our solutions to create comprehensive offerings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Solution Partners</h4>
                    <p className="text-gray-600">Resell or implement our solutions to expand your service portfolio.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Referral Partners</h4>
                    <p className="text-gray-600">
                      Refer clients to us and earn rewards while providing them with top-quality solutions.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/partner_ecosystem.jpg?height=600&width=800"
                  alt="Partner ecosystem"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Partner Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Partner With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of joining our partner ecosystem and how we can grow together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expanded Offerings",
                description:
                  "Enhance your portfolio with our cutting-edge solutions to meet more of your clients' needs.",
                icon: "🚀",
              },
              {
                title: "Technical Support",
                description:
                  "Access our technical expertise and support to ensure successful implementation and customer satisfaction.",
                icon: "🛠️",
              },
              {
                title: "Marketing Resources",
                description:
                  "Leverage our marketing materials and co-marketing opportunities to promote your services.",
                icon: "📣",
              },
              {
                title: "Training & Certification",
                description:
                  "Benefit from comprehensive training programs and certifications to enhance your team's skills.",
                icon: "🎓",
              },
              {
                title: "Revenue Opportunities",
                description: "Create new revenue streams through reselling, implementation, or referral fees.",
                icon: "💰",
              },
              {
                title: "Collaborative Innovation",
                description: "Work together on innovative solutions that address emerging market needs and challenges.",
                icon: "💡",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join our partner ecosystem today and let's create exceptional value for our clients together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
          <Button className="bg-white text-primary hover:bg-gray-100 group">
              Contact Us 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

