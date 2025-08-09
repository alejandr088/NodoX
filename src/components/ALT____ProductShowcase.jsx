import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "PC Gamer Xtreme", price: 1500, image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Laptop Pro 15", price: 1200, image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Monitor UltraWide", price: 400, image: "https://via.placeholder.com/300x200" },
];

export default function ProductShowcase() {
  return (
    <section className="px-6">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ${product.price}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
