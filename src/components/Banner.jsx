import Link from "next/link"

const ArrowUpRight = ({ className, ...rest }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
  </svg>
)

const fichas = [
  {
    href: "/membresiaRaizCiclica",
    label: "Membresía",
    title: "Raíz Cíclica",
    image: "/img/raiz-arbol-agua.jpg",
    alt: "Árbol con raíces sobre el agua, metáfora de la Raíz Cíclica",
  },
  {
    href: "/talleresYcursos",
    label: "En grupo",
    title: "Talleres y Encuentros",
    image: "/img/circulo-manos.jpg",
    alt: "Manos unidas en círculo durante un encuentro de mujeres",
  },
]

export function HeroBanner() {
  return (
    <header className="relative w-full overflow-hidden bg-morado">
      {/* Fotografía a full-bleed con zoom lento */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/img/hero-meditacion-atardecer.jpg"
          alt=""
          className="animate-slow-zoom h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#231214] via-[#4E2226]/70 to-[#4E2226]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#231214]/70 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-hero-fade max-w-xl">
            <h1 className="text-5xl leading-[1.05] text-crema sm:text-6xl lg:text-7xl">
              Bienvenida a<br />PelvisMujer
            </h1>

            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-white/90 sm:text-xl">
              Un espacio para reconectar con tu cuerpo, tu centro y tu poder.
            </p>

            <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-crema/85">
              Acompañamos a mujeres en cada etapa de su ciclo vital —ciclicidad, gestación, parto y posparto—
              integrando Kinesiología de piso pélvico, yoga, terapia Gestalt y neurociencia.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/formulario"
                className="inline-flex items-center rounded-full bg-rojo-oscuro px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-14px_rgba(226,39,39,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c81f1f] active:translate-y-0"
              >
                Agenda tu evaluación
              </Link>
              <Link
                href="/membresiaRaizCiclica"
                className="inline-flex items-center rounded-full border border-crema/50 px-7 py-3.5 text-[0.95rem] font-medium text-crema transition-all duration-300 hover:border-crema hover:bg-crema/10"
              >
                Conocer la membresía
              </Link>
            </div>

            <p className="font-decorative mt-8 text-lg italic text-crema/80">Tu cuerpo es tu hogar.</p>
          </div>

          {/* Fichas de entrada */}
          <div className="animate-hero-fade grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" style={{ animationDelay: "220ms" }}>
            {fichas.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group relative block h-60 overflow-hidden rounded-[1.4rem] ring-1 ring-crema/25 transition-shadow duration-500 hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)] sm:h-64 lg:h-72"
              >
                <img
                  src={f.image}
                  alt={f.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231214]/85 via-[#231214]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-crema/80">{f.label}</p>
                    <p className="mt-1.5 font-heading text-2xl leading-tight text-white">{f.title}</p>
                  </div>
                  <span className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-crema/40 text-crema transition-all duration-300 group-hover:bg-rojo-oscuro group-hover:border-rojo-oscuro group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
