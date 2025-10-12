export default function ProgramasCards() {
    const programas = [
        {
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
            title: "Programa para gestantes - Gestación consciente",
            color: "rose",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
            title: "Re-conexión y autoconocimiento femenino",
            color: "pink",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ),
            title: "Meditaciones para cada ciclo",
            color: "purple",
        },
    ]

    const colorClasses = {
        rose: {
            icon: "text-rose-500",
        },
        pink: {
            icon: "text-pink-500",
        },
        purple: {
            icon: "text-purple-500",
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Programas en el espacio online</h1>
                    <p className="text-lg text-gray-600">Elige el programa que resuene con tu momento actual</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programas.map((programa, index) => {
                        const colors = colorClasses[programa.color]
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors.icon}`}>
                                    {programa.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">{programa.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
