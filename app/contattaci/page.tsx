"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from "framer-motion";

export default function Page() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    if (!form.current) return;
    emailjs
      .sendForm(
        'service_edy4w4o',
        'template_92zgxrz',
        form.current,
        'wiZ-28A0lqjg3CHs_'
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current?.reset();
        },
        (err: any) => {
          setError("Errore nell'invio. Riprova più tardi.");
          setLoading(false);
        }
      );
  };

  return (
    <main className="flex flex-col gap-12 py-12 px-4 md:px-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-pink-50 rounded-3xl shadow-xl">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/contattaci.jpg"
            alt="Contattaci Rodyna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center drop-shadow-lg">
              Contattaci
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-primaryBlue via-pink-300 to-yellow-300 opacity-60" />
      </div>

      {/* Informazioni di contatto */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-6 sm:p-6 bg-white/80 backdrop-blur-md border-0 shadow-lg">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Dove siamo</h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              📍 Via Trieste, 92, 80038 Pomigliano d'Arco (NA), Italia
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              📞 Telefono: {" "}
              <a
                href="tel:+393318571453"
                className="text-blue-600 hover:underline"
              >
                331 857 1453
              </a>
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              📧 Email: {" "}
              <a
                href="mailto:info@rodyna.it"
                className="text-blue-600 hover:underline"
              >
                info@rodyna.it
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-primaryBlue opacity-60" />
      </div>

      {/* Orari di apertura */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-6 sm:p-6 bg-white/80 backdrop-blur-md border-0 shadow-lg">
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
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-pink-300 via-primaryBlue to-yellow-300 opacity-60" />
      </div>

      {/* Modulo di contatto (ora funzionante con EmailJS) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-8 sm:p-10 bg-gradient-to-br from-primaryBlue/10 to-pink-100 border-0 shadow-2xl">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4 text-primary">Scrivici un messaggio</h2>
            <form ref={form} onSubmit={handleSend} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="mt-1 block w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="mt-1 block w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primaryBlue text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60 text-lg shadow-md"
                disabled={loading}
              >
                {loading ? 'Invio in corso...' : 'Invia'}
              </button>
              {success && (
                <p className="text-green-600 font-medium mt-2">Messaggio inviato con successo!</p>
              )}
              {error && (
                <p className="text-red-600 font-medium mt-2">{error}</p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Divider decorativo */}
      <div className="flex justify-center my-2">
        <div className="w-32 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-primaryBlue opacity-60" />
      </div>

      {/* Mappa di Google */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="px-4 py-6 sm:p-6 bg-white/80 backdrop-blur-md border-0 shadow-lg">
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
      </motion.div>
    </main>
  );
}
