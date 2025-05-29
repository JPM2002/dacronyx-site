import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Edge AI: Bringing Intelligence to IoT Devices",
    excerpt:
      "Exploring how edge computing is revolutionizing AI deployment and enabling real-time intelligence in resource-constrained environments.",
    author: "Dr. Sarah Chen",
    date: "2024-03-20",
    category: "Technology",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Quantum-Inspired Algorithms: A New Paradigm for Optimization",
    excerpt:
      "How quantum computing principles are inspiring new approaches to solving complex optimization problems in classical computing.",
    author: "Michael Rodriguez",
    date: "2024-03-18",
    category: "Research",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Ethical AI Development: Building Responsible Systems",
    excerpt: "Best practices for developing AI systems that are fair, transparent, and aligned with human values.",
    author: "Dr. Aisha Johnson",
    date: "2024-03-15",
    category: "Ethics",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Scaling AI Infrastructure: Lessons from Enterprise Deployments",
    excerpt:
      "Key insights and best practices for scaling AI systems to handle enterprise-level workloads and data volumes.",
    author: "David Kim",
    date: "2024-03-12",
    category: "Infrastructure",
    readTime: "15 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Computer Vision in Manufacturing: Real-World Applications",
    excerpt: "How computer vision is transforming quality control and automation in modern manufacturing environments.",
    author: "Dr. Sarah Chen",
    date: "2024-03-10",
    category: "Applications",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Role of Human-AI Collaboration in Problem Solving",
    excerpt:
      "Examining how humans and AI systems can work together to achieve better outcomes than either could alone.",
    author: "Michael Rodriguez",
    date: "2024-03-08",
    category: "Collaboration",
    readTime: "11 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function BlogGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-dacronyx-darker/50 backdrop-blur-sm border border-dacronyx-accent/10 hover:border-dacronyx-accent/30 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-dacronyx-accent/20 text-dacronyx-accent2 text-xs rounded-md">
                      {post.category}
                    </span>
                    <span className="text-dacronyx-light/60 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-space text-lg font-bold mb-3 text-white group-hover:text-dacronyx-accent2 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-dacronyx-light/70 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-dacronyx-light/60 text-xs">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                      <Calendar className="h-3 w-3 ml-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-dacronyx-accent2 text-sm group-hover:text-white transition-colors">
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
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
