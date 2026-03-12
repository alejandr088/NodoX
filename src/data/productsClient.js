let cache = null;

export async function fetchProducts() {
  if (cache) return cache;
  try {
    const res = await fetch('/products.json');
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    cache = data;
    return data;
  } catch (err) {
    console.error('Error fetching products', err);
    return [];
  }
}

export async function fetchProductById(id) {
  const products = await fetchProducts();
  return products.find((p) => p.id === Number(id));
}
