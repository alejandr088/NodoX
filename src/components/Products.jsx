import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../context/CartContext"

export default function Products() {
  const { addToCart } = useCart()

  // Estado para búsqueda y filtro
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilter, setPriceFilter] = useState("all") // opciones: all, low, mid, high

  // Filtrado y búsqueda combinados
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      let matchesPrice = true

      if (priceFilter === "low") matchesPrice = product.price < 800
      else if (priceFilter === "mid") matchesPrice = product.price >= 800 && product.price < 1300
      else if (priceFilter === "high") matchesPrice = product.price >= 1300

      return matchesSearch && matchesPrice
    })
  }, [searchTerm, priceFilter])

  return (
    <section
      id="products"
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros <span className="text-red-500">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnología de calidad con garantía y soporte especializado
          </p>
        </div>

        {/* Controles de búsqueda y filtro */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4 max-w-3xl mx-auto px-4 sm:px-0">
          <input
            type="text"
            aria-label="Buscar productos"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field flex-grow"
          />

          <select
            aria-label="Filtrar por precio"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="input-field w-48"
          >
            <option value="all">Todos los precios</option>
            <option value="low">Menos de $800</option>
            <option value="mid">$800 a $1299</option>
            <option value="high">Más de $1300</option>
          </select>
        </div>

        {/* Grid Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-700 dark:text-gray-300 col-span-full">
              No se encontraron productos que coincidan.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden 
                transition transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                style={{ willChange: "transform, box-shadow" }}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                    <p className="text-red-500 font-bold text-xl">${product.price}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium 
                      transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                      aria-label={`Agregar ${product.name} al carrito`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Agregar
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 
                    dark:hover:bg-gray-700 px-4 py-3 rounded-lg font-medium 
                    transition-all duration-200 ease-in-out hover:scale-105 flex items-center justify-center gap-2"
                      aria-label={`Ver detalles de ${product.name}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500
            hover:bg-red-600 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Ver todos los productos
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
