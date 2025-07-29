import { useParams } from 'react-router-dom'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <div>Producto no encontrado</div>

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <section className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-red-600 text-2xl font-semibold mb-6">${product.price}</p>
            <div className="prose max-w-none">
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
  )
}