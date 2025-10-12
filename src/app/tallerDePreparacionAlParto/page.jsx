import React from 'react'

const page = () => {
    return (

        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-12 text-center text-4xl font-bold text-purple-900">Taller de Preparación al Parto</h1>

                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h2 className="mb-2 text-3xl font-bold">Taller de Preparación al Parto</h2>
                        <p className="text-xl text-purple-50">"Pelvis Libre y Parto Respetado"</p>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                        <div className="mb-8">
                            <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                Te invitamos a un taller personalizado que te entregará herramientas para vivir tu parto con confianza y
                                conexión. En "Pelvis Libre y Parto Respetado", a través de la Kinesiología, movimientos de la pelvis,
                                Yoga y Neurociencia, aprenderás movimientos, respiraciones y técnicas de vocalización, que te ayudarán a
                                relajar tensiones, aliviar molestias y facilitar un parto más fluido y en conexión.
                            </p>
                        </div>

                        {/* En este taller descubrirás */}
                        <div className="mb-8">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">En este taller descubrirás:</h3>
                            <div className="space-y-4">
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
                                        <h4 className="mb-1 font-semibold text-gray-900">Rebozo y manteo</h4>
                                        <p className="leading-relaxed text-gray-600">
                                            Herramientas ancestrales que acompañan a tu cuerpo en este proceso especial.
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
                                        <h4 className="mb-1 font-semibold text-gray-900">Manejo del dolor natural</h4>
                                        <p className="leading-relaxed text-gray-600">
                                            Estrategias para afrontar las contracciones con calma, masajes, compresiones y movilidad.
                                        </p>
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
                                        <h4 className="mb-1 font-semibold text-gray-900">Técnicas de respiración, pujo y vocalización</h4>
                                        <p className="leading-relaxed text-gray-600">
                                            Para conectar profundamente contigo, relajar tu cuerpo, tu piso pélvico y conectar con tu bebé.
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
                                        <h4 className="mb-1 font-semibold text-gray-900">Fortalecimiento de tu confianza</h4>
                                        <p className="leading-relaxed text-gray-600">
                                            Suelta miedos y prepárate para la transformación que hay detrás del hecho de parir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Este taller es ideal si deseas */}
                        <div className="mb-8">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">Este taller es ideal si deseas:</h3>
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="flex items-start gap-3 rounded-lg bg-purple-50 p-4">
                                    <span className="text-2xl">🌿</span>
                                    <p className="text-gray-700">Soltar miedos y empoderarte en el parto.</p>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg bg-pink-50 p-4">
                                    <span className="text-2xl">💨</span>
                                    <p className="text-gray-700">Aprender posiciones y técnicas que faciliten el nacimiento.</p>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg bg-rose-50 p-4">
                                    <span className="text-2xl">✨</span>
                                    <p className="text-gray-700">Manejar el dolor durante las contracciones.</p>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg bg-purple-50 p-4">
                                    <span className="text-2xl">🧘‍♀️</span>
                                    <p className="text-gray-700">Conectar con tu bebé desde el amor y la calma.</p>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg bg-pink-50 p-4">
                                    <span className="text-2xl">🤲</span>
                                    <p className="text-gray-700">Recibir contención y guía en un espacio seguro y amoroso.</p>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg bg-rose-50 p-4">
                                    <span className="text-2xl">✔</span>
                                    <p className="text-gray-700">Comprender el funcionamiento hormonal durante el parto.</p>
                                </div>
                            </div>
                        </div>

                        {/* Detalles del taller */}
                        <div className="mb-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6">
                            <h3 className="mb-4 text-xl font-bold text-gray-900">Detalles del taller:</h3>
                            <div className="mb-4 grid gap-4 md:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-sm text-gray-600">Duración</p>
                                        <p className="font-semibold text-gray-900">3 horas</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="h-6 w-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-sm text-gray-600">Modalidad</p>
                                        <p className="font-semibold text-gray-900">Presencial y personalizado</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-4 text-sm text-gray-600">
                                Puedes asistir con tu acompañante. Consulta por fechas disponibles
                            </p>
                            <div className="flex gap-4">
                                <div className="flex-1 rounded-lg bg-white p-4 shadow-sm">
                                    <p className="mb-1 text-sm text-gray-600">Valor grupal</p>
                                    <p className="text-2xl font-bold text-purple-600">$48.000</p>
                                </div>
                                <div className="flex-1 rounded-lg bg-white p-4 shadow-sm">
                                    <p className="mb-1 text-sm text-gray-600">Valor personalizado</p>
                                    <p className="text-2xl font-bold text-pink-600">$60.000</p>
                                </div>
                            </div>
                        </div>

                        {/* Reembolso info */}
                        <div className="rounded-xl bg-purple-50 p-6">
                            <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="font-medium text-purple-900">Reembolsable con isapre y/o seguro médico.</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <button className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-purple-600 hover:to-pink-600 hover:shadow-xl">
                                ¡Únete y prepárate para un parto respetado!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
