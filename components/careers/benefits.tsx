import { Card, CardContent } from "@/components/ui/card"
import { Shield, Plane, GraduationCap, Coffee, Home, Zap } from "lucide-react"

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and wellness programs",
    icon: Shield,
  },
  {
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and modern office spaces",
    icon: Home,
  },
  {
    title: "Learning & Development",
    description: "Conference attendance, online courses, and professional development budget",
    icon: GraduationCap,
  },
  {
    title: "Time Off",
    description: "Generous PTO, sabbatical opportunities, and company holidays",
    icon: Plane,
  },
  {
    title: "Perks & Amenities",
    description: "Free meals, gym membership, and state-of-the-art equipment",
    icon: Coffee,
  },
  {
    title: "Equity & Growth",
    description: "Stock options, performance bonuses, and clear career progression paths",
    icon: Zap,
  },
]

export function Benefits() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Benefits & <span className="gradient-text">Perks</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            We offer comprehensive benefits and perks to support your success and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-dacronyx-accent2" />
                </div>
                <h3 className="font-space text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-dacronyx-light/70">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
