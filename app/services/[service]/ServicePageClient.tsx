// "use client"

// import { useState, useEffect, useRef } from "react"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import {
//   ArrowLeft,
//   CheckCircle,
//   ArrowRight,
//   ChevronDown,
//   Clock,
//   Users,
//   BarChart,
//   Zap,
//   MessageSquare,
//   Award,
//   Lightbulb,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { services } from "@/lib/services"
// import { cn } from "@/lib/utils"

// interface ServicePageProps {
//   servicee: string
// }

// export default function ServicePageClient({ servicee }: ServicePageProps) {
//   const service = services.find((s) => s.slug === servicee)

//   const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
//     hero: false,
//     overview: false,
//     process: false,
//     faq: false,
//     cta: false,
//     related: false,
//   })
//   const sectionRefs = {
//     hero: useRef<HTMLDivElement>(null),
//     overview: useRef<HTMLDivElement>(null),
//     process: useRef<HTMLDivElement>(null),
//     faq: useRef<HTMLDivElement>(null),
//     cta: useRef<HTMLDivElement>(null),
//     related: useRef<HTMLDivElement>(null),
//   }

//   const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

//   const toggleFaq = (index: number) => {
//     setExpandedFaqs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionId = entry.target.id
//             setVisibleSections((prev) => ({
//               ...prev,
//               [sectionId]: true,
//             }))
//           }
//         })
//       },
//       { threshold: 0.1 },
//     )

//     Object.entries(sectionRefs).forEach(([id, ref]) => {
//       if (ref.current) {
//         observer.observe(ref.current)
//       }
//     })

//     return () => {
//       Object.values(sectionRefs).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current)
//         }
//       })
//     }
//   }, [])

//   useEffect(() => {
//     // Staggered animation for hero section
//     const timer = setTimeout(() => {
//       setVisibleSections((prev) => ({ ...prev, hero: true }))
//     }, 100)

//     return () => clearTimeout(timer)
//   }, [])

//   if (!service) {
//     notFound()
//   }

//   const faqs = [
//     {
//       question: `How long does the typical ${service.title} project take?`,
//       answer: `The timeline for ${service.title} projects varies based on scope and complexity. Simple projects may take 4-8 weeks, while more complex implementations can take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.`,
//     },
//     {
//       question: `What is your approach to ${service.title}?`,
//       answer: `Our approach to ${service.title} combines industry best practices with innovative techniques tailored to your specific needs. We begin with thorough discovery and planning, followed by iterative development with regular feedback cycles, comprehensive testing, and ongoing support after launch.`,
//     },
//     {
//       question: `How do you ensure quality in your ${service.title} services?`,
//       answer: `Quality assurance is integrated throughout our ${service.title} process. We implement automated testing, conduct regular code reviews, follow industry standards, and perform thorough QA testing before delivery. We also provide detailed documentation and training to ensure long-term success.`,
//     },
//     {
//       question: `What makes your ${service.title} services different from competitors?`,
//       answer: `Our ${service.title} services stand out through our experienced team of specialists, proven methodology, focus on business outcomes rather than just technical deliverables, transparent communication throughout the project, and commitment to long-term partnerships with ongoing support.`,
//     },
//   ]

//   const processSteps = [
//     {
//       title: "Discovery & Planning",
//       description: `We begin by understanding your business goals, target audience, and specific requirements for ${service.title}. This phase includes stakeholder interviews, market research, and competitive analysis.`,
//       icon: Lightbulb,
//     },
//     {
//       title: "Strategy & Design",
//       description: `Based on our findings, we develop a comprehensive strategy and design approach for your ${service.title} project, including technical architecture, user experience design, and project roadmap.`,
//       icon: Users,
//     },
//     {
//       title: "Development & Implementation",
//       description: `Our expert team brings your ${service.title} solution to life using industry-leading technologies and best practices, with regular updates and demonstrations throughout the process.`,
//       icon: Zap,
//     },
//     {
//       title: "Testing & Refinement",
//       description: `We conduct thorough testing to ensure your ${service.title} solution meets all requirements and performs flawlessly across all relevant platforms and scenarios.`,
//       icon: CheckCircle,
//     },
//     {
//       title: "Launch & Support",
//       description: `After successful deployment, we provide ongoing support and maintenance for your ${service.title} solution, ensuring it continues to deliver value and adapt to changing needs.`,
//       icon: Award,
//     },
//   ]

