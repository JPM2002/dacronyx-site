import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </>
  )
}
