export default function GestacionConscienteCard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header con gradiente */}
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
                                <h1 className="text-3xl font-bold">Programa para gestantes</h1>
                                <p className="text-xl text-white/90 mt-1">Gestación consciente</p>
                            </div>
                        </div>
                    </div>

                    {/* Contenido principal */}
                    <div className="p-8">
                        {/* Descripción */}
                        <div className="mb-8">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Para mujeres embarazadas que buscan habitar su gestación con más fuerza, calma y conexión con su bebé.
                                Nuestras clases son realizadas por Kinesiólogas especializadas en el área de embarazo, post parto y piso
                                pélvico.
                            </p>
                        </div>

                        {/* Incluye */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Incluye:</h2>
                            <div className="space-y-6">
                                {/* Gimnasia prenatal */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                                            <span className="text-2xl">🧘‍♀️</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 leading-relaxed">
                                            <span className="font-semibold">
                                                2 clases por semana, online y sincrónicas de gimnasia prenatal
                                            </span>{" "}
                                            (ejercicios de movilidad, fuerza, coordinación y respiración). Realizada por Kinesiólogas
                                            especialistas en el área de embarazo y postparto.
                                        </p>
                                        <div className="mt-3 space-y-2 text-sm text-gray-600 bg-rose-50 p-4 rounded-lg">
                                            <p>• Martes y Jueves 10:00 - 11:00 hrs</p>
                                            <p>• Lunes y Miércoles 20:00 - 21:00 hrs</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Yoga prenatal */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                                            <span className="text-2xl">🎥</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 leading-relaxed">
                                            <span className="font-semibold">3 clases grabadas de yoga prenatal, mensuales</span> (puedes
                                            repetirlas a tu ritmo).
                                        </p>
                                    </div>
                                </div>

                                {/* Vocalización */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                            <span className="text-2xl">🎶</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-700 leading-relaxed">
                                            <span className="font-semibold">
                                                1 encuentro mensual online y en vivo de vocalización y canto prenatal
                                            </span>{" "}
                                            para conectar con la voz, la calma y el bebé.
                                        </p>
                                        <div className="mt-3 text-sm text-gray-600 bg-purple-50 p-4 rounded-lg">
                                            <p>Los últimos lunes de cada mes a las 19:00 hrs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Información adicional */}
                        <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">Todas nuestras clases quedan grabadas</span> y puedes acceder a ellas
                                durante 3 meses.
                            </p>
                        </div>

                        {/* Botón CTA */}
                        <div className="flex justify-center">
                            <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                Unirme al programa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
