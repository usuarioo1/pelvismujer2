import crypto from "crypto"
import { promises as fs } from "fs"
import path from "path"
import { cookies } from "next/headers"

const SESSION_COOKIE = "pm_session"
const SESSION_TTL = 60 * 60 * 24 * 7
const DATA_DIR = path.join(process.cwd(), "data")

let cachedSecret = null

async function getSecret() {
  if (cachedSecret) return cachedSecret
  if (process.env.AUTH_SECRET) {
    cachedSecret = process.env.AUTH_SECRET
    return cachedSecret
  }
  const secretFile = path.join(DATA_DIR, "auth-secret")
  try {
    cachedSecret = (await fs.readFile(secretFile, "utf8")).trim()
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
    cachedSecret = crypto.randomBytes(32).toString("hex")
    await fs.writeFile(secretFile, cachedSecret, "utf8")
  }
  return cachedSecret
}

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex")
  const hash = crypto.scryptSync(password, salt, 64).toString("hex")
  return `${salt}:${hash}`
}

export function verifyPassword(password, stored) {
  const [salt, hash] = String(stored || "").split(":")
  if (!salt || !hash) return false
  const candidate = crypto.scryptSync(password, salt, 64)
  const expected = Buffer.from(hash, "hex")
  if (candidate.length !== expected.length) return false
  return crypto.timingSafeEqual(candidate, expected)
}

export async function signToken(payload) {
  const secret = await getSecret()
  const now = Math.floor(Date.now() / 1000)
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url")
  const body = Buffer.from(JSON.stringify({ ...payload, iat: now, exp: now + SESSION_TTL })).toString("base64url")
  const signature = crypto.createHmac("sha256", secret).update(`${header}.${body}`).digest("base64url")
  return `${header}.${body}.${signature}`
}

export async function verifyToken(token) {
  if (!token) return null
  const parts = token.split(".")
  if (parts.length !== 3) return null
  const [header, body, signature] = parts
  const secret = await getSecret()
  const expected = crypto.createHmac("sha256", secret).update(`${header}.${body}`).digest()
  const given = Buffer.from(signature, "base64url")
  if (given.length !== expected.length || !crypto.timingSafeEqual(given, expected)) return null
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"))
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return null
    return payload
  } catch {
    return null
  }
}

export function getSessionFromRequest(request) {
  const token = request.cookies.get(SESSION_COOKIE)?.value
  return verifyToken(token)
}

export async function getSession() {
  const store = await cookies()
  return verifyToken(store.get(SESSION_COOKIE)?.value)
}

export async function requireAdmin() {
  const session = await getSession()
  if (!session || session.role !== "admin") return null
  return session
}

export const sessionCookieName = SESSION_COOKIE

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_TTL,
}
