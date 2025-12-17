// import Link from "next/link"
// import { ArrowRight, Calendar, User, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const blogPosts = [
//   {
//     id: 1,
//     title: "The Future of AI in Business: Trends to Watch",
//     slug: "future-of-ai-in-business",
//     excerpt:
//       "Explore the emerging trends in artificial intelligence and how they're reshaping business operations and strategy.",
//     image: "/blog_future_ai_business.jpg?height=400&width=600",
//     date: "May 15, 2023",
//     author: "Alex Johnson",
//     readTime: "8 min read",
//     category: "Artificial Intelligence",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Building Scalable Cloud Infrastructure: Best Practices",
//     slug: "building-scalable-cloud-infrastructure",
//     excerpt:
//       "Learn the best practices for designing and implementing cloud infrastructure that can scale with your business needs.",
//     image: "/blog_building_scalable_cloud.jpg?height=400&width=600",
//     date: "April 28, 2023",
//     author: "Samantha Lee",
//     readTime: "10 min read",
//     category: "Cloud Computing",
//     featured: true,
//   },
//   {
//     id: 3,
//     title: "Mobile App Development: Native vs. Cross-Platform",
//     slug: "mobile-app-development-native-vs-cross-platform",
//     excerpt: "A comprehensive comparison of native and cross-platform approaches to mobile app development.",
//     image: "/webinars6.jpeg?height=400&width=600",
//     date: "April 15, 2023",
//     author: "David Rodriguez",
//     readTime: "7 min read",
//     category: "Mobile Development",
//     featured: false,
//   },
//   {
//     id: 4,
//     title: "Cybersecurity in the Age of Remote Work",
//     slug: "cybersecurity-in-the-age-of-remote-work",
//     excerpt: "Addressing the unique cybersecurity challenges that arise in remote and hybrid work environments.",
//     image: "/webinars1.jpeg?height=400&width=600",
//     date: "March 30, 2023",
//     author: "Michelle Chen",
//     readTime: "9 min read",
//     category: "Cybersecurity",
//     featured: false,
//   },
//   {
//     id: 5,
//     title: "The Role of DevOps in Digital Transformation",
//     slug: "role-of-devops-in-digital-transformation",
//     excerpt: "How DevOps practices are accelerating digital transformation initiatives across industries.",
//     image: "/webinars2.jpeg?height=400&width=600",
//     date: "March 18, 2023",
//     author: "James Wilson",
//     readTime: "6 min read",
//     category: "DevOps",
//     featured: false,
//   },
//   {
//     id: 6,
//     title: "Blockchain Beyond Cryptocurrency: Enterprise Applications",
//     slug: "blockchain-beyond-cryptocurrency",
//     excerpt: "Exploring the practical applications of blockchain technology in enterprise environments.",
//     image: "/webinars3.jpeg?height=400&width=600",
//     date: "March 5, 2023",
//     author: "Sarah Johnson",
//     readTime: "8 min read",
//     category: "Blockchain",
//     featured: false,
//   },
//   {
//     id: 7,
//     title: "User Experience Design: Principles for Digital Products",
//     slug: "user-experience-design-principles",
//     excerpt: "Key principles and best practices for designing exceptional user experiences in digital products.",
//     image: "/webinars4.jpeg?height=400&width=600",
//     date: "February 20, 2023",
//     author: "Emily Wong",
//     readTime: "7 min read",
//     category: "UX/UI Design",
//     featured: false,
//   },
//   {
//     id: 8,
//     title: "The Impact of 5G on IoT Development",
//     slug: "impact-of-5g-on-iot-development",
//     excerpt: "How 5G technology is revolutionizing the Internet of Things and enabling new use cases.",
//     image: "/webinars4.jpeg?height=400&width=600",
//     date: "February 8, 2023",
//     author: "Michael Chen",
//     readTime: "9 min read",
//     category: "IoT",
//     featured: false,
//   },
// ]

