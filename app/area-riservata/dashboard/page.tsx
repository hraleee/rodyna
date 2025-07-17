"use client";
import { useState } from "react";
import LoaderPulseCircle from "@/components/Loader/loader-motion";
import dynamic from "next/dynamic";
import { BiBarcode } from "react-icons/bi";

const BarcodeScanner = dynamic(() => import("@/components/BarcodeScanner/barcodeScanner"), { ssr: false });

export default function AdminDashboardHome() {
  const [barcode, setBarcode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);
    const res = await fetch(`/api/prodotti/${barcode}`);
    setLoading(false);
    if (res.ok) {
      setResult(await res.json());
    } else {
      setError("Prodotto non trovato");
    }
  }

  function handleBarcodeScanned(scanned: string) {
    setBarcode(scanned);
    setShowScanner(false);
  }

  return (
    <div className="max-w-xl mx-auto mt-2 md:mt-10">
      {loading && <LoaderPulseCircle text="Caricamento..." />}
      <h1 className="text-2xl font-bold mb-6">Ricerca prodotto per barcode</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4 relative">
        <input
          type="text"
          placeholder="Inserisci barcode"
          className="border rounded px-3 py-2 flex-1"
          value={barcode}
          onChange={e => setBarcode(e.target.value)}
          required
        />
        {/* Bottone barcode solo su mobile */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center bg-gray-200 rounded px-3 py-2 ml-2"
          onClick={() => setShowScanner(true)}
          aria-label="Scannerizza barcode"
        >
          <BiBarcode size={24} />
        </button>
        <button type="submit" className="bg-primaryBlue text-white px-4 py-2 rounded font-semibold">Cerca</button>
      </form>
      {/* Modal scanner barcode */}
      {showScanner && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-xs w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowScanner(false)}
              aria-label="Chiudi scanner"
            >
              ✕
            </button>
            <BarcodeScanner onScanned={handleBarcodeScanned} />
            <div className="text-center text-sm mt-2 text-gray-500">Inquadra il barcode</div>
          </div>
        </div>
      )}
      {error && <div className="text-red-600">{error}</div>}
      {result && (
        <div className="bg-white rounded shadow p-4 mt-4">
          <div><b>Barcode:</b> {result.barcode}</div>
          <div><b>Nome:</b> {result.nome}</div>
          <div><b>Descrizione:</b> {result.descrizione}</div>
          <div><b>Prezzo:</b> {result.prezzo} €</div>
        </div>
      )}
    </div>
  );
} 