//   // Find related services (excluding current one)
//   const relatedServices = services
//     .filter((s) => s.slug !== service.slug)
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3)

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       {/* Hero Section */}
//       <section
//         id="hero"
//         ref={sectionRefs.hero}
//         className="relative py-24 bg-gradient-to-r from-secondary to-primary text-white overflow-hidden"
//       >
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
//           <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-200"></div>
//           <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
//         </div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <Link href="/services">
//               <Button
//                 variant="ghost"
//                 className={cn(
//                   "text-gray-300 hover:text-white mb-8 group transition-all duration-500",
//                   visibleSections.hero ? "opacity-100" : "opacity-0 translate-y-4",
//                 )}
//                 style={{ transitionDelay: "100ms" }}
//               >
//                 <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
//                 Back to Services
//               </Button>
//             </Link>

//             <div
//               className={cn(
//                 "flex flex-col md:flex-row items-start md:items-center gap-8 mb-8 transition-all duration-700",
//                 visibleSections.hero ? "opacity-100" : "opacity-0 translate-y-8",
//               )}
//               style={{ transitionDelay: "200ms" }}
//             >
//               <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mr-6 animate-pulse-slow backdrop-blur-sm border border-white/10 shadow-xl">
//                 <service.icon className="h-10 w-10 text-accent" />
//                 <div className="absolute inset-0 rounded-2xl bg-white/5 animate-pulse-slow blur-sm"></div>
//               </div>
//               <h1 className="text-4xl py-3 md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 {service.title}
//               </h1>
//             </div>

//             <p
//               className={cn(
//                 "text-xl text-gray-300 max-w-3xl transition-all duration-700",
//                 visibleSections.hero ? "opacity-100" : "opacity-0 translate-y-8",
//               )}
//               style={{ transitionDelay: "300ms" }}
//             >
//               {service.shortDescription}
//             </p>

          
//           </div>
//         </div>

//         {/* Wave separator */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 text-gray-50">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
//             <path
//               fill="currentColor"
//               fillOpacity="1"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section id="overview" ref={sectionRefs.overview} className="py-20">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto">
//             <div className="mb-16">
//               <div
//                 className={cn(
//                   "inline-block transition-all duration-700",
//                   visibleSections.overview ? "opacity-100" : "opacity-0 translate-y-8",
//                 )}
//               >
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="h-px w-8 bg-primary"></div>
//                   <span className="text-primary font-medium">Overview</span>
//                   <div className="h-px w-8 bg-primary"></div>
//                 </div>
//               </div>

//               <h2
//                 className={cn(
//                   "text-3xl md:text-4xl font-bold mb-6 text-gray-900 transition-all duration-700",
//                   visibleSections.overview ? "opacity-100" : "opacity-0 translate-y-8",
//                 )}
//                 style={{ transitionDelay: "100ms" }}
//               >
//                 What We Offer
//               </h2>

//               <p
//                 className={cn(
//                   "text-lg text-gray-600 mb-10 transition-all duration-700",
//                   visibleSections.overview ? "opacity-100" : "opacity-0 translate-y-8",
//                 )}
//                 style={{ transitionDelay: "200ms" }}
//               >
//                 {service.fullDescription}
//               </p>

