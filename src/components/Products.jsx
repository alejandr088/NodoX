import { Link } from "react-router-dom"
import products from "../data/products"
import { useCart } from '../context/CartContext'

export default function Products() {
  const { addToCart } = useCart() // Usa el contexto
  return (
    <section id="products" className="py-20 px-8 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-12">PC y Notebooks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-600 mb-2">{p.description}</p>
            <p className="text-red-600 font-semibold mb-4">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
