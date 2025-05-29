import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { FAQ } from "@/components/contact/faq"

export const metadata = {
  title: "Contact | Dacronyx - Get in Touch",
  description:
    "Contact Dacronyx to discuss your AI needs and discover how our intelligent solutions can transform your business.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <FAQ />
    </>
  )
}
