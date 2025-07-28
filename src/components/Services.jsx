import services from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.id} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
