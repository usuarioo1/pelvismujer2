import Image from "next/image"
import Reveal from "./Reveal"

const Flor = ({ className }) => (
  <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className={className}>
    <g>
      <circle cx="40" cy="40" r="16" fill="#ED4137" />
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx={40 + 28 * Math.cos((i * Math.PI) / 4)}
          cy={40 + 28 * Math.sin((i * Math.PI) / 4)}
          rx="10"
          ry="20"
          fill="#EDD0B2"
          transform={`rotate(${i * 45} 40 40)`}
        />
      ))}
    </g>
  </svg>
)

const disciplinas = ["Kinesiología de piso pélvico", "Yoga", "Terapia Gestalt", "Neurociencia"]

export default function Concepto() {
  return (
    <section id="concepto" className="relative overflow-hidden px-5 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Composición fotográfica */}
        <Reveal className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-[4/5] w-[86%] md:w-[78%]">
            <div className="absolute inset-0 rounded-t-full bg-crema" aria-hidden="true" />
            <Image
              src="/img/gestante-meditando.jpg"
              alt="Gestante meditando con luz natural, atmósfera del trabajo de PelvisMujer"
              width={520}
              height={650}
              className="relative h-full w-full rounded-t-full object-cover shadow-[0_36px_70px_-30px_rgba(78,34,38,0.4)]"
            />
          </div>

          <div className="absolute bottom-6 right-0 w-[46%] max-w-[220px] md:-right-4">
            <Image
              src="/img/yoga-atardecer.jpg"
              alt="Silueta practicando yoga al atardecer"
              width={300}
              height={380}
              className="aspect-[4/5] w-full rounded-t-full border-[6px] border-white object-cover shadow-[0_28px_56px_-24px_rgba(78,34,38,0.45)]"
            />
          </div>

          <Flor className="absolute -left-8 bottom-20 z-10 h-16 w-16 md:-left-12 lg:h-20 lg:w-20" />
        </Reveal>

        {/* Texto */}
        <div className="max-w-xl">
          <Reveal>
            <h2 className="text-balance text-4xl leading-[1.1] text-rojo sm:text-5xl">Habitar tu cuerpo es volver a casa</h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-marengo/90">
              <p className="text-lg font-medium text-morado">
                Soy Daniela Flores, Kinesióloga y fundadora de PelvisMujer.
              </p>
              <p>
                Este espacio nace de una certeza: el cuerpo guarda una sabiduría que muchas veces olvidamos escuchar.
                Mi camino comenzó en la búsqueda —en mis ciclos, mis dolores y mis emociones— hasta que una crisis
                abrió un portal. Ahí entendí que acompañar no es solo tratar: es sostener procesos profundos de
                reconexión.
              </p>
              <p>
                Así nace PelvisMujer: una integración viva donde el cuerpo deja de ser algo que corregir y se
                transforma en un territorio que habitar, honrar y despertar. Aquí, tu pelvis no es solo anatomía:
                es raíz, centro y guía.
              </p>
              <p>
                Acompaño a mujeres en cada etapa —ciclicidad, gestación, parto, posparto y climaterio— a volver a sí
                mismas, con presencia, sensibilidad y verdad.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {disciplinas.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-morado/20 bg-crema/30 px-4 py-1.5 text-[0.8rem] font-medium text-morado"
                >
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
