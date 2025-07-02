// app/layout.tsx
"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Footer } from "@/components/Footer/footer";
import Script from "next/script";
import CookieBanner from "@/components/Google/cookie-banner";
import GoogleAnalytics from "@/components/Google/google-analytics";
import { Suspense } from "react";
import { Sheet, SheetHeader, SheetDescription, SheetTitle, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Rodyna",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    >
     <head>
      {/* <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-4ZW5XQSDEQ`}
      strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4ZW5XQSDEQ');
        `}
      </Script> */}
     <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-1234567890' />
      </Suspense>
     </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5TXTXQK" 
          height="0" 
          width="0" 
          style={{display: "none", visibility: "hidden"}}>      
          </iframe>
        </noscript> */}
       
        <SidebarProvider>
          {/* Header mobile sticky con hamburger */}
          <div className="fixed top-0 left-0 z-30 w-full bg-[#1a237e] h-16 flex items-center justify-between px-4 md:hidden">
            <span className="text-white font-bold text-2xl select-none">RODYNA</span>
            <SidebarTrigger className="bg-white text-[#1a237e] rounded-full shadow" />
          </div>
          {/* Spazio per non coprire il contenuto */}
          <div className="h-16 md:hidden" />
          <AppSidebar className="bg-primaryBlue" />
          <SidebarInset>
            <SiteHeader />
            <main className="flex-grow">{children}</main> <Footer />
          </SidebarInset>
        </SidebarProvider>
        {(() => {
          const [open, setOpen] = useState(false);
          return <>
            <CookieBanner onInfoClick={() => setOpen(true)} />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Cookie Policy</SheetTitle>
                  <SheetDescription>
                    Questa Cookie Policy spiega cosa sono i cookie e come li usiamo. Utilizziamo i cookie per migliorare l'esperienza utente, analizzare il traffico e personalizzare i contenuti. Puoi scegliere di accettare o rifiutare i cookie tramite il banner in basso a destra. Per maggiori dettagli consulta la nostra informativa completa.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Utilizziamo cookie tecnici necessari al funzionamento del sito e cookie analitici per raccogliere dati aggregati sull'utilizzo della piattaforma. Puoi modificare le tue preferenze in qualsiasi momento.
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li><b>Cookie tecnici:</b> necessari per il funzionamento del sito.</li>
                    <li><b>Cookie analitici:</b> ci aiutano a capire come viene utilizzato il sito.</li>
                  </ul>
                  <p className="mt-2">
                    Per ulteriori informazioni consulta la nostra <a href="/privacy" className="underline text-primaryBlue">Privacy Policy</a>.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </>;
        })()}
      </body>
    </html>
  );
}
