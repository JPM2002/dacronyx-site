import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface SolutionFeaturesProps {
  features: Feature[]
}

export function SolutionFeatures({ features }: SolutionFeaturesProps) {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Features</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-dacronyx-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-dacronyx-accent2" />
                  </div>
                  <div>
                    <h3 className="font-space text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-dacronyx-light/70">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
