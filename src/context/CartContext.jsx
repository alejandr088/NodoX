import { createContext, useState, useContext, useEffect } from 'react'
import { useToast } from './ToastContext'

const CartContext = createContext()

const STORAGE_KEY = 'nodox_cart_items'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    }
    return []
  })

  const toast = useToast()

  // Guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        toast.showToast("Cantidad incrementada.", "success")
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      toast.showToast("Producto agregado al carrito.", "success")
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id)
      if (existing) toast.showToast("Producto eliminado del carrito.", "info")
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
