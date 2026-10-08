"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Logonav2 from "../assets/logonav2.png"
import Image from "next/image"

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/conocenos", label: "Sobre PelvisMujer" },
  { path: "/espacioOnline", label: "Espacio Online" },
  { path: "/membresia", label: "Membresía" },
  { path: "/sesiones-uno-a-uno", label: "Sesiones 1:1" },
  { path: "/talleresYcursos", label: "Talleres y Encuentros" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav className="sticky top-0 z-50 border-b border-crema/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="PelvisMujer — inicio">
            <Image src={Logonav2} alt="Logo PelvisMujer" width={88} height={62} className="w-[72px] md:w-[88px] h-auto" priority />
          </Link>

          <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
            {navItems.map((item) => {
              const active = pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-[0.9rem] py-1.5 transition-colors duration-300 border-b-2 ${
                      active
                        ? "text-morado border-rojo"
                        : "text-marengo/80 font-normal border-transparent hover:text-morado hover:border-rojo/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href="/formulario"
                className="ml-2 inline-flex items-center rounded-full bg-rojo-oscuro px-5 py-2.5 text-[0.9rem] font-medium text-white shadow-[0_10px_30px_-12px_rgba(226,39,39,0.55)] transition-all duration-300 hover:bg-[#c81f1f] hover:shadow-[0_14px_34px_-12px_rgba(226,39,39,0.65)] active:scale-[0.98]"
              >
                Agenda tu evaluación
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-morado transition-colors hover:bg-crema/40"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-crema/60 bg-white transition-[max-height,opacity] duration-500 ease-out ${
          mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col list-none m-0 px-5 py-4 gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block rounded-lg px-3 py-3 text-[0.95rem] transition-colors ${
                  pathname === item.path ? "bg-crema/30 text-morado font-medium" : "text-marengo/85 hover:bg-crema/25 hover:text-morado"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="px-3 pb-2 pt-3">
            <Link
              href="/formulario"
              className="inline-flex w-full items-center justify-center rounded-full bg-rojo-oscuro px-5 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-[#c81f1f]"
            >
              Agenda tu evaluación
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
