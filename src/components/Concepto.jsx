import Image from "next/image";

export default function Concepto() {
    return (
        <section className="flex flex-col-reverse items-center justify-center gap-6 px-4 py-8 md:flex-row md:gap-12 md:px-10 lg:px-20 min-h-[400px] md:min-h-[340px]">
            {/* Imagen decorativa */}
            <div className="relative flex-shrink-0 flex items-center justify-center w-full max-w-md md:max-w-lg lg:max-w-xl">
                {/* Fondo decorativo con border-radius personalizado */}
                <div className="absolute inset-0 rounded-[40%_40%_0_0/50%_50%_0_0] bg-[#FBE9DD] -z-10 w-full h-full" />
                <Image
                    src="/pregnant-woman-meditating-peacefully.jpg"
                    alt="Mujer meditando"
                    width={500}
                    height={500}
                    className="rounded-[40%_40%_0_0/50%_50%_0_0] object-cover w-full h-full shadow-xl"
                />
                {/* Imagen secundaria superpuesta */}
                <div className="absolute left-[-60px] bottom-[-60px] w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    <Image
                        src="/woman-practicing-yoga-outdoors-in-nature.jpg"
                        alt="Mujer practicando yoga"
                        width={256}
                        height={256}
                        className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg"
                    />
                </div>
                {/* Flor decorativa */}
                <div className="absolute right-[-40px] top-1/3">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="40" cy="40" r="16" fill="#FAD7B6" />
                            {[...Array(8)].map((_, i) => (
                                <ellipse
                                    key={i}
                                    cx={40 + 28 * Math.cos((i * Math.PI) / 4)}
                                    cy={40 + 28 * Math.sin((i * Math.PI) / 4)}
                                    rx="10"
                                    ry="20"
                                    fill="#FAD7B6"
                                    transform={`rotate(${i * 45} 40 40)`}
                                />
                            ))}
                        </g>
                    </svg>
                </div>
            </div>
            {/* Texto */}
            <div className="max-w-md w-full flex flex-col justify-center md:pl-2 lg:pl-6 space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#D48B7A] mb-3">Habitar tu cuerpo es volver a casa</h2>
                <p className="text-sm md:text-base text-gray-700 mb-2 leading-tight">
                    ¡Hola! Soy Daniela, fundadora de PelvisMujer. Este espacio nació de mi propia transformación ✨<br /><br />
                    Durante años busqué respuestas en mis ciclos, mis dolores y mis emociones. Esa intuición suave que insistía en que “había algo más” me llevó a atravesar una crisis que terminó siendo un portal. Fue allí donde decidí cambiar mi forma de acompañar: integrar Kinesiología de piso pélvico, yoga, meditación, terapia Gestalt y la comprensión profunda de que el cuerpo no solo se rehabilita… se habita, se honra y se despierta.<br /><br />
                    Así nació PelvisMujer: un lugar donde cada mujer puede encontrarse consigo misma desde lo físico, lo emocional y lo energético. Un espacio seguro donde tu pelvis tu raíz, tu centro, tu hogar interno se convierte en guía para sanar, transformar y reconectar con tu poder.<br /><br />
                    Creo profundamente que el movimiento consciente y el trabajo corporal pueden cambiar la vida. Cuando una mujer se escucha, se siente y se permite habitar su historia con amor, todo empieza a ordenarse adentro.<br /><br />
                    Aquí te acompaño a transitar tus ciclos y etapas, ciclicidad, gestación, parto, posparto y climaterio un espacio para que recuerdes tu fuerza, tu sensibilidad y tu verdad.
                </p>
            </div>
        </section>
    );
}
