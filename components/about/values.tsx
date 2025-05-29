import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Users, Zap } from "lucide-react"

const values = [
  {
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible with AI technology.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our AI development and deployment.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of human-AI collaboration to solve complex challenges.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We deliver exceptional quality in every solution we create and deploy.",
    icon: Zap,
  },
]

export function Values() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            These fundamental principles guide our approach to AI development and client relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300 text-center"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-dacronyx-accent2" />
                </div>
                <h3 className="font-space text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-dacronyx-light/70">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
