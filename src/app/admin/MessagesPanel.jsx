"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const formatDate = (iso) =>
  new Intl.DateTimeFormat("es-CL", { dateStyle: "medium", timeStyle: "short" }).format(new Date(iso))

export default function MessagesPanel({ messages }) {
  const router = useRouter()
  const [busyId, setBusyId] = useState(null)
  const [filter, setFilter] = useState("all")

  const visible = messages.filter((m) => (filter === "unread" ? !m.read : true))
  const unreadCount = messages.filter((m) => !m.read).length

  const toggleRead = async (message) => {
    setBusyId(message.id)
    try {
      await fetch("/api/admin", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: message.id, read: !message.read }),
      })
      router.refresh()
    } finally {
      setBusyId(null)
    }
  }

  const remove = async (message) => {
    if (!window.confirm("¿Eliminar este mensaje de forma permanente?")) return
    setBusyId(message.id)
    try {
      await fetch(`/api/admin?messageId=${message.id}`, { method: "DELETE" })
      router.refresh()
    } finally {
      setBusyId(null)
    }
  }

  return (
    <section className="rounded-2xl border border-crema/60 bg-white p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(78,34,38,0.35)]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl text-morado">Mensajes de contacto</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === "all" ? "bg-morado text-crema" : "border border-crema text-marengo/70 hover:text-morado"
            }`}
          >
            Todos ({messages.length})
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === "unread" ? "bg-morado text-crema" : "border border-crema text-marengo/70 hover:text-morado"
            }`}
          >
            Sin leer ({unreadCount})
          </button>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-10 text-center text-sm text-marengo/50">
          {filter === "unread" ? "No hay mensajes sin leer." : "Aún no hay mensajes de contacto."}
        </p>
      ) : (
        <ul className="space-y-4">
          {visible.map((m) => (
            <li
              key={m.id}
              className={`rounded-xl border p-5 transition ${
                m.read ? "border-crema/60 bg-white" : "border-rojo/30 bg-rojo/5"
              } ${busyId === m.id ? "opacity-60" : ""}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-morado truncate">{m.nombre}</p>
                    {m.programa && (
                      <span className="rounded-full bg-crema/50 px-2.5 py-0.5 text-[0.7rem] font-medium text-morado">
                        {m.programa}
                      </span>
                    )}
                    {!m.read && (
                      <span className="rounded-full bg-rojo px-2.5 py-0.5 text-[0.7rem] font-medium text-white">
                        Nuevo
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-marengo/70">
                    <a href={`mailto:${m.correo}`} className="hover:text-morado">
                      {m.correo}
                    </a>
                    {" · "}
                    <a href={`tel:${m.telefono.replace(/\s/g, "")}`} className="hover:text-morado">
                      {m.telefono}
                    </a>
                  </p>
                </div>
                <span className="text-xs text-marengo/50 whitespace-nowrap">{formatDate(m.createdAt)}</span>
              </div>

              {m.mensaje ? (
                <p className="text-sm leading-relaxed text-marengo/90 whitespace-pre-line mb-3">{m.mensaje}</p>
              ) : (
                <p className="text-sm italic text-marengo/60 mb-3">Solicitud de evaluación sin mensaje adicional.</p>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => toggleRead(m)}
                  disabled={busyId === m.id}
                  className="rounded-full border border-crema px-3.5 py-1.5 text-xs text-morado transition-colors hover:border-morado disabled:opacity-50"
                >
                  {m.read ? "Marcar como no leída" : "Marcar como leída"}
                </button>
                <button
                  onClick={() => remove(m)}
                  disabled={busyId === m.id}
                  className="rounded-full border border-crema px-3.5 py-1.5 text-xs text-marengo/70 transition-colors hover:border-rojo hover:text-rojo disabled:opacity-50"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
