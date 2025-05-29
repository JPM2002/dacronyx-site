import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, Award } from "lucide-react"

const researchStats = [
  { icon: FileText, value: "50+", label: "Research Papers" },
  { icon: Users, value: "25+", label: "PhD Researchers" },
  { icon: Award, value: "15+", label: "Patents Filed" },
]

export function Research() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
              Leading <span className="gradient-text">Research & Development</span>
            </h2>
            <p className="text-dacronyx-light/70 mb-8">
              Our dedicated R&D team continuously pushes the boundaries of AI technology, contributing to academic
              research while developing practical solutions for real-world challenges.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {researchStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-dacronyx-accent2" />
                  </div>
                  <div className="font-space text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-dacronyx-light/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity">
              View Research Publications <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-dacronyx-darker rounded-lg p-8 border border-dacronyx-accent/20">
              <div className="h-full w-full rounded bg-dacronyx-dark/50 flex items-center justify-center">
                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Research network visualization */}
                  <circle cx="150" cy="150" r="120" stroke="#0062ff" strokeWidth="2" strokeDasharray="10 5" />
                  <circle cx="150" cy="150" r="80" stroke="#00d2ff" strokeWidth="1.5" />
                  <circle cx="150" cy="150" r="40" stroke="white" strokeWidth="1" />

                  {/* Research nodes */}
                  <circle cx="150" cy="50" r="6" fill="#0062ff" />
                  <circle cx="250" cy="150" r="6" fill="#0062ff" />
                  <circle cx="150" cy="250" r="6" fill="#0062ff" />
                  <circle cx="50" cy="150" r="6" fill="#0062ff" />

                  <circle cx="200" cy="100" r="4" fill="#00d2ff" />
                  <circle cx="200" cy="200" r="4" fill="#00d2ff" />
                  <circle cx="100" cy="200" r="4" fill="#00d2ff" />
                  <circle cx="100" cy="100" r="4" fill="#00d2ff" />

                  <circle cx="150" cy="150" r="8" fill="white" />

                  {/* Connection lines */}
                  <line x1="150" y1="150" x2="150" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <line x1="150" y1="150" x2="250" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <line x1="150" y1="150" x2="150" y2="250" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <line x1="150" y1="150" x2="50" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
