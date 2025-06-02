import { Calendar, User, ArrowRight } from "lucide-react"

const posts = [
  {
    title: "El Futuro de la Comunicación Hotelera: IA y Automatización",
    author: "Diego Martínez",
    date: "10 de Noviembre, 2024",
    category: "Tendencias",
    excerpt:
      "Exploramos cómo la inteligencia artificial está transformando la manera en que los hoteles se comunican con sus huéspedes.",
    readTime: "5 min",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Cómo Implementar WhatsApp Business en tu Hotel",
    author: "Carmen Silva",
    date: "25 de Octubre, 2024",
    category: "Guía",
    excerpt: "Una guía paso a paso para integrar WhatsApp Business en la comunicación de tu hotel de manera efectiva.",
    readTime: "8 min",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "ROI de la Automatización Hotelera: Casos Reales",
    author: "Roberto Vega",
    date: "15 de Octubre, 2024",
    category: "Análisis",
    excerpt:
      "Analizamos el retorno de inversión real que obtienen los hoteles al implementar sistemas de automatización.",
    readTime: "6 min",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Tendencias en Experiencia del Huésped 2024",
    author: "Diego Martínez",
    date: "1 de Octubre, 2024",
    category: "Tendencias",
    excerpt: "Las principales tendencias que están definiendo las expectativas de los huéspedes en la era digital.",
    readTime: "7 min",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#a31621] to-[#6b0f1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog de Hestia</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Insights, tendencias y mejores prácticas en automatización hotelera y experiencia del huésped.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {posts[0].category}
                    </span>
                    <span className="text-sm text-gray-500">{posts[0].readTime} lectura</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#5e503f] mb-4">{posts[0].title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{posts[0].author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{posts[0].date}</span>
                    </div>
                    <button className="flex items-center text-[#a31621] hover:text-[#6b0f1a] font-medium transition-colors">
                      <span>Leer artículo</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#5e503f]">Artículos Recientes</h3>
              {posts.slice(1).map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-[#5e503f] mb-2 line-clamp-2">{post.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
