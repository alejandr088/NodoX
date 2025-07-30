import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToastProvider } from './context/ToastContext'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

const initTheme = () => {
  const savedMode = localStorage.getItem('darkMode')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = savedMode !== null ? JSON.parse(savedMode) : systemDark
  document.documentElement.classList.toggle('dark', isDark)
}

initTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <App />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
)
