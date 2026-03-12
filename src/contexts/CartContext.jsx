import { createContext, useReducer, useContext, useEffect, useCallback } from "react";
import { useToast } from "./ToastContext";

const CartContext = createContext();
const STORAGE_KEY = "nodox_cart_items";

function safeParse(value) {
  try {
    return value ? JSON.parse(value) : [];
  } catch (err) {
    console.error("Error parsing cart from localStorage", err);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    return [];
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.payload || [];
    case "ADD": {
      const { product, qty = 1 } = action.payload;
      if (!product || !product.id) return state;
      const existing = state.find((i) => i.id === product.id);
      if (existing) {
        return state.map((i) =>
          i.id === product.id ? { ...i, quantity: (i.quantity || 1) + qty } : i,
        );
      }
      return [...state, { ...product, quantity: qty }];
    }
    case "INCREMENT":
      return state.map((i) =>
        i.id === action.payload ? { ...i, quantity: (i.quantity || 1) + 1 } : i,
      );
    case "DECREMENT":
      return state
        .map((i) =>
          i.id === action.payload
            ? { ...i, quantity: Math.max((i.quantity || 1) - 1, 0) }
            : i,
        )
        .filter((i) => i.quantity > 0);
    case "REMOVE":
      return state.filter((i) => i.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const toast = useToast();

  const [cartItems, dispatch] = useReducer(reducer, [], () => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return safeParse(stored);
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.error("Error saving cart", err);
      toast.showToast && toast.showToast("No se pudo guardar el carrito.", "error");
    }
  }, [cartItems, toast]);

  // Sync across tabs
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleStorage = (e) => {
      if (!e.key) return;
      if (e.key === STORAGE_KEY) {
        try {
          const parsed = safeParse(e.newValue);
          dispatch({ type: "SET", payload: parsed });
        } catch (err) {
          console.error("Error syncing cart from storage event", err);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = useCallback((product, qty = 1) => {
    if (!product || !product.id) return;
    dispatch({ type: "ADD", payload: { product, qty } });
    toast.showToast && toast.showToast("Producto agregado al carrito.", "success");
  }, [toast]);

  const incrementQuantity = useCallback((id) => {
    dispatch({ type: "INCREMENT", payload: id });
  }, []);

  const decrementQuantity = useCallback((id) => {
    dispatch({ type: "DECREMENT", payload: id });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: "REMOVE", payload: id });
    toast.showToast && toast.showToast("Producto eliminado del carrito.", "info");
  }, [toast]);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
    toast.showToast && toast.showToast("Carrito vaciado.", "info");
  }, [toast]);

  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        itemCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
