import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar cartItems={cartItems} />
      <Hero />
      <Products addToCart={addToCart} />
      <Services />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}
