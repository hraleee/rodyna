import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Singleton per evitare istanze duplicate su Vercel
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const categorie = await prisma.categoria.findMany();
    return NextResponse.json(categorie);
  } catch (error: any) {
    console.error("❌ Errore durante il fetch delle categorie:", error);
    return NextResponse.json(
      { error: "Errore interno nel server" },
      { status: 500 }
    );
  }
}
