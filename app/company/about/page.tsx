// import { CheckCircle, Award, Users, Globe, Briefcase, Heart, ArrowRight, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// export default function AboutPage() {
//   return (
//     <main className="min-h-screen pt-20">
//       {/* Enhanced Hero Section */}
//       <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
//           <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40"></div>

//           {/* Enhanced decorative elements */}
//           <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
//           <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
//           <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-slow"></div>

//           {/* Animated code-like pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-1/4 left-1/4 text-xs text-white/30 font-mono">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <div key={i} className="animate-typing" style={{ animationDelay: `${i * 0.5}s` }}>
//                   {"{"}company: "cyber-instant", founded: 2010, mission: "digital-excellence"{"}"}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md rounded-full mb-6 border border-white/30 animate-fade-in shadow-lg">
//               <span className="text-sm font-medium text-white flex items-center">
//                 <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
//                 About Us
//               </span>
//             </div>

//             <h1 className="text-4xl py-3 md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent animate-slide-up relative">
//               Our Story & Mission
//               <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-100 mb-8 animate-slide-up animation-delay-200">
//               We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through
//               innovation and excellence.
//             </p>
//           </div>
//         </div>

//         {/* Enhanced floating elements */}
//         <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
//         <div
//           className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </section>

//       {/* Enhanced Our Story Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="order-2 lg:order-1">
//               <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
//                 Our Journey
//               </div>
//               <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 From Startup to Industry Leader
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Founded in 2010, MHLP began as a small team of developers with a big vision: to make
//                 cutting-edge technology accessible to businesses of all sizes. What started as a boutique web
//                 development agency has grown into a comprehensive digital solutions provider with a global presence.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Over the years, we've expanded our services to include mobile app development, custom software
//                 solutions, cloud computing, AI and machine learning, and more. Our growth has been driven by our
//                 commitment to innovation, quality, and client satisfaction.
//               </p>

//               {/* Timeline */}
//               <div className="mt-8 space-y-4">
//                 {[
//                   { year: "2010", event: "Founded as a web development agency" },
//                   { year: "2013", event: "Expanded to mobile app development" },
//                   { year: "2015", event: "Launched cloud services division" },
//                   { year: "2018", event: "Introduced AI & ML solutions" },
//                   { year: "2020", event: "Reached 100+ global clients milestone" },
//                   { year: "2023", event: "Recognized as industry leader" },
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start group">
//                     <div className="w-16 text-primary font-bold">{item.year}</div>
//                     <div className="w-4 relative mx-2">
//                       <div className="absolute top-1.5 left-1.5 w-1 h-full bg-primary/20 group-last:hidden"></div>
//                       <div className="absolute top-1 left-0 w-4 h-4 rounded-full border-2 border-primary bg-white group-hover:scale-125 transition-transform"></div>
//                     </div>
//                     <div className="flex-1 pb-4 group-hover:text-primary transition-colors">{item.event}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="order-1 lg:order-2 relative">
//               <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative z-10 bg-white transform hover:scale-[1.02] transition-transform duration-500">
//                 <img src="/our_headquarters.jpg?height=600&width=800" alt="MHLP team" className="w-full h-auto" />

//                 {/* Overlaid caption */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
//                   <h3 className="text-white text-xl font-bold">Our Headquarters</h3>
//                   <p className="text-white/80">Where innovation happens every day</p>
//                 </div>
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
//               <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>

//               {/* Stats overlay */}
//               <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 transform rotate-3">
//                 <div className="text-primary font-bold text-xl">13+ Years</div>
//                 <div className="text-gray-600 text-sm">of Excellence</div>
//               </div>

