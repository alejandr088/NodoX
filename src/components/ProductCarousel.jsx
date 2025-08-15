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

export default function ProductCarousel() {
  const { addToCart } = useCart()

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-almostBlack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros <span className="text-red-500">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
          pagination={{ clickable: true }}
          navigation
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
                    {/* Ver detalles como Link para llevar a /product/:id */}
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
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gray-900 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
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
    </section>
  )
}
