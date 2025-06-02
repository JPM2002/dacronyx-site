import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Gerente General",
    hotel: "Hotel Boutique Santiago",
    content:
      "Hestia ha transformado completamente nuestra operación. Reducimos el tiempo de respuesta en un 80% y nuestros huéspedes están más satisfechos que nunca.",
    rating: 5,
    stats: "80% menos tiempo de respuesta",
  },
  {
    name: "Carlos Mendoza",
    role: "Director de Operaciones",
    hotel: "Resort Costa del Sol",
    content:
      "La automatización inteligente nos permite enfocarnos en brindar experiencias excepcionales mientras Hestia maneja las consultas rutinarias.",
    rating: 5,
    stats: "95% satisfacción de huéspedes",
  },
  {
    name: "Ana Rodríguez",
    role: "Propietaria",
    hotel: "Hotel Familiar Los Andes",
    content:
      "Como hotel pequeño, necesitábamos eficiencia sin perder el toque personal. Hestia nos dio exactamente eso.",
    rating: 5,
    stats: "60% aumento en upselling",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Hoteles de toda Latinoamérica confían en Hestia para mejorar su operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#d4af37] fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-[#d4af37] mb-4" />

              <p className="text-gray-200 leading-relaxed mb-6">"{testimonial.content}"</p>

              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                    <p className="text-sm text-[#d4af37]">{testimonial.hotel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#d4af37]">{testimonial.stats}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
