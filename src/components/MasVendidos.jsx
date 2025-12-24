import Image from "next/image";

export default function MasVendidos() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-white to-[#FBF8F6]">
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-light text-[#8B7B6C] mb-16 tracking-wide">
                Nuestros programas más vendidos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
                {/* Card 1 */}
                <div className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#F0EBE6]">
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#FBE9DD] to-[#F5D4C1]">
                        <Image
                            src="https://i.pinimg.com/736x/d0/5c/70/d05c70249fa1fba419d58c510f49c5cd.jpg"
                            alt="Programa personalizado"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-medium text-[#BFA89B] mb-4 leading-tight">
                            Programa personalizado: Kinesiología de preparación al parto
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Acompañamiento individual de Kinesiología y preparación al parto para vivir tu gestación con calma, conexión y confianza. A través de movimiento, respiración, manejo del dolor y preparación del piso pélvico, te guiamos hacia un parto seguro, presente y empoderado. Presencial u online, reembolsable.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#F0EBE6]">
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#FBE9DD] to-[#F5D4C1]">
                        <Image
                            src="https://i.pinimg.com/736x/d0/5c/70/d05c70249fa1fba419d58c510f49c5cd.jpg"
                            alt="Taller de preparación al parto"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-medium text-[#BFA89B] mb-4 leading-tight">Taller de preparación al parto: “Pelvis libre y parto respetado”</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Taller personalizado donde aprenderás movimientos, respiración, vocalización y técnicas de manejo del dolor para un parto fluido y consciente. Integra Kinesiología, yoga y neurociencia para soltar miedos, aliviar tensiones y fortalecer tu confianza. Puedes asistir con tu acompañante. Reembolsable
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#F0EBE6]">
                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#FBE9DD] to-[#F5D4C1]">
                        <Image
                            src="https://i.pinimg.com/736x/d0/5c/70/d05c70249fa1fba419d58c510f49c5cd.jpg"
                            alt="Membresía Raíz cíclica"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-xl font-medium text-[#BFA89B] mb-4 leading-tight">
                            Membresía Raíz cíclica
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Espacio online de autocuidado femenino para habitar tu cuerpo en todas tus etapas. Combina Kinesiología de piso pélvico, yoga, meditación y Gestalt para acompañarte en menstruación, gestación, posparto y climaterio. Un círculo íntimo para volver a tu raíz y nutrir tu bienestar cíclico.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
