import Link from "next/link"
import Reveal from "./Reveal"

const credenciales = ["Kinesiología de piso pélvico", "Embarazo y parto", "Yoga", "Terapia Gestalt", "Neurociencia"]

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] px-5 py-20 sm:px-8 md:py-28 lg:py-32">
      {/* Atmósfera sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-crema/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-crema/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl leading-[1.1] text-morado sm:text-5xl">Quién te acompaña</h2>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-marengo/85">
            En PelvisMujer trabajamos desde una mirada integral y consciente: profesionales de la Kinesiología
            especializada en embarazo, post parto y piso pélvico, el yoga y la terapia Gestalt, dedicadas a guiarte en
            cada etapa de tu vida con respeto, presencia y calidez. Aquí encontrarás un equipo que escucha, contiene y
            camina contigo hacia tu bienestar.
          </p>
        </Reveal>

        {/* Fundadora */}
        <Reveal delay={140} className="mx-auto mt-14 max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-10 rounded-[1.8rem] border border-crema bg-white p-8 shadow-[0_26px_60px_-30px_rgba(78,34,38,0.3)] sm:p-12 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
            <div>
              <p className="font-heading text-3xl leading-[1.15] text-morado sm:text-4xl">
                “Mi camino comenzó en la búsqueda: en mis ciclos, mis dolores y mis emociones, hasta que una crisis
                abrió un portal.”
              </p>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-marengo/85">
                Ahí entendí que acompañar no es solo tratar: es sostener procesos profundos de reconexión. Un espacio
                donde tu cuerpo deja de ser algo que corregir y se transforma en un territorio que habitar, honrar y
                despertar.
              </p>
              <p className="font-heading mt-7 text-2xl text-rojo-oscuro">Daniela Flores Rojas</p>
              <p className="mt-1 text-sm text-marengo/75">Kinesióloga · Fundadora de PelvisMujer</p>
            </div>

            <div className="flex flex-col gap-5 md:border-l md:border-crema md:pl-10">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-morado/70">Enfoque</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {credenciales.map((c) => (
                    <li
                      key={c}
                      className="rounded-full bg-crema/40 px-3.5 py-1.5 text-[0.8rem] font-medium text-morado"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/formulario"
                className="inline-flex items-center justify-center rounded-full bg-rojo-oscuro px-6 py-3 text-[0.95rem] font-medium text-white shadow-[0_14px_32px_-14px_rgba(226,39,39,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c81f1f] active:translate-y-0"
              >
                Conoce el espacio
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
