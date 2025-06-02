import { MapPin, Clock, Users, Zap } from "lucide-react"

const openings = [
  {
    title: "Desarrollador Full Stack",
    department: "Ingeniería",
    location: "Santiago, Chile",
    type: "Tiempo Completo",
    description: "Únete a nuestro equipo para desarrollar la próxima generación de automatización hotelera.",
    requirements: ["React/Next.js", "Node.js", "PostgreSQL", "AWS/Azure", "Experiencia en APIs"],
  },
  {
    title: "Especialista en IA/ML",
    department: "Producto",
    location: "Remoto",
    type: "Tiempo Completo",
    description:
      "Desarrolla modelos de IA especializados en comunicación hotelera y procesamiento de lenguaje natural.",
    requirements: ["Python", "TensorFlow/PyTorch", "NLP", "Machine Learning", "Experiencia en chatbots"],
  },
  {
    title: "Customer Success Manager",
    department: "Ventas",
    location: "Santiago, Chile",
    type: "Tiempo Completo",
    description: "Ayuda a nuestros clientes hoteleros a maximizar el valor de nuestra plataforma.",
    requirements: ["Experiencia en hospitalidad", "Gestión de cuentas", "Comunicación", "Análisis de datos"],
  },
]

const benefits = [
  {
    icon: Users,
    title: "Equipo Diverso",
    description: "Trabaja con profesionales de tecnología y hospitalidad",
  },
  {
    icon: Zap,
    title: "Crecimiento Rápido",
    description: "Oportunidades de desarrollo en una startup en expansión",
  },
  {
    icon: MapPin,
    title: "Flexibilidad",
    description: "Opciones de trabajo remoto e híbrido",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Horarios flexibles y vacaciones ilimitadas",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#a31621] to-[#6b0f1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Únete a Hestia</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ayúdanos a transformar la industria hotelera con tecnología de vanguardia y un equipo excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e503f] mb-4">¿Por qué trabajar en Hestia?</h2>
            <p className="text-xl text-gray-600">Beneficios y cultura que nos hacen únicos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#5e503f] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#5e503f] mb-4">Posiciones Abiertas</h2>
            <p className="text-xl text-gray-600">Encuentra tu próxima oportunidad profesional</p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-[#5e503f]">{job.title}</h3>
                      <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="bg-white border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-700"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="bg-[#a31621] hover:bg-[#6b0f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
