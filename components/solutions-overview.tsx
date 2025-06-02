import Link from "next/link"
import { ArrowRight, Cpu, Smartphone, Cloud, Brain } from "lucide-react"

const solutions = [
  {
    icon: Brain,
    title: "Algoritmos Avanzados",
    description:
      "IA especializada en comunicación hotelera: reconocimiento de solicitudes de huéspedes, respuestas automáticas contextuales y recomendaciones personalizadas de servicios del hotel.",
    href: "/solutions/advanced-algorithms",
    color: "bg-[#d4af37]",
  },
  {
    icon: Smartphone,
    title: "Sistemas Embebidos",
    description:
      "Aplicaciones móviles para el personal del hotel: notificaciones instantáneas de solicitudes de huéspedes, gestión de tareas de housekeeping y comunicación interna eficiente.",
    href: "/solutions/embedded-systems",
    color: "bg-[#a31621]",
  },
  {
    icon: Cloud,
    title: "Infraestructura Digital",
    description:
      "Integración completa con sistemas hoteleros existentes: PMS, motores de reservas, sistemas de facturación y plataformas de gestión de huéspedes.",
    href: "/solutions/digital-infrastructure",
    color: "bg-[#5e503f]",
  },
  {
    icon: Cpu,
    title: "Integración IA",
    description:
      "Asistente virtual inteligente para huéspedes: respuestas 24/7, escalamiento automático a personal humano y aprendizaje continuo de las preferencias del hotel.",
    href: "/solutions/ai-integration",
    color: "bg-[#7e6651]",
  },
]

export default function SolutionsOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-hestia-coffee mb-4">Nuestras Soluciones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de vanguardia adaptada a las necesidades específicas de cada hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:border-[#d4af37]"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center flex-shrink-0`}
                >
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-hestia-coffee mb-3 group-hover:text-[#a31621] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                  <div className="flex items-center text-[#d4af37] font-medium group-hover:text-[#a31621] transition-colors">
                    <span>Explorar solución</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/solutions"
            className="bg-[#a31621] hover:bg-[#6b0f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Ver Todas las Soluciones
          </Link>
        </div>
      </div>
    </section>
  )
}
