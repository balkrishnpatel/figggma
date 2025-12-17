import { CheckCircle, Award, Users, Globe, Briefcase, Heart, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40"></div>

          {/* Enhanced decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-slow"></div>

          {/* Animated code-like pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-xs text-white/30 font-mono">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="animate-typing" style={{ animationDelay: `${i * 0.5}s` }}>
                  {"{"}company: "cyber-instant", founded: 2010, mission: "digital-excellence"{"}"}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md rounded-full mb-6 border border-white/30 animate-fade-in shadow-lg">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                About Us
              </span>
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent animate-slide-up relative">
              Our Story & Mission
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 animate-slide-up animation-delay-200">
              We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through
              innovation and excellence.
            </p>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Enhanced Our Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                From Startup to Industry Leader
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Vastorax began as a small team of developers with a big vision: to make
                cutting-edge technology accessible to businesses of all sizes. What started as a boutique web
                development agency has grown into a comprehensive digital solutions provider with a global presence.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've expanded our services to include mobile app development, custom software
                solutions, cloud computing, AI and machine learning, and more. Our growth has been driven by our
                commitment to innovation, quality, and client satisfaction.
              </p>

              {/* Timeline */}
              <div className="mt-8 space-y-4">
                {[
                  { year: "2010", event: "Founded as a web development agency" },
                  { year: "2013", event: "Expanded to mobile app development" },
                  { year: "2015", event: "Launched cloud services division" },
                  { year: "2018", event: "Introduced AI & ML solutions" },
                  { year: "2020", event: "Reached 100+ global clients milestone" },
                  { year: "2023", event: "Recognized as industry leader" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-16 text-primary font-bold">{item.year}</div>
                    <div className="w-4 relative mx-2">
                      <div className="absolute top-1.5 left-1.5 w-1 h-full bg-primary/20 group-last:hidden"></div>
                      <div className="absolute top-1 left-0 w-4 h-4 rounded-full border-2 border-primary bg-white group-hover:scale-125 transition-transform"></div>
                    </div>
                    <div className="flex-1 pb-4 group-hover:text-primary transition-colors">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative z-10 bg-white transform hover:scale-[1.02] transition-transform duration-500">
                <img src="/our_headquarters.jpg?height=600&width=800" alt="Vastorax team" className="w-full h-auto" />

                {/* Overlaid caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">Our Headquarters</h3>
                  <p className="text-white/80">Where innovation happens every day</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>

              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 transform rotate-3">
                <div className="text-primary font-bold text-xl">13+ Years</div>
                <div className="text-gray-600 text-sm">of Excellence</div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 transform -rotate-3">
                <div className="text-accent font-bold text-xl">200+</div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values shape everything we do, from how we develop solutions to how we interact with our clients
              and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-6 w-6 text-white" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client communication.",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaboration to achieve the best results.",
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
              },
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Innovation",
                description: "We embrace new technologies and approaches to solve complex problems.",
                color: "bg-gradient-to-br from-purple-500 to-violet-600",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-white" />,
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices.",
                color: "bg-gradient-to-br from-amber-500 to-orange-600",
              },
              {
                icon: <Heart className="h-6 w-6 text-white" />,
                title: "Client-Centric",
                description: "We put our clients' needs first and build lasting relationships based on trust.",
                color: "bg-gradient-to-br from-pink-500 to-rose-600",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-white" />,
                title: "Accountability",
                description: "We take ownership of our work and deliver on our promises.",
                color: "bg-gradient-to-br from-teal-500 to-cyan-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-gray-200 hover:border-primary/20 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-lg ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet the Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of professionals is the heart of our company. Get to know the people behind our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                position: "CEO & Founder",
                image: "/placeholder.svg?height=300&width=300",
                bio: "With over 15 years of experience in the tech industry, Alex leads our company with vision and passion.",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Samantha Lee",
                position: "CTO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Samantha oversees our technical strategy and ensures we stay at the forefront of technology.",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "David Rodriguez",
                position: "Head of Design",
                image: "/placeholder.svg?height=300&width=300",
                bio: "David brings creativity and user-centered design principles to all our projects.",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
              {
                name: "Michelle Chen",
                position: "Director of Operations",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Michelle ensures our projects run smoothly and our clients receive exceptional service.",
                social: {
                  linkedin: "#",
                  twitter: "#",
                  github: "#",
                },
              },
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg border border-gray-100 bg-white">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h4 className="text-white font-bold text-xl">{member.name}</h4>
                      <p className="text-white/90 text-sm mb-3">{member.position}</p>

                      {/* Social links */}
                      <div className="flex space-x-3 mt-2">
                        {Object.keys(member.social).map((platform) => (
                          <a
                            key={platform}
                            href={member.social[platform]}
                            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                            aria-label={`${member.name}'s ${platform}`}
                          >
                            <span className="text-white text-xs">{platform[0].toUpperCase()}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg shadow-lg">
              View Full Team
            </Button>
          </div> */}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "13+", label: "Years of Experience", icon: <Clock className="h-6 w-6 text-primary" /> },
              { value: "500+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6 text-primary" /> },
              { value: "200+", label: "Team Members", icon: <Users className="h-6 w-6 text-primary" /> },
              { value: "50+", label: "Countries Served", icon: <Globe className="h-6 w-6 text-primary" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Join Our Team
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Check out our current openings and become
            part of our success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/company/careers'>
            <Button className="bg-white text-primary hover:bg-gray-100 group px-8 py-6 text-lg shadow-xl">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
            {/* <Button
              variant="outline"
              className="border-white/40 text-black hover:bg-white/15 px-8 py-6 text-lg group shadow-lg"
            >
              Learn About Our Culture
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </section>
    </main>
  )
}

