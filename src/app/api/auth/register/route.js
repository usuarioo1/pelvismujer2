import { NextResponse } from "next/server"
import { createUser, findUserByCorreo } from "@/lib/db"
import { hashPassword, signToken, sessionCookieName, sessionCookieOptions } from "@/lib/auth"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const { nombre, correo, telefono, password, adminCode } = await request.json()

    if (!nombre?.trim() || !correo?.trim() || !password) {
      return NextResponse.json({ error: "Completa todos los campos obligatorios" }, { status: 400 })
    }
    if (!emailRegex.test(correo.trim())) {
      return NextResponse.json({ error: "Ingresa un correo válido" }, { status: 400 })
    }
    if (String(password).length < 8) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 })
    }

    const existing = await findUserByCorreo(correo.trim())
    if (existing) {
      return NextResponse.json({ error: "Ya existe una cuenta con este correo" }, { status: 409 })
    }

    const adminCodeValid = adminCode && adminCode === (process.env.ADMIN_CODE || "pelvismujer-admin")
    const user = await createUser({
      nombre: nombre.trim(),
      correo: correo.trim().toLowerCase(),
      telefono: telefono?.trim() || "",
      passwordHash: hashPassword(password),
      role: adminCodeValid ? "admin" : "user",
    })

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
