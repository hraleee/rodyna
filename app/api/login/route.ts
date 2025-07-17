import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createSession } from "@/lib/session";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ message: "Username e password obbligatori" }, { status: 400 });
  }
  const user = await prisma.user.findUnique({ where: { username } });
  // Qui dovresti usare bcrypt per confrontare la password!
  if (!user || user.password !== password) {
    return NextResponse.json({ message: "Credenziali non valide" }, { status: 401 });
  }
  // CREA IL TOKEN E IL COOKIE
  await createSession(user.id);
  
  return NextResponse.json({ message: "Login ok" });
} 