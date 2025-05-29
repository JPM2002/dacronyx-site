import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Innovation Drive", "San Francisco, CA 94105", "United States"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM PST"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@dacronyx.com", "support@dacronyx.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM PST", "Saturday: 10AM - 2PM PST", "Sunday: Closed"],
  },
]

export function ContactInfo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="font-space text-3xl font-bold mb-4 text-white">Contact Information</h2>
            <p className="text-dacronyx-light/70">
              Multiple ways to reach our team. We're here to help you succeed with AI.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-dacronyx-darker/50 backdrop-blur-sm border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-dacronyx-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-dacronyx-accent2" />
                    </div>
                    <div>
                      <h3 className="font-space text-lg font-bold mb-2 text-white">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-dacronyx-light/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-dacronyx-darker/50 backdrop-blur-sm border-dacronyx-accent/10">
            <CardContent className="p-6">
              <h3 className="font-space text-lg font-bold mb-4 text-white">Office Locations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-dacronyx-accent2 mb-1">San Francisco (HQ)</h4>
                  <p className="text-dacronyx-light/70 text-sm">123 Innovation Drive, San Francisco, CA 94105</p>
                </div>
                <div>
                  <h4 className="font-semibold text-dacronyx-accent2 mb-1">New York</h4>
                  <p className="text-dacronyx-light/70 text-sm">456 Tech Avenue, New York, NY 10001</p>
                </div>
                <div>
                  <h4 className="font-semibold text-dacronyx-accent2 mb-1">London</h4>
                  <p className="text-dacronyx-light/70 text-sm">789 AI Street, London, UK EC1A 1BB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
