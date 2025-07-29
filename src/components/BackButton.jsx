import { useNavigate } from 'react-router-dom'

export default function BackButton() {
  const navigate = useNavigate()
  
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors mb-6"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Volver atrás
    </button>
  )
}