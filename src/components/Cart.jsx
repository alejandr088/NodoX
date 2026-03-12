import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import WhatsappOrderButton from "./WhatsappOrderButton";
import {
  getCurrencySymbol,
  formatPrice,
} from "../components/currencyFormatter";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <main className="site-container flex-grow pt-28 pb-16">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <span className="text-gray-500 dark:text-gray-500">/</span>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Productos
                </Link>
              </li>
              <li>
                <span className="text-gray-500 dark:text-gray-500">/</span>
              </li>
              <li
                className="font-medium text-brand-600"
                aria-current="page"
              >
                Carrito
              </li>
            </ol>
          </nav>

          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-950 dark:text-white">
            Tu Carrito
          </h1>

          {cartItems.length === 0 ? (
            <div className="surface-panel rounded-[2rem] p-10 text-center">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="mb-2 text-xl font-medium text-gray-800 dark:text-gray-100">
                Tu carrito está vacío
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Agrega algunos productos para comenzar
              </p>
              <Link
                to="/products"
                className="btn-primary px-6 py-3"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Ver productos
              </Link>
            </div>
          ) : (
            <div className="surface-panel overflow-hidden rounded-[2rem]">
              <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-5 sm:p-7">
                    <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-2xl border border-gray-100 bg-gray-50 object-contain p-3 dark:border-gray-700 dark:bg-slate-800"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/product1.jpg";
                          }}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 max-w-md text-sm leading-6 text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
                        <div className="surface-subtle flex items-center space-x-2 rounded-full p-1">
                          <button
                            onClick={() => decrementQuantity(item.id)}
                            className="rounded-full px-3 py-2 text-gray-800 transition hover:bg-white dark:text-gray-100 dark:hover:bg-slate-700"
                            aria-label={`Disminuir cantidad de ${item.name}`}
                          >
                            −
                          </button>
                          <div className="min-w-10 px-3 py-1 text-center text-gray-800 dark:text-gray-100">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => incrementQuantity(item.id)}
                            className="rounded-full px-3 py-2 text-gray-800 transition hover:bg-white dark:text-gray-100 dark:hover:bg-slate-700"
                            aria-label={`Aumentar cantidad de ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <div className="text-left sm:text-right">
                          <p className="text-lg font-semibold text-gray-950 dark:text-white">
                            {getCurrencySymbol(item.currency)}
                            {((item.price || 0) * (item.quantity || 0)).toFixed(
                              2,
                            )}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {getCurrencySymbol(item.currency)}
                            {(item.price || 0).toFixed(2)} x {item.quantity}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-brand-600"
                          aria-label={`Eliminar ${item.name}`}
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
                              strokeWidth="1.5"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="surface-subtle border-t border-gray-100 p-6 dark:border-gray-800">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Subtotal:
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {formatPrice(totalPrice, cartItems[0]?.currency || "UYU")}
                  </span>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Envío:
                  </span>
                  <span className="font-bold text-emerald-600">
                    Gratis
                  </span>
                </div>
                <div className="mb-6 flex items-center justify-between text-xl font-bold">
                  <span className="text-gray-800 dark:text-gray-100">Total:</span>
                  <span className="text-brand-600">
                    {formatPrice(totalPrice, cartItems[0]?.currency || "UYU")}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-center font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-100 dark:hover:bg-slate-800"
                  >
                    Seguir comprando
                  </Link>
                  <div className="flex gap-2">
                    <button
                      onClick={clearCart}
                      className="w-full rounded-md bg-gray-200 px-4 py-3 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-100 dark:hover:bg-slate-600"
                    >
                      Vaciar carrito
                    </button>
                    <WhatsappOrderButton />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
