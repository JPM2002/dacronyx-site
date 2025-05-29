import { SolutionHero } from "@/components/solutions/solution-hero"
import { SolutionDetails } from "@/components/solutions/solution-details"
import { SolutionFeatures } from "@/components/solutions/solution-features"
import { SolutionCaseStudy } from "@/components/solutions/solution-case-study"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Embedded Systems | Dacronyx Solutions",
  description: "Intelligent hardware solutions that bring AI capabilities to edge devices and IoT applications.",
}

const embeddedData = {
  title: "Embedded Systems",
  subtitle: "Intelligent hardware solutions that bring AI capabilities to edge devices and IoT applications",
  description:
    "Our embedded systems solutions combine cutting-edge AI algorithms with optimized hardware implementations, enabling real-time intelligence at the edge with minimal power consumption and maximum efficiency.",
  features: [
    {
      title: "Edge Computing",
      description: "Deploy AI models directly on edge devices for real-time processing without cloud dependency.",
    },
    {
      title: "Real-time Processing",
      description: "Ultra-low latency AI inference for time-critical applications and autonomous systems.",
    },
    {
      title: "IoT Integration",
      description: "Seamless integration with IoT ecosystems for intelligent sensor networks and automation.",
    },
    {
      title: "Hardware Optimization",
      description: "Custom silicon and FPGA implementations optimized for specific AI workloads.",
    },
  ],
  caseStudy: {
    title: "Smart Manufacturing Sensors",
    client: "IndustrialTech Solutions",
    challenge: "Monitor equipment health in real-time across 500+ machines",
    solution: "Deployed edge AI sensors with predictive maintenance algorithms",
    results: ["60% reduction in downtime", "40% lower maintenance costs", "99.2% uptime achieved"],
  },
}

export default function EmbeddedSystemsPage() {
  return (
    <>
      <SolutionHero title={embeddedData.title} subtitle={embeddedData.subtitle} />
      <SolutionDetails description={embeddedData.description} />
      <SolutionFeatures features={embeddedData.features} />
      <SolutionCaseStudy caseStudy={embeddedData.caseStudy} />
      <CTA />
    </>
  )
}
