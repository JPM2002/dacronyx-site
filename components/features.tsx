import { Bot, MessageSquare, Users, BarChart3, Shield, Settings } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Asistente Virtual IA",
    description: "Respuestas automáticas 24/7, multiidioma con capacidades de upselling inteligente.",
    color: "text-[#d4af37]",
  },
  {
    icon: MessageSquare,
    title: "Inbox Omnicanal",
    description: "Unifica WhatsApp, Instagram, Facebook, email y webchat en una sola interfaz.",
    color: "text-[#a31621]",
  },
  {
    icon: Users,
    title: "Enrutamiento Inteligente",
    description: "Distribución automática de solicitudes a los departamentos correctos.",
    color: "text-[#5e503f]",
  },
  {
    icon: BarChart3,
    title: "CRM + Analytics",
    description: "Perfiles automáticos de huéspedes con análisis de satisfacción y preferencias.",
    color: "text-[#d4af37]",
  },
  {
    icon: Settings,
    title: "Panel de Administración",
    description: "Configuración personalizada de horarios, personal y reglas específicas del hotel.",
    color: "text-[#a31621]",
  },
  {
    icon: Shield,
    title: "Seguridad & Privacidad",
    description: "Encriptación end-to-end, cumplimiento GDPR y Ley de Datos de Chile.",
    color: "text-[#5e503f]",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-hestia-coffee mb-4">Características Principales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una suite completa de herramientas de automatización diseñadas específicamente para la industria hotelera
            moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-hestia-coffee mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
