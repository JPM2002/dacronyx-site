import { TechHero } from "@/components/technology/tech-hero"
import { TechStack } from "@/components/technology/tech-stack"
import { Innovation } from "@/components/technology/innovation"
import { Research } from "@/components/technology/research"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Technology | Dacronyx - Cutting-Edge AI Technology",
  description: "Discover the advanced technologies and methodologies that power Dacronyx's intelligent AI solutions.",
}

export default function TechnologyPage() {
  return (
    <>
      <TechHero />
      <TechStack />
      <Innovation />
      <Research />
      <CTA />
    </>
  )
}
