import type React from "react"
import { CheckCircle, Code, Zap, Shield, BarChart, Users } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

function Feature({ icon, title, description, color }: FeatureProps) {
  return (
    <div className="group p-4 md:p-6 rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  )
}

export function HomeFeatures() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Innovative Solutions for Modern Businesses
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <Feature
            icon={<Code className="h-5 w-5 md:h-6 md:w-6 text-white" />}
            title="Custom Development"
            description="Tailored software solutions designed specifically for your unique business challenges and goals."
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <Feature
            icon={<Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />}
            title="High Performance"
            description="Optimized applications that deliver exceptional speed, reliability, and user experience."
            color="bg-gradient-to-br from-amber-500 to-orange-600"
          />
          <Feature
            icon={<Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />}
            title="Enterprise Security"
            description="Advanced security measures to protect your data, applications, and infrastructure."
            color="bg-gradient-to-br from-green-500 to-emerald-600"
          />
          <Feature
            icon={<BarChart className="h-5 w-5 md:h-6 md:w-6 text-white" />}
            title="Data Analytics"
            description="Transform your raw data into actionable insights that drive better business decisions."
            color="bg-gradient-to-br from-purple-500 to-violet-600"
          />
          <Feature
            icon={<Users className="h-5 w-5 md:h-6 md:w-6 text-white" />}
            title="Dedicated Teams"
            description="Access to skilled professionals who work exclusively on your projects and priorities."
            color="bg-gradient-to-br from-pink-500 to-rose-600"
          />
          <Feature
            icon={<CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />}
            title="Quality Assurance"
            description="Rigorous testing and quality control to ensure your solutions meet the highest standards."
            color="bg-gradient-to-br from-teal-500 to-cyan-600"
          />
        </div>
      </div>
    </section>
  )
}

