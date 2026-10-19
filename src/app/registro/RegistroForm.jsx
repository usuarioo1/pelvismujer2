"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegistroForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    password: "",
    confirmar: "",
    adminCode: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmar) {
      setError("Las contraseñas no coinciden")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: formData.telefono,
          password: formData.password,
          adminCode: formData.adminCode,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "No se pudo crear la cuenta")
        return
      }
      router.push(data.user.role === "admin" ? "/admin" : "/")
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
        <label htmlFor="nombre" className="block text-sm font-medium text-morado mb-1.5">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="Tu nombre"
          className={inputClasses}
        />
      </div>

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
        <label htmlFor="telefono" className="block text-sm font-medium text-morado mb-1.5">
          Teléfono <span className="text-marengo/50 font-normal">(opcional)</span>
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          autoComplete="tel"
          placeholder="+56 9 XXXX XXXX"
          className={inputClasses}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
            minLength={8}
            autoComplete="new-password"
            placeholder="Mínimo 8 caracteres"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="confirmar" className="block text-sm font-medium text-morado mb-1.5">
            Confirmar contraseña
          </label>
          <input
            type="password"
            id="confirmar"
            name="confirmar"
            value={formData.confirmar}
            onChange={handleChange}
            required
            minLength={8}
            autoComplete="new-password"
            placeholder="Repite la contraseña"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="adminCode" className="block text-sm font-medium text-morado mb-1.5">
          Código de administrador <span className="text-marengo/50 font-normal">(opcional)</span>
        </label>
        <input
          type="password"
          id="adminCode"
          name="adminCode"
          value={formData.adminCode}
          onChange={handleChange}
          placeholder="Solo si tienes un código de admin"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-rojo-oscuro px-6 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_10px_30px_-12px_rgba(226,39,39,0.55)] transition-all duration-300 hover:bg-[#c81f1f] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Creando cuenta..." : "Crear cuenta"}
      </button>

      <p className="text-center text-sm text-marengo/70">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-medium text-rojo hover:underline underline-offset-4">
          Inicia sesión
        </Link>
      </p>
    </form>
  )
}
