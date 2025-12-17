import TechnologyPageClient from "./TechnologyPageClient"
import { technologies } from "./technologies"

interface TechnologyPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return technologies.map((tech) => ({
    slug: tech.slug,
  }))
}

export default function TechnologyPage({ params }: TechnologyPageProps) {
  return <TechnologyPageClient techno={params.slug} />
}