//               <div
//                 className={cn(
//                   "transition-all duration-500 space-y-12",
//                   visibleSections.overview ? "opacity-100" : "opacity-0",
//                 )}
//                 style={{ transitionDelay: "300ms" }}
//               >
//                 {/* Key Features Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
//                     <div className="flex items-center mb-6">
//                       <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4">
//                         <CheckCircle className="h-6 w-6 text-primary" />
//                       </div>
//                       <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
//                         Key Features
//                       </h3>
//                     </div>
//                     <ul className="space-y-4">
//                       {service.features.map((feature, index) => (
//                         <li
//                           key={index}
//                           className="flex items-start group/item"
//                           style={{
//                             transitionDelay: `${index * 100}ms`,
//                             opacity: visibleSections.overview ? 1 : 0,
//                             transform: visibleSections.overview ? "translateY(0)" : "translateY(20px)",
//                             transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
//                           }}
//                         >
//                           <CheckCircle className="h-5 w-5 text-accent group-hover:text-primary mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:scale-110 transition-transform" />
//                           <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
//                             {feature}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="relative">
//                     <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-gradient-shift"></div>
//                     <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
//                       <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
//                       <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>

//                       <div className="flex items-center mb-6">
//                         <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4">
//                           <Award className="h-6 w-6 text-primary" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 relative z-10">
//                           Why Choose Our {service.title}
//                         </h3>
//                       </div>

//                       <div className="space-y-6 relative z-10">
//                         <div className="flex items-start">
//                           <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-lg">
//                             <Clock className="h-5 w-5 text-primary" />
//                           </div>
//                           <div>
//                             <h4 className="font-medium text-gray-900">Fast Delivery</h4>
//                             <p className="text-sm text-gray-600">
//                               Accelerated development cycles with proven methodologies
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex items-start">
//                           <div className="mr-4 mt-1 bg-accent/10 p-2 rounded-lg">
//                             <Users className="h-5 w-5 text-accent" />
//                           </div>
//                           <div>
//                             <h4 className="font-medium text-gray-900">Expert Team</h4>
//                             <p className="text-sm text-gray-600">
//                               Specialized professionals with years of industry experience
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex items-start">
//                           <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-lg">
//                             <BarChart className="h-5 w-5 text-primary" />
//                           </div>
//                           <div>
//                             <h4 className="font-medium text-gray-900">Measurable Results</h4>
//                             <p className="text-sm text-gray-600">Data-driven approach with clear KPIs and analytics</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Benefits Section */}
//                 <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
//                   <div className="flex items-center mb-6">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4">
//                       <Zap className="h-6 w-6 text-primary" />
//                     </div>
//                     <h3 className="text-xl font-bold text-primary">Benefits</h3>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {service.benefits.map((benefit, index) => (
//                       <div
//                         key={index}
//                         className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
//                         style={{
//                           transitionDelay: `${index * 100}ms`,
//                           opacity: visibleSections.overview ? 1 : 0,
//                           transform: visibleSections.overview ? "translateY(0)" : "translateY(20px)",
//                           transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
//                         }}
//                       >
//                         <div className="mr-4 bg-accent/10 p-2 rounded-lg">
//                           <CheckCircle className="h-5 w-5 text-accent" />
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-gray-900">{benefit}</h4>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {`Our ${service.title} solutions are designed to ${benefit.toLowerCase()} through innovative approaches and proven methodologies.`}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Technologies Section */}
//                 <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
//                   <div className="flex items-center mb-6">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4">
//                       <Lightbulb className="h-6 w-6 text-primary" />
//                     </div>
//                     <h3 className="text-xl font-bold text-primary">Technologies We Use</h3>
//                   </div>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                     {[
//                       { name: "React", icon: <div className="text-blue-500 text-xl mr-2">⚛️</div> },
//                       { name: "Angular", icon: <div className="text-red-500 text-xl mr-2">🅰️</div> },
//                       { name: "Vue.js", icon: <div className="text-green-500 text-xl mr-2">🟢</div> },
//                       { name: "Node.js", icon: <div className="text-green-600 text-xl mr-2">🟩</div> },
//                       { name: "Python", icon: <div className="text-blue-500 text-xl mr-2">🐍</div> },
//                       { name: "Java", icon: <div className="text-orange-500 text-xl mr-2">☕</div> },
//                       { name: "AWS", icon: <div className="text-orange-400 text-xl mr-2">☁️</div> },
//                       { name: "Azure", icon: <div className="text-blue-400 text-xl mr-2">☁️</div> },
//                       { name: "Docker", icon: <div className="text-blue-500 text-xl mr-2">🐳</div> },
//                       { name: "Kubernetes", icon: <div className="text-blue-600 text-xl mr-2">⎈</div> },
//                       { name: "MongoDB", icon: <div className="text-green-500 text-xl mr-2">🍃</div> },
//                       { name: "PostgreSQL", icon: <div className="text-blue-500 text-xl mr-2">🐘</div> },
//                     ].map((tech, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary/20 hover:bg-gray-50 transition-all duration-300 group"
//                         style={{
//                           transitionDelay: `${index * 50}ms`,
//                           opacity: visibleSections.overview ? 1 : 0,
//                           transform: visibleSections.overview ? "translateY(0)" : "translateY(20px)",
//                           transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
//                         }}
//                       >
//                         {tech.icon}
//                         <span className="text-gray-700 group-hover:text-primary font-medium transition-colors duration-300">
//                           {tech.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section id="process" ref={sectionRefs.process} className="py-20 bg-gray-50">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto">
//             <div
//               className={cn(
//                 "text-center mb-16 transition-all duration-700",
//                 visibleSections.process ? "opacity-100" : "opacity-0 translate-y-8",
//               )}
//             >
//               <div className="inline-block">
//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <div className="h-px w-8 bg-primary"></div>
//                   <span className="text-primary font-medium">Our Process</span>
//                   <div className="h-px w-8 bg-primary"></div>
//                 </div>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How We Deliver {service.title}</h2>

