import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { Team } from "@/components/about/team"
import { Values } from "@/components/about/values"
import { Timeline } from "@/components/about/timeline"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "About | Dacronyx - Leading AI Innovation",
  description:
    "Learn about Dacronyx's mission to bridge the gap between high-level machine learning and low-level systems execution.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Timeline />
      <Team />
      <CTA />
    </>
  )
}
