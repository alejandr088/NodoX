import { Link, useLocation } from 'react-router-dom'
import productsData from '../data/products'
import Navbar from '../components/Navbar'
import { useCart } from '../contexts/CartContext'
import { useMemo } from 'react'
import { getCurrencySymbol } from '../components/currencyFormatter'
import { Helmet } from 'react-helmet'

export default function ProductsPage() {
  const { addToCart } = useCart()
  const location = useLocation()

  // Extraer query string ?search=...
  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''

  // Filtrar productos según searchQuery
  const filteredProducts = useMemo(() => {
    if (!searchQuery) return productsData
    return productsData.filter(product => {
      // Filtra si el nombre o specs contienen el término buscado
      return (
        product.name.toLowerCase().includes(searchQuery) ||
        product.specs.some(spec => spec.toLowerCase().includes(searchQuery))
      )
    })
  }, [searchQuery])

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <div 
        className="parallax-bg fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/product1.jpg')",
        }}
      />

      <Helmet>
        <title>Productos | NodoX</title>
        <meta name="description" content="Explora nuestro catálogo completo de productos tecnológicos. Encuentra laptops, PCs, componentes y más en NodoX." />
        <meta property="og:title" content="Productos | NodoX" />
        <meta property="og:description" content="Explora nuestro catálogo completo de productos tecnológicos en NodoX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/25 dark:bg-black/0 pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex-grow pt-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white">
              Catálogo Completo
            </h1>
            {searchQuery && (
              <p className="mt-2 text-lg text-gray-200">
                Resultados para: <span className="font-semibold">{searchQuery}</span>
              </p>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-200">
              No se encontraron productos para "{searchQuery}".
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Estilos para el efecto parallax */}
      <style jsx>{`
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          min-height: 100vh;
          z-index: -1;
        }
        
        @media (max-width: 768px) {
          .parallax-bg {
            background-attachment: scroll;
          }
        }
      `}</style>
    </div>
  )
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
      <Link to={`/product/${product.id}`} className="relative h-60 overflow-hidden block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="w-full text-center bg-red-500 text-white py-2 rounded-lg">
            Ver Detalles
          </span>
        </div>
      </Link>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">Especificaciones:</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            {product.specs.slice(0, 3).map((spec, i) => (
              <li key={i} className="flex">
                <span className="mr-2">•</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-red-500">
            {getCurrencySymbol(product.currency)}{product.price.toLocaleString()}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}