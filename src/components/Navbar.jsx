import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'Inicio' },
    { path: '/products', name: 'Productos' },
    { path: '/services', name: 'Servicios' },
/*     { path: '/about', name: 'Sobre Nosotros' },
 */    { path: '/contact', name: 'Contacto' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-almostBlack/30 backdrop-blur-lg border-b border-white/20 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          <img
  src={theme === 'dark' ? 'nodoxwht.png' : 'nodoxred.png'}
  alt="NodoX"
  class="h-10 w-auto"
/>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md hover:bg-white/40 dark:hover:bg-gray-700/40 transition"
          >
            <div className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span />
              <span />
              <span />
            </div>
          </button>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-full text-sm font-semibold transition
                  ${location.pathname === link.path
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'text-gray-200 hover:bg-white/20 dark:text-gray-300 dark:hover:bg-gray-700/40'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md hover:bg-white/40 dark:hover:bg-gray-700/40 transition"
              title="Cambiar tema"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.76 4.84l-1.8-1.79L3 5.01l1.79 1.8 1.97-1.97zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm8.24-19.16l1.79 1.79-1.97 1.97-1.79-1.79 1.97-1.97zM21 11v2h3v-2h-3zM4.22 19.78l1.79-1.79 1.97 1.97-1.79 1.79-1.97-1.97zM12 6a6 6 0 100 12A6 6 0 0012 6z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            <Link to="/cart" className="relative p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md hover:bg-white/40 dark:hover:bg-gray-700/40 transition">
              <svg className="w-6 h-6 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-brand-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/20 dark:bg-almostBlack/30 backdrop-blur-md border-t border-white/20 dark:border-gray-700 px-4 pb-4 rounded-b-lg">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-full text-sm font-semibold transition
                  ${location.pathname === link.path
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'text-gray-200 hover:bg-white/20 dark:text-gray-300 dark:hover:bg-gray-700/40'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

    </>
  );
}

