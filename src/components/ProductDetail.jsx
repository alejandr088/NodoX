import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Breadcrumbs from './Breadcrumbs'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return (
    <div className="min-h-screen pt-24 pb-12 px-4 text-center text-gray-900 dark:text-gray-100">
      <p>Producto no encontrado</p>
    </div>
  )

  // Breadcrumbs: Inicio > Productos > Nombre del Producto
  const breadcrumbs = [
    { name: "Productos", link: "/products" },
    { name: product.name }
  ]

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{product.name} | NodoX</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | NodoX`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Breadcrumbs paths={breadcrumbs} />

        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
              <p className="text-red-600 text-2xl font-semibold mb-6">${product.price}</p>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                <h3 className="text-xl font-semibold mb-2">Especificaciones:</h3>
                <ul className="list-disc pl-5 mb-6">
                  {product.description.split(',').map((spec, i) => (
                    <li key={i} className="mb-1">{spec.trim()}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Disponibilidad:</h3>
                <p className="text-green-600 font-medium">En stock</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
