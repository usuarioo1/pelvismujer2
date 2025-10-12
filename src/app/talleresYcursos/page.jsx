export default function TalleresCards() {
    const talleres = [
        {
            id: 1,
            titulo: "Pelvis Libre y Parto Respetado",
            subtitulo: "Taller de Preparación al Parto",
            descripcion:
                "Aprende movimientos, respiraciones y técnicas de vocalización para vivir tu parto con confianza y conexión.",
            duracion: "3 horas",
            modalidad: "Presencial y personalizado",
            color: "from-rose-500 to-pink-500",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            ),
        },
        {
            id: 2,
            titulo: "Instinto",
            subtitulo: "Preparación desde la conexión y el uso de la voz",
            descripcion:
                "Organiza lo que necesitas para tu parto y conecta profundamente con tu cuerpo y tu voz a través del movimiento consciente.",
            duracion: "3 horas",
            modalidad: "Online grupal - Último Jueves de cada mes 17:00 hrs",
            color: "from-purple-500 to-pink-500",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                </svg>
            ),
        },
        {
            id: 3,
            titulo: "RCP para padres y cuidadores",
            subtitulo: "Niños de 0 a 8 años",
            descripcion:
                "Aprende técnicas esenciales de reanimación cardiopulmonar para actuar con confianza en situaciones de emergencia.",
            duracion: "90 minutos",
            modalidad: "Online sincrónico - 3er miércoles de cada mes 17:00 hrs",
            color: "from-pink-500 to-rose-500",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                </svg>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Talleres</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Espacios de aprendizaje y conexión para acompañarte en cada etapa
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {talleres.map((taller) => (
                        <div
                            key={taller.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            {/* Header con gradiente */}
                            <div className={`bg-gradient-to-r ${taller.color} p-6 text-white`}>
                                <div className="flex items-center justify-center mb-4">{taller.icon}</div>
                                <h3 className="text-xl font-bold text-center mb-2">{taller.titulo}</h3>
                                <p className="text-sm text-center text-white/90">{taller.subtitulo}</p>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 flex-grow flex flex-col">
                                <p className="text-gray-600 mb-6 leading-relaxed">{taller.descripcion}</p>

                                {/* Detalles */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-2">
                                        <svg
                                            className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5"
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
                                            <p className="text-sm font-semibold text-gray-900">Duración</p>
                                            <p className="text-sm text-gray-600">{taller.duracion}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <svg
                                            className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">Modalidad</p>
                                            <p className="text-sm text-gray-600">{taller.modalidad}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón */}
                                <button
                                    className={`mt-auto w-full bg-gradient-to-r ${taller.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300`}
                                >
                                    Ver más información
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
