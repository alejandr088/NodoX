import React from "react";
import { Link, useLocation } from "react-router-dom";
import productsData from "../data/products";
import { fetchProducts } from "../data/productsClient";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/CartContext";
import { useMemo } from "react";
import { getCurrencySymbol } from "../components/currencyFormatter";
import { Helmet } from "react-helmet";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const location = useLocation();
  const [products, setProducts] = React.useState(productsData || []);

  React.useEffect(() => {
    let mounted = true;
    fetchProducts().then((data) => {
      if (mounted && data && data.length) setProducts(data);
    });
    return () => (mounted = false);
  }, []);

  // Extraer query string ?search=...
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const normalize = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const includesWord = (text, word) =>
    new RegExp(`(^|[^a-z0-9])${word}([^a-z0-9]|$)`, "i").test(text);

  const queryAliases = {
    amd: ["amd", "ryzen", "am4", "am5", "a520", "a620"],
    intel: ["intel", "intel core", "lga"],
    perifericos: [
      "perifericos",
      "periferico",
      "mouse",
      "teclado",
      "auricular",
      "combo",
      "usb",
    ],
    redes: ["redes", "wifi", "ethernet", "antena", "hub", "conectividad"],
    repuestos: ["repuesto", "repuestos", "bateria", "cargador", "pantalla"],
    notebooks: ["notebook", "laptop", "macbook", "ideapad"],
    pc: ["pc", "gabinete", "motherboard", "procesador", "ram", "ssd"],
  };

  const categoryMatchers = {
    amd: (haystack, category) =>
      includesWord(haystack, "amd") ||
      includesWord(haystack, "ryzen") ||
      includesWord(haystack, "am4") ||
      includesWord(haystack, "am5") ||
      includesWord(haystack, "a520") ||
      includesWord(haystack, "a620") ||
      category.includes("amd"),
    intel: (haystack, category) =>
      includesWord(haystack, "intel") ||
      includesWord(haystack, "lga") ||
      category.includes("intel"),
    redes: (haystack, category) =>
      category.includes("conectividad") ||
      includesWord(haystack, "wifi") ||
      includesWord(haystack, "ethernet") ||
      includesWord(haystack, "antena") ||
      includesWord(haystack, "mercusys") ||
      includesWord(haystack, "tp link") ||
      includesWord(haystack, "hub"),
    perifericos: (haystack, category) =>
      category.includes("teclado") ||
      category.includes("mouse") ||
      category.includes("auriculares") ||
      includesWord(haystack, "teclado") ||
      includesWord(haystack, "mouse") ||
      includesWord(haystack, "combo") ||
      includesWord(haystack, "auricular"),
  };

  // Filtrar productos según searchQuery
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    const normalizedQuery = normalize(searchQuery);
    const expandedTerms = queryAliases[normalizedQuery] || [normalizedQuery];

    return products.filter((product) => {
      const normalizedCategory = normalize(product.category);
      const haystack = normalize([
        product.name,
        product.description,
        product.category,
        ...(product.specs || []),
      ].join(" | "));

      if (categoryMatchers[normalizedQuery]) {
        return categoryMatchers[normalizedQuery](haystack, normalizedCategory);
      }

      return expandedTerms.some((term) => haystack.includes(normalize(term)));
    });
  }, [products, searchQuery]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-zinc-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/product2.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-slate-100/80 to-slate-50/90 dark:from-zinc-950/86 dark:via-zinc-950/80 dark:to-zinc-950/92 pointer-events-none" />

      <Helmet>
        <title>Productos | NodoX</title>
        <meta
          name="description"
          content="Explora nuestro catálogo completo de productos tecnológicos. Encuentra laptops, PCs, componentes y más en NodoX."
        />
        <meta property="og:title" content="Productos | NodoX" />
        <meta
          property="og:description"
          content="Explora nuestro catálogo completo de productos tecnológicos en NodoX."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <main className="site-container relative z-10 flex-grow pt-28 pb-16">
        <div className="py-8">
          <div className="surface-panel mb-12 rounded-[2rem] px-8 py-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
                Catálogo NodoX
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl dark:text-white">
                Tecnología de calidad, variedad y precios claros.
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Descubre nuestra selección de laptops, PCs, componentes y periféricos para gaming, oficina y trabajo técnico. Actualizamos constantemente nuestro catálogo con productos probados y asesoramiento experto.
              </p>
            </div>
            {searchQuery && (
              <p className="mt-6 text-base text-gray-600 dark:text-gray-300">
                Resultados para:{" "}
                <span className="font-semibold">{searchQuery}</span>
              </p>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="surface-panel rounded-3xl border-dashed px-6 py-20 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                No se encontraron productos para "{searchQuery}".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </main>

    </div>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="surface-panel group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/product/${product.id}`}
        aria-label={`Ver detalles de ${product.name}`}
        className="surface-subtle relative block h-72 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-600"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/product1.jpg";
          }}
        />
        <div className="absolute inset-x-4 bottom-4">
          <span className="surface-panel block w-full rounded-md py-3 text-center text-sm font-semibold text-gray-800 dark:text-gray-200">
            Ver Detalles
          </span>
        </div>
      </Link>

      <div className="flex flex-grow flex-col p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
          {product.name}
        </h3>
        <p className="mt-3 flex-grow text-base leading-7 text-gray-600 line-clamp-3 dark:text-gray-300">
          {product.description}
        </p>
        <div className="mb-6 mt-5 space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            Especificaciones:
          </h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {product.specs.slice(0, 3).map((spec, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-5 dark:border-gray-800">
          <span className="text-2xl font-bold text-gray-950 dark:text-white">
            {getCurrencySymbol(product.currency)}
            {product.price.toLocaleString()}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="btn-primary px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes
import PropTypes from 'prop-types';

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
