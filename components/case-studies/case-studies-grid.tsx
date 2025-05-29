import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Target, Award } from "lucide-react"

const caseStudies = [
  {
    title: "Manufacturing Quality Control Revolution",
    client: "TechManufacture Inc.",
    industry: "Manufacturing",
    challenge: "Reduce defect rates in high-volume production line while maintaining speed",
    solution: "Implemented computer vision algorithms for real-time quality inspection",
    results: ["35% reduction in defects", "50% faster inspection process", "99.7% accuracy rate", "$2M annual savings"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Smart City Traffic Optimization",
    client: "Metropolitan City Council",
    industry: "Government",
    challenge: "Optimize traffic flow and reduce congestion across 500+ intersections",
    solution: "Deployed edge AI sensors with adaptive traffic management algorithms",
    results: [
      "30% reduction in traffic delays",
      "25% improvement in fuel efficiency",
      "40% fewer traffic violations",
      "15% reduction in emissions",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Financial Fraud Detection System",
    client: "GlobalBank Corp",
    industry: "Financial Services",
    challenge: "Scale fraud detection to handle 10M+ transactions daily with minimal false positives",
    solution: "Built cloud-native ML infrastructure with real-time anomaly detection",
    results: [
      "99.8% fraud detection accuracy",
      "90% reduction in false positives",
      "10x processing capacity",
      "$50M fraud prevented annually",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Healthcare Diagnostic Assistant",
    client: "Regional Medical Center",
    industry: "Healthcare",
    challenge: "Improve diagnostic accuracy and reduce time to diagnosis for radiology",
    solution: "Developed AI-powered medical imaging analysis with radiologist collaboration",
    results: [
      "95% diagnostic accuracy",
      "60% faster diagnosis time",
      "40% reduction in missed cases",
      "Improved patient outcomes",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Retail Inventory Optimization",
    client: "MegaRetail Chain",
    industry: "Retail",
    challenge: "Optimize inventory across 1000+ stores while minimizing stockouts and overstock",
    solution: "Implemented demand forecasting AI with automated inventory management",
    results: [
      "25% inventory reduction",
      "15% sales increase",
      "80% reduction in stockouts",
      "$100M working capital freed",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Energy Grid Optimization",
    client: "PowerGrid Solutions",
    industry: "Energy",
    challenge: "Optimize renewable energy distribution and predict maintenance needs",
    solution: "Deployed predictive analytics for grid management and equipment monitoring",
    results: [
      "20% improvement in efficiency",
      "50% reduction in downtime",
      "30% lower maintenance costs",
      "Enhanced grid stability",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function CaseStudiesGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-dacronyx-accent/20 text-dacronyx-accent2 text-sm rounded-md">
                      {study.industry}
                    </span>
                    <p className="text-dacronyx-light/60 text-sm">{study.client}</p>
                  </div>

                  <h3 className="font-space text-xl font-bold mb-4 text-white">{study.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Target className="h-4 w-4 text-dacronyx-accent2 mr-2" />
                        <h4 className="font-space font-semibold text-white text-sm">Challenge</h4>
                      </div>
                      <p className="text-dacronyx-light/70 text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Award className="h-4 w-4 text-dacronyx-accent2 mr-2" />
                        <h4 className="font-space font-semibold text-white text-sm">Solution</h4>
                      </div>
                      <p className="text-dacronyx-light/70 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-3">
                        <TrendingUp className="h-4 w-4 text-dacronyx-accent2 mr-2" />
                        <h4 className="font-space font-semibold text-white text-sm">Results</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-dacronyx-accent mr-2"></div>
                            <span className="text-dacronyx-light/80">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-dacronyx-accent text-dacronyx-accent2 hover:bg-dacronyx-accent/10"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
