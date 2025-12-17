// "use client"

// import type React from "react"

// import { useState } from "react"
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, HelpCircle, Users } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from "lucide-react"

// export default function ContactPage() {
//   const [formSubmitted, setFormSubmitted] = useState(false)
//   const [activeTab, setActiveTab] = useState("contact")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Simulate form submission
//     setTimeout(() => {
//       setFormSubmitted(true)
//     }, 1000)
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Enhanced Hero Section */}
//       <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
//           <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40"></div>

//           {/* Enhanced decorative elements */}
//           <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
//           <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
//           <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-slow"></div>
//         </div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md rounded-full mb-6 border border-white/30 animate-fade-in shadow-lg">
//               <span className="text-sm font-medium text-white flex items-center">
//                 <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
//                 Get In Touch
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent animate-slide-up relative">
//               Contact Us
//               <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-100 mb-8 animate-slide-up animation-delay-200">
//               Have questions or ready to start your project? Get in touch with our team and let's create something
//               amazing together.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Contact Section with Tabs */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           {/* Tabs */}
//           <div className="max-w-3xl mx-auto mb-12">
//             <div className="flex flex-wrap justify-center gap-4 p-2 bg-gray-100 rounded-xl">
//               {[
//                 { id: "contact", label: "Contact Us", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
//                 { id: "support", label: "Support", icon: <HelpCircle className="h-4 w-4 mr-2" /> },
//                 { id: "sales", label: "Sales Inquiry", icon: <Users className="h-4 w-4 mr-2" /> },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//                     activeTab === tab.id ? "bg-white shadow-md text-primary" : "text-gray-600 hover:bg-white/50"
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Contact Information */}
//             <div className="order-2 lg:order-1">
//               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 {activeTab === "contact" && "Get in Touch"}
//                 {activeTab === "support" && "Customer Support"}
//                 {activeTab === "sales" && "Sales Department"}
//               </h2>

//               <div className="space-y-8">
//                 <div className="flex items-start group">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 shadow-md">
//                     <MapPin className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
//                       Our Location
//                     </h3>
//                     <p className="text-gray-600">
//                       123 Tech Park, Innovation Street
//                       <br />
//                       Silicon Valley, CA 94043
//                       <br />
//                       United States
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start group">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 shadow-md">
//                     <Phone className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
//                       Phone Number
//                     </h3>
//                     <p className="text-gray-600">
//                       Main:{" "}
//                       <a href="tel:+15551234567" className="hover:text-primary transition-colors">
//                         +1 (555) 123-4567
//                       </a>
//                       <br />
//                       Support:{" "}
//                       <a href="tel:+15559876543" className="hover:text-primary transition-colors">
//                         +1 (555) 987-6543
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start group">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 shadow-md">
//                     <Mail className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
//                       Email Address
//                     </h3>
//                     <p className="text-gray-600">
//                       Info:{" "}
//                       <a href="mailto:info@cyberinstant.com" className="hover:text-primary transition-colors">
//                         info@cyberinstant.com
//                       </a>
//                       <br />
//                       Support:{" "}
//                       <a href="mailto:support@cyberinstant.com" className="hover:text-primary transition-colors">
//                         support@cyberinstant.com
//                       </a>
//                       <br />
//                       Sales:{" "}
//                       <a href="mailto:sales@cyberinstant.com" className="hover:text-primary transition-colors">
//                         sales@cyberinstant.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start group">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 shadow-md">
//                     <Clock className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
//                       Business Hours
//                     </h3>
//                     <p className="text-gray-600">
//                       Monday - Friday: 9:00 AM - 6:00 PM
//                       <br />
//                       Saturday: 10:00 AM - 2:00 PM
//                       <br />
//                       Sunday: Closed
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-12">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
//                 <div className="flex space-x-4">
//                   {[
//                     { name: "Facebook", href: "https://www.facebook.com/CyberInstant", icon: <Facebook size={20} /> },
//                     { name: "Twitter", href: "https://x.com/cyber_instant", icon: <Twitter size={20} /> },
//                     { name: "LinkedIn", href: "https://www.linkedin.com/company/cyber-instant/posts/?feedView=all", icon: <Linkedin size={20} /> },
//                     { name: "Instagram", href: "https://www.instagram.com/cyber_instant/", icon: <Instagram size={20} /> },
//                     // { name: "YouTube", href: "https://youtube.com", icon: <Youtube size={20} /> },
//                     // { name: "GitHub", href: "https://github.com", icon: <Github size={20} /> },
//                   ].map((social) => (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center hover:from-primary/20 hover:to-accent/20 transition-colors duration-300 hover:scale-110 transform transition-transform shadow-md"
//                       aria-label={social.name}
//                     >
//                       <span className="text-primary hover:text-accent transition-colors duration-300">
//                         {social.icon}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Global Presence 
//               <div className="mt-16">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
//                   <Globe className="h-5 w-5 mr-2 text-primary" />
//                   Global Presence
//                 </h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {["New York", "London", "Singapore", "Tokyo", "Sydney", "Berlin"].map((city, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
//                       <span className="text-gray-700">{city}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>*/}
//             </div>

