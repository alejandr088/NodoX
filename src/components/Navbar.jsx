export default function Navbar({ cartItems }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-8 py-4 transition-all duration-300">
      <div className="text-2xl font-bold tracking-wide">NodoX</div>
      <div className="flex gap-6 text-lg">
        <a href="#products" className="hover:text-red-500">Productos</a>
        <a href="#services" className="hover:text-red-500">Servicios</a>
        <a href="#cart" className="hover:text-red-500">Carrito ({cartItems.length})</a>
      </div>
    </nav>
  );
}
