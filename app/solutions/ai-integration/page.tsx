import { SolutionHero } from "@/components/solutions/solution-hero"
import { SolutionDetails } from "@/components/solutions/solution-details"
import { SolutionFeatures } from "@/components/solutions/solution-features"
import { SolutionCaseStudy } from "@/components/solutions/solution-case-study"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "AI Integration | Dacronyx Solutions",
  description: "Seamless integration of AI technologies with existing systems and workflows for maximum impact.",
}

const integrationData = {
  title: "AI Integration",
  subtitle: "Seamless integration of AI technologies with existing systems and workflows for maximum impact",
  description:
    "Our AI integration services ensure that advanced artificial intelligence capabilities work harmoniously with your existing technology stack, providing immediate value while minimizing disruption to current operations.",
  features: [
    {
      title: "API Development",
      description: "Custom APIs that enable seamless communication between AI models and existing systems.",
    },
    {
      title: "System Integration",
      description: "End-to-end integration with ERP, CRM, and other enterprise systems.",
    },
    {
      title: "Workflow Automation",
      description: "Intelligent automation that enhances existing business processes with AI capabilities.",
    },
    {
      title: "Legacy Modernization",
      description: "Upgrade legacy systems with modern AI capabilities while preserving existing functionality.",
    },
  ],
  caseStudy: {
    title: "Retail Inventory Optimization",
    client: "MegaRetail Chain",
    challenge: "Integrate AI demand forecasting with existing inventory management system",
    solution: "Developed custom APIs and workflow automation for seamless AI integration",
    results: ["25% inventory reduction", "15% sales increase", "Zero system downtime"],
  },
}

export default function AIIntegrationPage() {
  return (
    <>
      <SolutionHero title={integrationData.title} subtitle={integrationData.subtitle} />
      <SolutionDetails description={integrationData.description} />
      <SolutionFeatures features={integrationData.features} />
      <SolutionCaseStudy caseStudy={integrationData.caseStudy} />
      <CTA />
    </>
  )
}
