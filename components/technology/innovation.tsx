import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Target, Users } from "lucide-react"

const innovations = [
  {
    title: "Quantum-Inspired Algorithms",
    description:
      "Leveraging quantum computing principles to solve complex optimization problems faster than traditional methods.",
    icon: Lightbulb,
    impact: "50x faster processing",
  },
  {
    title: "Edge AI Optimization",
    description: "Proprietary techniques for deploying full AI capabilities on resource-constrained edge devices.",
    icon: Rocket,
    impact: "90% reduction in latency",
  },
  {
    title: "Adaptive Learning Systems",
    description:
      "Self-improving AI systems that continuously learn and adapt to changing environments and requirements.",
    icon: Target,
    impact: "35% improvement in accuracy",
  },
  {
    title: "Human-AI Collaboration",
    description: "Intuitive interfaces that enable seamless collaboration between human experts and AI systems.",
    icon: Users,
    impact: "3x productivity increase",
  },
]

export function Innovation() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Innovation <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-3xl mx-auto">
            Our breakthrough innovations are pushing the boundaries of what's possible with AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center">
                    <innovation.icon className="h-8 w-8 text-dacronyx-accent2" />
                  </div>
                  <span className="px-3 py-1 bg-dacronyx-accent/20 text-dacronyx-accent2 text-sm rounded-full">
                    {innovation.impact}
                  </span>
                </div>
                <h3 className="font-space text-xl font-bold mb-4 text-white">{innovation.title}</h3>
                <p className="text-dacronyx-light/70">{innovation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