// export default function BlogPage() {
//   const featuredPosts = blogPosts.filter((post) => post.featured)
//   const regularPosts = blogPosts.filter((post) => !post.featured)

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl py-3 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
//               Our Blog
//             </h1>
//             <p className="text-lg text-gray-300">
//               Insights, tutorials, and industry news to keep you informed about the latest in technology and digital
//               innovation.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       <section className="py-20">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {featuredPosts.map((post) => (
//               <Link
//                 key={post.id}
//                 href={`/blog/${post.slug}`}
//                 className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                     <div className="p-6">
//                       <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium mb-3">
//                         {post.category}
//                       </span>
//                       <h3 className="text-xl font-bold text-white">{post.title}</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-500 mb-3">
//                     <div className="flex items-center mr-4">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {post.date}
//                     </div>
//                     <div className="flex items-center mr-4">
//                       <User className="h-4 w-4 mr-1" />
//                       {post.author}
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-1" />
//                       {post.readTime}
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                   <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
//                     <span className="font-medium">Read more</span>
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Regular Posts */}
//       <section className="py-10 pb-20">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {regularPosts.map((post) => (
//               <Link
//                 key={post.id}
//                 href={`/blog/${post.slug}`}
//                 className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-medium">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-500 mb-3">
//                     <div className="flex items-center mr-4">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {post.date}
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-1" />
//                       {post.readTime}
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600">{post.author}</span>
//                     <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
//                       <span className="font-medium text-sm">Read more</span>
//                       <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group">
//               Load More Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Subscribe to Our Newsletter
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Stay up-to-date with the latest insights, tutorials, and industry news delivered straight to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               />
//               <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }





import Link from "next/link"
import { ArrowRight, Calendar, User, Clock, TrendingUp, Sparkles, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch",
    slug: "future-of-ai-in-business",
    excerpt:
      "Explore the emerging trends in artificial intelligence and how they're reshaping business operations and strategy.",
    image: "/blog_future_ai_business.jpg?height=400&width=600",
    date: "May 15, 2023",
    author: "Alex Johnson",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Cloud Infrastructure: Best Practices",
    slug: "building-scalable-cloud-infrastructure",
    excerpt:
      "Learn the best practices for designing and implementing cloud infrastructure that can scale with your business needs.",
    image: "/blog_building_scalable_cloud.jpg?height=400&width=600",
    date: "April 28, 2023",
    author: "Samantha Lee",
    readTime: "10 min read",
    category: "Cloud Computing",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile App Development: Native vs. Cross-Platform",
    slug: "mobile-app-development-native-vs-cross-platform",
    excerpt: "A comprehensive comparison of native and cross-platform approaches to mobile app development.",
    image: "/webinars6.jpeg?height=400&width=600",
    date: "April 15, 2023",
    author: "David Rodriguez",
    readTime: "7 min read",
    category: "Mobile Development",
    featured: true,
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of Remote Work",
    slug: "cybersecurity-in-the-age-of-remote-work",
    excerpt: "Addressing the unique cybersecurity challenges that arise in remote and hybrid work environments.",
    image: "/webinars1.jpeg?height=400&width=600",
    date: "March 30, 2023",
    author: "Michelle Chen",
    readTime: "9 min read",
    category: "Cybersecurity",
    featured: false,
  },
  {
    id: 5,
    title: "The Role of DevOps in Digital Transformation",
    slug: "role-of-devops-in-digital-transformation",
    excerpt: "How DevOps practices are accelerating digital transformation initiatives across industries.",
    image: "/webinars2.jpeg?height=400&width=600",
    date: "March 18, 2023",
    author: "James Wilson",
    readTime: "6 min read",
    category: "DevOps",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain Beyond Cryptocurrency: Enterprise Applications",
    slug: "blockchain-beyond-cryptocurrency",
    excerpt: "Exploring the practical applications of blockchain technology in enterprise environments.",
    image: "/webinars3.jpeg?height=400&width=600",
    date: "March 5, 2023",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Blockchain",
    featured: false,
  },
  {
    id: 7,
    title: "User Experience Design: Principles for Digital Products",
    slug: "user-experience-design-principles",
    excerpt: "Key principles and best practices for designing exceptional user experiences in digital products.",
    image: "/webinars4.jpeg?height=400&width=600",
    date: "February 20, 2023",
    author: "Emily Wong",
    readTime: "7 min read",
    category: "UX/UI Design",
    featured: false,
  },
  {
    id: 8,
    title: "The Impact of 5G on IoT Development",
    slug: "impact-of-5g-on-iot-development",
    excerpt: "How 5G technology is revolutionizing the Internet of Things and enabling new use cases.",
    image: "/webinars4.jpeg?height=400&width=600",
    date: "February 8, 2023",
    author: "Michael Chen",
    readTime: "9 min read",
    category: "IoT",
    featured: false,
  },
]

