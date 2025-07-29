import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import ProductDetail from './components/ProductDetail'
import ServicesPage from './components/ServicesPage'
import ContactPage from './components/ContactPage'
import Feedback from './components/Feedback'
import StockPanel from './components/StockPanel'
import Cart from './components/Cart'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/stock" element={<StockPanel />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  )
}