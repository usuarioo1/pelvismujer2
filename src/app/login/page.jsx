import { redirect } from "next/navigation"
import Link from "next/link"
import { getSession } from "@/lib/auth"
import LoginForm from "./LoginForm"

export const metadata = {
  title: "Iniciar sesión — PelvisMujer",
  description: "Accede a tu cuenta de PelvisMujer.",
}

export default async function LoginPage() {
  const session = await getSession()
  if (session) {
    redirect(session.role === "admin" ? "/admin" : "/")
  }

  return (
    <main className="min-h-screen bg-crema/20 py-14 px-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-morado mb-3">Bienvenida de nuevo</h1>
          <p className="text-marengo/80">Inicia sesión para acceder a tu cuenta.</p>
        </div>

        <div className="rounded-2xl border border-crema/60 bg-white p-6 md:p-10 shadow-[0_20px_50px_-30px_rgba(78,34,38,0.35)]">
          <LoginForm />
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
