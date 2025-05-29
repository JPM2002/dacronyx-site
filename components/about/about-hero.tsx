export function AboutHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-space text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="gradient-text">Dacronyx</span>
          </h1>
          <p className="text-xl md:text-2xl text-dacronyx-light/80 mb-8 animate-fade-up">
            Pioneering the future of artificial intelligence through innovative solutions that bridge theory and
            practice.
          </p>
        </div>
      </div>
    </div>
  )
}
