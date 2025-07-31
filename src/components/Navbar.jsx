import { useState, useEffect, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  // Simulación de carrito; adapta a tu lógica global si usas
  const [cartCount, setCartCount] = useState(2)

  // Estado tema — inicializamos con función para evitar render inicial incorrecto
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      // Si no hay guardado, determinamos del sistema y devolvemos 'dark' o 'light'
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light' // fallback
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // Este hook asegura que la clase se aplique **inmediatamente antes** del render
  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // Guardamos siempre la preferencia en localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const navLinks = [
    { path: '/', name: 'Inicio' },
    { path: '/services', name: 'Servicios' },
    { path: '/pc-builder', name: 'Armador PC' },
    { path: '/about', name: 'Sobre Nosotros' },
    { path: '/contact', name: 'Contacto' },
    { path: '/business-sales', name: 'Zona Empresas' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 border-b border-gray-300 dark:border-gray-700 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          NodoX
        </Link>

        {/* Navegación de enlace */}
        <div className="space-x-4 hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/40'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botones derecho: carrito y toggle tema */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Desactivar modo oscuro'}
            title={theme === 'light' ? 'Activar modo oscuro' : 'Desactivar modo oscuro'}
          >
            {theme === 'light' ? (
              <svg
                className="w-5 h-5 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            )}
          </button>

          <Link
            to="/cart"
            aria-label="Ver carrito de compras"
            className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
