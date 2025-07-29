import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cartItems } = useCart() // Usa el contexto

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-8 py-4">
      <Link to="/" className="text-2xl font-bold tracking-wide">NodoX</Link>
      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-red-500">Productos</Link>
        <Link to="/services" className="hover:text-red-500">Servicios</Link>
        <Link to="/contact" className="hover:text-red-500">Contacto</Link>
        <Link to="/cart" className="hover:text-red-500">
          Carrito ({cartItems.length})
        </Link>
      </div>
    </nav>
  )
}