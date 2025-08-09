import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in">
          Insumos e Informática
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Notebooks nuevas, recertificadas, PCs armadas y servicio técnico profesional
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Ver productos
          </Link>
          <Link 
            to="/services" 
            className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition"
          >
            Nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  )
}