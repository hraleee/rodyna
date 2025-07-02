"use client"
import Image from "next/image";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SatisfactionTable } from "@/components/SatisfactionTable/satisfactionTable";
import ProgressBars from "@/components/ProgressBars/progressBars";

const MapStore = dynamic(
  () => import("@/components/MapStore").then((mod) => mod.MapStore),
  {
    ssr: false,
  }
);

export default function Home() {
  const categories = [
    { title: "Salumi & Formaggi", img: "/salumi.jpg" },
    { title: "Pane & Dolci", img: "/dolci.jpg" },
    { title: "Conserve & Sottaceti", img: "/conserve.jpg" },
    { title: "Alcolici", img: "/alcolici.jpg" },
    { title: "Bevande", img: "/bevande.jpg" },
    { title: "Snack & Specialità", img: "/snack.jpg" },
  ];

  return (
    <main className="flex flex-col gap-12 py-12 px-4 md:px-8 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl shadow-xl">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/head-img.jpg"
            alt="Cibo dell'Est Europa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center drop-shadow-lg">
              RODYNA
            </h1>
          </div>
        </div>
      </motion.div>
      
      {/* Statistiche clienti soddisfatti */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <SatisfactionTable />
      </motion.div>
      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-primaryBlue via-pink-300 to-yellow-300 opacity-60" />
      </div>

      {/* Chi siamo / Offerta */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-8 sm:p-10 bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardContent className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Un viaggio gastronomico tra tradizione e autenticità
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Siamo un punto di riferimento per chi cerca prodotti genuini,
              tradizionali e di alta qualità provenienti da Polonia, Ucraina,
              Romania, Moldavia e Georgia. Da noi trovi tutto ciò che ti fa
              sentire a casa: salumi affumicati, formaggi artigianali, conserve
              fatte come una volta, dolci tipici e bevande uniche.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Il nostro negozio nasce per servire le comunità dell'Est Europa che
              vivono in Italia, ma è aperto a chiunque voglia scoprire i sapori
              autentici e ricchi di storia di queste terre.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-primaryBlue opacity-60" />
      </div>

      {/* Categorie di prodotti */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-8 sm:p-10 bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Categorie di prodotti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-105 transition-transform border border-blue-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-pink-300 via-primaryBlue to-yellow-300 opacity-60" />
      </div>

      {/* Ultime novità & offerte */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-8 sm:p-10 bg-gradient-to-br from-blue-50 to-white border-0 shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
              Ultime novità & offerte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Array statico di offerte/novità */}
              {[
                {
                  title: "Sconto 20% su Salumi Polacchi",
                  desc: "Solo per questa settimana, tutti i salumi dalla Polonia a prezzo speciale!",
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
                  ),
                  highlight: "-20%",
                },
                {
                  title: "Nuovo arrivo: dolci georgiani!",
                  desc: "Scopri la nostra selezione di dolci tipici dalla Georgia, freschi ogni settimana.",
                  icon: (
                    <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z" />
                    </svg>
                  ),
                  highlight: "Novità!",
                },
                {
                  title: "Conserve artigianali in offerta",
                  desc: "Acquista le nostre conserve, sconti validi solo fino a fine mese.",
                  icon: (
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ),
                  highlight: "Sconto!",
                },
              ].map((offer, i) => (
                <div key={i} className="flex flex-col items-start bg-white rounded-2xl shadow-md p-6 gap-3 border border-blue-100 hover:shadow-lg transition">
                  <div className="flex items-center gap-3">
                    {offer.icon}
                    <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-700">{offer.highlight}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
                  <p className="text-gray-600 text-sm">{offer.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-primaryBlue opacity-60" />
      </div>

      {/* Mappa */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-8 sm:p-10 bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Dove ci trovi</h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.798390964771!2d14.39331621567924!3d40.904545379313655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba9d6bb40db87%3A0xa7dbbd25a032fcde!2sVia%20Trieste%2C%2092%2C%2080000%20Pomigliano%20d'Arco%20NA!5e0!3m2!1sit!2sit!4v1718710025475!5m2!1sit!2sit"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-sm text-blue-600 mt-2">
              <a
                href="https://www.google.com/maps?ll=40.904552,14.395128&z=19&t=m&hl=it&gl=IT&mapclient=embed&cid=5086467851719980605"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apri in Google Maps
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
