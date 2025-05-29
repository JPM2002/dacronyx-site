import { Brain, Cpu, Database, Network } from "lucide-react"

const services = [
  {
    title: "Advanced Algorithms",
    description:
      "Cutting-edge AI algorithms tailored to solve complex business challenges with precision and efficiency.",
    icon: Brain,
  },
  {
    title: "Embedded Systems",
    description: "Intelligent hardware solutions that bring AI capabilities to edge devices and IoT applications.",
    icon: Cpu,
  },
  {
    title: "Digital Infrastructure",
    description: "Scalable and secure infrastructure designed to support intensive AI workloads and data processing.",
    icon: Database,
  },
  {
    title: "Systems Integration",
    description: "Seamless integration of AI technologies with existing systems and workflows for maximum impact.",
    icon: Network,
  },
]

export function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            We deliver intelligent, real-world solutions through advanced algorithms, embedded systems, and digital
            infrastructure consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 rounded-lg p-6 hover:border-dacronyx-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mb-6 group-hover:bg-dacronyx-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-dacronyx-accent2" />
              </div>
              <h3 className="font-space text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-dacronyx-light/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
