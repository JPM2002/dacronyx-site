import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

const newsArticles = [
  {
    title: "Dacronyx Raises $50M Series B to Accelerate AI Innovation",
    excerpt: "Funding will support expansion of our research team and development of next-generation AI platforms.",
    date: "2024-03-15",
    category: "Company News",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "New Partnership with Leading Automotive Manufacturer",
    excerpt: "Collaboration will bring advanced AI capabilities to autonomous vehicle systems.",
    date: "2024-03-10",
    category: "Partnerships",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Dacronyx AI Platform Wins Innovation Award at TechCrunch Disrupt",
    excerpt: "Recognition for breakthrough advances in edge AI and embedded systems technology.",
    date: "2024-03-05",
    category: "Awards",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Research Paper Published in Nature Machine Intelligence",
    excerpt: "Our team's work on quantum-inspired algorithms gains recognition in top-tier journal.",
    date: "2024-02-28",
    category: "Research",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Opening New European Headquarters in London",
    excerpt: "Expansion supports growing demand for AI solutions across European markets.",
    date: "2024-02-20",
    category: "Company News",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "CEO Sarah Chen Named to Forbes 30 Under 30",
    excerpt: "Recognition for leadership in artificial intelligence and technology innovation.",
    date: "2024-02-15",
    category: "Leadership",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function NewsGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-dacronyx-accent/20 text-dacronyx-accent2 text-xs rounded-md">
                      {article.category}
                    </span>
                    <div className="flex items-center text-dacronyx-light/60 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="font-space text-lg font-bold mb-3 text-white group-hover:text-dacronyx-accent2 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-dacronyx-light/70 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-dacronyx-accent2 text-sm group-hover:text-white transition-colors">
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
