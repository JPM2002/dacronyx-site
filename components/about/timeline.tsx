const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Dacronyx was established with a vision to bridge AI research and practical implementation.",
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Successfully deployed our first enterprise AI solution, reducing operational costs by 40%.",
  },
  {
    year: "2021",
    title: "Research Partnership",
    description: "Established partnerships with leading universities for advanced AI research.",
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Expanded operations to serve clients across North America and Europe.",
  },
  {
    year: "2023",
    title: "Innovation Awards",
    description: "Recognized as 'AI Innovation Company of the Year' by TechCrunch.",
  },
  {
    year: "2024",
    title: "Next Generation Platform",
    description: "Launched our next-generation AI platform serving Fortune 500 companies.",
  },
]

export function Timeline() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-dacronyx-light/70 max-w-2xl mx-auto">
            Key milestones in our mission to revolutionize AI implementation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dacronyx-accent/30"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 border-2 border-dacronyx-accent flex items-center justify-center">
                    <span className="font-space font-bold text-dacronyx-accent2 text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="font-space text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                  <p className="text-dacronyx-light/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
