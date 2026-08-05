import productsData from "./products";

let cache = null;

export async function fetchProducts() {
  if (cache) return cache;
  cache = Array.isArray(productsData) ? productsData : [];
  return cache;
}

export async function fetchProductById(id) {
  const products = await fetchProducts();
  return products.find((p) => p.id === Number(id));
}
