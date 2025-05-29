import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 bg-dacronyx-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-dacronyx-dark/50 backdrop-blur-sm border-dacronyx-accent/10 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-dacronyx-accent/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-dacronyx-accent2" />
            </div>
            <h3 className="font-space text-2xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-dacronyx-light/70 mb-6">
              Subscribe to our newsletter for the latest news, insights, and updates from Dacronyx.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-dacronyx-dark border border-dacronyx-accent/20 rounded-lg text-white placeholder-dacronyx-light/50 focus:border-dacronyx-accent focus:outline-none"
              />
              <Button className="bg-gradient-to-r from-dacronyx-accent to-dacronyx-accent2 hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
