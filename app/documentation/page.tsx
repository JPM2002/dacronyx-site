import { DocumentationHero } from "@/components/documentation/documentation-hero"
import { DocumentationGrid } from "@/components/documentation/documentation-grid"

export const metadata = {
  title: "Documentation | Dacronyx",
  description: "Comprehensive documentation and guides for Dacronyx's AI solutions and APIs.",
}

export default function DocumentationPage() {
  return (
    <>
      <DocumentationHero />
      <DocumentationGrid />
    </>
  )
}
