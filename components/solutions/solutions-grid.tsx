import Link from "next/link"
import { Brain, Cpu, Database, Network, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const solutions = [
  {
    title: "Advanced Algorithms",
    description:
      "Cutting-edge machine learning algorithms tailored to solve complex business challenges with precision and efficiency.",
    icon: Brain,
    href: "/solutions/advanced-algorithms",
    features: ["Predictive Analytics", "Deep Learning Models", "Neural Networks", "Computer Vision"],
  },
  {
    title: "Embedded Systems",
    description: "Intelligent hardware solutions that bring AI capabilities to edge devices and IoT applications.",
    icon: Cpu,
    href: "/solutions/embedded-systems",
    features: ["Edge Computing", "Real-time Processing", "IoT Integration", "Hardware Optimization"],
  },
  {
    title: "Digital Infrastructure",
    description: "Scalable and secure infrastructure designed to support intensive AI workloads and data processing.",
    icon: Database,
    href: "/solutions/digital-infrastructure",
    features: ["Cloud Architecture", "Data Pipelines", "Scalable Computing", "Security Protocols"],
  },
  {
    title: "AI Integration",
    description: "Seamless integration of AI technologies with existing systems and workflows for maximum impact.",
    icon: Network,
    href: "/solutions/ai-integration",
    features: ["API Development", "System Integration", "Workflow Automation", "Legacy Modernization"],
  },
]

export function SolutionsGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-3xl mx-auto">
            From advanced algorithms to embedded systems, we provide end-to-end AI solutions that bridge the gap between
            cutting-edge research and practical implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center group-hover:bg-dacronyx-accent/20 transition-colors">
                    <solution.icon className="h-8 w-8 text-dacronyx-accent2" />
                  </div>
                  <Link href={solution.href} className="text-dacronyx-accent2 hover:text-white transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <h3 className="font-space text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                <p className="text-dacronyx-light/70 mb-6">{solution.description}</p>

                <div className="space-y-2">
                  <h4 className="font-space font-semibold text-dacronyx-accent2 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-dacronyx-light/80">
                        <div className="w-2 h-2 rounded-full bg-dacronyx-accent mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
