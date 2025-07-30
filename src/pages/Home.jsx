import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Services from '../components/Services'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Home() {
  const { cartItems, addToCart, removeFromCart } = useCart()

  return (
    <div className="bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Products addToCart={addToCart} />
      <Services />
      <Footer />
    </div>
  )
}