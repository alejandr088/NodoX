import { Link } from 'react-router-dom'
import productsData from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Añadí pt-24 para compensar la altura del navbar fijo */}
      <main className="flex-grow pt-24 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Contenedor del título con margen inferior */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Catálogo Completo
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Todos nuestros productos disponibles
            </p>
          </div>

          {/* Grid de productos con margen superior */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productsData.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
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
            ${product.price.toLocaleString()}
          </span>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}