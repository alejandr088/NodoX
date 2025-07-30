import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Función para inicializar el tema
const initTheme = () => {
  const savedMode = localStorage.getItem('darkMode')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = savedMode !== null ? JSON.parse(savedMode) : systemDark
  document.documentElement.classList.toggle('dark', isDark)
}

// Llamar a la función antes del renderizado
initTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)