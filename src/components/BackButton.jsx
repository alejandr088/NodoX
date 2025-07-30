import { useNavigate } from 'react-router-dom'

export default function BackButton({ className }) {
  const navigate = useNavigate()
  
  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 transition-colors mb-6 ${className || 'text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400'}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Volver atrás
    </button>
  )
}