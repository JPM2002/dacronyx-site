import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI researcher at MIT with 15+ years in machine learning and systems architecture.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Expert in embedded systems and edge computing with a PhD in Computer Engineering.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dr. Aisha Johnson",
    role: "Head of Research",
    bio: "Leading AI researcher with 50+ publications in top-tier conferences and journals.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Veteran software architect with experience scaling AI systems for Fortune 500 companies.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function Team() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Leadership Team</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            Meet the visionaries and experts driving Dacronyx's mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-dacronyx-dark/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-dacronyx-accent/10 mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-space text-lg font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-dacronyx-accent2 text-sm mb-3">{member.role}</p>
                <p className="text-dacronyx-light/70 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <Linkedin className="h-4 w-4 text-dacronyx-light/50 hover:text-dacronyx-accent2 cursor-pointer transition-colors" />
                  <Twitter className="h-4 w-4 text-dacronyx-light/50 hover:text-dacronyx-accent2 cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
