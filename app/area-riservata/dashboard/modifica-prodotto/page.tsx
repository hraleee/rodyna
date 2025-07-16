"use client";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function ModificaProdotto() {
  const [barcode, setBarcode] = useState("");
  const [prodotto, setProdotto] = useState<any>(null);
  const [categorie, setCategorie] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/categorie")
      .then(res => res.json())
      .then(data => setCategorie(data));
  }, []);

  async function handleLoad() {
    setError("");
    setProdotto(null);
    setLoading(true);
    const res = await fetch(`/api/prodotti/${barcode}`);
    setLoading(false);
    if (res.ok) {
      setProdotto(await res.json());
    } else {
      setError("Prodotto non trovato");
    }
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    const res = await fetch(`/api/prodotti/${barcode}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prodotto),
    });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      toast.success("Prodotto aggiornato con successo!", {
        description: `Il prodotto con barcode ${barcode} è stato aggiornato.`,
        style: { background: '#1976d2', color: 'white' },
        icon: '✅',
      });
    } else {
      setError("Errore nell'aggiornamento");
      toast.error("Errore nell'aggiornamento", {
        description: `Impossibile aggiornare il prodotto con barcode ${barcode}.`,
        style: { background: '#d32f2f', color: 'white' },
        icon: '❌',
      });
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded shadow p-8">
      {loading && <LoaderPulseCircle text="Caricamento..." />}
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">Modifica prodotto</h1>
      <div className="mb-4 flex gap-2">
        <input type="text" className="flex-1 border rounded px-3 py-2" placeholder="Barcode" value={barcode} onChange={e => setBarcode(e.target.value)} />
        <button onClick={handleLoad} className="bg-primaryBlue text-white px-4 py-2 rounded font-semibold hover:bg-[#283593]" disabled={loading || !barcode}>Carica</button>
      </div>
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      {prodotto && (
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Barcode visualizzato ma non modificabile */}
          <div>
            <label className="block mb-1 font-medium">Barcode</label>
            <input type="text" className="w-full border rounded px-3 py-2 bg-gray-100" value={prodotto.barcode} disabled />
          </div>
          <div>
            <label className="block mb-1 font-medium">Nome</label>
            <input type="text" className="w-full border rounded px-3 py-2" value={prodotto.nome} onChange={e => setProdotto({ ...prodotto, nome: e.target.value })} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Descrizione</label>
            <textarea className="w-full border rounded px-3 py-2" value={prodotto.descrizione || ""} onChange={e => setProdotto({ ...prodotto, descrizione: e.target.value })} />
          </div>
          <div>
            <label className="block mb-1 font-medium">Prezzo</label>
            <input type="number" step="0.01" className="w-full border rounded px-3 py-2" value={prodotto.prezzo} onChange={e => setProdotto({ ...prodotto, prezzo: parseFloat(e.target.value) })} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Categoria</label>
            <select className="w-full border rounded px-3 py-2" value={prodotto.categoriaId} onChange={e => setProdotto({ ...prodotto, categoriaId: e.target.value })} required>
              <option value="">Seleziona categoria</option>
              {categorie.map((cat: any) => (
                <option key={cat.id} value={cat.id}>{cat.nome}</option>
              ))}
            </select>
          </div>
          {success && <div className="text-green-600 text-sm">Prodotto aggiornato con successo!</div>}
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-primaryBlue text-white py-2 rounded font-semibold hover:bg-[#283593]" disabled={loading}>Aggiorna</button>
            <button type="button" className="flex-1 bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700" disabled={loading}
              onClick={async () => {
                setError("");
                setSuccess(false);
                setLoading(true);
                const res = await fetch(`/api/prodotti/${barcode}`, { method: "DELETE" });
                setLoading(false);
                if (res.ok) {
                  setProdotto(null);
                  setBarcode("");
                  setSuccess(false);
                  setError("");
                  toast.error("Prodotto eliminato", {
                    description: `Il prodotto con barcode ${barcode} è stato eliminato!`,
                    style: { background: '#d32f2f', color: 'white' },
                    icon: '🗑️',
                  });
                } else {
                  setError("Errore nell'eliminazione");
                  toast.error("Errore nell'eliminazione", {
                    description: `Impossibile eliminare il prodotto con barcode ${barcode}.`,
                    style: { background: '#d32f2f', color: 'white' },
                    icon: '❌',
                  });
                }
              }}
            >Elimina</button>
          </div>
        </form>
      )}
    </div>
  );
} 