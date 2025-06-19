"use client"
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';

export default function Page() {
  return (
    <main className="flex flex-col gap-12 py-12 px-4 md:px-8 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl shadow-xl">
      <motion.h1
        className="text-5xl font-extrabold text-primary mb-8 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Chi siamo
      </motion.h1>

      {/* Card descrizione negozio */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="text-lg bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardContent className="space-y-6 py-8 px-6">
            <p className="leading-relaxed text-muted-foreground text-xl">
              Siamo un negozio di alimentari specializzato nei prodotti dell'Est Europa, nato nel 2010 dalla passione di due ragazze ucraine che hanno voluto portare un pezzo della loro terra in Italia.
            </p>
            <p className="leading-relaxed text-muted-foreground text-xl">
              Da oltre un decennio, offriamo ai nostri clienti una selezione autentica di prodotti tradizionali: salumi, formaggi, dolci, conserve e bevande provenienti da Polonia, Ucraina, Romania, Moldavia e Georgia.
            </p>
            <p className="leading-relaxed text-muted-foreground text-xl">
              Il nostro obiettivo è creare un punto di riferimento per le comunità dell'Est Europa che vivono in Italia, ma anche per chiunque voglia scoprire i sapori genuini e ricchi di storia di queste terre.
            </p>
            <p className="leading-relaxed text-muted-foreground text-xl">
              Vieni a trovarci e lasciati trasportare in un viaggio gastronomico fatto di tradizione, cultura e autenticità.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-700 to-yellow-400 opacity-70" />
      </div>

      {/* Card fondatrici animate */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="bg-gradient-to-b from-blue-700 to-yellow-300 border-0 shadow-2xl">
          <CardContent>
            <h2 className="text-3xl font-semibold mb-8 text-center text-white drop-shadow">Le nostre fondatrici</h2>
            <div className="flex flex-col sm:flex-row gap-8">
              <motion.div
                whileHover={{ scale: 1.04, rotate: -2 }}
                className="flex-1 bg-white/90 rounded-2xl p-8 text-primary shadow-lg border border-blue-100 flex flex-col items-center transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-primaryBlue flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-3 border-4 border-blue-700">L</div>
                <h3 className="text-2xl font-bold mb-2">Lidiya <span className="ml-2 px-2 py-1 text-xs rounded bg-blue-700 text-white font-semibold">Co-founder</span></h3>
                <p className="text-center text-lg">Originaria di Zališčyky, Lidiya ha sempre avuto una grande passione per la cucina tradizionale ucraina. È la mente dietro la selezione dei prodotti più autentici e genuini.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, rotate: 2 }}
                className="flex-1 bg-white/90 rounded-2xl p-8 text-primary shadow-lg border border-blue-100 flex flex-col items-center transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-primaryBlue flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-3 border-4 border-yellow-300">S</div>
                <h3 className="text-2xl font-bold mb-2">Svetlana <span className="ml-2 px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700 font-semibold">Co-founder</span></h3>
                <p className="text-center text-lg">Nata a Zališčyky, Svetlana si occupa della gestione del negozio e dell'accoglienza dei clienti, sempre con il sorriso e la voglia di far sentire tutti a casa.</p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-700 to-yellow-400 opacity-70" />
      </div>

      {/* Card motto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="bg-gradient-to-r from-blue-700 to-yellow-400 text-white text-center py-12 border-0 shadow-xl">
          <CardContent>
            <p className="text-2xl italic font-semibold max-w-xl mx-auto drop-shadow-lg">
              "Portiamo i sapori dell'Est Europa nel cuore dell'Italia, con amore, tradizione e autenticità."
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-blue-700 to-yellow-400 opacity-70" />
      </div>

      {/* Carousel recensioni Google con Embla */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="mt-8 bg-white/90 border-0 shadow-2xl">
          <CardContent>
            <h2 className="text-3xl font-semibold mb-8 text-center text-primary drop-shadow">Cosa dicono i nostri clienti</h2>
            <ReviewsCarouselModern />
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}

// Carousel moderno con Embla
function ReviewsCarouselModern() {
  const reviews = [
    {
      name: "Yulia Hudz",
      date: "5 mesi fa",
      text: "Negozio 🔝 💯 per la qualità e l'assortimento dei prodotti. Birre e altre bibite, cioccolato, tisane, salumi e 'chi più ne ha, più ne metta'. A 'ogni ben di Dio' si aggiunge la professionalità, la cortesia, la disponibilità del personale e la pulizia del negozio 💯💯💯",
      stars: 5,
    },
    {
      name: "Kirill Maksiuta",
      date: "9 mesi fa",
      text: "Negozio ben fornito, personale gentile e disponibile. Consigliatissimo!!!",
      stars: 5,
    },
    {
      name: "Taras Vayda",
      date: "2 anni fa",
      text: "Negozio ben fornito, personale molto educato e gentile. Prodotti sempre freschi, prezzo alla qualità. Consigliatissimo",
      stars: 5,
    },
    {
      name: "Олег Чорний",
      date: "2 anni fa",
      text: "Da quando ho iniziato a frequentare spesso questo negozio trovo sempre prodotti freschissimi, di qualità e con prezzo conveniente. Il negozio è ben organizzato e sistemato, le commesse sono molto cortesi. Vi consiglio vivamente di andarci!!",
      stars: 5,
    },
    {
      name: "Mariya Hudz",
      date: "5 mesi fa",
      text: "Personale gentilissimo. Prodotti di qualità 👌🏻👌🏻👌🏻",
      stars: 5,
    },
    {
      name: "Olga D.",
      date: "1 anno fa",
      text: "Un negozio bellissimo, pieno di prodotti ricercati e introvabili altrove... La ragazza è gentilissima e disponibile. Lo consiglio vivamente.",
      stars: 5,
    },
    {
      name: "Василь",
      date: "2 anni fa",
      text: "Sono più che soddisfatto. Prezzi ottimi, commesse molto gentili. Prodotti freschi e di qualità, c'è tutto e di più. Raccomando a tutti!!",
      stars: 5,
    },
    {
      name: "Scuola Formazione 5",
      date: "4 anni fa",
      text: "Complimenti, un negozio ben gestito con prezzi giusti e convenienti. Si trovano prodotti originali della Polonia, Ucraina, Moldavia, Romania ecc. ecc. Le ragazze che lo gestiscono sono molto gentili.",
      stars: 5,
    },
    {
      name: "Іван Лазар",
      date: "4 anni fa",
      text: "Personale molto cordiale ed accogliente, una grande scelta dei prodotti sempre freschi. Raccomando a tutti!",
      stars: 5,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll
  const scrollTo = useCallback((idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [emblaApi]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-full max-w-xl mx-auto" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="min-w-0 w-full flex-shrink-0 flex flex-col items-center px-4 py-8"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-16 h-16 rounded-full border-4 border-blue-200 bg-blue-100 flex items-center justify-center text-3xl font-bold text-primary shadow-md">
                  {review.name[0]}
                </div>
                <div className="font-semibold text-xl text-primary text-center">{review.name}</div>
                <div className="text-xs text-muted-foreground mb-1">{review.date}</div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 drop-shadow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-center text-lg text-gray-700 font-medium leading-relaxed flex-1 flex items-center justify-center max-w-md">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${i === selectedIndex ? 'bg-primary border-primary scale-110 shadow-lg' : 'bg-gray-200 border-gray-300'} focus:outline-none`}
            onClick={() => scrollTo(i)}
            aria-label={`Vai alla recensione ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
