export default function Cart({ cartItems, removeFromCart }) {
  return (
    <section id="cart" className="py-20 px-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-700">El carrito está vacío.</p>
      ) : (
        <ul className="max-w-2xl mx-auto">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow">
              <span>{item.name} (x{item.quantity})</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
