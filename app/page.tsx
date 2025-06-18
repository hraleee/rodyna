import Image from "next/image";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { MapStore } from "@/components/MapStore";

export default function Page() {
  const categories = [
    { title: "Salumi & Formaggi", img: "/prodotti/salumi.jpg" },
    { title: "Pane & Dolci", img: "/prodotti/dolci.jpg" },
    { title: "Conserve & Sottaceti", img: "/prodotti/conserve.jpg" },
    { title: "Piatti pronti", img: "/prodotti/piatti.jpg" },
    { title: "Bevande & Vini", img: "/prodotti/vini.jpg" },
    { title: "Snack & Specialità", img: "/prodotti/snack.jpg" },
  ];

  return (
    <SidebarProvider>
      <AppSidebar className="bg-primaryBlue" />
      <SidebarInset>
        <SiteHeader />
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
                sentire a casa: salumi affumicati, formaggi artigianali,
                conserve fatte come una volta, dolci tipici e bevande uniche.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Il nostro negozio nasce per servire le comunità dell’Est Europa
                che vivono in Italia, ma è aperto a chiunque voglia scoprire i
                sapori autentici e ricchi di storia di queste terre.
              </p>
            </CardContent>
          </Card>
          {/* Categorie di prodotti */}
          <Card className="px-4 py-6 sm:p-6">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">
                Categorie di prodotti
              </h2>
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
              <MapStore />
            </CardContent>
          </Card>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
