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
    <div className={`absolute top-2 right-2 hidden md:flex items-center justify-end gap-1 z-50 ${className}`}>
      <span className="text-sm text-white font-medium mr-2">Language</span>
      <Select
        value={i18nInstance.language}
        onValueChange={value => i18n.changeLanguage(value)}
      >
        <SelectTrigger className="h-10 min-w-[120px] px-3 py-0 text-sm bg-white text-primaryBlue border border-primaryBlue rounded focus:ring-2 focus:ring-primaryBlue">
          <SelectValue placeholder="Seleziona" />
        </SelectTrigger>
        <SelectContent>
          {languages.map(lang => (
            <SelectItem key={lang.code} value={lang.code} className="text-sm">
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
     