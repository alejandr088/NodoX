import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Página no encontrada</p>
      <Link
        to="/"
        className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}
