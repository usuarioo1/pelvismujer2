export default function TallerInstintoCard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold leading-tight">Taller "Instinto"</h1>
                                <p className="text-pink-100 text-lg mt-1">
                                    Para preparar tu cuerpo desde la conexión y el uso de la voz
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        {/* Description */}
                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                INSTINTO es un taller online donde te acompaño a organizar lo que realmente necesitas para tu parto:
                                desde el check list práctico, hasta la conexión profunda con tu cuerpo y tu voz. A través del vincular
                                tu cuerpo, mente y espíritu a través del movimiento, la conciencia corporal y la vocalización,
                                exploremos juntas cómo prepararte para entrar al planeta parto con confianza, presencia e intuición.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                El taller incluye un plan del parto y el acceso a nuestra comunidad de whats app "mamás en tribu".
                            </p>
                        </div>

                        {/* Detalles del Taller */}
                        <div className="bg-purple-50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-purple-900 mb-4">Detalles del Taller</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
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
                                    <div>
                                        <p className="font-semibold text-purple-900">Duración</p>
                                        <p className="text-purple-700">3 horas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-pink-900">Modalidad</p>
                                        <p className="text-pink-700">Online grupal</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-rose-900">Horario</p>
                                        <p className="text-rose-700">Último Jueves de cada mes a las 17:00 hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Este taller es para ti */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Este taller es para ti, si deseas:</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl flex-shrink-0">🌿</span>
                                    <p className="text-gray-700 leading-relaxed">
                                        Guía de preparación de espacios y saber que necesito para el momento del parto.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl flex-shrink-0">🌿</span>
                                    <p className="text-gray-700 leading-relaxed">
                                        Exploración física y energética del cuerpo desde la intimidad.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl flex-shrink-0">🌿</span>
                                    <p className="text-gray-700 leading-relaxed">
                                        Posturas y ejercicios de movimiento consciente para el trabajo de parto.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl flex-shrink-0">🌿</span>
                                    <p className="text-gray-700 leading-relaxed">
                                        Uso de la voz como herramienta de apertura y conexión para el pujo y manejo del dolor durante las
                                        contracciones.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Consultar próximas fechas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
