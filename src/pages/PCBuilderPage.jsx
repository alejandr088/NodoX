import PCBuilder from "../components/PCBuilder";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";

export default function PCBuilderPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-gray-900 dark:bg-zinc-950 dark:text-gray-100 font-sans">
      <Helmet>
        <title>Armador de PC | NodoX</title>
        <meta
          name="description"
          content="Personaliza y arma tu PC con componentes seleccionados en NodoX."
        />
        <meta property="og:title" content="Armador de PC | NodoX" />
        <meta
          property="og:description"
          content="Personaliza y arma tu PC con componentes seleccionados en NodoX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/pc1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-100/78 to-slate-50/90 dark:from-zinc-950/88 dark:via-zinc-950/80 dark:to-zinc-950/92 pointer-events-none" />

      <Navbar />
      <main className="site-container relative z-10 pt-24 pb-16 md:pt-28">
        <section className="surface-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-12 mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            PC Builder
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
            Arma una configuración equilibrada y lista para cotizar.
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
            Elige componentes, valida compatibilidad y obtén una base de presupuesto para seguir con asesoramiento técnico.
          </p>
        </section>

        <PCBuilder />
      </main>
    </div>
  );
}
