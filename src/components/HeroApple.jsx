import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroApple() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* Video de fondo con menor z-index y opacidad para dejar ver partículas */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75 opacity-70 z-0"
        src="/2795171-uhd_3840_2160_25fps.mp4"
      />

      {/* Overlay negro semitransparente */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-black/40" : "bg-black/30"} z-10 pointer-events-none`}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto text-white"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Tu Computadora Ideal, al Alcance de un Clic
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Encuentra el equipo perfecto para gaming, oficina o desarrollo. Con componentes seleccionados y asesoramiento personalizado.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/products"
          className="inline-block bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-400 rounded-lg px-8 py-3 font-semibold shadow-lg transition-colors"
        >
          Ver Productos
        </motion.a>
      </motion.div>
    </section>
  );
}
