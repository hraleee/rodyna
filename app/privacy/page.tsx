"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { userFaqs } from "@/lib/mock";
import { Search } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/languageSwitcher";

export default function Page() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10 px-2">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-primaryBlue/90 rounded-full p-4 shadow-lg mb-4">
          <Search className="text-white w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-primaryBlue mb-2 tracking-tight">Privacy & Cookie Policy</h1>
        <p className="text-muted-foreground text-center max-w-xl">Scopri come gestiamo i tuoi dati e i cookie per offrirti la migliore esperienza possibile.</p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/90">
          <CardHeader>
            <CardTitle className="text-2xl text-primaryBlue">Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-gray-700">
            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo (computer, smartphone, tablet) quando li visiti. Servono a memorizzare informazioni sulla tua navigazione per offrirti un'esperienza migliore, più veloce e personalizzata.
            </p>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Tipologie di cookie utilizzati</h2>
            <ul className="list-disc pl-5">
              <li>
                <strong>Cookie tecnici necessari:</strong> indispensabili per il corretto funzionamento del sito. Senza questi cookie, alcuni servizi non sarebbero accessibili.
              </li>
              <li>
                <strong>Cookie di preferenza:</strong> permettono al sito di ricordare informazioni che modificano il comportamento o l'aspetto del sito, come la lingua preferita o la regione in cui ti trovi.
              </li>
              <li>
                <strong>Cookie statistici (analytics):</strong> raccolgono dati aggregati e anonimi sull'uso del sito per migliorarne le prestazioni e l'usabilità. Vengono raccolti solo previo consenso.
              </li>
              <li>
                <strong>Cookie di marketing e profilazione:</strong> vengono utilizzati per monitorare i visitatori nei siti web e proporre annunci pubblicitari pertinenti. Vengono attivati solo con il tuo consenso esplicito.
              </li>
            </ul>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Cookie di terze parti</h2>
            <p>
              Il nostro sito può utilizzare servizi di terze parti (es. Google Analytics, Meta Pixel) che impostano cookie per raccogliere dati anonimi a fini statistici o di marketing. Le informazioni raccolte sono gestite dalle rispettive privacy policy:
            </p>
            <ul className="list-disc pl-5">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">Privacy Policy di Google</a></li>
              <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">Cookie Policy di Meta</a></li>
            </ul>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Gestione del consenso</h2>
            <p>
              Al primo accesso, ti verrà richiesto di esprimere il tuo consenso all'uso dei cookie non essenziali tramite un banner. Puoi modificare le tue preferenze in qualsiasi momento cliccando su "Gestisci preferenze cookie".
            </p>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Come disabilitare i cookie</h2>
            <p>
              Puoi gestire o disabilitare i cookie direttamente dalle impostazioni del tuo browser. Tuttavia, disabilitare i cookie tecnici può compromettere la funzionalità del sito. Ecco i link alle guide dei principali browser:
            </p>
            <ul className="list-disc pl-5">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primaryBlue underline">Internet Explorer</a></li>
            </ul>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento è <strong>[Rodyna]</strong>, con sede in <strong>[via Trieste 92 Pomigliano d'Arco cap 80038]</strong>. Per qualsiasi richiesta relativa ai dati personali o ai cookie, puoi contattarci via email a: <strong>[onlinerodyna@gmail.com]</strong>.
            </p>

            <h2 className="text-lg font-semibold text-primaryBlue mt-4">Modifiche alla Cookie Policy</h2>
            <p>
              Questa Cookie Policy può essere aggiornata in futuro per riflettere eventuali modifiche normative o tecniche. Ti invitiamo a consultarla periodicamente.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
