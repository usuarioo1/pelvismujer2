import React from 'react'

const page = () => {
    return (

        <main className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-12 text-center text-4xl font-bold text-rose-900">Programa Parto Consciente</h1>

                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-white">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <h2 className="mb-2 text-3xl font-bold">Programa personalizado "Parto consciente"</h2>
                        <p className="text-xl text-rose-50">Kinesiología y preparación al parto presencial</p>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                        <div className="mb-8">
                            <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                En el programa "Parto Consciente", te ofrecemos un acompañamiento integral y personalizado para vivir tu
                                experiencia de parto de manera empoderada y serena. A través de sesiones de Kinesiología y preparación
                                al parto, te ayudamos a conectar con tu cuerpo y tu bebé, preparándote para un parto consciente y lleno
                                de confianza.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Tu embarazo es un viaje único; prepárate con amor y conciencia para vivir un parto poderoso y conectar
                                con la transformación que hay detrás del gestar.
                            </p>
                        </div>

                        {/* Services Included */}
                        <div className="mb-8">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">Este servicio incluye:</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                                        <svg className="h-5 w-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">Conexión con tu cuerpo y tu piso pélvico</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Conéctate con tu cuerpo y prevén o maneja molestias músculo-esqueléticas como pubalgia, lumbago y
                                            dolor costal durante la gestación. Mantente activa y reconéctate con tu suelo pélvico, aprendiendo
                                            a fortalecer, relajar y sentir esta parte esencial de ti.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">
                                        <svg className="h-5 w-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">Manejo del dolor músculo esquelético</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Técnicas para aliviar molestias durante el embarazo y el parto.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                                        <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">Masaje perineal y práctica de pujo</h4>
                                        <p className="text-gray-600 leading-relaxed">Preparación para el momento del parto.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                                        <svg className="h-5 w-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">Movimiento consciente y ejercicios de yoga</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Posturas que favorecen el descenso del bebé y promueven la dilatación fluida.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">
                                        <svg className="h-5 w-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">Técnicas de respiración y uso de la voz</h4>
                                        <p className="text-gray-600 leading-relaxed">Para aliviar el dolor y mantener la calma.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="rounded-xl bg-rose-50 p-6">
                            <p className="mb-3 text-gray-700 leading-relaxed">
                                Además, puedes participar junto a tu acompañante, creando un espacio de conexión y apoyo.
                            </p>
                            <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="font-medium text-rose-900">Reembolsable con isapre y/o seguro médico.</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <button className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-rose-600 hover:to-pink-600 hover:shadow-xl">
                                Reservar mi programa personalizado
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
