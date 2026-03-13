import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingNodoxLogo() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateScreenSize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  return (
    <motion.img
      src="/Logo Nodox [Transparente].png"
      alt="Logo NodoX"
      className="pointer-events-none fixed bottom-[-0.7rem] left-[-0.8rem] z-40 w-24 opacity-100 [filter:drop-shadow(0_0_8px_rgba(255,255,255,0.58))_drop-shadow(0_0_18px_rgba(255,255,255,0.38))] sm:bottom-[-1.1rem] sm:left-[-1.2rem] sm:w-28 md:bottom-[-2.375rem] md:left-[-2.5rem] md:w-40 lg:w-52 xl:w-60 dark:[filter:drop-shadow(0_0_12px_rgba(255,255,255,0.82))_drop-shadow(0_0_28px_rgba(255,255,255,0.58))]"
      animate={isSmallScreen ? { scale: [0.92, 1.08, 0.92] } : { scale: [0.7, 1.4, 0.7] }}
      transition={
        isSmallScreen
          ? { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
          : { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}
