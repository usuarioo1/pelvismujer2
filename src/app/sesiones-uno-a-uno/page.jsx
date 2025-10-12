export default function SesionesUnoAUnoCards() {
    const programas = [
        {
            icon: "🤰",
            titulo: "Parto Consciente",
            subtitulo: "Kinesiología y preparación al parto presencial",
            descripcion:
                "Acompañamiento integral y personalizado para vivir tu parto de manera empoderada. Conecta con tu cuerpo, tu bebé y prepárate con confianza.",
            destacado: "Incluye a tu acompañante",
            color: "rose",
        },
        {
            icon: "🌸",
            titulo: "Puerperio y Re-conexión",
            subtitulo: "Kinesiología y rehabilitación de piso pélvico",
            descripcion:
                "Recupera tu cuerpo con suavidad, fortalece tu piso pélvico y reconecta con tu bienestar físico y emocional en el postparto.",
            destacado: "Comunidad de apoyo incluida",
            color: "pink",
        },
        {
            icon: "💗",
            titulo: "Dolor Pélvico y Sexualidad",
            subtitulo: "Sanación y reconexión en el posparto",
            descripcion:
                "Acompañamiento especializado para sanar molestias íntimas, recuperar confianza y reconectar con tu sexualidad desde el autocuidado.",
            destacado: "Abordaje integral y respetuoso",
            color: "purple",
        },
    ]

    const colorClasses = {
        rose: {
            border: "border-rose-200",
            iconBg: "bg-rose-50",
            iconText: "text-rose-600",
            badge: "bg-rose-100 text-rose-700",
            button: "bg-rose-500 hover:bg-rose-600",
        },
        pink: {
            border: "border-pink-200",
            iconBg: "bg-pink-50",
            iconText: "text-pink-600",
            badge: "bg-pink-100 text-pink-700",
            button: "bg-pink-500 hover:bg-pink-600",
        },
        purple: {
            border: "border-purple-200",
            iconBg: "bg-purple-50",
            iconText: "text-purple-600",
            badge: "bg-purple-100 text-purple-700",
            button: "bg-purple-500 hover:bg-purple-600",
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Sesiones 1:1</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
                        Programas personalizados de kinesiología para acompañarte en cada etapa
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programas.map((programa, index) => {
                        const colors = colorClasses[programa.color]
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border-2 ${colors.border} p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                            >
                                <div className={`w-16 h-16 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                    <span className="text-3xl">{programa.icon}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-balance">{programa.titulo}</h3>

                                <p className="text-sm font-medium text-gray-600 mb-4 text-pretty">{programa.subtitulo}</p>

                                <p className="text-gray-700 mb-4 leading-relaxed flex-grow text-pretty">{programa.descripcion}</p>

                                <div className={`${colors.badge} rounded-lg px-3 py-2 text-sm font-medium mb-4 text-center`}>
                                    {programa.destacado}
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Reembolsable con isapre/seguro</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Programas de 1, 5 o 10 sesiones</span>
                                    </div>
                                </div>

                                <button
                                    className={`w-full ${colors.button} text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200`}
                                >
                                    Ver más información
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
