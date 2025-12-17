import {
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Zap,
  Clock,
  Globe,
  Shield,
  Star,
  Award,
  Cpu,
  Database,
  Layers,
  Cloud,
  Monitor,
  Smartphone,
  Lock,
  BarChart,
  GitBranch,
  Figma,
  FileCode,
  Hexagon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function HireDedicatedTeamsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - Enhanced with more visual elements */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40"></div>

          {/* Enhanced decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-slow"></div>

          {/* Animated code-like pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-xs text-white/30 font-mono">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="animate-typing" style={{ animationDelay: `${i * 0.5}s` }}>
                  {"{"}developer: "full-stack", experience: {i + 3}, skills: ["react", "node", "python"]{"}"}
                </div>
              ))}
            </div>
          </div>

          {/* Floating code snippets */}
          <div className="absolute top-1/2 right-1/4 text-xs text-white/20 font-mono rotate-6 animate-float-slow">
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-xl">
              {'const Team = await hire.dedicated({ skills: ["AI", "Cloud", "Mobile"] });'}
            </div>
          </div>

          <div className="absolute bottom-1/3 left-1/4 text-xs text-white/20 font-mono -rotate-3 animate-float">
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-xl">
              {'import { Expert } from "cyber-instant";'}
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md rounded-full mb-6 border border-white/30 animate-fade-in shadow-lg">
              <span className="text-sm font-medium text-white flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                Premium Talent On Demand
              </span>
            </div>

            <h2 className="text-4xl py-3 md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent animate-slide-up relative">
              Hire Dedicated Development Teams
              <div className="absolute -inset-1 bg-white/10 blur-sm rounded-lg -z-10"></div>
            </h2>

            <p className="text-lg md:text-xl text-gray-100 mb-8 animate-slide-up animation-delay-200">
              Access world-class talent working exclusively on your projects, helping you scale quickly and deliver
              exceptional results with cutting-edge technology expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
             <Link href='/contact'>
              <Button className="bg-white text-primary hover:bg-gray-100 group shadow-xl px-8 py-6 text-lg relative overflow-hidden">
                <span className="relative z-10">Schedule a Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
              </Link>
            </div>

            {/* Enhanced stats section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in animation-delay-600">
              {[
                { value: "750+", label: "Skilled Developers", icon: <Code className="h-5 w-5" /> },
                { value: "99%", label: "Client Satisfaction", icon: <Star className="h-5 w-5" /> },
                { value: "100+", label: "Technologies", icon: <Cpu className="h-5 w-5" /> },
                { value: "24/7", label: "Support Available", icon: <Globe className="h-5 w-5" /> },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/15 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors group"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Tech Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technologies Our Teams Master
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated teams are proficient in a wide range of cutting-edge technologies to meet your specific
              project requirements and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "bg-blue-500" },
              { name: "Node.js", icon: "🟢", color: "bg-green-500" },
              { name: "Python", icon: "🐍", color: "bg-yellow-500" },
              { name: "Angular", icon: "🅰️", color: "bg-red-500" },
              { name: "Vue.js", icon: "🟩", color: "bg-emerald-500" },
              { name: "PHP", icon: "🐘", color: "bg-indigo-500" },
              { name: "Java", icon: "☕", color: "bg-orange-500" },
              { name: ".NET", icon: "🔷", color: "bg-blue-600" },
              { name: "Ruby", icon: "💎", color: "bg-red-600" },
              { name: "Go", icon: "🔵", color: "bg-cyan-500" },
              { name: "Swift", icon: "🐦", color: "bg-orange-600" },
              { name: "Kotlin", icon: "🟣", color: "bg-purple-500" },
              { name: "TypeScript", icon: "📘", color: "bg-blue-400" },
              { name: "Rust", icon: "⚙️", color: "bg-orange-700" },
              { name: "C++", icon: "🔧", color: "bg-blue-700" },
              { name: "Scala", icon: "🔴", color: "bg-red-700" },
              { name: "Elixir", icon: "💧", color: "bg-purple-600" },
              { name: "Dart", icon: "🎯", color: "bg-teal-500" },
              { name: "Solidity", icon: "💠", color: "bg-gray-700" },
              { name: "Clojure", icon: "🔄", color: "bg-green-600" },
              { name: "Haskell", icon: "λ", color: "bg-purple-800" },
              { name: "R", icon: "📊", color: "bg-blue-800" },
              { name: "Julia", icon: "🔮", color: "bg-pink-600" },
              { name: "COBOL", icon: "🏛️", color: "bg-gray-600" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center hover:border-primary/20"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-full ${tech.color} flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform`}
                >
                  {tech.icon}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">{tech.name}</h3>
              </div>
            ))}
          </div>

          {/* Technology categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Technology Domains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Web Development",
                  icon: <Monitor className="h-6 w-6 text-white" />,
                  technologies: ["React", "Angular", "Vue.js", "Next.js", "Svelte"],
                  color: "bg-gradient-to-br from-blue-500 to-blue-600",
                },
                {
                  title: "Mobile Development",
                  icon: <Smartphone className="h-6 w-6 text-white" />,
                  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
                  color: "bg-gradient-to-br from-green-500 to-emerald-600",
                },
                {
                  title: "Cloud & DevOps",
                  icon: <Cloud className="h-6 w-6 text-white" />,
                  technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
                  color: "bg-gradient-to-br from-purple-500 to-violet-600",
                },
                {
                  title: "AI & Machine Learning",
                  icon: <Cpu className="h-6 w-6 text-white" />,
                  technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI", "Hugging Face"],
                  color: "bg-gradient-to-br from-amber-500 to-orange-600",
                },
                {
                  title: "Blockchain",
                  icon: <Hexagon className="h-6 w-6 text-white" />,
                  technologies: ["Ethereum", "Solidity", "Web3.js", "Hyperledger", "Solana"],
                  color: "bg-gradient-to-br from-teal-500 to-cyan-600",
                },
                {
                  title: "Database",
                  icon: <Database className="h-6 w-6 text-white" />,
                  technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
                  color: "bg-gradient-to-br from-pink-500 to-rose-600",
                },
                {
                  title: "UI/UX Design",
                  icon: <Figma className="h-6 w-6 text-white" />,
                  technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
                  color: "bg-gradient-to-br from-indigo-500 to-blue-600",
                },
                {
                  title: "Game Development",
                  icon: <Layers className="h-6 w-6 text-white" />,
                  technologies: ["Unity", "Unreal Engine", "Godot", "PlayCanvas", "Phaser"],
                  color: "bg-gradient-to-br from-red-500 to-rose-600",
                },
              ].map((domain, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group hover:border-primary/20"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${domain.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {domain.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {domain.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-[0.015]"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Benefits of Our Dedicated Teams
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team model offers numerous advantages over traditional hiring or project-based outsourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Specialized Expertise",
                description:
                  "Access to a diverse pool of specialized talent with expertise in various technologies and domains.",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                icon: <Code className="h-6 w-6 text-white" />,
                title: "Seamless Integration",
                description: "Our teams integrate smoothly with your existing processes, tools, and workflows.",
                color: "bg-gradient-to-br from-green-500 to-emerald-600",
              },
              {
                icon: <Zap className="h-6 w-6 text-white" />,
                title: "Increased Productivity",
                description:
                  "Dedicated resources working exclusively on your projects ensure faster delivery and higher quality.",
                color: "bg-gradient-to-br from-purple-500 to-violet-600",
              },
              {
                icon: <Clock className="h-6 w-6 text-white" />,
                title: "Flexible Scaling",
                description: "Easily scale your team up or down based on project requirements and business needs.",
                color: "bg-gradient-to-br from-amber-500 to-orange-600",
              },
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Global Talent",
                description:
                  "Access to top talent from around the world, bringing diverse perspectives and innovative solutions.",
                color: "bg-gradient-to-br from-pink-500 to-rose-600",
              },
              {
                icon: <Shield className="h-6 w-6 text-white" />,
                title: "Risk Mitigation",
                description:
                  "Reduce hiring risks, overhead costs, and management complexity with our vetted professionals.",
                color: "bg-gradient-to-br from-teal-500 to-cyan-600",
              },
              {
                icon: <GitBranch className="h-6 w-6 text-white" />,
                title: "Continuous Innovation",
                description:
                  "Stay ahead with teams that continuously learn and apply the latest technologies and methodologies.",
                color: "bg-gradient-to-br from-indigo-500 to-blue-700",
              },
              {
                icon: <Lock className="h-6 w-6 text-white" />,
                title: "IP Protection",
                description:
                  "Comprehensive legal frameworks and NDAs to ensure your intellectual property remains secure.",
                color: "bg-gradient-to-br from-red-500 to-rose-600",
              },
              {
                icon: <BarChart className="h-6 w-6 text-white" />,
                title: "Predictable Costs",
                description:
                  "Transparent pricing models with no hidden fees, making budgeting and financial planning easier.",
                color: "bg-gradient-to-br from-emerald-500 to-green-600",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white relative overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get the right team for your specific needs quickly and efficiently.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Requirements Analysis",
                  description:
                    "We work with you to understand your project requirements, technical needs, and team structure.",
                  icon: <Database className="h-6 w-6 text-white" />,
                },
                {
                  number: "02",
                  title: "Team Selection",
                  description:
                    "We select the best-matched professionals from our talent pool based on your specific requirements.",
                  icon: <Users className="h-6 w-6 text-white" />,
                },
                {
                  number: "03",
                  title: "Team Onboarding",
                  description: "The selected team is introduced to your processes, tools, and existing team members.",
                  icon: <Code className="h-6 w-6 text-white" />,
                },
                {
                  number: "04",
                  title: "Ongoing Collaboration",
                  description:
                    "Your dedicated team works exclusively on your projects with regular communication and reporting.",
                  icon: <Zap className="h-6 w-6 text-white" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl group bg-white"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    {step.icon}
                  </div>
                  <div className="pt-10 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed process timeline */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Detailed Engagement Process</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Initial Consultation",
                  description:
                    "We discuss your business goals, project scope, technical requirements, and team structure needs.",
                  duration: "1-2 days",
                  icon: <Users className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Team Proposal",
                  description:
                    "We present a tailored team composition with detailed profiles of potential team members.",
                  duration: "3-5 days",
                  icon: <FileCode className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Interviews & Selection",
                  description:
                    "You interview and select the final team members to ensure they meet your specific requirements.",
                  duration: "1 week",
                  icon: <CheckCircle className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Onboarding & Integration",
                  description:
                    "The team is onboarded to your project, tools, and processes with a detailed knowledge transfer.",
                  duration: "1-2 weeks",
                  icon: <Layers className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Development & Delivery",
                  description: "The team works on your project with regular updates, demos, and progress reports.",
                  duration: "Ongoing",
                  icon: <Code className="h-5 w-5 text-primary" />,
                },
              ].map((phase, index) => (
                <div key={index} className="flex items-start group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {phase.icon}
                    </div>
                    {index < 4 && (
                      <div className="absolute top-10 bottom-0 left-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/20 to-transparent transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="ml-6 bg-white p-5 rounded-xl border border-gray-200 group-hover:border-primary/20 transition-all duration-300 group-hover:shadow-md flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {phase.title}
                      </h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{phase.duration}</span>
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Composition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-[0.015]"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Team Structure
              </span>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Flexible Team Composition
              </h2>
              <p className="text-gray-600 mb-8">
                We offer flexible team structures tailored to your specific project requirements. Whether you need a
                full development team or specific specialists to augment your existing team, we can provide the right
                resources.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Full-stack development teams",
                  "Front-end and back-end developers",
                  "UI/UX designers",
                  "DevOps engineers",
                  "QA and testing specialists",
                  "Project managers and Scrum masters",
                  "Data scientists and AI specialists",
                  "Mobile app developers",
                  "Blockchain developers",
                  "Cloud architects",
                  "Security specialists",
                  "Database administrators",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white group px-8 py-3 text-lg shadow-lg shadow-primary/20">
                Discuss Your Team Needs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative z-10 bg-white">
                <img src="/flexible_team_composition.jpg?height=600&width=800" alt="Team collaboration" className="w-full h-auto" />

                {/* Overlaid stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "2-4", label: "Weeks to Assemble" },
                      { value: "100%", label: "Remote Capable" },
                      { value: "24/7", label: "Support" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 rotate-3 border border-gray-100">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 -rotate-6 border border-gray-100">
                <Star className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Team models section */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-8 text-center">Engagement Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dedicated Team",
                  description:
                    "A full team working exclusively on your project with all necessary roles and expertise.",
                  features: ["Full project ownership", "Complete team structure", "Long-term collaboration"],
                  icon: <Users className="h-6 w-6 text-white" />,
                  color: "bg-gradient-to-br from-blue-500 to-blue-600",
                },
                {
                  title: "Team Extension",
                  description: "Augment your existing team with specific specialists to fill skill gaps.",
                  features: ["Seamless integration", "Flexible scaling", "Specialized expertise"],
                  icon: <Layers className="h-6 w-6 text-white" />,
                  color: "bg-gradient-to-br from-purple-500 to-violet-600",
                },
                {
                  title: "Project-Based",
                  description: "A team assembled specifically for a defined project with clear deliverables.",
                  features: ["Fixed scope & timeline", "Defined deliverables", "Milestone-based approach"],
                  icon: <FileCode className="h-6 w-6 text-white" />,
                  color: "bg-gradient-to-br from-green-500 to-emerald-600",
                },
              ].map((model, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-primary/20 group"
                >
                  <div
                    className={`w-16 h-16 rounded-xl ${model.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <div className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have accelerated their growth with our dedicated teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The dedicated team from MHLP integrated seamlessly with our in-house developers. Their expertise helped us accelerate our product development and meet our tight deadlines.",
                name: "Sarah Johnson",
                position: "CTO, TechStart Inc.",
                image: "/hire-dedicated-teams3.jpeg?height=100&width=100",
                rating: 5,
                industry: "FinTech",
              },
              {
                quote:
                  "We've been working with MHLP's dedicated team for over two years now. They've become an essential part of our development process, bringing valuable skills and perspectives.",
                name: "Michael Chen",
                position: "VP of Engineering, DataFlow Systems",
                image: "/hire-dedicated-teams2.jpeg?height=100&width=100",
                rating: 5,
                industry: "Healthcare",
              },
              {
                quote:
                  "The flexibility to scale our team up and down based on project needs has been invaluable. The quality of talent and their commitment to our success has exceeded our expectations.",
                name: "Emily Rodriguez",
                position: "Product Director, InnovateCorp",
                image: "/hire-dedicated-teams1.jpeg?height=100&width=100",
                rating: 5,
                industry: "E-commerce",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
              >
                {/* Industry tag */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {testimonial.industry}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-8xl text-primary/5 font-serif group-hover:text-primary/10 transition-colors duration-300">
                  "
                </div>

                <div className="relative z-10">
                  <p className="text-gray-600 italic mb-8">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 border-2 border-primary/20 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* View more testimonials button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 group">
              View More Success Stories
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30"></div>

          {/* Enhanced decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float-slow"></div>

          {/* Floating code snippets */}
          <div className="absolute top-1/3 right-1/4 text-xs text-white/20 font-mono rotate-6 animate-float-slow">
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 shadow-xl">
              {'const success = await team.deliver({ quality: "exceptional" });'}
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
            Contact us today to discuss your project requirements and how our dedicated teams can help you achieve your
            goals with cutting-edge technology expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/contact'>
            <Button className="bg-white text-primary hover:bg-gray-100 group px-8 py-6 text-lg shadow-xl">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
           <Link href='/resources/case-studies'>
           <Button className="bg-white text-primary hover:bg-gray-100 group px-8 py-6 text-lg shadow-xl">
            
              View Our Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </div>

          {/* Additional contact options */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10">
              <span className="text-white mr-2">📧</span>
              <span className="text-white">contact@cyberinstant.com</span>
            </div>
            <div className="flex items-center bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10">
              <span className="text-white mr-2">📞</span>
              <span className="text-white">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