//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Our proven methodology ensures successful outcomes for your {service.title} project through a
//                 structured, collaborative approach.
//               </p>
//             </div>

//             <div className="relative">
//               {/* Connecting line */}
//               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

//               {processSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={cn(
//                     "flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 transition-all duration-700",
//                     visibleSections.process ? "opacity-100" : "opacity-0 translate-y-8",
//                   )}
//                   style={{ transitionDelay: `${index * 100}ms` }}
//                 >
//                   <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:order-first" : "md:order-last"}`}>
//                     <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
//                       <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
//                         {index + 1}. {step.title}
//                       </h3>
//                       <p className="text-gray-600">{step.description}</p>
//                     </div>
//                   </div>

//                   <div className="relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-white rounded-full p-4 border-4 border-gray-200 shadow-lg">
//                     <step.icon className="h-8 w-8 text-primary" />
//                   </div>

//                   <div className="md:w-1/2 hidden md:block"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" ref={sectionRefs.faq} className="py-20">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto">
//             <div
//               className={cn(
//                 "text-center mb-16 transition-all duration-700",
//                 visibleSections.faq ? "opacity-100" : "opacity-0 translate-y-8",
//               )}
//             >
//               <div className="inline-block">
//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <div className="h-px w-8 bg-primary"></div>
//                   <span className="text-primary font-medium">FAQ</span>
//                   <div className="h-px w-8 bg-primary"></div>
//                 </div>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Get answers to common questions about our {service.title} services
//               </p>
//             </div>

//             <div className="space-y-6">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={cn(
//                     "border border-gray-200 rounded-xl overflow-hidden transition-all duration-700",
//                     expandedFaqs.includes(index) ? "shadow-md" : "shadow-sm",
//                     visibleSections.faq ? "opacity-100" : "opacity-0 translate-y-8",
//                   )}
//                   style={{ transitionDelay: `${index * 100}ms` }}
//                 >
//                   <button
//                     onClick={() => toggleFaq(index)}
//                     className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
//                   >
//                     <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
//                     <ChevronDown
//                       className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
//                         expandedFaqs.includes(index) ? "transform rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       expandedFaqs.includes(index) ? "max-h-96" : "max-h-0"
//                     }`}
//                   >
//                     <div className="p-6 pt-0 bg-white">
//                       <p className="text-gray-600">{faq.answer}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section
//         id="cta"
//         ref={sectionRefs.cta}
//         className="py-20 bg-gradient-to-br from-primary/90 to-secondary text-white"
//       >
//         <div className="container px-4 mx-auto">
//           <div
//             className={cn(
//               "max-w-4xl mx-auto text-center transition-all duration-700",
//               visibleSections.cta ? "opacity-100" : "opacity-0 translate-y-8",
//             )}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Transform Your Business with {service.title}?
//             </h2>

