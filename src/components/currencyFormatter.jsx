export const formatPrice = (price, currency = 'UYU') => {
  const formatter = new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'es-UY', {
    style: 'currency',
    currency: currency === 'USD' ? 'USD' : 'UYU',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(price);
};

// O si prefieres una solución más simple:
export const getCurrencySymbol = (currency = 'UYU') => {
  return currency === 'USD' ? 'U$S' : '$';
};