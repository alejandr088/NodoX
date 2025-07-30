import { useNavigate } from 'react-router-dom'

export default function BackButton({ className }) {
  const navigate = useNavigate()
  
  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 transition-colors mb-6 focus-visible:ring-2 focus-visible:ring-red-500 focus:outline-none ${className || 'text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400'}`}
      aria-label="Volver a la página anterior"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="..." />
      </svg>
      Volver atrás
    </button>
  )
}
