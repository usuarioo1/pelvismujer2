export default function RaizCiclicaCard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    {/* Header con gradiente */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-balance">Raíz Cíclica</h1>
                                <p className="text-white/90 text-lg mt-1">Espacio online de autocuidado</p>
                            </div>
                        </div>
                        <p className="text-white/95 text-lg leading-relaxed">
                            Espacio online de autocuidado femenino en sus diferentes ciclos
                        </p>
                    </div>

                    {/* Contenido principal */}
                    <div className="p-8 space-y-8">
                        {/* Descripción */}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Raíz Cíclica es un espacio online de autocuidado femenino creado para que cada mujer pueda habitar su
                                cuerpo, su voz y su energía en las distintas etapas de la vida.
                            </p>
                        </div>

                        {/* Qué encontrarás */}
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Aquí encontrarás un refugio donde ciencia y espiritualidad se entrelazan: desde la Kinesiología de piso
                                pélvico, el Yoga y la meditación, hasta el canto prenatal, la vocalización y el autoconocimiento a
                                través de la Gestalt.
                            </p>
                        </div>

                        {/* Propósito */}
                        <div className="bg-purple-50 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-purple-900 mb-3">Nuestro Propósito</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Acompañarte en tu viaje, ya sea en la gestación, el postparto, la menstruación o el climaterio, para que
                                puedas volver a tu raíz, escuchar tu ritmo interno y nutrir tu bienestar con herramientas prácticas y
                                experiencias transformadoras.
                            </p>
                        </div>

                        {/* Mensaje especial */}
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Este no es solo un espacio de clases: es un círculo de cuidado y pertenencia, donde cada mujer puede
                                reconectar con su fuerza, su calma y su poder cíclico.
                            </p>
                            <p className="text-purple-700 font-medium text-lg text-balance">
                                🌙 Bienvenida a Raíz Cíclica: tu espacio para respirar, explorar y florecer en cada ciclo.
                            </p>
                        </div>

                        {/* Programas disponibles */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Programas en el espacio online</h3>
                            <div className="grid gap-4">
                                <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors">
                                    <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Programa para gestantes</h4>
                                        <p className="text-gray-600 text-sm">Gestación consciente</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
                                    <svg className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Re-conexión y autoconocimiento femenino</h4>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                                    <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Meditaciones para cada ciclo</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botón CTA */}
                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Ir al espacio online
                            </button>
                            <p className="text-sm text-gray-500 text-center mt-3">
                                Descripción de cada programa, valor y modalidad disponibles en el espacio
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
