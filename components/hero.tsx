import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#6b0f1a] via-[#a31621] to-[#5e503f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Automatiza tu hotel, <span className="text-[#d4af37]">mejora la experiencia</span> de tus huéspedes
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Plataforma de automatización inteligente que transforma la comunicación hotel-huésped, libera recursos del
              personal y aumenta la satisfacción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consultation"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/technology"
                className="border-2 border-white text-white hover:bg-white hover:text-[#a31621] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Ver Tecnología</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Asistente IA activo 24/7</span>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">Huésped:</p>
                  <p className="text-sm">"¿Podrían enviar toallas adicionales a la habitación 205?"</p>
                </div>
                <div className="bg-[#d4af37]/20 rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">Hestia IA:</p>
                  <p className="text-sm">
                    "¡Por supuesto! He notificado a housekeeping. Las toallas llegarán en 15 minutos. ¿Necesita algo
                    más?"
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <span>✓ Solicitud procesada</span>
                  <span>✓ Personal notificado</span>
                  <span>✓ Tiempo estimado enviado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
