interface SolutionDetailsProps {
  description: string
}

export function SolutionDetails({ description }: SolutionDetailsProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-dacronyx-light/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
