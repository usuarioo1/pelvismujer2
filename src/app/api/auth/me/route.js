import { NextResponse } from "next/server"
import { getSessionFromRequest } from "@/lib/auth"

export async function GET(request) {
  const session = await getSessionFromRequest(request)
  if (!session) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 })
  }
  return NextResponse.json({
    user: { id: session.sub, nombre: session.nombre, correo: session.correo, role: session.role },
  })
}
