import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import Feedback from './components/Feedback'
import StockPanel from './components/StockPanel'
import Cart from './components/Cart'
import AboutUsPage from './components/AboutUsPage'
import NotFound from './components/NotFound' // Importa la página 404
import PCBuilderPage from './pages/PCBuilderPage'
import BusinessSales from './pages/BusinessSales'
import './index.css'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/pc-builder" element={<PCBuilderPage />} />
        <Route path="/stock" element={<StockPanel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/business-sales" element={<BusinessSales />} />
      </Routes>
    </CartProvider>
  )
}