//             {/* Enhanced Contact Form */}
//             <div className="order-1 lg:order-2">
//               <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
//                 {/* Background pattern */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>

//                 {/* Corner accents */}
//                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
//                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

//                 <div className="relative z-10">
//                   <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                     {activeTab === "contact" && "Send Us a Message"}
//                     {activeTab === "support" && "Get Support"}
//                     {activeTab === "sales" && "Request a Quote"}
//                   </h2>

//                   {formSubmitted ? (
//                     <div className="text-center py-16">
//                       <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
//                         <CheckCircle className="h-10 w-10 text-green-600" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
//                       <p className="text-gray-600 mb-8 max-w-md mx-auto">
//                         Your message has been sent successfully. We'll get back to you as soon as possible.
//                       </p>
//                       <Button
//                         onClick={() => setFormSubmitted(false)}
//                         className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg shadow-lg"
//                       >
//                         Send Another Message
//                       </Button>
//                     </div>
//                   ) : (
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <label htmlFor="name" className="text-sm font-medium text-gray-700">
//                             Full Name <span className="text-red-500">*</span>
//                           </label>
//                           <Input
//                             id="name"
//                             placeholder="John Doe"
//                             required
//                             className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
//                           />
//                         </div>

//                         <div className="space-y-2">
//                           <label htmlFor="email" className="text-sm font-medium text-gray-700">
//                             Email Address <span className="text-red-500">*</span>
//                           </label>
//                           <Input
//                             id="email"
//                             type="email"
//                             placeholder="john@example.com"
//                             required
//                             className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <label htmlFor="phone" className="text-sm font-medium text-gray-700">
//                             Phone Number
//                           </label>
//                           <Input
//                             id="phone"
//                             placeholder="+1 (555) 123-4567"
//                             className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
//                           />
//                         </div>

//                         <div className="space-y-2">
//                           <label htmlFor="subject" className="text-sm font-medium text-gray-700">
//                             Subject <span className="text-red-500">*</span>
//                           </label>
//                           <Select required>
//                             <SelectTrigger
//                               id="subject"
//                               className="w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
//                             >
//                               <SelectValue placeholder="Select a subject" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="general">General Inquiry</SelectItem>
//                               <SelectItem value="support">Technical Support</SelectItem>
//                               <SelectItem value="sales">Sales</SelectItem>
//                               <SelectItem value="partnership">Partnership</SelectItem>
//                               <SelectItem value="careers">Careers</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <label htmlFor="message" className="text-sm font-medium text-gray-700">
//                           Message <span className="text-red-500">*</span>
//                         </label>
//                         <Textarea
//                           id="message"
//                           placeholder="How can we help you?"
//                           required
//                           className="w-full min-h-[180px] border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
//                         />
//                       </div>

