// src/components/ProductCarousel.jsx
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import productsData from '../data/products'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { useCart } from '../contexts/CartContext'
import { getCurrencySymbol } from '../components/currencyFormatter';

export default function ProductCarousel() {
  const { addToCart } = useCart()

  return (
    <section
      id="products"
      className="relative py-16 overflow-hidden"
    >
      {/* Imagen de fondo con efecto parallax */}
      <div 
        className="parallax-bg fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/circuit.jpg")',
        }}
      />

      {/* Overlay para mejorar legibilidad - Ajustado para ambos temas */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white dark:text-white mb-4">
            Nuestros <span className="text-red-500">Productos</span>
          </h2>
          <p className="text-xl text-white dark:text-gray-200 max-w-3xl mx-auto">
            Descubre lo último en tecnología con nuestras mejores ofertas
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
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
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active bg-red-500'
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          className="mySwiper pb-12"
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id} className="max-w-xs bg-transparent">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 mx-2">
                <div className="relative h-60 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Link to={`/product/${product.id}`} className="w-full text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-500">
                      {getCurrencySymbol(product.currency)}{product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gray-900 dark:bg-gray-700 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                      aria-label={`Agregar ${product.name} al carrito`}
                      title={`Agregar ${product.name}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegación personalizada para mejor contraste */}
        <div className="swiper-button-next text-white dark:text-white after:text-2xl"></div>
        <div className="swiper-button-prev text-white dark:text-white after:text-2xl"></div>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors"
          >
            Ver todos los productos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Estilos para el efecto parallax */}
      <style jsx>{`
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
          background: white;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ef4444;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #ef4444;
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
  )
}