import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans relative">
      <Helmet>
        <title>Contacto | NodoX</title>
        <meta name="description" content="Contacta con NodoX para asesoramiento personalizado y soporte técnico en Montevideo." />
        <meta property="og:title" content="Contacto | NodoX" />
        <meta property="og:description" content="Contacta con NodoX para asesoramiento personalizado y soporte técnico en Montevideo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <main className="max-w-4xl mx-auto pt-24 pb-20 px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-red-500">Contacto</span> y Ubicación
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Visítanos o contáctanos para asesoramiento personalizado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Información de Contacto
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Dirección</h3>
                  <p className="text-gray-600 dark:text-gray-400">Calle Solano Lopez (ex Comercio) 1740A</p>
                  <p className="text-gray-600 dark:text-gray-400">Montevideo, Uruguay</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Teléfonos</h3>
                  <p className="text-gray-600 dark:text-gray-400">+598 1234 5678</p>
                  <p className="text-gray-600 dark:text-gray-400">+598 9876 5432 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition">
                <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Correos Electrónicos</h3>
                  <p className="text-gray-600 dark:text-gray-400">contacto@nodox.com</p>
                  <p className="text-gray-600 dark:text-gray-400">soporte@nodox.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/nodox" target="_blank" rel="noopener noreferrer" aria-label="Instagram NodoX" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all">
                  <svg className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://facebook.com/nodox" target="_blank" rel="noopener noreferrer" aria-label="Facebook NodoX" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all">
                  <svg className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="h-64 sm:h-80 w-full">
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
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Horario de atención</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
