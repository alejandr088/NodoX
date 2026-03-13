import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Feedback from "./components/Feedback";
import StockPanel from "./components/StockPanel";
import Cart from "./components/Cart";
import AboutUsPage from "./pages/AboutUsPage";
import NotFound from "./components/NotFound";
import PCBuilderPage from "./pages/PCBuilderPage";
import BusinessSales from "./pages/BusinessSales";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import FloatingNodoxLogo from "./components/FloatingNodoxLogo";
import "./index.css";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 rounded-md border border-gray-200 bg-white px-3 py-2 text-black shadow-sm z-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      >
        Saltar al contenido
      </a>
      <div className="app-background" />
      <div id="main-content" className="min-h-screen bg-white transition-colors dark:bg-zinc-950">
        <header className="flex justify-end p-4">
          {/* <ThemeToggle /> */}
        </header>

        <Suspense fallback={<div className="p-8 text-center">Cargando...</div>}>
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
        </Suspense>
        <Footer />
        <FloatingNodoxLogo />
        <WhatsappButton />
      </div>
    </>
  );
}
