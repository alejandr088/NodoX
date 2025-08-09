// src/components/Cart.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import WhatsappOrderButton from './WhatsappOrderButton'

export default function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, totalPrice, clearCart } = useCart()

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
                Inicio
              </Link>
            </li>
            <li><span className="text-gray-400 dark:text-gray-500">/</span></li>
            <li><Link to="/products" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">Productos</Link></li>
            <li><span className="text-gray-400 dark:text-gray-500">/</span></li>
            <li className="text-red-500 font-medium" aria-current="page">Carrito</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
          Tu Carrito
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center card p-8">
            <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Agrega algunos productos para comenzar</p>
            <Link to="/products" className="btn-primary inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="card overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {cartItems.map((item) => (
                <li key={item.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                        >−</button>
                        <div className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >+</button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-red-500">${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">${(item.price || 0).toFixed(2)} x {item.quantity}</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">Subtotal:</span>
                <span className="font-bold text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">Envío:</span>
                <span className="font-bold text-green-500">Gratis</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold mb-6">
                <span>Total:</span>
                <span className="text-red-500">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link to="/" className="btn-primary text-center py-3 px-6">Seguir comprando</Link>
                <div className="flex gap-2">
                  <button onClick={clearCart} className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 px-4 rounded-lg">Vaciar carrito</button>
                  <WhatsappOrderButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
