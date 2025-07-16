"use client";
import { useState } from "react";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function AdminDashboardHome() {
  const [barcode, setBarcode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="max-w-xl mx-auto mt-10">
      {loading && <LoaderPulseCircle text="Caricamento..." />}
      <h1 className="text-2xl font-bold mb-6">Ricerca prodotto per barcode</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Inserisci barcode"
          className="border rounded px-3 py-2 flex-1"
          value={barcode}
          onChange={e => setBarcode(e.target.value)}
          required
        />
        <button type="submit" className="bg-primaryBlue text-white px-4 py-2 rounded font-semibold">Cerca</button>
      </form>
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