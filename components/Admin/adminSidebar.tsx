"use client";
import { logout } from "@/app/actions/auth";
import { deleteSession } from "@/lib/session";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/area-riservata/dashboard", label: "Home" },
  { href: "/area-riservata/dashboard/inserisci-prodotto", label: "Inserisci Prodotto" },
  { href: "/area-riservata/dashboard/modifica-prodotto", label: "Modifica Prodotto" },
  { href: "/area-riservata/dashboard/lista-prodotti", label: "Lista Prodotti" },
  { href: "/area-riservata/dashboard/cassa", label: "Cassa" },
];

export default function AdminSidebar({ open, setOpen }: { open: boolean, setOpen: (v: boolean) => void }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await logout();
  }
  
  return (
    <>
      {/* Bottone hamburger solo su mobile, sempre visibile (ora gestito dal layout) */}
      {/* Overlay per mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-full w-64 bg-white border-r flex flex-col min-h-screen p-4 transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        style={{ boxShadow: open ? '0 0 0 9999px rgba(0,0,0,0.2)' : undefined }}
      >
        {/* Bottone chiudi solo su mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-primaryBlue bg-white rounded-full p-1 shadow focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Chiudi menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
        <div className="text-2xl font-bold mb-8 text-primaryBlue select-none">Admin</div>
        <nav className="flex-1 space-y-2">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded hover:bg-primaryBlue/10 font-medium ${pathname === link.href ? "bg-primaryBlue text-white" : "text-primaryBlue"}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-100 text-red-700 py-2 rounded font-semibold hover:bg-red-200"
        >
          Logout
        </button>
      </aside>
    </>
  );
} 