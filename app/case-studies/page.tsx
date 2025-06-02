import { TrendingUp, Clock, Star, Users } from "lucide-react"

const caseStudies = [
  {
    hotel: "Hotel Boutique Santiago",
    location: "Santiago, Chile",
    size: "85 habitaciones",
    challenge: "Alto volumen de consultas repetitivas que saturaban la recepción",
    solution: "Implementación de asistente IA con integración WhatsApp y enrutamiento automático",
    results: [
      { metric: "Tiempo de respuesta", improvement: "80% reducción", icon: Clock },
      { metric: "Satisfacción huéspedes", improvement: "95% satisfacción", icon: Star },
      { metric: "Eficiencia personal", improvement: "60% más productivo", icon: Users },
      { metric: "Upselling", improvement: "40% aumento", icon: TrendingUp },
    ],
    testimonial:
      "Hestia transformó completamente nuestra operación. Ahora podemos enfocarnos en brindar experiencias excepcionales mientras la IA maneja las consultas rutinarias.",
    manager: "María González, Gerente General",
  },
  {
    hotel: "Resort Costa del Sol",
    location: "Viña del Mar, Chile",
    size: "200 habitaciones",
    challenge: "Comunicación fragmentada entre departamentos y demoras en servicios",
    solution: "Sistema completo con app móvil para personal y automatización de flujos internos",
    results: [
      { metric: "Tiempo de servicio", improvement: "70% más rápido", icon: Clock },
      { metric: "Coordinación equipos", improvement: "90% mejora", icon: Users },
      { metric: "Satisfacción general", improvement: "88% rating", icon: Star },
      { metric: "Ingresos adicionales", improvement: "25% incremento", icon: TrendingUp },
    ],
    testimonial:
      "La coordinación entre housekeeping, mantenimiento y recepción nunca había sido tan fluida. Los huéspedes notan la diferencia.",
    manager: "Carlos Mendoza, Director de Operaciones",
  },
  {
    hotel: "Hotel Familiar Los Andes",
    location: "Mendoza, Argentina",
    size: "45 habitaciones",
    challenge: "Hotel familiar necesitaba automatización sin perder el toque personal",
    solution: "IA personalizada con escalamiento inteligente y respuestas adaptadas al tono del hotel",
    results: [
      { metric: "Automatización", improvement: "75% consultas", icon: Clock },
      { metric: "Toque personal", improvement: "Mantenido 100%", icon: Star },
      { metric: "Carga de trabajo", improvement: "50% reducción", icon: Users },
      { metric: "Reservas directas", improvement: "35% aumento", icon: TrendingUp },
    ],
    testimonial:
      "Mantuvimos nuestro toque familiar mientras ganamos eficiencia. Hestia entendió perfectamente nuestras necesidades.",
    manager: "Ana Rodríguez, Propietaria",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Casos de Éxito</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Descubre cómo hoteles de toda Latinoamérica han transformado su operación con Hestia.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-[#5e503f] mb-2">{study.hotel}</h2>
                      <p className="text-gray-600">
                        {study.location} • {study.size}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-[#a31621] mb-3">Desafío</h3>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#d4af37] mb-3">Solución</h3>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <blockquote className="text-gray-700 italic mb-4">"{study.testimonial}"</blockquote>
                        <cite className="text-sm font-medium text-[#5e503f]">— {study.manager}</cite>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#5e503f] mb-6">Resultados</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-gray-50 rounded-lg p-6 text-center">
                            <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                              <result.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-[#5e503f] mb-2">{result.metric}</h4>
                            <p className="text-2xl font-bold text-[#a31621]">{result.improvement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#5e503f] mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos transformar tu hotel.
          </p>
          <a
            href="/consultation"
            className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
          >
            Agendar Consulta Gratuita
          </a>
        </div>
      </section>
    </div>
  )
}
