"use client"
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from "react-i18next";
import LoaderPulseCircle from "@/components/Loader/loader-motion";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Footer } from "@/components/Footer/footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/languageSwitcher";

export default function Page() {
  const { t, i18n } = useTranslation();

  const [mounted, setMounted] = useState(false);
  const supported = ["it", "ua", "ro", "pl"];


  useEffect(() => {
    setMounted(true);
  }, []);
  // Mostra loader finché non è montato o la lingua non è supportata
  if (!mounted || !supported.includes(i18n.language)) {
    return <LoaderPulseCircle />;
  }

  return (
    <SidebarProvider>
      {/* Header mobile sticky */}
      <div className="fixed top-0 left-0 z-30 w-full bg-[#1a237e] h-16 flex items-center justify-between px-4 md:hidden">
        <span className="text-white font-bold text-2xl select-none truncate max-w-[50%]">RODYNA</span>
        <div className="flex items-center gap-2 max-w-[45%] justify-end">
          <SidebarTrigger className="bg-white text-[#1a237e] rounded-full shadow min-w-[36px] h-9" />
          <LanguageSwitcher className="min-w-[80px]" />
        </div>
      </div>
      <div className="h-16 md:hidden" />
      <AppSidebar className="bg-primaryBlue" />
      <SidebarInset>
        <SiteHeader />
        <main className="flex flex-col gap-12 py-8 px-2 sm:py-12 sm:px-4 md:px-8 max-w-5xl w-full mx-auto bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl shadow-xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-8 text-center drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {t("chi_siamo_title")}
          </motion.h1>

          {/* Card descrizione negozio */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="w-full text-base sm:text-lg md:text-xl bg-white/80 backdrop-blur-md border-0 shadow-lg">
              <CardContent className="space-y-4 sm:space-y-6 py-4 px-2 sm:py-8 sm:px-6">
                <p className="leading-relaxed text-muted-foreground">{t("chi_siamo_descr1")}</p>
                <p className="leading-relaxed text-muted-foreground">{t("chi_siamo_descr2")}</p>
                <p className="leading-relaxed text-muted-foreground">{t("chi_siamo_descr3")}</p>
                <p className="leading-relaxed text-muted-foreground">{t("chi_siamo_descr4")}</p>
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
            <Card className="w-full bg-gradient-to-b from-blue-700 to-yellow-300 border-0 shadow-2xl">
              <CardContent>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-white drop-shadow">{t("fondatrici_title")}</h2>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <motion.div
                    whileHover={{ scale: 1.04, rotate: -2 }}
                    className="flex-1 w-full bg-white/90 rounded-2xl p-4 sm:p-8 text-primary shadow-lg border border-blue-100 flex flex-col items-center transition-all"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primaryBlue flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg mb-3 border-4 border-blue-700">L</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{t("fondatrice1_nome")} <span className="ml-2 px-2 py-1 text-xs rounded bg-blue-700 text-white font-semibold">{t("fondatrice1_ruolo")}</span></h3>
                    <p className="text-center text-base sm:text-lg">{t("fondatrice1_descr")}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.04, rotate: 2 }}
                    className="flex-1 w-full bg-white/90 rounded-2xl p-4 sm:p-8 text-primary shadow-lg border border-blue-100 flex flex-col items-center transition-all"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primaryBlue flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg mb-3 border-4 border-yellow-300">S</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{t("fondatrice2_nome")} <span className="ml-2 px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700 font-semibold">{t("fondatrice2_ruolo")}</span></h3>
                    <p className="text-center text-base sm:text-lg">{t("fondatrice2_descr")}</p>
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
            <Card className="w-full bg-gradient-to-r from-blue-700 to-yellow-400 text-white text-center py-8 sm:py-12 border-0 shadow-xl">
              <CardContent>
                <p className="text-lg sm:text-2xl italic font-semibold max-w-xl mx-auto drop-shadow-lg">
                  {t("motto")}
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
            <Card className="w-full mt-8 bg-white/90 border-0 shadow-2xl">
              <CardContent>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-primary drop-shadow">{t("recensioni_title")}</h2>
                <ReviewsCarouselModern />
              </CardContent>
            </Card>
          </motion.div>
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}

// Carousel moderno con Embla
function ReviewsCarouselModern() {
  const { t } = useTranslation();
  const reviews = [
    {
      name: t("review_1_name"),
      date: t("review_1_date"),
      text: t("review_1_text"),
      stars: 5,
    },
    {
      name: t("review_2_name"),
      date: t("review_2_date"),
      text: t("review_2_text"),
      stars: 5,
    },
    {
      name: t("review_3_name"),
      date: t("review_3_date"),
      text: t("review_3_text"),
      stars: 5,
    },
    {
      name: t("review_4_name"),
      date: t("review_4_date"),
      text: t("review_4_text"),
      stars: 5,
    },
    {
      name: t("review_5_name"),
      date: t("review_5_date"),
      text: t("review_5_text"),
      stars: 5,
    },
    {
      name: t("review_6_name"),
      date: t("review_6_date"),
      text: t("review_6_text"),
      stars: 5,
    },
    {
      name: t("review_7_name"),
      date: t("review_7_date"),
      text: t("review_7_text"),
      stars: 5,
    },
    {
      name: t("review_8_name"),
      date: t("review_8_date"),
      text: t("review_8_text"),
      stars: 5,
    },
    {
      name: t("review_9_name"),
      date: t("review_9_date"),
      text: t("review_9_text"),
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
      <div className="overflow-hidden w-full max-w-xs sm:max-w-xl mx-auto" ref={emblaRef}>
        <div className="flex">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="min-w-0 w-full flex-shrink-0 flex flex-col items-center px-2 sm:px-4 py-6 sm:py-8"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-blue-200 bg-blue-100 flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary shadow-md">
                  {review.name[0]}
                </div>
                <div className="font-semibold text-base sm:text-xl text-primary text-center">{review.name}</div>
                <div className="text-xs text-muted-foreground mb-1">{review.date}</div>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 drop-shadow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-center text-base sm:text-lg text-gray-700 font-medium leading-relaxed flex-1 flex items-center justify-center max-w-md">{review.text}</p>
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
