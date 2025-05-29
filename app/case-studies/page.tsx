import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesGrid } from "@/components/case-studies/case-studies-grid"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Case Studies | Dacronyx - Success Stories",
  description:
    "Explore real-world examples of how Dacronyx's AI solutions have transformed businesses across industries.",
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CTA />
    </>
  )
}
