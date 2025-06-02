import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    title: "Hestia alcanza 100 hoteles en Latinoamérica",
    date: "15 de Noviembre, 2024",
    category: "Milestone",
    excerpt: "Celebramos este importante hito en nuestra misión de automatizar la comunicación hotelera en la región.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Nueva integración con sistemas PMS líderes",
    date: "2 de Noviembre, 2024",
    category: "Producto",
    excerpt: "Anunciamos conectores nativos con Opera, Protel y otros sistemas de gestión hotelera principales.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Expansión a Colombia y Perú",
    date: "20 de Octubre, 2024",
    category: "Expansión",
    excerpt: "Iniciamos operaciones en dos nuevos mercados con socios locales estratégicos.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Reconocimiento como Startup del Año en HospitalityTech",
    date: "5 de Octubre, 2024",
    category: "Premio",
    excerpt: "Hestia fue reconocida por su innovación en automatización hotelera en la conferencia regional.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Noticias y Actualizaciones</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mantente al día con los últimos desarrollos, hitos y novedades de Hestia.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-[#5e503f] mb-3">{article.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                  <button className="flex items-center text-[#a31621] hover:text-[#6b0f1a] font-medium transition-colors">
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
