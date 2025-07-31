import PCBuilder from '../components/PCBuilder'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default function PCBuilderPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans relative">
      <Helmet>
        <title>Armador de PC | NodoX</title>
        <meta name="description" content="Personaliza y arma tu PC con componentes seleccionados en NodoX." />
        <meta property="og:title" content="Armador de PC | NodoX" />
        <meta property="og:description" content="Personaliza y arma tu PC con componentes seleccionados en NodoX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <PCBuilder />
      </main>
      <Footer />
    </div>
  )
}
