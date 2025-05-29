import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target, Heart } from "lucide-react"

const cultureValues = [
  {
    title: "Innovation First",
    description: "We encourage bold thinking and provide the resources to turn innovative ideas into reality.",
    icon: Lightbulb,
  },
  {
    title: "Collaborative Spirit",
    description: "Our diverse team works together to solve complex challenges and achieve shared goals.",
    icon: Users,
  },
  {
    title: "Growth Mindset",
    description: "We invest in continuous learning and provide opportunities for professional development.",
    icon: Target,
  },
  {
    title: "Work-Life Balance",
    description: "We believe in sustainable success and support our team's well-being and personal growth.",
    icon: Heart,
  },
]

export function Culture() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Culture</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-3xl mx-auto">
            At Dacronyx, we foster an environment where innovation thrives and every team member can make a meaningful
            impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureValues.map((value, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300 text-center"
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
