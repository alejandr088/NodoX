import services from '../data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <section className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Beneficios:</h4>
                <ul className="list-disc pl-5">
                  <li>Garantía de 30 días</li>
                  <li>Técnicos certificados</li>
                  <li>Presupuesto sin cargo</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}