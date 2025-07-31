import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Services from '../components/Services'
import Footer from '../components/Footer'
import WhatsappButton from '../components/WhatsappButton'  // Importar componente
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100 relative">
      <Helmet>
        <title>Inicio | NodoX</title>
        <meta name="description" content="NodoX - Tecnología de calidad con garantía y soporte especializado." />
        <meta property="og:title" content="Inicio | NodoX" />
        <meta property="og:description" content="NodoX - Tecnología de calidad con garantía y soporte especializado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Footer />
      
      <WhatsappButton /> {/* Aquí agregas el botón */}
    </div>
  )
}
