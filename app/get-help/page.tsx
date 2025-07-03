"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { useTranslation } from "react-i18next";
import LoaderPulseCircle from "@/components/Loader/loader-motion";

export default function Page() {
  const [search, setSearch] = useState("");
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const supported = ["it", "ua", "ro", "pl"];

  // Genera dinamicamente la lista delle FAQ in base alle chiavi di traduzione
  const faqs = [];
  for (let i = 1; ; i++) {
    const question = t(`faq_q${i}`);
    const answer = t(`faq_a${i}`);
    // Se la chiave non esiste o è uguale alla chiave stessa, interrompi il ciclo
    if (!question || question === `faq_q${i}`) break;
    faqs.push({ question, answer });
  }

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  // Mostra loader finché non è montato o la lingua non è supportata
  if (!mounted || !supported.includes(i18n.language)) {
    return <LoaderPulseCircle />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{t("gethelp_title")}</h1>

      <Input
        placeholder={t("gethelp_search_placeholder")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />

      <Card>
        <CardHeader>
          <CardTitle>{t("gethelp_faq_title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p className="text-muted-foreground text-sm">
                {t("gethelp_no_results")}
              </p>
            )}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
