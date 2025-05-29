import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Award } from "lucide-react"

interface CaseStudy {
  title: string
  client: string
  challenge: string
  solution: string
  results: string[]
}

interface SolutionCaseStudyProps {
  caseStudy: CaseStudy
}

export function SolutionCaseStudy({ caseStudy }: SolutionCaseStudyProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Success <span className="gradient-text">Story</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-space text-2xl font-bold mb-4 text-white">{caseStudy.title}</h3>
                  <p className="text-dacronyx-accent2 mb-6">{caseStudy.client}</p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Target className="h-5 w-5 text-dacronyx-accent2 mr-2" />
                        <h4 className="font-space font-semibold text-white">Challenge</h4>
                      </div>
                      <p className="text-dacronyx-light/70">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-dacronyx-accent2 mr-2" />
                        <h4 className="font-space font-semibold text-white">Solution</h4>
                      </div>
                      <p className="text-dacronyx-light/70">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-5 w-5 text-dacronyx-accent2 mr-2" />
                    <h4 className="font-space font-semibold text-white">Results</h4>
                  </div>
                  <div className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-dacronyx-accent mr-3"></div>
                        <span className="text-dacronyx-light">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
