"use client"

import AdminSidebar from "@/components/Admin/adminSidebar";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        {/* Header fisso */}
        <header className="fixed top-0 left-0 w-full z-40 bg-white border-b flex items-center justify-between h-16 px-4 md:pl-72 shadow-sm">
          <span className="text-xl font-bold text-primaryBlue select-none">Area Riservata</span>
          {/* Bottone per aprire la sidebar su mobile */}
          <button
            className="md:hidden bg-primaryBlue text-white p-2 rounded-full shadow focus:outline-none"
            onClick={() => setSidebarOpen(true)}
            aria-label="Apri menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </header>
        {/* Spacer per header fisso */}
        <div className="h-16" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
} 