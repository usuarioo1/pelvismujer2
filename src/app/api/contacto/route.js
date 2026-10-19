import { NextResponse } from "next/server"
import { addMessage } from "@/lib/db"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const body = await request.json()
    const correo = body.correo || body.email
    const nombre = body.nombre
    const telefono = body.telefono
    const mensaje = body.mensaje
    const programa = body.programa

    if (!nombre?.trim() || !correo?.trim() || !telefono?.trim()) {
      return NextResponse.json({ error: "Completa todos los campos" }, { status: 400 })
    }
    if (!emailRegex.test(correo.trim())) {
      return NextResponse.json({ error: "Ingresa un correo válido" }, { status: 400 })
    }
    if (!mensaje?.trim() && !programa?.trim()) {
      return NextResponse.json({ error: "Selecciona un programa o escribe un mensaje" }, { status: 400 })
    }

    const saved = await addMessage({
      nombre: nombre.trim(),
      correo: correo.trim().toLowerCase(),
      telefono: telefono.trim(),
      mensaje: mensaje?.trim() || "",
      programa: programa?.trim() || "",
    })

    return NextResponse.json({ ok: true, id: saved.id })
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
