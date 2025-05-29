import { ConsultationHero } from "@/components/consultation/consultation-hero"
import { ConsultationForm } from "@/components/consultation/consultation-form"
import { ConsultationProcess } from "@/components/consultation/consultation-process"

export const metadata = {
  title: "Schedule Consultation | Dacronyx",
  description:
    "Schedule a consultation with our AI experts to discuss your specific needs and explore how Dacronyx can help transform your business.",
}

export default function ConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ConsultationForm />
        <ConsultationProcess />
      </div>
    </>
  )
}
