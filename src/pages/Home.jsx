import Navbar from '../components/Navbar'
import HeroApple from '../components/HeroApple'
import ProductsCarousel from '../components/ProductCarousel'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className="relative bg-transparent text-gray-900 font-sans dark:bg-transparent dark:text-gray-100 min-h-screen overflow-x-hidden">
      <Helmet>
        <title>NodoX | Tu PC a un Clic</title>
        <meta name="description" content="NodoX - Tecnología de calidad con garantía y soporte especializado." />
        <meta property="og:title" content="Inicio | NodoX" />
        <meta property="og:description" content="NodoX - Tecnología de calidad con garantía y soporte especializado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <HeroApple />
      <ProductsCarousel />
      
    </div>
  )
}
