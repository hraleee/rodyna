"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoaderPulseCircle from "@/components/Loader/loader-motion";
import { ArrowLeft } from "lucide-react";

export default function AreaRiservata() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/area-riservata/dashboard");
    } else {
      const data = await res.json();
      setError(data.message || "Login fallito");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 relative">
      {/* Pulsante Torna indietro in alto a sinistra, sempre visibile */}
      <button
        type="button"
        className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 border border-gray-300 shadow px-4 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-200 transition z-10"
        onClick={() => router.push("/")}
        style={{ backdropFilter: 'blur(2px)' }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Torna indietro</span>
      </button>
      {/* Form login centrato */}
      {loading && <LoaderPulseCircle text="Accesso in corso..." />}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-sm" style={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
        <h1 className="text-2xl font-bold mb-6 text-center">Area Riservata</h1>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={username}
            onChange={e => setUsername(e.target.value.toLowerCase())}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <button type="submit" className="w-full bg-[#1a237e] text-white py-2 rounded font-semibold hover:bg-[#283593]">Login</button>
      </form>
    </div>
  );
} 