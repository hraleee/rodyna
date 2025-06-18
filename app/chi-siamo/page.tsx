import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 py-8 px-8 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold text-primary mb-8 text-center">
        Chi siamo
      </h1>

      {/* Card descrizione negozio */}
      <Card className="text-lg">
        <CardContent className="space-y-6">
          <br />
          <p className="leading-relaxed text-muted-foreground">
            Siamo un negozio di alimentari specializzato nei prodotti dell’Est
            Europa, nato nel 2010 dalla passione di due ragazze ucraine che
            hanno voluto portare un pezzo della loro terra in Italia.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Da oltre un decennio, offriamo ai nostri clienti una selezione
            autentica di prodotti tradizionali: salumi, formaggi, dolci,
            conserve e bevande provenienti da Polonia, Ucraina, Romania,
            Moldavia e Georgia.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Il nostro obiettivo è creare un punto di riferimento per le comunità
            dell’Est Europa che vivono in Italia, ma anche per chiunque voglia
            scoprire i sapori genuini e ricchi di storia di queste terre.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Vieni a trovarci e lasciati trasportare in un viaggio gastronomico
            fatto di tradizione, cultura e autenticità.
          </p>
        </CardContent>
      </Card>

      {/* Card fondatrici */}
      <Card>
        <CardContent>
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Le nostre fondatrici
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 bg-primaryBlue rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Lidiya</h3>
              <p>
                Originaria di Zališčyky, Lidiya ha sempre avuto una grande
                passione per la cucina tradizionale ucraina. È la mente dietro
                la selezione dei prodotti più autentici e genuini.
              </p>
            </div>
            <div className="flex-1 bg-primaryBlue rounded-lg p-6 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Svetlana</h3>
              <p>
                Nata a Zališčyky, Svetlana si occupa della gestione del negozio
                e dell’accoglienza dei clienti, sempre con il sorriso e la
                voglia di far sentire tutti a casa.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card motto */}
      <Card className="bg-primaryBlue text-white text-center py-12">
        <CardContent>
          <p className="text-2xl italic font-semibold max-w-xl mx-auto">
            "Portiamo i sapori dell’Est Europa nel cuore dell’Italia, con amore,
            tradizione e autenticità."
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
