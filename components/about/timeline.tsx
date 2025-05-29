const milestones = [
  {
    year: "2025",
    title: "Dacronyx Founded",
    description: "Launched with the mission to democratize AI adoption and build practical, real-time AI solutions for businesses.",
  },
  {
    year: "2025 Q3",
    title: "Website + Brand Launch",
    description: "Released our public brand, initial service offerings, and company website powered by Vercel.",
  },
  {
    year: "2025 Q4",
    title: "First Client Projects",
    description: "Started consulting with our first strategic clients and building MVPs in applied AI.",
  },
  {
    year: "2026",
    title: "Productization Phase",
    description: "Internal tools built during consulting engagements will be refined into scalable SaaS offerings.",
  },
  {
    year: "2026 Q3",
    title: "AI Academy Launch",
    description: "Introduced the first cohort-based AI education program with licensed instructors and real-world projects.",
  },
  {
    year: "2027",
    title: "Global Expansion",
    description: "Expanded services to Latin America and Canada, partnering with tech hubs and accelerators.",
  },
];


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
