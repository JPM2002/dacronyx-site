import Link from "next/link"
import { ArrowRight, Calendar, FileText, Users } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#a31621] to-[#6b0f1a] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Listo para transformar tu hotel?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Únete a los hoteles que ya están automatizando su comunicación y mejorando la experiencia de sus huéspedes
            con Hestia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-[#d4af37] mb-2" />
              <h3 className="font-semibold mb-1">Agendar Demo</h3>
              <p className="text-sm text-gray-200">Consulta personalizada</p>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="w-8 h-8 text-[#d4af37] mb-2" />
              <h3 className="font-semibold mb-1">Ver Casos de Éxito</h3>
              <p className="text-sm text-gray-200">Resultados reales</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-[#d4af37] mb-2" />
              <h3 className="font-semibold mb-1">Conocer el Equipo</h3>
              <p className="text-sm text-gray-200">Expertos en hospitalidad</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Consulta</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-[#a31621] font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Ver Casos de Éxito</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
