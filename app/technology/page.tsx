import { Server, MessageSquare, Brain, Shield, Zap, Database } from "lucide-react"

const techStack = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Modelos de NLP entrenados específicamente para la industria hotelera",
    technologies: ["OpenAI GPT-4", "Procesamiento de Lenguaje Natural", "Machine Learning", "Análisis de Sentimientos"],
  },
  {
    icon: MessageSquare,
    title: "Comunicación Omnicanal",
    description: "Integración con todas las plataformas de comunicación populares",
    technologies: ["WhatsApp Business API", "Facebook Messenger", "Instagram Direct", "Email SMTP", "Webchat"],
  },
  {
    icon: Server,
    title: "Infraestructura Cloud",
    description: "Arquitectura escalable y segura en la nube",
    technologies: ["AWS/Azure", "Kubernetes", "Microservicios", "API REST", "WebSockets"],
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description: "Almacenamiento seguro y análisis de datos de huéspedes",
    technologies: ["PostgreSQL", "Redis", "Elasticsearch", "Data Analytics", "Backup Automático"],
  },
  {
    icon: Shield,
    title: "Seguridad & Cumplimiento",
    description: "Protección de datos y cumplimiento normativo",
    technologies: ["Encriptación End-to-End", "GDPR Compliance", "Ley de Datos Chile", "Auditoría de Accesos"],
  },
  {
    icon: Zap,
    title: "Integración Hotelera",
    description: "Conectores especializados para sistemas hoteleros",
    technologies: ["PMS Integration", "Channel Managers", "Booking Engines", "CRM Systems", "Payment Gateways"],
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Tecnología de Vanguardia</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Descubre la infraestructura tecnológica que impulsa la automatización hotelera más avanzada de
              Latinoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e503f] mb-4">Stack Tecnológico</h2>
            <p className="text-xl text-gray-600">Tecnologías probadas y escalables para la industria hotelera</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#d4af37] rounded-lg flex items-center justify-center mb-6">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#5e503f] mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <div key={techIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#a31621] rounded-full mr-2"></div>
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e503f] mb-4">Arquitectura del Sistema</h2>
            <p className="text-xl text-gray-600">Diseño modular y escalable</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#5e503f] mb-2">Frontend</h3>
                <p className="text-gray-600 text-sm">Interfaces intuitivas para huéspedes y personal del hotel</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a31621] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#5e503f] mb-2">Motor IA</h3>
                <p className="text-gray-600 text-sm">Procesamiento inteligente de solicitudes y respuestas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5e503f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#5e503f] mb-2">Backend</h3>
                <p className="text-gray-600 text-sm">Integración con sistemas hoteleros y gestión de datos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
