import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { Newsletter } from "@/components/news/newsletter"

export const metadata = {
  title: "Blog | Dacronyx - AI Insights & Trends",
  description: "Stay informed with the latest insights, trends, and thought leadership in artificial intelligence.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <Newsletter />
    </>
  )
}
