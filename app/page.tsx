import Image from "next/image";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

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
    <main className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 md:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/head-img.jpg"
          alt="Cibo dell'Est Europa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            RODYNA
          </h1>
        </div>
      </div>

      {/* Chi siamo / Offerta */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Un viaggio gastronomico tra tradizione e autenticità
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Siamo un punto di riferimento per chi cerca prodotti genuini,
            tradizionali e di alta qualità provenienti da Polonia, Ucraina,
            Romania, Moldavia e Georgia. Da noi trovi tutto ciò che ti fa
            sentire a casa: salumi affumicati, formaggi artigianali, conserve
            fatte come una volta, dolci tipici e bevande uniche.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Il nostro negozio nasce per servire le comunità dell’Est Europa che
            vivono in Italia, ma è aperto a chiunque voglia scoprire i sapori
            autentici e ricchi di storia di queste terre.
          </p>
        </CardContent>
      </Card>

      {/* Categorie di prodotti */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Categorie di prodotti</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-md bg-white"
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
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mappa */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Dove ci trovi</h2>
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
    </main>
  );
}
