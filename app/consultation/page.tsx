"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users, Zap } from "lucide-react"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "",
    position: "",
    hotelSize: "",
    guestFlow: "",
    currentTools: "",
    challenges: "",
    preferredDate: "",
    preferredTime: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consultation request:", formData)
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
      <section className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Agenda tu Consulta Gratuita</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Descubre cómo Hestia puede automatizar la comunicación de tu hotel y mejorar la experiencia de tus
              huéspedes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#5e503f] mb-2">Demo Personalizada</h3>
              <p className="text-gray-600">Adaptada a las necesidades específicas de tu hotel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a31621] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#5e503f] mb-2">Análisis Gratuito</h3>
              <p className="text-gray-600">Evaluación de tu operación actual y oportunidades de mejora</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5e503f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#5e503f] mb-2">Consultoría Experta</h3>
              <p className="text-gray-600">Recomendaciones de nuestros especialistas en hospitalidad</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#5e503f] mb-8 text-center">Información de tu Hotel</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
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
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Ej: Gerente General, Director de Operaciones"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Hotel Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del Hotel *
                  </label>
                  <input
                    type="text"
                    id="hotel"
                    name="hotel"
                    value={formData.hotel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hotelSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Tamaño del Hotel
                  </label>
                  <select
                    id="hotelSize"
                    name="hotelSize"
                    value={formData.hotelSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                  >
                    <option value="">Selecciona el tamaño</option>
                    <option value="small">Pequeño (1-50 habitaciones)</option>
                    <option value="medium">Mediano (51-150 habitaciones)</option>
                    <option value="large">Grande (151-300 habitaciones)</option>
                    <option value="enterprise">Corporativo (300+ habitaciones)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guestFlow" className="block text-sm font-medium text-gray-700 mb-2">
                  Flujo de Huéspedes Mensual (aproximado)
                </label>
                <select
                  id="guestFlow"
                  name="guestFlow"
                  value={formData.guestFlow}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                >
                  <option value="">Selecciona el flujo</option>
                  <option value="low">Bajo (menos de 500 huéspedes/mes)</option>
                  <option value="medium">Medio (500-2000 huéspedes/mes)</option>
                  <option value="high">Alto (2000-5000 huéspedes/mes)</option>
                  <option value="very-high">Muy Alto (más de 5000 huéspedes/mes)</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentTools" className="block text-sm font-medium text-gray-700 mb-2">
                  Herramientas Actuales
                </label>
                <textarea
                  id="currentTools"
                  name="currentTools"
                  rows={3}
                  value={formData.currentTools}
                  onChange={handleChange}
                  placeholder="Ej: PMS Opera, WhatsApp manual, email, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Principales Desafíos
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  rows={4}
                  value={formData.challenges}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre los desafíos actuales en la comunicación con huéspedes..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                ></textarea>
              </div>

              {/* Scheduling */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-[#5e503f] mb-4">Preferencias de Reunión</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha Preferida
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Horario Preferido
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                    >
                      <option value="">Selecciona horario</option>
                      <option value="morning">Mañana (9:00 - 12:00)</option>
                      <option value="afternoon">Tarde (14:00 - 17:00)</option>
                      <option value="evening">Noche (18:00 - 20:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-200 text-lg"
              >
                Agendar Consulta Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
