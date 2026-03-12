import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "./Breadcrumbs";
import { fetchProductById } from "../data/productsClient";
import { getCurrencySymbol } from "../components/currencyFormatter";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProductById(id).then((p) => {
      if (mounted) setProduct(p);
    }).finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 pt-28 pb-12 px-4 text-center text-gray-900 dark:text-gray-100">
        <p>Cargando producto...</p>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 pt-28 pb-12 px-4 text-center text-gray-900 dark:text-gray-100">
        <p>Producto no encontrado</p>
      </div>
    );

  // Breadcrumbs: Inicio > Productos > Nombre del Producto
  const breadcrumbs = [
    { name: "Productos", link: "/products" },
    { name: product.name },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 pt-28 pb-20 px-4">

      <Helmet>
        <title>{product.name} | NodoX</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} | NodoX`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="site-container max-w-6xl">
        <Breadcrumbs paths={breadcrumbs} />

        <section className="surface-panel rounded-[2rem] p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="surface-subtle rounded-[1.5rem] p-6">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="h-auto max-h-[520px] w-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/product1.jpg";
                }}
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
                Producto destacado
              </p>
              <h1 className="mb-4 mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl dark:text-white">
                {product.name}
              </h1>
              <p className="mb-6 text-3xl font-semibold text-gray-950 dark:text-white">
                {getCurrencySymbol(product.currency)}
                {product.price}
              </p>
              <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
              <div className="surface-subtle rounded-2xl p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-950 dark:text-white">
                  Especificaciones:
                </h3>
                <ul className="mb-8 space-y-3 text-gray-700 dark:text-gray-300">
                  {product.description.split(",").map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                      <span>{spec.trim()}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
                  Disponibilidad:
                </h3>
                <p className="font-medium text-emerald-600">
                  En stock
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
