import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans relative">
      <Helmet>
        <title>Política de Privacidad | NodoX</title>
        <meta name="description" content="Política de Privacidad de NodoX, protección de datos y compromiso con la privacidad de nuestros clientes." />
        <meta property="og:title" content="Política de Privacidad | NodoX" />
        <meta property="og:description" content="Política de Privacidad de NodoX, protección de datos y compromiso con la privacidad de nuestros clientes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      
      <main className="max-w-5xl mx-auto pt-24 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-8">
          Política de Privacidad
        </h1>

        <p className="mb-6">
          En <strong>NodoX</strong> valoramos la privacidad y seguridad de los datos personales de nuestros clientes y usuarios. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos la información que obtenemos mediante nuestro sitio web y servicios.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Datos personales que nos proporcionas, como nombre, correo electrónico, teléfono y datos de contacto.</li>
            <li>Información de uso y navegación en nuestro sitio mediante cookies y tecnologías similares.</li>
            <li>Datos relacionados con las solicitudes que realizas, incluyendo consultas y mensajes enviados.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la información</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Procesar y responder a tus solicitudes y consultas.</li>
            <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
            <li>Enviar información relevante sobre productos, promociones y novedades, solo si has dado tu consentimiento.</li>
            <li>Cumplir con obligaciones legales y normativas vigentes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Protección y almacenamiento de la información</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Implementamos medidas técnicas y organizativas adecuadas para proteger los datos personales contra el acceso no autorizado, pérdida, alteración o divulgación indebida.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Los datos se almacenan únicamente durante el tiempo necesario para cumplir con los fines para los cuales fueron recopilados o para cumplir con obligaciones legales.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Derechos de los usuarios</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación, oposición y portabilidad de los datos personales, dirigiéndote a nuestro equipo de soporte a través de los canales de contacto disponibles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies y tecnologías similares</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Nuestro sitio usa cookies para mejorar la experiencia de usuario, recopilar estadísticas de uso y personalizar contenido. Puedes configurar tu navegador para bloquear o eliminar cookies si así lo deseas.
          </p>
        </section>

        <section className="">
          <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Para dudas o solicitudes relacionadas con esta política de privacidad, puedes contactarnos a través del correo <a href="mailto:contacto@qodex.com" className="text-red-500 hover:underline">contacto@qodex.com</a> o por teléfono al <a href="tel:+59812345678" className="text-red-500 hover:underline">+598 1234 5678</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
