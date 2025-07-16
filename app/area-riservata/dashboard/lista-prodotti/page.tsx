"use client";
import { useEffect, useState } from "react";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function ListaProdotti() {
  const [prodotti, setProdotti] = useState<any[]>([]);
  const [categorie, setCategorie] = useState<any[]>([]);
  const [categoriaId, setCategoriaId] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/categorie")
      .then(res => res.json())
      .then(data => setCategorie(data));
  }, []);

  useEffect(() => {
    loadProdotti();
    // eslint-disable-next-line
  }, [categoriaId]);

  async function loadProdotti(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");
    let url = "/api/prodotti?";
    if (categoriaId) url += `categoriaId=${categoriaId}&`;
    if (search) url += `search=${encodeURIComponent(search)}`;
    const res = await fetch(url);
    setLoading(false);
    if (res.ok) {
      setProdotti(await res.json());
    } else {
      setError("Errore nel caricamento prodotti");
    }
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded shadow p-8">
      {loading && <LoaderPulseCircle text="Caricamento prodotti..." />}
      <h1 className="text-2xl font-bold mb-6">Lista Prodotti</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block mb-1 font-medium">Categoria</label>
          <select className="w-full border rounded px-3 py-2" value={categoriaId} onChange={e => setCategoriaId(e.target.value)}>
            <option value="">Tutte</option>
            {categorie.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.nome}</option>
            ))}
          </select>
        </div>
        <form className="flex-1 flex items-end gap-2" onSubmit={loadProdotti}>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Cerca per barcode o nome</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Barcode o nome prodotto" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <button type="submit" className="h-10 px-6 bg-primaryBlue text-white rounded font-semibold hover:bg-[#283593]">Cerca</button>
        </form>
      </div>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Barcode</th>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Categoria</th>
              <th className="px-4 py-2 text-left">Prezzo</th>
            </tr>
          </thead>
          <tbody>
            {prodotti.length === 0 && !loading && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-400">Nessun prodotto trovato</td>
              </tr>
            )}
            {prodotti.map((p) => (
              <tr key={p.barcode} className="border-b hover:bg-primaryBlue/10 transition">
                <td className="px-4 py-2 font-mono max-w-[120px] truncate md:max-w-none" title={p.barcode}>{p.barcode}</td>
                <td className="px-4 py-2">{p.nome}</td>
                <td className="px-4 py-2">{p.categoria?.nome || "-"}</td>
                <td className="px-4 py-2">{p.prezzo} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 