"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hestia-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-hestia-coffee">Hestia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/technology" className="text-gray-700 hover:text-hestia-red transition-colors">
              Tecnología
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-hestia-red transition-colors">
              Nosotros
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-hestia-red transition-colors">
              Casos de Éxito
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-hestia-red transition-colors">
              Contacto
            </Link>
            <Link
              href="/consultation"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Agendar Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-hestia-red"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/technology" className="text-gray-700 hover:text-hestia-red">
                Tecnología
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-hestia-red">
                Nosotros
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-hestia-red">
                Casos de Éxito
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-hestia-red">
                Contacto
              </Link>
              <Link
                href="/consultation"
                className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-block text-center"
              >
                Agendar Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
