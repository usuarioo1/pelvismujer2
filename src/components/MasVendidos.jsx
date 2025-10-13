import Link from "next/link"

export default function MasVendidos() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-12 text-center text-4xl font-bold text-rose-900">Programas más vendidos</h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                            <svg className="h-8 w-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                        <h2 className="mb-3 text-2xl font-bold text-gray-900">Programa personalizado</h2>
                        <p className="mb-4 text-lg font-medium text-rose-600">Kinesiología de preparación al parto</p>
                        <p className="text-gray-600 leading-relaxed">
                            Sesiones individualizadas adaptadas a tus necesidades específicas para preparar tu cuerpo y mente para el
                            parto.
                        </p>
                        <div className="mt-6">
                            <Link href="/sesiones-uno-a-uno/partoConsciente">
                            <button className="w-full rounded-lg bg-rose-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-rose-700">
                                Más información
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                            <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h2 className="mb-3 text-2xl font-bold text-gray-900">Taller de preparación al parto</h2>
                        <p className="mb-4 text-lg font-medium text-pink-600">"Pelvis libre y parto respetado"</p>
                        <p className="text-gray-600 leading-relaxed">
                            Aprende técnicas de movilidad pélvica y conoce tus derechos para un parto consciente y respetado.
                        </p>
                        <div className="mt-6">
                            <Link href="/talleresYcursos/tallerDePreparacionAlParto">
                                <button className="w-full rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-pink-700">
                                    Más información
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:col-span-2 lg:col-span-1">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                            <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                        </div>
                        <h2 className="mb-3 text-2xl font-bold text-gray-900">Espacio online de autocuidado</h2>
                        <p className="mb-4 text-lg font-medium text-purple-600">Para mujeres</p>
                        <p className="text-gray-600 leading-relaxed">
                            Comunidad virtual con recursos, ejercicios y apoyo continuo para tu bienestar durante el embarazo y más
                            allá.
                        </p>
                        <div className="mt-6">
                            <Link href="/raizCiclica">
                                <button className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700">
                                    Más información
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
