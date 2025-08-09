// src/context/CartContext.jsx
import { createContext, useState, useContext, useEffect } from 'react'
import { useToast } from './ToastContext'

const CartContext = createContext()

const STORAGE_KEY = 'nodox_cart_items'

export function CartProvider({ children }) {
  const toast = useToast()

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === 'undefined') return []
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (err) {
      console.error('Error parsing cart from localStorage', err)
      localStorage.removeItem(STORAGE_KEY)
      return []
    }
  })

  // Persistencia robusta
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
    } catch (err) {
      console.error('Error saving cart to localStorage', err)
    }
  }, [cartItems])

  // Contador (suma de cantidades)
  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)

  const addToCart = (product, qty = 1) => {
    if (!product || !product.id) return
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        toast.showToast('Cantidad incrementada.', 'success')
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + qty }
            : item
        )
      }
      toast.showToast('Producto agregado al carrito.', 'success')
      return [...prev, { ...product, quantity: qty }]
    })
  }

  const incrementQuantity = (id) => {
    setCartItems((prev) => prev.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    ))
  }

  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map(item => item.id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) } : item)
        .filter(item => item.quantity > 0) // Si llega a 0 lo eliminamos
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id)
      if (existing) toast.showToast('Producto eliminado del carrito.', 'info')
      return prev.filter((item) => item.id !== id)
    })
  }

  const clearCart = () => {
    setCartItems([])
    toast.showToast('Carrito vaciado.', 'info')
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      itemCount,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
