import Image from "next/image"
import Link from "next/link"
import Reveal from "./Reveal"

export default function Caracteristicas() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] px-5 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        {/* Texto principal */}
        <div className="max-w-xl">
          <Reveal>
            <h2 className="text-balance text-4xl leading-[1.1] text-morado sm:text-5xl">¿Por qué elegir PelvisMujer?</h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-decorative mt-7 text-xl italic leading-snug text-morado sm:text-2xl">
              “Acá no tratamos cuerpos como máquinas. Escuchamos historias.”
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-marengo/90">
              <p>
                No buscamos corregirte ni decirte cómo debería funcionar tu cuerpo. Acompañamos tu proceso de
                rehabilitación desde la escucha, el movimiento y la conciencia corporal: te invitamos a volver a tu
                centro, a comprender lo que ocurre en tu cuerpo y a recuperar la confianza en él.
              </p>
              <p>
                Porque rehabilitar no es simplemente corregir una función: es volver a sentirte, reconocerte y
                habitarte. PelvisMujer es un espacio para habitar tu cuerpo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/membresiaRaizCiclica"
                className="inline-flex items-center rounded-full border border-morado/30 px-6 py-3 text-[0.95rem] font-medium text-morado transition-all duration-300 hover:border-morado hover:bg-morado hover:text-crema"
              >
                Conocer la membresía Raíz Cíclica
              </Link>
              <Link
                href="/formulario"
                className="inline-flex items-center rounded-full bg-rojo-oscuro px-6 py-3 text-[0.95rem] font-medium text-white shadow-[0_14px_32px_-14px_rgba(226,39,39,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c81f1f] active:translate-y-0"
              >
                Contáctame
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Teselas cualidades */}
        <Reveal delay={150} className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          <div className="rounded-[1.6rem] bg-crema/60 p-7 shadow-[0_20px_44px_-24px_rgba(78,34,38,0.25)] sm:mt-10">
            <h3 className="text-lg font-semibold leading-snug text-morado">Mirada integral cuerpo–mente–emoción</h3>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-marengo/85">
              Un enfoque que une Kinesiología, yoga, Gestalt y neurociencia para comprender tu cuerpo como un sistema
              completo, sensible y vivo.
            </p>
          </div>

          <div className="rounded-[1.6rem] bg-rojo-oscuro p-7 text-white shadow-[0_24px_48px_-24px_rgba(226,39,39,0.5)]">
            <h3 className="text-lg font-semibold leading-snug">Acompañamiento consciente en todas las etapas</h3>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-white/90">
              Te acompañamos en tus ciclos, gestación, parto, posparto y madurez, honrando tu historia y tu proceso.
            </p>
          </div>

          <div className="rounded-[1.6rem] bg-morado p-7 text-crema shadow-[0_24px_48px_-24px_rgba(78,34,38,0.55)]">
            <h3 className="text-lg font-semibold leading-snug">Espacio seguro para habitar tu cuerpo</h3>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-crema/85">
              Más que un tratamiento, es un viaje de autoconocimiento: contención, presencia y un trabajo profundo
              para reconectar con tu centro, tu fuerza y tu poder.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] shadow-[0_24px_48px_-24px_rgba(78,34,38,0.35)] sm:-mt-10">
            <Image
              src="/img/yoga-grupo-playa.jpg"
              alt="Clase de yoga al aire libre, el movimiento como práctica diaria"
              width={480}
              height={520}
              className="h-full min-h-[15rem] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
