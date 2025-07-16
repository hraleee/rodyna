"use client";
import { useEffect, useState, useRef } from "react";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function ListaProdotti() {
  const [prodotti, setProdotti] = useState<any[]>([]);
  const [categorie, setCategorie] = useState<any[]>([]);
  const [categoriaId, setCategoriaId] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<any | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
              <th className="px-2 py-2 text-left w-32 md:w-auto">Barcode</th>
              <th className="px-2 py-2 text-left w-32 md:w-auto">Nome</th>
              <th className="px-2 py-2 text-left w-24 md:w-auto">Categoria</th>
              <th className="px-2 py-2 text-left w-20 md:w-auto">Prezzo</th>
            </tr>
          </thead>
          <tbody>
            {prodotti.length === 0 && !loading && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-400">Nessun prodotto trovato</td>
              </tr>
            )}
            {prodotti.map((p) => (
              <tr
                key={p.barcode}
                className="border-b hover:bg-primaryBlue/10 transition cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <td className="px-2 py-2 font-mono max-w-[90px] truncate md:max-w-none md:px-4" title={p.barcode}>
                  <span className="block md:hidden text-xs truncate" style={{maxWidth:'80px'}}>{p.barcode}</span>
                  <span className="hidden md:block">{p.barcode}</span>
                </td>
                <td className="px-2 py-2 max-w-[90px] truncate md:max-w-none md:px-4" title={p.nome}>
                  <span className="block md:hidden text-xs truncate" style={{maxWidth:'80px'}}>{p.nome}</span>
                  <span className="hidden md:block">{p.nome}</span>
                </td>
                <td className="px-2 py-2 md:px-4">
                  <span className="block md:hidden text-xs truncate" style={{maxWidth:'70px'}}>{p.categoria?.nome || "-"}</span>
                  <span className="hidden md:block">{p.categoria?.nome || "-"}</span>
                </td>
                <td className="px-2 py-2 md:px-4">
                  <span className="block md:hidden text-xs">{p.prezzo} €</span>
                  <span className="hidden md:block">{p.prezzo} €</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal dettagli prodotto */}
      {selected && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2"
          onClick={e => { if (e.target === modalRef.current) setSelected(null); }}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setSelected(null)}
              aria-label="Chiudi"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-primaryBlue">Dettagli Prodotto</h2>
            <div className="mb-2"><b>Barcode:</b> <span className="font-mono break-all">{selected.barcode}</span></div>
            <div className="mb-2"><b>Nome:</b> {selected.nome}</div>
            <div className="mb-2"><b>Descrizione:</b> {selected.descrizione || <span className="italic text-gray-400">Nessuna</span>}</div>
            <div className="mb-2"><b>Categoria:</b> {selected.categoria?.nome || "-"}</div>
            <div className="mb-2"><b>Prezzo:</b> {selected.prezzo} €</div>
          </div>
        </div>
      )}
    </div>
  );
} 