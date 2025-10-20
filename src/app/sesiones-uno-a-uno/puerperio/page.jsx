export default function PuerperioCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Programa personalizado: "Puerperio y re-conexión"
                </h1>
                <p className="text-rose-100 text-lg mt-2">
                  Kinesiología en el puerperio y rehabilitación de piso pélvico
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <p className="text-gray-700 leading-relaxed text-lg">
                En este servicio, cada sesión está diseñada para ayudarte a recuperar tu cuerpo con suavidad, liberar
                tensiones, fortalecer y activar tu piso pélvico, dar espacio al proceso emocional que estás viviendo.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Durante nuestras sesiones, nos enfocaremos en técnicas de Kinesiología específicas para mejorar la
                movilidad, aliviar el dolor y restaurar la funcionalidad de tu cuerpo y piso pélvico tras el parto. A
                través de ejercicios personalizados, aprenderás a escuchar y cuidar de ti misma, integrando prácticas de
                respiración y relajación que te ayudarán a conectarte con tu bienestar físico y emocional. Además,
                fomentamos un entorno de apoyo donde podrás compartir tus experiencias, en nuestra comunidad de
                whatsapp, fortaleciendo así los lazos con otras madres. Cada paso de este proceso es un acto de amor
                hacia ti y tu bebé.
              </p>
            </div>

            {/* Services Included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Este servicio incluye:</h2>
              <div className="space-y-3">
                {[
                  "Evaluación inicial personalizada para entender tus necesidades y objetivos.",
                  "Sesiones de Kinesiología enfocadas en la recuperación postparto.",
                  "Ejercicios específicos para fortalecer y activar el piso pélvico.",
                  "Técnicas de liberación de tensiones, manejo de cicatriz y mejora de la movilidad.",
                  "Prácticas de respiración y relajación para el bienestar emocional.",
                  "Apoyo y acompañamiento en un ambiente de comunidad con otras mamás.",
                  "Recursos educativos sobre el cuidado del cuerpo en el postparto.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For You Section */}
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Este espacio es para ti si:</h3>
              <p className="text-gray-700 leading-relaxed">
                Quieres re-conectar con tu cuerpo físico, energético y espiritual, ya que exploraremos el funcionamiento
                de este nuevo cuerpo.
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-pink-50 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Reembolsable</span> con isapre y/o seguro médico.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  Consulta por nuestros programas, puedes tomar de{" "}
                  <span className="font-semibold">1, 5 o 10 sesiones</span>.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Agendar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
