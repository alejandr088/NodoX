import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>Contacto | NodoX</title>
        <meta
          name="description"
          content="Contacta con NodoX para asesoramiento personalizado y soporte técnico en Montevideo."
        />
        <meta property="og:title" content="Contacto | NodoX" />
        <meta
          property="og:description"
          content="Contacta con NodoX para asesoramiento personalizado y soporte técnico en Montevideo."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45 dark:from-zinc-950/70 dark:via-zinc-950/55 dark:to-zinc-950/75 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="relative flex h-[34vh] w-full items-center justify-center text-center md:h-[40vh]">
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-white drop-shadow-lg md:text-5xl">
            <span className="text-red-500">Contacto</span> y Ubicación
          </h1>
          <p className="text-base text-gray-200 drop-shadow md:text-xl">
            Visítanos o contáctanos para asesoramiento personalizado
          </p>
        </div>
      </section>

      <main className="site-container relative z-10 pt-12 pb-20 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tarjeta Información de Contacto */}
          <div className="bg-white/86 dark:bg-zinc-900/82 backdrop-blur-md p-5 sm:p-8 rounded-2xl shadow-xl border border-white/45 dark:border-zinc-700/70">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg
                className="w-6 h-6 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Información de Contacto
            </h2>
            <div className="space-y-4">
              {/* Dirección */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-white/70 dark:hover:bg-zinc-800/70 rounded-xl transition">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Dirección
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Calle Solano Lopez (ex Comercio) 1740A
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Montevideo, Uruguay
                  </p>
                </div>
              </div>
              {/* Teléfonos */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-white/70 dark:hover:bg-zinc-800/70 rounded-xl transition">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Teléfonos
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a className="hover:text-brand-500" href="tel:+59899268545">099268545 (Stock)</a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a className="hover:text-brand-500" href="tel:+59891741147">091741147 (WhatsApp)</a>
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-white/70 dark:hover:bg-zinc-800/70 rounded-xl transition">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Correo Electrónico
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a className="hover:text-brand-500" href="mailto:nodoxsolutions@gmail.com">nodoxsolutions@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Redes Sociales
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/nodoxuy.reparacionpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram NodoX"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm4.25 2.8a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm5.55-2.03a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/nodox"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook NodoX"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta Ubicación y Horario */}
          <div className="bg-white/86 dark:bg-zinc-900/82 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/45 dark:border-zinc-700/70">
            <div className="h-60 sm:h-80 w-full">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=calle%20solano%20lopez%201740a%20montevideo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="Ubicación NodoX en Montevideo"
              ></iframe>
            </div>
            <div className="p-6 border-t border-gray-200/80 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Horario de atención
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li className="flex justify-between bg-white/70 dark:bg-zinc-800/70 p-2 rounded-lg">
                  <span>Domingo:</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
