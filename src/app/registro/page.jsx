import { redirect } from "next/navigation"
import Link from "next/link"
import { getSession } from "@/lib/auth"
import RegistroForm from "./RegistroForm"

export const metadata = {
  title: "Crear cuenta — PelvisMujer",
  description: "Crea tu cuenta en PelvisMujer.",
}

export default async function RegistroPage() {
  const session = await getSession()
  if (session) {
    redirect(session.role === "admin" ? "/admin" : "/")
  }

  return (
    <main className="min-h-screen bg-crema/20 py-14 px-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-morado mb-3">Crear cuenta</h1>
          <p className="text-marengo/80">Únete a la comunidad de PelvisMujer.</p>
        </div>

        <div className="rounded-2xl border border-crema/60 bg-white p-6 md:p-10 shadow-[0_20px_50px_-30px_rgba(78,34,38,0.35)]">
          <RegistroForm />
        </div>

        <p className="mt-6 text-center text-xs text-marengo/50">
          <Link href="/" className="hover:text-morado hover:underline underline-offset-4">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  )
}
