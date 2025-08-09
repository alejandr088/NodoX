// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', name: 'Inicio' },
    { path: '/services', name: 'Servicios' },
    { path: '/about', name: 'Sobre Nosotros' },
    { path: '/contact', name: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 border-b border-gray-300 dark:border-gray-700 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-red-500">
          NodoX
        </Link>

        {/* Navegación */}
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

        {/* Botones */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label={`Cambiar tema (actual: ${theme})`}
            title="Cambiar tema (claro/oscuro)"
          >
            {theme === 'dark' ? (
              // Icono sol cuando está en dark (indica que al clic cambiará a claro)
              <svg className="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79L3 5.01l1.79 1.8 1.97-1.97zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm8.24-19.16l1.79 1.79-1.97 1.97-1.79-1.79 1.97-1.97zM21 11v2h3v-2h-3zM4.22 19.78l1.79-1.79 1.97 1.97-1.79 1.79-1.97-1.97zM12 6a6 6 0 100 12A6 6 0 0012 6z"/></svg>
            ) : (
              // Icono luna cuando está en claro (indica que al clic cambiará a oscuro)
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>

          <Link
            to="/cart"
            className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Ver carrito"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