//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           id="privacy"
//                           className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
//                           required
//                         />
//                         <label htmlFor="privacy" className="ml-3 block text-sm text-gray-600">
//                           I agree to the{" "}
//                           <a href="/privacy-policy" className="text-primary hover:text-accent underline">
//                             Privacy Policy
//                           </a>
//                         </label>
//                       </div>

//                       <Button
//                         type="submit"
//                         className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group px-8 py-6 text-lg shadow-lg"
//                       >
//                         {activeTab === "contact" && "Send Message"}
//                         {activeTab === "support" && "Get Support"}
//                         {activeTab === "sales" && "Request Quote"}
//                         <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </form>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Map Section */}
//       <section className="py-16 pb-24 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Visit Our Office
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We'd love to meet you in person. Visit our headquarters or one of our global offices.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-[500px] relative">
//             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
//               <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 max-w-md">
//                 <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
//                 <h3 className="text-xl font-bold mb-2">MHLP Headquarters</h3>
//                 <p className="text-gray-600 mb-4">
//                   123 Tech Park, Innovation Street
//                   <br />
//                   Silicon Valley, CA 94043
//                 </p>
//                 <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
//                   Get Directions
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Office locations */}
//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 city: "New York",
//                 address: "350 Fifth Avenue, 21st Floor, New York, NY 10118",
//                 phone: "+1 (212) 555-6789",
//                 email: "newyork@cyberinstant.com",
//               },
//               {
//                 city: "London",
//                 address: "30 St Mary Axe, London EC3A 8BF, United Kingdom",
//                 phone: "+44 20 7123 4567",
//                 email: "london@cyberinstant.com",
//               },
//               {
//                 city: "Singapore",
//                 address: "1 Raffles Place, #20-61 Tower 2, Singapore 048616",
//                 phone: "+65 6123 4567",
//                 email: "singapore@cyberinstant.com",
//               },
//             ].map((office, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group"
//               >
//                 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{office.city}</h3>
//                 <div className="space-y-3 text-gray-600">
//                   <div className="flex items-start">
//                     <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
//                     <span>{office.address}</span>
//                   </div>
//                   <div className="flex items-start">
//                     <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
//                     <span>{office.phone}</span>
//                   </div>
//                   <div className="flex items-start">
//                     <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
//                     <span>{office.email}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced FAQ Section */}
//       <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

//         <div className="container px-4 mx-auto relative z-10">
//           <div className="max-w-3xl mx-auto">
//             <div className="text-center mb-16">
//               <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
//                 FAQ
//               </span>
//               <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Frequently Asked Questions
//               </h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Find answers to common questions about our services, process, and company.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {[
//                 {
//                   question: "What services does MHLP offer?",
//                   answer:
//                     "MHLP offers a comprehensive range of digital services including web and mobile app development, custom software development, cloud solutions, AI and machine learning, UI/UX design, and more. Visit our Services page for a complete list.",
//                 },
//                 {
//                   question: "How long does it take to complete a project?",
//                   answer:
//                     "Project timelines vary depending on the scope, complexity, and requirements. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. We'll provide a detailed timeline during the project planning phase.",
//                 },
//                 {
//                   question: "Do you offer ongoing support and maintenance?",
//                   answer:
//                     "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch. Our team can provide regular updates, security patches, performance optimization, and feature enhancements.",
//                 },
//                 {
//                   question: "How do you handle project pricing?",
//                   answer:
//                     "We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements. The best approach depends on your project's nature and requirements. We'll discuss options during our initial consultation to find the most suitable model for your needs.",
//                 },
//                 {
//                   question: "Can you work with our existing team?",
//                   answer:
//                     "We're experienced in collaborating with in-house teams and can provide the specific expertise you need to complement your existing resources. We can integrate with your workflows and tools to ensure seamless collaboration.",
//                 },
//               ].map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors flex items-start">
//                     <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
//                       {index + 1}
//                     </span>
//                     {faq.question}
//                   </h3>
//                   <p className="text-gray-600 pl-11">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 text-center">
//               <p className="text-gray-600 mb-6">
//                 Don't see your question here? Contact us directly and we'll be happy to help.
//               </p>
//               {/* <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg shadow-lg group">
//                 Ask a Question
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button> */}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
//           <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>
//         </div>

