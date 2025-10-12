export default function TallerRCPCard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 md:p-12 text-white">
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
                                <h1 className="text-3xl md:text-4xl font-bold leading-tight">Taller: "RCP para padres y cuidadores"</h1>
                                <p className="text-xl text-white/90 mt-2">Niños de 0 a 8 años</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 space-y-8">
                        {/* Description */}
                        <div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Te invitamos a unirte a nuestro taller online de reanimación cardiopulmonar (RCP) para padres y
                                cuidadores de niños de 0 a 8 años. Durante 90 minutos, aprenderás técnicas esenciales que te permitirán
                                actuar con confianza en situaciones de emergencia. El taller queda grabado con acceso durante 1 mes y
                                además recibirás un documento con la información escrita y acceso a nuestra comunidad de whats app
                                "Mamás en tribu".
                            </p>
                        </div>

                        {/* Detalles del Taller */}
                        <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm text-rose-600 font-semibold mb-1">Duración</p>
                                    <p className="text-gray-800 font-medium">90 minutos</p>
                                </div>
                                <div>
                                    <p className="text-sm text-rose-600 font-semibold mb-1">Modalidad</p>
                                    <p className="text-gray-800 font-medium">Online sincrónico grupal y venta grabado</p>
                                </div>
                                <div>
                                    <p className="text-sm text-rose-600 font-semibold mb-1">Horario</p>
                                    <p className="text-gray-800 font-medium">3er miércoles de cada mes a las 17:00 hrs</p>
                                </div>
                            </div>
                        </div>

                        {/* Este taller incluye */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Este taller incluye:</h2>
                            <div className="space-y-4">
                                {[
                                    "Evaluación de la situación y cómo actuar rápidamente.",
                                    "RCP básica en niños de 0 a 8 años.",
                                    "RCP básica en lactantes (< 1 año).",
                                    "Maniobra de Heimlich y des-obstrucción de la vía aérea. Manejo de obstrucciones en las vías respiratorias.",
                                    "Uso del desfibrilador externo automático (DEA). En caso de estar en lugares públicos.",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed flex-1">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Consultar próximas fechas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
