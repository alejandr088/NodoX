import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverTop, setHoverTop] = useState(null);
  const [hoverSub, setHoverSub] = useState(null);
  const [openMobile, setOpenMobile] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Referencias para los timeouts
  const topMenuTimeoutRef = useRef(null);
  const subMenuTimeoutRef = useRef(null);

  const toggleMobileSection = (key) =>
    setOpenMobile((s) => ({ ...s, [key]: !s[key] }));

  // Cambiar a true cuando quieras volver a mostrar el menú "Nosotros".
  const showAboutMenu = false;

  const navLinks = [
    { path: "/", name: "Inicio" },
    {
      path: "/products",
      name: "Productos",
      subMenu: [
        {
          name: "Notebooks",
          subMenu: [{ name: "AMD" }, { name: "Intel" }],
        },
        {
          name: "PC",
          subMenu: [{ name: "AMD" }, { name: "Intel" }],
        },
        {
          name: "Repuestos",
          subMenu: [
            { name: "Baterías" },
            { name: "Cargadores" },
            { name: "Pantallas" },
          ],
        },
        { name: "Herramientas" },
        { name: "Periféricos" },
        { name: "Redes" },
      ],
    },
    ...(showAboutMenu
      ? [
          {
            path: "/about",
            name: "Nosotros",
            subMenu: [
              { name: "Sobre NodoX", path: "/about" },
              { name: "Ventas Empresas", path: "/business-sales" },
              { name: "Armador de PC", path: "/pc-builder" },
            ],
          },
        ]
      : []),
    { path: "/services", name: "Servicios" },
    { path: "/contact", name: "Contacto" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const goEnglish = () => {
    if (typeof window === "undefined") return;
    const currentUrl = window.location.href;
    window.location.href = `https://translate.google.com/translate?sl=es&tl=en&u=${encodeURIComponent(currentUrl)}`;
  };

  const goSpanish = () => {
    if (typeof window === "undefined") return;
    const currentUrl = new URL(window.location.href);
    const originalUrl = currentUrl.searchParams.get("u");

    if (originalUrl) {
      window.location.href = decodeURIComponent(originalUrl);
      return;
    }

    window.location.href = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
  };

  // Función para manejar el cierre con retraso
  const handleTopMenuLeave = (i) => {
    if (hoverTop === i) {
      // Limpiar timeout existente
      if (topMenuTimeoutRef.current) {
        clearTimeout(topMenuTimeoutRef.current);
      }

      // Establecer nuevo timeout para cerrar después de 300ms
      topMenuTimeoutRef.current = setTimeout(() => {
        setHoverTop(null);
        setHoverSub(null);
      }, 300);
    }
  };

  // Función para cancelar el cierre si el cursor entra al menú
  const cancelTopMenuClose = () => {
    if (topMenuTimeoutRef.current) {
      clearTimeout(topMenuTimeoutRef.current);
      topMenuTimeoutRef.current = null;
    }
  };

  // Función similar para submenús
  const handleSubMenuLeave = (key) => {
    if (hoverSub === key) {
      if (subMenuTimeoutRef.current) {
        clearTimeout(subMenuTimeoutRef.current);
      }

      subMenuTimeoutRef.current = setTimeout(() => {
        setHoverSub(null);
      }, 300);
    }
  };

  const cancelSubMenuClose = () => {
    if (subMenuTimeoutRef.current) {
      clearTimeout(subMenuTimeoutRef.current);
      subMenuTimeoutRef.current = null;
    }
  };

  return (
    <nav role="navigation" aria-label="Barra de navegación principal" className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm dark:border-gray-800 dark:bg-zinc-950">
      <div className="site-container py-3 flex items-center justify-between">
        <Link to="/" className="-ml-1 md:-ml-2 shrink-0 text-2xl md:text-2xl font-extrabold text-brand-500 tracking-tight flex items-center">
          <img
            src={theme === "dark" ? "/nodoxwht.png" : "/nodoxred.png"}
            alt="NodoX"
            loading="lazy"
            className="h-8 w-auto max-w-none shrink-0 object-contain"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-md bg-white hover:bg-gray-50 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600 dark:bg-zinc-900 dark:hover:bg-zinc-800"
        >
          <div className={`nav-hamburger ${isMenuOpen ? "open" : ""}`}>
            <span className="block w-5 h-0.5 bg-current my-0.5" />
            <span className="block w-5 h-0.5 bg-current my-0.5" />
            <span className="block w-5 h-0.5 bg-current my-0.5" />
          </div>
        </button>

        {/* Desktop Links + Search */}
        <div className="hidden md:flex items-center gap-5 md:ml-4 lg:ml-8 xl:ml-10">
          {navLinks.map((link, i) => {
            if (!link.subMenu) {
              return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition
                    ${
                      location.pathname === link.path
                        ? "bg-brand-600 text-white shadow dark:bg-brand-500 dark:shadow-[0_8px_24px_-12px_rgba(170,12,12,0.85)]"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-zinc-800"
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
                onMouseEnter={() => {
                  cancelTopMenuClose();
                  setHoverTop(i);
                }}
                onMouseLeave={() => handleTopMenuLeave(i)}
              >
                <Link
                  to={link.path}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                      e.preventDefault();
                      setHoverTop(i);
                    }
                    if (e.key === "Escape") {
                      setHoverTop(null);
                      setHoverSub(null);
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={hoverTop === i}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition inline-flex items-center gap-2
                    ${
                      location.pathname === link.path
                        ? "bg-brand-600 text-white shadow dark:bg-brand-500 dark:shadow-[0_8px_24px_-12px_rgba(170,12,12,0.85)]"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-zinc-800"
                    }`}
                >
                  {link.name}
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </Link>

                {hoverTop === i && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white dark:bg-zinc-900 shadow-xl rounded-xl py-2 w-64 z-50 border border-gray-200 dark:border-gray-800"
                    onMouseEnter={cancelTopMenuClose}
                    onMouseLeave={() => handleTopMenuLeave(i)}
                  >
                    {link.subMenu.map((sub, j) => {
                      const hasChildren = Array.isArray(sub.subMenu);
                      const key = `${i}-${j}`;
                      return (
                        <div
                          key={key}
                          className="relative"
                          onMouseEnter={() => {
                            cancelSubMenuClose();
                            setHoverSub(key);
                          }}
                          onMouseLeave={() => handleSubMenuLeave(key)}
                        >
                          <div
                            className={`px-4 py-2 text-sm font-semibold cursor-${hasChildren ? "default" : "pointer"} 
                              text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center justify-between`}
                          >
                            {hasChildren ? (
                              <>
                                <span>{sub.name}</span>
                                <svg
                                  className="w-4 h-4 opacity-70"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M9 6l6 6-6 6" />
                                </svg>
                              </>
                            ) : (
                                <button
                                  onClick={() => {
                                    if (sub.path) {
                                      navigate(sub.path);
                                    } else {
                                      navigate(
                                        `/products?search=${encodeURIComponent(sub.name)}`,
                                      );
                                    }
                                    setHoverTop(null);
                                    setHoverSub(null);
                                  }}
                                  className="w-full text-left"
                                  aria-label={sub.path ? `Ir a ${sub.name}` : `Buscar ${sub.name}`}
                                >
                                  {sub.name}
                                </button>
                            )}
                          </div>

                          {hasChildren && hoverSub === key && (
                            <div
                              className="absolute top-0 left-full ml-2 bg-white dark:bg-zinc-900 shadow-xl rounded-xl py-2 w-56 z-50 border border-gray-200 dark:border-gray-800"
                              onMouseEnter={cancelSubMenuClose}
                              onMouseLeave={() => handleSubMenuLeave(key)}
                            >
                              {sub.subMenu.map((deep, k) => (
                                <button
                                  key={`${key}-${k}`}
                                  onClick={() => {
                                    navigate(
                                      `/products?search=${encodeURIComponent(deep.name)}`,
                                    );
                                    setHoverTop(null);
                                    setHoverSub(null);
                                  }}
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 w-full text-left focus:outline-none focus:ring-2 focus:ring-red-500"
                                  aria-label={`Buscar ${deep.name}`}
                                >
                                  {deep.name}
                                </button>
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

          {/* Search box desktop */}
          <form
            onSubmit={handleSearch}
            className="ml-4 mr-8 xl:mr-10 flex items-center w-full max-w-xs"
          >
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-3 py-2 rounded-l-md border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-600 text-sm dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-100"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-600 text-white rounded-r-md hover:bg-brand-700 transition text-sm flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-600"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Theme + Cart */}
        <div className="flex items-center gap-3 md:ml-8 lg:ml-10">
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800 dark:ring-offset-zinc-950"
            title="Cambiar tema"
          >
            {theme === "dark" ? (
              <svg
                className="h-5 w-5 text-amber-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.4v2.1M12 19.5v2.1M4.4 12h2.1M17.5 12h2.1M6.6 6.6l1.5 1.5M15.9 15.9l1.5 1.5M17.4 6.6l-1.5 1.5M8.1 15.9l-1.5 1.5" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-700 dark:text-gray-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.4A8.7 8.7 0 1111.6 3a7.1 7.1 0 009.4 9.4z" />
              </svg>
            )}
          </button>

          <Link
            to="/cart"
            aria-label={`Carrito (${itemCount} productos)`}
            className="relative p-2 rounded-md bg-white hover:bg-gray-50 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:ring-offset-zinc-950"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-brand-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {itemCount}
              </span>
            )}
          </Link>

          <div className="hidden md:flex shrink-0 items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-300">
            <button
              type="button"
              onClick={goSpanish}
              className="transition hover:text-brand-600 dark:hover:text-brand-400"
              aria-label="Ver sitio en español"
            >
              ES
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={goEnglish}
              className="transition hover:text-brand-600 dark:hover:text-brand-400"
              aria-label="Translate site to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 rounded-b-md shadow-sm dark:bg-zinc-950 dark:border-gray-800"
        >
          {/* Search box mobile */}
          <form
            onSubmit={handleSearch}
            className="mb-4 flex items-center w-full"
          >
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-3 py-2 rounded-l-md border border-gray-200 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-600 text-sm dark:border-gray-700 dark:bg-zinc-800 dark:text-gray-100"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-600 text-white rounded-r-md hover:bg-brand-700 transition text-sm flex-shrink-0"
            >
              Buscar
            </button>
          </form>

          <div className="mb-4 inline-flex items-center rounded-lg border border-gray-200 bg-white p-1 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-900">
            <button
              type="button"
              onClick={goSpanish}
              className="rounded-md px-3 py-1.5 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800"
              aria-label="Ver sitio en español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={goEnglish}
              className="rounded-md px-3 py-1.5 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800"
              aria-label="Translate site to English"
            >
              EN
            </button>
          </div>

          {/* Mobile links */}
          {navLinks.map((link, i) => (
            <div
              key={i}
              className="border-b border-gray-100 dark:border-gray-800 last:border-0 py-2"
            >
              <div className="flex items-center justify-between">
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition
                    ${
                      location.pathname === link.path
                        ? "bg-brand-600 text-white shadow"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-zinc-800"
                    }`}
                >
                  {link.name}
                </Link>
                {link.subMenu && (
                  <button
                    onClick={() => toggleMobileSection(link.name)}
                    className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Abrir submenú"
                    aria-expanded={!!openMobile[link.name]}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${openMobile[link.name] ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
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
                            <span className="px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-300">
                              {sub.name}
                            </span>
                            <button
                              onClick={() =>
                                toggleMobileSection(`${link.name}-${sub.name}`)
                              }
                              className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300"
                              aria-label="Abrir submenú"
                            >
                              <svg
                                className={`w-4 h-4 transition-transform ${openMobile[`${link.name}-${sub.name}`] ? "rotate-180" : ""}`}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M7 10l5 5 5-5z" />
                              </svg>
                            </button>
                          </div>
                          {openMobile[`${link.name}-${sub.name}`] && (
                            <div className="ml-4">
                              {sub.subMenu.map((deep, k) => (
                                <button
                                  key={k}
                                  onClick={() => {
                                    navigate(
                                      `/products?search=${encodeURIComponent(deep.name)}`,
                                    );
                                    setIsMenuOpen(false);
                                  }}
                                  className="block px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded w-full text-left"
                                >
                                  {deep.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            if (sub.path) {
                              navigate(sub.path);
                            } else {
                              navigate(
                                `/products?search=${encodeURIComponent(sub.name)}`,
                              );
                            }
                            setIsMenuOpen(false);
                          }}
                          className="block px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded w-full text-left"
                        >
                          {sub.name}
                        </button>
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
  );
}
