import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 md:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/contattaci.jpg" // puoi usare un'immagine di contatto oppure "/head-img.jpg"
          alt="Contattaci Rodyna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Contattaci
          </h1>
        </div>
      </div>

      {/* Informazioni di contatto */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Dove siamo</h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            📍 Via Trieste, 92, 80038 Pomigliano d'Arco (NA), Italia
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            📞 Telefono:{" "}
            <a
              href="tel:+393318571453"
              className="text-blue-600 hover:underline"
            >
              331 857 1453
            </a>
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            📧 Email:{" "}
            <a
              href="mailto:info@rodyna.it"
              className="text-blue-600 hover:underline"
            >
              info@rodyna.it
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Orari di apertura */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Orari di apertura</h2>
          <ul className="text-muted-foreground text-sm sm:text-base space-y-1">
            <li>Lunedì: 09:00 – 20:00</li>
            <li>Martedì: 08:30 – 20:00</li>
            <li>Mercoledì: 08:30 – 20:00</li>
            <li>Giovedì: 08:30 – 20:00</li>
            <li>Venerdì: 08:30 – 20:00</li>
            <li>Sabato: 08:30 – 20:00</li>
            <li>Domenica: 08:30 – 14:00</li>
          </ul>
        </CardContent>
      </Card>

      {/* Modulo di contatto (statico, senza backend) */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Scrivici un messaggio</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Messaggio
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primaryBlue text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Invia
            </button>
          </form>
        </CardContent>
      </Card>

      {/* Mappa di Google */}
      <Card className="px-4 py-6 sm:p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Mappa</h2>
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
