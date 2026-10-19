import { promises as fs } from "fs"
import path from "path"
import crypto from "crypto"

const DATA_DIR = path.join(process.cwd(), "data")
const DB_FILE = path.join(DATA_DIR, "db.json")

const emptyDb = { users: [], messages: [] }

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true })
}

export async function readDb() {
  await ensureDir()
  try {
    const raw = await fs.readFile(DB_FILE, "utf8")
    const db = JSON.parse(raw)
    return { users: db.users || [], messages: db.messages || [] }
  } catch {
    return { ...emptyDb }
  }
}

export async function writeDb(db) {
  await ensureDir()
  const tmp = `${DB_FILE}.${crypto.randomUUID()}.tmp`
  await fs.writeFile(tmp, JSON.stringify(db, null, 2), "utf8")
  await fs.rename(tmp, DB_FILE)
}

export async function findUserByCorreo(correo) {
  const db = await readDb()
  return db.users.find((u) => u.correo.toLowerCase() === String(correo).toLowerCase()) || null
}

export async function createUser({ nombre, correo, telefono = "", passwordHash, role = "user" }) {
  const db = await readDb()
  const user = {
    id: crypto.randomUUID(),
    nombre,
    correo,
    telefono,
    passwordHash,
    role,
    createdAt: new Date().toISOString(),
  }
  db.users.push(user)
  await writeDb(db)
  return user
}

export async function listUsers() {
  const db = await readDb()
  return db.users
    .map(({ passwordHash, ...rest }) => rest)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export async function addMessage({ nombre, correo, telefono, mensaje = "", programa = "" }) {
  const db = await readDb()
  const item = {
    id: crypto.randomUUID(),
    nombre,
    correo,
    telefono,
    mensaje,
    programa,
    read: false,
    createdAt: new Date().toISOString(),
  }
  db.messages.push(item)
  await writeDb(db)
  return item
}

export async function listMessages() {
  const db = await readDb()
  return db.messages.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export async function setMessageRead(id, read) {
  const db = await readDb()
  const message = db.messages.find((m) => m.id === id)
  if (!message) return null
  message.read = !!read
  await writeDb(db)
  return message
}

export async function deleteMessage(id) {
  const db = await readDb()
  const before = db.messages.length
  db.messages = db.messages.filter((m) => m.id !== id)
  await writeDb(db)
  return db.messages.length < before
}

export async function deleteUser(id) {
  const db = await readDb()
  const before = db.users.length
  db.users = db.users.filter((u) => u.id !== id)
  await writeDb(db)
  return db.users.length < before
}

export async function updateUserRole(id, role) {
  const db = await readDb()
  const user = db.users.find((u) => u.id === id)
  if (!user) return null
  user.role = role
  await writeDb(db)
  return user
}
