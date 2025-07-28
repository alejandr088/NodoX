export default function Hero() {
  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-extrabold mb-4">Insumos de Informática</h1>
        <p className="text-lg text-gray-700 mb-6">
          Notebooks nuevas, recertificadas, PCs armadas y servicios técnicos.
        </p>
        <a href="#products" className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition">
          Ver productos
        </a>
      </div>
    </section>
  );
}