//               <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 transform -rotate-3">
//                 <div className="text-accent font-bold text-xl">200+</div>
//                 <div className="text-gray-600 text-sm">Team Members</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Values Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
//               Our Values
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               What Drives Us
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our core values shape everything we do, from how we develop solutions to how we interact with our clients
//               and each other.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Award className="h-6 w-6 text-white" />,
//                 title: "Excellence",
//                 description: "We strive for excellence in everything we do, from code quality to client communication.",
//                 color: "bg-gradient-to-br from-blue-500 to-blue-600",
//               },
//               {
//                 icon: <Users className="h-6 w-6 text-white" />,
//                 title: "Collaboration",
//                 description: "We believe in the power of teamwork and collaboration to achieve the best results.",
//                 color: "bg-gradient-to-br from-green-500 to-emerald-600",
//               },
//               {
//                 icon: <Globe className="h-6 w-6 text-white" />,
//                 title: "Innovation",
//                 description: "We embrace new technologies and approaches to solve complex problems.",
//                 color: "bg-gradient-to-br from-purple-500 to-violet-600",
//               },
//               {
//                 icon: <Briefcase className="h-6 w-6 text-white" />,
//                 title: "Integrity",
//                 description: "We conduct our business with honesty, transparency, and ethical practices.",
//                 color: "bg-gradient-to-br from-amber-500 to-orange-600",
//               },
//               {
//                 icon: <Heart className="h-6 w-6 text-white" />,
//                 title: "Client-Centric",
//                 description: "We put our clients' needs first and build lasting relationships based on trust.",
//                 color: "bg-gradient-to-br from-pink-500 to-rose-600",
//               },
//               {
//                 icon: <CheckCircle className="h-6 w-6 text-white" />,
//                 title: "Accountability",
//                 description: "We take ownership of our work and deliver on our promises.",
//                 color: "bg-gradient-to-br from-teal-500 to-cyan-600",
//               },
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="group p-8 rounded-xl border border-gray-200 hover:border-primary/20 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
//               >
//                 {/* Background pattern */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>

//                 <div className="relative z-10">
//                   <div
//                     className={`w-16 h-16 rounded-lg ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//                   >
//                     {value.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600">{value.description}</p>
//                 </div>

//                 {/* Corner accent */}
//                 <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Team Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
//               Our Team
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Meet the Experts
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our talented team of professionals is the heart of our company. Get to know the people behind our success.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Alex Johnson",
//                 position: "CEO & Founder",
//                 image: "/careers1.jpeg?height=300&width=300",
//                 bio: "With over 15 years of experience in the tech industry, Alex leads our company with vision and passion.",
//                 social: {
//                   linkedin: "#",
//                   twitter: "#",
//                   github: "#",
//                 },
//               },
//               {
//                 name: "Samantha Lee",
//                 position: "CTO",
//                 image: "/about2.jpeg?height=300&width=300",
//                 bio: "Samantha oversees our technical strategy and ensures we stay at the forefront of technology.",
//                 social: {
//                   linkedin: "#",
//                   twitter: "#",
//                   github: "#",
//                 },
//               },
//               {
//                 name: "David Rodriguez",
//                 position: "Head of Design",
//                 image: "/about3.jpeg?height=300&width=300",
//                 bio: "David brings creativity and user-centered design principles to all our projects.",
//                 social: {
//                   linkedin: "#",
//                   twitter: "#",
//                   github: "#",
//                 },
//               },
//               {
//                 name: "Michelle Chen",
//                 position: "Director of Operations",
//                 image: "/about4.jpeg?height=300&width=300",
//                 bio: "Michelle ensures our projects run smoothly and our clients receive exceptional service.",
//                 social: {
//                   linkedin: "#",
//                   twitter: "#",
//                   github: "#",
//                 },
//               },
//             ].map((member, index) => (
//               <div key={index} className="group relative">
//                 <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg border border-gray-100 bg-white">
//                   <img
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                     <div className="p-6 w-full">
//                       <h4 className="text-white font-bold text-xl">{member.name}</h4>
//                       <p className="text-white/90 text-sm mb-3">{member.position}</p>

//                       {/* Social links */}
//                       <div className="flex space-x-3 mt-2">
//                         {Object.keys(member.social).map((platform) => (
//                           <a
//                             key={platform}
//                             href={member.social[platform]}
//                             className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
//                             aria-label={`${member.name}'s ${platform}`}
//                           >
//                             <span className="text-white text-xs">{platform[0].toUpperCase()}</span>
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
//                   {member.name}
//                 </h4>
//                 <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
//                 <p className="text-gray-600 text-sm">{member.bio}</p>
//               </div>
//             ))}
//           </div>

