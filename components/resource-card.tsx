// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// interface ResourceProps {
//   resource: {
//     title: string
//     icon: string
//     description: string
//     slug: string
//   }
//   index: number
// }

// export function ResourceCard({ resource, index }: ResourceProps) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Link href={`/${resource.slug}`} className="block h-full">
//         <div
//           className="h-full p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Background gradient */}
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//           {/* Animated border */}
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

//           <div className="flex flex-col items-center text-center mb-4 relative z-10">
//             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
//               <span className="text-3xl">{resource.icon}</span>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
//               {resource.title}
//             </h3>
//           </div>

//           <p className="text-gray-600 mb-4 text-center relative z-10 group-hover:text-gray-700 transition-colors duration-300">
//             {resource.description}
//           </p>

//           <div className="flex items-center justify-center text-primary group-hover:text-accent transition-colors duration-300 relative z-10">
//             <span className="font-medium">Explore</span>
//             <ArrowRight
//               className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
//             />
//           </div>

//           {/* Corner accent */}
//           <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         </div>
//       </Link>
//     </motion.div>
//   )
// }



"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ResourceProps {
  resource: {
    title: string
    icon: string
    description: string
    slug: string
  }
  index: number
}

export function ResourceCard({ resource, index }: ResourceProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/${resource.slug}`} className="block h-full">
        <div
          className="h-full p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/20 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Animated border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

          <div className="flex flex-col items-center text-center mb-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
              <span className="text-3xl">{resource.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {resource.title}
            </h3>
          </div>

          <p className="text-gray-600 mb-4 text-center relative z-10 group-hover:text-gray-700 transition-colors duration-300">
            {resource.description}
          </p>

          <div className="flex items-center justify-center text-primary group-hover:text-accent transition-colors duration-300 relative z-10">
            {/* <span className="font-medium">Check Eligibility</span>
            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            /> */}
          </div>

          {/* Corner accent */}
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </Link>
    </motion.div>
  )
}