import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, FileText, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Clock,
    title: "30-Minute Discovery Call",
    description: "We'll discuss your challenges, goals, and current technology landscape.",
  },
  {
    icon: Users,
    title: "Technical Assessment",
    description: "Our experts will evaluate your specific requirements and technical constraints.",
  },
  {
    icon: FileText,
    title: "Custom Proposal",
    description: "Receive a detailed proposal with timeline, approach, and investment requirements.",
  },
  {
    icon: Rocket,
    title: "Project Kickoff",
    description: "Begin your AI transformation journey with our dedicated team.",
  },
]

const benefits = [
  "Free 30-minute consultation",
  "No obligation assessment",
  "Custom solution roadmap",
  "Expert technical guidance",
  "Flexible engagement models",
  "Proven track record",
]

export function ConsultationProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="font-space text-3xl font-bold mb-4 text-white">What to Expect</h2>
            <p className="text-dacronyx-light/70">
              Our consultation process is designed to understand your unique needs and provide actionable insights.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-dacronyx-darker/50 backdrop-blur-sm border-dacronyx-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-dacronyx-accent/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-dacronyx-accent2" />
                    </div>
                    <div>
                      <h3 className="font-space text-lg font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-dacronyx-light/70 text-sm">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-dacronyx-darker/50 backdrop-blur-sm border-dacronyx-accent/10">
            <CardContent className="p-6">
              <h3 className="font-space text-lg font-bold mb-4 text-white">Why Choose Dacronyx?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-dacronyx-accent mr-3"></div>
                    <span className="text-dacronyx-light/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dacronyx-dark/50 backdrop-blur-sm border-dacronyx-accent/10">
            <CardContent className="p-6">
              <h3 className="font-space text-lg font-bold mb-4 text-white">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p className="text-dacronyx-light/70">
                  <span className="text-white font-medium">Email:</span> consultations@dacronyx.com
                </p>
                <p className="text-dacronyx-light/70">
                  <span className="text-white font-medium">Phone:</span> +1 (555) 123-4567
                </p>
                <p className="text-dacronyx-light/70">
                  <span className="text-white font-medium">Hours:</span> Monday - Friday, 9AM - 6PM PST
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
