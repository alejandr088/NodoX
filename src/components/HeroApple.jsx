import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroApple() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white pt-28 pb-20 dark:border-gray-800 dark:bg-zinc-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/88 to-white/90 dark:from-zinc-950/84 dark:via-zinc-950/78 dark:to-zinc-950/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(170,12,12,0.14),_transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(170,12,12,0.24),_transparent_42%)]" />

      <div className="site-container relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 rounded-3xl bg-white/50 p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur-[1px] md:p-6 dark:bg-zinc-950/45"
      >
        <span className="mb-5 inline-flex w-fit items-center rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/20 dark:text-brand-300">
          Equipos, repuestos y soporte con criterio técnico
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl dark:text-white">
          Tecnología de calidad, variedad y precios claros.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white-600 md:text-xl dark:text-gray-300">
          Descubre nuestra selección de laptops, PCs, componentes y periféricos para gaming, oficina y trabajo técnico.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/products" className="btn-primary px-6 py-3 text-base">
            Explorar catálogo
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
          >
            Hablar con asesor
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">24h</p>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Respuesta rápida para consultas comerciales y técnicas.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">+30</p>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Productos activos mejor ordenados y más fáciles de comparar.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
            <p className="text-3xl font-bold text-gray-950 dark:text-white">1 a 1</p>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Asesoramiento personalizado antes y después de la compra.</p>
          </div>
        </div>
      </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] dark:border-gray-800 dark:bg-zinc-900">
            <div className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-zinc-800">
              <img
                src="/product1.jpg"
                alt="Equipo destacado NodoX"
                className="h-[420px] w-full object-contain p-8 md:h-[520px]"
                loading="eager"
              />
            </div>
            <div className="grid gap-4 border-t border-gray-100 px-2 pt-5 sm:grid-cols-2 dark:border-gray-800">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Calidad en el Servicio</p>
                <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">Priorizamos una atención técnica de primer nivel, brindándote soluciones rápidas y personalizadas.</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Confianza Real</p>
                <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">Solidez comercial respaldada por las opiniones positivas de nuestros clientes y años en el mercado.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
