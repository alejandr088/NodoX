import Navbar from "../components/Navbar";
import HeroApple from "../components/HeroApple";
import ProductsCarousel from "../components/ProductCarousel";
import SEO from "../components/SEO";
import { localBusinessSchema, organizationSchema, websiteSchema } from "../seo/structuredData";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 font-sans dark:bg-zinc-950 dark:text-gray-100">
      <SEO
        title="Soporte IT y Tecnologia en Montevideo"
        description="Servicios IT, reparacion de computadoras, redes, soporte tecnico y venta de hardware en Montevideo y Uruguay."
        path="/"
        structuredData={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
      />

      <Navbar />
      <main>
        <HeroApple />
        <ProductsCarousel />
      </main>
    </div>
  );
}
