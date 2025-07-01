import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa i file di traduzione (che dovrai creare)
import translationIT from "../locales/it/translation.json";
import translationUA from "../locales/ua/translation.json";
import translationRO from "../locales/ro/translation.json";
import translationPL from "../locales/pl/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: translationIT },
      ua: { translation: translationUA },
      ro: { translation: translationRO },
      pl: { translation: translationPL },
    },
    fallbackLng: "it",
    interpolation: { escapeValue: false },
    detection: {
      // Qui forzi l'uso di sessionStorage
      order: ['sessionStorage', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['sessionStorage'],
    },
  });

export default i18n;