//             <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
//               Contact us today to discuss how our {service.title} services can help your business thrive in the digital
//               landscape.
//             </p>

//             <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
//                   <Clock className="h-10 w-10 text-accent mb-4" />
//                   <h3 className="text-lg font-bold">Fast Response</h3>
//                   <p className="text-white/70 text-sm text-center mt-2">Get a response within 24 hours</p>
//                 </div>

//                 <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
//                   <MessageSquare className="h-10 w-10 text-accent mb-4" />
//                   <h3 className="text-lg font-bold">Expert Consultation</h3>
//                   <p className="text-white/70 text-sm text-center mt-2">Speak with our {service.title} specialists</p>
//                 </div>

//                 <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
//                   <Users className="h-10 w-10 text-accent mb-4" />
//                   <h3 className="text-lg font-bold">Dedicated Team</h3>
//                   <p className="text-white/70 text-sm text-center mt-2">
//                     Work with specialists who understand your needs
//                   </p>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact">
//                   {" "}
//                   <Button size="lg" className="bg-accent hover:bg-accent/90 text-white group">
//                     Schedule a Consultation
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>

//                 <Link href="/resources/case-studies">
//                   {" "}
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-black hover:bg-white/10 hover:text-white"
//                   >
//                     View Case Studies
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Services Section */}
//       <section id="related" ref={sectionRefs.related} className="py-20">
//         <div className="container px-4 mx-auto">
//           <div
//             className={cn(
//               "max-w-4xl mx-auto mb-16 transition-all duration-700",
//               visibleSections.related ? "opacity-100" : "opacity-0 translate-y-8",
//             )}
//           >
//             <div className="text-center">
//               <div className="inline-block">
//                 <div className="flex items-center justify-center gap-2 mb-4">
//                   <div className="h-px w-8 bg-primary"></div>
//                   <span className="text-primary font-medium">Explore More</span>
//                   <div className="h-px w-8 bg-primary"></div>
//                 </div>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Related Services</h2>

//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Discover other services that complement {service.title}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//               {relatedServices.map((relatedService, index) => (
//                 <Link
//                   key={index}
//                   href={`/services/${relatedService.slug}`}
//                   className={cn(
//                     "group transition-all duration-700",
//                     visibleSections.related ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
//                   )}
//                   style={{ transitionDelay: `${index * 100}ms` }}
//                 >
//                   <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-500">
//                       <relatedService.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
//                     </div>

//                     <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
//                       {relatedService.title}
//                     </h3>

//                     <p className="text-gray-600 mb-4 flex-grow">{relatedService.shortDescription}</p>

//                     <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors duration-300">
//                       Learn more
//                       <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 bg-gray-50 border-t border-gray-200">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto text-center">
//             <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to get started with {service.title}?</h3>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//               Contact us today to discuss your project requirements and discover how we can help you achieve your
//               business goals.
//             </p>
//             <Link href="/contact">
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
//                 Contact Us Now
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }





"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Clock,
  Users,
  BarChart,
  Zap,
  MessageSquare,
  Award,
  Lightbulb,
  Star,
  TrendingUp,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { cn } from "@/lib/utils"

interface ServicePageProps {
  servicee: string
}

