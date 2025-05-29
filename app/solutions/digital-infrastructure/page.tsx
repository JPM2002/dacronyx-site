import { SolutionHero } from "@/components/solutions/solution-hero"
import { SolutionDetails } from "@/components/solutions/solution-details"
import { SolutionFeatures } from "@/components/solutions/solution-features"
import { SolutionCaseStudy } from "@/components/solutions/solution-case-study"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Digital Infrastructure | Dacronyx Solutions",
  description: "Scalable and secure infrastructure designed to support intensive AI workloads and data processing.",
}

const infrastructureData = {
  title: "Digital Infrastructure",
  subtitle: "Scalable and secure infrastructure designed to support intensive AI workloads and data processing",
  description:
    "Our digital infrastructure solutions provide the robust foundation needed for enterprise-scale AI deployments, featuring auto-scaling capabilities, advanced security, and optimized performance for machine learning workloads.",
  features: [
    {
      title: "Cloud Architecture",
      description: "Multi-cloud and hybrid cloud architectures designed for AI workload optimization.",
    },
    {
      title: "Data Pipelines",
      description: "Automated data ingestion, processing, and management pipelines for ML workflows.",
    },
    {
      title: "Scalable Computing",
      description: "Auto-scaling compute resources that adapt to varying AI processing demands.",
    },
    {
      title: "Security Protocols",
      description: "Enterprise-grade security with encryption, access controls, and compliance frameworks.",
    },
  ],
  caseStudy: {
    title: "Financial Services Platform",
    client: "GlobalBank Corp",
    challenge: "Scale fraud detection system to handle 10M+ transactions daily",
    solution: "Built cloud-native infrastructure with auto-scaling ML pipelines",
    results: ["10x processing capacity", "50% cost reduction", "99.99% availability"],
  },
}

export default function DigitalInfrastructurePage() {
  return (
    <>
      <SolutionHero title={infrastructureData.title} subtitle={infrastructureData.subtitle} />
      <SolutionDetails description={infrastructureData.description} />
      <SolutionFeatures features={infrastructureData.features} />
      <SolutionCaseStudy caseStudy={infrastructureData.caseStudy} />
      <CTA />
    </>
  )
}
