export default function TallerPelvisLibreCard() {
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
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-balance">Taller de Preparación al Parto</h1>
                                <p className="text-xl text-white/90 mt-1">"Pelvis Libre y Parto Respetado"</p>
                            </div>
                        </div>
                    </div>

                    {/* Contenido principal */}
                    <div className="p-8 space-y-8">
                        {/* Descripción */}
                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                Te invitamos a un taller personalizado que te entregará herramientas para vivir tu parto con confianza y
                                conexión. En "Pelvis Libre y Parto Respetado", a través de la Kinesiología, movimientos de la pelvis,
                                Yoga y Neurociencia, aprenderás movimientos, respiraciones y técnicas de vocalización, que te ayudarán a
                                relajar tensiones, aliviar molestias y facilitar un parto más fluido y en conexión.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                El valor incluye a tu pareja. Además recibe el plan de parto y el acceso a nuestra comunidad de whats
                                app "Mamás en tribu".
                            </p>
                        </div>

                        {/* Información práctica */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-purple-50 rounded-lg p-4">
                                <p className="text-sm text-purple-600 font-semibold mb-1">Duración</p>
                                <p className="text-gray-800 font-medium">3 horas</p>
                            </div>
                            <div className="bg-pink-50 rounded-lg p-4">
                                <p className="text-sm text-pink-600 font-semibold mb-1">Modalidad</p>
                                <p className="text-gray-800 font-medium">Presencial y personalizado</p>
                                <p className="text-sm text-gray-600 mt-1">Puedes asistir con tu acompañante</p>
                            </div>
                        </div>

                        {/* En este taller descubrirás */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">En este taller descubrirás:</h2>
                            <div className="space-y-3">
                                {[
                                    {
                                        title: "Rebozo y manteo",
                                        description: "Herramientas ancestrales que acompañan a tu cuerpo en este proceso especial.",
                                    },
                                    {
                                        title: "Manejo del dolor natural",
                                        description:
                                            "Estrategias para afrontar las contracciones con calma, masajes, compresiones y movilidad.",
                                    },
                                    {
                                        title: "Técnicas de respiración, pujo y vocalización",
                                        description:
                                            "Para conectar profundamente contigo, relajar tu cuerpo, tu piso pélvico y conectar con tu bebé.",
                                    },
                                    {
                                        title: "Fortalecimiento de tu confianza",
                                        description: "Suelta miedos y prepárate para la transformación que hay detrás del hecho de parir.",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{item.title}:</p>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Este taller es para ti si */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Este taller es para ti si deseas:</h2>
                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Soltar miedos y empoderarte en el parto.",
                                    "Aprender posiciones y técnicas que faciliten el nacimiento.",
                                    "Manejar el dolor durante las contracciones.",
                                    "Conectar con tu bebé desde el amor y la calma.",
                                    "Recibir contención y guía en un espacio seguro y amoroso.",
                                    "Comprender el funcionamiento hormonal durante el parto.",
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-2 items-start">
                                        <span className="text-pink-500 flex-shrink-0">✓</span>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Consultar fechas disponibles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
