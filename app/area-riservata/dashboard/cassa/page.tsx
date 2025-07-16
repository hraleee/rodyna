"use client";
import { useState, useEffect, useRef } from "react";
import LoaderPulseCircle from "@/components/Loader/loader-motion";
import { toast } from "sonner";

export default function Cassa() {
  const [barcode, setBarcode] = useState("");
  const [prodotti, setProdotti] = useState<any[]>([]); // prodotti aggiunti allo scontrino
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOnlyPriceModal, setShowOnlyPriceModal] = useState(false);
  const [onlyPrice, setOnlyPrice] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [prodotti]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!input) return;
    setLoading(true);
    // Prova a caricare il prodotto dal backend
    const res = await fetch(`/api/prodotti/${input}`);
    setLoading(false);
    if (res.ok) {
      const prodotto = await res.json();
      setProdotti(prev => {
        // Somma quantità solo se barcode reale
        if (prodotto.barcode !== "GENERIC") {
          const idx = prev.findIndex(p => p.barcode === prodotto.barcode);
          if (idx !== -1) {
            return prev.map((p, i) => i === idx ? { ...p, qty: (p.qty || 1) + 1 } : p);
          }
        }
        return [...prev, { ...prodotto, qty: 1 }];
      });
      setInput("");
      setBarcode("");
    } else {
      toast.error("Prodotto non trovato", {
        description: `Barcode: ${input}`,
        style: { background: '#d32f2f', color: 'white' },
        icon: '❌',
      });
      setInput("");
      setBarcode("");
    }
  }

  function addOnlyPrice() {
    if (!onlyPrice) return;
    setProdotti(prev => [
      ...prev,
      {
        barcode: "GENERIC",
        nome: undefined,
        prezzo: parseFloat(onlyPrice),
        generico: true,
        qty: 1,
      },
    ]);
    setShowOnlyPriceModal(false);
    setOnlyPrice("");
    setInput("");
    setBarcode("");
  }

  function removeProdotto(idx: number) {
    setProdotti(prev => prev.filter((_, i) => i !== idx));
  }

  function changeQty(idx: number, delta: number) {
    setProdotti(prev => prev.map((p, i) => i === idx ? { ...p, qty: Math.max(1, (p.qty || 1) + delta) } : p));
  }

  const totale = prodotti.reduce((sum, p) => sum + (parseFloat(p.prezzo) || 0) * (p.qty || 1), 0);

  return (
    <div className="max-w-8xl mx-auto mt-4 md:mt-10 bg-white rounded shadow p-4 md:p-10">
      {loading && <LoaderPulseCircle text="Caricamento prodotto..." />}
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Cassa</h1>
      <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-2 mb-4 md:mb-6">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 border rounded px-3 py-2"
          placeholder="Scansiona o inserisci barcode"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-primaryBlue text-white px-4 md:px-6 py-2 rounded font-semibold hover:bg-[#283593] w-full sm:w-auto" disabled={loading || !input}>Aggiungi</button>
          <button type="button" className="bg-primaryBlue/80 text-white px-4 py-2 rounded font-semibold hover:bg-[#283593] w-full sm:w-auto" disabled={loading} onClick={() => setShowOnlyPriceModal(true)}>Aggiungi solo prezzo</button>
        </div>
      </form>
      {/* Modal per aggiunta solo prezzo */}
      {showOnlyPriceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-xs mx-auto flex flex-col gap-4">
            <div className="text-lg font-bold mb-2 text-primaryBlue">Aggiungi solo prezzo</div>
            <input type="number" step="0.01" className="border rounded px-3 py-2" placeholder="Prezzo" value={onlyPrice} onChange={e => setOnlyPrice(e.target.value)} autoFocus />
            <div className="flex gap-2">
              <button className="flex-1 bg-primaryBlue text-white py-2 rounded font-semibold hover:bg-[#283593]" onClick={addOnlyPrice}>Aggiungi</button>
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded font-semibold hover:bg-gray-300" onClick={() => { setShowOnlyPriceModal(false); setOnlyPrice(""); }}>Annulla</button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile: lista card */}
      <div className="md:hidden flex flex-col gap-4 mb-4">
        {prodotti.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-base">Nessun prodotto aggiunto</div>
        )}
        {prodotti.map((p, idx) => (
          <div key={idx} className="rounded shadow border p-4 flex flex-col gap-2 bg-gray-50">
            {p.barcode !== "GENERIC" && (
              <div className="font-mono font-bold text-base break-all">{p.barcode}</div>
            )}
            <div className="font-semibold text-lg">{p.nome || <span className="italic text-gray-400">Prodotto generico</span>}</div>
            <div className="flex justify-between text-base">
              <span>Prezzo:</span>
              <span className="font-bold">{p.prezzo} €</span>
            </div>
            <div className="flex justify-between items-center text-base">
              <span>Quantità:</span>
              <div className="flex items-center gap-2">
                <button type="button" className="text-lg text-primaryBlue bg-gray-100 rounded px-3 font-bold hover:bg-primaryBlue/10" onClick={() => changeQty(idx, -1)} disabled={p.qty <= 1}>-</button>
                <span className="mx-2 w-8 text-center inline-block text-lg">{p.qty || 1}</span>
                <button type="button" className="text-lg text-primaryBlue bg-gray-100 rounded px-3 font-bold hover:bg-primaryBlue/10" onClick={() => changeQty(idx, 1)}>+</button>
              </div>
            </div>
            <div className="flex justify-between text-base">
              <span>Totale:</span>
              <span className="font-bold">{((parseFloat(p.prezzo) || 0) * (p.qty || 1)).toFixed(2)} €</span>
            </div>
            <button className="bg-red-600 text-white font-bold rounded px-4 py-2 mt-2 hover:bg-red-700 transition self-end" onClick={() => removeProdotto(idx)} type="button" title="Elimina">
              Elimina
            </button>
          </div>
        ))}
      </div>
      {/* Desktop: tabella classica */}
      <div className="hidden md:block mb-4 md:mb-6 overflow-x-auto">
        <table className="w-full border rounded shadow text-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="hidden md:table-cell px-8 py-5 text-left">Barcode</th>
              <th className="px-8 py-5 text-left">Nome</th>
              <th className="px-8 py-5 text-left">Prezzo</th>
              <th className="px-8 py-5 text-left">Quantità</th>
              <th className="px-8 py-5 text-left">Totale Riga</th>
              <th className="px-8 py-5 text-left">Azioni</th>
            </tr>
          </thead>
          <tbody>
            {prodotti.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-12 text-gray-400 text-2xl">Nessun prodotto aggiunto</td>
              </tr>
            )}
            {prodotti.map((p, idx) => (
              <tr key={idx} className="border-b align-middle hover:bg-primaryBlue/5 transition">
                <td className="hidden md:table-cell px-8 py-5 font-mono font-bold text-lg break-words align-middle">{p.barcode}</td>
                <td className="px-8 py-5 font-semibold text-xl break-words align-middle">{p.nome || <span className="italic text-gray-400">Prodotto generico</span>}</td>
                <td className="px-8 py-5 font-bold text-xl break-words align-middle">{p.prezzo} €</td>
                <td className="px-8 py-5 align-middle">
                  <div className="flex items-center gap-4 justify-center">
                    <button type="button" className="text-2xl text-primaryBlue bg-gray-100 rounded px-5 font-bold hover:bg-primaryBlue/10" onClick={() => changeQty(idx, -1)} disabled={p.qty <= 1}>-</button>
                    <span className="mx-2 w-12 text-center inline-block text-2xl">{p.qty || 1}</span>
                    <button type="button" className="text-2xl text-primaryBlue bg-gray-100 rounded px-5 font-bold hover:bg-primaryBlue/10" onClick={() => changeQty(idx, 1)}>+</button>
                  </div>
                </td>
                <td className="px-8 py-5 font-bold text-xl break-words align-middle">{((parseFloat(p.prezzo) || 0) * (p.qty || 1)).toFixed(2)} €</td>
                <td className="px-8 py-5 text-center align-middle">
                  <button className="bg-red-600 text-white font-bold rounded px-8 py-3 hover:bg-red-700 transition text-lg" onClick={() => removeProdotto(idx)} type="button" title="Elimina">
                    Elimina
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right text-xl md:text-2xl font-bold text-primaryBlue mt-4">Totale: {totale.toFixed(2)} €</div>
    </div>
  );
} 