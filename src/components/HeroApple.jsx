import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroApple() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detectar el tema actual del documento
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    
    // Observar cambios en el tema
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isNowDark = document.documentElement.classList.contains('dark');
          setIsDark(isNowDark);
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-75 opacity-90 z-0"
        src="/2795171-uhd_3840_2160_25fps.mp4"
      />

      {/* Overlay semitransparente */}
      <div
        className={`absolute inset-3 ${
          isDark ? "bg-black/20" : "bg-black/20"
        } z-10 pointer-events-none`}
      />

      {/* Contenido principal */}
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
          Encuentra el equipo perfecto para gaming, oficina o desarrollo. Con
          componentes seleccionados y asesoramiento personalizado.
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

      {/* Gradiente extendido + curva separadora */}
      <div
        className={`absolute bottom-0 left-0 w-full h-48 z-20 pointer-events-none ${
          isDark
            ? "bg-gradient-to-b from-transparent to-[#0d0d0d]"
            : "bg-gradient-to-b from-transparent to-white"
        }`}
      />

            {/* Curva decorativa SVG para transición más orgánica */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.2C175.73 77.77 58.51 95.66 0 104.34V120h1200V0c-72.65 32.56-187.34 53.56-308.61 56.2-174.34 3.79-261.18-28.63-570-0z"
            fill={isDark ? "#000000" : "#686666ff"}
          />
        </svg>
      </div>
    </section>
  );
}