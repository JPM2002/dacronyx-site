import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-dacronyx-accent/10 to-transparent opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with <span className="gradient-text">Intelligent AI</span>?
          </h2>
          <p className="text-dacronyx-light/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discover how Dacronyx's cutting-edge solutions can solve your most complex
            challenges and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consultation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                size="lg"
                className="border-dacronyx-accent text-white hover:bg-dacronyx-accent/10"
              >
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
