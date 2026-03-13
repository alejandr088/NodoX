// src/components/ProductCarousel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Keyboard,
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
    <section id="products" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(170,12,12,0.08),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent_42%)]" />

      <div className="site-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Nuestros <span className="text-brand-500">Productos</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre lo último en tecnología con nuestras mejores ofertas
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Keyboard]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.06}
          spaceBetween={20}
          keyboard={{ enabled: true }}
          coverflowEffect={{
            rotate: 6,
            stretch: 0,
            depth: 160,
            modifier: 1.6,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3400,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
          breakpoints={{
            640: { slidesPerView: 1.18, spaceBetween: 22 },
            768: { slidesPerView: 1.45, spaceBetween: 24 },
            1024: { slidesPerView: 1.9, spaceBetween: 30 },
            1280: { slidesPerView: 2.25, spaceBetween: 34 },
          }}
          loop={true}
          className="mySwiper pb-14"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="bg-transparent py-2">
              <article className="group mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-[0_22px_65px_-32px_rgba(15,23,42,0.55)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_-28px_rgba(15,23,42,0.65)] dark:border-zinc-700/70 dark:bg-zinc-900/75 dark:shadow-[0_26px_75px_-35px_rgba(0,0,0,0.75)]">
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-gray-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-80" />
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain bg-gray-50/90 p-6 transition-transform duration-500 group-hover:scale-110 dark:bg-zinc-800/80"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/product1.jpg";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                    <Link
                      to={`/product/${product.id}`}
                      aria-label={`Ver detalles de ${product.name}`}
                      className="logo-sync-red-glow inline-flex w-full items-center justify-center rounded-xl border border-red-500/70 bg-gradient-to-r from-red-500 to-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_-14px_rgba(220,38,38,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-brand-600 hover:shadow-[0_18px_34px_-14px_rgba(185,28,28,0.95)]"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="mb-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">Precio</p>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {getCurrencySymbol(product.currency)}
                        {product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/30 transition hover:scale-105 hover:bg-brand-600"
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

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-zinc-800">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-500 to-red-400" />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Anterior"
          className="swiper-button-prev !left-2 !top-[44%] !h-12 !w-12 rounded-full border border-white/80 !bg-white/90 !text-gray-900 shadow-xl backdrop-blur transition hover:!scale-105 hover:!bg-white dark:border-zinc-600 dark:!bg-zinc-900/90 dark:!text-white dark:hover:!bg-zinc-800 md:!left-4"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          className="swiper-button-next !right-2 !top-[44%] !h-12 !w-12 rounded-full border border-white/80 !bg-white/90 !text-gray-900 shadow-xl backdrop-blur transition hover:!scale-105 hover:!bg-white dark:border-zinc-600 dark:!bg-zinc-900/90 dark:!text-white dark:hover:!bg-zinc-800 md:!right-4"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="logo-sync-red-glow inline-flex items-center rounded-xl border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white shadow-[0_15px_30px_-16px_rgba(220,38,38,0.75)] transition hover:-translate-y-0.5 hover:bg-red-600"
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
        .mySwiper .swiper-slide {
          opacity: 0.68;
          transform: scale(0.94);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .mySwiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: #cbd5e1;
          opacity: 0.7;
          transition: all 0.25s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #aa0c0c;
          transform: scale(1.2);
        }

        .swiper-button-next,
        .swiper-button-prev {
          margin-top: 0;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
          .mySwiper .swiper-slide {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
