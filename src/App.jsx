import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
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
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ParticlesBackground from './components/ParticlesBackground';
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-background" />
      <ParticlesBackground />

      <div className="min-h-screen bg-white/70 dark:bg-gray-900/90 transition-colors">
        <header className="flex justify-end p-4">
          <ThemeToggle />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pc-builder" element={<PCBuilderPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/business-sales" element={<BusinessSales />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/stock" element={<StockPanel />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}
