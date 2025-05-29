import { Hero } from "@/components/solutions/hero"
import { SolutionsGrid } from "@/components/solutions/solutions-grid"
import { ProcessSection } from "@/components/solutions/process-section"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Solutions | Dacronyx - Intelligent AI Solutions",
  description:
    "Explore Dacronyx's comprehensive AI solutions including advanced algorithms, embedded systems, digital infrastructure, and AI integration services.",
}

export default function SolutionsPage() {
  return (
    <>
      <Hero />
      <SolutionsGrid />
      <ProcessSection />
      <CTA />
    </>
  )
}
