import { Target, Eye, Heart } from "lucide-react"

export function Mission() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-dacronyx-accent2" />
            </div>
            <h3 className="font-space text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-dacronyx-light/70">
              To bridge the gap between high-level machine learning and low-level systems execution, delivering
              intelligent, real-world solutions that transform industries and improve lives.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-dacronyx-accent2" />
            </div>
            <h3 className="font-space text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-dacronyx-light/70">
              To be the global leader in practical AI implementation, making advanced artificial intelligence accessible
              and beneficial for organizations of all sizes across all industries.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-dacronyx-accent2" />
            </div>
            <h3 className="font-space text-2xl font-bold mb-4 text-white">Our Values</h3>
            <p className="text-dacronyx-light/70">
              Innovation, integrity, and impact drive everything we do. We believe in ethical AI development that
              creates positive change while maintaining the highest standards of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
