import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const positions = [
  {
    title: "Senior AI Research Scientist",
    department: "Research & Development",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead cutting-edge AI research and develop next-generation algorithms for real-world applications.",
  },
  {
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and deploy scalable ML systems that power our intelligent solutions.",
  },
  {
    title: "Embedded Systems Engineer",
    department: "Hardware",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Design and implement AI-powered embedded systems for edge computing applications.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "New York, NY",
    type: "Full-time",
    description: "Build and maintain cloud infrastructure for large-scale AI deployments.",
  },
  {
    title: "Product Manager - AI Solutions",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Drive product strategy and roadmap for our AI solution portfolio.",
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "London, UK",
    type: "Full-time",
    description: "Work with enterprise clients to implement AI solutions and drive technical sales.",
  },
]

export function OpenPositions() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Open <span className="gradient-text">Positions</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            Explore exciting opportunities to work on cutting-edge AI projects with a world-class team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {positions.map((position, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-space text-xl font-bold mb-2 text-white">{position.title}</h3>
                    <p className="text-dacronyx-accent2 text-sm">{position.department}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-dacronyx-accent text-dacronyx-accent2 hover:bg-dacronyx-accent/10"
                  >
                    Apply <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>

                <p className="text-dacronyx-light/70 mb-4">{position.description}</p>

                <div className="flex items-center space-x-4 text-sm text-dacronyx-light/60">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {position.type}
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
