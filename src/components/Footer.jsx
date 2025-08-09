import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Aquí podrías integrar con API o servicio externo
    alert(`Gracias por suscribirte con el email: ${email}`)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-800 dark:text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Sección de contacto y descripción */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">NodoX</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Proveemos soluciones tecnológicas confiables, con soporte profesional y garantía.
          </p>
          <p className="text-gray-400">
            <strong>Teléfono:</strong> +54 9 11 1234 5678<br />
            <strong>Email:</strong> nodoxsolutions@gmail.com
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Enlaces</h4>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-red-500 transition">Inicio</a>
            </li>
            <li className="mb-2">
              <a href="/products" className="hover:text-red-500 transition">Productos</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-red-500 transition">Servicios</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-red-500 transition">Contacto</a>
            </li>
            {/* <li className="mb-2">
              <a href="/faq" className="hover:text-red-500 transition">Preguntas Frecuentes</a>
            </li> */}
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Políticas</h4>
          <ul>
            <li className="mb-2">
              <a href="/privacy-policy" className="hover:text-red-500 transition">Política de Privacidad</a>
            </li>
            <li className="mb-2">
              <a href="/terms-conditions" className="hover:text-red-500 transition">Términos y Condiciones</a>
            </li>
            <li className="mb-2">
              {/* <a href="/shipping" className="hover:text-red-500 transition">Envíos</a>*/}
            </li>
            {/* <li className="mb-2">
              <a href="/returns" className="hover:text-red-500 transition">Devoluciones</a>
            </li> */}
          </ul>
        </div>

        {/* Suscripción y redes sociales */}
        <div>
          {/* <h4 className="font-semibold mb-4 text-white">Suscríbete</h4>
          <p className="mb-4 text-gray-400">Recibe novedades y ofertas exclusivas.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Tu email"
              className="rounded-md p-3 w-full text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email para suscripción"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md font-semibold transition"
            >
              Suscribirse
            </button>
          </form>*/}

          <div className="mt-8 flex space-x-4">
            <a
              href="https://facebook.com/nodoxsolutions"
              aria-label="Facebook NodoX"
              className="hover:text-red-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.127 8.438 9.879v-6.987h-2.54v-2.892h2.54v-2.203c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.874h2.773l-.443 2.892h-2.33v6.987C18.343 21.127 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/nodox"
              aria-label="Twitter NodoX"
              className="hover:text-red-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.277 4.277 0 001.88-2.36 8.547 8.547 0 01-2.7 1.03 4.267 4.267 0 00-7.28 3.89A12.1 12.1 0 013 5.11a4.27 4.27 0 001.32 5.7 4.247 4.247 0 01-1.93-.53v.05a4.27 4.27 0 003.43 4.18 4.29 4.29 0 01-1.92.07 4.27 4.27 0 003.98 2.97A8.56 8.56 0 012 19.54a12.07 12.07 0 006.54 1.92c7.85 0 12.14-6.5 12.14-12.14 0-.19 0-.37-.01-.55A8.66 8.66 0 0024 5.5a8.33 8.33 0 01-2.4.66z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/nodox"
              aria-label="Instagram NodoX"
              className="hover:text-red-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.758 2.243 5 5 5h10c2.757 0 5-2.242 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm3.207-3.586a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {currentYear} NodoX. Todos los derechos reservados.
      </div>
    </footer>
  )
}
