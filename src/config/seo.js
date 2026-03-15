export const SITE_NAME = "NodoX";
export const DEFAULT_SITE_URL = import.meta.env.VITE_SITE_URL || "https://nodoxuy.netlify.app";
export const DEFAULT_OG_IMAGE = "/nodoxred.png";

export function normalizePath(pathname = "/") {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getSiteUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return DEFAULT_SITE_URL.replace(/\/$/, "");
}

export function absoluteUrl(pathname = "/") {
  const base = getSiteUrl().replace(/\/$/, "");
  const path = normalizePath(pathname);
  return `${base}${path}`;
}
