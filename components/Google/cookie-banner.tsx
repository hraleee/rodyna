"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }
    const newValue = cookieConsent ? "granted" : "denied";
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 bg-white shadow-2xl rounded-xl px-6 py-4 flex flex-col md:flex-row items-center gap-4 border border-gray-200 animate-fade-in max-w-lg w-[95vw]">
      <span className="text-gray-800 text-sm md:text-base text-center md:text-left">
        Questo sito utilizza cookie per migliorare l'esperienza utente. <a href="/privacy" className="underline text-primaryBlue hover:text-blue-800 transition">Scopri di più</a>.
      </span>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition font-medium"
          onClick={() => setCookieConsent(false)}
        >
          Rifiuta
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-primaryBlue text-white font-semibold hover:bg-blue-800 transition font-medium"
          onClick={() => setCookieConsent(true)}
        >
          Accetta
        </button>
      </div>
    </div>
  );
} 