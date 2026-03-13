import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import WhatsappOrderButton from "./WhatsappOrderButton";
import Navbar from "./Navbar";
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

  const currency = cartItems[0]?.currency || "UYU";
  const itemsCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(170,12,12,0.1),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.08),_transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(248,113,113,0.16),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(185,28,28,0.22),_transparent_34%)]" />
      <Navbar />
      <main className="site-container flex-grow pt-28 pb-16">
        <div className="relative mx-auto max-w-6xl">
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

          <div className="mb-10 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.6)] backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/70">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
                  Resumen de compra
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-950 dark:text-white">
                  Tu Carrito
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Gestiona tus productos y finaliza tu pedido cuando quieras.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Productos</p>
                  <p className="font-bold text-gray-900 dark:text-white">{itemsCount}</p>
                </div>
                <span className="h-8 w-px bg-gray-200 dark:bg-zinc-700" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Total actual</p>
                  <p className="font-bold text-brand-600 dark:text-brand-400">
                    {formatPrice(totalPrice, currency)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="surface-panel rounded-[2rem] border border-white/70 bg-white/80 p-12 text-center shadow-[0_30px_70px_-40px_rgba(15,23,42,0.65)] backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/70">
              <svg
                className="mx-auto mb-5 h-16 w-16 text-brand-500"
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
                Descubre nuestro catálogo y agrega productos para iniciar tu pedido.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-brand-500 px-6 py-3 font-semibold text-white shadow-[0_18px_32px_-18px_rgba(220,38,38,0.9)] transition hover:-translate-y-0.5 hover:from-red-600 hover:to-brand-600"
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
            <div className="grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
              <section className="space-y-4">
                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_24px_55px_-36px_rgba(15,23,42,0.65)] backdrop-blur-sm transition hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-900/70 sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-2xl border border-gray-100 bg-gray-50 object-contain p-3 dark:border-gray-700 dark:bg-zinc-800"
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

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-zinc-700 dark:hover:border-red-900/40 dark:hover:bg-red-900/20"
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

                    <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                      <div className="inline-flex w-fit items-center rounded-2xl border border-gray-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg font-semibold text-gray-800 transition hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-zinc-800"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                        >
                          −
                        </button>
                        <div className="min-w-12 px-3 text-center font-semibold text-gray-900 dark:text-white">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg font-semibold text-gray-800 transition hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-zinc-800"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-2xl font-bold text-gray-950 dark:text-white">
                          {getCurrencySymbol(item.currency)}
                          {((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {getCurrencySymbol(item.currency)}
                          {(item.price || 0).toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              <aside className="h-fit rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_28px_65px_-36px_rgba(15,23,42,0.68)] backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/75 lg:sticky lg:top-28">
                <h2 className="text-xl font-bold text-gray-950 dark:text-white">
                  Resumen del Pedido
                </h2>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                    <span>Productos ({itemsCount})</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(totalPrice, currency)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                    <span>Envío estimado</span>
                    <span className="font-semibold text-emerald-600">Gratis</span>
                  </div>
                  <div className="h-px bg-gray-200 dark:bg-zinc-700" />
                  <div className="flex items-center justify-between text-lg font-bold text-gray-950 dark:text-white">
                    <span>Total</span>
                    <span className="text-brand-600 dark:text-brand-400">
                      {formatPrice(totalPrice, currency)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-zinc-800">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-red-500 via-brand-500 to-red-400" />
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Tu pedido sera validado por nuestro equipo tecnico antes de coordinar pago y entrega.
                </p>

                <div className="mt-6 space-y-3">
                  <WhatsappOrderButton />
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-100 dark:hover:bg-zinc-800"
                    >
                      Seguir comprando
                    </Link>
                    <button
                      onClick={clearCart}
                      className="rounded-xl bg-gray-200 px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-zinc-700 dark:text-gray-100 dark:hover:bg-zinc-600"
                    >
                      Vaciar carrito
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
