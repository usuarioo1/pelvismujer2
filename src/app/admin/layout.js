import { redirect } from "next/navigation"
import { requireAdmin } from "@/lib/auth"
import LogoutButton from "./LogoutButton"

export const metadata = {
  title: "Panel de administración — PelvisMujer",
}

export default async function AdminLayout({ children }) {
  const session = await requireAdmin()
  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-crema/20">
      <header className="sticky top-0 z-40 border-b border-crema/60 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-baseline gap-3 min-w-0">
              <span className="font-heading text-2xl text-morado truncate">Panel de administración</span>
              <span className="hidden sm:inline-flex rounded-full bg-crema/40 px-3 py-1 text-xs font-medium text-morado">
                {session.role === "admin" ? "Administradora" : session.role}
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden md:inline text-sm text-marengo/70">{session.nombre || session.correo}</span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 sm:px-8 py-10">{children}</main>
    </div>
  )
}
