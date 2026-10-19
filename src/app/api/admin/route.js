import { NextResponse } from "next/server"
import { setMessageRead, deleteMessage, updateUserRole, deleteUser } from "@/lib/db"
import { getSessionFromRequest } from "@/lib/auth"

async function guard(request) {
  const session = await getSessionFromRequest(request)
  if (!session || session.role !== "admin") return null
  return session
}

export async function PATCH(request) {
  const session = await guard(request)
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 })
  }

  try {
    const { id, read, role, action } = await request.json()

    if (action === "updateRole") {
      if (!id || !["admin", "user"].includes(role)) {
        return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
      }
      const updated = await updateUserRole(id, role)
      if (!updated) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
      return NextResponse.json({ ok: true })
    }

    if (!id) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
    }
    const updated = await setMessageRead(id, !!read)
    if (!updated) return NextResponse.json({ error: "Mensaje no encontrado" }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

export async function DELETE(request) {
  const session = await guard(request)
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const messageId = searchParams.get("messageId")
    const userId = searchParams.get("userId")

    if (messageId) {
      const ok = await deleteMessage(messageId)
      if (!ok) return NextResponse.json({ error: "Mensaje no encontrado" }, { status: 404 })
      return NextResponse.json({ ok: true })
    }

    if (userId) {
      if (userId === session.sub) {
        return NextResponse.json({ error: "No puedes eliminar tu propia cuenta" }, { status: 400 })
      }
      const ok = await deleteUser(userId)
      if (!ok) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
