import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, Book, Users, Headphones } from "lucide-react"

const supportOptions = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team during business hours.",
    icon: MessageCircle,
    availability: "Mon-Fri 9AM-6PM PST",
    action: "Start Chat",
  },
  {
    title: "Email Support",
    description: "Send us detailed questions and receive comprehensive responses.",
    icon: Mail,
    availability: "24/7 - Response within 24 hours",
    action: "Send Email",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts for urgent issues.",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM PST",
    action: "Call Now",
  },
  {
    title: "Documentation",
    description: "Browse our comprehensive guides and API documentation.",
    icon: Book,
    availability: "Available 24/7",
    action: "View Docs",
  },
  {
    title: "Community Forum",
    description: "Connect with other developers and share knowledge.",
    icon: Users,
    availability: "Community moderated",
    action: "Join Forum",
  },
  {
    title: "Premium Support",
    description: "Dedicated support for enterprise customers with SLA guarantees.",
    icon: Headphones,
    availability: "24/7 for enterprise customers",
    action: "Learn More",
  },
]

export function SupportOptions() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            How Can We <span className="gradient-text">Help?</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            Choose the support option that works best for you. Our team is here to ensure your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-8 w-8 text-dacronyx-accent2" />
                </div>
                <h3 className="font-space text-xl font-bold mb-3 text-white">{option.title}</h3>
                <p className="text-dacronyx-light/70 mb-4">{option.description}</p>
                <p className="text-dacronyx-accent2 text-sm mb-6">{option.availability}</p>
                <Button
                  variant="outline"
                  className="w-full border-dacronyx-accent text-dacronyx-accent2 hover:bg-dacronyx-accent/10"
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
