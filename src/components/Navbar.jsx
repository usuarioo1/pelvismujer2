"use client"
import Link from "next/link"
import { useState } from "react"
import Logonav2 from "../assets/logonav2.png"
import Image from "next/image"


const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/conocenos", label: "Conócenos" },
  {
    path: "/espacioOnline",
    label: "Membresía Raíz Cíclica",
    children: [
      { path: "/espacioOnline/autoConocimientoFemenino", label: "AutoConocimiento Femenino" },
      { path: "/espacioOnline/programaParaGestantes", label: "Programa para Gestantes" },
    ],
  },
  {
    path: "/sesiones-uno-a-uno",
    label: "Sesiones 1 a 1",
    children: [
      { path: "/sesiones-uno-a-uno/dolorPelvico", label: "Dolor Pélvico" },
      { path: "/sesiones-uno-a-uno/partoConsciente", label: "Parto Consciente" },
      { path: "/sesiones-uno-a-uno/puerperio", label: "Puerperio" },
    ],
  },
  {
    path: "/talleresYcursos",
    label: "Talleres y Cursos",
    children: [
      { path: "/talleresYcursos/tallerDePreparacionAlParto", label: "Taller de Preparación al Parto" },
      { path: "/talleresYcursos/tallerInstinto", label: "Taller Instinto" },
      { path: "/talleresYcursos/tallerRCP", label: "Taller RCP" },
    ],
  },
]

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-gray-700 font-light text-sm py-2 px-1 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-400 transition-all duration-300 flex items-center gap-2">
        {label}
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 mt-0 w-52 bg-white shadow-xl rounded-lg py-4 z-50 border border-gray-100">
          {children}
        </ul>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md mt-2.5 shadow-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Image src={Logonav2} alt="Logo Pelvis Mujer" width={100} height={70} />

          <ul className="hidden lg:flex gap-12 list-none m-0 p-0 items-center">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                {item.children ? (
                  <Dropdown label={item.label}>
                    {item.children.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          href={sub.path}
                          className="block px-5 py-2 text-gray-700 text-sm font-light hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </Dropdown>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-700 font-light text-sm py-2 px-1 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <ul className="flex flex-col list-none m-0 p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  {item.children ? (
                    <div className="py-2">
                      <p className="text-gray-900 font-light text-sm mb-2">{item.label}</p>
                      <ul className="flex flex-col gap-1 pl-4 border-l border-gray-200">
                        {item.children.map((sub) => (
                          <li key={sub.path}>
                            <Link
                              href={sub.path}
                              className="block py-2 text-gray-700 text-sm font-light hover:text-gray-900 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="block py-2 text-gray-700 text-sm font-light hover:text-gray-900 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-b border-gray-100 mt-2"></div>
    </nav>
  )
}
