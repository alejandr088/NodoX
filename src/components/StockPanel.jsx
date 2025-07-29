import products from '../data/products'

export default function StockPanel() {
  // Datos de stock simulados
  const stockData = products.map(product => ({
    ...product,
    stock: Math.floor(Math.random() * 20) + 5,
    lastUpdated: new Date().toLocaleDateString()
  }))

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <section className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gestión de Stock</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Producto</th>
                <th className="px-6 py-3 text-left font-medium">Precio</th>
                <th className="px-6 py-3 text-left font-medium">Stock</th>
                <th className="px-6 py-3 text-left font-medium">Última actualización</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {stockData.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                  <td className={`px-6 py-4 whitespace-nowrap font-semibold ${
                    item.stock > 10 ? 'text-green-600' : item.stock > 5 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {item.stock} unidades
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}