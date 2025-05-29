const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We analyze your current systems, identify challenges, and define clear objectives for AI implementation.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Our experts design custom AI solutions tailored to your specific requirements and business goals.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We develop, test, and refine the solution using cutting-edge technologies and rigorous quality assurance.",
  },
  {
    step: "04",
    title: "Deployment & Integration",
    description:
      "Seamless deployment and integration with your existing systems, ensuring minimal disruption to operations.",
  },
  {
    step: "05",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization to ensure peak performance and adapt to evolving needs.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            A proven methodology that ensures successful AI implementation from concept to deployment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 border-2 border-dacronyx-accent flex items-center justify-center">
                  <span className="font-space font-bold text-dacronyx-accent2">{step.step}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-space text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-dacronyx-light/70">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 mt-16 w-0.5 h-12 bg-dacronyx-accent/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
