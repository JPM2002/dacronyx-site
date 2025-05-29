import { SolutionHero } from "@/components/solutions/solution-hero"
import { SolutionDetails } from "@/components/solutions/solution-details"
import { SolutionFeatures } from "@/components/solutions/solution-features"
import { SolutionCaseStudy } from "@/components/solutions/solution-case-study"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Advanced Algorithms | Dacronyx Solutions",
  description:
    "Cutting-edge machine learning algorithms tailored to solve complex business challenges with precision and efficiency.",
}

const algorithmData = {
  title: "Advanced Algorithms",
  subtitle: "Cutting-edge machine learning algorithms tailored to solve complex business challenges",
  description:
    "Our advanced algorithms leverage the latest breakthroughs in machine learning, deep learning, and artificial intelligence to deliver unprecedented accuracy and performance for your most challenging problems.",
  features: [
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting models that help you anticipate trends and make data-driven decisions.",
    },
    {
      title: "Deep Learning Models",
      description: "Neural networks designed for complex pattern recognition and automated decision making.",
    },
    {
      title: "Computer Vision",
      description: "State-of-the-art image and video analysis for quality control and automated inspection.",
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis and language understanding for customer insights and automation.",
    },
  ],
  caseStudy: {
    title: "Manufacturing Quality Control",
    client: "TechManufacture Inc.",
    challenge: "Reduce defect rates in high-volume production line",
    solution: "Implemented computer vision algorithms for real-time quality inspection",
    results: ["35% reduction in defects", "50% faster inspection process", "99.7% accuracy rate"],
  },
}

export default function AdvancedAlgorithmsPage() {
  return (
    <>
      <SolutionHero title={algorithmData.title} subtitle={algorithmData.subtitle} />
      <SolutionDetails description={algorithmData.description} />
      <SolutionFeatures features={algorithmData.features} />
      <SolutionCaseStudy caseStudy={algorithmData.caseStudy} />
      <CTA />
    </>
  )
}
