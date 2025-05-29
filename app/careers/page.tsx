import { CareersHero } from "@/components/careers/careers-hero"
import { OpenPositions } from "@/components/careers/open-positions"
import { Benefits } from "@/components/careers/benefits"
import { Culture } from "@/components/careers/culture"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "Careers | Dacronyx - Join Our Team",
  description:
    "Join Dacronyx and help shape the future of AI. Explore career opportunities with a leading AI innovation company.",
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Culture />
      <Benefits />
      <OpenPositions />
      <CTA />
    </>
  )
}
