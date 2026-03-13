import Navbar from "../components/Navbar";
import services from "../data/services";
import { Helmet } from "react-helmet";

export default function ServicesPage() {
  const phone = "+59891741147";

  // Función para generar mensaje de WhatsApp para servicios
  const generateServiceMessage = (service) => {
    const message = `¡Hola NodoX! Estoy interesado en el siguiente servicio: ${service.title} ${service.description}.`;
    return encodeURIComponent(message);
  };

  // Definimos los beneficios para cada tipo de servicio basado en palabras clave
  const getServiceBenefits = (service) => {
    const title = service.title.toLowerCase();
    const description = service.description.toLowerCase();

    if (
      title.includes("reparación") ||
      description.includes("hardware")
    ) {
      return [
        "Diagnóstico gratuito*",
        "Repuestos originales",
        "Servicio express disponible",
      ];
    }
    if (
      title.includes("recuperación") ||
      description.includes("datos")
    ) {
      return ["Confidencialidad garantizada", "Soporte post-recuperación"];
    }
    if (
      title.includes("soporte técnico") ||
      description.includes("asistencia")
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

  const getServiceDetails = (service) => {
    const title = service.title.toLowerCase();

    if (title.includes("reparación")) {
      return [
        "Mantenimiento preventivo y correctivo",
        "Cambio de componentes y limpieza interna",
        "Optimización de rendimiento en Windows",
        "Formateo profesional con backup previo",
      ];
    }

    if (title.includes("recuperación")) {
      return [
        "Recuperación desde HDD, SSD y USB",
        "Respaldo de datos críticos por prioridad",
        "Análisis de estado del disco",
        "Entrega organizada por carpetas",
      ];
    }

    if (title.includes("soporte técnico")) {
      return [
        "Soporte remoto para equipos",
        "Eliminación de virus y malware",
        "Configuración de red, impresoras y periféricos",
        "Asistencia para software de trabajo diario",
      ];
    }

    return [
      "Asistencia personalizada",
      "Proceso documentado",
      "Atención por WhatsApp",
    ];
  };

  const getServiceIcon = (service) => {
    const title = service.title.toLowerCase();

    if (title.includes("reparación")) {
      return (
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
            d="M11 5a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 11-2 0v-4H6a1 1 0 010-2h4V6a1 1 0 011-1z"
          />
        </svg>
      );
    }

    if (title.includes("recuperación")) {
      return (
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
            d="M4 7h16M4 12h16M4 17h10M17 17l3 3m0 0l3-3m-3 3v-6"
          />
        </svg>
      );
    }

    return (
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
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95l-1.414-1.414M7.464 7.464 6.05 6.05m11.9 0-1.414 1.414M7.464 16.536 6.05 17.95M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-gray-900 dark:bg-zinc-950 dark:text-gray-100 font-sans">
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
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-100/70 to-slate-50/85 dark:from-zinc-950/80 dark:via-zinc-950/70 dark:to-zinc-950/88 pointer-events-none" />

      <Navbar />
      <main className="site-container relative z-10 pt-22 pb-10 md:pt-24 md:pb-12">
        <section className="mb-6 md:mb-8">
          <h1 className="text-base font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Nuestros servicios
          </h1>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const benefits = getServiceBenefits(service);
              const details = getServiceDetails(service);
              const serviceIcon = getServiceIcon(service);
              const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${generateServiceMessage(service)}`;

              return (
                <div
                  key={service.id}
                  className="flex h-full flex-col rounded-2xl border border-white/50 bg-white/82 p-4 sm:p-5 backdrop-blur-md shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-700/70 dark:bg-zinc-900/78"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                    {serviceIcon}
                  </div>
                  <h3 className="mb-2 min-h-[3.5rem] text-lg font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-3 min-h-[4.5rem] text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>

                  <div className="mb-3 rounded-xl border border-gray-200/60 bg-white/72 p-3 dark:border-zinc-700/70 dark:bg-zinc-800/80">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 text-sm">
                      Incluye
                    </h4>
                    <ul className="min-h-[7.5rem] space-y-1.5 text-sm">
                      {details.map((detail, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">
                          - {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-gray-200/60 bg-white/72 p-3 dark:border-zinc-700/70 dark:bg-zinc-800/80">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center text-sm">
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
                    <ul className="min-h-[5.5rem] space-y-2 text-sm">
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
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
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
