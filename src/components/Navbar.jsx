import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverTop, setHoverTop] = useState(null);
  const [hoverSub, setHoverSub] = useState(null);
  const [openMobile, setOpenMobile] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMobileSection = (key) =>
    setOpenMobile((s) => ({ ...s, [key]: !s[key] }));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();
    navigate(q ? `/products?search=${encodeURIComponent(q)}` : '/products');
    setSearchTerm('');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', name: 'Inicio' },
    {
      path: '/products',
      name: 'Productos',
      subMenu: [
        {
          name: 'Notebooks',
          subMenu: [
            { name: 'AMD', path: '#' },
            { name: 'Intel', path: '#' },
          ],
        },
        {
          name: 'PC',
          subMenu: [
            { name: 'AMD', path: '#' },
            { name: 'Intel', path: '#' },
          ],
        },
        {
          name: 'Repuestos',
          subMenu: [
            { name: 'Baterías', path: '#' },
            { name: 'Cargadores', path: '#' },
            { name: 'Pantallas', path: '#' },
          ],
        },
        { name: 'Herramientas', path: '#' },
        { name: 'Periféricos', path: '#' },
        { name: 'Redes', path: '#' },
      ],
    },
    { path: '/services', name: 'Servicios' },
    { path: '/contact', name: 'Contacto' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-[#0d0d0d]/30 backdrop-blur-lg border-b border-white/20 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="dark:bg-transparent text-4xl md:text-3xl font-extrabold text-brand-500 tracking-tight">
            <img
              src={theme === 'dark' ? 'nodoxwht.png' : 'nodoxred.png'}
              alt="NodoX"
              className="h-10 w-auto"
            />
          </Link>

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
            {navLinks.map((link, i) => {
              if (!link.subMenu) {
                return (
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
                );
              }

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoverTop(i)}
                  onMouseLeave={() => { if (hoverTop === i) { setHoverTop(null); setHoverSub(null); } }}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-1
                      ${location.pathname === link.path
                        ? 'bg-brand-600 text-white shadow-lg'
                        : 'text-gray-200 hover:bg-white/20 dark:text-gray-300 dark:hover:bg-gray-700/40'
                      }`}
                  >
                    {link.name}
                    <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Link>

                  {hoverTop === i && (
                    <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl py-2 w-64 z-50">
                      {link.subMenu.map((sub, j) => {
                        const hasChildren = Array.isArray(sub.subMenu);
                        const key = `${i}-${j}`;
                        return (
                          <div
                            key={key}
                            className="relative"
                            onMouseEnter={() => setHoverSub(key)}
                            onMouseLeave={() => { if (hoverSub === key) setHoverSub(null); }}
                          >
                            <div
                              className={`px-4 py-2 text-sm font-semibold cursor-${hasChildren ? 'default' : 'pointer'} 
                                text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/60 flex items-center justify-between`}
                            >
                              {hasChildren ? (
                                <>
                                  <span>{sub.name}</span>
                                  <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 6l6 6-6 6" />
                                  </svg>
                                </>
                              ) : (
                                <Link to={sub.path} className="w-full">
                                  {sub.name}
                                </Link>
                              )}
                            </div>

                            {hasChildren && hoverSub === key && (
                              <div className="absolute top-0 left-full ml-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl py-2 w-56 z-50">
                                {sub.subMenu.map((deep, k) => (
                                  <Link
                                    key={`${key}-${k}`}
                                    to={deep.path}
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/60"
                                  >
                                    {deep.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Derecha: Buscador + Tema + Carrito */}
          <div className="flex items-center gap-3">
            {/* Buscador (desktop) */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center rounded-full border border-white/20 dark:border-gray-700 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md px-3 py-1 focus-within:ring-2 focus-within:ring-brand-600"
            >
              <input
                type="text"
                inputMode="search"
                placeholder="Buscar productos…"
                aria-label="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none placeholder-gray-600 dark:placeholder-gray-400 text-sm text-gray-900 dark:text-gray-100 w-44 lg:w-64"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="ml-2 p-1 rounded-full hover:bg-white/40 dark:hover:bg-gray-700/40 transition"
                title="Buscar"
              >
                <svg className="w-5 h-5 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
              </button>
            </form>

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
          <div className="md:hidden bg-white/20 dark:bg-[#0d0d0d]/30 backdrop-blur-md border-t border-white/20 dark:border-gray-700 px-4 pb-4 rounded-b-lg">
            {navLinks.map((link, i) => (
              <div key={i} className="border-b border-white/10 dark:border-gray-800 last:border-0 py-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-full text-sm font-semibold transition
                      ${location.pathname === link.path
                        ? 'bg-brand-600 text-white shadow-lg'
                        : 'text-gray-200 hover:bg-white/20 dark:text-gray-300 dark:hover:bg-gray-700/40'
                      }`}
                  >
                    {link.name}
                  </Link>
                  {link.subMenu && (
                    <button
                      onClick={() => toggleMobileSection(link.name)}
                      className="px-3 py-2 text-sm text-gray-200"
                      aria-label="Abrir submenú"
                    >
                      <svg className={`w-4 h-4 transition-transform ${openMobile[link.name] ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    </button>
                  )}
                </div>

                {link.subMenu && openMobile[link.name] && (
                  <div className="mt-2 ml-4">
                    {link.subMenu.map((sub, j) => (
                      <div key={j} className="mb-2">
                        {Array.isArray(sub.subMenu) ? (
                          <>
                            <div className="flex items-center justify-between">
                              <span className="px-3 py-1 text-sm font-semibold text-gray-300">{sub.name}</span>
                              <button
                                onClick={() => toggleMobileSection(`${link.name}-${sub.name}`)}
                                className="px-3 py-1 text-sm text-gray-200"
                                aria-label="Abrir submenú"
                              >
                                <svg className={`w-4 h-4 transition-transform ${openMobile[`${link.name}-${sub.name}`] ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M7 10l5 5 5-5z" />
                                </svg>
                              </button>
                            </div>
                            {openMobile[`${link.name}-${sub.name}`] && (
                              <div className="ml-4">
                                {sub.subMenu.map((deep, k) => (
                                  <Link
                                    key={k}
                                    to={deep.path}
                                    className="block px-3 py-1 text-sm text-gray-300 hover:bg-white/10 rounded"
                                  >
                                    {deep.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={sub.path}
                            className="block px-3 py-1 text-sm text-gray-300 hover:bg-white/10 rounded"
                          >
                            {sub.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
