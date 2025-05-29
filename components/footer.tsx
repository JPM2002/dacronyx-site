import { Logo } from "./logo"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dacronyx-darker py-12 border-t border-dacronyx-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-dacronyx-light/70 max-w-xs">
              Bridging the gap between high-level machine learning and low-level systems execution.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-dacronyx-light/70 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-dacronyx-light/70 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-dacronyx-light/70 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-space font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/advanced-algorithms"
                  className="text-dacronyx-light/70 hover:text-white transition-colors"
                >
                  Advanced Algorithms
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/embedded-systems"
                  className="text-dacronyx-light/70 hover:text-white transition-colors"
                >
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/digital-infrastructure"
                  className="text-dacronyx-light/70 hover:text-white transition-colors"
                >
                  Digital Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/ai-integration"
                  className="text-dacronyx-light/70 hover:text-white transition-colors"
                >
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-space font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-dacronyx-light/70 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dacronyx-accent/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dacronyx-light/50 text-sm">© {new Date().getFullYear()} Dacronyx. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-dacronyx-light/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-dacronyx-light/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-dacronyx-light/50 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
