"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const formatDate = (iso) =>
  new Intl.DateTimeFormat("es-CL", { dateStyle: "medium" }).format(new Date(iso))

export default function UsersTable({ users, currentUserId }) {
  const router = useRouter()
  const [busyId, setBusyId] = useState(null)

  const changeRole = async (user) => {
    const newRole = user.role === "admin" ? "user" : "admin"
    if (!window.confirm(`¿Cambiar el rol de ${user.nombre} a "${newRole}"?`)) return
    setBusyId(user.id)
    try {
      await fetch("/api/admin", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "updateRole", id: user.id, role: newRole }),
      })
      router.refresh()
    } finally {
      setBusyId(null)
    }
  }

  const remove = async (user) => {
    if (!window.confirm(`¿Eliminar la cuenta de ${user.nombre}? Esta acción no se puede deshacer.`)) return
    setBusyId(user.id)
    try {
      const res = await fetch(`/api/admin?userId=${user.id}`, { method: "DELETE" })
      const data = await res.json()
      if (!res.ok) {
        window.alert(data.error || "No se pudo eliminar la cuenta")
        return
      }
      router.refresh()
    } finally {
      setBusyId(null)
    }
  }

  if (users.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-marengo/50">Aún no hay usuarios registrados.</p>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-crema text-left text-xs uppercase tracking-wider text-marengo/50">
            <th className="pb-3 pr-4 font-medium">Nombre</th>
            <th className="pb-3 pr-4 font-medium">Correo</th>
            <th className="pb-3 pr-4 font-medium">Teléfono</th>
            <th className="pb-3 pr-4 font-medium">Rol</th>
            <th className="pb-3 pr-4 font-medium">Registro</th>
            <th className="pb-3 font-medium text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className={`border-b border-crema/40 ${busyId === u.id ? "opacity-60" : ""}`}>
              <td className="py-3.5 pr-4 font-medium text-morado whitespace-nowrap">{u.nombre}</td>
              <td className="py-3.5 pr-4 text-marengo/80 whitespace-nowrap">
                <a href={`mailto:${u.correo}`} className="hover:text-morado">
                  {u.correo}
                </a>
              </td>
              <td className="py-3.5 pr-4 text-marengo/80 whitespace-nowrap">{u.telefono || "—"}</td>
              <td className="py-3.5 pr-4">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    u.role === "admin" ? "bg-morado text-crema" : "bg-crema/40 text-morado"
                  }`}
                >
                  {u.role === "admin" ? "Admin" : "Usuaria"}
                </span>
              </td>
              <td className="py-3.5 pr-4 text-marengo/70 whitespace-nowrap">{formatDate(u.createdAt)}</td>
              <td className="py-3.5 text-right">
                {u.id === currentUserId ? (
                  <span className="text-xs text-marengo/40">Tu cuenta</span>
                ) : (
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => changeRole(u)}
                      disabled={busyId === u.id}
                      className="rounded-full border border-crema px-3 py-1.5 text-xs text-morado transition-colors hover:border-morado disabled:opacity-50"
                    >
                      {u.role === "admin" ? "Quitar admin" : "Hacer admin"}
                    </button>
                    <button
                      onClick={() => remove(u)}
                      disabled={busyId === u.id}
                      className="rounded-full border border-crema px-3 py-1.5 text-xs text-marengo/70 transition-colors hover:border-rojo hover:text-rojo disabled:opacity-50"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
