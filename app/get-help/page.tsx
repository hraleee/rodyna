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

export default function Page() {
  const [search, setSearch] = useState("");

  const filteredFaqs = userFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Centro Assistenza Utente</h1>

      <Input
        placeholder="Cerca una domanda..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />

      <Card>
        <CardHeader>
          <CardTitle>Domande Frequenti</CardTitle>
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
                Nessuna risposta trovata per la ricerca.
              </p>
            )}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
