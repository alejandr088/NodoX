import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random()
    setToasts(current => [...current, { id, message, type }])
    setTimeout(() => {
      setToasts(current => current.filter(t => t.id !== id))
    }, 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-4 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`max-w-xs w-full flex items-center px-4 py-3 rounded-lg shadow-lg text-white animate-fade-in pointer-events-auto
              ${toast.type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600'
               : toast.type === 'error' ? 'bg-gradient-to-r from-red-500 to-red-600'
               : 'bg-gradient-to-r from-gray-700 to-gray-900'
              }`}
          >
            <span className="mr-3">
              {toast.type === 'success' && (
                <svg className="w-5 h-5 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              )}
              {toast.type === 'error' && (
                <svg className="w-5 h-5 text-white opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              )}
            </span>
            <span className="font-medium">{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
