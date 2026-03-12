import Navbar from "../components/Navbar";
import HeroApple from "../components/HeroApple";
import ProductsCarousel from "../components/ProductCarousel";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 font-sans dark:bg-zinc-950 dark:text-gray-100">
      <Helmet>
        <title>NodoX | Tu PC a un Clic</title>
        <meta
          name="description"
          content="NodoX - Tecnología de calidad con garantía y soporte especializado."
        />
        <meta property="og:title" content="Inicio | NodoX" />
        <meta
          property="og:description"
          content="NodoX - Tecnología de calidad con garantía y soporte especializado."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <main>
        <HeroApple />
        <ProductsCarousel />
      </main>
    </div>
  );
}
