import Navbar from '../components/Navbar'
import HeroApple from '../components/HeroApple'
import ProductsCarousel from '../components/ProductCarousel'
import Footer from '../components/Footer'
import WhatsappButton from '../components/WhatsappButton'
import { Helmet } from 'react-helmet'
import ParticlesBackground from '../components/ParticlesBackground'

export default function Home() {
  return (
    <div className="relative bg-transparent text-gray-900 font-sans dark:bg-transparent dark:text-gray-100 min-h-screen overflow-x-hidden">
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
      <ParticlesBackground style={{ position: "fixed", zIndex: 5, top: 0, left: 0, width: "100vw", height: "100vh" }} />
      <HeroApple />
      <ProductsCarousel />
      <Footer />
      
      <WhatsappButton />
    </div>
  )
}
