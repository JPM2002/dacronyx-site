import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cpu, Database, Cloud, Shield, Zap } from "lucide-react"

const technologies = [
  {
    category: "Machine Learning",
    icon: Brain,
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
    description: "Advanced ML frameworks for building intelligent models",
  },
  {
    category: "Computing",
    icon: Cpu,
    technologies: ["CUDA", "OpenCL", "ARM", "RISC-V", "FPGA"],
    description: "High-performance computing for edge and cloud",
  },
  {
    category: "Data Processing",
    icon: Database,
    technologies: ["Apache Spark", "Kafka", "Redis", "PostgreSQL", "MongoDB"],
    description: "Scalable data processing and storage solutions",
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    technologies: ["Kubernetes", "Docker", "AWS", "Azure", "GCP"],
    description: "Robust cloud-native deployment platforms",
  },
  {
    category: "Security",
    icon: Shield,
    technologies: ["Zero Trust", "Encryption", "OAuth", "RBAC", "Audit Logs"],
    description: "Enterprise-grade security and compliance",
  },
  {
    category: "Performance",
    icon: Zap,
    technologies: ["WebAssembly", "Rust", "C++", "Go", "Node.js"],
    description: "Optimized performance for real-time applications",
  },
]

export function TechStack() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-3xl mx-auto">
            We leverage the most advanced technologies and frameworks to deliver robust, scalable, and efficient AI
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mb-4">
                  <tech.icon className="h-6 w-6 text-dacronyx-accent2" />
                </div>
                <h3 className="font-space text-xl font-bold mb-3 text-white">{tech.category}</h3>
                <p className="text-dacronyx-light/70 mb-4 text-sm">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-dacronyx-accent/10 text-dacronyx-accent2 text-xs rounded-md"
                    >
                      {technology}
                    </span>
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
