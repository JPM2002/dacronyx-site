"use client"

import { useState } from "react"
import { MessageSquare, Phone, Mail, Book, Search, ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo se integra Hestia con nuestro PMS actual?",
    answer:
      "Hestia se conecta con los principales sistemas PMS a través de APIs estándar. Nuestro equipo técnico maneja toda la integración sin interrumpir sus operaciones actuales.",
  },
  {
    question: "¿Qué tan segura es la información de nuestros huéspedes?",
    answer:
      "Utilizamos encriptación end-to-end y cumplimos con GDPR y la Ley de Protección de Datos de Chile. Todos los datos se almacenan en servidores certificados con auditorías regulares de seguridad.",
  },
  {
    question: "¿Cuánto tiempo toma implementar Hestia?",
    answer:
      "La implementación típica toma entre 2-4 semanas, dependiendo del tamaño del hotel y las integraciones requeridas. Incluye configuración, capacitación del personal y período de prueba.",
  },
  {
    question: "¿El sistema funciona en múltiples idiomas?",
    answer:
      "Sí, Hestia soporta español, inglés, portugués y francés de forma nativa, con capacidad de traducción automática para otros idiomas según las necesidades del hotel.",
  },
  {
    question: "¿Qué sucede si el sistema falla?",
    answer:
      "Tenemos redundancia completa y backup automático. En caso de falla, el sistema se restaura automáticamente. Además, ofrecemos soporte 24/7 para clientes activos.",
  },
]

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Centro de Soporte</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Encuentra respuestas rápidas o contacta directamente con nuestro equipo de soporte especializado.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5e503f] mb-4">Chat en Vivo</h3>
              <p className="text-gray-600 mb-6">Soporte inmediato para clientes activos</p>
              <button className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Iniciar Chat
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#a31621] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5e503f] mb-4">Soporte Telefónico</h3>
              <p className="text-gray-600 mb-6">Lunes a Viernes, 9:00 - 18:00</p>
              <button className="bg-[#a31621] hover:bg-[#6b0f1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                +56 2 2345 6789
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#5e503f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#5e503f] mb-4">Email</h3>
              <p className="text-gray-600 mb-6">Respuesta en menos de 24 horas</p>
              <button className="bg-[#5e503f] hover:bg-[#7e6651] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                soporte@hestia.com
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-8">
              <Book className="w-8 h-8 text-[#d4af37] mr-3" />
              <h2 className="text-2xl font-bold text-[#5e503f]">Preguntas Frecuentes</h2>
            </div>

            {/* Search */}
            <div className="relative mb-8">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#5e503f]">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No se encontraron preguntas que coincidan con tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
