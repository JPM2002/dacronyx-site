import Link from "next/link"
import { Brain, Smartphone, Cloud, Cpu, ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: Brain,
    title: "Algoritmos Avanzados",
    description:
      "Inteligencia artificial especializada en la industria hotelera que entiende las necesidades específicas de los huéspedes y automatiza respuestas contextuales.",
    features: [
      "Reconocimiento de solicitudes de huéspedes",
      "Respuestas automáticas personalizadas",
      "Recomendaciones de servicios del hotel",
      "Análisis de satisfacción en tiempo real",
    ],
    href: "/solutions/advanced-algorithms",
    color: "bg-[#d4af37]",
  },
  {
    icon: Smartphone,
    title: "Sistemas Embebidos",
    description:
      "Aplicaciones móviles diseñadas para el personal del hotel que optimizan la comunicación interna y la gestión de solicitudes de huéspedes.",
    features: [
      "App móvil para housekeeping",
      "Notificaciones push instantáneas",
      "Gestión de tareas por departamento",
      "Tracking de tiempos de respuesta",
    ],
    href: "/solutions/embedded-systems",
    color: "bg-[#a31621]",
  },
  {
    icon: Cloud,
    title: "Infraestructura Digital",
    description:
      "Conectores especializados para sistemas hoteleros que permiten una integración perfecta sin interrumpir las operaciones existentes del hotel.",
    features: [
      "Integración con PMS principales",
      "Conectores para motores de reservas",
      "Sincronización con sistemas de facturación",
      "APIs para plataformas de gestión",
    ],
    href: "/solutions/digital-infrastructure",
    color: "bg-[#5e503f]",
  },
  {
    icon: Cpu,
    title: "Integración IA",
    description:
      "Asistente virtual especializado en hospitalidad que combina automatización inteligente con escalamiento humano cuando es necesario.",
    features: [
      "Chatbot especializado en hoteles",
      "Escalamiento automático a personal",
      "Base de conocimiento del hotel",
      "Aprendizaje de preferencias de huéspedes",
    ],
    href: "/solutions/ai-integration",
    color: "bg-[#7e6651]",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#a31621] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Soluciones Tecnológicas para Hoteles</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Descubre cómo nuestras cuatro áreas de especialización trabajan juntas para crear la plataforma de
              automatización hotelera más avanzada.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl ${solution.color} flex items-center justify-center`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-hestia-coffee">{solution.title}</h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-hestia-coffee mb-3">Características principales:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={solution.href}
                    className="inline-flex items-center space-x-2 text-[#a31621] hover:text-[#6b0f1a] font-semibold transition-colors"
                  >
                    <span>Explorar en detalle</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hestia-coffee mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo puede adaptar estas tecnologías a las necesidades específicas de tu hotel.
          </p>
          <Link
            href="/consultation"
            className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Agendar Consulta Técnica
          </Link>
        </div>
      </section>
    </div>
  )
}
