import type { Metadata } from "next"
import IndustryClientPage from "./IndustryClientPage"

interface IndustryPageProps {
  params: {
    slug: string
  }
}

const industries = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Digital solutions for healthcare providers, telemedicine, and patient management.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏥",
  },
  {
    title: "Finance",
    slug: "finance",
    description: "FinTech and banking solutions for secure, efficient financial operations.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "💰",
  },
  {
    title: "Retail & E-commerce",
    slug: "retail",
    description: "Digital transformation for retail businesses and online shopping platforms.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🛒",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description: "Industry 4.0 and smart manufacturing solutions for operational efficiency.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏭",
  },
  {
    title: "Education",
    slug: "education",
    description: "EdTech and learning management systems for modern educational institutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎓",
  },
  {
    title: "Government",
    slug: "government",
    description: "Public sector digital transformation and citizen service solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏛️",
  },
  {
    title: "Transportation & Logistics",
    slug: "transportation",
    description: "Smart logistics, fleet management, and supply chain optimization.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🚚",
  },
  {
    title: "Energy & Utilities",
    slug: "energy",
    description: "Smart grid, renewable energy, and utility management solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "⚡",
  },
  {
    title: "Media & Entertainment",
    slug: "media",
    description: "Digital content delivery, streaming platforms, and audience engagement.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎬",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description: "Property management, virtual tours, and smart building solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏢",
  },
  {
    title: "Hospitality & Tourism",
    slug: "hospitality",
    description: "Guest experience, booking systems, and operational efficiency solutions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏨",
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    description: "Precision farming, crop monitoring, and agricultural management systems.",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌾",
  },
]

// export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
//   // Find the industry by slug
//   const industry = industries.find((ind) => ind.slug === params.slug)

//   if (!industry) {
//     return {
//       title: "Industry Not Found",
//       description: "The requested industry page could not be found.",
//     }
//   }

//   return {
//     title: `${industry.title} Solutions | Our Industry Expertise`,
//     description: industry.description,
//   }
// }
export function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }))
}

export default function IndustryPage({ params }: IndustryPageProps) {
  return <IndustryClientPage indust={params.slug} />
}

