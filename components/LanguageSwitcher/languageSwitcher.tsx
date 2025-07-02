"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

const languages = [
  { code: "it", label: "Italiano" },
  { code: "ua", label: "Українська" },
  { code: "ro", label: "Română" },
  { code: "pl", label: "Polski" },
];

export function LanguageSwitcher({ className = "" }: { className?: string } = {}) {
  const { i18n: i18nInstance } = useTranslation();

  return (
    <>
      {/* Mobile only: fixed top right, hidden on desktop */}
      <div className={`flex md:hidden items-center gap-1 z-50 ${className}`}>
        <Select
          value={i18nInstance.language}
          onValueChange={value => i18n.changeLanguage(value)}
        >
          <SelectTrigger className="h-9 min-w-[44px] px-2 py-0 text-xs bg-white text-primaryBlue border border-primaryBlue rounded focus:ring-2 focus:ring-primaryBlue">
            <SelectValue placeholder="Lang" />
          </SelectTrigger>
          <SelectContent>
            {languages.map(lang => (
              <SelectItem key={lang.code} value={lang.code} className="text-xs">
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
