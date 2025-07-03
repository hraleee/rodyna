"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/languageSwitcher";
import { useTranslation } from "react-i18next";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function Page() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const supported = ["it", "ua", "ro", "pl"];

  useEffect(() => {
    setMounted(true);
  }, []);
  // Mostra loader finché non è montato o la lingua non è supportata
  if (!mounted || !supported.includes(i18n.language)) {
    return <LoaderPulseCircle />;
  }   

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-2">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-primaryBlue/90 rounded-full p-4 shadow-lg mb-4">
          <Search className="text-white w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-primaryBlue mb-2 tracking-tight">{t("privacy_title")}</h1>
        <p className="text-muted-foreground text-center max-w-xl">{t("privacy_subtitle")}</p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/90">
          <CardHeader>
            <CardTitle className="text-2xl text-primaryBlue">{t("cookie_policy")}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-gray-700">
            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_cosa_sono_title")}</h2>
            <p>{t("cookie_cosa_sono_text")}</p>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_tipologie_title")}</h2>
            <ul className="list-disc pl-5">
              <li>{t("cookie_tecnici")}</li>
              <li>{t("cookie_preferenza")}</li>
              <li>{t("cookie_statistici")}</li>
              <li>{t("cookie_marketing")}</li>
            </ul>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_terze_title")}</h2>
            <p>{t("cookie_terze_text")}</p>
            <ul className="list-disc pl-5">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">{t("cookie_terze_google")}</a></li>
              <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">{t("cookie_terze_meta")}</a></li>
            </ul>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_gestione_title")}</h2>
            <p>{t("cookie_gestione_text")}</p>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_disabilitare_title")}</h2>
            <p>{t("cookie_disabilitare_text")}</p>
            <ul className="list-disc pl-5">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">{t("cookie_disabilitare_chrome")}</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">{t("cookie_disabilitare_firefox")}</a></li>
              <li><a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">{t("cookie_disabilitare_safari")}</a></li>
              <li><a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">{t("cookie_disabilitare_ie")}</a></li>
            </ul>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_titolare_title")}</h2>
            <p>{t("cookie_titolare_text")}</p>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">{t("cookie_modifiche_title")}</h2>
            <p>{t("cookie_modifiche_text")}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
