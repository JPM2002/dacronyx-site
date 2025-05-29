import { NewsHero } from "@/components/news/news-hero"
import { NewsGrid } from "@/components/news/news-grid"
import { Newsletter } from "@/components/news/newsletter"

export const metadata = {
  title: "News | Dacronyx - Latest Updates",
  description: "Stay updated with the latest news, announcements, and insights from Dacronyx.",
}

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsGrid />
      <Newsletter />
    </>
  )
}
