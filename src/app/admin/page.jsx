import { listMessages, listUsers } from "@/lib/db"
import { getSession } from "@/lib/auth"
import MessagesPanel from "./MessagesPanel"
import UsersTable from "./UsersTable"

const DAY_MS = 24 * 60 * 60 * 1000

function StatCard({ value, label, accent }) {
  return (
    <div className="rounded-2xl border border-crema/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(78,34,38,0.35)]">
      <p className={`text-4xl font-semibold ${accent ? "text-rojo" : "text-morado"}`}>{value}</p>
      <p className="mt-1 text-sm text-marengo/70">{label}</p>
    </div>
  )
}

export default async function AdminPage() {
  const [messages, users, session] = await Promise.all([listMessages(), listUsers(), getSession()])

  const weekAgo = new Date(Date.now() - 7 * DAY_MS).toISOString()
  const newUsers = users.filter((u) => u.createdAt >= weekAgo).length
  const unread = messages.filter((m) => !m.read).length

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard value={users.length} label="Usuarios registrados" />
        <StatCard value={newUsers} label="Nuevos últimos 7 días" accent={newUsers > 0} />
        <StatCard value={messages.length} label="Mensajes de contacto" />
        <StatCard value={unread} label="Mensajes sin leer" accent={unread > 0} />
      </section>

      <MessagesPanel messages={messages} />

      <section className="rounded-2xl border border-crema/60 bg-white p-6 md:p-8 shadow-[0_20px_50px_-30px_rgba(78,34,38,0.35)]">
        <h2 className="text-2xl text-morado mb-6">Usuarios registrados</h2>
        <UsersTable users={users} currentUserId={session?.sub} />
      </section>
    </div>
  )
}
