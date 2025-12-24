import Image from "next/image";

export default function Caracteristicas() {
    return (
        <section className="relative w-full flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-20 bg-[#F8F6F3] overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 pointer-events-none select-none flex justify-center items-center">
                <div className="w-full h-full bg-gradient-to-r from-[#EDD0B2]/40 via-transparent to-[#EDD0B2]/40 rounded-[8%]" />
            </div>
            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl gap-10 md:gap-16">
                {/* Texto principal y botones */}
                <div className="flex-1 flex flex-col justify-center items-start gap-6 max-w-lg">
                    <div className="flex items-center gap-3 mb-2">
                        {/* Flor decorativa */}
                        <svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <circle cx="40" cy="40" r="12" fill="#ED4137" />
                                {[...Array(8)].map((_, i) => (
                                    <ellipse
                                        key={i}
                                        cx={40 + 18 * Math.cos((i * Math.PI) / 4)}
                                        cy={40 + 18 * Math.sin((i * Math.PI) / 4)}
                                        rx="7"
                                        ry="14"
                                        fill="#EDD0B2"
                                        transform={`rotate(${i * 45} 40 40)`}
                                    />
                                ))}
                            </g>
                        </svg>
                        <span className="text-lg font-medium text-[#4E2226] font-decorative">¿Por qué elegir PelvisMujer?</span>
                    </div>
                    <p className="text-base text-[#2D2D2D] mb-2">
                        Porque aquí el cuerpo no se trata como una máquina que reparar, sino como una historia que escuchar. En PelvisMujer integramos Kinesiología de piso pélvico, yoga tradicional, terapia Gestalt y neurociencia para acompañarte de forma consciente, respetuosa y profunda en cada etapa de tu vida. Este es un espacio seguro donde puedes habitarte, comprenderte y transformarte desde la raíz: tu pelvis, tu centro y tu hogar interno.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="/membresiaRaizCiclica" className="px-5 py-2 rounded-md border-2 border-[#4E2226] text-[#4E2226] font-medium bg-white hover:bg-[#EDD0B2]/30 transition">Ir a Membresía - Raíz cíclica</a>
                        <a href="/formulario" className="px-5 py-2 rounded-md border-2 border-[#ED4137] text-white font-medium bg-[#ED4137] hover:bg-[#E22727] transition">Contáctame</a>
                    </div>
                </div>
                {/* Cards en cuadrícula 2x2 */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
                    {/* Card 1 */}
                    <div className="rounded-2xl bg-[#EDD0B2]/50 p-6 shadow-md flex flex-col justify-between">
                        <h3 className="text-lg font-semibold text-[#4E2226] mb-2">Mirada integral cuerpo–mente–emoción</h3>
                        <p className="text-sm text-[#2D2D2D]">
                            Un enfoque que une Kinesiología, yoga, Gestalt y neurociencia para comprender tu cuerpo como un sistema completo, sensible y vivo.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-2xl bg-[#ED4137] p-6 shadow-md flex flex-col justify-between">
                        <h3 className="text-lg font-semibold text-white mb-2">Acompañamiento consciente en todas las etapas de la vida femenina</h3>
                        <p className="text-sm text-white/90">
                            No solo tratamos síntomas: te acompañamos en tus ciclos, gestación, parto, posparto y madurez, honrando tu historia y tu proceso.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-2xl bg-[#4E2226] p-6 shadow-md flex flex-col justify-between">
                        <h3 className="text-lg font-semibold text-white mb-2">Espacio seguro para habitar tu cuerpo</h3>
                        <p className="text-sm text-white/90">
                            Más que un tratamiento, es un viaje de autoconocimiento. Aquí encuentras contención, presencia y un trabajo profundo que te ayuda a reconectar con tu centro, tu fuerza y tu poder.
                        </p>
                    </div>
                    {/* Card 4: Foto */}
                    <div className="flex items-end justify-center rounded-2xl overflow-hidden shadow-lg bg-white">
                        <Image
                            src="/pregnant-woman-meditating-peacefully.jpg"
                            alt="Mujer meditando"
                            width={400}
                            height={340}
                            className="object-cover w-full h-[180px] md:h-[340px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
