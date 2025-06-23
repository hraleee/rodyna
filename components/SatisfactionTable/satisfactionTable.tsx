"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function SatisfactionTable() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, 12359, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count]);

  return (
    <div className="overflow-x-auto w-full max-w-md md:max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-blue-200">
      <table className="w-full text-center text-primary">
        <thead>
          <tr className="bg-primaryBlue text-white">
            <th className="py-3 px-4 text-lg font-semibold">Statistiche Clienti</th>
            <th className="py-3 px-4 text-lg font-semibold md:hidden">Valore</th>
          </tr>
        </thead>
        <tbody>
  {/* Riga desktop: numero su tutta la tabella */}
  <tr className="hidden md:table-row">
    <td colSpan={2} className="py-8 px-4 font-bold text-6xl text-[#1a237e] text-center">
      <motion.span>{rounded}</motion.span>
      <div className="text-2xl font-medium text-gray-700 mt-4">Clienti Soddisfatti</div>
    </td>
  </tr>
  {/* Riga mobile: classica */}
  <tr className="md:hidden border-t border-blue-100 hover:bg-blue-50 transition">
    <td className="py-4 px-4 font-medium">Clienti Soddisfatti</td>
    <td className="py-4 px-4 font-bold text-2xl text-[#1a237e] md:hidden">
      <motion.span>{rounded}</motion.span>
    </td>
  </tr>
</tbody>
      </table>
    </div>
  );
}
