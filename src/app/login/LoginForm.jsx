"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({ correo: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "No se pudo iniciar sesión")
        return
      }
      const next = new URLSearchParams(window.location.search).get("next")
      const target = next || (data.user.role === "admin" ? "/admin" : "/")
      router.push(target)
      router.refresh()
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-crema/70 bg-white px-4 py-3 text-[0.95rem] text-marengo placeholder:text-marengo/40 focus:outline-none focus:ring-2 focus:ring-rojo/60 focus:border-transparent transition"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg border border-rojo/30 bg-rojo/5 px-4 py-3 text-sm text-rojo-oscuro" role="alert">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="correo" className="block text-sm font-medium text-morado mb-1.5">
          Correo electrónico
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="tu@correo.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-morado mb-1.5">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
          placeholder="••••••••"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-rojo-oscuro px-6 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_10px_30px_-12px_rgba(226,39,39,0.55)] transition-all duration-300 hover:bg-[#c81f1f] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Ingresando..." : "Iniciar sesión"}
      </button>

      <p className="text-center text-sm text-marengo/70">
        ¿No tienes cuenta?{" "}
        <Link href="/registro" className="font-medium text-rojo hover:underline underline-offset-4">
          Regístrate aquí
        </Link>
      </p>
    </form>
  )
}