export default function ServicePageClient({ servicee }: ServicePageProps) {
  const service = services.find((s) => s.slug === servicee)

  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    hero: false,
    overview: false,
    process: false,
    faq: false,
    cta: false,
    related: false,
  })
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    overview: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
    related: useRef<HTMLDivElement>(null),
  }

  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setExpandedFaqs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSections((prev) => ({ ...prev, hero: true }))
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!service) {
    notFound()
  }

  const faqs = [
    {
      question: `How long does the typical ${service.title} project take?`,
      answer: `The timeline for ${service.title} projects varies based on scope and complexity. Simple projects may take 4-8 weeks, while more complex implementations can take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.`,
    },
    {
      question: `What is your approach to ${service.title}?`,
      answer: `Our approach to ${service.title} combines industry best practices with innovative techniques tailored to your specific needs. We begin with thorough discovery and planning, followed by iterative development with regular feedback cycles, comprehensive testing, and ongoing support after launch.`,
    },
    {
      question: `How do you ensure quality in your ${service.title} services?`,
      answer: `Quality assurance is integrated throughout our ${service.title} process. We implement automated testing, conduct regular code reviews, follow industry standards, and perform thorough QA testing before delivery. We also provide detailed documentation and training to ensure long-term success.`,
    },
    {
      question: `What makes your ${service.title} services different from competitors?`,
      answer: `Our ${service.title} services stand out through our experienced team of specialists, proven methodology, focus on business outcomes rather than just technical deliverables, transparent communication throughout the project, and commitment to long-term partnerships with ongoing support.`,
    },
  ]

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: `We begin by understanding your business goals, target audience, and specific requirements for ${service.title}. This phase includes stakeholder interviews, market research, and competitive analysis.`,
      icon: Lightbulb,
    },
    {
      title: "Strategy & Design",
      description: `Based on our findings, we develop a comprehensive strategy and design approach for your ${service.title} project, including technical architecture, user experience design, and project roadmap.`,
      icon: Users,
    },
    {
      title: "Development & Implementation",
      description: `Our expert team brings your ${service.title} solution to life using industry-leading technologies and best practices, with regular updates and demonstrations throughout the process.`,
      icon: Zap,
    },
    {
      title: "Testing & Refinement",
      description: `We conduct thorough testing to ensure your ${service.title} solution meets all requirements and performs flawlessly across all relevant platforms and scenarios.`,
      icon: CheckCircle,
    },
    {
      title: "Launch & Support",
      description: `After successful deployment, we provide ongoing support and maintenance for your ${service.title} solution, ensuring it continues to deliver value and adapt to changing needs.`,
      icon: Award,
    },
  ]

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes float-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-smooth {
          animation: float-smooth 6s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 16px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        {/* Subtle background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float-smooth"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-smooth" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link href="/services">
              <Button
                variant="ghost"
                className={cn(
                  "text-gray-600 hover:text-gray-900 mb-8 group transition-all duration-500",
                  visibleSections.hero ? "opacity-100" : "opacity-0 translate-y-4",
                )}
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-6 transition-all duration-700",
                    visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  )}
                >
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Premium Service</span>
                </div>

                <h1
                  className={cn(
                    "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight transition-all duration-700",
                    visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: "100ms" }}
                >
                  {service.title}
                </h1>

                <p
                  className={cn(
                    "text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700",
                    visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  {service.shortDescription}
                </p>

                <div
                  className={cn(
                    "flex flex-wrap gap-4 transition-all duration-700",
                    visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: "300ms" }}
                >
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 group shadow-lg">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/resources/case-studies">
                    <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </div>

              <div
                className={cn(
                  "relative transition-all duration-700",
                  visibleSections.hero ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                )}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                    <service.icon className="w-48 h-48 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" ref={sectionRefs.overview} className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div
              className={cn(
                "text-center mb-16 transition-all duration-700",
                visibleSections.overview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.fullDescription}</p>
            </div>

            {/* Features and Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Features Card */}
              <div
                className={cn(
                  "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 card-hover transition-all duration-700",
                  visibleSections.overview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                </div>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        opacity: visibleSections.overview ? 1 : 0,
                        transform: visibleSections.overview ? "translateX(0)" : "translateX(-20px)",
                        transition: "all 500ms ease-out",
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-rows-3 gap-6">
                {[
                  { icon: Clock, label: "Fast Delivery", value: "30% Faster", color: "from-green-500 to-emerald-600" },
                  { icon: Users, label: "Expert Team", value: "50+ Specialists", color: "from-blue-500 to-indigo-600" },
                  { icon: BarChart, label: "Success Rate", value: "98% Happy", color: "from-purple-500 to-pink-600" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover transition-all duration-700",
                      visibleSections.overview ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                    )}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={cn("text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1", stat.color)}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                      <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center", stat.color)}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div
              className={cn(
                "bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16 transition-all duration-700",
                visibleSections.overview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      opacity: visibleSections.overview ? 1 : 0,
                      transform: visibleSections.overview ? "translateY(0)" : "translateY(20px)",
                      transition: "all 500ms ease-out",
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit}</h4>
                      <p className="text-sm text-gray-600">
                        Achieve {benefit.toLowerCase()} through our proven methodology
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div
              className={cn(
                "transition-all duration-700",
                visibleSections.overview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technologies We Use</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: "React", color: "bg-blue-100 text-blue-700" },
                  { name: "Angular", color: "bg-red-100 text-red-700" },
                  { name: "Vue.js", color: "bg-green-100 text-green-700" },
                  { name: "Node.js", color: "bg-green-100 text-green-700" },
                  { name: "Python", color: "bg-blue-100 text-blue-700" },
                  { name: "Java", color: "bg-orange-100 text-orange-700" },
                  { name: "AWS", color: "bg-yellow-100 text-yellow-700" },
                  { name: "Azure", color: "bg-blue-100 text-blue-700" },
                  { name: "Docker", color: "bg-blue-100 text-blue-700" },
                  { name: "Kubernetes", color: "bg-blue-100 text-blue-700" },
                  { name: "MongoDB", color: "bg-green-100 text-green-700" },
                  { name: "PostgreSQL", color: "bg-blue-100 text-blue-700" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={cn(
                      "px-4 py-3 rounded-lg font-medium text-center hover:scale-110 transition-all duration-300 cursor-pointer",
                      tech.color,
                    )}
                    style={{
                      transitionDelay: `${index * 30}ms`,
                      opacity: visibleSections.overview ? 1 : 0,
                    }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" ref={sectionRefs.process} className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div
              className={cn(
                "text-center mb-16 transition-all duration-700",
                visibleSections.process ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Process</h2>
              <p className="text-xl text-gray-600">Five steps to deliver excellence</p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    "grid md:grid-cols-12 gap-8 items-center transition-all duration-700",
                    visibleSections.process ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="md:col-span-1 flex md:justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className="md:col-span-11">
                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 card-hover">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={sectionRefs.faq} className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div
              className={cn(
                "text-center mb-16 transition-all duration-700",
                visibleSections.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about our {service.title} services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-700",
                    expandedFaqs.includes(index) ? "border-blue-600 shadow-lg" : "hover:border-gray-300",
                    visibleSections.faq ? "opacity-100" : "opacity-0",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                    <ChevronDown
                      className={cn(
                        "w-6 h-6 text-gray-500 transition-all duration-300 flex-shrink-0",
                        expandedFaqs.includes(index) && "rotate-180 text-blue-600",
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedFaqs.includes(index) ? "max-h-96" : "max-h-0",
                    )}
                  >
                    <div className="p-6 pt-0 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" ref={sectionRefs.cta} className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 mx-auto">
          <div
            className={cn(
              "max-w-5xl mx-auto text-center transition-all duration-700",
              visibleSections.cta ? "opacity-100 scale-100" : "opacity-0 scale-95",
            )}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let's discuss how our {service.title} services can help you achieve your goals
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Clock, title: "24h Response", desc: "Quick turnaround" },
                { icon: MessageSquare, title: "Expert Consultation", desc: "Speak with specialists" },
                { icon: Shield, title: "Quality Assured", desc: "98% satisfaction" },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <item.icon className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 font-semibold shadow-xl group">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/resources/case-studies">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 font-semibold">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section id="related" ref={sectionRefs.related} className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div
              className={cn(
                "text-center mb-16 transition-all duration-700",
                visibleSections.related ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Explore Related Services</h2>
              <p className="text-xl text-gray-600">Discover other services that complement {service.title}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <Link
                  key={index}
                  href={`/services/${relatedService.slug}`}
                  className={cn(
                    "group transition-all duration-700",
                    visibleSections.related ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full card-hover">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <relatedService.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{relatedService.shortDescription}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your {service.title} project requirements
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 group shadow-lg">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}