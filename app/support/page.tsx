import { SupportHero } from "@/components/support/support-hero"
import { SupportOptions } from "@/components/support/support-options"
import { FAQ } from "@/components/contact/faq"

export const metadata = {
  title: "Support | Dacronyx - Get Help",
  description: "Get technical support and assistance for Dacronyx AI solutions.",
}

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <SupportOptions />
      <FAQ />
    </>
  )
}
