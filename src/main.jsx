import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToastProvider } from './contexts/ToastContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { CartProvider } from './contexts/CartContext'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ToastProvider>
          <CartProvider>
            <ScrollToTop />
            <App />
          </CartProvider>
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