//           {/* <div className="text-center mt-16">
//             <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg shadow-lg">
//               View Full Team
//             </Button>
//           </div> */}
//         </div>
//       </section>

//       {/* Enhanced Stats Section */}
//       <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { value: "13+", label: "Years of Experience", icon: <Clock className="h-6 w-6 text-primary" /> },
//               { value: "500+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6 text-primary" /> },
//               { value: "200+", label: "Team Members", icon: <Users className="h-6 w-6 text-primary" /> },
//               { value: "50+", label: "Countries Served", icon: <Globe className="h-6 w-6 text-primary" /> },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 text-center group"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-600 mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
//           <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
//         </div>

//         <div className="container px-4 mx-auto text-center relative z-10">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
//             Join Our Team
//           </h2>
//           <p className="text-white/80 max-w-2xl mx-auto mb-8">
//             We're always looking for talented individuals to join our team. Check out our current openings and become
//             part of our success story.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href='/company/careers'>
//             <Button className="bg-white text-primary hover:bg-gray-100 group px-8 py-6 text-lg shadow-xl">
//               View Open Positions
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             </Link>
//             {/* <Button
//               variant="outline"
//               className="border-white/40 text-black hover:bg-white/15 px-8 py-6 text-lg group shadow-lg"
//             >
//               Learn About Our Culture
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button> */}
//           </div>

//           {/* Floating elements */}
//           <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
//           <div
//             className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-slow"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>
//       </section>
//     </main>
//   )
// }





// "use client"

// import { CheckCircle, Award, Users, Globe, Briefcase, Heart, ArrowRight, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
//               <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
//               About Us
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
//               Our Story & Mission
//             </h1>
            
//             <p className="text-lg text-gray-600 mb-8">
//               We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovation and excellence.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
//                 Our Journey
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                 From Startup to Industry Leader
//               </h2>
//               <p className="text-gray-600 mb-4">
//                 Founded in 2010, MHLP began as a small team of developers with a big vision: to make cutting-edge technology accessible to businesses of all sizes. What started as a boutique web development agency has grown into a comprehensive digital solutions provider with a presence across India.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Over the years, we've expanded our services to include mobile app development, custom software solutions, cloud computing, AI and machine learning, and more. Our growth has been driven by our commitment to innovation, quality, and client satisfaction.
//               </p>

//               {/* Timeline */}
//               <div className="mt-8 space-y-4">
//                 {[
//                   { year: "2010", event: "Founded in Bangalore" },
//                   { year: "2013", event: "Expanded to mobile app development" },
//                   { year: "2015", event: "Opened offices in Mumbai and Delhi" },
//                   { year: "2018", event: "Introduced AI & ML solutions" },
//                   { year: "2020", event: "Reached 100+ clients milestone" },
//                   { year: "2023", event: "Recognized as industry leader" },
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="w-16 text-blue-600 font-semibold">{item.year}</div>
//                     <div className="w-3 relative mx-3">
//                       <div className="absolute top-2 left-1 w-0.5 h-full bg-blue-200 last:hidden"></div>
//                       <div className="absolute top-1.5 left-0 w-3 h-3 rounded-full bg-blue-600"></div>
//                     </div>
//                     <div className="flex-1 pb-4 text-gray-700">{item.event}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
//                 <img src="/our_headquarters.jpg?height=600&width=800" alt="MHLP office" className="w-full h-auto" />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
//                   <h3 className="text-white text-xl font-bold">Our Headquarters</h3>
//                   <p className="text-white/90">Where innovation happens every day</p>
//                 </div>
//               </div>

//               <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
//                 <div className="text-blue-600 font-bold text-xl">13+ Years</div>
//                 <div className="text-gray-600 text-sm">of Excellence</div>
//               </div>

