import { useState } from 'react'

const COMPONENTS_DATA = {
  cpu: [
    { id: 1, name: "Intel Core i5-12400F", price: 180 },
    { id: 2, name: "AMD Ryzen 5 5600X", price: 200 },
  ],
  gpu: [
    { id: 1, name: "Nvidia RTX 3060", price: 350 },
    { id: 2, name: "AMD Radeon RX 6600 XT", price: 300 },
  ],
  ram: [
    { id: 1, name: "16GB DDR4 3200MHz", price: 80 },
    { id: 2, name: "32GB DDR4 3200MHz", price: 150 },
  ],
  storage: [
    { id: 1, name: "512GB NVMe SSD", price: 90 },
    { id: 2, name: "1TB NVMe SSD", price: 150 },
  ],
  motherboard: [
    { id: 1, name: "MSI B550 Tomahawk", price: 150 },
    { id: 2, name: "ASUS ROG Strix B660-F", price: 180 },
  ],
}

export default function PCBuilder() {
  const [selected, setSelected] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null,
    motherboard: null,
  })

  const handleSelect = (category, option) => {
    setSelected(prev => ({ ...prev, [category]: option }))
  }

  const totalPrice = Object.values(selected).reduce((acc, item) => acc + (item?.price || 0), 0)

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Armador de PC Personalizado
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(COMPONENTS_DATA).map(([category, options]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3 capitalize text-gray-800 dark:text-gray-200">{category}</h3>
            <div className="space-y-2">
              {options.map(option => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(category, option)}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                    selected[category]?.id === option.id
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-gray-100 dark:bg-gray-700 border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                  aria-pressed={selected[category]?.id === option.id}
                >
                  {option.name} - ${option.price}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Precio Total: <span className="text-red-500">${totalPrice}</span>
        </h3>
        <button
          type="button"
          disabled={Object.values(selected).some(v => v === null)}
          className={`mt-4 px-6 py-3 rounded-lg font-semibold text-white transition ${
            Object.values(selected).some(v => v === null)
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600'
          }`}
          onClick={() => alert(`Gracias por elegir tu PC personalizada. Precio final: $${totalPrice}`)}
        >
          Cotizar Ahora
        </button>
      </div>
    </section>
  )
}
