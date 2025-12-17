// "use client"

// import { useEffect, useRef } from "react"

// export function HeroSection() {
//   const heroRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-in")
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     const heroElement = heroRef.current
//     if (heroElement) {
//       observer.observe(heroElement)
//     }

//     return () => {
//       if (heroElement) {
//         observer.unobserve(heroElement)
//       }
//     }
//   }, [])

//   return (
//     <div
//       ref={heroRef}
//       className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out py-12 pt-24 md:py-0"
//       style={{
//         background: `
//           radial-gradient(circle at 50% 50%, rgba(23, 165, 137, 0.4) 0%, rgba(0, 112, 186, 0.6) 35%, rgba(17, 24, 39, 1) 100%)
//         `,
//       }}
//     >
//       {/* Enhanced background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

//         {/* Enhanced decorative elements */}
//         <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl animate-pulse-slow"></div>
//         <div className="absolute bottom-1/4 right-10 w-36 h-36 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl animate-float"></div>
//         <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-accent/30 rounded-full blur-xl animate-pulse"></div>

//         {/* Grid overlay with improved opacity */}
//         <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:50px_50px]"></div>
//       </div>

//       <div className="container px-4 mx-auto relative z-10 mt-8 sm:mt-0">
//         <div className="max-w-3xl mx-auto text-center text-white">
//           <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/15 backdrop-blur-md rounded-full mb-4 md:mb-6 border border-white/30 animate-fade-in mt-4 sm:mt-0">
//             <span className="text-xs md:text-sm font-medium text-white flex items-center">
//               <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
//               Transforming Businesses with Technology
//             </span>
//           </div>

//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight relative animate-slide-up">
//             <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent relative z-10">
//               MHLP
//               <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-accent-foreground via-accent to-accent/80 bg-clip-text text-transparent relative animation-delay-200">
//               Digital Solutions for the Modern Era
//               <div className="absolute -inset-1 bg-accent/10 blur-sm rounded-lg -z-10"></div>
//             </span>
//           </h1>

//           <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-8 animate-slide-up animation-delay-400">
//             We provide comprehensive IT services and digital solutions to help businesses thrive in an increasingly
//             digital world.
//           </p>

//           <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6 animate-fade-in animation-delay-600">
//             {[
//               { text: "Trusted by 500+ Companies", icon: "🏢" },
//               { text: "24/7 Support", icon: "🔧" },
//               { text: "99.9% Uptime", icon: "⚡" },
//               { text: "Award-Winning Solutions", icon: "🏆" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center group bg-white/15 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10 shadow-lg"
//               >
//                 <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 text-sm md:text-lg bg-white/10 rounded-full">
//                   {item.icon}
//                 </div>
//                 <span className="text-white text-xs md:text-sm group-hover:text-white transition-colors font-medium">
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, TrendingUp, Shield, Code, DollarSign, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const heroElement = heroRef.current
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement)
      }
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out pt-20"
    >
      {/* Professional Background with Financial Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f9ff]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `linear-gradient(rgba(61, 90, 241, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(61, 90, 241, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#3d5af1]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00d4ff]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 animate-fade-in">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#00b894] animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">
                  Software & Financial Solutions
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Empowering</span>
                <br />
                <span className="bg-gradient-to-r from-[#3d5af1] via-[#00d4ff] to-[#00b894] bg-clip-text text-transparent">
                  Financial Growth
                </span>
                <br />
                <span className="text-gray-900">Through Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Industry-leading software solutions and financial services that drive business success and maximize profitability.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in animation-delay-200">
              {[
                { icon: <Code className="w-5 h-5" />, text: "Custom Software Development" },
                { icon: <DollarSign className="w-5 h-5" />, text: "Financial Management" },
                { icon: <BarChart3 className="w-5 h-5" />, text: "Business Analytics" },
                { icon: <Shield className="w-5 h-5" />, text: "Secure & Compliant" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:scale-105">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3d5af1] to-[#00d4ff] flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <Button className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] hover:from-[#3d5af1]/90 hover:to-[#00d4ff]/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <Link href="/contact" className="flex items-center">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-[#3d5af1] px-8 py-6 text-base font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 border-t border-gray-200 animate-fade-in animation-delay-600">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">₹2B+</div>
                <div className="text-sm text-gray-600 font-medium">Transactions Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600 font-medium">Business Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Financial Dashboard Mockup */}
          <div className="relative animate-fade-in animation-delay-400 hidden lg:block">
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Total Revenue</div>
                    <div className="text-3xl font-bold">₹118M</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+24.5%</span>
                  </div>
                </div>
                <div className="text-sm opacity-75">Financial Year 2024</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Active Projects", value: "78", change: "+42%", color: "from-[#3d5af1] to-[#5c7cfa]" },
                    { label: "Profit Margin", value: "34%", change: "+8%", color: "from-[#00d4ff] to-[#00b4d8]" },
                    { label: "Client Growth", value: "156", change: "+45%", color: "from-[#00b894] to-[#00d4a8]" },
                    { label: "ROI Average", value: "285%", change: "+18%", color: "from-[#3d5af1] to-[#00d4ff]" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                      <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                      <div className="flex items-center justify-between">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-green-600">{stat.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Representation */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                  <div className="text-sm font-semibold text-gray-700 mb-4">Monthly Performance</div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 80, 60, 90, 75, 95].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col justify-end">
                        <div 
                          className="bg-gradient-to-t from-[#3d5af1] to-[#00d4ff] rounded-t-lg transition-all hover:opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] text-white py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                    Generate Report
                  </button>
                  <button className="flex-1 border-2 border-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-semibold hover:border-[#3d5af1] transition-all">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#00b894] to-[#00d4a8] rounded-2xl opacity-20 blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#3d5af1] to-[#00d4ff] rounded-2xl opacity-20 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}