const categories = [
  "All Posts",
  "Artificial Intelligence",
  "Cloud Computing",
  "Mobile Development",
  "Cybersecurity",
  "DevOps",
  "Blockchain",
  "UX/UI Design",
  "IoT",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1a1f3a] via-[#2d3561] to-[#1a1f3a]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3d5af1] rounded-full blur-[120px] opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b894] rounded-full blur-[150px] opacity-5"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
              <BookOpen className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-sm font-medium text-white">Insights & Resources</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-white via-[#00d4ff] to-[#3d5af1] bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Discover the latest insights, tutorials, and industry trends to help you stay ahead in the digital world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
              {[
                { number: "200+", label: "Articles" },
                { number: "50K+", label: "Readers" },
                { number: "Weekly", label: "Updates" },
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

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] text-white shadow-lg"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#3d5af1]/30 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3d5af1] rounded-full blur-[150px] opacity-5"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#3d5af1]/10 to-[#00d4ff]/10 rounded-full mb-3">
                <TrendingUp className="w-4 h-4 text-[#3d5af1]" />
                <span className="text-sm font-semibold text-[#3d5af1]">Featured</span>
              </div>
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">
                  Featured Articles
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#3d5af1]/30 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] text-white text-sm font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#00d4ff] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-white/80 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3d5af1]/20 to-[#00d4ff]/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-[#3d5af1]" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{post.author}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center text-[#3d5af1] group-hover:text-[#00d4ff] transition-colors font-semibold text-sm">
                    <span>Read article</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[150px] opacity-5"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#3d5af1]/10 to-[#00d4ff]/10 rounded-full mb-3">
                <Sparkles className="w-4 h-4 text-[#3d5af1]" />
                <span className="text-sm font-semibold text-[#3d5af1]">Latest</span>
              </div>
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] bg-clip-text text-transparent">
                  Recent Articles
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#3d5af1]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-[#3d5af1] text-xs font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3d5af1] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600 font-medium">{post.author}</span>
                    <div className="flex items-center text-[#3d5af1] group-hover:text-[#00d4ff] transition-colors">
                      <span className="font-semibold text-sm">Read</span>
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-gradient-to-r from-[#3d5af1] to-[#00d4ff] hover:from-[#3d5af1]/90 hover:to-[#00d4ff]/90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-xl group">
              Load More Articles 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1a1f3a] via-[#2d3561] to-[#1a1f3a]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff] rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3d5af1] rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <Mail className="w-4 h-4 text-[#00d4ff]" />
                <span className="text-sm font-medium text-white">Stay Updated</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
                  Subscribe to Our Newsletter
                </span>
              </h2>
              
              <p className="text-xl text-gray-300">
                Get the latest articles, insights, and exclusive content delivered straight to your inbox.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-14 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500 rounded-xl text-base px-6"
                />
                <Button className="bg-gradient-to-r from-[#00d4ff] to-[#3d5af1] hover:from-[#00d4ff]/90 hover:to-[#3d5af1]/90 text-white h-14 px-8 text-base font-semibold rounded-xl shadow-lg group whitespace-nowrap">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <p className="text-white/70 text-sm mt-4 text-center">
                Join 50,000+ professionals who trust us for industry insights. Unsubscribe anytime.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: "Weekly", label: "Newsletters" },
                { number: "Zero", label: "Spam" },
                { number: "50K+", label: "Subscribers" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#00d4ff] mb-1">{item.number}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}