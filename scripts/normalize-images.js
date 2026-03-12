const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const productsJson = path.join(publicDir, 'products.json');
const fallback = 'product1.jpg';

function main() {
  if (!fs.existsSync(productsJson)) {
    console.error('products.json not found in public/');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(productsJson, 'utf8'));
  const images = new Set(data.map((p) => (p.image || '').replace(/^\//, '')));

  images.forEach((img) => {
    if (!img) return;
    const target = path.join(publicDir, img);
    if (fs.existsSync(target)) {
      console.log(`Exists: ${img}`);
      return;
    }
    const src = path.join(publicDir, fallback);
    if (!fs.existsSync(src)) {
      console.error(`Fallback ${fallback} not found in public/. Cannot create ${img}`);
      return;
    }
    try {
      // Ensure directory exists
      const dir = path.dirname(target);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.copyFileSync(src, target);
      console.log(`Created placeholder: ${img}`);
    } catch (err) {
      console.error(`Failed to create ${img}:`, err.message);
    }
  });
}

main();
