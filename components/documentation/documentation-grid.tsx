import { Card, CardContent } from "@/components/ui/card"
import { Book, Code, Cpu, Database } from "lucide-react"

const documentationSections = [
  {
    title: "Getting Started",
    description: "Quick start guides and basic concepts for implementing Dacronyx AI solutions.",
    icon: Book,
    topics: ["Installation Guide", "Basic Concepts", "First Project", "Authentication"],
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples and interactive testing tools.",
    icon: Code,
    topics: ["REST APIs", "GraphQL", "Webhooks", "SDKs"],
  },
  {
    title: "Embedded Systems",
    description: "Hardware integration guides and embedded system development resources.",
    icon: Cpu,
    topics: ["Hardware Setup", "Edge Deployment", "Optimization", "Troubleshooting"],
  },
  {
    title: "Infrastructure",
    description: "Cloud deployment, scaling, and infrastructure management documentation.",
    icon: Database,
    topics: ["Cloud Setup", "Scaling Guide", "Monitoring", "Security"],
  },
]

export function DocumentationGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentationSections.map((section, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mb-6">
                  <section.icon className="h-8 w-8 text-dacronyx-accent2" />
                </div>
                <h3 className="font-space text-2xl font-bold mb-4 text-white">{section.title}</h3>
                <p className="text-dacronyx-light/70 mb-6">{section.description}</p>
                <div className="space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-dacronyx-accent mr-3"></div>
                      <span className="text-dacronyx-light/80 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
