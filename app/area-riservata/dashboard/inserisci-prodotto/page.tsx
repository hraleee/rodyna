"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function InserisciProdotto() {
  const [barcode, setBarcode] = useState("");
  const [nome, setNome] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [categorie, setCategorie] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/categorie")
      .then(res => res.json())
      .then(data => setCategorie(data));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    const res = await fetch("/api/prodotti/nuovo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barcode, nome, descrizione, prezzo: parseFloat(prezzo), categoriaId }),
    });
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setBarcode(""); setNome(""); setDescrizione(""); setPrezzo(""); setCategoriaId("");
      toast.success("Prodotto inserito con successo!", {
        description: `Il prodotto con barcode ${barcode} è stato inserito.`,
        style: { background: '#1976d2', color: 'white' },
        icon: '✅',
      });
    } else {
      const data = await res.json();
      setError(data.message || "Errore nell'inserimento");
      toast.error("Errore nell'inserimento", {
        description: data.message || `Impossibile inserire il prodotto con barcode ${barcode}.`,
        style: { background: '#d32f2f', color: 'white' },
        icon: '❌',
      });
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded shadow p-8">
      {loading && <LoaderPulseCircle text="Salvataggio..." />}
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">Inserisci nuovo prodotto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Barcode</label>
          <input type="text" className="w-full border rounded px-3 py-2" value={barcode} onChange={e => setBarcode(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Nome</label>
          <input type="text" className="w-full border rounded px-3 py-2" value={nome} onChange={e => setNome(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Descrizione</label>
          <textarea className="w-full border rounded px-3 py-2" value={descrizione} onChange={e => setDescrizione(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Prezzo</label>
          <input type="number" step="0.01" className="w-full border rounded px-3 py-2" value={prezzo} onChange={e => setPrezzo(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Categoria</label>
          <select className="w-full border rounded px-3 py-2" value={categoriaId} onChange={e => setCategoriaId(e.target.value)} required>
            <option value="">Seleziona categoria</option>
            {categorie.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.nome}</option>
            ))}
          </select>
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">Prodotto inserito con successo!</div>}
        <button type="submit" className="w-full bg-primaryBlue text-white py-2 rounded font-semibold hover:bg-[#283593]" disabled={loading}>
          {loading ? "Salvataggio..." : "Inserisci"}
        </button>
      </form>
    </div>
  );
} 