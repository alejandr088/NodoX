import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import { ThemeProvider } from './context/ThemeContext'
import ProductDetail from './components/ProductDetail'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import Feedback from './components/Feedback'
import StockPanel from './components/StockPanel'
import Cart from './components/Cart'
import AboutUsPage from './components/AboutUsPage'
import NotFound from './components/NotFound'
import PCBuilderPage from './pages/PCBuilderPage'
import BusinessSales from './pages/BusinessSales'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import circuitBg from '../public/circuit.jpg';
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        {/* 1. Div para el fondo fijo */}
        <div className="app-background"></div>
        <div
          className="app-background"
          style={{
            backgroundImage: `url(${circuitBg})`,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            opacity: 0.5
          }}
        ></div>

        {/* 2. Contenedor principal con transparencia */}
        <div className="min-h-screen bg-white/80 dark:bg-gray-900/90">
          <Routes>
            {/* Páginas principales */}
            <Route path="/" element={<Home />} />

            {/* Productos */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Servicios */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pc-builder" element={<PCBuilderPage />} />

            {/* Información */}
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Comercio */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/business-sales" element={<BusinessSales />} />

            {/* Legales */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />

            {/* Sistema */}
            <Route path="/stock" element={<StockPanel />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}