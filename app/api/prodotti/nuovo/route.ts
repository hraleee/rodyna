import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { barcode, nome, descrizione, prezzo, categoriaId } = await req.json();
    const prodotto = await prisma.prodotto.create({
      data: {
        barcode,
        nome,
        descrizione,
        prezzo,
        categoriaId,
      },
      include: { categoria: true },
    });
    return NextResponse.json({ message: "Prodotto inserito", prodotto });
  } catch (error) {
    return NextResponse.json({ message: "Errore nell'inserimento" }, { status: 500 });
  }
} 