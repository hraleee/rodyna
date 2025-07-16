import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ message: "Username e password obbligatori" }, { status: 400 });
  }
  // Uso prisma.user.findUnique per cercare l'utente
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || user.password !== password) {
    return NextResponse.json({ message: "Credenziali non valide" }, { status: 401 });
  }
  const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1d" });
  const response = NextResponse.json({ message: "Login ok" });
  response.cookies.set("token_jwt_rodyna", token, { path: "/", sameSite: "lax", secure: process.env.NODE_ENV === "production" });
  return response;
} 