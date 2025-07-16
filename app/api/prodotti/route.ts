import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoriaId = searchParams.get("categoriaId");
  const search = searchParams.get("search"); // può essere barcode o nome

  const where: any = {};
  if (categoriaId) where.categoriaId = categoriaId;
  if (search) {
    where.OR = [
      { barcode: { contains: search, mode: "insensitive" } },
      { nome: { contains: search, mode: "insensitive" } },
    ];
  }

  const prodotti = await prisma.prodotto.findMany({
    where,
    include: { categoria: true },
    orderBy: { nome: "asc" },
  });
  return NextResponse.json(prodotti);
} 