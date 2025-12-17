import { services } from "@/lib/services"
import ServicePageClient from "./ServicePageClient"

interface ServicePageProps {
  params: {
    service: string
  }
}

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  return <ServicePageClient servicee={params.service} />
}

