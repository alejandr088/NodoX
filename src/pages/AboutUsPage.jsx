import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

const teamAreas = [
  {
    title: "Soporte Técnico",
    description:
      "Diagnóstico, mantenimiento preventivo y resolución de incidencias para usuarios y empresas.",
  },
  {
    title: "Integración y Armado",
    description:
      "Configuración de equipos personalizados para oficina, diseño, desarrollo y gaming.",
  },
  {
    title: "Atención Comercial",
    description:
      "Asesoramiento de compra, presupuestos claros y seguimiento post-venta.",
  },
];

const values = [
  "Transparencia en cada presupuesto",
  "Tiempos de respuesta medibles",
  "Comunicación clara en todo el proceso",
  "Mejora continua de la experiencia cliente",
];

const faqs = [
  {
    q: "¿Qué tipo de clientes atienden?",
    a: "Trabajamos con usuarios finales, profesionales independientes y empresas que necesitan soporte, compra tecnológica y renovación de equipos.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Puedes usar el formulario de Empresas, escribir por WhatsApp o visitar Contacto. Respondemos con propuesta y alcance recomendado.",
  },
  {
    q: "¿Ofrecen seguimiento posterior a la compra?",
    a: "Sí. Incluimos acompañamiento y recomendaciones para mantener estabilidad, rendimiento y seguridad de los equipos.",
  },
];

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 font-sans">
      <Helmet>
        <title>Sobre Nosotros | NodoX</title>
        <meta
          name="description"
          content="Conoce la visión, valores y forma de trabajo de NodoX para soporte, armado y soluciones tecnológicas."
        />
        <meta property="og:title" content="Sobre Nosotros | NodoX" />
        <meta
          property="og:description"
          content="Conoce la visión, valores y forma de trabajo de NodoX para soporte, armado y soluciones tecnológicas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/pexels-fauxels-3183197.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-100/78 to-slate-50/90 dark:from-slate-950/88 dark:via-slate-950/78 dark:to-slate-950/92 pointer-events-none" />

      <Navbar />

      <main className="site-container relative z-10 pt-24 pb-20 md:pt-28">
        <section className="surface-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Sobre NodoX
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
            Tecnología con criterio, procesos claros y foco en resultados.
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
            Somos un equipo técnico-comercial orientado a resolver necesidades reales: diagnóstico, compra inteligente y continuidad operativa para personas y empresas.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {teamAreas.map((area) => (
            <article
              key={area.title}
              className="surface-panel rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {area.title}
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
                {area.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="surface-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Cómo trabajamos
            </h2>
            <ol className="mt-5 space-y-4 text-gray-700 dark:text-gray-300">
              <li className="surface-subtle rounded-xl p-4">
                <span className="font-semibold">1. Relevamiento:</span> entendemos tu necesidad técnica y comercial.
              </li>
              <li className="surface-subtle rounded-xl p-4">
                <span className="font-semibold">2. Propuesta:</span> recomendamos opciones viables con costos claros.
              </li>
              <li className="surface-subtle rounded-xl p-4">
                <span className="font-semibold">3. Implementación:</span> ejecutamos, documentamos y validamos resultados.
              </li>
              <li className="surface-subtle rounded-xl p-4">
                <span className="font-semibold">4. Seguimiento:</span> soporte post-servicio para mantener continuidad.
              </li>
            </ol>
          </article>

          <aside className="surface-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nuestros valores
            </h2>
            <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50/70 p-4 dark:border-brand-800 dark:bg-brand-900/20">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                ¿Buscas atención para tu empresa? Tenemos una propuesta específica para compra por volumen y soporte continuo.
              </p>
              <Link
                to="/business-sales"
                className="mt-3 inline-flex btn-primary"
              >
                Ir a Ventas Empresas
              </Link>
            </div>
          </aside>
        </section>

        <section className="surface-panel mt-10 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Preguntas frecuentes
          </h2>
          <div className="mt-5 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((item, idx) => (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq((prev) => (prev === idx ? -1 : idx))}
                  className="w-full py-4 text-left flex items-center justify-between"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {item.q}
                  </span>
                  <span className="text-brand-600 text-xl">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <p className="pb-4 text-gray-600 dark:text-gray-300 leading-7">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
