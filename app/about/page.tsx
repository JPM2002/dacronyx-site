import { Target, Award, MapPin } from "lucide-react"

const team = [
  {
    name: "Diego Martínez",
    role: "CEO & Fundador",
    bio: "Ex-ingeniero de sistemas con 10 años en automatización hotelera.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Carmen Silva",
    role: "CTO",
    bio: "Especialista en IA y machine learning aplicado a la industria de servicios.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Roberto Vega",
    role: "Director de Producto",
    bio: "Experto en UX/UI con experiencia en plataformas empresariales.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const milestones = [
  {
    year: "2022",
    title: "Fundación de Hestia",
    description: "Inicio del desarrollo de la plataforma con enfoque en automatización hotelera.",
  },
  {
    year: "2023",
    title: "Primer Cliente",
    description: "Implementación exitosa en Hotel Boutique Santiago con 80% de reducción en tiempo de respuesta.",
  },
  {
    year: "2024",
    title: "Expansión Regional",
    description: "Más de 50 hoteles en Latinoamérica utilizando nuestra plataforma.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sobre Hestia</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Somos un equipo apasionado por transformar la industria hotelera a través de la automatización
              inteligente, hecho en Latinoamérica para el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-hestia-coffee mb-4">Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Transformar la comunicación hotelera a través de automatización inteligente, liberando recursos del
                personal y mejorando la satisfacción de los huéspedes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#a31621] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-hestia-coffee mb-4">Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser la plataforma líder de automatización hotelera en Latinoamérica, estableciendo nuevos estándares de
                eficiencia y experiencia del huésped.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5e503f] rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-hestia-coffee mb-4">Origen</h2>
              <p className="text-gray-600 leading-relaxed">
                Fundada en Chile, desarrollamos soluciones pensadas para la realidad latinoamericana con alcance global
                y tecnología de vanguardia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-hestia-coffee mb-4">Nuestra Historia</h2>
            <p className="text-xl text-gray-600">El camino hacia la automatización hotelera inteligente.</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex-1">
                  <h3 className="text-xl font-semibold text-hestia-coffee mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-hestia-coffee mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">Expertos en tecnología y hospitalidad trabajando juntos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-hestia-coffee mb-2">{member.name}</h3>
                <p className="text-[#d4af37] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
