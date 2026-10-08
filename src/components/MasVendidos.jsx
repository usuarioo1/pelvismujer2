import Image from "next/image"
import Link from "next/link"
import Reveal from "./Reveal"

const ArrowRight = ({ className, ...rest }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

const programas = [
  {
    href: "/sesiones-uno-a-uno/partoConsciente",
    tag: "Sesiones 1:1",
    title: "Programa personalizado: Kinesiología de preparación al parto",
    description:
      "Acompañamiento individual de Kinesiología y preparación al parto para vivir tu gestación con calma, conexión y confianza. A través de movimiento, respiración, manejo del dolor y preparación del piso pélvico, te guiamos hacia un parto seguro, presente y empoderado. Presencial u online, reembolsable.",
    image: "/img/madre-serena.jpg",
    alt: "Mujer embarazada serena con los ojos cerrados",
  },
  {
    href: "/talleresYcursos/tallerDePreparacionAlParto",
    tag: "Taller presencial",
    title: "Taller de preparación al parto: “Pelvis libre y parto respetado”",
    description:
      "Taller personalizado donde aprenderás movimientos, respiración, vocalización y técnicas de manejo del dolor para un parto fluido y consciente. Integra Kinesiología, yoga y neurociencia para soltar miedos, aliviar tensiones y fortalecer tu confianza. Puedes asistir con tu acompañante. Reembolsable.",
    image: "/img/acompanamiento-luz.jpg",
    alt: "Dos personas acompañándose con luz cálida, taller con acompañante",
  },
  {
    href: "/membresiaRaizCiclica",
    tag: "Membresía online",
    title: "Membresía Raíz Cíclica",
    description:
      "Espacio online de autocuidado femenino para habitar tu cuerpo en todas tus etapas. Combina Kinesiología de piso pélvico, yoga, meditación y Gestalt para acompañarte en menstruación, gestación, posparto y climaterio. Un círculo íntimo para volver a tu raíz y nutrir tu bienestar cíclico.",
    image: "/img/raiz-arbol-agua.jpg",
    alt: "Árbol con raíces sobre el agua, metáfora de la Raíz Cíclica",
  },
]

export default function MasVendidos() {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl leading-[1.1] text-morado sm:text-5xl">Programas más elegidos</h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-marengo/85">
            Los caminos por los que más mujeres comienzan su proceso con PelvisMujer.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
          {programas.map((p, i) => (
            <Reveal key={p.href} delay={i * 140} className={i === 1 ? "md:mt-10" : ""}>
              <Link
                href={p.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-crema bg-white shadow-[0_18px_44px_-26px_rgba(78,34,38,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_64px_-28px_rgba(78,34,38,0.4)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={560}
                    height={420}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-morado">
                    {p.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-medium leading-snug text-morado">{p.title}</h3>
                  <p className="mt-3.5 flex-1 text-[0.9rem] leading-relaxed text-marengo/85">{p.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-medium text-rojo-oscuro">
                    Ver más
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
