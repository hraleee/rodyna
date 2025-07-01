// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Footer } from "@/components/Footer/footer";
import { GoogleAnalytics } from "@/components/Google-analytics/google-analytics";
import Script from "next/script";


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

export const metadata: Metadata = {
  title: "Rodyna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5TXTXQK');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5TXTXQK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
      </body>
    </html>
  );
}
