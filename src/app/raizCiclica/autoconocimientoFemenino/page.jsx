export default function ReconexionCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
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
                <h1 className="text-3xl font-bold leading-tight">Re-conexión y autoconocimiento femenino</h1>
              </div>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              Para mujeres que quieran fortalecer su cuerpo, activar su centro y explorar su voz y su energía.
            </p>
          </div>

          {/* Contenido principal */}
          <div className="p-8 space-y-8">
            {/* Sección: Incluye */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Incluye:</h2>
              <div className="space-y-6">
                {/* Clase de Hatha Yoga */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-2xl mr-2">🧘‍♀️</span>
                      <strong>1 clase online sincrónica de Hatha Yoga a la semana</strong>
                    </p>
                    <div className="mt-2 inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-lg font-medium">
                      Lunes 21:00 a 22:00 hrs
                    </div>
                  </div>
                </div>

                {/* Clases grabadas de core */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-2xl mr-2">🎥</span>
                      <strong>3 clases grabadas de core e hipopresivos</strong>, para rehabilitación y activación de
                      faja abdominal
                    </p>
                  </div>
                </div>

                {/* Clase de voz y piso pélvico */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-2xl mr-2">🎶</span>
                      <strong>1 clase sincrónica mensual de uso de la voz</strong> más activación y autoconocimiento de
                      piso pélvico.
                    </p>
                  </div>
                </div>

                {/* Espacios de exploración */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-2xl mr-2">🌿</span>
                      <strong>Espacios de exploración y autoconocimiento</strong> desde la Gestalt y la conciencia
                      corporal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed">
                <strong>Todas nuestras clases quedan grabadas</strong> y puedes acceder a ellas durante 3 meses.
              </p>
            </div>

            {/* Botón CTA */}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                Unirme al programa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
