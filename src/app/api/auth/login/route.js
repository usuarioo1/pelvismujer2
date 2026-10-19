import { NextResponse } from "next/server"
import { findUserByCorreo } from "@/lib/db"
import { verifyPassword, signToken, sessionCookieName, sessionCookieOptions } from "@/lib/auth"

export async function POST(request) {
  try {
    const { correo, password } = await request.json()

    if (!correo?.trim() || !password) {
      return NextResponse.json({ error: "Ingresa tu correo y contraseña" }, { status: 400 })
    }

    const user = await findUserByCorreo(correo.trim())
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return NextResponse.json({ error: "Correo o contraseña incorrectos" }, { status: 401 })
    }

    const token = await signToken({ sub: user.id, nombre: user.nombre, correo: user.correo, role: user.role })
    const response = NextResponse.json({
      ok: true,
      user: { id: user.id, nombre: user.nombre, correo: user.correo, role: user.role },
    })
    response.cookies.set(sessionCookieName, token, sessionCookieOptions)
    return response
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
