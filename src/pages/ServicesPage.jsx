import Navbar from "../components/Navbar";
import services from "../data/services";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
  const phone = "+59891741147";

  // Función para generar mensaje de WhatsApp para servicios
  const generateServiceMessage = (service) => {
    let messageParts = [
      "¡Hola NodoX! Estoy interesado en el siguiente servicio:",
      "",
      `*${service.title}*`,
      `${service.description}`,
      "",
      "Por favor, necesito:",
      "1. Información sobre disponibilidad",
      "2. Precio del servicio",
      "3. Tiempo estimado de realización",
      "4. Formas de pago aceptadas",
      "",
      "¡Gracias!",
    ];

    return encodeURIComponent(messageParts.join("\n"));
  };

  // Definimos los beneficios para cada tipo de servicio basado en palabras clave
  const getServiceBenefits = (service) => {
    if (
      service.title.includes("Reparación") ||
      service.description.includes("hardware")
    ) {
      return [
        "Diagnóstico gratuito*",
        "Repuestos originales",
        "Servicio express disponible",
      ];
    }
    if (
      service.title.includes("Recuperación") ||
      service.description.includes("datos")
    ) {
      return ["Confidencialidad garantizada", "Soporte post-recuperación"];
    }
    if (
      service.title.includes("Soporte técnico") ||
      service.description.includes("asistencia")
    ) {
      return [
        "Respuesta en menos de 2 horas",
        "Técnicos certificados",
        "Seguimiento post-solución",
      ];
    }
    // Beneficios por defecto para otros servicios
    return [
      "Garantía de satisfacción",
      "Profesionales certificados",
      "Soporte continuo",
    ];
  };

  const serviceCategories = [
    {
      name: "Reparaciones",
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      name: "Software",
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      name: "Hardware",
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 font-sans">
      <Helmet>
        <title>Servicios | NodoX</title>
        <meta
          name="description"
          content="Servicios técnicos profesionales en reparaciones, software y hardware en NodoX."
        />
        <meta property="og:title" content="Servicios | NodoX" />
        <meta
          property="og:description"
          content="Servicios técnicos profesionales en reparaciones, software y hardware en NodoX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/services-light.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-100/70 to-slate-50/85 dark:from-slate-950/80 dark:via-slate-950/70 dark:to-slate-950/88 pointer-events-none" />

      <Navbar />
      <main className="site-container relative z-10 pt-24 pb-20 md:pt-28">
        <section className="mb-12 md:mb-14 rounded-[2rem] border border-white/50 bg-white/82 px-5 sm:px-8 py-8 sm:py-10 backdrop-blur-md shadow-xl dark:border-slate-700/70 dark:bg-slate-900/78">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Servicios técnicos
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
            Resolvemos problemas reales con procesos claros.
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300">
            Reparaciones, mantenimiento, recuperación y soporte con foco en tiempos, trazabilidad y comunicación directa.
          </p>
        </section>

        <section className="mb-12 grid gap-8 md:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/50 bg-white/82 p-5 sm:p-6 backdrop-blur-md shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-900/78"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  {category.icon}
                </div>
                <h3 className="mb-2 text-center text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-center">
                  Servicios especializados en {category.name.toLowerCase()}
                </p>
              </div>
            ))}
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const benefits = getServiceBenefits(service);
              const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${generateServiceMessage(service)}`;

              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-white/50 bg-white/82 p-5 sm:p-6 backdrop-blur-md shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-900/78"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>

                  <div className="rounded-xl border border-gray-200/60 bg-white/72 p-4 dark:border-slate-700/70 dark:bg-slate-800/80">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Beneficios
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-800 dark:text-gray-300"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.373 0 .002 5.373.002 12a11.8 11.8 0 001.988 6.156L0 24l5.997-2.006A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.214-1.254-6.227-3.48-8.52zM12 22.045a9.98 9.98 0 01-5.147-1.468l-.368-.218-3.563 1.19 1.201-3.474-.237-.361A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.471-7.893c-.257-.128-1.521-.752-1.756-.837-.235-.086-.406-.128-.577.128s-.661.837-.812 1.009c-.15.174-.301.195-.558.065-.257-.13-1.086-.4-2.07-1.274-.765-.682-1.280-1.526-1.43-1.783-.15-.257-.016-.396.114-.523.118-.117.257-.303.386-.454.13-.15.173-.257.26-.43.086-.174.043-.326-.022-.454-.065-.128-.577-1.39-.79-1.898-.207-.495-.417-.428-.577-.437l-.492-.008c-.174 0-.454.065-.692.326-.235.257-.89.87-.89 2.12 0 1.247.91 2.453 1.037 2.62.13.174 1.79 2.737 4.33 3.838.605.26 1.076.415 1.444.53.607.19 1.16.164 1.598.1.487-.07 1.52-.62 1.732-1.218.217-.6.217-1.114.152-1.218-.065-.104-.235-.17-.492-.298z" />
                    </svg>
                    Solicitar servicio
                  </a>
                </div>
              );
            })}
        </section>
      </main>
    </div>
  );
}
