export default function DolorPelvicoCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDD0B2]/30 via-[#EDD0B2]/20 to-[#EDD0B2]/10 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ED4137] to-[#E22727] p-8 text-white">
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
                <h1 className="text-3xl font-bold">Dolor pélvico y sexualidad en el posparto</h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <p className="text-[#2D2D2D] leading-relaxed text-balance">
                El postparto es una etapa de grandes transformaciones, y en muchas ocasiones también pueden aparecer
                molestias o dolores en la zona íntima que afectan la vida diaria y la sexualidad. Este programa está
                diseñado para acompañarte en la sanación y reconexión con tu cuerpo, entregándote herramientas
                personalizadas para recuperar confianza, bienestar y placer.
              </p>
            </div>

            {/* En nuestras sesiones trabajaremos */}
            <div>
              <h2 className="text-2xl font-semibold text-[#4E2226] mb-4">En nuestras sesiones trabajaremos:</h2>
              <div className="space-y-3">
                {[
                  "Reconexión con el piso pélvico, favoreciendo la conciencia corporal y el alivio de tensiones.",
                  "Manejo de cicatrices (episiotomía o desgarros) para mejorar la movilidad, soltar adherencias y disminuir el dolor.",
                  "Acompañamiento en casos de dolor pélvico como dispareunia, vaginismo o vulvodinia, con un abordaje integral y respetuoso.",
                  "Recuperación de la sexualidad desde un enfoque de autocuidado, placer y confianza.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#ED4137] to-[#E22727] flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#2D2D2D] leading-relaxed flex-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Este espacio es para ti */}
            <div className="bg-[#EDD0B2]/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#4E2226] mb-3">Este espacio es para ti si deseas:</h3>
              <p className="text-[#2D2D2D] leading-relaxed">
                Volver a habitar tu cuerpo con seguridad, sanar desde lo profundo y reconectar con tu intimidad en el
                posparto.
              </p>
            </div>

            {/* Información adicional */}
            <div className="bg-gradient-to-r from-[#EDD0B2]/20 to-[#EDD0B2]/10 rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#ED4137] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-[#2D2D2D] leading-relaxed">
                  <span className="font-semibold">Reembolsable</span> con isapre y/o seguro médico.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#ED4137] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-[#2D2D2D] leading-relaxed">
                  Consulta por nuestros programas, puedes tomar de{" "}
                  <span className="font-semibold">1, 5 o 10 sesiones</span>.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-[#ED4137] to-[#E22727] text-white font-semibold py-4 px-8 rounded-xl hover:from-[#E22727] hover:to-[#E22727] transition-all duration-300 shadow-lg hover:shadow-xl">
                Agendar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
