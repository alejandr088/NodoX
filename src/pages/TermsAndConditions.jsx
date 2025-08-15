import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans relative">
      <Helmet>
        <title>Términos y Condiciones | NodoX</title>
        <meta name="description" content="Términos y Condiciones de los servicios técnicos, venta y soporte en NodoX." />
        <meta property="og:title" content="Términos y Condiciones | NodoX" />
        <meta property="og:description" content="Términos y Condiciones de los servicios técnicos, venta y soporte en NodoX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      
      <main className="max-w-5xl mx-auto pt-24 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-8">
          Términos y Condiciones
        </h1>

        <p className="mb-6">
          Estos términos y condiciones regulan el uso de los servicios y productos ofrecidos por <strong>NodoX</strong> (en adelante, “la empresa”). Al utilizar nuestros servicios o comprar, aceptas estar sujeto a estos términos.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Servicio Técnico y Reparaciones</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            NodoX ofrece servicios técnicos de diagnóstico, reparación, mantenimiento e instalación de hardware y software sobre equipos electrónicos.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Antes de cualquier reparación, se realiza un diagnóstico cuyo costo será informado previamente y aceptado por el cliente.</li>
            <li>Cualquier reemplazo de componentes será comunicado en costo y plazo, sin efectuar gasto alguno sin autorización previa.</li>
            <li>Los equipos no retirados dentro de los 90 días corridos desde la notificación se consideran abandonados y podrán ser destinados para cubrir gastos o disposición según normativa interna.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Garantía</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Las reparaciones cuentan con una garantía de 30 días (o la que se acuerde específicamente), limitada exclusivamente a la falla reparada.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>No cubre fallas ocasionadas por mal uso, daños por líquidos, golpes, manipulación por terceros o eventos de fuerza mayor.</li>
            <li>La garantía en software aplica únicamente si la falla no se repite por el mismo motivo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Datos Personales y Responsabilidades</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Los clientes entienden que sus equipos pueden contener información personal y confidencial y aceptan:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Responsabilidad de realizar copia de seguridad previa de sus datos.</li>
            <li>NodoX no se responsabiliza por pérdidas, modificaciones o exposiciones fortuitas de datos durante diagnóstico o reparación.</li>
            <li>El personal técnico se compromete a mantener confidencialidad respecto a cualquier información a la que acceda incidentalmente.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Condiciones de Venta y Pago</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            La empresa ofrece distintos métodos de pago incluyendo Mercadopago (con recargo del 9%), contado, transferencia bancaria, BinancePay, y otros.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            El stock puede ser disponible en depósito físico o por pedido/encargo, y puede haber políticas especiales para recepción de mercadería en desuso bajo criterio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Uso del Sitio Web</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            El uso del sitio implica aceptación de estas condiciones, incluyendo la prohibición de uso indebido, alteración de contenidos o cualquier acción ilegal.
          </p>
        </section>

        <section className="">
          <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Para consultas sobre estos términos, garantía, o servicios, te invitamos a contactarnos a través de <a href="mailto:nodoxsolutions@gmail.com" className="text-red-500 hover:underline">nodoxsolutions@gmail.com</a> o al teléfono <a href="tel:091741147" className="text-red-500 hover:underline">091741147</a>.
          </p>
        </section>
      </main>

    </div>
  )
}
