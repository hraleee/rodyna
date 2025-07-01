// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Footer } from "@/components/Footer/footer";

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
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZW5XQSDEQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4ZW5XQSDEQ');
            `,
          }}
        />
      </head>

      

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
