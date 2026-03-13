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
      className="pointer-events-none fixed bottom-6 left-6 z-40 w-20 opacity-100 sm:w-24 md:w-40 lg:w-52 xl:w-60"
      animate={isSmallScreen ? { scale: 1 } : { scale: [0.7, 1.4, 0.7] }}
      transition={
        isSmallScreen
          ? { duration: 0 }
          : { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}
