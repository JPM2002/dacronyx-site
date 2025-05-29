import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dacronyx's AI solutions have transformed our manufacturing process, reducing defects by 35% and increasing overall efficiency.",
    author: "Sarah Chen",
    title: "CTO, TechManufacture Inc.",
  },
  {
    quote:
      "The embedded systems developed by Dacronyx have proven to be reliable, efficient, and incredibly adaptive to our changing needs.",
    author: "Michael Rodriguez",
    title: "Director of Innovation, FutureTech",
  },
  {
    quote:
      "Their digital infrastructure consulting helped us scale our AI operations seamlessly, handling 10x the data volume with minimal latency.",
    author: "Aisha Johnson",
    title: "VP of Engineering, DataScale",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            See how our intelligent AI solutions are making a difference for organizations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-dacronyx-accent mb-4 opacity-50" />
                <p className="text-dacronyx-light/90 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-space font-bold text-white">{testimonial.author}</p>
                  <p className="text-dacronyx-light/70 text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
