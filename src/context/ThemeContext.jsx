// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system'); // 'light' | 'dark' | 'system'

  // Aplica el tema resuelto en el DOM
  const applyTheme = (themeToApply) => {
    const root = document.documentElement;
    const resolved = themeToApply === 'system'
      ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : themeToApply;

    if (resolved === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Init: leer localStorage o sistema
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
      applyTheme(saved)
    } else {
      setTheme('system')
      applyTheme('system')
    }

    // Escuchar cambios en preferencia del sistema y actualizar si está en 'system'
    const mm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => { if (localStorage.getItem('theme') === null) applyTheme('system') }
    if (mm && mm.addEventListener) mm.addEventListener('change', handler)
    else if (mm && mm.addListener) mm.addListener(handler)
    return () => {
      if (mm && mm.removeEventListener) mm.removeEventListener('change', handler)
      else if (mm && mm.removeListener) mm.removeListener(handler)
    }
  }, [])

  // Guardar cuando cambia explicitamente (no guardamos 'system')
  useEffect(() => {
    if (theme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', theme)
    }
    applyTheme(theme)
  }, [theme])

  // Toggle simplificado: solo light <-> dark
  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light'
      return 'dark'
    })
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
