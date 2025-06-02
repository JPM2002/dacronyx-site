"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotel: "",
    topic: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#a31621] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contacta con Nosotros</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              ¿Listo para transformar la comunicación de tu hotel? Nuestro equipo está aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#5e503f] mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del Hotel
                  </label>
                  <input
                    type="text"
                    id="hotel"
                    name="hotel"
                    value={formData.hotel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Tema de Consulta
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="demo">Agendar Demo</option>
                    <option value="technical">Soporte Técnico</option>
                    <option value="integration">Integración API</option>
                    <option value="pricing">Información de Precios</option>
                    <option value="partnership">Alianzas Comerciales</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    placeholder="Cuéntanos sobre tu hotel y cómo podemos ayudarte..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-[#5e503f] mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#d4af37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5e503f]">Oficina Principal</h3>
                      <p className="text-gray-600">Santiago, Chile</p>
                      <p className="text-gray-600">Av. Providencia 1234, Las Condes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#d4af37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5e503f]">Teléfono</h3>
                      <p className="text-gray-600">+56 2 2345 6789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#d4af37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5e503f]">Email</h3>
                      <p className="text-gray-600">contacto@hestia.com</p>
                      <p className="text-gray-600">soporte@hestia.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#d4af37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#5e503f]">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600">Soporte 24/7 para clientes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#5e503f] rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">¿Necesitas una Demo?</h3>
                <p className="text-gray-200 mb-6">
                  Agenda una demostración personalizada y descubre cómo Hestia puede transformar tu hotel.
                </p>
                <a
                  href="/consultation"
                  className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-block"
                >
                  Agendar Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
