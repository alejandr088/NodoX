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

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems)) }
    catch (err) { console.error('Error saving cart', err) }
  }, [cartItems])

  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0)

  const addToCart = (product, qty = 1) => {
    if (!product || !product.id) return
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        toast.showToast('Cantidad incrementada.', 'success')
        return prev.map(i => i.id === product.id ? { ...i, quantity: (i.quantity || 1) + qty } : i)
      }
      toast.showToast('Producto agregado al carrito.', 'success')
      return [...prev, { ...product, quantity: qty }]
    })
  }

  const incrementQuantity = (id) => setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: (i.quantity || 1) + 1 } : i))
  const decrementQuantity = (id) => setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max((i.quantity || 1) - 1, 0) } : i).filter(i => i.quantity > 0))
  const removeFromCart = (id) => setCartItems(prev => { const ex = prev.find(i => i.id === id); if (ex) toast.showToast('Producto eliminado del carrito.', 'info'); return prev.filter(i => i.id !== id) })
  const clearCart = () => { setCartItems([]); toast.showToast('Carrito vaciado.', 'info') }

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart, itemCount, totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