//               <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
//                 <div className="text-blue-600 font-bold text-xl">200+</div>
//                 <div className="text-gray-600 text-sm">Team Members</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
//               Our Values
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//               What Drives Us
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our core values shape everything we do, from how we develop solutions to how we interact with our clients and each other.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <Award className="h-6 w-6 text-white" />,
//                 title: "Excellence",
//                 description: "We strive for excellence in everything we do, from code quality to client communication.",
//                 color: "bg-blue-600",
//               },
//               {
//                 icon: <Users className="h-6 w-6 text-white" />,
//                 title: "Collaboration",
//                 description: "We believe in the power of teamwork and collaboration to achieve the best results.",
//                 color: "bg-green-600",
//               },
//               {
//                 icon: <Globe className="h-6 w-6 text-white" />,
//                 title: "Innovation",
//                 description: "We embrace new technologies and approaches to solve complex problems.",
//                 color: "bg-purple-600",
//               },
//               {
//                 icon: <Briefcase className="h-6 w-6 text-white" />,
//                 title: "Integrity",
//                 description: "We conduct our business with honesty, transparency, and ethical practices.",
//                 color: "bg-orange-600",
//               },
//               {
//                 icon: <Heart className="h-6 w-6 text-white" />,
//                 title: "Client-Centric",
//                 description: "We put our clients' needs first and build lasting relationships based on trust.",
//                 color: "bg-pink-600",
//               },
//               {
//                 icon: <CheckCircle className="h-6 w-6 text-white" />,
//                 title: "Accountability",
//                 description: "We take ownership of our work and deliver on our promises.",
//                 color: "bg-teal-600",
//               },
//             ].map((value, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
//                 <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20">
//         <div className="container px-4 mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
//               Our Team
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//               Meet the Experts
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our talented team of professionals is the heart of our company. Get to know the people behind our success.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Rajesh Sharma",
//                 position: "CEO & Founder",
//                 image: "/careers1.jpeg?height=300&width=300",
//                 bio: "With over 15 years of experience in the tech industry, Rajesh leads our company with vision and passion.",
//               },
//               {
//                 name: "Priya Desai",
//                 position: "CTO",
//                 image: "/about2.jpeg?height=300&width=300",
//                 bio: "Priya oversees our technical strategy and ensures we stay at the forefront of technology.",
//               },
//               {
//                 name: "Amit Patel",
//                 position: "Head of Design",
//                 image: "/about3.jpeg?height=300&width=300",
//                 bio: "Amit brings creativity and user-centered design principles to all our projects.",
//               },
//               {
//                 name: "Sneha Reddy",
//                 position: "Director of Operations",
//                 image: "/about4.jpeg?height=300&width=300",
//                 bio: "Sneha ensures our projects run smoothly and our clients receive exceptional service.",
//               },
//             ].map((member, index) => (
//               <div key={index} className="group">
//                 <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg border border-gray-200">
//                   <img
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
//                 <p className="text-blue-600 font-medium text-sm mb-2">{member.position}</p>
//                 <p className="text-gray-600 text-sm">{member.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container px-4 mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { value: "13+", label: "Years of Experience", icon: <Clock className="h-6 w-6 text-blue-600" /> },
//               { value: "500+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6 text-blue-600" /> },
//               { value: "200+", label: "Team Members", icon: <Users className="h-6 w-6 text-blue-600" /> },
//               { value: "50+", label: "Countries Served", icon: <Globe className="h-6 w-6 text-blue-600" /> },
//             ].map((stat, index) => (
//               <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
//                 <div className="text-gray-600 mt-1 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-blue-600">
//         <div className="container px-4 mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//             Join Our Team
//           </h2>
//           <p className="text-blue-100 max-w-2xl mx-auto mb-8">
//             We're always looking for talented individuals to join our team. Check out our current openings and become part of our success story.
//           </p>
//           <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
//             View Open Positions
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </section>
//     </main>
//   )
// }



"use client"

