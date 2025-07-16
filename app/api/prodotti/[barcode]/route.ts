import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET prodotto by barcode
export async function GET(req: NextRequest, context: { params: { barcode: string } }) {
  const { barcode } = await context.params;
  if (!barcode) {
    return NextResponse.json({ message: "Barcode mancante" }, { status: 400 });
  }
  const prodotto = await prisma.prodotto.findUnique({ where: { barcode } });
  if (!prodotto) {
    return NextResponse.json({ message: "Prodotto non trovato" }, { status: 404 });
  }
  return NextResponse.json(prodotto);
}

// PUT aggiorna prodotto by barcode (estrae barcode dall'URL)
export async function PUT(req: NextRequest) {
  // Estrai barcode dall'URL
  const url = new URL(req.url);
  const parts = url.pathname.split("/");
  const barcode = parts[parts.length - 1];

  if (!barcode) {
    return NextResponse.json({ message: "Barcode mancante" }, { status: 400 });
  }
  try {
    const data = await req.json();
    // Rimuovi barcode da data, se presente
    const { barcode: _barcode, ...updateData } = data;
    const prodotto = await prisma.prodotto.update({
      where: { barcode },
      data: updateData,
    });
    return NextResponse.json({ message: "Prodotto aggiornato", prodotto });
  } catch (error) {
    console.error("Errore nell'aggiornamento prodotto:", error);
    return NextResponse.json({ message: "Errore nell'aggiornamento", error: String(error) }, { status: 500 });
  }
}

// (Opzionale) POST qui non serve normalmente, ma lo lascio se ti serve per test
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
    });
    return NextResponse.json({ message: "Prodotto inserito", prodotto });
  } catch (error) {
    return NextResponse.json({ message: "Errore nell'inserimento" }, { status: 500 });
  }
}

// DELETE elimina prodotto by barcode
export async function DELETE(req: NextRequest) {
  // Estrai barcode dall'URL
  const url = new URL(req.url);
  const parts = url.pathname.split("/");
  const barcode = parts[parts.length - 1];

  if (!barcode) {
    return NextResponse.json({ message: "Barcode mancante" }, { status: 400 });
  }
  try {
    await prisma.prodotto.delete({
      where: { barcode },
    });
    return NextResponse.json({ message: "Prodotto eliminato" });
  } catch (error) {
    return NextResponse.json({ message: "Errore nell'eliminazione", error: String(error) }, { status: 500 });
  }
} 