import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(237,208,178,0.35),_transparent_52%)]" />

      <section className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-20 text-center md:py-28">
        <div className="mb-6 inline-flex items-center rounded-full border border-[#EDD0B2] bg-[#FFF8F3] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4E2226]">
          Error 404
        </div>

        <h1 className="font-heading text-7xl tracking-tight text-[#ED4137] md:text-9xl">404</h1>

        <h2 className="mt-6 text-2xl font-medium text-[#2D2D2D] md:text-4xl">
          Esta página no existe o no está disponible
        </h2>

        
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#ED4137] px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9382d]"
          >
            Volver al inicio
          </Link>

          
        </div>
      </section>
    </main>
  );
}
