export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5e503f] to-[#7e6651] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tu privacidad es fundamental para nosotros. Conoce cómo protegemos y manejamos tu información.
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

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-6">
                Recopilamos información que nos proporcionas directamente, como cuando te registras para una cuenta,
                solicitas una demostración, o te comunicas con nosotros. Esto incluye nombre, email, información del
                hotel, y datos de comunicación con huéspedes (cuando corresponda).
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">2. Cómo Usamos tu Información</h2>
              <p className="text-gray-700 mb-6">
                Utilizamos la información para proporcionar, mantener y mejorar nuestros servicios, procesar
                transacciones, enviar comunicaciones relacionadas con el servicio, y cumplir con obligaciones legales.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">3. Compartir Información</h2>
              <p className="text-gray-700 mb-6">
                No vendemos, alquilamos o compartimos tu información personal con terceros para fines comerciales.
                Podemos compartir información en casos limitados como cumplimiento legal o protección de derechos.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">4. Seguridad de Datos</h2>
              <p className="text-gray-700 mb-6">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
                contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">5. Tus Derechos</h2>
              <p className="text-gray-700 mb-6">
                Tienes derecho a acceder, actualizar, corregir o eliminar tu información personal. También puedes
                objetar ciertos procesamientos de datos o solicitar la portabilidad de datos.
              </p>

              <h2 className="text-2xl font-bold text-[#5e503f] mb-4">6. Contacto</h2>
              <p className="text-gray-700">
                Si tienes preguntas sobre esta política de privacidad, contáctanos en{" "}
                <a href="mailto:privacidad@hestia.com" className="text-[#a31621] hover:underline">
                  privacidad@hestia.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