import { CheckCircle, Award, Users, Globe, Briefcase, Heart, ArrowRight, Clock, Sparkles, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0icmdiYSgwLDAsMCwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-200 text-blue-600 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>About MHLP</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Empowering Businesses with Smart Software Solutions
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              WBeyond software—crafting digital experiences that transform businesses worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-6 text-lg rounded-full shadow-md border border-slate-200">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>
      </section>

      {/* Story Section - Cards Layout */}
      <section className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Our Journey
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                From a small startup to an industry leader, powered by innovation and passion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all hover:scale-105">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Founded in 2020, MHLP began with a vision to democratize technology. We've grown from a boutique agency to a comprehensive digital solutions powerhouse, serving clients across 50+ countries with cutting-edge innovation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all hover:scale-105">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Impact</h3>
                <p className="text-slate-600 leading-relaxed">
                  With 500+ successful projects and a team of 200+ experts, we've transformed businesses through web development, mobile apps, AI/ML solutions, and cloud computing—always staying ahead of the curve.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
              
              <div className="space-y-12">
                {[
                  { year: "2020", event: "Founded in Indore", desc: "Started with a vision", side: "left" },
                  { year: "2020", event: "Mobile App Development", desc: "Expanded our expertise", side: "right" },
                  { year: "2021", event: "Multi-City Presence", desc: "Offices in Mumbai & Delhi", side: "left" },
                  { year: "2021", event: "AI & ML Solutions", desc: "Embracing future tech", side: "right" },
                  { year: "2022", event: "100+ Clients Milestone", desc: "Global reach achieved", side: "left" },
                  { year: "2023", event: "Industry Recognition", desc: "Leaders in innovation", side: "right" },
                  { year: "2024", event: "Cyber Security Solutions", desc: "Leaders in innovation", side: "left" },
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${item.side === 'right' ? 'text-left pl-12' : 'text-right pr-12'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all inline-block">
                        <div className="text-blue-600 font-bold text-xl mb-2">{item.year}</div>
                        <h4 className="text-slate-900 font-semibold text-lg mb-1">{item.event}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-slate-50 z-10 flex-shrink-0 shadow-md"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide every decision, every line of code, every client interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "Uncompromising quality in every pixel, every function, every delivery.",
                gradient: "from-blue-500 to-cyan-500",
                bg: "bg-blue-50",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description: "Together we achieve the impossible, building solutions that matter.",
                gradient: "from-green-500 to-emerald-500",
                bg: "bg-green-50",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Innovation",
                description: "Pushing boundaries, exploring new frontiers in technology.",
                gradient: "from-purple-500 to-pink-500",
                bg: "bg-purple-50",
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Integrity",
                description: "Transparent, ethical, and honest in all our business dealings.",
                gradient: "from-orange-500 to-red-500",
                bg: "bg-orange-50",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Client-Centric",
                description: "Your success is our success. Building lasting partnerships.",
                gradient: "from-pink-500 to-rose-500",
                bg: "bg-pink-50",
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Accountability",
                description: "We own our work, deliver on promises, exceed expectations.",
                gradient: "from-teal-500 to-cyan-500",
                bg: "bg-teal-50",
              },
            ].map((value, index) => (
              <div key={index} className="group">
                <div className={`${value.bg} p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover:scale-105`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 text-white shadow-md`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "5+", label: "Years of Experience", icon: <Clock className="h-8 w-8" />, gradient: "from-blue-500 to-cyan-500" },
              { value: "500+", label: "Projects Completed", icon: <CheckCircle className="h-8 w-8" />, gradient: "from-green-500 to-emerald-500" },
              { value: "200+", label: "Team Members", icon: <Users className="h-8 w-8" />, gradient: "from-purple-500 to-pink-500" },
              // { value: "50+", label: "Countries Served", icon: <Globe className="h-8 w-8" />, gradient: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our Mission
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Be part of something extraordinary. We're looking for passionate innovators to help shape the future of technology.
          </p>
          <Button className="bg-white hover:bg-slate-50 text-blue-600 px-10 py-6 text-lg rounded-full shadow-lg">
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  )
}