// src/components/ProductCarousel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import productsData from "../data/products";
import { fetchProducts } from "../data/productsClient";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useCart } from "../contexts/CartContext";
import { getCurrencySymbol } from "../components/currencyFormatter";

export default function ProductCarousel() {
  const { addToCart } = useCart();
  const [products, setProducts] = React.useState(productsData || []);

  React.useEffect(() => {
    let mounted = true;
    fetchProducts().then((data) => {
      if (mounted && data && data.length) setProducts(data);
    });
    return () => (mounted = false);
  }, []);

  return (
    <section id="products" className="relative py-16">
      <div className="site-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Nuestros <span className="text-brand-500">Productos</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre lo último en tecnología con nuestras mejores ofertas
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active bg-red-500",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          className="mySwiper pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="max-w-xs bg-transparent">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 mx-2 border border-gray-200 dark:border-gray-800">
                <div className="relative h-72 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400 bg-gray-50 dark:bg-slate-800"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/product1.jpg";
                    }}
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <Link
                      to={`/product/${product.id}`}
                      aria-label={`Ver detalles de ${product.name}`}
                      className="w-full text-center btn-primary"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {getCurrencySymbol(product.currency)}
                      {product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn-primary p-2 rounded-md"
                      aria-label={`Agregar ${product.name} al carrito`}
                      title={`Agregar ${product.name}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegación personalizada para mejor contraste */}
        <div className="swiper-button-next text-gray-900 dark:text-gray-100 after:text-2xl"></div>
        <div className="swiper-button-prev text-gray-900 dark:text-gray-100 after:text-2xl"></div>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            Ver todos los productos
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Estilos para el efecto parallax */}
      <style>{`
        .parallax-bg {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          min-height: 100vh;
          z-index: -1;
        }
        
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.8;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #aa0c0c;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #111827;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #aa0c0c;
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
          .parallax-bg {
            background-attachment: scroll;
          }
        }
      `}</style>
    </section>
  );
}
