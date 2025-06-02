export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#a31621] to-[#6b0f1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Términos de Servicio</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Términos y condiciones que rigen el uso de la plataforma Hestia.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Última actualización:</strong> 1 de Noviembre, 2024
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">1. Aceptación de Términos</h2>
              <p className="text-gray-700 mb-6">
                Al acceder y usar los servicios de Hestia, aceptas estar sujeto a estos términos de servicio y todas las
                leyes y regulaciones aplicables.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-700 mb-6">
                Hestia proporciona una plataforma de automatización de comunicación para hoteles, incluyendo asistentes
                virtuales, gestión de mensajes omnicanal y herramientas de análisis.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">3. Uso Aceptable</h2>
              <p className="text-gray-700 mb-6">
                Te comprometes a usar nuestros servicios solo para fines legales y de acuerdo con estos términos. No
                puedes usar el servicio para actividades fraudulentas, spam, o cualquier actividad que viole leyes
                aplicables.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">4. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-6">
                Todos los derechos, títulos e intereses en y para el servicio permanecen con Hestia. Se te otorga una
                licencia limitada, no exclusiva y revocable para usar el servicio.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-6">
                Hestia no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten
                del uso o la incapacidad de usar el servicio.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">6. Modificaciones</h2>
              <p className="text-gray-700 mb-6">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                vigor inmediatamente después de su publicación.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">7. Contacto</h2>
              <p className="text-gray-700">
                Para preguntas sobre estos términos, contáctanos en{" "}
                <a href="mailto:legal@hestia.com" className="text-[#a31621] hover:underline">
                  legal@hestia.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
