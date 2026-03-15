import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import serviceLandingContent from "../data/serviceLandingContent";
import { serviceSchema } from "../seo/structuredData";

export default function ServiceLandingPage() {
  const { slug } = useParams();
  const service = serviceLandingContent[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-gray-900 dark:bg-zinc-950 dark:text-gray-100 font-sans">
      <SEO
        title={service.title}
        description={service.description}
        path={`/services/${slug}`}
        structuredData={[serviceSchema({ name: service.shortTitle, description: service.description, path: `/services/${slug}` }), faqSchema]}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/services-light.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-slate-100/78 to-slate-50/90 dark:from-zinc-950/88 dark:via-zinc-950/80 dark:to-zinc-950/92 pointer-events-none" />

      <Navbar />

      <main className="site-container relative z-10 pt-24 pb-20 md:pt-28">
        <section className="surface-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Servicio especializado
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
            {service.intro}
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="surface-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Que incluye este servicio
            </h2>
            <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
              {service.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-brand-200 bg-brand-50/70 p-4 dark:border-brand-800 dark:bg-brand-900/20">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Solicita una propuesta segun tu caso y recibe asesoramiento tecnico por WhatsApp.
              </p>
              <a
                href="https://wa.me/59891741147?text=Hola%20NodoX%2C%20quiero%20asesoramiento%20sobre%20este%20servicio."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex btn-primary"
              >
                Solicitar asesoramiento
              </a>
            </div>
          </article>

          <aside className="surface-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Preguntas frecuentes
            </h2>
            <div className="mt-5 divide-y divide-gray-200 dark:divide-gray-700">
              {service.faqs.map((item) => (
                <div key={item.q} className="py-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.q}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
            <Link to="/services" className="mt-6 inline-flex rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-white/70 dark:border-gray-700 dark:hover:bg-zinc-800/70">
              Ver todos los servicios
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}
