"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense, useState } from "react";
import CookieBanner from "@/components/Google/cookie-banner";
import GoogleAnalytics from "@/components/Google/google-analytics";
import { Sheet, SheetHeader, SheetDescription, SheetTitle, SheetContent } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <html>
      <head>
        <Suspense fallback={null}>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-1234567890" />
        </Suspense>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Cookie Banner e Sheet globali */}
        <CookieBanner onInfoClick={() => setOpen(true)} />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{t("cookie_sheet_title")}</SheetTitle>
              <SheetDescription>
                {t("cookie_sheet_intro")}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>{t("cookie_sheet_text")}</p>
              <ul className="list-disc pl-5 mt-2">
                <li><b>{t("cookie_sheet_list_tech")}</b></li>
                <li><b>{t("cookie_sheet_list_analytics")}</b></li>
              </ul>
              <p className="mt-2">
                {t("cookie_sheet_more")}
                <a href="/privacy" className="underline text-primaryBlue">{t("cookie_sheet_privacy_link")}</a>.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </body>
    </html>
  );
}