//         <div className="container px-4 mx-auto text-center relative z-10">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-white/80 max-w-2xl mx-auto mb-8">
//             Let's discuss how we can help you achieve your business goals with our cutting-edge technology solutions.
//           </p>
//           <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
//           <div
//             className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>
//       </section>
//     </main>
//   )
// }










"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, HelpCircle, Users, Sparkles, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("contact")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Modern Gradient */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a1f3a] via-[#2d3561] to-[#1a1f3a]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#3d5af1] rounded-full blur-[120px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[150px] opacity-10"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-sm font-medium text-white">Let's Connect</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-white via-[#00d4ff] to-[#3d5af1] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Ready to transform your business? Let's discuss how we can help you achieve your goals with innovative technology solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
              {[
                { number: "24/7", label: "Support Available" },
                { number: "<2h", label: "Response Time" },
                { number: "500+", label: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
            <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200">
              {[
                { id: "contact", label: "General Inquiry", icon: <MessageSquare className="h-5 w-5" /> },
                { id: "support", label: "Get Support", icon: <HelpCircle className="h-5 w-5" /> },
                { id: "sales", label: "Sales Team", icon: <Users className="h-5 w-5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] text-white shadow-lg scale-105"
                      : "text-gray-600 hover:bg-white hover:shadow-md"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3d5af1] rounded-full blur-[150px] opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[150px] opacity-5"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#3d5af1]/10 to-transparent rounded-tr-full"></div>

                <div className="relative z-10">
                  {/* Form Header */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#3d5af1]/10 to-[#00d4ff]/10 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-[#3d5af1]" />
                      <span className="text-sm font-medium text-[#3d5af1]">Quick Response</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">
                      <span className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">
                        {activeTab === "contact" && "Send Us a Message"}
                        {activeTab === "support" && "Get Support"}
                        {activeTab === "sales" && "Request a Quote"}
                      </span>
                    </h2>
                    <p className="text-gray-600">Fill out the form and we'll get back to you within 24 hours.</p>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl">
                        <CheckCircle className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                      </p>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] hover:from-[#3d5af1]/90 hover:to-[#00d4ff]/90 text-white px-8 py-6 text-lg shadow-xl"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            className="h-12 border-2 border-gray-200 focus:border-[#3d5af1] rounded-xl transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="h-12 border-2 border-gray-200 focus:border-[#3d5af1] rounded-xl transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            className="h-12 border-2 border-gray-200 focus:border-[#3d5af1] rounded-xl transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <Select required>
                            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-[#3d5af1] rounded-xl transition-all">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="careers">Careers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or inquiry..."
                          required
                          className="min-h-[150px] border-2 border-gray-200 focus:border-[#3d5af1] rounded-xl transition-all"
                        />
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="privacy"
                          className="h-5 w-5 rounded border-gray-300 text-[#3d5af1] focus:ring-[#3d5af1] mt-0.5"
                          required
                        />
                        <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                          I agree to the{" "}
                          <a href="/privacy-policy" className="text-[#3d5af1] hover:text-[#00d4ff] underline font-medium">
                            Privacy Policy
                          </a>{" "}
                          and consent to being contacted.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] hover:from-[#3d5af1]/90 hover:to-[#00d4ff]/90 text-white h-14 text-lg font-semibold rounded-xl shadow-xl group"
                      >
                        {activeTab === "contact" && "Send Message"}
                        {activeTab === "support" && "Get Support"}
                        {activeTab === "sales" && "Request Quote"}
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">
                    {activeTab === "contact" && "Contact Information"}
                    {activeTab === "support" && "Support Channels"}
                    {activeTab === "sales" && "Sales Department"}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help! Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Visit Us",
                    content: (
                      <>
                        123 Tech Park, Innovation Street
                        <br />
                        Silicon Valley, CA 94043
                        <br />
                        United States
                      </>
                    ),
                    gradient: "from-[#3d5af1] to-[#5c7cfa]",
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Call Us",
                    content: (
                      <>
                        Main: <a href="tel:+15551234567" className="hover:text-[#3d5af1]">+1 (555) 123-4567</a>
                        <br />
                        Support: <a href="tel:+15559876543" className="hover:text-[#3d5af1]">+1 (555) 987-6543</a>
                      </>
                    ),
                    gradient: "from-[#00d4ff] to-[#00b4d8]",
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email Us",
                    content: (
                      <>
                        Info: <a href="mailto:info@cyberinstant.com" className="hover:text-[#3d5af1]">info@cyberinstant.com</a>
                        <br />
                        Support: <a href="mailto:support@cyberinstant.com" className="hover:text-[#3d5af1]">support@cyberinstant.com</a>
                        <br />
                        Sales: <a href="mailto:sales@cyberinstant.com" className="hover:text-[#3d5af1]">sales@cyberinstant.com</a>
                      </>
                    ),
                    gradient: "from-[#3d5af1] to-[#00d4ff]",
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Business Hours",
                    content: (
                      <>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </>
                    ),
                    gradient: "from-[#00b894] to-[#00d4a8]",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#3d5af1]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3d5af1] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#3d5af1]/5 to-[#00d4ff]/5 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: "Facebook", href: "https://www.facebook.com/CyberInstant", icon: <Facebook className="h-5 w-5" /> },
                    { name: "Twitter", href: "https://x.com/cyber_instant", icon: <Twitter className="h-5 w-5" /> },
                    { name: "LinkedIn", href: "https://www.linkedin.com/company/cyber-instant/posts/?feedView=all", icon: <Linkedin className="h-5 w-5" /> },
                    { name: "Instagram", href: "https://www.instagram.com/cyber_instant/", icon: <Instagram className="h-5 w-5" /> },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white border-2 border-gray-200 hover:border-[#3d5af1] flex items-center justify-center text-gray-600 hover:text-[#3d5af1] hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(61,90,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3d5af1]/10 to-[#00d4ff]/10 rounded-full mb-4">
                <HelpCircle className="w-4 h-4 text-[#3d5af1]" />
                <span className="text-sm font-semibold text-[#3d5af1]">FAQ</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our services and process.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What services does MHLP offer?",
                  answer: "We offer comprehensive digital services including web and mobile app development, custom software solutions, cloud infrastructure, AI/ML integration, UI/UX design, and digital transformation consulting.",
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on scope and complexity. Simple websites take 4-6 weeks, while complex enterprise applications may take several months. We provide detailed timelines during initial consultation.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes! We offer flexible support packages including maintenance, updates, security patches, performance optimization, and feature enhancements to ensure your solution stays current and efficient.",
                },
                {
                  question: "What are your pricing models?",
                  answer: "We offer flexible pricing including fixed-price projects, time & materials, and retainer arrangements. The best approach depends on your specific needs, which we'll discuss during consultation.",
                },
                {
                  question: "Can you integrate with existing systems?",
                  answer: "Absolutely! We specialize in seamless integration with existing infrastructure, workflows, and tools. Our team ensures smooth collaboration with your in-house resources.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#3d5af1]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start group-hover:text-[#3d5af1] transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3d5af1]/10 to-[#00d4ff]/10 flex items-center justify-center mr-3 text-[#3d5af1] font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-11 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f3a] via-[#2d3561] to-[#1a1f3a] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3d5af1] rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Button className="bg-gradient-to-r from-[#00d4ff] to-[#3d5af1] hover:from-[#00d4ff]/90 hover:to-[#3d5af1]/90 text-white px-10 py-7 text-lg font-semibold rounded-xl shadow-2xl group">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </main>
  )
}