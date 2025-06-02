import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#5e503f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">Hestia</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos la comunicación hotelera a través de automatización inteligente, liberando recursos del
              personal y mejorando la satisfacción de los huéspedes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/advanced-algorithms"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  Algoritmos Avanzados
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/embedded-systems"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  Sistemas Embebidos
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/digital-infrastructure"
                  className="text-gray-300 hover:text-[#d4af37] transition-colors"
                >
                  Infraestructura Digital
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-integration" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Integración IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 Hestia. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-[#d4af37] text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#d4af37] text-sm transition-colors">
                Términos
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-[#d4af37] text-sm transition-colors">
                Soporte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
