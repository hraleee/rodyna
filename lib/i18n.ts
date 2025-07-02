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
  
    interpolation: { escapeValue: false },
    fallbackLng: "it",
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
      cookieMinutes: 60 * 24 * 365, // durata del cookie (qui 1 anno)
      // cookieDomain: window.location.hostname,
    },
    

  });

const supported = ["it", "ua", "ro", "pl"];
if (!supported.includes(i18n.language)) {
  i18n.changeLanguage("it");
}

i18n.on('languageChanged', (lng) => {
  if (!['it', 'ua', 'ro', 'pl'].includes(lng)) {
    i18n.changeLanguage('it');
  }
});

export default i18n;