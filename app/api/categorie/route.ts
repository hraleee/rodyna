import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const categorie = await prisma.categoria.findMany();
  return NextResponse.json(categorie);
} 