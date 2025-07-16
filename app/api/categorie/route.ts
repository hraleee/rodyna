import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
      const categorie = await prisma.categoria.findMany();
      return NextResponse.json(categorie);
    } catch (error) {
      console.error("Errore Prisma categorie:", error);
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
  }